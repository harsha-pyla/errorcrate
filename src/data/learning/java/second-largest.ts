import { LearningQuestion } from "@/types/learning";

export const javaSecondLargestQuestion: LearningQuestion = {
  id: "second-largest",
  title: "Find the Second Largest Number in an Array",
  difficulty: "Medium",
  topic: "java",
  problem: {
    description: "Write a Java method to scan an array of integers and return the second largest value in it, in a single pass.",
    input: "[3, 7, 2, 9, 5]",
    output: "7"
  },
  story: "Imagine you are running a race. You want to know who won the gold medal (the largest number) and who won the silver medal (the second largest). Every time a new runner crosses the finish line, you check if they are faster than your gold medalist. If they are, then your old gold medalist gets demoted to the silver medal, and the new runner gets the gold medal!",
  simpleExplanation: "We keep track of two variables: 'first' (the largest seen so far) and 'second' (the second largest seen so far). We initialize both to a very small number (Integer.MIN_VALUE). For each number in the array, if it is larger than 'first', we update 'second' to be 'first' and 'first' to be this new number. If it is smaller than 'first' but larger than 'second', we update only 'second'.",
  visualThinking: [
    "[3, 7, 2, 9, 5]",
    "Initialize first = MIN, second = MIN",
    "Check 3 ➔ 3 > MIN ➔ first becomes 3, second remains MIN",
    "Check 7 ➔ 7 > 3 ➔ first becomes 7, second becomes 3 (old first)",
    "Check 2 ➔ 2 < 3 ➔ no update",
    "Check 9 ➔ 9 > 7 ➔ first becomes 9, second becomes 7 (old first)",
    "Check 5 ➔ 5 < 7 ➔ no update",
    "Result ➔ second is 7"
  ],
  visualExecution: {
    headers: ["Number Scan", "3", "7", "2", "9", "5"],
    inputs: ["Gold (First)", "3", "7", "7", "9", "9"],
    outputs: ["Silver (Second)", "MIN", "3", "3", "7", "7"]
  },
  code: {
    language: "java",
    snippet: `public static int findSecondLargest(int[] arr) {
    if (arr == null || arr.length < 2) {
        throw new IllegalArgumentException("Array must have at least 2 elements");
    }
    int first = Integer.MIN_VALUE;
    int second = Integer.MIN_VALUE;
    for (int num : arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num != first) {
            second = num;
        }
    }
    return second;
}`
  },
  complexity: {
    label: "Array Size (n)",
    operations: "Comparisons",
    visualText: "5 items ➔ 5 comparisons ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (In-place search)"
  },
  explainLike10: {
    professional: "Single-pass linear scan keeping track of primary and secondary extrema variables.",
    simple: "We keep track of the absolute biggest number and the runner-up. Every time we see a number bigger than our current biggest, the biggest becomes the runner-up, and the new number takes first place.",
    verySimple: "Imagine keeping track of the tallest and second tallest kids in a line. If a new tallest kid walks in, the old tallest kid is now the second tallest!"
  },
  commonMistakes: [
    {
      wrongCode: `import java.util.Arrays;
public static int getSecond(int[] arr) {
    Arrays.sort(arr);
    return arr[arr.length - 2];
}`,
      whyItFails: "While sorting is simple, it takes O(n log n) time, which is slow compared to a single-pass O(n) search. In addition, sorting fails if the array contains duplicates (like [9, 9, 7]) since it would return 9 instead of the actual second largest value 7!",
      correctCode: `int first = Integer.MIN_VALUE;
int second = Integer.MIN_VALUE;
for (int num : arr) { ... }`,
      remedy: "Avoid sorting arrays when searching for basic extrema bounds. Write a manual single-pass comparison loop."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int first = Integer.MIN_VALUE; int second = Integer.MIN_VALUE;",
      description: "Initialize first and second to the smallest possible integer value.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: "MIN", second: "MIN", num: "None" },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick first element num = 3.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: "MIN", second: "MIN", num: 3 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "if (num > first)",
      description: "Is 3 > MIN? Yes! demote first to second and set first to 3.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 3, second: "MIN", num: 3 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 7.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 3, second: "MIN", num: 7 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "if (num > first)",
      description: "Is 7 > 3? Yes! set second to 3 and first to 7.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 7, second: 3, num: 7 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 2.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 7, second: 3, num: 2 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "if (num > first)",
      description: "Is 2 > 7? No. Proceed to check 'else if (num > second)'.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 7, second: 3, num: 2 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "else if (num > second && num != first)",
      description: "Is 2 > 3? No. Skip update.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 7, second: 3, num: 2 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 9.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 7, second: 3, num: 9 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "if (num > first)",
      description: "Is 9 > 7? Yes! set second to 7 (old first) and first to 9.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 9, second: 7, num: 9 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 5.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 9, second: 7, num: 5 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "else if (num > second && num != first)",
      description: "Is 5 > 7? No.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 9, second: 7, num: 5 },
      callStack: ["findSecondLargest()"]
    },
    {
      codeLine: "return second;",
      description: "Loop completes. Return the second largest value 7.",
      variables: { arr: "[3, 7, 2, 9, 5]", first: 9, second: 7, num: 5 },
      callStack: ["findSecondLargest()"]
    }
  ],
  realWorldApps: [
    "Statistical Data: Finding runners-up in games, second highest bids in auctions, or sub-peak loads in systems.",
    "Database indexing: Fetching top-2 record indicators for comparison grids.",
    "System failsafes: Keeping track of backup server nodes with the second highest capability."
  ],
  interviewTips: [
    "Verify duplicate rules: Ask if the second largest should be strictly less than the largest (e.g. for [9, 9, 7], is the answer 9 or 7?). My solution returns 7 (strict second largest).",
    "Identify Single Pass: Emphasize that the solution runs in O(n) time and O(1) space with only one pass through the array.",
    "Watch out for initial values: Do not initialize first and second to 0, since the array might contain negative numbers."
  ],
  practiceVariations: [
    "Find the second smallest number in an array in a single pass.",
    "Find the K-th largest element in an array (using a Min-Heap or QuickSelect).",
    "Find the third largest element in a single pass."
  ]
};
