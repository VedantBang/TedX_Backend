const express = require('express');
const router = express.Router();
const Speaker = require('../models/speaker');

router.get('/', async (req,res,next)=>{
	try{
		let speakers = await Speaker.find({});
		let data = [];
		if(speakers.length > 0){
			data = speakers.map(speaker => Object.assign({link:`/api/speakers/${speaker._id}`}, speaker._doc));
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

router.get('/:speakerId', async (req,res,next)=>{
	try{
		let speaker = await Speaker.findOne({ _id: req.params.speakerId });
		if(speaker){
			res.status(200).json({
				success: true,
				data: speaker
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Speaker not found"
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