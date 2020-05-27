const mongoose = require('mongoose');
const emptyCheck = require('../functions/emptyCheck');

const blogSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String },
	content: { type: String },
	imageURL: {
		type: [String],
		validate: emptyCheck
	}
});

module.exports = mongoose.model('Blog', blogSchema);