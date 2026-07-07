import { LearningQuestion } from "@/types/learning";

export const reverseStringQuestion: LearningQuestion = {
  id: "reverse-string",
  title: "Reverse a String",
  difficulty: "Easy",
  topic: "python",
  problem: {
    description: "Take a string and return it in reverse order. For example, reading the string from right to left instead of left to right.",
    input: `"hello"`,
    output: `"olleh"`
  },
  story: "Imagine you are writing a word on a piece of paper. Instead of reading it from left to right normally, you read it backwards from right to left. That is all we are doing to reverse a string!",
  simpleExplanation: "Imagine you have blocks spelling out 'hello' on a table. You start at the very last block on the right, pick it up, and place it first in a new row. Then you take the block next to it, and put it next in the new row. Repeat this until you have moved all the blocks, and you get 'olleh'.",
  visualThinking: [
    "hello",
    "Take last letter ➔ o",
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
    language: "python",
    snippet: `def reverse_string(s: str) -> str:
    reversed_str = ""
    # Loop backwards from the last letter (index n-1) to the first letter (index 0)
    for i in range(len(s) - 1, -1, -1):
        reversed_str += s[i]
    return reversed_str`
  },
  complexity: {
    label: "Length of String",
    operations: "Operations",
    visualText: "5 letters ➔ 5 operations ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(n) — To store the reversed string buffer"
  },
  explainLike10: {
    professional: "Linear string traversal utilizing backwards indexing to append characters to a new string builder.",
    simple: "We go through the letters of the word one by one, starting from the back, and add them to a new word.",
    verySimple: "Imagine checking each toy in a box one by one from top to bottom, putting them in a new box."
  },
  commonMistakes: [
    {
      wrongCode: `for i in range(len(s), -1, -1):
    reversed_str += s[i]`,
      whyItFails: "Using len(s) as the start index is wrong because string indexes start at 0. If length is 5, index ranges are 0 to 4. Index 5 does not exist!",
      correctCode: `for i in range(len(s) - 1, -1, -1):
    reversed_str += s[i]`,
      remedy: "Subtract 1 from the string length to start exactly at the last valid index."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "reversed_str = \"\"",
      description: "Initialize an empty string to store our reversed word.",
      variables: { s: "hello", reversed_str: '""', i: "None" },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "for i in range(4, -1, -1):",
      description: "Loop starts at index 4 (last letter 'o').",
      variables: { s: "hello", reversed_str: '""', i: 4 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "reversed_str += s[i]",
      description: "Add letter at index 4 ('o') to reversed_str.",
      variables: { s: "hello", reversed_str: '"o"', i: 4 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "for i in range(4, -1, -1):",
      description: "Loop steps back to index 3 ('l').",
      variables: { s: "hello", reversed_str: '"o"', i: 3 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "reversed_str += s[i]",
      description: "Add letter at index 3 ('l') to reversed_str.",
      variables: { s: "hello", reversed_str: '"ol"', i: 3 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "for i in range(4, -1, -1):",
      description: "Loop steps back to index 2 ('l').",
      variables: { s: "hello", reversed_str: '"ol"', i: 2 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "reversed_str += s[i]",
      description: "Add letter at index 2 ('l') to reversed_str.",
      variables: { s: "hello", reversed_str: '"oll"', i: 2 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "for i in range(4, -1, -1):",
      description: "Loop steps back to index 1 ('e').",
      variables: { s: "hello", reversed_str: '"oll"', i: 1 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "reversed_str += s[i]",
      description: "Add letter at index 1 ('e') to reversed_str.",
      variables: { s: "hello", reversed_str: '"olle"', i: 1 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "for i in range(4, -1, -1):",
      description: "Loop steps back to index 0 ('h').",
      variables: { s: "hello", reversed_str: '"olle"', i: 0 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "reversed_str += s[i]",
      description: "Add letter at index 0 ('h') to reversed_str.",
      variables: { s: "hello", reversed_str: '"olleh"', i: 0 },
      callStack: ["reverse_string()"]
    },
    {
      codeLine: "return reversed_str",
      description: "Return the final reversed word 'olleh'.",
      variables: { s: "hello", reversed_str: '"olleh"', i: 0 },
      callStack: ["reverse_string()"]
    }
  ],
  realWorldApps: [
    "Palindrome Verification: Reversing words to check if they match their original form.",
    "Data Obfuscation: Reversing sequence streams to add a basic layer of data parsing encryption.",
    "Text Editing: Implementing 'undo' character buffers that read input operations backwards."
  ],
  interviewTips: [
    "String Immutability: Remember that strings in Python are immutable. Appending in a loop creates a new string copy each time. Discuss how string lists can optimize this.",
    "Slice Notation: Mention 's[::-1]' to show pythonic syntax competency, but demonstrate loops for structural understanding.",
    "Time-Space tradeoffs: Two-pointers can swap elements in-place on list structures in O(1) space."
  ],
  practiceVariations: [
    "Reverse a list of characters in-place without using extra array memory.",
    "Reverse only the vowels inside a given string while leaving consonants in place.",
    "Reverse the order of words in a sentence instead of reversing individual letters."
  ]
};
