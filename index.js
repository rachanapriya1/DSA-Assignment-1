// console.log("Hello world")
// const http= require('http');
// const server=http.createServer((req,res)=>{
// res.end('Hello World');
// }
// );
// const port_no=5001;
// server.listen(port_no,()=>{
//     console.log(`server is listening on port  ${port_no} `)
// });


// Delete the elements in an linked list whose sum is equal to zero
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    deleteZeroSumNodes() {
        let current = this.head;
        let sum = 0;
        let prev = null;
        while (current) {
            sum += current.data;
            if (sum === 0) {
                this.head = current.next;
                sum = 0;
            } else if (sum !== 0 && prev && sum === prev.data) {
                prev.next = current.next;
                sum = 0;
            }
            prev = current;
            current = current.next;
        }
    }
    printList() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const list = new LinkedList();
list.append(6);
list.append(0);
list.append(-6);
list.append(4);
list.append(-8);
list.append(2);
list.append(5);
console.log("Original Linked List:");
list.printList();
list.deleteZeroSumNodes();
console.log("\nLinked List after Deleting Nodes with Zero Sum:");
list.printList();



// Reverse a linked list in groups of given size
class NodeA {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedListA {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new NodeA(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    reverseInGroups(size) {
        let current = this.head;
        let prev = null;
        let next = null;
        let count = 0;
        while (current && count < size) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            count++;
        }
        if (next) {
            this.head.next = this.reverseInGroups(next, size);
        }
        return prev; 
    }
    printListA() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
const listA = new LinkedListA();
listA.append(1);
listA.append(2);
listA.append(3);
listA.append(4);
listA.append(5);
listA.append(6);
listA.append(7);
listA.append(8);
console.log("Original Linked List:");
listA.printListA();
// Reverse the linked list in groups of 5
listA.head = listA.reverseInGroups(5);
console.log("\nLinked List after Reversing in Groups of 3:");
listA.printListA();



// Merge a linked list into another linked list at alternate positions
class NodeB {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedListB {
    constructor() {
        this.head = null;
    }
    //To add a new node to the end of the linked list
    append(data) {
        const newNode = new NodeB(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    // To merge another linked list into this linked list at alternate positions
    mergeAlternatePositions(secondList) {
        let current1 = this.head;
        let current2 = secondList.head;
        while (current1 && current2) {
            let next1 = current1.next;
            let next2 = current2.next;
            current1.next = current2;
            current2.next = next1;
            current1 = next1;
            current2 = next2;
        }
        if (current2) {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = current2;
        }
    }
    //To print the linked list
    printListB() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}
// Create the first linked list
const list1 = new LinkedListB();
list1.append(1);
list1.append(3);
list1.append(5);
list1.append(7);
// Create the second linked list
const list2 = new LinkedListB();
list2.append(2);
list2.append(4);
list2.append(6);
// Merge the second linked list into the first linked list at alternate positions
list1.mergeAlternatePositions(list2);
// Print the merged linked list
console.log("Merged Linked List:");
list1.printListB();



// In an array, Count Pairs with given sum
function countPairsWithSum(arr, targetSum) {
    let count = 0;
    let hash = {};
    for (let num of arr) {
        let complement = targetSum - num;
        if (hash[complement]) {
            count++;
        }
        hash[num] = true;
    }
    return count;
}
// Example 
const arr = [ 1, 5, 7, -1 ];
const targetSum = 6;
console.log("Number of pairs with sum", targetSum, ":", countPairsWithSum(arr, targetSum));



// Find duplicates in an array
function findDuplicates(arr1) {
    let duplicates = [];
    let hash = {};
    for (let num of arr1) {
        if (hash[num]) {
            duplicates.push(num);
        } else {
            hash[num] = true;
        }
    }
    return duplicates;
}
// Example
const arr1 = [1, 2, 3, 4, 2, 5, 6, 1];
console.log("Duplicates in the array:", findDuplicates(arr1));



// Function to find the Kth largest and Kth smallest numbers in an array
function findKthLargestAndSmallest(arr2, k) {
    if (k <= 0 || k > arr2.length) {
        return "Invalid value of k";
    }
    let sortedArr = arr2.slice().sort((a, b) => a - b);
    let kthLargest = sortedArr[arr2.length - k];
    let kthSmallest = sortedArr[k - 1];
    return { kthLargest, kthSmallest };
}
// Example 
const arr2 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const k = 3;
console.log("Kth largest and Kth smallest numbers:", findKthLargestAndSmallest(arr2, k));



// Move all the negative elements to one side of the array
function moveNegativesToOneSide(arr3) {
    let left = 0;
    let right = arr3.length - 1;
    while (left <= right) {
        if (arr3[left] < 0 && arr3[right] < 0) {
            left++;
        } else if (arr3[left] > 0 && arr3[right] < 0) {
            let temp = arr3[left];
            arr3[left] = arr3[right];
            arr3[right] = temp;
            left++;
            right--;
        } else if (arr3[left] > 0 && arr3[right] > 0) {
            right--;
        } else {
            left++;
            right--;
        }
    }
    return arr3;
}
// Example 
const arr3 = [-1, 2, -3, 4, -5, 6, -7, 8, -9];
console.log("Array with negative elements moved to one side:", moveNegativesToOneSide(arr3));



// Reverse a string using a stack data structure
function reverseString(str) {
    const stack = [];
    for (let char of str) {
        stack.push(char);
    }
    let reversedStr = '';
    while (stack.length > 0) {
        reversedStr += stack.pop();
    }
    return reversedStr;
}
// Example
const str = "hello";
console.log("Reversed string:", reverseString(str));



// Evaluate a postfix expression using stack
function evaluatePostfixExpression(expression) {
    const stack = [];
    for (let token of expression) {
        if (!isNaN(token)) {
            stack.push(parseInt(token));
        } else {
            let operand2 = stack.pop();
            let operand1 = stack.pop();
            switch (token) {
                case '+':
                    stack.push(operand1 + operand2);
                    break;
                case '-':
                    stack.push(operand1 - operand2);
                    break;
                case '*':
                    stack.push(operand1 * operand2);
                    break;
                case '/':
                    stack.push(operand1 / operand2);
                    break;
            }
        }
    }
    return stack.pop();
}
// Example 
const expression = ["2", "3", "*", "5", "+"];
console.log("Result of postfix expression evaluation:", evaluatePostfixExpression(expression));



// Implementing a Queue using two Stacks
class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(element) {
        this.stack1.push(element);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}

// Example 
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.dequeue()); // Output: undefined
