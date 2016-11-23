(function(){
	angular.module('MyWebpage')
	.component("projects", {
		templateUrl: "app/components/projects/projects.html",
		controller: ProjectsCtrl,
		controllerAs: "ProjectsCtrl"
	});

	function ProjectsCtrl() {
		console.log("ProjectsCtrl loaded!");

		$(document).ready(function(){
  			$('.project_carousel').slick({
    			autoplay: true,
    			arrows: true
  			});
		});

	}

})()