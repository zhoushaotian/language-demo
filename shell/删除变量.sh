#!/usr/bin/env bash
#   变量被删除后不能再次使用。unset 命令不能删除只读变量。
name=caowei
echo ${name}
unset name
echo ${name}