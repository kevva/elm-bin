'use strict';

var asyncEachSeries = require('async-each-series');
var log = require('logalot');

var bins = [
	'elm',
	'elm-make',
	'elm-package',
	'elm-reactor',
	'elm-repl'
];

asyncEachSeries(bins, function (name, next) {
	var bin = require('./')(name);

	bin.run(['--help'], function (err) {
		if (err) {
			log.error(err.message);
			log.error(name + ' pre-build test failed');
			next();
			return;
		}

		log.success(name + ' pre-build test passed successfully');
		next();
	});
}, log.write.bind(log));
