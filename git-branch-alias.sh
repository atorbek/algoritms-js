#!/bin/bash


##########################################################################

# Before using
#
# 1. Open .git/config and add 2 lines:
#
# [alias]
#	leetbranch = "!$HOME/projects/algoritms-js/git-branch-alias.sh \"$1\""
#
# 2. Save file .git/config
# 3. Enter Command in terminal: git leetbranch
#
# This command replaces spaces to en dash and upper to lower cases.

###########################################################################

function createTaskFile() {
  local str=$1
  local branch=$(echo "${str// /-}" | tr '[:upper:]' '[:lower:]')

cat <<EOT >> "./leetcode/${branch^}.js"
const { difficulty } = require('../constants');

module.exports.leetcode = {
  id: -1,
  name: '${str}',
  url: 'https://leetcode.com/problems/${branch}/',
  difficulty: difficulty.undefined,
  premium: false
};
EOT

}

args=("$@")
ELEMENTS=${#args[@]}

if [ $ELEMENTS -gt 1 ]; then
  for (( i=0;i<$ELEMENTS;i++)); do 
    createTaskFile "${args[${i}]}"
  done
  
  branchTaskGroup='taskGroup'
  git branch  -D $branchTaskGroup
  git checkout -b $branchTaskGroup
else
  str=$1
  branch=$(echo "${str// /-}" | tr '[:upper:]' '[:lower:]')
  git branch  -D $branch
  git checkout -b $branch
fi