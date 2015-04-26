## SYNOPSIS

DataView on top of Uint8Array

[![Build Status](https://travis-ci.org/iefserge/u8-view.svg)](https://travis-ci.org/iefserge/u8-view)

## USAGE

```js
var u8view = require('u8-view');
var u8 = new Uint8Array(4);
var offset = 0;
var value16 = 0xCAFE;
var value32 = 0xCAFECAFE;

u8view.setUint16BE(u8, offset, value16)
u8view.getUint16BE(u8, offset)

u8view.setUint16LE(u8, offset, value16)
u8view.getUint16LE(u8, offset)

u8view.setUint32BE(u8, offset, value32)
u8view.getUint32BE(u8, offset)

u8view.setUint32LE(u8, offset, value32)
u8view.getUint32LE(u8, offset)
```

##LICENSE

Apache License, Version 2.0
