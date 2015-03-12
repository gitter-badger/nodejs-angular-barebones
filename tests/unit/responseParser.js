var responseParser = require('../../responseParser');
var chai = require('chai');
var expect = chai.expect;

describe('response parser', function () {
    it('parser google response html into list of objects', function () {
        var angular = 'AngularJS — Superheroic JavaScript MVW Framework';
        var res = responseParser
        .parse('<div><h3 class="r"><a>' + angular + '</a></h3><h3 class="r"><a>test</a></h3></div>');
        expect(res.results[0].text).to.equal(angular);
        expect(res.results[1].text).to.equal('test');
    });
});
