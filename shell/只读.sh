#!/usr/bin/env bash

myVar="readonly name"
readonly myVar
echo ${myVar}
myVar=var # 这儿会出错