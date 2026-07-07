import { LearningQuestion } from "@/types/learning";

export const javaReverseArrayQuestion: LearningQuestion = {
  id: "reverse-array",
  title: "Reverse an Array",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to reverse an array of integers in-place. The elements should be reordered so that the first becomes last, second becomes second-to-last, and so on.",
    input: "[1, 2, 3, 4, 5]",
    output: "[5, 4, 3, 2, 1]"
  },
  story: "Imagine a line of people standing in a narrow hallway. To reverse their order, the person at the very front swaps places with the person at the very back. Then the second person swaps with the second-to-last. This continues until everyone meets in the middle!",
  simpleExplanation: "We use a two-pointer approach. We set one pointer at the start (index 0) and another pointer at the end (index length - 1). We swap the numbers at these pointers, then move the pointers closer together (left increases, right decreases) and repeat until the pointers meet in the middle.",
  visualThinking: [
    "[1, 2, 3, 4, 5]",
    "Swap index 0 & 4 (1 and 5) ➔ [5, 2, 3, 4, 1]",
    "Swap index 1 & 3 (2 and 4) ➔ [5, 4, 3, 2, 1]",
    "Pointers meet at index 2 (value 3) ➔ Stop",
    "Result ➔ [5, 4, 3, 2, 1]"
  ],
  visualExecution: {
    headers: ["Left Index", "Right Index", "Left Value", "Right Value", "Array State"],
    inputs: ["0", "4", "1", "5", "[5, 2, 3, 4, 1]"],
    outputs: ["1", "3", "2", "4", "[5, 4, 3, 2, 1] (Pointers meet)"]
  },
  code: {
    language: "java",
    snippet: `public static void reverseArray(int[] arr) {
    if (arr == null) return;
    int left = 0;
    int right = arr.length - 1;
    while (left < right) {
        // Swap elements at left and right pointers
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}`
  },
  complexity: {
    label: "Array Size (n)",
    operations: "Swaps",
    visualText: "5 items ➔ 2 swaps ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Swaps in-place, zero extra arrays allocated)"
  },
  explainLike10: {
    professional: "In-place array reversal utilizing symmetric element swaps with convergent index boundaries.",
    simple: "We swap the first and last numbers, then the second and second-to-last, moving towards the middle until we meet.",
    verySimple: "Imagine folding a line of block towers from both ends inwards, swapping their colors until they touch in the center!"
  },
  commonMistakes: [
    {
      wrongCode: `public static int[] reverse(int[] arr) {
    int[] rev = new int[arr.length];
    for (int i = 0; i < arr.length; i++) {
        rev[i] = arr[arr.length - 1 - i];
    }
    return rev; // Extra array memory!
}`,
      whyItFails: "Creating a new array copies all data, which takes O(n) extra space in memory. A proper reversal on arrays should perform swaps in-place, which optimizes space complexity to O(1)!",
      correctCode: `int left = 0; int right = arr.length - 1;
while (left < right) { ... }`,
      remedy: "Perform swaps in-place using a temporary swap register variable, avoiding new array instantiations."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int left = 0;",
      description: "Set left pointer at the start index (0).",
      variables: { arr: "[1, 2, 3, 4, 5]", left: 0, right: "None", temp: "None" },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "int right = arr.length - 1;",
      description: "Set right pointer at the last index (4).",
      variables: { arr: "[1, 2, 3, 4, 5]", left: 0, right: 4, temp: "None" },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "while (left < right)",
      description: "0 < 4 is true. Start swap loop.",
      variables: { arr: "[1, 2, 3, 4, 5]", left: 0, right: 4, temp: "None" },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "int temp = arr[left];",
      description: "Store value at left index (1) in temp.",
      variables: { arr: "[1, 2, 3, 4, 5]", left: 0, right: 4, temp: 1 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "arr[left] = arr[right];",
      description: "Set left index (0) to value at right index (5).",
      variables: { arr: "[5, 2, 3, 4, 5]", left: 0, right: 4, temp: 1 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "arr[right] = temp;",
      description: "Set right index (4) to temp value (1). array state is now [5, 2, 3, 4, 1].",
      variables: { arr: "[5, 2, 3, 4, 1]", left: 0, right: 4, temp: 1 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Move pointers inwards. left becomes 1, right becomes 3.",
      variables: { arr: "[5, 2, 3, 4, 1]", left: 1, right: 3, temp: 1 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "while (left < right)",
      description: "1 < 3 is true. Loop continues.",
      variables: { arr: "[5, 2, 3, 4, 1]", left: 1, right: 3, temp: 1 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "int temp = arr[left];",
      description: "Store value at left index (2) in temp.",
      variables: { arr: "[5, 2, 3, 4, 1]", left: 1, right: 3, temp: 2 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "arr[left] = arr[right];",
      description: "Set left index (1) to value at right index (4).",
      variables: { arr: "[5, 4, 3, 4, 1]", left: 1, right: 3, temp: 2 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "arr[right] = temp;",
      description: "Set right index (3) to temp value (2). array state is now [5, 4, 3, 2, 1].",
      variables: { arr: "[5, 4, 3, 2, 1]", left: 1, right: 3, temp: 2 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Move pointers inwards. left becomes 2, right becomes 2.",
      variables: { arr: "[5, 4, 3, 2, 1]", left: 2, right: 2, temp: 2 },
      callStack: ["reverseArray()"]
    },
    {
      codeLine: "while (left < right)",
      description: "left is 2, right is 2. 2 < 2 is false. Loop exits.",
      variables: { arr: "[5, 4, 3, 2, 1]", left: 2, right: 2, temp: 2 },
      callStack: ["reverseArray()"]
    }
  ],
  realWorldApps: [
    "Data Parsing: Flipping array buffers, package bytes, or string streams.",
    "Graphics rendering: Flipping pixel colors horizontally to implement photo mirroring operations.",
    "System stacks: Reversing arrays to implement undo history buffers."
  ],
  interviewTips: [
    "Verify In-place swaps: Always confirm with the interviewer that the array reversal should be completed in-place without using extra allocations.",
    "Pointer limit check: Explain that the loop ends as soon as left meets or passes the right index.",
    "Swap helper method: Practice writing the swap logic cleanly or moving it to a helper method."
  ],
  practiceVariations: [
    "Reverse only a specific subsegment of an array (from index i to j).",
    "Rotate an array to the right by K steps (utilizing subsegment reversals).",
    "Reverse an array of strings instead of primitive integers."
  ]
};
