class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

const reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    const reverseLinkedList = (start, end) => {
        let prev = null;
        let current = start;
        while (current !== end) {
            let nextNode = current.next;
            current.next = prev;
            prev = current;
            current = nextNode;
        }
        return prev;
    };

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        let kth = groupPrev;
        for (let i = 0; i < k && kth; i++) {
            kth = kth.next;
        }
        if (!kth) break;

        let groupNext = kth.next;
        let groupStart = groupPrev.next;
        kth.next = null;

        groupPrev.next = reverseLinkedList(groupStart, groupNext);
        groupStart.next = groupNext;

        groupPrev = groupStart;
    }

    return dummy.next;
};
