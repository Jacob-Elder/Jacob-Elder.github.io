(function(){
	angular.module('MyWebpage')
	.component('skills', {
		templateUrl: "./app/components/skills/skills.html",
		controller: SkillsCtrl,
		controllerAs: "SkillsCtrl"
	});

	function SkillsCtrl() {
		console.log("SkillsCtrl loaded!");

	}

})()