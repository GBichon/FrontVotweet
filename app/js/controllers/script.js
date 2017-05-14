var app = angular.module('voTweet',[]);

app.controller('controlUsr',function($scope,$http){
	$scope.importar=function () {
		$http.get('conexion/listarUsuarios.php').success(function(datos){
			$scope.personas=datos;
		});
	}

	$scope.importar();

});

app.controller('listUsuariosCtrl',function ($scope) {
  $scope.usuarios= [
    {
      "usr_id": "1",
      "cdto_id": "1",
      "usr_privilegio": "0",
      "usr_nombre": "jose",
      "usr_apellido": "quezada",
      "usr_correo": "jose.quezada@gmail.com",
      "usr_password": "soyjose",
      "usr_activo": "NULL",
      "usr_fecha_registro": "2017-05-15 04:00:00"
    },
    {
      "usr_id": "2",
      "cdto_id": "1",
      "usr_privilegio": "0",
      "usr_nombre": "maria",
      "usr_apellido": "alvarado",
      "usr_correo": "lageisha@gmail.com",
      "usr_password": "nocobrobarato",
      "usr_activo": "NULL",
      "usr_fecha_registro": "2017-05-08 03:00:00"
    },
    {
      "usr_id": "3",
      "cdto_id": "2",
      "usr_privilegio": "0",
      "usr_nombre": "jeronimo",
      "usr_apellido": "acosta",
      "usr_correo": "jeroacosta@gmail.com",
      "usr_password": "jerosito",
      "usr_activo": "NULL",
      "usr_fecha_registro": "2017-05-23 04:00:00"
    },
    {
      "usr_id": "4",
      "cdto_id": "2",
      "usr_privilegio": "0",
      "usr_nombre": "jasinto",
      "usr_apellido": "gatusso",
      "usr_correo": "jasintoelgato@gmail.com",
      "usr_password": "megustaelwhiskas",
      "usr_activo": "NULL",
      "usr_fecha_registro": "2017-05-15 04:00:00"
    },
    {
      "usr_id": "5",
      "cdto_id": "2",
      "usr_privilegio": "0",
      "usr_nombre": "angela",
      "usr_apellido": "colombia",
      "usr_correo": "sisicolombia@gmail.com",
      "usr_password": "jamesrodriguez",
      "usr_activo": "NULL",
      "usr_fecha_registro": "2017-05-23 04:00:00"
    }
  ];

  $scope.add=function () {
  	var nuevoUsuario={
  	  "usr_id":$scope.Modelusr_id,
      "cdto_id": $scope.Modelcdto_id,
      "usr_privilegio": $scope.Modelusr_privilegio,
      "usr_nombre": $scope.Modelusr_nombre,
      "usr_apellido":$scope.Modelusr_apellido,
      "usr_correo": $scope.Modelusr_correo,
      "usr_password":$scope.Modelusr_password,
      "usr_activo": "NULL",
      "usr_fecha_registro": "2017-05-23 04:00:00"
  	};

  	$scope.usuarios.push(nuevoUsuario);
  	$scope.Modelusr_id='';
  	$scope.Modelcdto_id='';
  	$scope.Modelusr_privilegio='';
  	$scope.Modelusr_nombre='';
  	$scope.Modelusr_apellido='';
  	$scope.Modelusr_correo='';
  	$scope.Modelusr_password='';
  };

  $scope.delete=function ($index){
  	$scope.usuarios.splice($scope.usuarios.indexOf($index),1);
  };

});