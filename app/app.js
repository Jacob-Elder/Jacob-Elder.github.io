angular.module("MyWebpage", ["ui.router", "ngAnimate"])
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
	}).state("google", {
		url: "/google35e8aaf8817e3e0a.html",
		templateUrl: "app/views/google35e8aaf8817e3e0a.html"
	})

	$locationProvider.html5Mode(true);
}]);