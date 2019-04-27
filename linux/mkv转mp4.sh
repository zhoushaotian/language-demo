#!/usr/bin/env bash
destFolder=~/Desktop/
sourceFile=~/Desktop/Got.mkv

# brew install ffmpeg
ffmpeg -i ${sourceFile} -codec copy ${destFolder}/output.mp4
