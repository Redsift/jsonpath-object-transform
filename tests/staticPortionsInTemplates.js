/*jshint laxbreak:true*/
/*global window, require, console*/
'use strict';

var transform = require('../index.js');

var path1 = { 'key' : 'last', 'value': { 'param': '$.uri.param', 'slack': '$.fields' } };
console.log('For this path:', path1);
var data1 = { uri: {param: 56}, fields: {}};
console.log(JSON.stringify(transform(data1, path1)) === JSON.stringify({ key: 'last', value: { param: 56, slack: {} } }) );

var path2 = { 'key' : 'last', 'value': { 'param': '$.uri.param', 'slack': '$.fields' } };
console.log('For this path:', path2);
var data2 = { uri: {param: 56}, fields: [null]};
console.log('and this data:', data2);
console.log(JSON.stringify(transform(data2, path2)) === JSON.stringify({ key: 'last', value: { param: 56, slack: [null] } }) );
