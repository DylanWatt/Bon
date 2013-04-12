var io = require('socket.io').listen(8089);
io.set('log level', 1)
io.sockets.on('connection', function (socket) {

	socket.on('message',function(data)
		{
		console.log(data.message);
		data.from = socket.handshake.address.address;
		socket.broadcast.emit('message', data)
		}
	 )

});