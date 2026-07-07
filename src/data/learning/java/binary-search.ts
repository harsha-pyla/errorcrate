import { LearningQuestion } from "@/types/learning";

export const binarySearchQuestion: LearningQuestion = {
  id: "binary-search",
  title: "Binary Search",
  difficulty: "Medium",
  topic: "java",
  problem: {
    description: "Search for a target value inside a sorted list of numbers. Instead of checking one by one, split the search range in half repeatedly.",
    input: "list = [1, 3, 5, 7, 9, 11, 13], target = 9",
    output: "Index 4"
  },
  story: "Imagine you are looking up a word in a paper dictionary. You don't start from page 1 and read every single word. You open the dictionary in the exact middle. If your word starts with a letter that is alphabetically later, you know the word is in the second half. You throw away the first half and repeat! That's Binary Search.",
  simpleExplanation: "Since the list is already sorted, we check the number in the middle. If our target is larger, we look only in the right half. If it's smaller, we look only in the left half. We repeat this cut-in-half strategy until we hit the number.",
  visualThinking: [
    "[1, 3, 5, 7, 9, 11, 13] ➔ search target 9",
    "Open middle index 3 (value 7)",
    "9 > 7 ➔ throw away left half [1, 3, 5, 7]",
    "New search space is [9, 11, 13]",
    "Open middle index 5 (value 11)",
    "9 < 11 ➔ throw away right half [11, 13]",
    "New search space is [9] (value 9)",
    "Match! ➔ Index 4"
  ],
  visualExecution: {
    headers: ["Low Index", "Mid Index", "High Index", "Mid Value", "Comparison"],
    inputs: ["0", "3", "6", "7", "9 > 7 ➔ move Low to 4"],
    outputs: ["4", "5", "6", "11", "9 < 11 ➔ move High to 4"]
  },
  code: {
    language: "java",
    snippet: `public static int binarySearch(int[] arr, int target) {
    int low = 0;
    int high = arr.length - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        if (arr[mid] == target) {
            return mid;
        }
        if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; // Not found
}`
  },
  complexity: {
    label: "Array Size",
    operations: "Sub-divisions",
    visualText: "8 items ➔ 3 divisions ➔ Time O(log n)",
    timeComplexity: "O(log n) — Logarithmic Time",
    spaceComplexity: "O(1) — Constant space (No extra memory copy)"
  },
  explainLike10: {
    professional: "Logarithmic lookup utilizing range boundaries and median index comparisons on sorted contiguous storage.",
    simple: "We split the sorted group in half, see if the middle item is too big or too small, and then keep only the half that contains our item.",
    verySimple: "Open a book in the middle. If the page you want is higher, ignore all pages behind it and open the remaining pages in the middle again."
  },
  commonMistakes: [
    {
      wrongCode: `int mid = (low + high) / 2;`,
      whyItFails: "If low and high are extremely large numbers (close to 2 billion), adding them together overflows the maximum capacity of integers, resulting in a negative number and causing index out of bounds exceptions!",
      correctCode: `int mid = low + (high - low) / 2;`,
      remedy: "Compute the difference first to prevent integer overflow bounds."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int low = 0; int high = arr.length - 1;",
      description: "Set initial search bounds. low is 0, ...",
      variables: { low: 0, high: 6, mid: "None", target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "int mid = low + (high - low) / 2;",
      description: "Calculate middle index. mid = 3.",
      variables: { low: 0, high: 6, mid: 3, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "if (arr[mid] < target)",
      description: "Check if middle value (7) is less than target (9). Yes!",
      variables: { low: 0, high: 6, mid: 3, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "low = mid + 1;",
      description: "Move search floor boundary to index 4.",
      variables: { low: 4, high: 6, mid: 3, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "int mid = low + (high - low) / 2;",
      description: "Calculate new middle index. mid = 5.",
      variables: { low: 4, high: 6, mid: 5, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "if (arr[mid] == target)",
      description: "Check if middle value (11) is target (9). No.",
      variables: { low: 4, high: 6, mid: 5, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "high = mid - 1;",
      description: "Move search ceiling boundary to index 4.",
      variables: { low: 4, high: 4, mid: 5, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "int mid = low + (high - low) / 2;",
      description: "Calculate middle index. mid = 4.",
      variables: { low: 4, high: 4, mid: 4, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "if (arr[mid] == target)",
      description: "Check if middle value (9) is target (9). Match found!",
      variables: { low: 4, high: 4, mid: 4, target: 9 },
      callStack: ["binarySearch()"]
    },
    {
      codeLine: "return mid;",
      description: "Return matched index 4.",
      variables: { low: 4, high: 4, mid: 4, target: 9 },
      callStack: ["binarySearch()"]
    }
  ],
  realWorldApps: [
    "Database Index Lookup: Instantly finding a user record by primary ID without scanning the entire DB.",
    "Git Bisect: Locating the specific historical commit that introduced a bug using binary search on the commit tree.",
    "Autocomplete Prefixes: Dictionary lookups in high-frequency text auto-suggestion engines."
  ],
  interviewTips: [
    "Verify Sort order: Always check or ask if the input is sorted. If it isn't, standard Binary Search will fail!",
    "Avoid Integer Overflow: Use 'low + (high - low) / 2' instead of '(low + high) / 2'.",
    "Identify Duplicates: Be prepared to discuss how to find the FIRST or LAST index when duplicate values exist in the list."
  ],
  practiceVariations: [
    "Find the starting and ending position of a given target value (handling duplicates).",
    "Search for an element inside a circularly shifted (rotated) sorted array.",
    "Compute the integer square root of a number by binary searching from 1 to n."
  ]
};
