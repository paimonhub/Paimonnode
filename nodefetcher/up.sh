#!/bin/bash
status_log=$(git status -sb)
if [ "$status_log" == "## main...origin/main" ];then
  echo -e "\033[42;30m nothing to commit, working tree clean \033[0m"
else
  git status -s && git pull -f origin main && git add . && git commit -m "$(date '+%Y.%m.%d %H:%M:%S') Fetch Nodes" && git push origin main
fi
