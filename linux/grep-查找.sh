#!/usr/bin/env bash


#   查找包含caowei的行
ll | grep caowei

#   查找不包含 caowei 的行
ll | grep -v caowei

#   查找包含caowei,Caowei,CaoWei ....(ignore case)
ll | grep -i caowei

#   如果有结果,那么 $? = 0, 否则为 1
ll | grep -q caowei
