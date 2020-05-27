const mongoose = require('mongoose');
// context (development or production), defaults to production
const context = require('./config')[ process.argv[2] || "production" ]

module.exports = async ()=>{
	try{
		await mongoose.connect(context.url, { useUnifiedTopology: true, useNewUrlParser: true });
		console.log('Connected to \x1b[31m\x1b[47mTEDx\x1b[0m Database');
	} catch(err){
		console.log('\x1b[31mError while connecting to DB\x1b[0m', err);
	}
}