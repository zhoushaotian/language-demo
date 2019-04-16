const fs = require('fs');


//  删除文件,如果不存在会报错,如果是文件夹,则会报错
// fs.unlinkSync('/Users/tsaowe/Desktop/mv.log');



//  重命名,可以重命名文件以及文件夹
// fs.renameSync('/Users/tsaowe/Desktop/mv.log', '/Users/tsaowe/Desktop/mv.log.bk')
// fs.renameSync('/Users/tsaowe/Desktop/caowei.txt','/Users/tsaowe/Desktop/caowei.txt.log')


fs.watch('/Users/tsaowe/Desktop/caowei.txt.log',()=>{
  console.log(arguments);
});
