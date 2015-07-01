'use strict';

[
	'elm',
	'elm-make',
	'elm-package',
	'elm-reactor',
	'elm-repl'
].forEach(function (bin) {
	module.exports[bin] = require('./lib')(bin).path();
});
