#!/usr/bin/env bash

spaceString="  this is a long string with space head and tail          "
trimed="${spaceString#"${spaceString%%[![:space:]]*}"}"
echo $trimed
