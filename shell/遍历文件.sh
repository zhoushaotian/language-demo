#!/usr/bin/env bash

for file in *;
    do echo $file;
done


for file in `ls /etc/`; do
    echo $file
done


for file in $(ls /etc); do
    ls -lh /etc/$file
done