import { LearningQuestion } from "@/types/learning";

export const javaCheckPrimeQuestion: LearningQuestion = {
  id: "check-prime",
  title: "Prime Number Check",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to check whether a given integer is a prime number. A prime number is a number greater than 1 that cannot be formed by multiplying two smaller natural numbers.",
    input: "7",
    output: "true"
  },
  story: "Imagine you have a box of blocks. A prime number of blocks is a stack that you can never arrange into equal, smaller piles (other than putting them all in 1 pile or individual blocks). For example, if you have 7 blocks, you cannot divide them into equal piles of 2, 3, 4, 5, or 6 without having leftovers!",
  simpleExplanation: "To check if a number is prime, we try dividing it by all smaller numbers starting from 2 up to the square root of that number. If any of those numbers divides it perfectly (with zero leftovers), then it is not prime. If none can divide it, it is prime!",
  visualThinking: [
    "Number ➔ 7",
    "Try dividing by 2 ➔ 7 % 2 = 1 (remains) ➔ No",
    "Try dividing by 3 ➔ 7 % 3 = 1 (remains) ➔ No",
    "Divisor search range ends (since √7 ≈ 2.6)",
    "No divisors found ➔ 7 is Prime!"
  ],
  visualExecution: {
    headers: ["Number", "Divisor", "Division Test", "Remainder", "Is Prime?"],
    inputs: ["7", "2", "7 / 2", "1", "Testing..."],
    outputs: ["7", "3", "7 / 3", "1", "Yes (No divisors found)"]
  },
  code: {
    language: "java",
    snippet: `public static boolean isPrime(int n) {
    if (n <= 1) return false;
    // Check divisors from 2 up to the square root of n
    for (int i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}`
  },
  complexity: {
    label: "Number (n)",
    operations: "Divisor Checks",
    visualText: "n = 100 ➔ Checks up to √100 = 10 operations ➔ Time O(√n)",
    timeComplexity: "O(√n) — Square Root Time",
    spaceComplexity: "O(1) — Constant space (No extra variables stored)"
  },
  explainLike10: {
    professional: "Trial division checking up to the integer square root limit to find factor pairs.",
    simple: "We try dividing our number by 2, 3, 4, etc. If any of them divides it cleanly, it is not prime. Otherwise, it is prime.",
    verySimple: "Checking if a bag of marbles can be divided into equal groups. If it cannot, the number of marbles is prime!"
  },
  commonMistakes: [
    {
      wrongCode: `for (int i = 2; i < n; i++) {
    if (n % i == 0) return false;
}`,
      whyItFails: "While correct, checking all the way to n takes too much time for large numbers! If n is 1,000,000, checking 1 million times is slow, whereas checking up to the square root (1,000) is instant.",
      correctCode: `for (int i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false;
}`,
      remedy: "Only check divisors up to the square root of n since any factor larger than the square root must pair with a factor smaller than the square root."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "if (n <= 1) return false;",
      description: "Check if n is less than or equal to 1. Since 7 > 1, we continue.",
      variables: { n: 7, i: "None" },
      callStack: ["isPrime()"]
    },
    {
      codeLine: "for (int i = 2; i <= Math.sqrt(n); i++)",
      description: "Square root of 7 is ~2.64. Range goes from 2 to 2 (i <= 2). Start with i = 2.",
      variables: { n: 7, i: 2 },
      callStack: ["isPrime()"]
    },
    {
      codeLine: "if (n % i == 0)",
      description: "Is 7 % 2 == 0? No, 7 % 2 is 1. No match.",
      variables: { n: 7, i: 2 },
      callStack: ["isPrime()"]
    },
    {
      codeLine: "for (int i = 2; i <= Math.sqrt(n); i++)",
      description: "Increment i to 3. 3 <= 2.64 is false. Loop finishes.",
      variables: { n: 7, i: 3 },
      callStack: ["isPrime()"]
    },
    {
      codeLine: "return true;",
      description: "No numbers divided 7 cleanly, so it is a prime number!",
      variables: { n: 7, i: 3 },
      callStack: ["isPrime()"]
    }
  ],
  realWorldApps: [
    "Cryptography: Generating RSA private keys that rely on the difficulty of factoring very large prime numbers.",
    "Hash Functions: Using prime numbers as table sizing limits to minimize key collision occurrences.",
    "Pseudo-Random Number Generation: Utilizing prime multiples to design non-repeating sequence loops."
  ],
  interviewTips: [
    "Square Root Optimization: Be ready to explain why we stop checks at √n rather than checking all the way to n.",
    "Handle Base Cases: Always remember to return False immediately for numbers less than or equal to 1 (like 0, 1, or negative numbers).",
    "Sieve of Eratosthenes: If asked to find multiple primes up to N, suggest the Sieve algorithm for optimal performance."
  ],
  practiceVariations: [
    "Find all prime numbers less than N using the Sieve of Eratosthenes.",
    "Perform prime factorization (finding all prime factors of a number).",
    "Verify if a number is a Twin Prime (two primes that differ by exactly 2)."
  ]
};
