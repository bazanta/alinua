angular
	.module('signUp')
	.component('signUp', {
		templateUrl: 'sign-up/sign-up.html',
		/**
		 * Controlleur gérant l'inscription
		 */
		controller: function SignUpController($scope,$auth,$location,$http,$window) {
			// Récupérer this dans la variable self
			var self = this;
		}	
	});
