import { LearningQuestion } from "@/types/learning";

export const swapPointersQuestion: LearningQuestion = {
  id: "swap-pointers",
  title: "Swap Two Numbers Using Pointers",
  difficulty: "Easy",
  topic: "c",
  problem: {
    description: "Write a C program containing a function that swaps the values of two integer variables using their memory addresses (pointers).",
    input: "a = 5, b = 10",
    output: "a = 10, b = 5"
  },
  story: "Imagine you have two cups: one holding orange juice (Cup A) and one holding apple juice (Cup B). To swap their contents, you need a third temporary cup (Temp). You pour A into Temp, pour B into A, and finally pour Temp into B. In C, pointers tell us the exact shelf location (address) of A and B so we can reach in and swap them!",
  simpleExplanation: "In C, parameters are passed by value (copied). If we swap copies, the original variables don't change. By passing pointers (memory addresses), the function can go directly to the original memory locations of 'a' and 'b' and swap the values stored inside them using a temporary variable.",
  visualThinking: [
    "Address of a ➔ 0x1000 (value 5)",
    "Address of b ➔ 0x1004 (value 10)",
    "Temp ➔ copy value at 0x1000 (temp = 5)",
    "Set value at 0x1000 ➔ value at 0x1004 (0x1000 becomes 10)",
    "Set value at 0x1004 ➔ temp (0x1004 becomes 5)",
    "Swapped!"
  ],
  visualExecution: {
    headers: ["Pointer / Variable", "a (0x1000)", "b (0x1004)", "*x (ptr to a)", "*y (ptr to b)", "temp"],
    inputs: ["Initial State", "5", "10", "5", "10", "None"],
    outputs: ["After Swapping", "10", "5", "10", "5", "5"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>

void swap(int *x, int *y) {
    int temp = *x; // Dereference x to get value of a, store in temp
    *x = *y;       // Dereference x, copy value of y into address x
    *y = temp;     // Dereference y, copy temp value into address y
}

int main() {
    int a = 5, b = 10;
    // Pass memory addresses of a and b using & operator
    swap(&a, &b);
    printf("a = %d, b = %d\\n", a, b);
    return 0;
}`
  },
  complexity: {
    label: "Variables",
    operations: "Memory operations",
    visualText: "2 dereferences ➔ 3 assignments ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space (In-place swap)"
  },
  explainLike10: {
    professional: "Pass-by-reference simulation utilizing pointer dereferencing and register temporary assignments.",
    simple: "We give the function the home addresses of two numbers. The function walks to their houses, takes the first number to a temporary holding zone, moves the second number to the first house, and puts the holding number in the second house.",
    verySimple: "Swapping juices between A and B using a temporary Cup C. But instead of picking up the cups, you send a robot to their exact coordinates on the table to do it!"
  },
  commonMistakes: [
    {
      wrongCode: `void swap(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
} // Swaps copies only!`,
      whyItFails: "In C, variables are passed by value. This function swaps local copies of x and y, leaving the original variables in the main function completely unchanged!",
      correctCode: `void swap(int *x, int *y) {
    int temp = *x;
    *x = *y;
    *y = temp;
}`,
      remedy: "Accept pointers as parameters (int *x) and pass addresses (&a, &b) during function calls."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int temp = *x;",
      description: "Read value at pointer address x (address of a, value 5) and store in temp variable.",
      variables: { a: 5, b: 10, temp: 5, "*x": 5, "*y": 10 },
      callStack: ["main()", "swap()"]
    },
    {
      codeLine: "*x = *y;",
      description: "Read value at pointer address y (address of b, value 10) and write it to address x. Variable a becomes 10.",
      variables: { a: 10, b: 10, temp: 5, "*x": 10, "*y": 10 },
      callStack: ["main()", "swap()"]
    },
    {
      codeLine: "*y = temp;",
      description: "Write temp value (5) to address y. Variable b becomes 5.",
      variables: { a: 10, b: 5, temp: 5, "*x": 10, "*y": 5 },
      callStack: ["main()", "swap()"]
    }
  ],
  realWorldApps: [
    "Sort Algorithms: Swapping elements inside Bubble Sort, Selection Sort, and QuickSort arrays.",
    "Hardware Memory: Exchanging registers values in low-level CPU operations.",
    "Graphics Buffers: Swapping front and back image display buffers to prevent screen tear artifacts."
  ],
  interviewTips: [
    "Pass-by-value vs Reference: Explain clearly that C only supports pass-by-value, and pointer variables are used to simulate pass-by-reference.",
    "Dereference Operator (*): Be ready to explain the difference between '*' in declaration (defines pointer) vs '*' in execution (reads/writes target value).",
    "Address Operator (&): Detail how & extracts the hexadecimal memory coordinate of any variable."
  ],
  practiceVariations: [
    "Swap two numbers using pointers without using a third temporary variable (using arithmetic or XOR bit operations).",
    "Swap two pointers themselves (double pointers) so they point to different targets.",
    "Swap two structure data blocks using structure pointer sweeps."
  ]
};
