const os = require('os');
const fs = require('fs');
const folder = ` /Volumes/GoogleDrive/My\\ Drive/[4096madhead@eyny]Game\\ of\\ Thrones\\ S04/`;


const outputFolder = os.homedir() + '/Desktop/s4';

try {
  if (!fs.existsSync(outputFolder)) {
    fs.mkdirSync(outputFolder);
  }

} catch (e) {
  console.log(e);
}


fs.readdir(folder, (err, files) => {
  console.log(files);
});
