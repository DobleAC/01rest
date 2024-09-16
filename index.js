const express = require('express');
const bodyParser = require('body-parser');
const taskRouters = require('./routes/taskRoutes');

const app = express();//inicializar express
app.use(bodyParser.json());//middleware

app.use('/task',taskRouters);//cargar las rutas

const PORT =  3000;//puerto de escucha
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
