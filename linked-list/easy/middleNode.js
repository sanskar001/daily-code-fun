var middleNode = function(head) {
    if (head === null || head.next === null)
        return head;

    let fast = head;
    let slow = head;

    while (fast !== null) {
        fast = fast.next;
        if (fast !== null) {
            fast = fast.next;
            slow = slow.next;
        }
    }

    return slow;
};
