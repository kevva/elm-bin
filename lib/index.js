'use strict';

var path = require('path');
var BinWrapper = require('bin-wrapper');
var pkg = require('../package.json');

var BASE_URL = [
	'https://github.com/kevva/elm-bin/raw/v',
	pkg.version.split('+')[0] + '/vendor/'
].join('');

module.exports = function (name) {
	return new BinWrapper()
		.src(BASE_URL + 'osx/elm-platform-osx.tar.gz', 'darwin')
		.src(BASE_URL + 'linux/x64/elm-platform-linux-x64.tar.gz', 'linux', 'x64')
		.src(BASE_URL + 'win/elm-platform-win.tar.gz', 'win32')
		.dest(path.join(__dirname, '../vendor'))
		.use(process.platform === 'win32' ? 'elm-' + name + '.exe' : 'elm-' + name);
};
