angular
	.module('user')
	.component('user', {
		templateUrl: 'user/user.html',
		/**
		 * Controlleur gérant l'affichage d'un profil publique d'un user
		 * @param $http		ressource permettant l'appel $http
		 * @param User		service dans core/user permettant la gestion des users avec le back
		 */
		controller: ['$http','User', function UserController($http, User) {
			// Récupérer this dans la variable self
			var self = this;

			// Afficher un chargement en attendant les données
			self.loading = true;

			/* Une fois que l'url Back sera ok, il faudra utiliser le service
				this.user = User.query();
			*/
			/**
			 * Méthode de récupération des informations du user depuis un fichier json
			 * Appelée au chargement de la page
			 * @param user/unUser.json	fichier contenant les informations du user
			 */
	        $http.get('user/unUser.json')
	            .then(function(response){
					 // En cas de succès de lecture du fichier
	                self.user = response.data;
	                self.loading = false;
	            }, function(response){
	            	// En cas d'erreur de lecture du fichier
	            	alert(response);
		            self.loading = false;
	            })
	        ;
		}]	
	});
