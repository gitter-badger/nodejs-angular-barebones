'use strict';
module.exports = {
    'angular application should be running': function (test) {
        test
            .open('http://localhost:3000')
			.assert.title('angular barebones')
            .done();
    }
};