import { LearningQuestion } from "@/types/learning";

export const javaPalindromeQuestion: LearningQuestion = {
  id: "palindrome",
  title: "Palindrome String",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to check whether a given string is a palindrome. A palindrome is a word that reads the same backward as forward.",
    input: `"racecar"`,
    output: "true"
  },
  story: "Imagine a mirror word. A palindrome word looks identical when you see it in a mirror. Whether you read it forwards or backwards, the letters spell the exact same word! For example: 'mom', 'radar', or 'racecar'.",
  simpleExplanation: "We compare letters from both ends moving inwards. We match the first letter with the last letter, the second letter with the second-to-last, and so on. If all pairs match, the word is a palindrome. If even one pair doesn't match, it is not!",
  visualThinking: [
    "racecar",
    "Compare first & last letter ➔ r == r ➔ Match!",
    "Compare second & second-to-last ➔ a == a ➔ Match!",
    "Compare third & third-to-last ➔ c == c ➔ Match!",
    "Compare middle letter ➔ e (no pair needed)",
    "All matched ➔ Palindrome!"
  ],
  visualExecution: {
    headers: ["Left index", "Right index", "Left letter", "Right letter", "Is Match?"],
    inputs: ["0", "6", "r", "r", "Yes"],
    outputs: ["1", "5", "a", "a", "Yes (continues)"]
  },
  code: {
    language: "java",
    snippet: `public static boolean isPalindrome(String s) {
    if (s == null) return false;
    int left = 0;
    int right = s.length() - 1;
    while (left < right) {
        if (s.charAt(left) != s.charAt(right)) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Comparisons",
    visualText: "7 letters ➔ 3 comparisons ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Swaps/compares in-place without creating copies)"
  },
  explainLike10: {
    professional: "Two-pointer collision traversal comparing character pairs from outer boundary limits inwards.",
    simple: "We check the first and last letters. If they are equal, we check the second and second-to-last, and keep going until we reach the middle.",
    verySimple: "Comparing folded paper ends. Fold the word in half; if all letters lying on top of each other are identical, it is a palindrome!"
  },
  commonMistakes: [
    {
      wrongCode: `public static boolean isPal(String s) {
    // Calling reverse() on a StringBuilder
    String rev = new StringBuilder(s).reverse().toString();
    return s.equals(rev);
}`,
      whyItFails: "While correct, this approach allocates a brand new StringBuilder and copies the entire string in memory. This wastes memory space (O(n)), whereas the two-pointer approach does not copy anything (O(1) space)!",
      correctCode: `int left = 0; int right = s.length() - 1;
while (left < right) { ... }`,
      remedy: "Use a two-pointer while loop to perform comparison swaps in-place without copying string content."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int left = 0;",
      description: "Initialize left pointer at index 0.",
      variables: { s: '"racecar"', left: 0, right: "None" },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "int right = s.length() - 1;",
      description: "Initialize right pointer at index 6.",
      variables: { s: '"racecar"', left: 0, right: 6 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "while (left < right)",
      description: "0 < 6 is true. Loop begins.",
      variables: { s: '"racecar"', left: 0, right: 6 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "if (s.charAt(left) != s.charAt(right))",
      description: "Compare index 0 ('r') and index 6 ('r'). They are equal.",
      variables: { s: '"racecar"', left: 0, right: 6 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Move pointers inwards. left becomes 1, right becomes 5.",
      variables: { s: '"racecar"', left: 1, right: 5 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "while (left < right)",
      description: "1 < 5. Loop continues.",
      variables: { s: '"racecar"', left: 1, right: 5 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "if (s.charAt(left) != s.charAt(right))",
      description: "Compare index 1 ('a') and index 5 ('a'). They are equal.",
      variables: { s: '"racecar"', left: 1, right: 5 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Move pointers inwards. left becomes 2, right becomes 4.",
      variables: { s: '"racecar"', left: 2, right: 4 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "while (left < right)",
      description: "2 < 4. Loop continues.",
      variables: { s: '"racecar"', left: 2, right: 4 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "if (s.charAt(left) != s.charAt(right))",
      description: "Compare index 2 ('c') and index 4 ('c'). They are equal.",
      variables: { s: '"racecar"', left: 2, right: 4 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Move pointers inwards. left becomes 3, right becomes 3.",
      variables: { s: '"racecar"', left: 3, right: 3 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "while (left < right)",
      description: "left is 3, right is 3. 3 < 3 is false. Loop exits.",
      variables: { s: '"racecar"', left: 3, right: 3 },
      callStack: ["isPalindrome()"]
    },
    {
      codeLine: "return true;",
      description: "All matches succeeded. Return true.",
      variables: { s: '"racecar"', left: 3, right: 3 },
      callStack: ["isPalindrome()"]
    }
  ],
  realWorldApps: [
    "Bioinformatics: Finding symmetric sequences (palindromic sequences) in DNA strands.",
    "String Processing: Cleansing input parameters or validating user input syntax structures.",
    "Lexical Analyzers: Token validation inside compilers."
  ],
  interviewTips: [
    "Alphanumeric cases: Be ready to write a method that handles spaces and capitalization (e.g. ignoring commas).",
    "Constant space constraint: Always choose the two-pointer approach in coding interviews to achieve O(1) space complexity.",
    "Avoid char conversion: Access string indices directly using charAt() instead of converting the string to a char array, which saves heap allocations."
  ],
  practiceVariations: [
    "Check if a sentence is a palindrome, ignoring non-alphanumeric characters and case.",
    "Verify if a number is a palindrome without converting it to a string.",
    "Find the longest palindromic substring in a given string."
  ]
};
