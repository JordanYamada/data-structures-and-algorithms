const LinkedList = require('./linked-list.js');

it('Where k is greater than the length of the linked list', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  expect(list.kFromEnd(3)).toEqual('Exception');
});
it('Where k and the length of the list are the same', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  expect(list.kFromEnd(2)).toEqual('Exception');
});
it('Where k is not a positive integer', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  expect(list.kFromEnd(-1)).toEqual('Exception');
});
it('Where k is not a positive integer', () => {
  let list = new LinkedList;
  list.insert('a');
  expect(list.kFromEnd(-1)).toEqual('Exception');
});
it('Where k is not greater than the length of list', () => {
  let list = new LinkedList;
  list.insert('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.append('e');
  expect(list.kFromEnd(2)).toEqual('c');
});
