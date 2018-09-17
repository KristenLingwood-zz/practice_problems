function equals(x, y) {
  if (x === null && y === null) return true
  if (x === null || y === null) return false;
  return (x.val === y.val && equals(x.left, y.left) && equals(x.right && y.right))
}

function isSubSet(s ,t) {
  if(s) {
    if(equals(s.val, t.val)) return true;
    return( isSubset(s.left, t) || isSubset(s.right, t))
  }
}

