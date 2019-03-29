#!/usr/bin/env bash

awk '$3 == 0 { print $1 }' test.data