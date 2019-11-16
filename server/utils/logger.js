//Configurando el logger
const log4js = require('log4js');
log4js.configure({
    appenders: {
        out: { type: 'stdout' },
        app: { type: 'file', filename: 'application.log' }
    },
    categories: {
      default: { appenders: [ 'out', 'app' ], level: 'all' }
    }
});
const logger = log4js.getLogger('server.js');
//Se habilita para todos los niveles
logger.level = 'all';

module.exports = logger;