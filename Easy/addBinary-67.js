// 67. Add Binary
var addBinary = function (a, b) {
  let result = ''
  let carry = 0
  let i = a.length - 1,
    j = b.length - 1

  while (i >= 0 || j >= 0 || carry) {
    let sum = carry

    if (i >= 0) sum += a[i--] - '0' // Convert char to number
    if (j >= 0) sum += b[j--] - '0'

    result = (sum % 2) + result // Append binary digit

    carry = Math.floor(sum / 2) // Carry for next iteration
  }
  console.log('Result --->', result)
  return result
}

//addBinary('11', '1')
addBinary('1010', '1011')

/*
Time Complexity: O(n)
Space Complexity: O(1)
*/

//   1
// 1 0 1 0
// 1 0 1 1
// -------
//   1  0   1
