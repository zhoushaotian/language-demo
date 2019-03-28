#!/usr/bin/env bash

echo ${#PATH}

if [ ${#PATH} == 20 ]; then
    echo "path length is 20"
else
    echo "path length is not 20"
fi