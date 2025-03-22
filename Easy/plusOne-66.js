var plusOne = function (digits) {
  const n = digits.length
  for (let i = n - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
    console.log(digits)
  }
  digits.unshift(1)
  return digits
}

console.log(plusOne([9]))

/*
Time Complexity: O(n) (Worst case: all digits are 9, requiring full iteration).
Space Complexity: O(1) (Modifies the array in place, no extra storage).
*/
