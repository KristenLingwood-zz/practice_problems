// lowest common ancestor on binary search tree
// leet code https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/


// problem solving idea: example in leet code is too simple. Try with a much more complicated tree or several. 
// code at the very end after drawing a lot of pictures

// create a node from a value
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null
}

// make a binary search tree
// no assumption on how balanced the tree is. A node can have 0, 1, or 2 children
function BinarySearchTree() {
  this.root = null;
}

// make a push method for binary tree
BinarySearchTree.prototype.push = function (val) {
  let root = this.root
  // if there is no root, make the val being pushed a new node and assign it as root
  if (!root) {
    this.root = new Node(val);
    return;
  }
}


// look at some examples, note that the common ancestor is always between p & q


// Matt's solution
var lowestCommonAncestory = function (root, p, q) {
  let current = root;
  let minVal = Math.min(p.val, q.val)
  let maxVal = Math.max(p.val, q.val)
  while (true) {
    if (current.val < minVal) current = current.right;
    else if (current.val > maxVal) current = current.left;
    else return current;
  }
}

// ask questions like can I assume there is already a node class and a bst constructor?
// leet code -- console log the inputs to see what leet is doing for you under the hood