const AdminBro = require('admin-bro');
const mongoose = require('mongoose');
const Blog = require('../models/blog');
// only requiring some functions 
const { join, dirname } = require('path');
const { promises } = require('fs');

module.exports = {
	properties: {
		imageURL: {
			isVisible: { edit: true, list: true, filter: true, show: true }
		},
		content: {
			type: 'richtext',
			isVisible: { edit: true, list: false, filter: true, show: true }
		}
	}
}