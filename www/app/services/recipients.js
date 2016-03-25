"use strict";

/**
 * This service fetches all recipients from the node js server using ajax and returns them 
 * once they have been recieved
 */
let service = () => {
  return {
    /**
     * This function calls the back end in order to get a list of all recipients
     * that it then returns as a deffered object promise in order to allow a page
     * to render the results once they have been retrieved
     * 
     * it requires the $http object to make the ajax call and the $q object to
     */
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