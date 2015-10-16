var conf = require('../config.js').database;

exports.db = require('./data/' + conf.type + '.js').db;
