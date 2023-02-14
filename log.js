const fs = require('fs');
const path = require('path');

function logFilesInFolder(folderPath) {
  fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${folderPath}: ${err}`);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file.name);
      if (file.isDirectory()) {
        logFilesInFolder(filePath);
      } else {
        console.log(filePath);
      }
    });
  });
}

// Example usage: log files in the current working directory
logFilesInFolder('build');
