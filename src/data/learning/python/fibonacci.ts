import { LearningQuestion } from "@/types/learning";

export const fibonacciQuestion: LearningQuestion = {
  id: "fibonacci",
  title: "Fibonacci Series",
  difficulty: "Easy",
  topic: "python",
  problem: {
    description: "Generate a list of the first n Fibonacci numbers. In the Fibonacci sequence, each number is the sum of the two preceding ones, starting from 0 and 1.",
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
    language: "python",
    snippet: `def fibonacci(n: int) -> list:
    if n <= 0:
        return []
    if n == 1:
        return [0]
    fib = [0, 1]
    while len(fib) < n:
        next_val = fib[-1] + fib[-2]
        fib.append(next_val)
    return fib`
  },
  complexity: {
    label: "Sequence length (n)",
    operations: "Additions",
    visualText: "5 terms ➔ 3 additions ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(n) — To store the generated series array"
  },
  explainLike10: {
    professional: "Iterative linear generation mapping a dynamic array with pointer updates to append cumulative sums.",
    simple: "We start with 0 and 1 in a list, then repeatedly add the last two numbers to make the next number.",
    verySimple: "Stacking boxes where each new box contains the sum of toys in the two boxes directly below it."
  },
  commonMistakes: [
    {
      wrongCode: `# Recursive solution without caching
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)`,
      whyItFails: "Using simple recursion to find the nth number repeats the same calculations millions of times, causing the browser or python to freeze for numbers larger than 40!",
      correctCode: `def fibonacci(n):
    # Iterative method is much faster
    fib = [0, 1]
    # loop...`,
      remedy: "Use loops (iteration) or memoization (caching) to generate Fibonacci numbers instead of standard redundant recursion."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "if n <= 0: (and n==1)",
      description: "n is 5, so we skip base checks and proceed to list setup.",
      variables: { n: 5, fib: "None", next_val: "None" },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "fib = [0, 1]",
      description: "Initialize the sequence list with the first two terms [0, 1].",
      variables: { n: 5, fib: "[0, 1]", next_val: "None" },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "while len(fib) < n:",
      description: "Length is 2, which is less than 5. Loop continues.",
      variables: { n: 5, fib: "[0, 1]", next_val: "None" },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "next_val = fib[-1] + fib[-2]",
      description: "Add last (1) and second-to-last (0) values. next_val = 1 + 0 = 1.",
      variables: { n: 5, fib: "[0, 1]", next_val: 1 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "fib.append(next_val)",
      description: "Append 1 to the list.",
      variables: { n: 5, fib: "[0, 1, 1]", next_val: 1 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "while len(fib) < n:",
      description: "Length is 3, which is less than 5. Loop continues.",
      variables: { n: 5, fib: "[0, 1, 1]", next_val: 1 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "next_val = fib[-1] + fib[-2]",
      description: "Add last (1) and second-to-last (1) values. next_val = 1 + 1 = 2.",
      variables: { n: 5, fib: "[0, 1, 1]", next_val: 2 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "fib.append(next_val)",
      description: "Append 2 to the list.",
      variables: { n: 5, fib: "[0, 1, 1, 2]", next_val: 2 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "while len(fib) < n:",
      description: "Length is 4, which is less than 5. Loop continues.",
      variables: { n: 5, fib: "[0, 1, 1, 2]", next_val: 2 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "next_val = fib[-1] + fib[-2]",
      description: "Add last (2) and second-to-last (1) values. next_val = 2 + 1 = 3.",
      variables: { n: 5, fib: "[0, 1, 1, 2]", next_val: 3 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "fib.append(next_val)",
      description: "Append 3 to the list. list is now [0, 1, 1, 2, 3].",
      variables: { n: 5, fib: "[0, 1, 1, 2, 3]", next_val: 3 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "while len(fib) < n:",
      description: "Length is 5. 5 is not less than 5, so loop exits.",
      variables: { n: 5, fib: "[0, 1, 1, 2, 3]", next_val: 3 },
      callStack: ["fibonacci()"]
    },
    {
      codeLine: "return fib",
      description: "Return the completed Fibonacci series array.",
      variables: { n: 5, fib: "[0, 1, 1, 2, 3]", next_val: 3 },
      callStack: ["fibonacci()"]
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
