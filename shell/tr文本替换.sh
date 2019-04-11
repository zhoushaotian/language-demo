#!/usr/bin/env bash

#   将小写转化为大写
ll | tr 'a-z' 'A-Z'

#   删除出现的数字
ll | tr -d '0-9'

