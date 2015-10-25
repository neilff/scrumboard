var conf = require('../../config.js').database;

var     redis = require("redis"),
  redisClient = null; //redis.createClient();

var async = require("async");
var sets = require('simplesets');

// If you want Memory Store instead...
// var MemoryStore = require('connect/middleware/session/memory');
// var session_store = new MemoryStore();

var REDIS_PREFIX = '#scrumblr#';

//For Redis Debugging


var db = function(callback) {
	console.log('Opening redis connection to ' + conf.host + ':' + conf.port);
	redisClient = redis.createClient(conf.port, conf.host, {});
	redisClient.on("connect", function (err) {
		callback();
	});

	redisClient.on("error", function (err) {
		console.log("Redis error: " + err);
	});

};

db.prototype = {
	clearRoom: function(room, callback) {
		redisClient.del(REDIS_PREFIX + '-room:' + room + '-cards', function (err, res) {
			callback();
		});
	},

	// theme commands
	setSettings: function(room, settings) {
		settings = JSON.stringify(settings);
		redisClient.set(REDIS_PREFIX + '-room:' + room + '-settings', settings);
	},

	getSettings: function(room, callback) {
		redisClient.get(REDIS_PREFIX + '-room:' + room + '-settings', function (err, res) {
			if (res !== null) {
				res = JSON.parse(res);
			}

			callback(res);
		});
	},

	// Column commands
	createColumn: function(room, name, callback) {
		redisClient.rpush(REDIS_PREFIX + '-room:' + room + '-columns', name,
			function (err, res) {
	if (typeof callback != "undefined" && callback !== null) callback();
			}
		);
	},

	getAllColumns: function(room, callback) {
		redisClient.lrange(REDIS_PREFIX + '-room:' + room + '-columns', 0, -1, function(err, res) {
			callback(res);
		});
	},

	deleteColumn: function(room) {
		redisClient.rpop(REDIS_PREFIX + '-room:' + room + '-columns');
	},

	setColumns: function(room, columns) {
		//1. first delete all columns
		redisClient.del(REDIS_PREFIX + '-room:' + room + '-columns', function () {
			//2. now add columns for each thingy
			async.forEachSeries(
				columns,
				function( item, callback ) {
					//console.log('rpush: ' + REDIS_PREFIX + '-room:' + room + '-columns' + ' -- ' + item);
					redisClient.rpush(REDIS_PREFIX + '-room:' + room + '-columns', item,
						function (err, res) {
							callback();
						}
					);
				},
				function() {
					//this happens when the series is complete
				}
			);
		});
	},

	// Card commands
	createCard: function(room, id, card) {
		var cardString = JSON.stringify(card);
		redisClient.hset(
			REDIS_PREFIX + '-room:' + room + '-cards',
			id,
			cardString
		);
	},

	getAllCards: function(room, callback) {
		redisClient.hgetall(REDIS_PREFIX + '-room:' + room + '-cards', function (err, res) {

			var cards = [];

			for (var i in res) {
				cards.push( JSON.parse(res[i]) );
			}
			//console.dir(cards);

			callback(cards);
		});
	},

	getCard: function(room, id, callback) {
		redisClient.hget(REDIS_PREFIX + '-room:' + room + '-cards', id, function(err, res) {
			var card = JSON.parse(res);
			callback(card);
		});
	},

	cardEdit: function(room, id, text) {
		redisClient.hget(REDIS_PREFIX + '-room:' + room + '-cards', id, function(err, res) {
			var card = JSON.parse(res);
			if (card !== null) {
				card.text = text;
				redisClient.hset(REDIS_PREFIX + '-room:' + room + '-cards', id, JSON.stringify(card));
			}
		});
	},

	cardUpdateVotes: function(room, cardId, clientId, direction, callback) {
		redisClient.hget(REDIS_PREFIX + '-room:' + room + '-cards', cardId, function(err, res) {
			let card = JSON.parse(res);

			if (card !== null) {
				if (!card.votes[clientId]) {
					card.votes[clientId] = 0;
				}

	      if (direction === 'inc') {
	      	card.votes[clientId] += 1;
	      }

	      if (direction === 'dec') {
	      	if (card.votes[clientId] > 1) {
	      		card.votes[clientId] -= 1;
	      	} else {
	      		delete card.votes[clientId];
	      	}
	      }

	      console.log('voted card :: ', card);

	      card = JSON.stringify(card);

				redisClient.hset(REDIS_PREFIX + '-room:' + room + '-cards', cardId, card, function() {
					callback(card);
				});
			}
		});
	},

	cardSetXY: function(room, id, x, y) {
		redisClient.hget(REDIS_PREFIX + '-room:' + room + '-cards', id, function(err, res) {
			var card = JSON.parse(res);
			if (card !== null) {
				card.x = x;
				card.y = y;
				redisClient.hset(REDIS_PREFIX + '-room:' + room + '-cards', id, JSON.stringify(card));
			}
		});
	},

	deleteCard: function(room, id) {
		redisClient.hdel(
			REDIS_PREFIX + '-room:' + room + '-cards',
			id
		);
	},

	addSticker: function(room, id, stickerId) {
		redisClient.hget(REDIS_PREFIX + '-room:' + room + '-cards', id, function(err, res) {
			var card = JSON.parse(res);
			if (card !== null) {
                if (stickerId === "nosticker")
                {
                    card.sticker = null;

                    redisClient.hset(REDIS_PREFIX + '-room:' + room + '-cards', id, JSON.stringify(card));
                }
                else
                {
                    if (card.sticker !== null)
                        stickerSet = new sets.Set( card.sticker );
                    else
                        stickerSet = new sets.Set();

                    stickerSet.add(stickerId);

                    card.sticker = stickerSet.array();

                    redisClient.hset(REDIS_PREFIX + '-room:' + room + '-cards', id, JSON.stringify(card));
                }

			}
		});
	},

	setBoardSize: function(room, size) {
		redisClient.set(REDIS_PREFIX + '-room:' + room + '-size', JSON.stringify(size));
	},

	getBoardSize: function(room, callback) {
		redisClient.get(REDIS_PREFIX + '-room:' + room + '-size', function (err, res) {
			callback(JSON.parse(res));
		});
	}

};
exports.db = db;
