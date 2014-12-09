'use strict';

/**
 * Module exports
 */

[
	'doc',
	'make',
	'package',
	'reactor',
	'repl'
].forEach(function (bin) {
	module.exports[bin] = require('./lib')('elm-' + bin).path();
});
