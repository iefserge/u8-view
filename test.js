// Copyright 2015 Sergii Iefremov
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
var test = require('tape');
var u8view = require('./');

test('dataview get', function(t) {
  var u8 = new Uint8Array(6);
  u8[0] = 0xAA;
  u8[1] = 0xBB;
  u8[2] = 0xCC;
  u8[3] = 0xDD;
  u8[4] = 0xEE;
  u8[5] = 0xFF;
  t.equal(u8view.getUint32BE(u8, 0), 0xAABBCCDD);
  t.equal(u8view.getUint32BE(u8, 1), 0xBBCCDDEE);
  t.equal(u8view.getUint32BE(u8, 2), 0xCCDDEEFF);
  t.equal(u8view.getUint16BE(u8, 0), 0xAABB);
  t.equal(u8view.getUint16BE(u8, 1), 0xBBCC);
  t.equal(u8view.getUint16BE(u8, 2), 0xCCDD);
  t.equal(u8view.getUint16BE(u8, 3), 0xDDEE);
  t.equal(u8view.getUint16BE(u8, 4), 0xEEFF);
  t.equal(u8view.getUint32LE(u8, 0), 0xDDCCBBAA);
  t.equal(u8view.getUint32LE(u8, 1), 0xEEDDCCBB);
  t.equal(u8view.getUint32LE(u8, 2), 0xFFEEDDCC);
  t.equal(u8view.getUint16LE(u8, 0), 0xBBAA);
  t.equal(u8view.getUint16LE(u8, 1), 0xCCBB);
  t.equal(u8view.getUint16LE(u8, 2), 0xDDCC);
  t.equal(u8view.getUint16LE(u8, 3), 0xEEDD);
  t.equal(u8view.getUint16LE(u8, 4), 0xFFEE);
  t.end();
});

test('dataview set BE', function(t) {
  var u8 = new Uint8Array(6);
  u8view.setUint32BE(u8, 0, 0xAABBCCDD);
  u8view.setUint16BE(u8, 4, 0xEEFF);
  t.equal(u8[0], 0xAA);
  t.equal(u8[1], 0xBB);
  t.equal(u8[2], 0xCC);
  t.equal(u8[3], 0xDD);
  t.equal(u8[4], 0xEE);
  t.equal(u8[5], 0xFF);
  t.end();
});

test('dataview set LE', function(t) {
  var u8 = new Uint8Array(6);
  u8view.setUint32LE(u8, 0, 0xDDCCBBAA);
  u8view.setUint16LE(u8, 4, 0xFFEE);
  t.equal(u8[0], 0xAA);
  t.equal(u8[1], 0xBB);
  t.equal(u8[2], 0xCC);
  t.equal(u8[3], 0xDD);
  t.equal(u8[4], 0xEE);
  t.equal(u8[5], 0xFF);
  t.end();
});
