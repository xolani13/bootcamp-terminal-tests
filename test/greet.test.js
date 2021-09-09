const assert = require ("assert");
const greet = require("../greet");
const chalk = require("chalk");

describe(chalk.bold("The greet function"), function(){
	it (chalk.bold.bgGreen("should greet Linda"), function(){
		assert.equal("Hello, Linda", greet("Linda"));
	});
});
