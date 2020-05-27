const AdminBro = require('admin-bro');
const mongoose = require('mongoose');
const Organizer = require('../models/organizer');
// only requiring some functions 
const { join, dirname } = require('path');
const { promises } = require('fs');

module.exports = {
	properties: {
		imageURL: {
			isVisible: { edit: true, list: true, filter: true, show: true }
		}
	}
}