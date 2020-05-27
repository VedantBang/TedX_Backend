const express = require('express');
const router = express.Router();
const Album = require('../models/album');

router.get('/', async (req,res,next)=>{
	try{
		let albums = await Album.find({});
		let data = [];
		if(albums.length > 0){
			data = albums.map(album => Object.assign({link:`/api/albums/${album._id}`}, album._doc));
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

router.get('/:albumId', async (req,res,next)=>{
	try{
		let album = await Album.findOne({ _id: req.params.albumId });
		if(album){
			res.status(200).json({
				success: true,
				data: album
			});
		} else {
			res.status(404).json({
				success: false,
				message: "album not found"
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