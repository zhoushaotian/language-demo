const testFolder = `${require('os').homedir()}/Desktop/s4/`;
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    if (/\.ass$/.test(file)) {
      console.log(file);
      fs.rename(`${testFolder}/${file}`, `${testFolder}/${file.replace(/ /g, '_')}`, err => {
        console.log(err)
      });
    }
  });
});
