//Configuraciones para el servidor
var serverConf = require('./config/config');
var express = require('express');
//Se crea el servidor
var app = express();
var server = require('http').Server(app);

var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var cors = require('cors')
//Se importa el logger 
const logger = require('./utils/logger');

/////////////////////////////////////////////////////////////////////////////////////

//Se levanta la coneccion a la bdd
mongoose.connect("mongodb://localhost:27017/galeria"/*, { autoIndex: false }*/).then(
    () => { logger.info('Database connection is successful');console.log() },
    err => { logger.error('Error when connecting to the database' + err) }
);

app.use(cors({
    credentials: true,
  }));
app.use(bodyParser.urlencoded({ extended: false }));
//Le indicamos que las respuestas se deben de mandar en formato JSON
app.use(bodyParser.json());
//Se habilitan las CORS para que no existan errores de cominicacion 
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


var port = process.env.PORT || 4000 ;


const artistsRouter = require('./routes/artists');
const customerRouter = require('./routes/customer');
const transRouter = require('./routes/trans');
const workRouter = require('./routes/work');


app.use('/artists', artistsRouter);
app.use('/customers', customerRouter);
app.use('/transactions', transRouter);
app.use('/works', workRouter);


//Metodo para lanzar la app por el puerto
server.listen(serverConf.port, () => {
    logger.info(`Server running on port ${serverConf.port} ...`);
});
