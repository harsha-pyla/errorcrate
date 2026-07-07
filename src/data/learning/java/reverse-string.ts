import { LearningQuestion } from "@/types/learning";

export const javaReverseStringQuestion: LearningQuestion = {
  id: "reverse-string",
  title: "Reverse a String",
  difficulty: "Easy",
  topic: "java",
  problem: {
    description: "Write a Java method to reverse a given string. For example, reading it from right to left instead of left to right.",
    input: `"hello"`,
    output: `"olleh"`
  },
  story: "Imagine you are writing a word on a piece of paper. Instead of reading it from left to right normally, you read it backwards from right to left. That is all we are doing to reverse a string!",
  simpleExplanation: "We use a StringBuilder in Java to easily construct a new string. We loop through the original string backwards, starting from the last character index (length - 1) down to 0, appending each character to the StringBuilder.",
  visualThinking: [
    "hello",
    "Take last character ➔ o",
    "Take next ➔ l",
    "Repeat ➔ l",
    "Repeat ➔ e",
    "Repeat ➔ h",
    "Result ➔ olleh"
  ],
  visualExecution: {
    headers: ["Index", "0", "1", "2", "3", "4"],
    inputs: ["Input Letters", "h", "e", "l", "l", "o"],
    outputs: ["Reversed Letters", "o", "l", "l", "e", "h"]
  },
  code: {
    language: "java",
    snippet: `public static String reverseString(String s) {
    if (s == null) return null;
    StringBuilder reversed = new StringBuilder();
    // Loop backwards from s.length() - 1 to 0
    for (int i = s.length() - 1; i >= 0; i--) {
        reversed.append(s.charAt(i));
    }
    return reversed.toString();
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Appends",
    visualText: "5 characters ➔ 5 appends ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(n) — To store the reversed string characters"
  },
  explainLike10: {
    professional: "Linear string traversal utilizing charAt access to append characters to a heap-allocated StringBuilder.",
    simple: "We start from the last letter of the word, add it to our new word builder, then take the next letter before it, and repeat.",
    verySimple: "Imagine taking building blocks spelling 'hello' and copying them one by one from back to front to spell 'olleh'!"
  },
  commonMistakes: [
    {
      wrongCode: `for (int i = s.length(); i >= 0; i--) {
    reversed.append(s.charAt(i));
}`,
      whyItFails: "Using s.length() as the starting index is incorrect because character indexes in Java are 0-indexed (range from 0 to length - 1). This throws a StringIndexOutOfBoundsException!",
      correctCode: `for (int i = s.length() - 1; i >= 0; i--) {
    reversed.append(s.charAt(i));
}`,
      remedy: "Initialize your loop counter index at 's.length() - 1' to start exactly at the last valid character."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "StringBuilder reversed = new StringBuilder();",
      description: "Create a StringBuilder helper to build the reversed string in memory.",
      variables: { s: '"hello"', reversed: '""', i: "None" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "for (int i = s.length() - 1; i >= 0; i--)",
      description: "Loop starts. Length is 5, so index i is set to 4 (last character 'o').",
      variables: { s: '"hello"', reversed: '""', i: 4 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "reversed.append(s.charAt(i));",
      description: "Append character at index 4 ('o') to reversed.",
      variables: { s: '"hello"', reversed: '"o"', i: 4 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "for (int i = s.length() - 1; i >= 0; i--)",
      description: "Decrement i to 3 (character 'l').",
      variables: { s: '"hello"', reversed: '"o"', i: 3 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "reversed.append(s.charAt(i));",
      description: "Append character at index 3 ('l') to reversed.",
      variables: { s: '"hello"', reversed: '"ol"', i: 3 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "for (int i = s.length() - 1; i >= 0; i--)",
      description: "Decrement i to 2 (character 'l').",
      variables: { s: '"hello"', reversed: '"ol"', i: 2 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "reversed.append(s.charAt(i));",
      description: "Append character at index 2 ('l') to reversed.",
      variables: { s: '"hello"', reversed: '"oll"', i: 2 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "for (int i = s.length() - 1; i >= 0; i--)",
      description: "Decrement i to 1 (character 'e').",
      variables: { s: '"hello"', reversed: '"oll"', i: 1 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "reversed.append(s.charAt(i));",
      description: "Append character at index 1 ('e') to reversed.",
      variables: { s: '"hello"', reversed: '"olle"', i: 1 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "for (int i = s.length() - 1; i >= 0; i--)",
      description: "Decrement i to 0 (character 'h').",
      variables: { s: '"hello"', reversed: '"olle"', i: 0 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "reversed.append(s.charAt(i));",
      description: "Append character at index 0 ('h') to reversed. reversed is now 'olleh'.",
      variables: { s: '"hello"', reversed: '"olleh"', i: 0 },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "return reversed.toString();",
      description: "Loop exits (i is now -1). Return the final reversed string 'olleh'.",
      variables: { s: '"hello"', reversed: '"olleh"', i: -1 },
      callStack: ["reverseString()"]
    }
  ],
  realWorldApps: [
    "String Processing: Reversing names or strings to search for patterns.",
    "Cryptography: Flipping byte order (endianness reversal) inside data packets.",
    "Compilers: Checking syntax tokens backward for parser evaluation."
  ],
  interviewTips: [
    "StringBuilder vs String: In Java, string concatenation using '+' in loops creates many temporary String objects. Always use StringBuilder to optimize memory allocation.",
    "In-place list manipulation: If asked to reverse a char array, swap characters in-place using two pointers to achieve O(1) space complexity.",
    "Null safety: Remember to check for null input at the start of your method."
  ],
  practiceVariations: [
    "Reverse a character array in-place without using extra array allocations.",
    "Reverse only individual words inside a sentence while preserving their original order.",
    "Reverse a string recursively instead of using standard loops."
  ]
};
