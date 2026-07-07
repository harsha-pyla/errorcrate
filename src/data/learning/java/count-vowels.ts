import { LearningQuestion } from "@/types/learning";

export const javaCountVowelsQuestion: LearningQuestion = {
  id: "count-vowels",
  title: "Count Vowels in a String",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method that counts and returns the total number of vowels (a, e, i, o, u) inside a given string, ignoring case.",
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
    language: "java",
    snippet: `public static int countVowels(String s) {
    if (s == null) return 0;
    int count = 0;
    String vowels = "aeiouAEIOU";
    for (int i = 0; i < s.length(); i++) {
        char ch = s.charAt(i);
        // Check if character is a vowel
        if (vowels.indexOf(ch) != -1) {
            count++;
        }
    }
    return count;
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Vowel checks",
    visualText: "5 letters ➔ 5 vowel scans ➔ Time O(n)",
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
      wrongCode: `if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
    count++;
} // Misses capitals!`,
      whyItFails: "If the string contains capital vowels (like 'APPLE'), this code returns 0 because it only checks for lowercase characters! Always handle case sensitivity.",
      correctCode: `String vowels = "aeiouAEIOU";
if (vowels.indexOf(ch) != -1) { ... }`,
      remedy: "Use String.indexOf() with both lowercase and uppercase vowels in the lookup index reference, or convert the string to lowercase first."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int count = 0;",
      description: "Initialize vowel count counter to 0.",
      variables: { s: '"hello"', count: 0, i: "None", ch: "None" },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "String vowels = \"aeiouAEIOU\";",
      description: "Define the set of vowel characters.",
      variables: { s: '"hello"', count: 0, i: "None", ch: "None", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "for (int i = 0; i < s.length(); i++)",
      description: "Loop starts. Set index i to 0 (character 'h').",
      variables: { s: '"hello"', count: 0, i: 0, ch: "None", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "char ch = s.charAt(i);",
      description: "Extract character at index 0 ('h').",
      variables: { s: '"hello"', count: 0, i: 0, ch: "'h'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "if (vowels.indexOf(ch) != -1)",
      description: "Check if 'h' is in 'aeiouAEIOU'. indexOf returns -1. Skip increment.",
      variables: { s: '"hello"', count: 0, i: 0, ch: "'h'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "for (int i = 0; i < s.length(); i++)",
      description: "Increment index i to 1 (character 'e').",
      variables: { s: '"hello"', count: 0, i: 1, ch: "'h'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "char ch = s.charAt(i);",
      description: "Extract character at index 1 ('e').",
      variables: { s: '"hello"', count: 0, i: 1, ch: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "if (vowels.indexOf(ch) != -1)",
      description: "Check if 'e' is in vowels. indexOf returns 1. Match found!",
      variables: { s: '"hello"', count: 0, i: 1, ch: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count by 1. count becomes 1.",
      variables: { s: '"hello"', count: 1, i: 1, ch: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "for (int i = 0; i < s.length(); i++)",
      description: "Increment index i to 2 (character 'l').",
      variables: { s: '"hello"', count: 1, i: 2, ch: "'e'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "char ch = s.charAt(i);",
      description: "Extract character at index 2 ('l').",
      variables: { s: '"hello"', count: 1, i: 2, ch: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "if (vowels.indexOf(ch) != -1)",
      description: "Check if 'l' is in vowels. No match.",
      variables: { s: '"hello"', count: 1, i: 2, ch: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "for (int i = 0; i < s.length(); i++)",
      description: "Increment index i to 3 (character 'l').",
      variables: { s: '"hello"', count: 1, i: 3, ch: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "char ch = s.charAt(i);",
      description: "Extract character at index 3 ('l').",
      variables: { s: '"hello"', count: 1, i: 3, ch: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "if (vowels.indexOf(ch) != -1)",
      description: "Check if 'l' is in vowels. No match.",
      variables: { s: '"hello"', count: 1, i: 3, ch: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "for (int i = 0; i < s.length(); i++)",
      description: "Increment index i to 4 (character 'o').",
      variables: { s: '"hello"', count: 1, i: 4, ch: "'l'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "char ch = s.charAt(i);",
      description: "Extract character at index 4 ('o').",
      variables: { s: '"hello"', count: 1, i: 4, ch: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "if (vowels.indexOf(ch) != -1)",
      description: "Check if 'o' is in vowels. indexOf returns 3. Match found!",
      variables: { s: '"hello"', count: 1, i: 4, ch: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count by 1. count becomes 2.",
      variables: { s: '"hello"', count: 2, i: 4, ch: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
    },
    {
      codeLine: "return count;",
      description: "Loop completes (i is 5). Return final vowel count 2.",
      variables: { s: '"hello"', count: 2, i: 5, ch: "'o'", vowels: '"aeiouAEIOU"' },
      callStack: ["countVowels()"]
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
