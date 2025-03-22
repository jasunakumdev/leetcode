// 58. Length of Last Word

function simpleSolution(s) {
  if (!s) {
    return 0
  }
  const string = s.trim().split(' ')
  const lastWord = string[string.length - 1]
  return lastWord.length
}

function lengthOfLastWord(s) {
  let length = 0,
    i = s.length - 1

  while (i >= 0 && s[i] === ' ') i--

  while (i >= 0 && s[i] !== ' ') {
    length++
    i--
  }
  return length
}

lengthOfLastWord('Hello World')
lengthOfLastWord('   fly me   to   the moon  ')
lengthOfLastWord('luffy is still joyboy')

/*
Time & Space Complexity:
- Time Complexity: O(n) (where n is the length of the string) — We scan the string at most once.
- Space Complexity: O(1) — We only use a few integer variables.
*/
