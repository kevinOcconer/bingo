var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var PrizesSchema = new Schema({
	'PrizeType' : Number,
	'amount' : Number
});

module.exports = mongoose.model('Prizes', PrizesSchema);
