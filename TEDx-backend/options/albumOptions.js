const AdminBro = require('admin-bro');
const mongoose = require('mongoose');
const Album = require('../models/album');
// only requiring some functions 
const { join, dirname } = require('path');
const { promises } = require('fs');

module.exports = {
	properties: {
		imageURL: {
			isVisible: { edit: true, list: false, filter: true, show: true }
		}
	},
}