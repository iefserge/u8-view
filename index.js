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

exports.getUint16BE = function(u8, offset) {
  return ((u8[offset] << 8) + u8[offset + 1]) >>> 0;
};

exports.getUint32BE = function(u8, offset) {
  return ((u8[offset + 0] << 24) + (u8[offset + 1] << 16)
        + (u8[offset + 2] << 8)  +  u8[offset + 3]) >>> 0;
};

exports.getUint16LE = function(u8, offset) {
  return (u8[offset] + (u8[offset + 1] << 8)) >>> 0;
};

exports.getUint32LE = function(u8, offset) {
  return (u8[offset + 0]        + (u8[offset + 1] << 8)
       + (u8[offset + 2] << 16) + (u8[offset + 3] << 24)) >>> 0;
};

exports.setUint16BE = function(u8, offset, value) {
  u8[offset] = value >>> 8;
  u8[offset + 1] = value >>> 0;
};

exports.setUint32BE = function(u8, offset, value) {
  u8[offset] = value >>> 24;
  u8[offset + 1] = value >>> 16;
  u8[offset + 2] = value >>> 8;
  u8[offset + 3] = value >>> 0;
};

exports.setUint16LE = function(u8, offset, value) {
  u8[offset] = value >>> 0;
  u8[offset + 1] = value >>> 8;
};

exports.setUint32LE = function(u8, offset, value) {
  u8[offset] = value >>> 0;
  u8[offset + 1] = value >>> 8;
  u8[offset + 2] = value >>> 16;
  u8[offset + 3] = value >>> 24;
};
