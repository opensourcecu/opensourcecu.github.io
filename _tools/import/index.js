var mysql = require('mysql');
var _ = require('lodash');
var articleImporter = require('./lib/article-importer');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'oscu',
  multipleStatements: true
});

connection.connect();

var articlesQuery = 'SELECT contents.id, users.email, users.`name`, contents.title, contents.body_html, contents.created_at, contents.permalink FROM contents INNER JOIN users ON contents.user_id = users.id WHERE contents.published=1 AND contents.type="Article"';

var commentsQuery = 'SELECT author, article_id, body, created_at as date FROM contents WHERE published=1 AND `type`="Comment"';

connection.query(articlesQuery + ";" + commentsQuery, function(err, results) {

  var articles = results[0];
  var comments = results[1];

  var commentsByID = _.groupBy(comments, 'article_id');

  _.forEach(articles, function(article) {

    var comments = commentsByID[article.id.toString()];

    comments = _.map(comments, function(comment) {
      return _.omit(comment, 'article_id');
    });

    articleImporter.import(article, comments);

  });

});

connection.end();
