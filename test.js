'use strict';

var binCheck = require('bin-check');
var asyncEachSeries = require('async-each-series');
var test = require('ava');
var elm = require('./');

test('return path to binaries and verify that they are working', function (t) {
	t.plan(10);

	var bins = [
		'elm',
		'elm-doc',
		'elm-make',
		'elm-package',
		'elm-reactor',
		'elm-repl'
	];

	asyncEachSeries(bins, function (bin, next) {
		binCheck(elm[bin], ['--help'], function (err, stdout) {
			t.assert(!err, err);
			t.assert(stdout, stdout);
			next();
		});
	});
});
