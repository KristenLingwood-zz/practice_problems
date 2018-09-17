// https://leetcode.com/problems/max-area-of-island/description/


// python
// class Solution(object):
//     def maxAreaOfIsland(self, grid):
//         seen = set() 
//         def area(r, c):
//             if not (0 <= r < len(grid) and 0 <= c < len(grid[0])
//                     and (r, c) not in seen and grid[r][c]):
//                 return 0
//             seen.add((r, c))
//             return (1 + area(r+1, c) + area(r-1, c) +
//                     area(r, c-1) + area(r, c+1))

//         return max(area(r, c)
//                    for r in range(len(grid))
//                    for c in range(len(grid[0])))

function maxAreaOfIsland(grid) {
  let seen = new Set();
  let maxIslandSize = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      if (grid[row][col] !== 0 && !seen.has([row, col].toString())) {
        let currentIslandSize = 0;
        //stack is the neighbors to check
        let stack = [(row, col).toString()];
        seen.add((row, col).toString())
        while (stack.length > 0) {
          let coords = stack.pop();
          let [r, c] = coords.split(',');
          currentIslandSize++;
          if (grid[r - 1][c] && !seen.has(((r - 1), c).toString())) {
            stack.push(((r - 1, c).toString()));
            seen.add(((r - 1, c).toString()));
          }
          //continue thru for other 3 neighbors
        }
        maxIslandSize = Math.max(maxIslandSize, currentIslandSize)
      }
    }
  }
  return maxIslandSize;
}