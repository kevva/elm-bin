'use strict';

var each = require('each-async');
var log = require('logalot');

/**
 * Install binaries and check whether they work
 */

var bins = [
	'elm-doc',
	'elm-make',
	'elm-package',
	'elm-reactor',
	'elm-repl'
];

each(bins, function (name, i, next) {
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
