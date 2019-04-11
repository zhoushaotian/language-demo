#!/usr/bin/env bash


#   删除a.py中的所有注释行
sed '/^\s*#/d' a.py

#   替换文本,将小写m换成大写M,支持正则表达式
sed 's/m/M/g' a.py
sed 's;m;M;' a.py
sed 's|m|M|g' a.py

#   删除,正则表达式,以ja打头的全部删除
sed 's/ja.*//g'

#   找到当前目录下所有的文件夹,分号';'是定界符,也可以是其他任意符号,类似于将sed后面的参数分为三部分替换 './' 为''
find . -type d -print|sed 's;./;;'

#   全局替换a为A
sed 's;a;A;g'

#   仅仅替换第二次出现的a为A
sed 's;a;A;2'

#   多个替换,第一个a变大写,第二个换成xxxx
sed 's/a/A/1 ; s/a/xxxx/2'

#   编程替换
sed -f file.sh

#   在范围内进行替换,将start和end之间的"export const"换成"module.exports",条件替换
cat index.js | sed '/start/,/end/ s/export const/module.exports/g'

#输出第258行到297行,都包含
sed -n '258,297p'

