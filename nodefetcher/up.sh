#!/bin/bash
  git status -s && git pull origin main && git add . && git commit -m "$(date '+%Y.%m.%d %H:%M:%S') Upgrade" && git push origin main
