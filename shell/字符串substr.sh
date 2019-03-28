#!/usr/bin/env bash

desc="my name is $1"
length=${#desc}
echo ${desc:11:$length}