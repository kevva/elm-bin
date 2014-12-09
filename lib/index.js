'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');

/**
 * Variables
 */

var BASE_URL = 'https://github.com/passy/elm-platform/releases/download/2014-12-07/Elm-Platform-2014-12-07.';

/**
 * Module exports
 */

module.exports = function (name) {
	var bin = new BinWrapper({ global: false, progress: false })
		.src(BASE_URL + 'darwin64.tar.gz', 'darwin')
		.src(BASE_URL + 'lnx64.tar.gz', 'linux', 'x64')
		.dest(path.join(__dirname, '../vendor'))
		.use(path.join('bin', name));

	return bin;
};
