const assert = require ("assert");
const From = require("../isFromBellville");
const chalk = require("chalk");

describe(chalk.bold("This test"), function(){
        it ("should be returning " + chalk.bgGreen("true"), function(){
                assert.equal(false, From("CY"));
        });
});

