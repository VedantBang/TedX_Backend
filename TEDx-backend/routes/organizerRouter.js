const express = require('express');
const router = express.Router();
const Organizer = require('../models/organizer');

router.get('/', async (req,res,next)=>{
	try{
		let organizers = await Organizer.find({});
		let data = [];
		if(organizers.length > 0){
			data = organizers.map(organizer => Object.assign({link:`/api/organizers/${organizer._id}`}, organizer._doc));
			data.forEach(elem => { delete elem.__v; });
		}
		res.status(200).json({
			success: true,
			data
		});
	} catch(err){
		console.log('\x1b[31mERROR\x1b[0m', err);
	}
});

router.get('/:organizerId', async (req,res,next)=>{
	try{
		let organizer = await Organizer.findOne({ _id: req.params.organizerId });
		if(organizer){
			res.status(200).json({
				success: true,
				data: organizer
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Organizer not found"
			});
		}
	} catch(err){
		console.log('\x1b[31mERROR\x1b[0m', err);
		res.status(404).json({
			success: false,
			message: "Organizer not found"
		});
	}
});

module.exports = router;