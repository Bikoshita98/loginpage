var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var UserSchema = new Schema({
	name:   {type: String, required: true, maxLength: 100},
	 email: { type: String, required: true, maxLength: 100},

});

//var UserModel=mongoose.model('UserModel',UserSchema);

var record = new UserModel({
	name:'Bikoshita',
	email:'b@gmail.com' 

});

record.save(function (err) {
	if (err) return handleError(err);
});


var User = module.exports = mongoose.model('UserModel',userSchema);
