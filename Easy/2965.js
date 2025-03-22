//2965. Find Missing and Repeated Values.js

function findMissingAndRepeatedValues(grid) {
  let length = grid.length * grid.length
  const object = {}
  let final = []

  grid.forEach((element) => {
    for (const key of element) {
      if (object[key]) {
        object[key].push(key)
      } else {
        object[key] = [key]
      }
    }
  })

  const array = Object.keys(object)
  for (let i = 1; i <= length; i++) {
    if (!array.includes(String(i))) {
      final.push(parseInt(i))
    }
  }

  for (const [key, value] of Object.entries(object)) {
    if (value.length >= 2) {
      final.push(parseInt(key))
    }
  }
  console.log(final)
}

function findMissingAndRepeatedValuesGPT(grid) {
  const n = grid.length
  const N = n * n

  let sum = (N * (N + 1)) / 2
  let sumSquare = (N * (N + 1) * (2 * N + 1)) / 6

  let sum_actual = 0,
    sumSquare_actual = 0
  let numMap = new Set()
  let duplicate

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const num = grid[i][j]
      sum_actual += num
      sumSquare_actual += num * num

      if (numMap.has(num)) {
        duplicate = num
      }
      numMap.add(num)
    }
  }

  let diff1 = sum_actual - sum
  let diff2 = sumSquare_actual - sumSquare
  let sum_ab = diff2 / diff1

  let misssing = (sum_ab - diff1) / 2
  let repeated = (sum_ab + diff1) / 2

  return [repeated, misssing]
}

const r = findMissingAndRepeatedValuesGPT([
  [1, 3],
  [2, 2],
])
console.log(r)

const r1 = findMissingAndRepeatedValues([
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
])

console.log(r1)
