'use strict';

var asyncEachSeries = require('async-each-series');
var log = require('logalot');

var bins = [
	'doc',
	'make',
	'package',
	'reactor',
	'repl'
];

asyncEachSeries(bins, function (name, next) {
	var bin = require('./')(name);

	bin.run(['--help'], function (err) {
		if (err) {
			log.error(err.message);
			log.error('elm-' + name + ' pre-build test failed');
			next();
			return;
		}

		log.success('elm-' + name + ' pre-build test passed successfully');
		next();
	});
}, log.write.bind(log));
