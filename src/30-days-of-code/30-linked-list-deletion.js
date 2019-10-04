process.stdin.resume();
process.stdin.setEncoding("ascii");

function Node(data) {
    this.data = data;
    this.next = null;
}
function Solution() {
    this.removeDuplicates = function(head) {
        //Write your code here
        let current = head;
        while (current.next) {
            if (current.data == current.next.data) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }
        return head;
    };

    this.insert = function(head, data) {
        var p = new Node(data);
        if (head == null) {
            head = p;
        } else if (head.next == null) {
            head.next = p;
        } else {
            var start = head;
            while (start.next != null) {
                start = start.next;
            }
            start.next = p;
        }
        return head;
    };

    this.display = function(head) {
        var start = head;
        while (start) {
            process.stdout.write(start.data + " ");
            start = start.next;
        }
    };
}
function main(str) {
    input = str.split(" ").map(Number);
    const T = parseInt(input.splice(0, 1));
    var head = null;
    var mylist = new Solution();

    for (i = 0; i < T; i++) {
        var data = input[i];
        head = mylist.insert(head, data);
    }
    head = mylist.removeDuplicates(head);
    mylist.display(head);
}

main("6 1 2 2 3 3 4");
