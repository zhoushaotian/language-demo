#!/usr/bin/env bash

#   第一种方法,然后通过本文件夹内的去掉文件后缀即可
for i in `ls`; do awk 'NR>7 {print $0}' $i > $i.bk;done


#   第二种方法
tail  +8 file > file.bk