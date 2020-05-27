const AdminBro = require('admin-bro');
const mongoose = require('mongoose');
const Speaker = require('../models/speaker');
// only requiring some functions 
const { join, dirname } = require('path');
const { promises } = require('fs');

module.exports = {
	properties: {
		imageURL: {
			isVisible: { edit: true, list: true, filter: true, show: true }
		},
		description: {
			type: 'richtext'
		}
	}
	/*, // saving this code for future reference
	actions: {
		new: {
			before: async(request, context) => {
				// if image was uploaded
				if(request.payload.uploadImage){
					// file object
					const { uploadImage } = request.payload;
					// create new id for new record
					let newid = mongoose.Types.ObjectId();
					// add imagelocation to payload
					Object.assign(request.payload, {
						imageLocation: join('uploads', newid.toString(), uploadImage.name)
					});
					try{
						let { name, description, imageLocation } = request.payload;
						// create new record to update imageLocation for
						let newData = new Speaker({
							_id: newid, name, description
						});
						//await newData.save();
						// make directory to save new image
						await promises.mkdir(dirname(imageLocation), { recursive: true });
						// put image into directory
						await promises.rename(uploadImage.path, imageLocation);
					} catch(err){
						console.log('\x1b[31mERROR\x1b[0m', err);
					}
				}
				return request;
			}
		}
	}*/
}