//Import dependencies
var fs = require('fs');

//Function for check if file exists
function isFile(p)
{
  //Try open the file
  try
  {
    //Check if is a file and return
    return fs.statSync(p).isFile();
  }
  catch(err)
  {
    //Return file doesnt exists
    return false;
  }
}

//Function for check if dir exists
function isDir(p)
{
  //Try
  try
  {
    //Check if is a dir and return
    return fs.statSync(p).isDirectory();
  }
  catch(err)
  {
    //Return dir doesnt exists
    return false;
  }
}

//Exports to node
module.exports = {isFile: isFile, isDir: isDir};
