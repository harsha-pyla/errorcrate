import { LearningQuestion } from "@/types/learning";

export const javaFactorialQuestion: LearningQuestion = {
  id: "factorial",
  title: "Factorial of a Number",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to calculate the factorial of a non-negative integer n. The factorial of n is the product of all positive integers less than or equal to n.",
    input: "4",
    output: "24"
  },
  story: "Imagine you are arranging 4 books on a shelf. For the first spot, you have 4 books to choose from. For the second spot, you have 3 remaining books. For the third, 2 books, and for the last spot, only 1. The total number of ways to arrange them is 4 * 3 * 2 * 1 = 24! This multiplier series is what we call a factorial.",
  simpleExplanation: "To find the factorial of a number like 4, we multiply it by the next smaller number (3), then by the next smaller (2), and so on down to 1. 4 * 3 * 2 * 1 equals 24.",
  visualThinking: [
    "Number ➔ 4",
    "Multiply ➔ 4",
    "Multiply ➔ 4 * 3 = 12",
    "Multiply ➔ 12 * 2 = 24",
    "Multiply ➔ 24 * 1 = 24",
    "Result ➔ 24"
  ],
  visualExecution: {
    headers: ["Step", "n = 4", "n = 3", "n = 2", "n = 1"],
    inputs: ["Current Multiplier", "4", "3", "2", "1"],
    outputs: ["Accumulated Result", "4", "12", "24", "24"]
  },
  code: {
    language: "java",
    snippet: `public static long factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("Number must be non-negative");
    }
    long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}`
  },
  complexity: {
    label: "Number (n)",
    operations: "Multiplications",
    visualText: "n = 4 ➔ 3 multiplications ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Computed in-place using loops)"
  },
  explainLike10: {
    professional: "Iterative accumulation using a single multiplier register to compute the product factorial series.",
    simple: "We start with a result of 1, then multiply it by 2, then by 3, and keep going up to our number.",
    verySimple: "Multiplying numbers like a staircase: start at 1, step up to 2, then multiply by 3, up to our target!"
  },
  commonMistakes: [
    {
      wrongCode: `public static int fact(int n) {
    // using int causes overflow very quickly
    int result = 1;
    for (int i = 2; i <= n; i++) result *= i;
    return result;
}`,
      whyItFails: "Since factorials grow extremely fast, using 'int' in Java will overflow for any number larger than 12! For example, 13! is larger than 2 billion (Integer.MAX_VALUE), which results in negative or garbage numbers. Using 'long' lets us calculate up to 20!.",
      correctCode: `public static long factorial(int n) {
    long result = 1;
    // ...
}`,
      remedy: "Use 'long' or 'BigInteger' in Java when computing products of sequence accumulations to avoid integer overflows."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "if (n < 0) {",
      description: "n is 4. Skip exception checks.",
      variables: { n: 4, result: "None", i: "None" },
      callStack: ["factorial()"]
    },
    {
      codeLine: "long result = 1;",
      description: "Initialize result accumulator to 1.",
      variables: { n: 4, result: 1, i: "None" },
      callStack: ["factorial()"]
    },
    {
      codeLine: "for (int i = 2; i <= n; i++)",
      description: "Loop range is 2 to 4. Start with i = 2.",
      variables: { n: 4, result: 1, i: 2 },
      callStack: ["factorial()"]
    },
    {
      codeLine: "result *= i;",
      description: "Multiply result (1) by i (2). result becomes 2.",
      variables: { n: 4, result: 2, i: 2 },
      callStack: ["factorial()"]
    },
    {
      codeLine: "for (int i = 2; i <= n; i++)",
      description: "Increment i to 3.",
      variables: { n: 4, result: 2, i: 3 },
      callStack: ["factorial()"]
    },
    {
      codeLine: "result *= i;",
      description: "Multiply result (2) by i (3). result becomes 6.",
      variables: { n: 4, result: 6, i: 3 },
      callStack: ["factorial()"]
    },
    {
      codeLine: "for (int i = 2; i <= n; i++)",
      description: "Increment i to 4.",
      variables: { n: 4, result: 6, i: 4 },
      callStack: ["factorial()"]
    },
    {
      codeLine: "result *= i;",
      description: "Multiply result (6) by i (4). result becomes 24.",
      variables: { n: 4, result: 24, i: 4 },
      callStack: ["factorial()"]
    },
    {
      codeLine: "return result;",
      description: "Loop completes. Return the calculated factorial value 24.",
      variables: { n: 4, result: 24, i: 5 },
      callStack: ["factorial()"]
    }
  ],
  realWorldApps: [
    "Combinatorics: Calculating total arrangements, permuting items (e.g. key passwords, shelf allocations).",
    "Probability theory: Finding matching statistics using binomial distributions.",
    "Graphics rendering: Computing smooth bezier curves using factorial multipliers."
  ],
  interviewTips: [
    "Explain Stack Depth: If you choose to write recursion, note that it takes O(n) call stack memory, making iteration safer.",
    "Verify Negative numbers: Always handle negative inputs by throwing an error or returning 0.",
    "Factorial of 0: Remember that 0! is mathematically defined as 1, not 0!"
  ],
  practiceVariations: [
    "Write the factorial calculator using recursion with a cache helper.",
    "Find the number of trailing zeroes inside the computed factorial of a number.",
    "Compute combinations (n choose k) using factorial operations."
  ]
};
