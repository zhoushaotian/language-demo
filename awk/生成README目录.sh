#!/usr/bin/env bash
#set -x
set -e
README=README.md
ignore="../.gitignore"

echo    "### 将所有语言/工具的基本语法和常用代码汇总方便开发" > ../README.md
echo    ""  >> ../README.md
echo    "该readme自动生成,请勿手动修改,直接运行 ./awk/生成README目录.sh"   >> ../README.md
echo    ""  >> ../README.md
for file in `ls ..`; do
     count=`cat ../.gitignore| grep $file|wc -l`
     if [[ count -eq 0 && $file != "resources" ]]; then
         folder="`pwd`/../$file"
         if [[ -d $folder ]]; then
            echo "####  ${file}" >> ../$README
            ls -lh $folder|sed 's/\[/\\[/g'|sed 's/\]/\\]/g'|awk 'NF > 2 {print "- ["$9"]""("".""/"file"/"$9")"}' file=$file >> ../$README
         fi
     fi
done

echo    ""  >> ../README.md
echo "[Learn-X-in-Y-minutes](https://learnxinyminutes.com/)" >> ../README.md
