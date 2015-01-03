'use strict';

var BinWrapper = require('bin-wrapper');
var path = require('path');
var pkg = require('../package.json');

/**
 * Variables
 */

var BASE_URL = 'https://github.com/kevva/elm-platform-bin/raw/v' + pkg.version.split('+')[0] + '/vendor/';

/**
 * Module exports
 */

module.exports = function (name) {
	var bin = new BinWrapper({ global: false, progress: false })
		.src(BASE_URL + 'osx/elm-platform-osx.tar.gz', 'darwin')
		.src(BASE_URL + 'linux/x64/elm-platform-linux-x64.tar.gz', 'linux', 'x64')
		.dest(path.join(__dirname, '../vendor'))
		.use('elm-' + name);

	return bin;
};
