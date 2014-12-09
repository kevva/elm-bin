#!/usr/bin/env node
'use strict';

var dargs = require('dargs');
var minimist = require('minimist');
var spawn = require('child_process').spawn;

/**
 * Parse options
 */

var opts = minimist(process.argv.slice(2), {
	string: 'elm-binary-name'
});

/**
 * Spawn the binary
 *
 * @param {String} name
 * @api private
 */

function run(input, name, flags) {
	var args = input.concat(flags);
	var bin = require('./')[name];

	spawn(bin, args, { stdio: 'inherit' })
		.on('exit', process.exit);
}

/**
 * Run
 */

var args = opts._;
var bin = opts['elm-binary-name'];

delete opts._;
delete opts['elm-binary-name'];

run(args, bin, dargs(opts));
