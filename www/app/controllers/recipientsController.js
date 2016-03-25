"use strict";
/**
 * This controller acts as a global controller for the application and allows
 * to fetch all recipients aswell as view their details
 */
let controller = function(sc, http, q, location,  rs){

    sc.recipients = [];
    
    sc.getRecipients = function(){
       rs.getRecipients(http, q).then(
           function(recipients){
               sc.recipients = recipients
               //console.info(sc.recipients.length);
           }
       );
       
       sc.goToRecipientDetails
       //sc.$apply();
   }
   
   sc.recipientDetails = function(recIndex){
       sc.recipient = sc.recipients[recIndex];
       location.url('/recipient');
   }
   
   sc.isString = function(obj){
       return (typeof obj) == "string";
   }
   
   sc.goBack = function(){
       location.url('/home');
   }
};
controller.$inject = ['$scope','$http', '$q', '$location', 'Recipients'];
angular.module("PaymentRails")
  .controller("recipientsController", controller);