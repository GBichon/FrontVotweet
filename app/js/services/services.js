'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('voTweet.services', []).
  value('version', '0.1')

  .factory('listUser',function() {
  	var usuarios=[
    {
      usr_id: "1",
      cdto_id: "1",
      usr_privilegio: "0",
      usr_nombre: 'jose',
      usr_apellido: "quezada",
      usr_correo: "jose.quezada@gmail.com",
      usr_password: "soyjose",
      usr_activo: "NULL",
      usr_fecha_registro: "2017-05-15 04:00:00"
    },
    {
      usr_id: "2",
      cdto_id: "1",
      usr_privilegio: "0",
      usr_nombre: 'maria',
      usr_apellido: "alvarado",
      usr_correo: "lageisha@gmail.com",
      usr_password: "nocobrobarato",
      usr_activo: "NULL",
      usr_fecha_registro: "2017-05-08 03:00:00"
    },
    {
      usr_id: "3",
      cdto_id: "2",
      usr_privilegio: "0",
      usr_nombre: "jeronimo",
      usr_apellido: "acosta",
      usr_correo: "jeroacosta@gmail.com",
      usr_password: "jerosito",
      usr_activo: "NULL",
      usr_fecha_registro: "2017-05-23 04:00:00"
    },
    {
      usr_id: "4",
      cdto_id: "2",
      usr_privilegio: "0",
      usr_nombre: "jasinto",
      usr_apellido: "gatusso",
      usr_correo: "jasintoelgato@gmail.com",
      usr_password: "megustaelwhiskas",
      usr_activo: "NULL",
      usr_fecha_registro: "2017-05-15 04:00:00"
    },
    {
      usr_id: "5",
      cdto_id: "2",
      usr_privilegio: "0",
      usr_nombre: "angela",
      usr_apellido: "colombia",
      usr_correo: "sisicolombia@gmail.com",
      usr_password: "jamesrodriguez",
      usr_activo: "NULL",
      usr_fecha_registro: "2017-05-23 04:00:00"
    }
  ];
  return{
  	getUsers: function(){
  		return usuarios;
  	}
  }
  })
