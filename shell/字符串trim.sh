#!/usr/bin/env bash

str="  this is a long string with space head and tail          "
trimStr="${str#"${str%%[![:space:]]*}"}"
echo $trimStr