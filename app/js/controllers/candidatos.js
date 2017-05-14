var app = angular.module('candidatos',[]);


app.controller('controlCdtos',function ($scope) {
  $scope.candidatos= [
    {
      "cdto_id": "1",
      "pdto_id": "1",
      "cdto_nombre": "Felipe Kast",
      "cdto_cuenta_twitter": "@felipekast",
      "cdto_fecha_nacimiento": "09/06/1977",
      "cdto_edad": "39",
      "cdto_imagen": "http://vignette4.wikia.nocookie.net/althistory/images/b/b0/Felipe_Kast.jpg/revision/latest?cb=20150402072336&path-prefix=es",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "2",
      "pdto_id": "2",
      "cdto_nombre": "Jose Ossandon",
      "cdto_cuenta_twitter": "@mjossandon",
      "cdto_fecha_nacimiento": "24/08/1962",
      "cdto_edad": "54",
      "cdto_imagen": "http://www.nuevopoder.cl/nuevo_sitio/wp-content/uploads/2016/06/Ossandon-Manuel-Jose-La-Naci%C3%B3n.jpg",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "3",
      "pdto_id": "3",
      "cdto_nombre": "Sebastian Piñera",
      "cdto_cuenta_twitter": "@sebastinapinera",
      "cdto_fecha_nacimiento": "01/12/1949",
      "cdto_edad": "67",
      "cdto_imagen": "https://upload.wikimedia.org/wikipedia/commons/4/49/Sebastian_Pinera.JPG",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "4",
      "pdto_id": "4",
      "cdto_nombre": "Beatriz Sanchez",
      "cdto_cuenta_twitter": "@labeasanchez",
      "cdto_fecha_nacimiento": "24/12/1970",
      "cdto_edad": "46",
      "cdto_imagen": "http://www.diarioantofagasta.cl/wp-content/uploads/2017/04/beatrizsanchez.jpg",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "5",
      "pdto_id": "5",
      "cdto_nombre": "Alejandro Guiller",
      "cdto_cuenta_twitter": "@aleguiller",
      "cdto_fecha_nacimiento": "05/03/1953",
      "cdto_edad": "64",
      "cdto_imagen": "http://radio.uchile.cl/wp-content/uploads/2016/08/alejandro-guillier.jpg",
      "cdto_activo": "1"
    },
    {
      "cdto_id": "6",
      "pdto_id": "6",
      "cdto_nombre": "Carolina Goinc",
      "cdto_cuenta_twitter": "@carolinagoic",
      "cdto_fecha_nacimiento": "20/12/1972",
      "cdto_edad": "44",
      "cdto_imagen": "http://3.bp.blogspot.com/-AyVS1TWSll4/Tl7D4cBjMxI/AAAAAAAAHEc/wp8WJXyIcow/s1600/DSC_4182_ok.jpg",
      "cdto_activo": "1"
    }
  ];

  $scope.add=function () {
  	var nuevoCandidato={
  	  "cdto_nombre":$scope.Modelcdto_nombre,
      "pdto_id": $scope.Modelpdto_id,
      "cdto_cuenta_twitter": $scope.Modelcdto_cuenta_twitter,
      "cdto_fecha_nacimiento": $scope.Modelcdto_fecha_nacimiento,
      "cdto_edad":$scope.Modelcdto_edad,
      "cdto_imagen": $scope.Modelcdto_imagen
  	};

  	$scope.candidatos.push(nuevoCandidato);
  	$scope.Modelcdto_nombre='';
  	$scope.Modelpdto_id='';
  	$scope.Modelcdto_cuenta_twitter='';
  	$scope.Modelcdto_fecha_nacimiento='';
  	$scope.Modelcdto_edad='';
  	$scope.Modelcdto_imagen='';
  };

  $scope.delete=function ($index){
  	$scope.candidatos.splice($scope.candidatos.indexOf($index),1);
  };

});