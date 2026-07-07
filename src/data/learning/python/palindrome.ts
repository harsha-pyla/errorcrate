import { LearningQuestion } from "@/types/learning";

export const palindromeQuestion: LearningQuestion = {
  id: "palindrome",
  title: "Palindrome String",
  difficulty: "Easy",
  topic: "python",
  problem: {
    description: "Determine whether a given string is a palindrome. A palindrome is a word that reads the same backward as forward.",
    input: `"racecar"`,
    output: "True"
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
    language: "python",
    snippet: `def is_palindrome(s: str) -> bool:
    left = 0
    right = len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True`
  },
  complexity: {
    label: "Length of string (n)",
    operations: "Comparisons",
    visualText: "7 letters ➔ 3 comparisons ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (In-place pointers, no string copies)"
  },
  explainLike10: {
    professional: "Two-pointer collision traversal comparing character pairs from outer boundary limits inwards.",
    simple: "We check the first and last letters. If they are equal, we check the second and second-to-last, and keep going until we reach the middle.",
    verySimple: "Comparing folded paper ends. Fold the word in half; if all letters lying on top of each other are identical, it is a palindrome!"
  },
  commonMistakes: [
    {
      wrongCode: `def is_pal(s):
    # Simply checking reverse:
    return s == s[::-1]`,
      whyItFails: "Using s[::-1] copies the entire string in memory. If the string is a 10MB text file, it creates an unnecessary 10MB copy, wasting memory! The two-pointer method does not copy anything.",
      correctCode: `def is_palindrome(s):
    # Two-pointer uses O(1) extra space
    left = 0
    # ...`,
      remedy: "Use a two-pointer approach to avoid copying the string, which keeps the space complexity at O(1) (constant space)."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "left = 0",
      description: "Initialize left pointer at the start (index 0).",
      variables: { s: "racecar", left: 0, right: "None" },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "right = len(s) - 1",
      description: "Initialize right pointer at the end (index 6).",
      variables: { s: "racecar", left: 0, right: 6 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "while left < right:",
      description: "0 < 6. Loop begins.",
      variables: { s: "racecar", left: 0, right: 6 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "if s[left] != s[right]:",
      description: "Compare index 0 ('r') and index 6 ('r'). They are equal, so skip return False.",
      variables: { s: "racecar", left: 0, right: 6 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "left += 1; right -= 1",
      description: "Move pointers inwards. left becomes 1, right becomes 5.",
      variables: { s: "racecar", left: 1, right: 5 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "while left < right:",
      description: "1 < 5. Loop continues.",
      variables: { s: "racecar", left: 1, right: 5 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "if s[left] != s[right]:",
      description: "Compare index 1 ('a') and index 5 ('a'). They are equal.",
      variables: { s: "racecar", left: 1, right: 5 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "left += 1; right -= 1",
      description: "Move pointers inwards. left becomes 2, right becomes 4.",
      variables: { s: "racecar", left: 2, right: 4 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "while left < right:",
      description: "2 < 4. Loop continues.",
      variables: { s: "racecar", left: 2, right: 4 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "if s[left] != s[right]:",
      description: "Compare index 2 ('c') and index 4 ('c'). They are equal.",
      variables: { s: "racecar", left: 2, right: 4 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "left += 1; right -= 1",
      description: "Move pointers inwards. left becomes 3, right becomes 3.",
      variables: { s: "racecar", left: 3, right: 3 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "while left < right:",
      description: "left is 3, right is 3. 3 < 3 is False. Loop terminates.",
      variables: { s: "racecar", left: 3, right: 3 },
      callStack: ["is_palindrome()"]
    },
    {
      codeLine: "return True",
      description: "All letter pairs matched. Return True.",
      variables: { s: "racecar", left: 3, right: 3 },
      callStack: ["is_palindrome()"]
    }
  ],
  realWorldApps: [
    "Text Validation: Checking user credentials, directory paths, or palindromic code configurations.",
    "Bioinformatics: Scanning DNA sequences for palindrome patterns that indicate enzyme binding sites.",
    "Data Recovery: Inspecting integrity of bi-directional package transmissions."
  ],
  interviewTips: [
    "Clean non-alphanumeric: If the question involves spaces and punctuation (like 'A man, a plan, a canal: Panama'), explain how to skip non-letters using 'char.isalnum()'.",
    "Case-Sensitivity: Always clarify with the interviewer if the check should be case-sensitive or case-insensitive.",
    "Pointer collision: Clearly explain the break condition when left index equals or exceeds right index."
  ],
  practiceVariations: [
    "Check if a sentence is a palindrome, ignoring capitalization, spaces, and punctuation symbols.",
    "Determine if you can make a string a palindrome by deleting at most one character.",
    "Find the longest palindromic substring inside a given string."
  ]
};
