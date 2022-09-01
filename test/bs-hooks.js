require('dotenv').config();
var browserstack = require('browserstack-local');
var local;

exports.mochaHooks = {
    beforeAll() {
        local = new browserstack.Local();
        var options = {
            key: process.env.BROWSERSTACK_ACCESS_KEY,
            force: true,
            forceLocal: true,
            verbose: true
        }
        return new Promise((resolve, reject) => {
            local.start(options, (err) => {
                if (err) { reject(err); }
                console.log("BrowserStackLocal started.");
                resolve();
            });
        })
    },
    afterAll() {
        return new Promise((resolve, reject) => {
            local.stop((err) => {
                if (err) { reject(err); }
                console.log('BrowserStackLocal stopped.');
                resolve();
            });
        });
    }
}
