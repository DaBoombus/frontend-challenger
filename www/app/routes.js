angular.module("PaymentRails")
  .config(
    function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise("/home");

      $stateProvider
        .state(
          "home",
          {
            url: "/home",
            templateUrl: "app/templates/home.html"
          }
        );
        
        $stateProvider
        .state(
          "user",
          {
            url: "/user",
            templateUrl: "app/templates/user.html"
          }
        );
    }
  );