'use strict';

var binCheck = require('bin-check');
var each = require('each-async');
var elm = require('./');
var test = require('ava');

test('return path to binaries and verify that they are working', function (t) {
	t.plan(10);

	var bins = [
		'elm-doc',
		'elm-make',
		'elm-package',
		'elm-reactor',
		'elm-repl'
	];

	each(bins, function (bin) {
		binCheck(elm[bin], ['--help'], function (err, stdout) {
			t.assert(!err, err);
			t.assert(stdout);
		});
	});
});
