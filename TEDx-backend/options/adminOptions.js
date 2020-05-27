const bcrypt = require('bcrypt');

module.exports = {
	properties: {
		// make the hashed password invisible
		passhash: { isVisible: false },
		// make a virtual property called password which will be hashed 
		password: { 
			type: "password",
			isVisible: { list: false, edit: true, filter: false, show: false },
		}
	},

	actions: {
		new: {
			before: async (request) => {
				try{
					if(request.payload.password) {
             			request.payload = {
                			...request.payload,
                			passhash: await bcrypt.hash(request.payload.password, 10)
              			}
              			delete request.payload.password;
            		}
            		return request;
				} catch(err){
					console.log('\x1b[31mERROR\x1b[0m', err);
				} 
         	}
		},
		edit: {
			before: async (request) => {
				try{
					if(request.payload.password) {
             			request.payload = {
                			...request.payload,
                			passhash: await bcrypt.hash(request.payload.password, 10)
              			}
              			delete request.payload.password;
            		}
            		return request;
				} catch(err){
					console.log('\x1b[31mERROR\x1b[0m', err);
				} 
         	}
		}
	}
}

