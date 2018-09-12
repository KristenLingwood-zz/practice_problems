// lowest common ancestor on binary search tree
// leet code https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/


// create a node from a value
function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null
}

// make a binary search tree
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