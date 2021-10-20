const io = require('socket.io')(3000,{cors: {
    origin: "http://127.0.0.1:5500",
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
	}
  });

io.on('connection',(socket)=>{
	console.log('usuario conectado');
	socket.emit('message','hola mundo');
	socket.on('disconnect',()=>{
		console.log('usuario desconectado');
	});
	socket.on('chatmsg',msg =>{
		io.emit('message', msg);
	})
})