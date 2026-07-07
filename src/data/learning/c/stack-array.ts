import { LearningQuestion } from "@/types/learning";

export const stackArrayQuestion: LearningQuestion = {
  id: "stack-array",
  title: "Implement a Stack Using Arrays",
  difficulty: "Medium",
  topic: "c",
  problem: {
    description: "Write a C program that implements a LIFO (Last-In, First-Out) Stack data structure using a static array, including push, pop, peek, and status functions.",
    input: "Push 5, Push 10, Pop",
    output: "Peek returns 10, Pop returns 10, next Peek returns 5"
  },
  story: "Imagine a stack of dinner plates in a cafeteria. You can only place a new plate on the very top (Push). When you need a plate, you can only pick up the plate at the very top (Pop). You cannot grab a plate from the middle without tipping over the stack! That's a LIFO stack.",
  simpleExplanation: "A stack is a container of items that supports adding and removing from one end. We use a static array to hold the elements, and an integer variable 'top' to point to the index of the uppermost element. Pushing increments 'top' and inserts the item. Popping returns the item at 'top' and decrements it.",
  visualThinking: [
    "Array of size 5, top = -1 (empty)",
    "Push 5 ➔ top = 0 ➔ array[0] = 5",
    "Push 10 ➔ top = 1 ➔ array[1] = 10",
    "Peek ➔ read array[top] (returns 10)",
    "Pop ➔ read array[top] (10) ➔ decrement top to 0",
    "Pop ➔ read array[top] (5) ➔ decrement top to -1"
  ],
  visualExecution: {
    headers: ["Operation", "Top index", "Array state", "Value returned", "Status"],
    inputs: ["Push 5", "0", "[5, 0, 0, 0, 0]", "None", "Normal"],
    outputs: ["Pop", "-1", "[5, 0, 0, 0, 0]", "5", "Empty"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>
#define MAX 5

int stack[MAX];
int top = -1; // -1 indicates the stack is empty

int isEmpty() {
    return top == -1;
}

int isFull() {
    return top == MAX - 1;
}

void push(int value) {
    if (isFull()) {
        printf("Stack Overflow! Cannot push %d\\n", value);
        return;
    }
    top++;
    stack[top] = value;
}

int pop() {
    if (isEmpty()) {
        printf("Stack Underflow! Cannot pop\\n");
        return -1;
    }
    int poppedValue = stack[top];
    top--;
    return poppedValue;
}

int peek() {
    if (isEmpty()) return -1;
    return stack[top];
}

int main() {
    push(5);
    push(10);
    printf("Top element: %d\\n", peek()); // Prints 10
    printf("Popped: %d\\n", pop());       // Prints 10
    printf("New top: %d\\n", peek());     // Prints 5
    return 0;
}`
  },
  complexity: {
    label: "Stack elements",
    operations: "Pushes / Pops",
    visualText: "Push/Pop operations ➔ Direct index allocation ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time (All operations affect only the top index)",
    spaceComplexity: "O(MAX) — Static array buffer size"
  },
  explainLike10: {
    professional: "LIFO stack implementation utilizing a bounded array buffer and pointer index cursor adjustments.",
    simple: "We make a list with a maximum size, and keep a marker 'top' to remember where the top is. Pushing moves the marker up and writes a number. Popping reads the number under the marker and moves it down.",
    verySimple: "Stacking toys in a bucket. You can only see or pull out the toy on top. If the bucket is full, you can't add more (Overflow)!"
  },
  commonMistakes: [
    {
      wrongCode: `void push(int val) {
    stack[top] = val;
    top++; // Incorrect order!
}`,
      whyItFails: "If top starts at -1, writing stack[top] throws an out-of-bounds index access crash! You must increment top first (to 0), and then assign the value.",
      correctCode: `top++;
stack[top] = val;`,
      remedy: "Increment the top index cursor pointer before writing the element to the array slot."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int top = -1;",
      description: "Initialize stack top pointer index to -1 indicating empty state.",
      variables: { MAX: 5, top: -1, poppedValue: "None" },
      callStack: ["main()"]
    },
    {
      codeLine: "push(5);",
      description: "Call push to add value 5.",
      variables: { MAX: 5, top: -1 },
      callStack: ["main()", "push()"]
    },
    {
      codeLine: "top++;",
      description: "Increment top to index 0.",
      variables: { MAX: 5, top: 0 },
      callStack: ["main()", "push()"]
    },
    {
      codeLine: "stack[top] = value;",
      description: "Write value 5 to stack[0]. Array becomes [5, 0, 0, 0, 0].",
      variables: { MAX: 5, top: 0 },
      callStack: ["main()", "push()"]
    },
    {
      codeLine: "push(10);",
      description: "Call push to add value 10.",
      variables: { MAX: 5, top: 0 },
      callStack: ["main()", "push()"]
    },
    {
      codeLine: "top++;",
      description: "Increment top to index 1.",
      variables: { MAX: 5, top: 1 },
      callStack: ["main()", "push()"]
    },
    {
      codeLine: "stack[top] = value;",
      description: "Write value 10 to stack[1]. Array becomes [5, 10, 0, 0, 0].",
      variables: { MAX: 5, top: 1 },
      callStack: ["main()", "push()"]
    },
    {
      codeLine: "pop();",
      description: "Call pop to remove uppermost element.",
      variables: { MAX: 5, top: 1, poppedValue: "None" },
      callStack: ["main()", "pop()"]
    },
    {
      codeLine: "int poppedValue = stack[top];",
      description: "Read value at stack[1] (10).",
      variables: { MAX: 5, top: 1, poppedValue: 10 },
      callStack: ["main()", "pop()"]
    },
    {
      codeLine: "top--;",
      description: "Decrement top pointer to 0. Variable 10 is popped.",
      variables: { MAX: 5, top: 0, poppedValue: 10 },
      callStack: ["main()", "pop()"]
    }
  ],
  realWorldApps: [
    "Browsers History: Storing visited web links to support clicking the 'Back' button.",
    "Compilers Parsing: Checking matching bracket groups or nesting operations using stacks.",
    "OS Execution: Maintaining the function call stack coordinates during programs runtime."
  ],
  interviewTips: [
    "LIFO Definition: State clearly that stacks follow Last-In First-Out, meaning the last item pushed is the first popped.",
    "Overflow vs Underflow: Define Overflow (pushing when stack is full) and Underflow (popping when stack is empty).",
    "List vs Array: Mention that arrays restrict stack size (static memory), whereas linked lists allow infinite dynamic pushes."
  ],
  practiceVariations: [
    "Implement a Stack using a dynamically resizing array (similar to C++ vector).",
    "Implement a Queue (FIFO) using arrays.",
    "Write a function that reverses a string using your stack implementation."
  ]
};
