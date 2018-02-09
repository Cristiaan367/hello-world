app.controller('pasantesCtrl', ['$scope',function($scope){
	
	//$scope.setActive("mInicio");

	$scope.personas = [
    {
      nombre: 'Prof. Juan Carlos Castro',
      link: 'https://www.facebook.com/profile.php?id=100006787602587',
      imagen: 'img/fotoPromo.jpg',
      what: '67303171'
    },
    {
      nombre: 'Adan Puma',
      link: 'https://www.facebook.com/adan.puma.3',
      imagen: 'img/puma.jpg',
      what: '79459658'
    },
    {
    	nombre: 'Ruth Huaycho',
    	link: 'https://www.facebook.com/ruth.huaycho',
    	imagen: 'img/ruth.jpg',
    	what: '79176229'
    },
    {
      nombre: 'Aleyda Vargas',
      link: 'https://www.facebook.com/aleyda.vargaspiuca',
      imagen: 'img/aleyda.jpg',
      what: '60485225'
    },
    {
    	nombre: 'Carolina Valencia',
    	link: 'https://www.facebook.com/carolinapatricia.valenciarosales',
    	imagen: 'img/valencia.jpg',
    	what: '79456306'
    },
    {
    	nombre: 'Cristian Fernandez',
    	link: 'https://www.facebook.com/profile.php?id=100004828148526',
    	imagen:'img/fernandez.jpg',
    	what: '72461469'
    },
    {
      nombre: 'Cristian Flores Rodriguez',
      link: 'https://www.facebook.com/cristian.floresrodriguez.3',
      imagen: 'img/cristianfr.jpg',
      what:'79437937'
    }
    

  ];
}]);