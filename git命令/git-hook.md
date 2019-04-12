```bash
#   git hook的作用就是本地提交代码的时候做相应操作
#   比如说当前这个repo在每次提交的时候就有有一个pre-commit的hook
#   作用是生成目录,不用我每次手动执行了

➜  language-demo (master) ✔ ls .git/hooks 
commit-msg pre-commit
➜  language-demo (master) ✗ cat .git/hooks/pre-commit 
cd awk
bash 生成README目录.sh
cd ..
git add .

#   其中 pre-commit 是我自己vi的,然后写的代码,然后chmod +x


```
