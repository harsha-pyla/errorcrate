import { LearningQuestion } from "@/types/learning";

export const findLargestQuestion: LearningQuestion = {
  id: "find-largest",
  title: "Find the Largest Number in a List",
  difficulty: "Easy",
  topic: "python",
  problem: {
    description: "Given a list of numbers, traverse through the list to find and return the largest number.",
    input: "[3, 7, 2, 9, 5]",
    output: "9"
  },
  story: "Imagine checking every toy in a box to find the absolute tallest toy. You pick up the first toy and note its height. Then you check the next toy; if it's taller, you remember the new height. You repeat this for all toys!",
  simpleExplanation: "We start by assuming the very first number is the largest. We then compare it to the next numbers. Every time we see a number that is bigger than our current largest, we update our memory to remember this new bigger number.",
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
    language: "python",
    snippet: `def find_max(numbers):
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
    return max_num`
  },
  complexity: {
    label: "List size",
    operations: "Comparisons",
    visualText: "5 items ➔ 5 comparisons ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (In-place comparison)"
  },
  explainLike10: {
    professional: "Linear list scan comparing elements sequentially to maintain the supremum accumulator.",
    simple: "We check every number in the list from left to right, keeping track of the biggest one we have seen.",
    verySimple: "Imagine inspecting all books in a shelf from left to right, remembering the thickest book."
  },
  commonMistakes: [
    {
      wrongCode: `max_num = 0
for num in numbers:
    if num > max_num:
        max_num = num`,
      whyItFails: "If all numbers in the list are negative (like [-3, -7, -2]), max_num will return 0 which is not even in the list! Initializing to 0 is a dangerous bug.",
      correctCode: `max_num = numbers[0]
for num in numbers:
    if num > max_num:
        max_num = num`,
      remedy: "Always initialize your maximum accumulator variable to the first element of the list instead of an arbitrary 0."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "max_num = numbers[0]",
      description: "Assume the first number (3) is the largest.",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 3, num: "None" },
      callStack: ["find_max()"]
    },
    {
      codeLine: "for num in numbers:",
      description: "Checking next element (7).",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 3, num: 7 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "if num > max_num:",
      description: "Is 7 > 3? Yes!",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 3, num: 7 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "max_num = num",
      description: "Update max_num to 7.",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 7, num: 7 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "for num in numbers:",
      description: "Checking next element (2).",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 7, num: 2 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "if num > max_num:",
      description: "Is 2 > 7? No.",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 7, num: 2 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "for num in numbers:",
      description: "Checking next element (9).",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 7, num: 9 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "if num > max_num:",
      description: "Is 9 > 7? Yes!",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 7, num: 9 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "max_num = num",
      description: "Update max_num to 9.",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 9, num: 9 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "for num in numbers:",
      description: "Checking next element (5).",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 9, num: 5 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "if num > max_num:",
      description: "Is 5 > 9? No.",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 9, num: 5 },
      callStack: ["find_max()"]
    },
    {
      codeLine: "return max_num",
      description: "Return the final maximum value 9.",
      variables: { numbers: "[3, 7, 2, 9, 5]", max_num: 9, num: 5 },
      callStack: ["find_max()"]
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
