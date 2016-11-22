(function(){
	angular.module('MyWebpage')
	.component("navbar", {
		templateUrl: "app/components/nav_bar/nav_bar.html",
		controller: NavBarCtrl,
		controllerAs: "NavBarCtrl"
	});

	function NavBarCtrl() {
		console.log("NavBarCtrl loaded!");
	}

})()