var app=angular.module('graficaApp',[])

.controller('mainCtrl',['$scope',function ($scope) {

	$scope.data=[
		{value: 30, label: 'Sebastian Piñera'},
		{value: 31, label: 'Alejandro Guiller'},
		{value: 5, label: 'Felipe Kast'},
		{value: 14, label: 'Manuel José Ossandon'},
		{value: 10, label: 'Beatriz Sanchez'},
		{value: 10, label: 'Carolina Goic'}
	];

	var dona=Morris.Donut({
	element:'graph',
	data:[{}],
  	formatter: function (x) { return x + "%"}
	});

	function actualizar_grafico(){
		dona.setData($scope.data);
	};

	actualizar_grafico()

}]);
