#!/usr/bin/env bash

ps aux|grep python|awk '{print $2}'