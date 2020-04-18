var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var GameSchema = new Schema({
	'players' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'status' : Boolean,
	'Winners' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Winner'
	},
	'time ' : Date
});

module.exports = mongoose.model('Game', GameSchema);
