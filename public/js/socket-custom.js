var socket = io();

        //"on" es para escuchar sucesos
        socket.on('connect', function(){
            console.log('Conectado...')
        });

        socket.on('disconnect', function(){

            console.log('Conección perdida con el servidor')

        });

        //"emit" es para enviar informacion
        socket.emit('enviarMensaje', {
            usuario: 'Pedro',
            mensaje: 'Hola Mundo'
        }, function(resp){
            console.log('Respuesta server', resp)
        });

        //Escuchar información
        socket.on('enviarMensaje', function(mensaje){

            console.log('Servidor:', mensaje);

        })