/*
 replit problem in rithm7 classroom
 also leet code: https://leetcode.com/problems/min-cost-climbing-stairs/description/


Imagine an array of numbers, each number representing a cost. Your goal is to write a function called minCostTraversal which will traverse the array and select values from it in a way that minimizes the total cost.

Here's how it works: after paying the cost at an element, you can either move 1 or 2 spaces to the right in order. You can begin traversing through the array at index 0 or at index 1. You can assume that all costs will be positive whole numbers.

Examples

minCostTraversal([1, 2, 3]); // 2 - select the item at index 1
minCostTraversal([2, 10, 1, 1, 100, 3]); // 7 - skip over 10 and 100
minCostTraversal([2, 1, 3, 2, 1]); // 3
minCostTraversal([3, 2, 7, 9, 1, 3, 2, 10, 6, 1]); // 18

*/

/* 
- base case: if arr.length <= 1, return 0 (0 cost)
- recursive step: 

[1,2,3]
Math.min(1 + minCostTraversal([2,3]), (2 + minCostTraversal[3]))

*/

// Matt's solution, poor time complexity and doesn't pass on leet code
function minCostTraversal(nums) {
  if (nums.length <= 1) return 0;
  let oneStepCost = nums[0] + minCostTraversal(nums.slice(1));
  let twoStepCost = nums[1] + minCostTraversal(nums.slice(2))
  return Math.min(oneStepCost, twoStepCost);
}

// solution is dynamic programming
// process of breaking problem down into small subproblems 
// remember the values of the smaller subproblems -- store those values

