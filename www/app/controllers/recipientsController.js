"use strict";
let controller = function(sc, http, q,  rs){

    sc.recipients = [];
    
    sc.alert = function(){
       rs.getRecipients(http, q).then(
           function(recipients){
               sc.recipients = recipients
               alert(sc.recipients);
           }
       );
       
       //sc.$apply();
   }
};
controller.$inject = ['$scope','$http', '$q', 'Recipients'];
angular.module("PaymentRails")
  .controller("recipientsController", controller);