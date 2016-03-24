"use strict";
/**
 * Todo: implement
 * recipients endpoint url: /api/recipients
 */

let service = () => {
  return {
    
    getRecipients : function(http, q){
        alert("hello world");
        var deffered = q.defer();
        http({method: 'GET',
                url: "/api/recipients"}).then(
                    function successCallback(response){
                        //alert(response.data);
                        deffered.resolve(response.data.records);
                    },
                    function errorCallback(respone){
                        alert(response);
                        return "error";
                    }
                )
        return deffered.promise;
    }
    
    
  };
};

angular.module("PaymentRails")
  .factory("Recipients", service);