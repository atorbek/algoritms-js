function getMinSumForCreatePalindrome(str) {
  let l = 0;
  let r = str.length - 1;

  let count = 0;

  while (l < r) {
    if (str[l] !== str[r]) {
      count++;
    }

    l++;
    r--;
  }

  return count;
}

process.stdin.on('data', (data) => {
  let minSum = getMinSumForCreatePalindrome(data.toString().trim());
  process.stdout.write(minSum.toString());
  process.exit();
});
