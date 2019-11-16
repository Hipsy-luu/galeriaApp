//Configuraciones para el servidor
var serverConf = require('./config/config');
var express = require('express');
//Se crea el servidor
var app = express();
var server = require('http').Server(app);

var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
//Se importa el logger 
const logger = require('./utils/logger');

/////////////////////////////////////////////////////////////////////////////////////

//Se levanta la coneccion a la bdd
mongoose.connect("mongodb://localhost:27017/galeria"/*, { autoIndex: false }*/).then(
    () => { logger.info('Database connection is successful');console.log() },
    err => { logger.error('Error when connecting to the database' + err) }
);


app.use(bodyParser.urlencoded({ extended: false }));
//Le indicamos que las respuestas se deben de mandar en formato JSON
app.use(bodyParser.json());
//Se habilitan las CORS para que no existan errores de cominicacion 
app.use(cors());

var port = process.env.PORT || 4000 ;


//Schemas para el manejo de las colecciones
const Artist = require('./models/artist.schema');
//Ayuda para controlar el valor del index aunque no era requerido
const indexController = require('./utils/indexes');
//Controlador para enviar la respuesta del servidor
const responsesController = require('./utils/ServerResponse')

//Rutas
var router = express.Router();

//Creating a Todo: Express.js POST Route Example

//Ejemplo del Trigger simulado para mongo (Hacer para todas las colecciones 
//en los id importados Cuidado con el numero de id que va realmente en la coleccion  )
router.route('/create').post((req, res) => {
    //Obteniendo el artistid actual de los artistas
    indexController.getActualIndex(0)
    .then((actualIndex) => {
        //Este es el id para el nuevo elemento en la coleccion de artistas
        req.body.artistid = actualIndex.current_id;
        var todo = new Artist(req.body);
        todo.save()
        .then(todo => {
            const messageResponse = responsesController.returnSuccessMessage(response,todo);
            logger.debug(messageResponse.message);
            res.status(200).json(messageResponse);
        })
        .catch(err => {
            const messageResponse = responsesController.returnErrorMessage(
                err.errors.type.message,{});
            logger.error(messageResponse.message);
            res.status(400).send(messageResponse);
        });
    });
    
});


app.use('/', router);

//Metodo para lanzar la app por el puerto
server.listen(serverConf.port, () => {
    logger.info(`Server running on port ${serverConf.port} ...`);
});
