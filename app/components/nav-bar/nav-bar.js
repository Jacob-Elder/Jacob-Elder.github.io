(function(){
	angular.module('MyWebpage')
	.component('navBar', {
		templateUrl: "./app/components/nav-bar/nav-bar.html",
		controller: NavCtrl,
		controllerAs: "NavCtrl"
	});

	function NavCtrl() {
		console.log("NavCtrl loaded!");

		$(".logo").on('click', function() {
			$('html, body').animate({scrollTop:0}, 500);
		})

		$(".about-link").on('click', function() {
			console.log("about-link clicked!");
			$('html, body').animate({ scrollTop:$(".about-section").offset().top - 120}, 1500);
		});

		$(".projects-link").on('click', function() {
			console.log("about-link clicked!");
			$('html, body').animate({ scrollTop:$(".projects-section").offset().top - 100}, 1500);
		});

		$(".skills-link").on('click', function() {
			console.log("about-link clicked!");
			$('html, body').animate({ scrollTop:$("#skills").offset().top - 50}, 1500);
		});

		$(".contact-link").on('click', function() {
			console.log("about-link clicked!");
			$('html, body').animate({ scrollTop:$("#contact").offset().top}, 1500);
		});

		$(".dropdown-toggle").on('click', function() {
			var screenWidth = $(window).width();
			screenWidth = screenWidth - (screenWidth * .2);
			$(".dropdown-menu").css("width", screenWidth);
		});

	}

})()