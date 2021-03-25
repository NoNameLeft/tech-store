const config = {
    development: {
        port: process.env.PORT || 5000,
        dbUrl: 'mongodb://localhost/TechStore',
        cookie_name: 'x-auth-token',
        secret: 'a69c2672-fb78-4244-ae04-f8293396be44',
        saltRounds: 12
    },
    production: {}
};

module.exports = config[process.env.NODE_ENV.trim()];