// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


function solution(N, S) {
if(S === '') {
  return N*3
}
let count = 0;
let reserved = S.split(' ');
let planeMap = {};
for (let seat of reserved) {
  if (planeMap[seat[0]]) {
    planeMap[seat[0]].push(seat[1]);
  } else {
    planeMap[seat[0]] = [seat[1]];
  }
}
let i = 1;
while (i <= N) {
  i = i.toString();
  if (planeMap[i] === undefined) {
    count = count + 3;
    i++;
  } else if (planeMap[i].length > 0) {
    if (
      !planeMap[i].includes('A') &&
      !planeMap[i].includes('B') &&
      !planeMap[i].includes('C')
    ) {
      count++;
    }
    if (
      (!planeMap[i].includes('D') &&
      !planeMap[i].includes('E') &&
      !planeMap[i].includes('F')) || 
      (!planeMap[i].includes('E') &&
      !planeMap[i].includes('F') &&
      !planeMap[i].includes('G'))
    ) {
      count++;
    }
    if (
      !planeMap[i].includes('H') &&
      !planeMap[i].includes('J') &&
      !planeMap[i].includes('K')
    ) {
      count++;
    }
    i++;
  }
}

return count;
}
