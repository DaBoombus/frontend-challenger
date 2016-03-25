"use strict";
/**
 * Todo: implement
 * recipients endpoint url: /api/recipients
 */
/**
 * This service fetches all recipients from the node js server using ajax and returns them 
 * once they have been recieved
 */
let service = () => {
  return {
    
    getRecipients : function(http, q){
        console.info("Entered the getRecipient method");
        var deffered = q.defer();
        http({method: 'GET',
                url: "/api/recipients"}).then(
                    function successCallback(response){
                        
                        deffered.resolve(response.data.records);
                    },
                    function errorCallback(respone){
                        console.error("Error getting response from server, error code: " 
                            + response.status );
                        deffered.reject("Error with response, error code: " + respone.status);
                    }
                )
        return deffered.promise;
    }
    
    
    
  };
};

angular.module("PaymentRails")
  .factory("Recipients", service);