module.exports = function countRegNumber(stringReg){
	var arrayReg = stringReg.split(',');

	var count = 0;
	for (var i= 0; i<arrayReg.length; i++){
		count++
	};
	return count;
};

