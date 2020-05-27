const mongoose = require('mongoose');
const emptyCheck = require('../functions/emptyCheck');

const albumSchema = new mongoose.Schema({
	name: { type: String, required: true },
	imageURL: { 
		type: [String],
		validate: emptyCheck
	}
});

module.exports = new mongoose.model('Album', albumSchema);