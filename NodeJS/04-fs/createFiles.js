// The File System module has methods for creating new files

var fs = require("fs");

// fs.appendFile(): method appends specified content to a file. If the file does not exist, the file will be created:
fs.appendFile("mynewfile.txt", "Hello content!", function (err) {
  if (err) throw err;
  console.log("Saved!");
})

// fs.open:  method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:
var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});

// The fs.writeFile() method replaces the specified file and content if it exists. If the file does not exist, a new file, containing the specified content, will be created:
var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

// ** append methos appends content at the end of existing, whilst write will replace the file and content. 

// delete files
var fs = require('fs');

fs.unlink('mynewfile2.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});

// Rename Files
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});

