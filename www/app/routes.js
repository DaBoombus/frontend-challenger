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
    }
  );