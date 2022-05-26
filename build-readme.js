const { difficulty } = require('./constants');
const { resolve } = require('path');
const fs = require('fs');
var os = require('os');

// I know that need to do with Streams!

const TABLE_HEADER =
  '| LeetCode ID | Difficulty  | Name           | Solution       |';
const TABLE_SEPARATOR =
  '|:-----------:|:-----------:|:--------------:|:--------------:|';

const leetcodeFolderPath = resolve('leetcode');

const modules = getFileModules(leetcodeFolderPath);

const output = [];

output.push(preprocess('![Logo](./leetcode.png)'));

output.push(
  preprocess(
    '### This file was created automatically by [build-readme.js](./build-readme.js)'
  )
);

output.push(preprocess(`Count of solved tasks: ${modules.length}`));
output.push(os.EOL);

//All tasks table
output.push(preprocess('<details>'));
output.push(
  preprocess('<summary>Table of all solved non-premium tasks</summary>')
);
output.push(preprocess('<p>'));
output.push(os.EOL);
output.push(preprocess(TABLE_HEADER));
output.push(preprocess(TABLE_SEPARATOR));
output.push(...buildTaskLines(modules, difficulty.undefined));
output.push(os.EOL);
output.push(preprocess('</p>'));
output.push(preprocess('</details>'));

const difficultyValues = Object.values(difficulty);

//Table for each difficulty
difficultyValues.pop();
difficultyValues.map((difficulty) => {
  output.push(preprocess('<details>'));
  output.push(
    preprocess(
      `<summary>Table of ${difficulty} solved non-premium tasks</summary>`
    )
  );
  output.push(preprocess('<p>'));
  output.push(os.EOL);
  output.push(preprocess(TABLE_HEADER));
  output.push(preprocess(TABLE_SEPARATOR));
  output.push(...buildTaskLines(modules, difficulty, true));
  output.push(os.EOL);
  output.push(preprocess('</p>'));
  output.push(preprocess('</details>'));
});

//Premium tasks table
output.push(preprocess('<details>'));
output.push(
  preprocess('<summary>Table of Premium solved premium tasks</summary>')
);
output.push(preprocess('<p>'));
output.push(os.EOL);
output.push(preprocess(TABLE_HEADER));
output.push(preprocess(TABLE_SEPARATOR));
output.push(...buildTaskLines(modules, difficulty.undefined, false, true));
output.push(preprocess('</p>'));
output.push(os.EOL);
output.push(preprocess('</details>'));

function preprocess(str) {
  return str + os.EOL;
}

function getFileModules(folderPath = '.') {
  return fs
    .readdirSync(folderPath, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && dirent.name.includes('.js'))
    .map((dirent) => {
      const module = require(resolve(leetcodeFolderPath, dirent.name));
      module.fileName = dirent.name;

      return module;
    })
    .filter((module) => module.leetcode)
    .sort((a, b) => a.leetcode.id - b.leetcode.id);
}

function buildTaskLines(
  modules = [],
  difficulty,
  needToCheckDifficulty = false,
  isPremium = false
) {
  let leetcodeModules = modules.filter((module) => module.leetcode);

  if (needToCheckDifficulty) {
    leetcodeModules = leetcodeModules.filter(
      (module) => difficulty === module.leetcode.difficulty
    );
  }

  return leetcodeModules
    .filter((module) => !!(module.leetcode.premium === isPremium))
    .map((module) => {
      const { fileName } = module;
      const { id, name, url, difficulty } = module.leetcode;

      const link = `[${fileName}](./leetcode/${fileName})`;

      return preprocess(`|${id}|${difficulty}|[${name}](${url})|${link}|`);
    });
}

try {
  fs.writeFileSync('./README.md', output.join(''), { flag: 'w+' });
} catch (err) {
  console.error(err);
}
