// 69. Sqrt(x)

var mySqrt = function (x) {
  if (x === 0 || x === 1) return x

  let left = 1,
    right = x,
    ans = 0

  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2)

    if (mid * mid === x) {
      return mid
    } else if (mid * mid < x) {
      ans = mid
      left = left + 1
    } else {
      right = mid - 1
    }
  }

  return ans
}

function mySqrtNewton(x) {
  if (x === 0) return 0

  let r = x
  while (r * r > x) {
    r = Math.floor((r + x / r) / 2)
  }
  return r
}

const result = mySqrtNewton(8)

console.log('Ans : ', result)

/*
Time Complexity: O(log x)
Space Complexity: O(1)
*/
