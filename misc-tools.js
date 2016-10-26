const _ = require("lodash");
const request = require("request");
const deasync = require('deasync');

module.exports = {

    get: function (opts, callback) {
        request(opts, callback);
    },

    postJson: function (opts, data, callback) {
        opts.json = true;
        opts.body = data;
        opts.method = "POST";
        //console.log("POST: ",opts);
        request(opts, callback);
    }

};

// deasync exports
_.each(module.exports, function (val, key) {
    if (_.isFunction(val)) {
        module.exports[key+"Sync"] = deasync(val);
        console.log("synchronized: "+key);
    }
});