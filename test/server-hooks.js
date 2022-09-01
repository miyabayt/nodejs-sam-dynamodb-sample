require('dotenv').config();
var app = require('../app.js');
var server;

exports.mochaHooks = {
    beforeAll() {
        return new Promise((resolve, reject) => {
            server = app.listen(3001, (err) => {
                if (err) { reject(err); }
                console.log('Express server started. [port=%s]', server.address().port);
                resolve();
            });
        });
    },
    afterAll() {
        return new Promise((resolve, reject) => {
            server.close((err) => {
                if (err) { reject(err); }
                console.log('Express server stopped.');
                resolve();
            });
        });
    }
}
