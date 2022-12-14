const { BinarySearchTree } = require('./trees.js');

describe('Binary Search Tree', () => {
  test('successfully instantiate an empty tree', () => {
    const bst = new BinarySearchTree();
    expect(bst).toBeTruthy;
  });
  test('should successfully instantiate a tree with a single root node', () => {
    const bst = new BinarySearchTree();
    bst.add(1);
    expect(bst.root.value).toBe(1);
  });
  test('should can successfully add a left child and right child properly to a node', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);
    expect(bst.root.value).toBe(5);
    expect(bst.root.left.value).toBe(3);
    expect(bst.root.right.value).toBe(7);
  });
  test('should return true or false on contains method', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    expect(bst.contains(2)).toBeTruthy();
    expect(bst.contains(3)).toBeTruthy();
    expect(bst.contains(6)).toBeTruthy();
    expect(bst.contains(1)).toBeFalsy();
    expect(bst.contains(10)).toBeFalsy();
    expect(bst.contains(8)).toBeFalsy();
  });
  test('should successfully return a collection from an inorder traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);
    bst.add(9);
    bst.add(10);
    bst.add(1);
    const inOrderTraversalResult = bst.inOrder();
    expect(inOrderTraversalResult).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  test('should successfully return a collection from an preorder traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);
    bst.add(9);
    bst.add(10);
    bst.add(1);
    const preOrderTraversalResult = bst.preOrder();
    console.log(preOrderTraversalResult);
    expect(preOrderTraversalResult).toEqual([5, 3, 2, 1, 4, 7, 6, 8, 9, 10]);
  });

  test('should successfully return a collection from an postorder traversal', () => {
    const bst = new BinarySearchTree();
    bst.add(5);
    bst.add(3);
    bst.add(7);
    bst.add(2);
    bst.add(4);
    bst.add(6);
    bst.add(8);
    bst.add(9);
    bst.add(10);
    bst.add(1);
    const postOrderTraversalResult = bst.postOrder();
    expect(postOrderTraversalResult).toEqual([1, 2, 4, 3, 6, 10, 9, 8, 7, 5]);
  });
});
