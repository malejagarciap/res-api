const express = require('express'); 
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor');
});

mongoose.connect('mongodb+srv://angelporras556:aSHUkHvUGvj8pBxf@cluster0.klxq7.mongodb.net/Taller?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
    console.log('Sí hay conexión a la BD');
});

app.listen(10000, () => {
    console.log('Servidor corriendo en el puerto 10000');
});