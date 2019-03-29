#!/usr/bin/env bash

README=README.md

echo "### 将所有语言/工具的基本语法和常用代码汇总方便开发" > ../README.md
for file in `ls ..`; do
     folder="`pwd`/../$file"
     if [[ -d $folder ]]; then
        echo "####  ${file}" >> ../$README
        ls -lh $folder|awk 'NF > 2 {print "- ["$9"]""("".""/"file"/"$9")"}' file=$file >> ../$README
     fi
done
