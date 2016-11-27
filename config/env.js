var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path

module.exports = {
	development: {
		rootPath: rootPath,
		database: 'mongodb://node-to-do-list:7L20NWjFXvlXxk4pRAoGA0MKkjemeA0vSJEis63XtWuL6n1EX8kDsDqVezezFaDtz7UsAcJWaM458PLODrlJmA==@node-to-do-list.documents.azure.com:10250/?ssl=true',
		port: process.env.PORT || 3000
	},
	production: {
		rootPath: rootPath,
		database: 'mongodb://node-to-do-list:7L20NWjFXvlXxk4pRAoGA0MKkjemeA0vSJEis63XtWuL6n1EX8kDsDqVezezFaDtz7UsAcJWaM458PLODrlJmA==@node-to-do-list.documents.azure.com:10250/?ssl=true',
		port: process.env.PORT || 80
	}
};