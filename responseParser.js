var xpath = require('xpath');
var domParser = require('xmldom').DOMParser;
var _ = require('lodash');

var responseParser = {
    parse: function (html) {
        var doc = new domParser().parseFromString(html);
        var resultNodes = xpath.select("//h3[@class='r']/a/text()", doc);
        var results = _.map(resultNodes, function(result) { return { text: result.data}});
        return { results: results };
    }
};

module.exports = responseParser;
