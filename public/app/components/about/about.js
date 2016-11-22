(function(){
	angular.module('MyWebpage')
	.component("about", {
		templateUrl: "app/components/about/about.html",
		controller: AboutCtrl,
		controllerAs: "AboutCtrl"
	});

	function AboutCtrl() {
		console.log("AboutCtrl loaded!");
	}

})()