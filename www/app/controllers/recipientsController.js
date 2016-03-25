"use strict";
let controller = function(sc, http, q, location,  rs){

    sc.recipients = [];
    
    sc.alert = function(){
       rs.getRecipients(http, q).then(
           function(recipients){
               sc.recipients = recipients
               alert(sc.recipients);
           }
       );
       
       sc.goToRecipientDetails
       //sc.$apply();
   }
   
   sc.recipientDetails = function(userIndex){
       sc.user = sc.recipients[userIndex];
       location.url('/user');
   }
   
   sc.goBack = function(){
       location.url('/home');
   }
};
controller.$inject = ['$scope','$http', '$q', '$location', 'Recipients'];
angular.module("PaymentRails")
  .controller("recipientsController", controller);