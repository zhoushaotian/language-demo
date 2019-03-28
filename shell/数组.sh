#!/usr/bin/env bash

names=('caowei' 'tsaowe')
names[2]='max cao'
echo ${names[0]}
echo ${names[1]}
echo ${names[2]}

#   使用 @ 符号可以获取数组中的所有元素，例如：
echo ${names[@]}


#   获取数组长度的方法与获取字符串长度的方法相同，例如：
# 取得数组元素的个数
length=${#names[@]}
echo $length
# 或者
length=${#names[*]}
echo $length
# 取得数组单个元素的长度
length1=${#names[1]}
echo $length1
