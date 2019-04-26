#!/usr/bin/env bash

#!/usr/bin/env bash
folder="~/Movies/"
for file in `ls "${folder}"`; do
  # 将mkv后缀换成mp4
  echo ${file//.[mM][kK][vV]/.mp4}
done

