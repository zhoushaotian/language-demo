#!/usr/bin/env bash
#[root@fedora15demo tsaowe]# cat a1.sort
#    chris   300
#    fyx     999
#    herman  150
#    jane    200
#    joe     100
#    lww     789
#[root@fedora15demo tsaowe]# cat a2.sort
#    cdf     887
#    chris   95
#    dfs     12
#    herman  80
#    jane    75
#    joe     50


#   表示按照第一个文件的第一个字段第二个文件的第一个字段来组合
join -1 1 -2 1 a1.sort a2.sort
#chris  300     95
#herman 150     80
#jane   200     75
#joe    100     50

