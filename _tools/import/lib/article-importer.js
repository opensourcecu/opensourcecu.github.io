var moment = require('moment');
var fs = require('fs');
var path = require('path');
var yaml = require('js-yaml');
var _ = require('lodash');

var outPath = path.join(__dirname, '..', '..', '..', '_posts');

var authors = {
  "matt@trabian.com": {
    twitter: "trabianmatt",
    bio: "Founder and CEO of Trabian",
    image: "authors/matt.png"
  },
  "trey@trabian.com": {
    twitter: "creeme",
    bio: "Cofounder and COO of Trabian",
    image: "authors/trey.png"
  },
  "brent@trabian.com": {
    twitter: "thehabdash",
    image: "authors/brent.png",
    bio: "Artist, Designer, Educator"
  }
};

var cleanBody = function(body) {

  return body.replace(/^\s*/gm, '').replace('http://cu.trabian.com/trabian/opensourcecu', '/images/legacy', ['g']);

};

exports.import = function(article, comments) {

  var postedDate = moment(article.created_at);

  var datestamp = postedDate.format("YYYY-MM-DD");

  var permalink = datestamp + "-" + article.permalink;

  var author = _.extend({
    name: article.name
  }, authors[article.email] || {});

  var headerData = {
    layout: 'post',
    title: article.title,
    excerpt: '',
    legacy: true,
    author: author
  };

  if (comments && comments.length) {
    headerData.comments = comments;
  }

  var header = yaml.dump(headerData);

  var article = "---\n\n" + header + "---\n\n" + cleanBody(article.body_html);

  var filename = path.join(outPath, permalink) + ".md";

  fs.writeFile(filename, article);

};
