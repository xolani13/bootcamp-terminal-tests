const countRegNumber = require("../countRegNumber");
const assert = require("assert");

describe('this test', function () {
    it('should be returning 4', function () {
        assert.equal(4, countRegNumber('CA 182736,CY 523519,CJ 812328, CK 547562'));
   });

});
