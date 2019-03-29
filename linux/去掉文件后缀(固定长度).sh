#!/usr/bin/env bash
#   比如当前目录下的所有文件都是*.bk,去掉.bk的方法如下
for file in *;do len=${#file}-3;mv $file ${file:0:$len}; done