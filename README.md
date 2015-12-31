# stattic-pstat

[![npm](https://img.shields.io/npm/v/stattic-pstat.svg?style=flat-square)](https://www.npmjs.com/package/stattic-pstat)
[![npm](https://img.shields.io/npm/dt/stattic-pstat.svg?style=flat-square)](https://www.npmjs.com/package/stattic-pstat)

Simple way for check if path exists and is a file/directory.

Example of use:

```javascript
var pStat = require('stattic-pstat');

//Check if file exists
if(pStat.isFile('route/to/file.ext') === true)
{
  //Path exists and is a file, do something
  // ...
}

//Check if directory exists
if(pStat.isDir('route/to/dir') === true)
{
  //Path exists and is a directory, do something
  // ...
}

```

:)
