// test for empty strings in the array
const emptyCheck = function(input){
	for(let x = 0; x < input.length; x++){
		if(!(input[x].replace(/\s/g, '').length)) return false;
	} return true;
}

module.exports = emptyCheck;