"use strict";
/**
 * This controller acts as a global controller for the application and allows
 * to fetch all recipients aswell as view their details
 */
let controller = function(sc, http, q, location,  rs){

    sc.recipients = [];
    /**
     * This method gets all recipients from the front end and assigs them
     * to $scope.recipients by using the Recipients service
     */
    sc.getRecipients = function(){
       rs.getRecipients(http, q).then(
           function(recipients){
               sc.recipients = recipients;
               console.info(sc.recipients.length + " recipients found");
           }
       );
       
       sc.goToRecipientDetails
   }
   
   /**
    * This function redirects to recipient details page and selects a recipient to "focus"
    * in order to render the recipients page
    */
   sc.recipientDetails = function(recIndex){
       sc.recipient = sc.recipients[recIndex];
       console.info("Recipient Selected ID: " + sc.recipient.id);
       location.url('/recipient');
   }
   /**
    * This is a utility function used to help render the recipient details page
    */
   sc.isString = function(obj){
       return (typeof obj) == "string";
   }

   /**
    * This function is used to redirect from the recipient details page to the home page
    */
   sc.goBack = function(){
       location.url('/home');
   }
};
/**
 * $scope: used for scope varriables across the app 
 * $http: used for the AJAX request
 * $q: used to asyncronously return from the recipients service 
 * $location: used to navigate to the recipient page 
 */
controller.$inject = ['$scope','$http', '$q', '$location', 'Recipients'];
angular.module("PaymentRails")
  .controller("recipientsController", controller);