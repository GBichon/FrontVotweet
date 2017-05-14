var app = angular.module('partidos',[]);


app.controller('controlPdtos',function ($scope) {
  $scope.partidos= [
    {
      "pdto_id": "1",
      "pdto_nombre": "Evopoli",
      "pdto_logo": "https://pbs.twimg.com/profile_images/818478460934955009/qsNXmwAu.jpg",
      "pdto_Descripcion": "Evolucion politica"
    },
    {
      "pdto_id": "2",
      "pdto_nombre": "Independiente",
      "pdto_logo": "http://www.contactox.net/images/big/20150529/2803445.jpg",
      "pdto_Descripcion": "Independiente"
    },
    {
      "pdto_id": "3",
      "pdto_nombre": "RN",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Renovacion Nacional"
    },
    {
      "pdto_id": "4",
      "pdto_nombre": "FR",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Frente Amplio"
    },
    {
      "pdto_id": "5",
      "pdto_nombre": "PS",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Partido Socialista"
    },
        {
      "pdto_id": "6",
      "pdto_nombre": "PDC",
      "pdto_logo": "http://www.diarioelranco.cl/wp-content/uploads/2014/12/Renovacion_Nacional_2005.png",
      "pdto_Descripcion": "Partido Democrata Cristiano"
    }
  ];

  $scope.add=function () {
  	var nuevoPartido={
  	  "pdto_nombre":$scope.Modelpdto_nombre,
      "pdto_id": $scope.Modelpdto_id,
      "pdto_logo": $scope.Modelpdto_logo,
      "pdto_Descripcion": $scope.Modelpdto_Descripcion,
  	};

  	$scope.partidos.push(nuevoPartido);
  	$scope.Modelpdto_nombre='';
  	$scope.Modelpdto_id='';
  	$scope.Modelpdto_logo='';
  	$scope.Modelpdto_Descripcion='';
  };

  $scope.delete=function ($index){
  	$scope.partidos.splice($scope.partidos.indexOf($index),1);
  };

});