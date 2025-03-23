var merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[k--] = nums2[j--]
    } else {
      nums1[k--] = nums1[i--]
    }
  }

  while (j >= 0) {
    nums1[k--] = nums2[j--]
  }
  console.log('Num', nums1)
}

//nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)

/*
Time Complexity: O(m + n) → We process both arrays only once.
Space Complexity: O(1) → No extra space is used
*/
