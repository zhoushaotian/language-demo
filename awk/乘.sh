#!/usr/bin/env bash

#        Beth	4.00	0
#        Dan	3.75	0
#        kathy	4.00	10
#        Mark	5.00	20
#        Mary	5.50	22
#        Susie	4.25	18

awk '$3 >0 { print $1, $2 * $3 }' test.data