(function(){
	angular.module('MyWebpage')
	.component('projects', {
		templateUrl: "app/components/projects/projects.html",
		controller: ProjectsCtrl,
		controllerAs: "ProjectsCtrl"
	})

	function ProjectsCtrl() {}

})()