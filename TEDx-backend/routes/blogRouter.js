const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');

router.get('/', async (req,res,next)=>{
	try{
		let blogs = await Blog.find({});
		let data = [];
		if(blogs.length > 0){
			data = blogs.map(blog => Object.assign({link:`/api/blogs/${blog._id}`}, blog._doc));
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

router.get('/:blogId', async (req,res,next)=>{
	try{
		let blog = await Blog.findOne({ _id: req.params.blogId });
		if(blog){
			res.status(200).json({
				success: true,
				data: blog
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Blog not found"
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