#!/usr/bin/env bash

#   第二个2才是要删除的行数
sed -e :a -e '$d;N;2,2ba' -e 'P;D' id.html