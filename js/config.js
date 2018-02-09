app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/inicio.html',
			controller: 'inicioCtrl'
		})
		.when('/perfiles',{
			templateUrl: 'parciales/perfiles.html',
			controller: 'perfilesCtrl'
		})
		.when('/platos',{
			templateUrl: 'parciales/platos.html',
			controller: 'platosCtrl'
		})
		.when('/plato',{
			templateUrl: 'parciales/plato.html',
			controller: 'platoCtrl'
		})
		.when('/acerca',{
			templateUrl: 'parciales/acerca.html',
			controller: 'acercaCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
