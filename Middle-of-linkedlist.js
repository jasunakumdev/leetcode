/**
 * 876. Middle of the Linked List
 */

var middleNode = function (head) {
  if (!head) return null

  let slow = head
  let fast = head

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
