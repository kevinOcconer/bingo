var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var TicketSchema = new Schema({
	'matrix' : Array
});

module.exports = mongoose.model('Ticket', TicketSchema);
