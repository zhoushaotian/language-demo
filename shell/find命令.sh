#!/usr/bin/env bash

#   在一天内修改过的
find . -mtime 1 -type d

#   在1天内修改过的js
find . -mtime 1 -name '*.js'

#   -type d(文件夹)/f(文件)/l(符号链接)

#   列出所有文件
find . -ls
#19399889        0 drwxr-xr-x    5 tsaowe           staff                 160 Apr 11 14:23 .
#19669940        8 -rw-r--r--    1 tsaowe           staff                2041 Apr 11 14:23 ./index.js
#19399890        0 drwxr-xr-x    5 tsaowe           staff                 160 Apr  9 17:03 ./components
#19399891        0 drwxr-xr-x    4 tsaowe           staff                 128 Apr 10 21:34 ./components/EmployeeInfo
#19651558        8 -rw-r--r--    1 tsaowe           staff                2377 Apr 10 21:34 ./components/EmployeeInfo/index.js
#19556515        8 -rw-r--r--    1 tsaowe           staff                1116 Apr 10 18:09 ./components/EmployeeInfo/style.less
#19399894        0 drwxr-xr-x    5 tsaowe           staff                 160 Apr 11 11:03 ./components/Header
#19660806        8 -rw-r--r--    1 tsaowe           staff                 899 Apr 11 11:03 ./components/Header/Operation.js
#19651485        8 -rw-r--r--    1 tsaowe           staff                1662 Apr 10 21:30 ./components/Header/index.js
#19399897        8 -rw-r--r--    1 tsaowe           staff                1595 Apr  9 17:03 ./components/Header/style.less
#19399898        0 drwxr-xr-x    4 tsaowe           staff                 128 Apr 11 10:39 ./components/TagSection
#19659766       16 -rw-r--r--    1 tsaowe           staff                5665 Apr 11 10:39 ./components/TagSection/index.js
#19546085        8 -rw-r--r--    1 tsaowe           staff                3168 Apr 10 15:21 ./components/TagSection/style.less
#19399903        8 -rw-r--r--    1 tsaowe           staff                1048 Apr  9 17:03 ./style.less
