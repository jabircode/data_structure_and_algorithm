// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. 
// If any two numbers in the input array sum up to the target sum, the function should return them
// in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.

// Sample Input array = [3, 5, -4, 8, 11, 1, -1, 6]
// targetSum = 10
// Sample Output = [-1, 11] 


function twoNumberSum(array, targetSum) {
// Time = O(nlog(n)) , Space = O(1)
  let left = 0
  let right = array.length-1
  let sorted = array.sort((a, b) => a -b)

  while(array[left] < array[right]){
    let sum = array[left] + array[right]
    if(sum == targetSum){
      return [array[left], array[right]]
    } else if(sum < targetSum){
      left++
    } else if(sum > targetSum){
      right--
    }
  }
  return []
}
