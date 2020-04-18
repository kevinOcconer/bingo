var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var UserSchema = new Schema({
	username: {
        type: String,
        trim: true,  
        required: true,
       },
	'number' : {
		type: String,
		required:true
	},
	password: {
        type: String,
        trim: true,
        required: true
       },
	'dpurl' : String,
	'status' : Number
},{timestamps: true});

// hash user password before saving into database
UserSchema.pre('save', function(next){
    console.log({pwd:this.password});
    this.password = bcrypt.hashSync(this.password, SALT_WORK_FACTOR);
    console.log(this.password);
    next();
	});
	

module.exports = mongoose.model('User', UserSchema);
