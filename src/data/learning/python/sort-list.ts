import { LearningQuestion } from "@/types/learning";

export const sortListQuestion: LearningQuestion = {
  id: "sort-list",
  title: "Sort a List Without Using sort()",
  difficulty: "Medium",
  topic: "python",
  problem: {
    description: "Given a list of numbers, sort them in ascending order without using Python's built-in .sort() method or sorted() function.",
    input: "[4, 2, 5, 1, 3]",
    output: "[1, 2, 3, 4, 5]"
  },
  story: "Imagine sorting a hand of playing cards. You scan the cards from left to right, find the absolute smallest card, and swap it to the very first spot. Then you look at the remaining cards, find the next smallest, and swap it to the second spot. You repeat this selection strategy until all cards are in order. This is the Selection Sort algorithm!",
  simpleExplanation: "We divide the list into a sorted part and an unsorted part. We repeatedly scan the unsorted part, pick the smallest number, and swap it with the first unsorted position. This grows the sorted section of our list step by step.",
  visualThinking: [
    "[4, 2, 5, 1, 3]",
    "Find smallest in index 0..4 ➔ 1 (index 3) ➔ Swap with index 0 ➔ [1, 2, 5, 4, 3]",
    "Find smallest in index 1..4 ➔ 2 (index 1) ➔ Swap with index 1 ➔ [1, 2, 5, 4, 3]",
    "Find smallest in index 2..4 ➔ 3 (index 4) ➔ Swap with index 2 ➔ [1, 2, 3, 4, 5]",
    "Find smallest in index 3..4 ➔ 4 (index 3) ➔ Swap with index 3 ➔ [1, 2, 3, 4, 5]",
    "Sorted! ➔ [1, 2, 3, 4, 5]"
  ],
  visualExecution: {
    headers: ["Loop Step", "Index 0", "Index 1", "Index 2", "Index 3", "Index 4"],
    inputs: ["Start", "4", "2", "5", "1", "3"],
    outputs: ["Swap 1 & 4", "1", "2", "5", "4", "3"]
  },
  code: {
    language: "python",
    snippet: `def selection_sort(arr: list) -> list:
    n = len(arr)
    for i in range(n):
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                min_idx = j
        # Swap the found minimum element with the first element
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr`
  },
  complexity: {
    label: "List size (n)",
    operations: "Comparisons",
    visualText: "5 items ➔ ~10 nested scans ➔ Time O(n²)",
    timeComplexity: "O(n²) — Quadratic Time",
    spaceComplexity: "O(1) — Constant Space (Performs swaps in-place without creating copies)"
  },
  explainLike10: {
    professional: "In-place Selection Sort swapping minimum boundary indices with linear scan accumulations.",
    simple: "We scan the list to find the smallest number, put it at the beginning, then repeat for the rest of the list.",
    verySimple: "Arranging books by looking for the shortest one, putting it first, then looking for the next shortest among the remaining ones."
  },
  commonMistakes: [
    {
      wrongCode: `for j in range(i, n): # starting at i instead of i+1
    if arr[j] < arr[min_idx]:
        min_idx = j`,
      whyItFails: "Comparing a number to itself (at index i) is redundant and slows down execution. While it still works, starting j at i + 1 is the correct algorithm that saves unnecessary comparisons.",
      correctCode: `for j in range(i + 1, n):
    if arr[j] < arr[min_idx]:
        min_idx = j`,
      remedy: "Initialize the inner loop iterator j exactly at i + 1 to only scan elements in the remaining unsorted slice."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "n = len(arr)",
      description: "Length of the list is 5. We begin nested sorting loops.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: "None", min_idx: "None", j: "None" },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "for i in range(n):",
      description: "Start outer loop at index i = 0.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: "None", j: "None" },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "min_idx = i",
      description: "Assume the current first unsorted element (4 at index 0) is the minimum.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 0, j: "None" },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "for j in range(i + 1, n):",
      description: "Scan remaining unsorted items (index 1 to 4). Start with j = 1 (value 2).",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 0, j: 1 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "if arr[j] < arr[min_idx]:",
      description: "Is 2 < 4? Yes! Update min_idx to 1.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 1, j: 1 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "for j in range(i + 1, n):",
      description: "Check next element j = 2 (value 5).",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 1, j: 2 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "if arr[j] < arr[min_idx]:",
      description: "Is 5 < 2? No.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 1, j: 2 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "for j in range(i + 1, n):",
      description: "Check next element j = 3 (value 1).",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 1, j: 3 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "if arr[j] < arr[min_idx]:",
      description: "Is 1 < 2? Yes! Update min_idx to 3.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 3, j: 3 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "for j in range(i + 1, n):",
      description: "Check next element j = 4 (value 3).",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 3, j: 4 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "if arr[j] < arr[min_idx]:",
      description: "Is 3 < 1? No.",
      variables: { arr: "[4, 2, 5, 1, 3]", n: 5, i: 0, min_idx: 3, j: 4 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "arr[i], arr[min_idx] = arr[min_idx], arr[i]",
      description: "Swap first unsorted element arr[0] (4) and min element arr[3] (1). list is now [1, 2, 5, 4, 3].",
      variables: { arr: "[1, 2, 5, 4, 3]", n: 5, i: 0, min_idx: 3, j: 4 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "for i in range(n):",
      description: "Next outer loop, i becomes 1. Unsorted starts at index 1.",
      variables: { arr: "[1, 2, 5, 4, 3]", n: 5, i: 1, min_idx: 3, j: 4 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "min_idx = i",
      description: "Assume index 1 (value 2) is the minimum.",
      variables: { arr: "[1, 2, 5, 4, 3]", n: 5, i: 1, min_idx: 1, j: 4 },
      callStack: ["selection_sort()"]
    },
    {
      codeLine: "return arr",
      description: "Skipping intermediate loops for simplicity... Once all nested loops run, list becomes fully sorted [1, 2, 3, 4, 5].",
      variables: { arr: "[1, 2, 3, 4, 5]", n: 5, i: 4, min_idx: 4, j: 4 },
      callStack: ["selection_sort()"]
    }
  ],
  realWorldApps: [
    "Embedded Systems: Sorting lists in devices with very small memory capacity (where O(1) space is strict).",
    "Educational Frameworks: Demonstrating fundamental swap operations and nested loops mechanics.",
    "Small Datasets: Organizing small parameters lists where complex sorts (like QuickSort) add unnecessary function call overhead."
  ],
  interviewTips: [
    "State Quadratic performance: Clearly state that Selection Sort takes O(n^2) time, making it bad for large lists.",
    "Explain In-place Swaps: Point out that it sorts in-place using O(1) space, meaning it doesn't duplicate list memory.",
    "Stability: Note that Selection Sort is generally an unstable sort (it can scramble the original order of duplicate values)."
  ],
  practiceVariations: [
    "Implement Bubble Sort (comparing adjacent elements and swapping if they are in the wrong order).",
    "Implement Insertion Sort (inserting elements into their correct position one by one).",
    "Modify Selection Sort to sort the list in descending order."
  ]
};
