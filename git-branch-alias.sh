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

str=$1
branch=$(echo "${str// /-}" | tr '[:upper:]' '[:lower:]')
git branch  -D $branch
git checkout -b $branch


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