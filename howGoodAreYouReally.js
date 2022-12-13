//You receive an array with your peers' test scores. Now calculate the average and compare your score!
//Return True if you're better, else False!

function betterThanAverage(classPoints, yourPoints) {
  // adding points of class
 let sum = classPoints.reduce((acc,curr) => acc + curr , 0)
  // divide it by the classpoints length
 let average = sum / classPoints.length
  // compare average with yourpoints
 return yourPoints > average
  // if score is better than average, return true
  // else return false
}