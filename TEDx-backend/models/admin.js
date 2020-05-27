const mongoose = require('mongoose');
const emptyCheck = require('../functions/emptyCheck');

const adminSchema = new mongoose.Schema({
	username: {
		type: String, required: true
	},
	email: {
		type: String, required: true, validate: emptyCheck
	},
	passhash: {
		type: String, required: true
	}
});

module.exports = mongoose.model('Admin', adminSchema);