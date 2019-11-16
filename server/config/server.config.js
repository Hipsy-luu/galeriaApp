const SERVER_ENV = {
    'production': { port: process.env.SERVER_PORT },
    'development': { port: 4000 }
};

module.exports = SERVER_ENV;