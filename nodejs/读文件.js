const fs = require('fs');

let path = '/etc/passwd';


//  一次性读取
console.log(fs.readFileSync(path).toString());


//  一行一行读取
const readline = require('readline');
let readableStream = readline.createInterface({input: fs.createReadStream(path)});
readableStream.on('line', function (line) {
    console.info(line);
});

