var app = angular.module('veranoApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  $scope.timerRunning = true;
	$scope.menuSuperior = 'parciales/menu.html';

	$scope.CurrentDate = new Date();



	$scope.setActive = function(Opcion){

		$scope.mInicio = "";
		$scope.mPasantes = "";


		$scope[Opcion] = "active";
	}

	$scope.mostrar_alerta = function(){
		swal("Listo!", "click en ok para guardar cambios!", "success");
	}

  $scope.timerRunning = true;

  $scope.startTimer = function (){
      $scope.$broadcast('timer-start');
      $scope.timerRunning = true;
  };

  $scope.stopTimer = function (){
      $scope.$broadcast('timer-stop');
      $scope.timerRunning = false;
  };

  $scope.$on('timer-stopped', function (event, args) {
      console.log('timer-stopped args = ', args);
  });





}]);
