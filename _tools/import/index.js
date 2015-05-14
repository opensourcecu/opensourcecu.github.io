var mysql = require('mysql');
var _ = require('lodash');
var articleImporter = require('./lib/article-importer')

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'oscu'
});

connection.connect();

var contentsQuery = 'SELECT users.email, users.`name`, contents.title, contents.body_html, contents.created_at, contents.permalink FROM contents INNER JOIN users ON contents.user_id = users.id WHERE contents.published=1 AND contents.type="Article"'

connection.query(contentsQuery, function(err, results) {
  _.forEach(results, articleImporter.import);
});

connection.end();
