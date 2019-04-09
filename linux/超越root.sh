#!/usr/bin/env bash

touch test.js
#   set immutable flag
sudo chattr +i test.js
# 如果要删除
#   sudo chattr -i test.js

#   查看状态
lsattr test.js

#   设置append模式,只能写入,不能修改
chattr +a test.log
#   移除
#   chattr -a test.log
