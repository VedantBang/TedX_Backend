const mongoose = require('mongoose');
const emptyCheck = require('../functions/emptyCheck');

const organizerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	role: { type: String },
	imageURL: { 
		type: [String], 
		validate: emptyCheck
	},
	facebook: { type: String },
	instagram: { type: String },
	email: { type: String }
});

module.exports = mongoose.model('Organizer', organizerSchema);