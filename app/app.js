angular.module("MyWebpage", ["ui.router"])
.config(["$stateProvider", "$urlRouterProvider", "$locationProvider", '$httpProvider', function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
			$urlRouterProvider.otherwise("/");

	$stateProvider
	.state("home", {
		url: "/",
		templateUrl: "app/views/home.html"
	})
	.state("resume", {
		url: "/resume",
		templateUrl: "app/views/resume.html"
	})

	$locationProvider.html5Mode(true);
}]);