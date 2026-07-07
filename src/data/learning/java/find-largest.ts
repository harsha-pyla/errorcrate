import { LearningQuestion } from "@/types/learning";

export const javaFindLargestQuestion: LearningQuestion = {
  id: "find-largest",
  title: "Find the Largest Element in an Array",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to scan an array of integers and return the maximum value in it.",
    input: "[3, 7, 2, 9, 5]",
    output: "9"
  },
  story: "Imagine checking every toy in a box to find the absolute tallest toy. You pick up the first toy and note its height. Then you check the next toy; if it's taller, you remember the new height. You repeat this for all toys!",
  simpleExplanation: "We start by assuming the very first number in the array is the largest. We then compare it to the next numbers. Every time we see a number that is bigger than our current largest, we update our memory to remember this new bigger number.",
  visualThinking: [
    "[3, 7, 2, 9, 5]",
    "Start: max = 3",
    "Check 7 ➔ 7 > 3 ➔ update max = 7",
    "Check 2 ➔ 2 < 7 ➔ max remains 7",
    "Check 9 ➔ 9 > 7 ➔ update max = 9",
    "Check 5 ➔ 5 < 9 ➔ max remains 9",
    "Result ➔ 9"
  ],
  visualExecution: {
    headers: ["Number", "3", "7", "2", "9", "5"],
    inputs: ["Comparison", "Start", "7 > 3 (update)", "2 < 7", "9 > 7 (update)", "5 < 9"],
    outputs: ["Current Max", "3", "7", "7", "9", "9"]
  },
  code: {
    language: "java",
    snippet: `public static int findMax(int[] numbers) {
    if (numbers == null || numbers.length == 0) {
        throw new IllegalArgumentException("Array must not be empty");
    }
    int maxNum = numbers[0];
    for (int num : numbers) {
        if (num > maxNum) {
            maxNum = num;
        }
    }
    return maxNum;
}`
  },
  complexity: {
    label: "Array size",
    operations: "Comparisons",
    visualText: "5 items ➔ 5 comparisons ➔ Time O(num)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (In-place comparison)"
  },
  explainLike10: {
    professional: "Linear array scan comparing elements sequentially to maintain the supremum accumulator.",
    simple: "We check every number in the list from left to right, keeping track of the biggest one we have seen.",
    verySimple: "Imagine inspecting all books in a shelf from left to right, remembering the thickest book."
  },
  commonMistakes: [
    {
      wrongCode: `int max = 0;
for (int i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
}`,
      whyItFails: "If the array contains only negative numbers (like [-3, -7, -2]), max will return 0, which is incorrect because 0 isn't even in the array! Initializing max to 0 is a dangerous bug.",
      correctCode: `int maxNum = numbers[0];
for (int num : numbers) { ... }`,
      remedy: "Always initialize your maximum accumulator variable to the first element of the array instead of an arbitrary 0."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int maxNum = numbers[0];",
      description: "Assume the first number (3) is the largest.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 3, num: "None" },
      callStack: ["findMax()"]
    },
    {
      codeLine: "for (int num : numbers)",
      description: "Checking first element num = 3. 3 > 3 is false.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 3, num: 3 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "for (int num : numbers)",
      description: "Checking next element num = 7.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 3, num: 7 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "if (num > maxNum)",
      description: "Is 7 > 3? Yes!",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 3, num: 7 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "maxNum = num;",
      description: "Update maxNum to 7.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 7, num: 7 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "for (int num : numbers)",
      description: "Checking next element num = 2.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 7, num: 2 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "if (num > maxNum)",
      description: "Is 2 > 7? No.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 7, num: 2 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "for (int num : numbers)",
      description: "Checking next element num = 9.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 7, num: 9 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "if (num > maxNum)",
      description: "Is 9 > 7? Yes!",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 7, num: 9 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "maxNum = num;",
      description: "Update maxNum to 9.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 9, num: 9 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "for (int num : numbers)",
      description: "Checking next element num = 5.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 9, num: 5 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "if (num > maxNum)",
      description: "Is 5 > 9? No.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 9, num: 5 },
      callStack: ["findMax()"]
    },
    {
      codeLine: "return maxNum;",
      description: "Loop completes. Return the maximum value 9.",
      variables: { numbers: "[3, 7, 2, 9, 5]", maxNum: 9, num: 5 },
      callStack: ["findMax()"]
    }
  ],
  realWorldApps: [
    "Data Analysis: Finding peak statistics, maximum temperatures, or highest stock prices in a dataset.",
    "Web Development: Identifying the tallest container block height for responsive alignments.",
    "Gaming: Sorting scores to display the absolute high-score record on a leaderboard."
  ],
  interviewTips: [
    "Empty List handling: Always check or ask what should happen if the list is empty (raise ValueError or return None).",
    "Watch out for negative bounds: Explain why initializing to 0 can break negative list sweeps.",
    "Built-in functions: Mention Python's 'max()' but explain the manual iteration steps to show algorithmic fundamentals."
  ],
  practiceVariations: [
    "Find the smallest number in a list instead of the largest.",
    "Find the second largest number in a list in a single pass.",
    "Find both the maximum and minimum elements of a list in one loop."
  ]
};
