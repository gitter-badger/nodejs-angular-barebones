'use strict';
module.exports = {
    'results from google search are proxied': function (test) {
        test
            .open('http://localhost:3000')
            .assert.title('angular barebones')
            .type('#q', 'angularjs')
            .click('#search')
            .waitForElement('.result')
            .assert.text('.result').to.contain('AngularJS — Superheroic JavaScript MVW Framework', 'angularjs official page is displayed as a result')
            .end()
            .done();
    }
};
