// Count of positives / sum of negative
// 2. DESCRIPTION: Given an array of integers. Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

function countPositivesSumNegatives(input) {
  return input && input.length ? input.reduce((prev,curr) => (curr > 0 ? prev[0] = prev[0] + 1 : prev[1] = prev[1] + curr, prev), [0,0]) : []
}