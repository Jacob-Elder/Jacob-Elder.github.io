(function(){
	angular.module('MyWebpage')
	.component('contact', {
		templateUrl: "app/components/contact/contact.html",
		controller: ContactCtrl,
		controllerAs: "ContactCtrl"
	})

	function ContactCtrl() {
		console.log("ContactCtrl loaded!")
	}

})()