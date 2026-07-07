import { LearningQuestion } from "@/types/learning";

export const countVowelsQuestion: LearningQuestion = {
  id: "count-vowels",
  title: "Count Vowels in a String",
  difficulty: "Easy",
  topic: "python",
  problem: {
    description: "Given a string of characters, count and return the total number of vowels (a, e, i, o, u) inside it, ignoring case.",
    input: `"hello"`,
    output: "2"
  },
  story: "Imagine you are sorting letters in a bucket. You only care about the vowels: 'a', 'e', 'i', 'o', and 'u'. Every time you pull out a vowel, you tick a checkmark on a piece of paper. Other letters (consonants) are ignored. By the end, the number of checkmarks is your vowel count!",
  simpleExplanation: "We look at each letter of the word one by one. We convert the letter to lowercase so we don't miss capital letters. If the letter is a, e, i, o, or u, we add 1 to our count. Otherwise, we do nothing and move to the next letter.",
  visualThinking: [
    `hello`,
    "h ➔ Not a vowel ➔ count remains 0",
    "e ➔ Is a vowel ➔ count = 1",
    "l ➔ Not a vowel ➔ count remains 1",
    "l ➔ Not a vowel ➔ count remains 1",
    "o ➔ Is a vowel ➔ count = 2",
    "Result ➔ 2"
  ],
  visualExecution: {
    headers: ["Letter", "h", "e", "l", "l", "o"],
    inputs: ["Is Vowel?", "No", "Yes", "No", "No", "Yes"],
    outputs: ["Running Count", "0", "1", "1", "1", "2"]
  },
  code: {
    language: "python",
    snippet: `def count_vowels(s: str) -> int:
    count = 0
    vowels = "aeiouAEIOU"
    for char in s:
        if char in vowels:
            count += 1
    return count`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Vowel Checks",
    visualText: "5 letters ➔ 5 character checks ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Uses a single count integer)"
  },
  explainLike10: {
    professional: "Linear search matching character elements against a set of static vowel lookup literals.",
    simple: "We go through each letter. If it is one of the vowels (a, e, i, o, u), we increment our counter.",
    verySimple: "Imagine going through a bag of candies and counting only the red ones!"
  },
  commonMistakes: [
    {
      wrongCode: `if char == 'a' or 'e' or 'i' or 'o' or 'u':
    count += 1`,
      whyItFails: "In Python, writing 'or e' evaluates 'e' as a truthy string itself, making the condition always evaluate to True for any character! It will return the length of the string instead of the vowel count.",
      correctCode: `if char in "aeiouAEIOU":
    count += 1`,
      remedy: "Use the 'in' membership operator to verify if the character belongs to the vowels string collections."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "count = 0",
      description: "Initialize vowel count counter to 0.",
      variables: { s: "hello", count: 0, char: "None" },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "vowels = \"aeiouAEIOU\"",
      description: "Define the set of vowel characters.",
      variables: { s: "hello", count: 0, char: "None", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "for char in s:",
      description: "Get first character char = 'h'.",
      variables: { s: "hello", count: 0, char: "'h'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "if char in vowels:",
      description: "Is 'h' inside 'aeiouAEIOU'? No. Loop restarts.",
      variables: { s: "hello", count: 0, char: "'h'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "for char in s:",
      description: "Get next character char = 'e'.",
      variables: { s: "hello", count: 0, char: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "if char in vowels:",
      description: "Is 'e' inside 'aeiouAEIOU'? Yes!",
      variables: { s: "hello", count: 0, char: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "count += 1",
      description: "Increment count by 1. count is now 1.",
      variables: { s: "hello", count: 1, char: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "for char in s:",
      description: "Get next character char = 'l'.",
      variables: { s: "hello", count: 1, char: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "if char in vowels:",
      description: "Is 'l' inside vowels? No.",
      variables: { s: "hello", count: 1, char: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "for char in s:",
      description: "Get next character char = 'l'.",
      variables: { s: "hello", count: 1, char: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "if char in vowels:",
      description: "Is 'l' inside vowels? No.",
      variables: { s: "hello", count: 1, char: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "for char in s:",
      description: "Get next character char = 'o'.",
      variables: { s: "hello", count: 1, char: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "if char in vowels:",
      description: "Is 'o' inside vowels? Yes!",
      variables: { s: "hello", count: 1, char: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "count += 1",
      description: "Increment count by 1. count is now 2.",
      variables: { s: "hello", count: 2, char: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    },
    {
      codeLine: "return count",
      description: "Loop completes. Return the final count value 2.",
      variables: { s: "hello", count: 2, char: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["count_vowels()"]
    }
  ],
  realWorldApps: [
    "Text Processing: Checking readability indices, search optimization parameters, or compression ratios.",
    "Linguistics Systems: Analyzing word properties, syllables, and text phonetic patterns.",
    "Web filters: Screening domain words for valid character profiles."
  ],
  interviewTips: [
    "Membership Operator: Use Python's 'in' operator on a string or set containing vowels, showing clean syntax.",
    "Case sensitivity check: Make sure to check both uppercase and lowercase vowels (e.g. by converting to lowercase).",
    "Hashing: Explain why storing vowels in a Set makes search lookup time O(1)."
  ],
  practiceVariations: [
    "Count consonants in a string (letters that are not vowels and are alphabetic).",
    "Find which vowel occurs the most number of times in a string.",
    "Replace all vowels in a sentence with a specific wildcard character like '*'."
  ]
};
