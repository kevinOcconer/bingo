var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var WinnerSchema = new Schema({
	'player' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'User'
	},
	'type' : Number
});

module.exports = mongoose.model('Winner', WinnerSchema);
