'use strict';
module.exports = {
    'results from google search are proxied': function (test) {
      	test
   	.open('http://localhost:3000')
	.assert.title('angular barebones')
	.type('#q', 'angularjs')
	.click('#search')
	.assert.chain()
		.exists('.result', 'results have been populated')
		.text('.result a:first').to.contain('AngularJS — Superheroic JavaScript MVW Framework', 'angularjs official page is first result')
	.end()
        .done();
    }
};
