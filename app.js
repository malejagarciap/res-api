const express = require('express'); 
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

app.get('/', (req, res) => {
    res.send('Prueba 1 respuesta del servidor');
});

mongoose.connect(
    'mongodb+srv://mariaalejita03:vHOVlbandQ3ccHbU@cluster0.xvlpbou.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log('Sí hay conexión a la BD'))
.catch(err => console.error('Error de conexión a BD:', err));

app.listen(10000, () => {
    console.log('Servidor corriendo en el puerto 10000');
});