# trees

## Challenge

### Node

- Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

### Binary Tree

- Create a Binary Tree class
  - Define a method for each of the depth first traversals which returns an array of the values, ordered appropriately:
    - pre order
    - in order
    - post order

### Binary Search Tree

- Extends Binary Tree class
  Add
  - Arguments: value
  - Return: nothing
  - Adds a new node with that value in the correct location in the binary search tree.

  - Contains
    - Argument: value
    - Returns: boolean indicating whether or not the value is in the tree at least once.

## Structure and Testing

Run [npm test code-challenge15] to run tests.

## Whiteboard Process

<!-- Embedded whiteboard image -->
![Whiteboard](./../images/CC15.jpg)

## Approach & Efficiency

<!-- What approach did you take? Discuss Why. What is the Big O space/time for this approach? -->

Time = O(logn)<br/>
Space = O(1)
