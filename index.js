'use strict';

[
	'doc',
	'make',
	'package',
	'reactor',
	'repl'
].forEach(function (bin) {
	module.exports[bin] = require('./lib')(bin).path();
});
