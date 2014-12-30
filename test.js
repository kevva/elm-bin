'use strict';

var binCheck = require('bin-check');
var each = require('async-each-series');
var elm = require('./');
var test = require('ava');

test('return path to binaries and verify that they are working', function (t) {
	t.plan(10);

	var bins = [
		'doc',
		'make',
		'package',
		'reactor',
		'repl'
	];

	each(bins, function (bin, next) {
		binCheck(elm[bin], ['--help'], function (err, stdout) {
			t.assert(!err, err);
			t.assert(stdout);
			next();
		});
	});
});
