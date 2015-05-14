var moment = require('moment');
var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');

var outPath = path.join(__dirname, '..', '..', '..', '_posts');

var twitterAccounts = {
  "matt@trabian.com": "trabianmatt",
  "trey@trabian.com": "creeme",
  "brent@trabian.com": "thehabdash"
};

var cleanBody = function(body) {

  return body.replace(/^\t/gm, '').replace('http://cu.trabian.com/trabian/opensourcecu', '/images/legacy', ['g']);

};

exports.import = function(article) {

  var postedDate = moment(article.created_at);

  var datestamp = postedDate.format("YYYY-MM-DD");

  var permalink = datestamp + "-" + article.permalink;

  var header = yaml.dump({
    layout: 'legacy',
    title: article.title,
    excerpt: '',
    author: {
      name: article.name,
      twitter: twitterAccounts[article.email]
    }
  });

  var article = "---\n\n" + header + "---\n\n" + cleanBody(article.body_html);

  var filename = path.join(outPath, permalink) + ".md";

  fs.writeFile(filename, article);

};
