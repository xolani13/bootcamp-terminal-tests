const regCheck = require("../regCheck");
const assert = require ("assert");
const chalk = require("chalk");
describe("This test" , function(){
	it("should return " + chalk.green.bold("true") + " or " + chalk.red.bold("false"), function(){
		assert.equal(false, regCheck("452 542 GP","EC"));

	});
});
