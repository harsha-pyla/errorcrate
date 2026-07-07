import { LearningQuestion } from "@/types/learning";

export const queueArrayQuestion: LearningQuestion = {
  id: "queue-array",
  title: "Implement a Queue Using Arrays",
  difficulty: "Medium",
  topic: "c",
  problem: {
    description: "Write a C program that implements a FIFO (First-In, First-Out) Queue data structure using a static array, supporting enqueue, dequeue, peek, and status checks.",
    input: "Enqueue 5, Enqueue 10, Dequeue",
    output: "Peek returns 5, Dequeue returns 5, next Peek returns 10"
  },
  story: "Imagine people standing in line at a movie theater ticket counter. The first person to join the line is the first person to buy a ticket and leave the line (First-In, First-Out). If a new person arrives, they must join the back of the line. You can't skip the line! That is a FIFO queue.",
  simpleExplanation: "A queue is a container where we add items to the back (rear) and remove them from the front (front). We use a static array to hold the elements, and two indices: 'front' (the first element) and 'rear' (the last element). Enqueuing increments 'rear' and writes the value. Dequeuing reads the value at 'front' and increments 'front'.",
  visualThinking: [
    "Array size 5, front = -1, rear = -1 (empty)",
    "Enqueue 5 ➔ set front=0, rear=0 ➔ array[0] = 5",
    "Enqueue 10 ➔ increment rear to 1 ➔ array[1] = 10",
    "Peek ➔ read array[front] (returns 5)",
    "Dequeue ➔ read array[front] (5) ➔ increment front to 1",
    "Dequeue ➔ read array[front] (10) ➔ increment front to 2 ➔ front > rear ➔ reset empty"
  ],
  visualExecution: {
    headers: ["Operation", "Front index", "Rear index", "Array state", "Value returned", "Status"],
    inputs: ["Enqueue 5", "0", "0", "[5, 0, 0, 0, 0]", "None", "Normal"],
    outputs: ["Dequeue", "1", "0", "[5, 10, 0, 0, 0]", "5", "Normal"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>
#define SIZE 5

int items[SIZE];
int front = -1;
int rear = -1;

int isFull() {
    return rear == SIZE - 1;
}

int isEmpty() {
    return front == -1 || front > rear;
}

void enqueue(int value) {
    if (isFull()) {
        printf("Queue is Full! Cannot enqueue %d\\n", value);
        return;
    }
    if (front == -1) front = 0; // First element check
    rear++;
    items[rear] = value;
}

int dequeue() {
    if (isEmpty()) {
        printf("Queue is Empty! Cannot dequeue\\n");
        return -1;
    }
    int dequeuedValue = items[front];
    front++;
    // Reset queue when all items are popped out
    if (front > rear) {
        front = -1;
        rear = -1;
    }
    return dequeuedValue;
}

int peek() {
    if (isEmpty()) return -1;
    return items[front];
}

int main() {
    enqueue(5);
    enqueue(10);
    printf("Front: %d\\n", peek());    // Prints 5
    printf("Dequeued: %d\\n", dequeue()); // Prints 5
    printf("New front: %d\\n", peek()); // Prints 10
    return 0;
}`
  },
  complexity: {
    label: "Queue elements",
    operations: "Enqueue / Dequeue",
    visualText: "Enqueue/Dequeue operations ➔ Direct index allocation ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time (Affects only front and rear indices)",
    spaceComplexity: "O(SIZE) — Static array buffer size"
  },
  explainLike10: {
    professional: "FIFO queue implementation utilizing a linear array buffer and bounded index pointer cursors.",
    simple: "We use a line of slots and two markers: 'front' and 'rear'. When adding a number, we put it at 'rear' and slide 'rear' back. When taking a number, we read it from 'front' and slide 'front' back.",
    verySimple: "Waiting lines at a checkout. New people join at the end, and the cashier serves the person at the front."
  },
  commonMistakes: [
    {
      wrongCode: `int dequeue() {
    int val = items[front];
    front++; // what happens when front > rear?
    return val;
} // forgetting to reset queue indices!`,
      whyItFails: "If you keep enqueuing and dequeuing, indices keep moving forward. Even if the queue becomes empty, front and rear stay at the end. Trying to enqueue again throws 'Queue is Full' because rear equals SIZE - 1! You must reset indices to -1 when the queue is empty.",
      correctCode: `int dequeuedValue = items[front];
front++;
if (front > rear) { front = -1; rear = -1; }
return dequeuedValue;`,
      remedy: "Reset front and rear to -1 whenever front exceeds rear to reclaim array space, or use a Circular Queue."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int front = -1; int rear = -1;",
      description: "Initialize queue front and rear pointer indices to -1 indicating empty state.",
      variables: { SIZE: 5, front: -1, rear: -1, dequeuedValue: "None" },
      callStack: ["main()"]
    },
    {
      codeLine: "enqueue(5);",
      description: "Call enqueue to add value 5.",
      variables: { SIZE: 5, front: -1, rear: -1 },
      callStack: ["main()", "enqueue()"]
    },
    {
      codeLine: "if (front == -1) front = 0;",
      description: "Since queue is empty, set front to index 0.",
      variables: { SIZE: 5, front: 0, rear: -1 },
      callStack: ["main()", "enqueue()"]
    },
    {
      codeLine: "rear++; items[rear] = value;",
      description: "Increment rear to index 0, write 5 to items[0]. Array becomes [5, 0, 0, 0, 0].",
      variables: { SIZE: 5, front: 0, rear: 0 },
      callStack: ["main()", "enqueue()"]
    },
    {
      codeLine: "enqueue(10);",
      description: "Call enqueue to add value 10.",
      variables: { SIZE: 5, front: 0, rear: 0 },
      callStack: ["main()", "enqueue()"]
    },
    {
      codeLine: "rear++; items[rear] = value;",
      description: "Increment rear to index 1, write 10 to items[1]. Array becomes [5, 10, 0, 0, 0].",
      variables: { SIZE: 5, front: 0, rear: 1 },
      callStack: ["main()", "enqueue()"]
    },
    {
      codeLine: "dequeue();",
      description: "Call dequeue to remove front element.",
      variables: { SIZE: 5, front: 0, rear: 1, dequeuedValue: "None" },
      callStack: ["main()", "dequeue()"]
    },
    {
      codeLine: "int dequeuedValue = items[front];",
      description: "Read value at items[0] (5).",
      variables: { SIZE: 5, front: 0, rear: 1, dequeuedValue: 5 },
      callStack: ["main()", "dequeue()"]
    },
    {
      codeLine: "front++;",
      description: "Increment front pointer to index 1. Value 5 is dequeued.",
      variables: { SIZE: 5, front: 1, rear: 1, dequeuedValue: 5 },
      callStack: ["main()", "dequeue()"]
    }
  ],
  realWorldApps: [
    "Printers queue: Handling print jobs sequentially in the order they were submitted.",
    "Task Scheduling: Managing CPU execution threads in operating systems.",
    "Data Buffers: Storing packets inside network interfaces before parsing."
  ],
  interviewTips: [
    "FIFO Definition: State clearly that queues follow First-In First-Out, meaning the first element added is the first to be removed.",
    "Circular Queue: If asked how to prevent index drift, explain how using modulo operations (e.g. 'rear = (rear + 1) % SIZE') creates a circular buffer that reclaims empty slots.",
    "Time complexity: Emphasize that both enqueue and dequeue operations run in O(1) time."
  ],
  practiceVariations: [
    "Implement a Circular Queue using modulo pointer adjustments.",
    "Implement a Queue using two Stacks.",
    "Implement a dynamic queue using linked lists instead of static arrays."
  ]
};
