import { LearningQuestion } from "@/types/learning";

export const javaFibonacciQuestion: LearningQuestion = {
  id: "fibonacci",
  title: "Fibonacci Series",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to generate the first n Fibonacci numbers. In the Fibonacci sequence, each number is the sum of the two preceding ones, starting from 0 and 1.",
    input: "5",
    output: "[0, 1, 1, 2, 3]"
  },
  story: "Imagine a plant growing new branches. In the beginning, you have 0 branches. Then 1 grows. From then on, every new month's branches are the sum of the previous two months' branches! month 1: 0, month 2: 1, month 3: 0+1=1, month 4: 1+1=2, month 5: 1+2=3. That is the Fibonacci spiral of nature!",
  simpleExplanation: "We start with a list containing 0 and 1. To find the next number in the list, we add the last number and the second-to-last number together. We repeat this addition and add the new number to the end of our list until we have generated as many numbers as we need.",
  visualThinking: [
    "Terms ➔ 5",
    "Start ➔ [0, 1]",
    "Next term ➔ 0 + 1 = 1 ➔ [0, 1, 1]",
    "Next term ➔ 1 + 1 = 2 ➔ [0, 1, 1, 2]",
    "Next term ➔ 1 + 2 = 3 ➔ [0, 1, 1, 2, 3]",
    "Done! list length is 5."
  ],
  visualExecution: {
    headers: ["Index", "0", "1", "2", "3", "4"],
    inputs: ["Calculation", "Start", "Start", "0 + 1", "1 + 1", "1 + 2"],
    outputs: ["Fibonacci Value", "0", "1", "1", "2", "3"]
  },
  code: {
    language: "java",
    snippet: `import java.util.ArrayList;
import java.util.List;

public static List<Integer> generateFibonacci(int n) {
    List<Integer> fib = new ArrayList<>();
    if (n <= 0) return fib;
    fib.add(0);
    if (n == 1) return fib;
    fib.add(1);
    while (fib.size() < n) {
        int nextVal = fib.get(fib.size() - 1) + fib.get(fib.size() - 2);
        fib.add(nextVal);
    }
    return fib;
}`
  },
  complexity: {
    label: "Sequence length (n)",
    operations: "Additions",
    visualText: "5 terms ➔ 3 additions ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(n) — To store the list of generated numbers"
  },
  explainLike10: {
    professional: "Iterative linear generation mapping a dynamic array with pointer updates to append cumulative sums.",
    simple: "We start with 0 and 1 in a list, then repeatedly add the last two numbers to make the next number.",
    verySimple: "Stacking boxes where each new box contains the sum of toys in the two boxes directly below it."
  },
  commonMistakes: [
    {
      wrongCode: `public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2); // Recursive call
}`,
      whyItFails: "Using standard recursion without caching values repeats the same calculations millions of times, causing the browser or program to freeze for numbers larger than 40!",
      correctCode: `List<Integer> fib = new ArrayList<>();
// Iterative loop adding...`,
      remedy: "Use iterative loops (like while or for loops) to accumulate values instead of recursive method calls."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "List<Integer> fib = new ArrayList<>();",
      description: "Initialize an ArrayList to store the sequence.",
      variables: { n: 5, fib: "[]", nextVal: "None" },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "fib.add(0);",
      description: "Add the first term (0) to the list.",
      variables: { n: 5, fib: "[0]", nextVal: "None" },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "fib.add(1);",
      description: "Add the second term (1) to the list.",
      variables: { n: 5, fib: "[0, 1]", nextVal: "None" },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "while (fib.size() < n)",
      description: "List size is 2. 2 < 5 is true. Loop starts.",
      variables: { n: 5, fib: "[0, 1]", nextVal: "None" },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "int nextVal = fib.get(...) + fib.get(...);",
      description: "Add last (1) and second-to-last (0) values. nextVal = 1 + 0 = 1.",
      variables: { n: 5, fib: "[0, 1]", nextVal: 1 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "fib.add(nextVal);",
      description: "Add 1 to the list.",
      variables: { n: 5, fib: "[0, 1, 1]", nextVal: 1 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "while (fib.size() < n)",
      description: "List size is 3. 3 < 5 is true. Loop continues.",
      variables: { n: 5, fib: "[0, 1, 1]", nextVal: 1 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "int nextVal = fib.get(...) + fib.get(...);",
      description: "Add last (1) and second-to-last (1) values. nextVal = 1 + 1 = 2.",
      variables: { n: 5, fib: "[0, 1, 1]", nextVal: 2 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "fib.add(nextVal);",
      description: "Add 2 to the list.",
      variables: { n: 5, fib: "[0, 1, 1, 2]", nextVal: 2 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "while (fib.size() < n)",
      description: "List size is 4. 4 < 5 is true. Loop continues.",
      variables: { n: 5, fib: "[0, 1, 1, 2]", nextVal: 2 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "int nextVal = fib.get(...) + fib.get(...);",
      description: "Add last (2) and second-to-last (1) values. nextVal = 2 + 1 = 3.",
      variables: { n: 5, fib: "[0, 1, 1, 2]", nextVal: 3 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "fib.add(nextVal);",
      description: "Add 3 to the list. List is now [0, 1, 1, 2, 3].",
      variables: { n: 5, fib: "[0, 1, 1, 2, 3]", nextVal: 3 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "while (fib.size() < n)",
      description: "List size is 5. 5 < 5 is false. Loop exits.",
      variables: { n: 5, fib: "[0, 1, 1, 2, 3]", nextVal: 3 },
      callStack: ["generateFibonacci()"]
    },
    {
      codeLine: "return fib;",
      description: "Return the completed Fibonacci series array.",
      variables: { n: 5, fib: "[0, 1, 1, 2, 3]", nextVal: 3 },
      callStack: ["generateFibonacci()"]
    }
  ],
  realWorldApps: [
    "Nature Modeling: Simulating plant branch spacing, shell growth grids, and sunflower seed counts.",
    "Financial Algorithms: Designing Fibonacci retracement lines to analyze stock market price support bands.",
    "User Interface grids: Computing proportional ratios (Golden Ratio) for premium web designs."
  ],
  interviewTips: [
    "Identify Redundant Recursion: Explain why the basic recursive formula 'F(n) = F(n-1) + F(n-2)' is slow (O(2^n)) and how iteration fixes it.",
    "Space Optimization: Highlight that if we only need the Nth Fibonacci number, we can keep track of just the last two values using O(1) space instead of building the whole list.",
    "Memoization: Show familiarity with storing previously calculated values in a lookup dict."
  ],
  practiceVariations: [
    "Find the Nth Fibonacci number using only O(1) extra space (no list).",
    "Implement the Fibonacci series using recursion with a memoization decorator.",
    "Verify if a given integer exists inside the Fibonacci sequence."
  ]
};
