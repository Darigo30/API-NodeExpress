const express = require('express')
const app = express()

//Puerto
const port = process.env.PORT || 3000
	
//Routes
app.use(require('./routes/index'));
app.use(require('./routes/detalle'));

//Inicializa el servidor 3000
app.listen(port)
console.log("El servidor se inicia en el puerto " + port);