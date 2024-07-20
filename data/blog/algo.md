---
title: "Data Structure"
date: "2024-07-18"
tags:
  - algorithms
  - dsa
  - computer-science
summary: "This blog post provides a comprehensive exploration of various data structures and their associated operations, including detailed Python code implementations and analysis of their time complexities."
authors: ["default"]
---

## Stack Data Structure and Operations

A stack is a linear data structure that follows the Last-In-First-Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed.

The basic operations that can be performed on a stack are:

**Push**
This operation adds an element to the top of the stack.

**Pop**
This operation removes and returns the top element from the stack.

**Peek**
This operation returns the top element of the stack without removing it.

**isEmpty**
This operation checks if the stack is empty.

**isFull**
This operation checks if the stack is full (has reached its maximum capacity).

**Pseudocode** for Stack Operations

#### Push Operation

```
Procedure PUSH(S, TOP, X):
    1. [Check for stack overflow]
    If TOP ≥ N
        Then write ('STACK OVERFLOW')
        Return
    2. [Increment TOP]
    TOP ← TOP + 1
    3. [Insert Element]
    S[TOP] ← X
    4. [Finished]
    Return
```

#### Pop Operation

```
Function POP(S, TOP):
    1. [Check for underflow of stack]
    If TOP = 0
        Then Write ('STACK UNDERFLOW ON POP')
        Take action in response to underflow
        Return
    2. [Decrement Pointer]
    TOP ← TOP - 1
    3. [Return former top element of stack]
    Return (S[TOP + 1])
```

#### Peek Operation

```
Function PEEK(S, TOP):
    1. [Check for underflow of stack]
    If TOP = 0
        Then Write ('STACK UNDERFLOW ON PEEK')
        Take action in response to underflow
        Return
    2. [Return top element of stack]
    Return (S[TOP])
```

#### isEmpty Operation

```
Function ISEMPTY(TOP):
    1. [Check if stack is empty]
    If TOP = -1
        Then return True
    Else
        return False
```

#### isFull Operation

```
Function ISFULL(TOP, N):
    1. [Check if stack is full]
    If TOP = N-1
        Then return True
    Else
        return False
```

### Python Implementation of Stack

```python
MAXSIZE = 8
stack = [0] * MAXSIZE
top = -1

def isfull():
    global top
    if top == MAXSIZE - 1:
        return True
    else:
        return False

def isempty():
    global top
    if top == -1:
        return True
    else:
        return False

def peek():
    global top
    if not isempty():
        return stack[top]
    else:
        print("Stack Underflow")
        return -1

def push(data):
    global top
    if isfull():
        print("Could not insert data, Stack is full.")
    else:
        top += 1
        stack[top] = data

def pop():
    global top
    if isempty():
        print("Could not retrieve data, Stack is empty.")
        return -1
    else:
        data = stack[top]
        top -= 1
        return data

# Example usage
push(44)
push(10)
push(62)
push(123)
push(15)

print("Stack Elements:", *stack[:top+1])
print("Element at top of the stack:", peek())

print("Popped element:", pop())
print("Stack Elements:", *stack[:top+1])
```

This Python implementation uses a fixed-size array to represent the stack. The `push()` operation adds an element to the top of the stack, and the `pop()` operation removes and returns the top element. The `peek()` operation returns the top element without removing it. The `isfull()` and `isempty()` functions check the state of the stack.

The output of the example usage will be:

```
Stack Elements: 44 10 62 123 15 0 0 0
Element at top of the stack: 15
Popped element: 15
Stack Elements: 44 10 62 123 0 0 0 0
```

### Time Complexity

| Operation | Time Complexity |
| --------- | --------------- |
| Push      | O(1)            |
| Pop       | O(1)            |
| Peek      | O(1)            |
| isEmpty   | O(1)            |
| isFull    | O(1)            |

### Application of Stack

#### Algorithm to Convert Postfix to Infix

1. Create an empty stack.
2. Iterate through each symbol in the postfix expression:
   a. If the symbol is an operand, push it onto the stack.
   b. If the symbol is an operator:
   - Pop the top two operands from the stack.
   - Create a string by concatenating the second popped operand, the operator, and the first popped operand.
   - Enclose the string with parentheses.
   - Push the resulting string back onto the stack.
3. After processing all symbols, there will be only one element left on the stack, which is the infix expression.

**Example:**
Convert the postfix expression "abc+\*" to infix.

1. Scan the postfix expression from left to right.
2. When 'a', 'b', and 'c' are encountered, push them onto the stack.
3. When '\*' is encountered:
   - Pop 'c' and 'b' from the stack.
   - Create the string "(b\*c)" and push it onto the stack.
4. When '+' is encountered:
   - Pop "(b\*c)" and 'a' from the stack.
   - Create the string "((a)+(b\*c))" and push it onto the stack.
5. After processing all symbols, the stack contains the infix expression "((a)+(b\*c))".

#### Algorithm to Convert Infix to Postfix

1. Create an empty stack and an empty string to store the postfix expression.
2. Iterate through each symbol in the infix expression:
   a. If the symbol is an operand, append it to the postfix string.
   b. If the symbol is an opening parenthesis, push it onto the stack.
   c. If the symbol is a closing parenthesis:
   - Pop operators from the stack and append them to the postfix string until an opening parenthesis is encountered.
   - Discard the opening parenthesis.
     d. If the symbol is an operator:
   - While the stack is not empty, the operator at the top of the stack has greater or equal precedence, and the top operator is not an opening parenthesis, pop operators from the stack and append them to the postfix string.
   - Push the current operator onto the stack.
3. While the stack is not empty, pop the remaining operators and append them to the postfix string.

**Example:**
Convert the infix expression "(a+b)\*c" to postfix.

1. Scan the infix expression from left to right.
2. When '(' is encountered, push it onto the stack.
3. When 'a' and 'b' are encountered, append them to the postfix string.
4. When '+' is encountered:
   - While the stack is not empty and the top operator is not '(', pop the top operator and append it to the postfix string.
   - Push '+' onto the stack.
5. When ')' is encountered:
   - Pop operators from the stack and append them to the postfix string until '(' is encountered.
   - Discard '(' from the stack.
6. When '\*' is encountered:
   - While the stack is not empty, the top operator has greater or equal precedence, and the top operator is not '(', pop the top operator and append it to the postfix string.
   - Push '\*' onto the stack.
7. When 'c' is encountered, append it to the postfix string.
8. After processing all symbols, pop the remaining operators from the stack and append them to the postfix string.

The final postfix expression is "ab+c\*".

## Singly Linked List Operations

Based on the search results from the GeeksforGeeks article, here are the algorithms and Python code for the various operations on a singly linked list.

### Traversal

**Pseudocode**

```
Function TRAVERSE(head):
    1. Initialize a pointer 'current' to the head of the list.
    2. Use a while loop to iterate through the list until the 'current' pointer reaches NULL.
    3. Inside the loop, print the data of the current node and move the 'current' pointer to the next node.
```

**Python Code**

```python
def traverse_linked_list(head):
    # Start from the head of the linked list
    current = head

    # Traverse the linked list until reaching the end (None)
    while current is not None:
        # Print the data of the current node
        print(current.data)

        # Move to the next node
        current = current.next

    print()
```

### Searching

**Pseudocode**

```
Function SEARCH(head, target):
    1. Traverse the Linked List starting from the head.
    2. Check if the current node's data matches the target value.
    3. If a match is found, return True.
    4. Otherwise, move to the next node and repeat step 2.
    5. If the end of the list is reached without finding a match, return False.
```

**Python Code**

```python
def search_linked_list(head, target):
    # Traverse the Linked List
    current = head
    while current is not None:
        # Check if the current node's data matches the target value
        if current.data == target:
            return True  # Value found

        # Move to the next node
        current = current.next

    return False  # Value not found
```

### Finding Length

**Pseudocode**

```
Function FIND_LENGTH(head):
    1. Initialize a counter 'length' to 0.
    2. Start from the head of the list, assign it to 'current'.
    3. Traverse the list:
        a. Increment 'length' for each node.
        b. Move to the next node ('current = current->next').
    4. Return the final value of 'length'.
```

**Python Code**

```python
def find_length(head):
    # Initialize a counter for the length
    length = 0

    # Start from the head of the list
    current = head

    # Traverse the list and increment the length for each node
    while current is not None:
        length += 1
        current = current.next

    return length
```

### Insertion

**Insertion at the Beginning** **Pseudocode**

```
Function INSERT_AT_BEGINNING(head, value):
    1. Create a new node with the given value.
    2. Set the next pointer of the new node to the current head.
    3. Move the head to point to the new node.
    4. Return the new head of the linked list.
```

**Python Code**

```python
def insert_at_beginning(head, value):
    # Create a new node with the given value
    new_node = Node(value)

    # Set the next pointer of the new node to the current head
    new_node.next = head

    # Move the head to point to the new node
    head = new_node

    return head
```

**Insertion at the End** **Pseudocode**

```
Function INSERT_AT_END(head, value):
    1. Create a new node with the given value.
    2. If the list is empty, make the new node the head and return.
    3. Traverse the list until the last node is reached.
    4. Link the new node to the current last node by setting the last node's next pointer to the new node.
```

**Python Code**

```python
def insert_at_end(head, value):
    # Create a new node with the given value
    new_node = Node(value)

    # If the list is empty, make the new node the head
    if head is None:
        return new_node

    # Traverse the list until the last node is reached
    current = head
    while current.next is not None:
        current = current.next

    # Link the new node to the current last node
    current.next = new_node

    return head
```

**Insertion at a Specific Position** **Pseudocode**

```
Function INSERT_AT_POSITION(head, pos, value):
    1. Check if the given position is valid.
    2. If invalid, print "Invalid position!" and exit.
    3. Loop until 'pos' reaches 0:
        a. If 'pos' is 0:
            - Create a new node with the given data.
            - Set the new node's next pointer to the current node.
            - Update the current node to the new node.
        b. Else, move to the next node by updating the double pointer.
    4. Increment the size of the linked list.
```

**Python Code**

```python
def insert_at_position(head, pos, value):
    # Check if the given position is valid
    if pos < 1 or pos > size + 1:
        print("Invalid position!")
        return head

    # Keep looping until the pos is zero
    current = head
    while pos > 1:
        if pos == 1:
            # Adding node at the required position
            temp = Node(value)
            temp.next = current
            current = temp
        else:
            # Move to the next node
            current = current.next
        pos -= 1

    size += 1
    return current
```

### Time Complexity of Singly Linked List Operations

Based on the search results, here is a table summarizing the time complexity of various operations on a singly linked list in the best, average, and worst cases:

| Operation                        | Best Case | Average Case | Worst Case |
| -------------------------------- | --------- | ------------ | ---------- |
| Traversal                        | O(1)      | O(n)         | O(n)       |
| Searching                        | O(1)      | O(n)         | O(n)       |
| Finding Length                   | O(1)      | O(n)         | O(n)       |
| Insertion at Beginning           | O(1)      | O(1)         | O(1)       |
| Insertion at End                 | O(1)      | O(n)         | O(n)       |
| Insertion at a Specific Position | O(1)      | O(n)         | O(n)       |
| Deletion                         | O(1)      | O(n)         | O(n)       |

## Doubly Linked List Operations

Here are the algorithms and Python code for the various operations on a doubly linked list, with comments explaining each step.

### Traversal

**Pseudocode**

```
Function TRAVERSE_FORWARD(head):
    1. Initialize a pointer 'current' to the head of the list.
    2. Use a while loop to iterate through the list until the 'current' pointer reaches NULL.
    3. Inside the loop, print the data of the current node and move the 'current' pointer to the next node.

Function TRAVERSE_BACKWARD(tail):
    1. Initialize a pointer 'current' to the tail of the list.
    2. Use a while loop to iterate through the list until the 'current' pointer reaches NULL.
    3. Inside the loop, print the data of the current node and move the 'current' pointer to the previous node.
```

**Python Code**

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

def traverse_forward(head):
    # Start from the head of the linked list
    current = head

    # Traverse the linked list until reaching the end (None)
    while current is not None:
        # Print the data of the current node
        print(current.data, end=" ")

        # Move to the next node
        current = current.next

    print()

def traverse_backward(tail):
    # Start from the tail of the linked list
    current = tail

    # Traverse the linked list until reaching the beginning (None)
    while current is not None:
        # Print the data of the current node
        print(current.data, end=" ")

        # Move to the previous node
        current = current.prev

    print()
```

You're right, the search operation code was missing in the previous response. Here's the algorithm, pseudocode, and Python code for the search operation in a doubly linked list:

### Searching

**Pseudocode**

```
Function SEARCH(head, target):
    1. Initialize a pointer 'current' to the head of the list.
    2. Use a while loop to iterate through the list until the 'current' pointer reaches NULL.
    3. Inside the loop, check if the data of the current node matches the target value.
    4. If a match is found, return True.
    5. Otherwise, move to the next node by updating the 'current' pointer.
    6. If the end of the list is reached without finding a match, return False.
```

**Python Code**

```python
def search_doubly_linked_list(head, target):
    # Start from the head of the linked list
    current = head

    # Traverse the linked list until reaching the end (None)
    while current is not None:
        # Check if the current node's data matches the target value
        if current.data == target:
            return True  # Value found

        # Move to the next node
        current = current.next

    return False  # Value not found
```

### Insertion

**Insertion at the Beginning**
**Pseudocode**

```
Function INSERT_AT_BEGINNING(head, value):
    1. Create a new node with the given value.
    2. Set the previous pointer of the new node to NULL.
    3. If the list is empty:
        a. Set the next pointer of the new node to NULL.
        b. Update the head pointer to point to the new node.
    4. If the list is not empty:
        a. Set the next pointer of the new node to the current head.
        b. Update the previous pointer of the current head to point to the new node.
        c. Update the head pointer to point to the new node.
    5. Return the new head of the linked list.
```

**Python Code**

```python
def insert_at_beginning(head, value):
    # Create a new node with the given value
    new_node = Node(value)

    # Set the previous pointer of the new node to None
    new_node.prev = None

    # If the list is empty, make the new node the head
    if head is None:
        # Set the next pointer of the new node to None
        new_node.next = None

        # Update the head pointer to point to the new node
        head = new_node
    else:
        # Point the new node's next pointer to the current head
        new_node.next = head

        # Update the previous pointer of the current head to point to the new node
        head.prev = new_node

        # Update the head pointer to point to the new node
        head = new_node

    return head
```

**Insertion at the End**
**Pseudocode**

```
Function INSERT_AT_END(head, value):
    1. Create a new node with the given value.
    2. Set the next pointer of the new node to NULL.
    3. If the list is empty:
        a. Set the previous pointer of the new node to NULL.
        b. Update the head pointer to point to the new node.
    4. If the list is not empty:
        a. Traverse the list starting from the head to reach the last node.
        b. Adjust pointers to insert the new node at the end:
           - Set the next pointer of the last node to point to the new node.
           - Set the previous pointer of the new node to point to the last node.
    5. Return the head of the linked list.
```

**Python Code**

```python
def insert_at_end(head, value):
    # Create a new node with the given value
    new_node = Node(value)

    # Set the next pointer of the new node to None
    new_node.next = None

    # If the list is empty, make the new node the head
    if head is None:
        # Set the previous pointer of the new node to None
        new_node.prev = None

        # Update the head pointer to point to the new node
        head = new_node
    else:
        # Start from the head of the list
        current = head

        # Traverse to the end of the list
        while current.next is not None:
            current = current.next

        # Adjust pointers to insert the new node at the end
        # Set the next pointer of the last node to point to the new node
        current.next = new_node

        # Set the previous pointer of the new node to point to the last node
        new_node.prev = current

    return head
```

**Insertion at a Specific Position**
**Pseudocode**

```
Function INSERT_AT_POSITION(head, pos, value):
    1. Create a new node with the given value.
    2. If pos is 1:
        a. Set the previous pointer of the new node to NULL.
        b. If the list is empty:
           - Set the next pointer of the new node to NULL.
           - Update the head pointer to point to the new node.
        c. If the list is not empty:
           - Set the next pointer of the new node to the current head.
           - Update the previous pointer of the current head to point to the new node.
           - Update the head pointer to point to the new node.
    3. If pos is greater than 1:
        a. Traverse the list until the (pos-1)th node is reached.
        b. Set the next pointer of the (pos-1)th node to the new node.
        c. Set the previous pointer of the new node to the (pos-1)th node.
        d. Set the next pointer of the new node to the next node of the (pos-1)th node.
        e. Set the previous pointer of the next node of the (pos-1)th node to the new node.
    4. Return the head of the linked list.
```

**Python Code**

```python
def insert_at_position(head, pos, value):
    # Create a new node with the given value
    new_node = Node(value)

    # If pos is 1, insert at the beginning
    if pos == 1:
        # Set the previous pointer of the new node to None
        new_node.prev = None

        # If the list is empty, make the new node the head
        if head is None:
            # Set the next pointer of the new node to None
            new_node.next = None
        else:
            # Point the new node's next pointer to the current head
            new_node.next = head

            # Update the previous pointer of the current head to point to the new node
            head.prev = new_node

        # Update the head pointer to point to the new node
        head = new_node
    else:
        # Start from the head of the list
        current = head

        # Traverse to the (pos-1)th node
        for i in range(pos - 2):
            if current is None:
                # If the position is out of range, return the original list
                return head
            current = current.next

        # If the (pos-1)th node is not None
        if current is not None:
            # Set the next pointer of the new node to the next node of the (pos-1)th node
            new_node.next = current.next

            # Set the previous pointer of the new node to the (pos-1)th node
            new_node.prev = current

            # Update the next pointer of the (pos-1)th node to point to the new node
            current.next = new_node

            # If the new node is not inserted at the end
            if new_node.next is not None:
                # Update the previous pointer of the next node of the new node to point to the new node
                new_node.next.prev = new_node

    return head
```

### Deletion

**Deletion at the Beginning**
**Pseudocode**

```
Function DELETE_AT_BEGINNING(head):
    1. If the list is empty, return the head.
    2. Store the head pointer in a temporary variable.
    3. Update the head pointer to point to the next node.
    4. If the next node exists:
        a. Set the previous pointer of the new head to NULL.
    5. Free the memory occupied by the old head node.
    6. Return the new head pointer.
```

**Python Code**

```python
def delete_at_beginning(head):
    # If the list is empty, return the head
    if head is None:
        return head

    # Store the head pointer in a temporary variable
    temp = head

    # Update the head pointer to point to the next node
    head = head.next

    # If the next node exists
    if head is not None:
        # Set the previous pointer of the new head to None
        head.prev = None

    # Free the memory occupied by the old head node
    del temp

    return head
```

**Deletion at the End**
**Pseudocode**

```
Function DELETE_AT_END(head):
    1. If the list is empty or has only one node, return the head.
    2. Initialize a pointer 'current' to the head of the list.
    3. Traverse the list until the last node is reached.
    4. Update the next pointer of the second last node to NULL.
    5. Set the previous pointer of the last node to NULL.
    6. Free the memory occupied by the last node.
    7. Return the head pointer.
```

**Python Code**

```python
def delete_at_end(head):
    # If the list is empty or has only one node, return the head
    if head is None or head.next is None:
        return head

    # Initialize a pointer to the head of the list
    current = head

    # Traverse the list until the last node is reached
    while current.next is not None:
        current = current.next

    # Store the last node in a temporary variable
    temp = current

    # Update the next pointer of the second last node to None
    current.prev.next = None

    # Free the memory occupied by the last node
    del temp

    return head
```

**Deletion at a Specific Position**
**Pseudocode**

```
Function DELETE_AT_POSITION(head, pos):
    1. If the list is empty, return the head.
    2. If pos is 1:
        a. Store the head pointer in a temporary variable.
        b. Update the head pointer to point to the next node.
        c. If the next node exists:
           - Set the previous pointer of the new head to NULL.
        d. Free the memory occupied by the old head node.
        e. Return the new head pointer.
    3. If pos is greater than 1:
        a. Traverse the list until the (pos-1)th node is reached.
        b. Store the next pointer of the (pos-1)th node in a temporary variable.
        c. Set the next pointer of the (pos-1)th node to the next of the next node.
        d. If the next node of the next node exists:
           - Set the previous pointer of the next node of the next node to the (pos-1)th node.
        e. Free the memory occupied by the node at position pos.
    4. Return the head pointer.
```

**Python Code**

```python
def delete_at_position(head, pos):
    # If the list is empty, return the head
    if head is None:
        return head

    # If pos is 1, delete the first node
    if pos == 1:
        # Store the head pointer in a temporary variable
        temp = head

        # Update the head pointer to point to the next node
        head = head.next

        # If the next node exists
        if head is not None:
            # Set the previous pointer of the new head to None
            head.prev = None

        # Free the memory occupied by the old head node
        del temp

        return head

    # Initialize a pointer to the head of the list
    current = head

    # Traverse to the (pos-1)th node
    for i in range(pos - 2):
        # If the position is out of range, return the original list
        if current is None:
            return head
        current = current.next

    # If the (pos-1)th node is not None
    if current is not None and current.next is not None:
        # Store the next pointer of the (pos-1)th node in a temporary variable
        temp = current.next

        # Update the next pointer of the (pos-1)th node to skip the next node
        current.next = temp.next

        # If the next node of the next node exists
        if temp.next is not None:
            # Set the previous pointer of the next node of the next node to the (pos-1)th node
            temp.next.prev = current

        # Free the memory occupied by the node at position pos
        del temp

    return head
```

### Time Complexity of Double Linked List Operations

| Operation                        | Best Case | Average Case | Worst Case |
| -------------------------------- | --------- | ------------ | ---------- |
| Traversal (Forward)              | O(1)      | O(n)         | O(n)       |
| Traversal (Backward)             | O(1)      | O(n)         | O(n)       |
| Searching                        | O(1)      | O(n)         | O(n)       |
| Finding Length                   | O(1)      | O(n)         | O(n)       |
| Insertion at the Beginning       | O(1)      | O(1)         | O(1)       |
| Insertion at the End             | O(1)      | O(n)         | O(n)       |
| Insertion at a Specific Position | O(1)      | O(n)         | O(n)       |
| Deletion at the Beginning        | O(1)      | O(1)         | O(1)       |
| Deletion at the End              | O(1)      | O(n)         | O(n)       |
| Deletion at a Specific Position  | O(1)      | O(n)         | O(n)       |

Sure, here are the algorithms, pseudocode, and Python code for the various operations on a circular linked list.

## Circular Linked List Operations

### Traversal

**Pseudocode**

```
Function TRAVERSE(head):
    1. If the list is empty, print "List is empty" and return.
    2. Initialize a pointer 'current' to the head of the list.
    3. Use a while loop to iterate through the list until the 'current' pointer reaches the head again.
    4. Inside the loop, print the data of the current node and move the 'current' pointer to the next node.
```

**Python Code**

```python
def traverse_circular_linked_list(head):
    # If the list is empty, print "List is empty" and return
    if head is None:
        print("List is empty")
        return

    # Initialize a pointer to the head of the list
    current = head

    # Traverse the list until the head is reached again
    while True:
        # Print the data of the current node
        print(current.data, end=" ")

        # Move to the next node
        current = current.next

        # Stop the loop when the head is reached again
        if current == head:
            break

    print()
```

### Searching

**Pseudocode**

```
Function SEARCH(head, target):
    1. If the list is empty, return False.
    2. Initialize a pointer 'current' to the head of the list.
    3. Use a while loop to iterate through the list until the 'current' pointer reaches the head again.
    4. Inside the loop, check if the data of the current node matches the target value.
    5. If a match is found, return True.
    6. Otherwise, move to the next node by updating the 'current' pointer.
    7. If the head is reached again without finding a match, return False.
```

**Python Code**

```python
def search_circular_linked_list(head, target):
    # If the list is empty, return False
    if head is None:
        return False

    # Initialize a pointer to the head of the list
    current = head

    # Traverse the list until the head is reached again
    while True:
        # Check if the current node's data matches the target value
        if current.data == target:
            return True  # Value found

        # Move to the next node
        current = current.next

        # Stop the loop when the head is reached again
        if current == head:
            break

    return False  # Value not found
```

### Insertion

**Insertion at the Beginning**
**Pseudocode**

```
Function INSERT_AT_BEGINNING(head, value):
    1. Create a new node with the given value.
    2. If the list is empty:
        a. Set the next pointer of the new node to itself.
        b. Update the head pointer to point to the new node.
    3. If the list is not empty:
        a. Traverse the list until the last node is reached.
        b. Set the next pointer of the last node to the new node.
        c. Set the next pointer of the new node to the current head.
        d. Update the head pointer to point to the new node.
    4. Return the new head of the linked list.
```

**Python Code**

```python
def insert_at_beginning_circular(head, value):
    # Create a new node with the given value
    new_node = Node(value)

    # If the list is empty
    if head is None:
        # Set the next pointer of the new node to itself
        new_node.next = new_node

        # Update the head pointer to point to the new node
        head = new_node
    else:
        # Traverse the list until the last node is reached
        current = head
        while current.next != head:
            current = current.next

        # Set the next pointer of the last node to the new node
        current.next = new_node

        # Set the next pointer of the new node to the current head
        new_node.next = head

        # Update the head pointer to point to the new node
        head = new_node

    return head
```

**Insertion at the End**
**Pseudocode**

```
Function INSERT_AT_END(head, value):
    1. Create a new node with the given value.
    2. If the list is empty:
        a. Set the next pointer of the new node to itself.
        b. Update the head pointer to point to the new node.
    3. If the list is not empty:
        a. Traverse the list until the last node is reached.
        b. Set the next pointer of the last node to the new node.
        c. Set the next pointer of the new node to the current head.
    4. Return the head of the linked list.
```

**Python Code**

```python
def insert_at_end_circular(head, value):
    # Create a new node with the given value
    new_node = Node(value)

    # If the list is empty
    if head is None:
        # Set the next pointer of the new node to itself
        new_node.next = new_node

        # Update the head pointer to point to the new node
        head = new_node
    else:
        # Traverse the list until the last node is reached
        current = head
        while current.next != head:
            current = current.next

        # Set the next pointer of the last node to the new node
        current.next = new_node

        # Set the next pointer of the new node to the current head
        new_node.next = head

    return head
```

### Deletion

**Deletion at the Beginning**
**Pseudocode**

```
Function DELETE_AT_BEGINNING(head):
    1. If the list is empty, return the head.
    2. If the list has only one node:
        a. Store the head pointer in a temporary variable.
        b. Update the head pointer to NULL.
        c. Free the memory occupied by the old head node.
        d. Return NULL.
    3. Traverse the list until the last node is reached.
    4. Store the next pointer of the last node in a temporary variable.
    5. Update the next pointer of the last node to point to the second node (the new head).
    6. Store the head pointer in a temporary variable.
    7. Update the head pointer to point to the new head.
    8. Free the memory occupied by the old head node.
    9. Return the new head pointer.
```

**Python Code**

```python
def delete_at_beginning_circular(head):
    # If the list is empty, return the head
    if head is None:
        return head

    # If the list has only one node
    if head.next == head:
        # Store the head pointer in a temporary variable
        temp = head

        # Update the head pointer to None
        head = None

        # Free the memory occupied by the old head node
        del temp

        return head

    # Traverse the list until the last node is reached
    current = head
    while current.next != head:
        current = current.next

    # Store the next pointer of the last node in a temporary variable
    temp = current.next

    # Update the next pointer of the last node to point to the new head
    current.next = temp.next

    # Store the head pointer in a temporary variable
    old_head = head

    # Update the head pointer to point to the new head
    head = temp.next

    # Free the memory occupied by the old head node
    del temp

    return head
```

**Deletion at the End**
**Pseudocode**

```
Function DELETE_AT_END(head):
    1. If the list is empty, return the head.
    2. If the list has only one node:
        a. Store the head pointer in a temporary variable.
        b. Update the head pointer to NULL.
        c. Free the memory occupied by the old head node.
        d. Return NULL.
    3. Traverse the list until the second-to-last node is reached.
    4. Store the next pointer of the second-to-last node in a temporary variable.
    5. Update the next pointer of the second-to-last node to point to the head.
    6. Free the memory occupied by the last node.
    7. Return the head pointer.
```

**Python Code**

```python
def delete_at_end_circular(head):
    # If the list is empty, return the head
    if head is None:
        return head

    # If the list has only one node
    if head.next == head:
        # Store the head pointer in a temporary variable
        temp = head

        # Update the head pointer to None
        head = None

        # Free the memory occupied by the old head node
        del temp

        return head

    # Traverse the list until the second-to-last node is reached
    current = head
    while current.next.next != head:
        current = current.next

    # Store the next pointer of the second-to-last node in a temporary variable
    temp = current.next

    # Update the next pointer of the second-to-last node to point to the head
    current.next = head

    # Free the memory occupied by the last node
    del temp

    return head
```

### Time Complexity of Circular Linked List Operations

| Operation                  | Best Case | Average Case | Worst Case |
| -------------------------- | --------- | ------------ | ---------- |
| Traversal                  | O(1)      | O(n)         | O(n)       |
| Searching                  | O(1)      | O(n)         | O(n)       |
| Insertion at the Beginning | O(1)      | O(1)         | O(1)       |
| Insertion at the End       | O(1)      | O(n)         | O(n)       |
| Deletion at the Beginning  | O(1)      | O(1)         | O(1)       |
| Deletion at the End        | O(1)      | O(n)         | O(n)       |

Here's the pseudocode and the commented Python code for the queue operations:

## Queue Operations Using Array

Sure, here's the implementation with the pseudocode first, followed by the Python code for each queue operation:

**Pseudocode**

```
INITIALIZE an array of size maxQueueSize
Set front (f) and rear (r) to -1 initially
```

**Python Code**

```python
class Queue:
    def __init__(self, max_queue_size):
        # Initialize the queue with the given maximum size
        self.max_queue_size = max_queue_size
        self.queue = [None] * max_queue_size
        self.front = -1
        self.rear = -1
```

### Enqueue

**Pseudocode**

```
FUNCTION enqueue(value):
    IF queue is not full:
        INCREMENT rear by 1
        SET the value at index rear of the array
    ELSE:
        PRINT "Queue overflow"
```

**Python Code**

```python
def enqueue(self, value):
    # Add an element to the rear of the queue
    if self.is_full():
        print("Queue overflow")
    else:
        self.rear += 1
        self.queue[self.rear] = value
```

### Dequeue

**Pseudocode**

```
FUNCTION dequeue():
    IF queue is not empty:
        INCREMENT front by 1
        RETURN the value at index front of the array
    ELSE:
        PRINT "Queue underflow"
```

**Python Code**

```python
def dequeue(self):
    # Remove an element from the front of the queue
    if self.is_empty():
        print("Queue underflow")
    else:
        self.front += 1
        return self.queue[self.front]
```

### isEmpty

**Pseudocode**

```
FUNCTION is_empty():
    IF rear == front:
        RETURN True
    ELSE:
        RETURN False
```

**Python Code**

```python
def is_empty(self):
    # Check if the queue is empty
    if self.rear == self.front:
        return True
    else:
        return False
```

### isFull

**Pseudocode**

```
FUNCTION is_full():
    IF rear == maxQueueSize - 1:
        RETURN True
    ELSE:
        RETURN False
```

**Python Code**

```python
def is_full(self):
    # Check if the queue is full
    if self.rear == self.max_queue_size - 1:
        return True
    else:
        return False
```

### Display

**Pseudocode**

```
FUNCTION display():
    IF queue is empty:
        PRINT "Queue is empty"
    ELSE:
        PRINT all the elements in the queue
```

**Python Code**

```python
def display(self):
    # Display the elements in the queue
    if self.is_empty():
        print("Queue is empty")
    else:
        print("Queue elements are:")
        for i in range(self.front, self.rear + 1):
            print(self.queue[i], end=" ")
        print()
```

### Time Complexity of Queue Operations using Array

| Operation | Best Case | Average Case | Worst Case |
| --------- | --------- | ------------ | ---------- |
| Enqueue   | O(1)      | O(1)         | O(1)       |
| Dequeue   | O(1)      | O(1)         | O(1)       |
| IsEmpty   | O(1)      | O(1)         | O(1)       |
| IsFull    | O(1)      | O(1)         | O(1)       |
| Display   | O(n)      | O(n)         | O(n)       |

Here's the implementation of the queue operations using a linked list in Python, along with the time complexity analysis:

## Queue Class Using Linked List

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
```

### Enqueue

```python
def enqueue(self, value):
    # Add an element to the rear of the queue
    new_node = Node(value)
    if self.rear is None:
        self.front = self.rear = new_node
    else:
        self.rear.next = new_node
        self.rear = new_node
```

### Dequeue

```python
def dequeue(self):
    # Remove an element from the front of the queue
    if self.is_empty():
        print("Queue underflow")
        return None
    else:
        value = self.front.value
        self.front = self.front.next
        if self.front is None:
            self.rear = None
        return value
```

### isEmpty

```python
def is_empty(self):
    # Check if the queue is empty
    return self.front is None
```

### Display

```python
def display(self):
    # Display the elements in the queue
    if self.is_empty():
        print("Queue is empty")
    else:
        current = self.front
        print("Queue elements are:", end=" ")
        while current:
            print(current.value, end=" ")
            current = current.next
        print()
```

### Time Complexity of Queue Operations using Linked List

| Operation | Best Case | Average Case | Worst Case |
| --------- | --------- | ------------ | ---------- |
| Enqueue   | O(1)      | O(1)         | O(1)       |
| Dequeue   | O(1)      | O(1)         | O(1)       |
| IsEmpty   | O(1)      | O(1)         | O(1)       |
| Display   | O(n)      | O(n)         | O(n)       |

Sure, here's the implementation of circular queue operations with separate headings for each operation:

## Circular Queue (Array)

### Circular Queue Class

```python
class CircularQueue:
    def __init__(self, max_size):
        self.max_size = max_size
        self.queue = [None] * max_size
        self.front = 0
        self.rear = 0
```

### Enqueue Operation

**Pseudocode**

```
FUNCTION enqueue(value):
    IF ((r + 1) % maxQueueSize) == f:
        PRINT "Queue overflow"
    ELSE IF f == -1:
        SET f = r = 0
        SET the value at index r of the array
    ELSE:
        INCREMENT r by 1 (using modulo)
        SET the value at index r of the array
```

**Python Code**

```python
def enqueue(self, value):
    if (self.rear + 1) % self.max_size == self.front:
        print("Queue overflow")
    elif self.front == -1:
        self.front = self.rear = 0
        self.queue[self.rear] = value
    else:
        self.rear = (self.rear + 1) % self.max_size
        self.queue[self.rear] = value
```

### Dequeue Operation

**Pseudocode**

```
FUNCTION dequeue():
    IF f == -1:
        PRINT "Queue underflow"
        RETURN NULL
    ELSE:
        GET the value at index f of the array
        IF f == r:
            SET f = r = -1
        ELSE:
            INCREMENT f by 1 (using modulo)
        RETURN the value
```

**Python Code**

```python
def dequeue(self):
    # Check if the queue is empty
    if self.front == -1:
        print("Queue underflow")
        return None
    else:
        # Get the value at the front of the queue
        value = self.queue[self.front]
        # If there is only one element in the queue
        if self.front == self.rear:
            self.front = self.rear = -1
        else:
            # Move the front pointer to the next element
            self.front = (self.front + 1) % self.max_size
        return value
```

### isEmpty Operation

**Pseudocode**

```
FUNCTION is_empty():
    IF f == r:
        RETURN True
    ELSE:
        RETURN False
```

**Python Code**

```python
def is_empty(self):
    return self.front == -1
```

### isFull Operation

**Pseudocode**

```
FUNCTION is_full():
    IF (r + 1) % maxQueueSize == f:
        RETURN True
    ELSE:
        RETURN False
```

**Python Code**

```python
def is_full(self):
    return (self.rear + 1) % self.max_size == self.front
```

### Display Operation

**Pseudocode**

```
FUNCTION display():
    IF is_empty():
        PRINT "Queue is empty"
    ELSE:
        PRINT all the elements in the queue
```

**Python Code**

```python
def display(self):
    if self.is_empty():
        print("Queue is empty")
    else:
        print("Queue elements are:", end=" ")
        i = self.front
        while i != self.rear:
            print(self.queue[i], end=" ")
            i = (i + 1) % self.max_size
        print(self.queue[i])
```

### Time complexity of Circular Queue (Array)

| Operation | Best Case | Average Case | Worst Case |
| --------- | --------- | ------------ | ---------- |
| Enqueue   | O(1)      | O(1)         | O(1)       |
| Dequeue   | O(1)      | O(1)         | O(1)       |
| IsEmpty   | O(1)      | O(1)         | O(1)       |
| IsFull    | O(1)      | O(1)         | O(1)       |
| Display   | O(n)      | O(n)         | O(n)       |

## Circular Queue (Linked List)

```python
class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class CircularQueue:
    def __init__(self):
        self.front = None
        self.rear = None
```

### Enqueue Operation

**Pseudocode**

```
FUNCTION enqueue(value):
    CREATE a new node with the given value
    IF rear is None:
        SET front and rear to the new node
        SET the next pointer of the new node to itself
    ELSE:
        SET the next pointer of the new node to the front
        SET the next pointer of the rear to the new node
        SET rear to the new node
```

**Python Code**

```python
def enqueue(self, value):
    # Create a new node with the given value
    new_node = Node(value)

    if self.rear is None:
        # If the queue is empty, set the front and rear to the new node
        self.front = self.rear = new_node
        self.rear.next = self.front
    else:
        # Set the next pointer of the current rear to the new node
        self.rear.next = new_node
        # Update the rear to the new node
        self.rear = new_node
        # Set the next pointer of the rear to the front
        self.rear.next = self.front
```

### Dequeue Operation

**Pseudocode**

```
FUNCTION dequeue():
    IF front is None:
        PRINT "Queue underflow"
        RETURN None
    ELSE:
        GET the value of the front node
        IF front == rear:
            SET front and rear to None
        ELSE:
            SET front to the next node of front
            SET the next pointer of the rear to the front
        RETURN the value
```

**Python Code**

```python
def dequeue(self):
    # Check if the queue is empty
    if self.is_empty():
        print("Queue underflow")
        return None
    else:
        # Get the value of the front node
        value = self.front.value
        # If there is only one element in the queue
        if self.front == self.rear:
            self.front = self.rear = None
        else:
            # Move the front pointer to the next node
            self.front = self.front.next
            # Set the next pointer of the rear to the front
            self.rear.next = self.front
        return value
```

### isEmpty Operation

**Pseudocode**

```
FUNCTION is_empty():
    IF front is None:
        RETURN True
    ELSE:
        RETURN False
```

**Python Code**

```python
def is_empty(self):
    return self.front is None
```

### Display Operation

**Pseudocode**

```
FUNCTION display():
    IF is_empty():
        PRINT "Queue is empty"
    ELSE:
        PRINT all the elements in the queue
```

**Python Code**

```python
def display(self):
    if self.is_empty():
        print("Queue is empty")
    else:
        current = self.front
        print("Queue elements are:", end=" ")
        while current.next != self.front:
            print(current.value, end=" ")
            current = current.next
        print(current.value)
```

### Time complexity of Circular Queue (Linked List)

| Operation | Best Case | Average Case | Worst Case |
| --------- | --------- | ------------ | ---------- |
| Enqueue   | O(1)      | O(1)         | O(1)       |
| Dequeue   | O(1)      | O(1)         | O(1)       |
| IsEmpty   | O(1)      | O(1)         | O(1)       |
| Display   | O(n)      | O(n)         | O(n)       |

## BST Traversal

### Preorder Traversal

**Pseudocode**

```
FUNCTION preorder_traversal(root):
    IF root is None:
        RETURN
    PRINT root.data
    preorder_traversal(root.left)
    preorder_traversal(root.right)
```

**Python Code**

```python
def preorder_traversal(root):
    if root is None:
        return
    # Visit the root node first
    print(root.data, end=" ")
    # Recursively traverse the left subtree
    preorder_traversal(root.left)
    # Recursively traverse the right subtree
    preorder_traversal(root.right)
```

### Inorder Traversal

**Pseudocode**

```
FUNCTION inorder_traversal(root):
    IF root is None:
        RETURN
    inorder_traversal(root.left)
    PRINT root.data
    inorder_traversal(root.right)
```

**Python Code**

```python
def inorder_traversal(root):
    if root is None:
        return
    # Recursively traverse the left subtree
    inorder_traversal(root.left)
    # Visit the root node
    print(root.data, end=" ")
    # Recursively traverse the right subtree
    inorder_traversal(root.right)
```

### Postorder Traversal

**Pseudocode**

```
FUNCTION postorder_traversal(root):
    IF root is None:
        RETURN
    postorder_traversal(root.left)
    postorder_traversal(root.right)
    PRINT root.data
```

**Python Code**

```python
def postorder_traversal(root):
    if root is None:
        return
    # Recursively traverse the left subtree
    postorder_traversal(root.left)
    # Recursively traverse the right subtree
    postorder_traversal(root.right)
    # Visit the root node
    print(root.data, end=" ")
```

### Depth-First Search (DFS)

**Pseudocode**

```
FUNCTION dfs(root):
    IF root is None:
        RETURN
    INITIALIZE a stack
    PUSH root to the stack
    WHILE stack is not empty:
        node = POP the stack
        PRINT node.data
        IF node.right is not None:
            PUSH node.right to the stack
        IF node.left is not None:
            PUSH node.left to the stack
```

**Python Code**

```python
def dfs(root):
    if root is None:
        return
    # Initialize a stack to store the nodes
    stack = []
    # Push the root node to the stack
    stack.append(root)
    # Traverse the tree using depth-first search
    while stack:
        # Pop a node from the stack
        node = stack.pop()
        # Visit the node by printing its data
        print(node.data, end=" ")
        # Push the right child to the stack (if it exists)
        if node.right:
            stack.append(node.right)
        # Push the left child to the stack (if it exists)
        if node.left:
            stack.append(node.left)
```

### Breadth-First Search (BFS)

**Pseudocode**

```
FUNCTION bfs(root):
    IF root is None:
        RETURN
    INITIALIZE a queue
    ENQUEUE root to the queue
    WHILE queue is not empty:
        node = DEQUEUE the queue
        PRINT node.data
        IF node.left is not None:
            ENQUEUE node.left to the queue
        IF node.right is not None:
            ENQUEUE node.right to the queue
```

**Python Code**

```python
from collections import deque

def bfs(root):
    if root is None:
        return
    # Initialize a queue to store the nodes
    queue = deque()
    # Enqueue the root node
    queue.append(root)
    # Traverse the tree using breadth-first search
    while queue:
        # Dequeue a node from the queue
        node = queue.popleft()
        # Visit the node by printing its data
        print(node.data, end=" ")
        # Enqueue the left child (if it exists)
        if node.left:
            queue.append(node.left)
        # Enqueue the right child (if it exists)
        if node.right:
            queue.append(node.right)
```

### Time Complexity of BST Traversal

| Operation                  | Best Case | Average Case | Worst Case |
| -------------------------- | --------- | ------------ | ---------- |
| Preorder Traversal         | O(n)      | O(n)         | O(n)       |
| Inorder Traversal          | O(n)      | O(n)         | O(n)       |
| Postorder Traversal        | O(n)      | O(n)         | O(n)       |
| Depth-First Search (DFS)   | O(n)      | O(n)         | O(n)       |
| Breadth-First Search (BFS) | O(n)      | O(n)         | O(n)       |

## BST Operations

Sure, here's the pseudocode and Python code for the operations in a binary search tree (BST) using recursion:

### Searching

**Pseudocode**

```
FUNCTION search(root, key):
    IF root is None:
        RETURN None
    IF key == root.data:
        RETURN root
    ELSE IF key < root.data:
        RETURN search(root.left, key)
    ELSE:
        RETURN search(root.right, key)
```

**Python Code**

```python
def search(root, key):
    # If the root is None or the key is found, return the root
    if root is None or root.data == key:
        return root

    # If the key is less than the root's data, search in the left subtree
    if key < root.data:
        return search(root.left, key)
    # Otherwise, search in the right subtree
    else:
        return search(root.right, key)
```

### Minimum Key

**Pseudocode**

```
FUNCTION minimum(root):
    IF root.left is None:
        RETURN root
    ELSE:
        RETURN minimum(root.left)
```

**Python Code**

```python
def minimum(root):
    # If the left child is None, the root is the minimum
    if root.left is None:
        return root
    # Otherwise, recursively search for the minimum in the left subtree
    else:
        return minimum(root.left)
```

### Maximum Key

**Pseudocode**

```
FUNCTION maximum(root):
    IF root.right is None:
        RETURN root
    ELSE:
        RETURN maximum(root.right)
```

**Python Code**

```python
def maximum(root):
    # If the right child is None, the root is the maximum
    if root.right is None:
        return root
    # Otherwise, recursively search for the maximum in the right subtree
    else:
        return maximum(root.right)
```

### Predecessor and Successor

**Pseudocode**

```
FUNCTION predecessor(root, node):
    IF node.left is not None:
        RETURN maximum(node.left)
    ELSE:
        successor = None
        current = root
        WHILE current != node:
            IF current.data < node.data:
                successor = current
                current = current.right
            ELSE:
                current = current.left
        RETURN successor

FUNCTION successor(root, node):
    IF node.right is not None:
        RETURN minimum(node.right)
    ELSE:
        predecessor = None
        current = root
        WHILE current != node:
            IF current.data > node.data:
                predecessor = current
                current = current.left
            ELSE:
                current = current.right
        RETURN predecessor
```

**Python Code**

```python
def predecessor(root, node):
    # If the node has a left subtree, the predecessor is the maximum in the left subtree
    if node.left:
        return maximum(node.left)
    # Otherwise, find the first ancestor whose right child is also an ancestor of the node
    else:
        predecessor = None
        current = root
        while current != node:
            if current.data < node.data:
                predecessor = current
                current = current.right
            else:
                current = current.left
        return predecessor

def successor(root, node):
    # If the node has a right subtree, the successor is the minimum in the right subtree
    if node.right:
        return minimum(node.right)
    # Otherwise, find the first ancestor whose left child is also an ancestor of the node
    else:
        successor = None
        current = root
        while current != node:
            if current.data > node.data:
                successor = current
                current = current.left
            else:
                current = current.right
        return successor
```

### Insertion

**Pseudocode**

```
FUNCTION insert(root, key):
    IF root is None:
        CREATE a new node with the given key and RETURN it
    IF key < root.data:
        root.left = insert(root.left, key)
    ELSE IF key > root.data:
        root.right = insert(root.right, key)
    ELSE:
        RETURN root (duplicate keys are not allowed)
    RETURN root
```

**Python Code**

```python
def insert(root, key):
    # If the root is None, create a new node with the given key and return it
    if root is None:
        return Node(key)

    # If the key is less than the root's data, insert it in the left subtree
    if key < root.data:
        root.left = insert(root.left, key)
    # If the key is greater than the root's data, insert it in the right subtree
    elif key > root.data:
        root.right = insert(root.right, key)
    # If the key is equal to the root's data, return the root (duplicate keys are not allowed)
    else:
        return root

    return root
```

### Deletion

**Pseudocode**

```
FUNCTION delete(root, key):
    IF root is None:
        RETURN root
    IF key < root.data:
        root.left = delete(root.left, key)
    ELSE IF key > root.data:
        root.right = delete(root.right, key)
    ELSE:
        IF root.left is None:
            temp = root.right
            root = None
            RETURN temp
        ELSE IF root.right is None:
            temp = root.left
            root = None
            RETURN temp
        ELSE:
            temp = minimum(root.right)
            root.data = temp.data
            root.right = delete(root.right, temp.data)
    RETURN root
```

**Python Code**

```python
def delete(root, key):
    # If the root is None, return the root
    if root is None:
        return root

    # If the key is less than the root's data, delete it from the left subtree
    if key < root.data:
        root.left = delete(root.left, key)
    # If the key is greater than the root's data, delete it from the right subtree
    elif key > root.data:
        root.right = delete(root.right, key)
    # If the key is equal to the root's data, this is the node to be deleted
    else:
        # If the node has no child or only a right child
        if root.left is None:
            temp = root.right
            root = None
            return temp
        # If the node has only a left child
        elif root.right is None:
            temp = root.left
            root = None
            return temp
        # If the node has two children
        else:
            # Find the inorder successor (minimum in the right subtree)
            temp = minimum(root.right)
            # Copy the inorder successor's data to the current node
            root.data = temp.data
            # Recursively delete the inorder successor
            root.right = delete(root.right, temp.data)

    return root
```

### Time Complexity of Binary Search Tree (BST) Operations

| Operation   | Best Case | Average Case | Worst Case (When the tree is skewed) |
| ----------- | --------- | ------------ | ------------------------------------ |
| Search      | O(log n)  | O(log n)     | O(n)                                 |
| Minimum     | O(log n)  | O(log n)     | O(n)                                 |
| Maximum     | O(log n)  | O(log n)     | O(n)                                 |
| Predecessor | O(log n)  | O(log n)     | O(n)                                 |
| Successor   | O(log n)  | O(log n)     | O(n)                                 |
| Insert      | O(log n)  | O(log n)     | O(n)                                 |
| Delete      | O(log n)  | O(log n)     | O(n)                                 |

Here's the pseudocode and Python code for each operation in a heap, along with comments and a table summarizing the time complexity in the best, average, and worst cases:

## Heap Operations

### Heapify

**Pseudocode**

```python
FUNCTION heapify(arr, i, n):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    IF left < n and arr[left] > arr[largest]:
        largest = left
    IF right < n and arr[right] > arr[largest]:
        largest = right
    IF largest != i:
        SWAP arr[i], arr[largest]
        heapify(arr, largest, n)
```

**Python Code**

```python
def heapify(arr, i, n):
    # Initialize the largest element as the root
    largest = i
    # Calculate the indices of the left and right child nodes
    left = 2 * i + 1
    right = 2 * i + 2

    # Check if the left child is larger than the root
    if left < n and arr[left] > arr[largest]:
        largest = left

    # Check if the right child is larger than the largest element so far
    if right < n and arr[right] > arr[largest]:
        largest = right

    # If the largest element is not the root, swap it with the largest child
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        # Recursively heapify the affected subtree
        heapify(arr, largest, n)
```

### Build Heap

**Pseudocode**

```python
FUNCTION build_heap(arr):
    n = LENGTH(arr)
    FOR i FROM n // 2 DOWN TO 0:
        heapify(arr, i, n)
```

**Python Code**

```python
def build_heap(arr):
    """
    Builds a max heap from an array.

    Args:
        arr: The array to build the heap from.

    Returns:
        None. The heap is built in-place.
    """
    n = len(arr)
    for i in range(n // 2, -1, -1):
        heapify(arr, i, n)
```

### Heap Sort

**Pseudocode**

```python
FUNCTION heap_sort(arr):
    n = LENGTH(arr)
    FOR i FROM n - 1 DOWN TO 1:
        SWAP arr[0], arr[i]
        heapify(arr, 0, i)
```

**Python Code**

```python
def heap_sort(arr):
    n = len(arr)
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, 0, i)
```

### Insert

**Pseudocode**

```python
FUNCTION insert(arr, key):
    n = LENGTH(arr)
    arr[n] = key
    heapify(arr, n, n + 1)
```

**Python Code**

```python
def insert(arr, key):
    n = len(arr)
    arr.append(key)
    heapify(arr, n, n + 1)
```

### Delete

**Pseudocode**

```python
FUNCTION delete(arr, key):
    n = LENGTH(arr)
    FOR i FROM 0 TO n - 1:
        IF arr[i] == key:
            SWAP arr[i], arr[n - 1]
            heapify(arr, i, n - 1)
            RETURN
    PRINT "Key not found in the heap"
```

**Python Code**

```python
def delete(arr, key):
    n = len(arr)
    for i in range(n):
        if arr[i] == key:
            arr[i], arr[n - 1] = arr[n - 1], arr[i]
            heapify(arr, i, n - 1)
            return
    print("Key not found in the heap")
```

### Time Complexity of Heap Operations

| Operation  | Best Case  | Average Case | Worst Case |
| ---------- | ---------- | ------------ | ---------- |
| Heapify    | O(log n)   | O(log n)     | O(log n)   |
| Build Heap | O(n)       | O(n)         | O(n)       |
| Heap Sort  | O(n log n) | O(n log n)   | O(n log n) |
| Insert     | O(log n)   | O(log n)     | O(log n)   |
| Delete     | O(log n)   | O(log n)     | O(log n)   |

Certainly! Below is the complete implementation of the adjacency matrix operations, including the pseudocode for each operation followed by the corresponding Python code.

## Adjacency Matrix Operations

### AddEdge(x, y)

**Pseudocode**

```plaintext
Function AddEdge(x, y)
    If x < 0 or x >= n
        Print "Vertex x does not exist"
        Return
    ElseIf y < 0 or y >= n
        Print "Vertex y does not exist"
        Return
    EndIf

    Graph[x][y] = 1  // Set the edge
EndFunction
```

**Python Code**

```python
def add_edge(self, x, y):
    # Add an edge from vertex x to vertex y
    if x < 0 or x >= self.n:
        print("Vertex x does not exist")
        return
    elif y < 0 or y >= self.n:
        print("Vertex y does not exist")
        return

    self.graph[x][y] = 1  # Set the edge
```

---

### RemoveEdge(x, y)

**Pseudocode**

```plaintext
Function RemoveEdge(x, y)
    If x < 0 or x >= n
        Print "Vertex x does not exist"
        Return
    ElseIf y < 0 or y >= n
        Print "Vertex y does not exist"
        Return
    EndIf

    Graph[x][y] = 0  // Remove the edge
EndFunction
```

**Python Code**

```python
def remove_edge(self, x, y):
    # Remove an edge from vertex x to vertex y
    if x < 0 or x >= self.n:
        print("Vertex x does not exist")
        return
    elif y < 0 or y >= self.n:
        print("Vertex y does not exist")
        return

    self.graph[x][y] = 0  # Remove the edge
```

---

### AddVertex()

**Pseudocode**

```plaintext
Function AddVertex()
    n = n + 1  // Increase the size of the graph
    For i = 0 to n - 2
        Graph[i][n - 1] = 0  // Initialize new column
    EndFor

    Graph[n - 1] = new array of size n filled with 0  // Initialize new row
    Return n
EndFunction
```

**Python Code**

```python
def add_vertex(self):
    # Add a new vertex to the graph
    self.n += 1
    # Resize the adjacency matrix
    for i in range(self.n - 1):
        self.graph[i].append(0)  # Add new column
    self.graph.append([0] * self.n)  # Add new row
```

---

### RemoveVertex(x)

**Pseudocode**

```plaintext
Function RemoveVertex(x)
    If x < 0 or x >= n
        Print "Vertex x does not exist"
        Return
    EndIf

    If x = n - 1  // If x is the last vertex
        n = n - 1
    Else
        For i = x to n - 2
            Graph[i] = Graph[i + 1]  // Shift rows up
        EndFor

        For j = x to n - 2
            For i = 0 to n - 1
                Graph[i][j] = Graph[i][j + 1]  // Shift columns left
            EndFor
        EndFor

        n = n - 1
    EndIf
EndFunction
```

**Python Code**

```python
def remove_vertex(self, x):
    # Remove vertex x from the graph
    if x < 0 or x >= self.n:
        print("Vertex x does not exist")
        return

    # If x is the last vertex
    if x == self.n - 1:
        self.n -= 1
    else:
        # Shift elements to remove vertex x
        for i in range(x, self.n - 1):
            self.graph[i] = self.graph[i + 1]

        for j in range(x, self.n - 1):
            for i in range(self.n):
                self.graph[i][j] = self.graph[i][j + 1]

        self.n -= 1
```

---

### Time Complexity of Adjacent Matrix Operations

| Operation    | Best Case | Average Case | Worst Case |
| ------------ | --------- | ------------ | ---------- |
| AddEdge      | O(1)      | O(1)         | O(1)       |
| RemoveEdge   | O(1)      | O(1)         | O(1)       |
| AddVertex    | O(n)      | O(n)         | O(n)       |
| RemoveVertex | O(n)      | O(n²)        | O(n²)      |

Sure, here's the implementation of the adjacency matrix operations using an incident matrix in both pseudocode and Python code.

## Incident Matrix Operations

### AddEdge(x, y)

**Pseudocode**

```plaintext
Function AddEdge(x, y)
    If x < 0 or x >= n
        Print "Vertex x does not exist"
        Return
    ElseIf y < 0 or y >= n
        Print "Vertex y does not exist"
        Return
    EndIf

    For i = 0 to m - 1
        If Graph[i][x] = 0 and Graph[i][y] = 0
            Graph[i][x] = 1
            Graph[i][y] = 1
            Return
        EndIf
    EndFor

    // If no empty edge found, add a new edge
    m = m + 1
    Graph[m - 1][x] = 1
    Graph[m - 1][y] = 1
EndFunction
```

**Python Code**

```python
def add_edge(self, x, y):
    # Add an edge from vertex x to vertex y
    if x < 0 or x >= self.n:
        print("Vertex x does not exist")
        return
    elif y < 0 or y >= self.n:
        print("Vertex y does not exist")
        return

    for i in range(self.m):
        if self.graph[i][x] == 0 and self.graph[i][y] == 0:
            self.graph[i][x] = 1
            self.graph[i][y] = 1
            return

    # If no empty edge found, add a new edge
    self.m += 1
    self.graph.append([0] * self.n)
    self.graph[self.m - 1][x] = 1
    self.graph[self.m - 1][y] = 1
```

---

### RemoveEdge(x, y)

**Pseudocode**

```plaintext
Function RemoveEdge(x, y)
    If x < 0 or x >= n
        Print "Vertex x does not exist"
        Return
    ElseIf y < 0 or y >= n
        Print "Vertex y does not exist"
        Return
    EndIf

    For i = 0 to m - 1
        If Graph[i][x] = 1 and Graph[i][y] = 1
            Graph[i][x] = 0
            Graph[i][y] = 0
            Return
        EndIf
    EndFor

    Print "Edge from x to y does not exist"
EndFunction
```

**Python Code**

```python
def remove_edge(self, x, y):
    # Remove an edge from vertex x to vertex y
    if x < 0 or x >= self.n:
        print("Vertex x does not exist")
        return
    elif y < 0 or y >= self.n:
        print("Vertex y does not exist")
        return

    for i in range(self.m):
        if self.graph[i][x] == 1 and self.graph[i][y] == 1:
            self.graph[i][x] = 0
            self.graph[i][y] = 0
            return

    print("Edge from x to y does not exist")
```

---

### AddVertex()

**Pseudocode**

```plaintext
Function AddVertex()
    For i = 0 to m
        Graph[i].append(0)  // Add new column
    EndFor

    n = n + 1
    Return n
EndFunction
```

**Python Code**

```python
def add_vertex(self):
    # Add a new vertex to the graph
    for i in range(self.m):
        self.graph[i].append(0)  # Add new column

    self.n += 1
    return self.n
```

---

### RemoveVertex(x)

**Pseudocode**

```plaintext
Function RemoveVertex(x)
    If x < 0 or x >= n
        Print "Vertex x does not exist"
        Return
    EndIf

    For i = 0 to m - 1
        For j = x to n - 2
            Graph[i][j] = Graph[i][j + 1]  // Shift columns left
        EndFor
    EndFor

    For i = x to n - 2
        For j = 0 to m - 1
            Graph[j][i] = Graph[j][i + 1]  // Shift rows up
        EndFor
    EndFor

    n = n - 1
EndFunction
```

**Python Code**

```python
def remove_vertex(self, x):
    # Remove vertex x from the graph
    if x < 0 or x >= self.n:
        print("Vertex x does not exist")
        return

    for i in range(self.m):
        for j in range(x, self.n - 1):
            self.graph[i][j] = self.graph[i][j + 1]  # Shift columns left

    for i in range(x, self.n - 1):
        for j in range(self.m):
            self.graph[j][i] = self.graph[j][i + 1]  # Shift rows up

    self.n -= 1
```

---

### Time Complexity of the Incident Matrix Operations

| Operation    | Best Case | Average Case | Worst Case |
| ------------ | --------- | ------------ | ---------- |
| AddEdge      | O(m)      | O(m)         | O(m)       |
| RemoveEdge   | O(m)      | O(m)         | O(m)       |
| AddVertex    | O(m)      | O(m)         | O(m)       |
| RemoveVertex | O(m \* n) | O(m \* n)    | O(m \* n)  |

Here’s a structured implementation of the operations for an adjacency list representation of a graph, including the pseudocode and Python code for each operation: adding and removing vertices and edges.

## Adjacency List Operations

### AddVertex(new_vertex)

**Pseudocode**

```plaintext
Function AddVertex(new_vertex)
    // Create a new vertex node
    *p = new_vertex
    If graph is empty
        HEAD = p
    Else
        p -> down = HEAD
        HEAD = p
    EndIf
EndFunction
```

**Python Code**

```python
class Vertex:
    def __init__(self, key):
        self.key = key
        self.next = None  # Pointer to the next vertex in the adjacency list
        self.down = None  # Pointer to the next vertex in the graph

class AdjacencyListGraph:
    def __init__(self):
        self.head = None  # Initialize the head of the graph

    def add_vertex(self, new_vertex):
        # Create a new vertex node
        p = Vertex(new_vertex)
        if self.head is None:
            self.head = p  # If graph is empty, set HEAD to p
        else:
            p.down = self.head  # Link new vertex to the current head
            self.head = p  # Update head to new vertex
```

### RemoveVertex(vertex)

**Pseudocode**

```plaintext
Function RemoveVertex(vertex)
    *removeVertex = HEAD
    *prev = NULL
    While removeVertex -> key != vertex
        prev = removeVertex
        removeVertex = removeVertex -> down
        If removeVertex == nullptr
            Print "Vertex does not exist"
            Return
        EndIf
    EndWhile

    If removeVertex -> down == nullptr
        prev -> down = nullptr
        Delete removeVertex
    Else
        prev -> down = removeVertex -> down
        Delete removeVertex
    EndIf

    *t = HEAD
    While t -> down != nullptr
        If t and removeVertex are neighbours
            Remove edge from t to vertex
        EndIf
        t = t -> down
    EndWhile
EndFunction
```

**Python Code**

```python
def remove_vertex(self, vertex):
    remove_vertex = self.head
    prev = None

    # Find the vertex to remove
    while remove_vertex is not None and remove_vertex.key != vertex:
        prev = remove_vertex
        remove_vertex = remove_vertex.down

    if remove_vertex is None:
        print("Vertex does not exist")
        return

    # Remove the vertex from the list
    if prev is None:  # Removing the head
        self.head = remove_vertex.down
    else:
        prev.down = remove_vertex.down

    # Clean up the adjacency list
    t = self.head
    while t is not None:
        self.remove_edge(t.key, vertex)  # Remove edges to the vertex
        t = t.down

def remove_edge(self, vertex1, vertex2):
    # Implementation of remove_edge can be added here
    pass  # Placeholder for edge removal logic
```

---

### AddEdge(vertex1, vertex2)

**Pseudocode**

```plaintext
Function AddEdge(vertex1, vertex2)
    *newVertex = vertex2
    *temp = HEAD
    While temp != nullptr and temp -> key != vertex1
        temp = temp -> down
    EndWhile

    If temp == nullptr
        Print "vertex1 is not found."
    Else
        While temp -> next != nullptr and temp -> next -> key != vertex2
            temp = temp -> next
        EndWhile

        If temp -> next == nullptr
            temp -> next = newVertex
        Else
            Print "Edge already exists"
        EndIf
    EndIf
EndFunction
```

**Python Code**

```python
def add_edge(self, vertex1, vertex2):
    new_vertex = Vertex(vertex2)
    temp = self.head

    # Find vertex1 in the adjacency list
    while temp is not None and temp.key != vertex1:
        temp = temp.down

    if temp is None:
        print("Vertex1 is not found.")
    else:
        # Check if the edge already exists
        while temp.next is not None and temp.next.key != vertex2:
            temp = temp.next

        if temp.next is None:
            temp.next = new_vertex  # Add the new edge
        else:
            print("Edge already exists")
```

---

### RemoveEdge(vertex1, vertex2)

**Pseudocode**

```plaintext
Function RemoveEdge(vertex1, vertex2)
    *temp1 = HEAD
    While temp1 != nullptr and temp1 -> key != vertex1
        temp1 = temp1 -> down
    EndWhile

    If temp1 == nullptr
        Print "vertex1 is not found."
    Else
        While temp1 -> next != nullptr and temp1 -> next -> key != vertex2
            temp1 = temp1 -> next
        EndWhile

        If temp1 -> next == nullptr
            Print "Edge not found"
        Else
            If temp1 -> next -> next != nullptr
                *temp2 = temp1 -> next
                temp1 -> next = temp1 -> next -> next
                Delete temp2
            Else
                Delete temp1 -> next
            EndIf
        EndIf
    EndIf
EndFunction
```

**Python Code**

```python
def remove_edge(self, vertex1, vertex2):
    temp1 = self.head

    # Find vertex1 in the adjacency list
    while temp1 is not None and temp1.key != vertex1:
        temp1 = temp1.down

    if temp1 is None:
        print("Vertex1 is not found.")
    else:
        # Find the edge to remove
        while temp1.next is not None and temp1.next.key != vertex2:
            temp1 = temp1.next

        if temp1.next is None:
            print("Edge not found")
        else:
            # Remove the edge
            if temp1.next.next is not None:
                temp2 = temp1.next
                temp1.next = temp1.next.next
                del temp2  # Free the memory
            else:
                del temp1.next  # Remove the last edge
```

---

### Time Complexity of Adjacency List Operations

| Operation    | Best Case | Average Case | Worst Case |
| ------------ | --------- | ------------ | ---------- |
| AddVertex    | O(1)      | O(1)         | O(1)       |
| RemoveVertex | O(1)      | O(n)         | O(n)       |
| AddEdge      | O(1)      | O(n)         | O(n)       |
| RemoveEdge   | O(1)      | O(n)         | O(n)       |
