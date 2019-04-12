```bash

git init
git commit -am "first commit"
#   修改代码
git stash
git checkout branchNeedFixedNow
#   做需要立即修复的todolist
git commit -am "changes must done first"
git push
#   恢复到之前的工作状态
git checkout master
git stash pop


```
