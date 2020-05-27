const mongoose = require('mongoose');
const emptyCheck = require('../functions/emptyCheck');

const speakerSchema = new mongoose.Schema({
	name: { type: String, required: true },
	year: { type: Number, required: true },
	description: { type: String },
	imageURL: { 
		type: [String], 
		validate: emptyCheck
	}
});

module.exports = mongoose.model('Speaker', speakerSchema);