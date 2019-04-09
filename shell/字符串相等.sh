#!/usr/bin/env bash

echo $1

if [ "$1" == "caowei" ]; then
   echo '参数是caowei'
else
  echo '参数不是caowei,从新输入'
fi

name=caowei
if [[ "$name" == "caowei" ]]; then
   echo '变量是caowei'
else
  echo '变量不是caowei'
fi

name=tsaowe
if [ "${name}" == "caowei" ]; then
   echo '变量是caowei'
else
  echo '变量不是caowei'
fi
