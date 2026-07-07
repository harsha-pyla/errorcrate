import { LearningQuestion } from "@/types/learning";

export const reversePointersQuestion: LearningQuestion = {
  id: "reverse-pointers",
  title: "Reverse a String Using Pointers",
  difficulty: "Medium",
  topic: "c",
  problem: {
    description: "Write a C function that reverses a null-terminated string in-place using pointer arithmetic.",
    input: `"hello"`,
    output: `"olleh"`
  },
  story: "Imagine two fingers pointing at a word. The left finger points at the first letter, and the right finger points at the last letter. You swap the letters under your fingers, then move the left finger one step right, and the right finger one step left. Repeat until your fingers meet or cross in the middle!",
  simpleExplanation: "We set a 'left' pointer to the start of the string, and a 'right' pointer to the last character before the null-terminator '\\0'. We swap the characters at these pointers, increment 'left', decrement 'right', and repeat until 'left' is no longer less than 'right'. This reverses the string in-place.",
  visualThinking: [
    "hello",
    "left points to 'h', right points to 'o'",
    "Swap 'h' and 'o' ➔ oellh",
    "Move pointers: left points to 'e', right points to 'l'",
    "Swap 'e' and 'l' ➔ olleh",
    "Pointers meet at 'l' ➔ Stop!"
  ],
  visualExecution: {
    headers: ["Left Ptr", "Right Ptr", "Left Char", "Right Char", "String Buffer"],
    inputs: ["0x2000", "0x2004", "'h'", "'o'", "oellh"],
    outputs: ["0x2001", "0x2003", "'e'", "'l'", "olleh"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>
#include <string.h>

void reverseString(char *str) {
    if (str == NULL) return;
    char *left = str;
    char *right = str + strlen(str) - 1;
    char temp;
    
    while (left < right) {
        // Swap values at left and right memory addresses
        temp = *left;
        *left = *right;
        *right = temp;
        
        // Move pointers inwards
        left++;
        right--;
    }
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Character Swaps",
    visualText: "5 characters ➔ 2 swaps ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Swaps in-place, no extra buffers allocated)"
  },
  explainLike10: {
    professional: "In-place string reversal utilizing two-pointer convergent iterations and pointer arithmetic updates.",
    simple: "We put two pointers at the ends of the word. We swap the first and last letters, then move the pointers inwards, swapping letters until they cross in the middle.",
    verySimple: "Two people starting at opposite ends of a row of blocks. They walk towards the middle, swapping their blocks as they go!"
  },
  commonMistakes: [
    {
      wrongCode: `char *right = str + strlen(str); // points to '\\0'`,
      whyItFails: "Setting the right pointer to str + strlen(str) makes it point to the null-terminator '\\0' character. Swapping this puts the null-terminator at the very beginning of the string, making the string appear empty (length 0) when printed!",
      correctCode: `char *right = str + strlen(str) - 1;`,
      remedy: "Make sure the right pointer points to the last actual alphabet character, which is exactly index length - 1."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "char *left = str;",
      description: "Set left pointer to start of string buffer address (points to 'h').",
      variables: { str: '"hello"', left: "0x2000 ('h')", right: "None", temp: "None" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "char *right = str + strlen(str) - 1;",
      description: "Set right pointer to last letter address (0x2000 + 5 - 1 = 0x2004, points to 'o').",
      variables: { str: '"hello"', left: "0x2000 ('h')", right: "0x2004 ('o')", temp: "None" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "while (left < right)",
      description: "0x2000 < 0x2004 is true. Start swap loop.",
      variables: { str: '"hello"', left: "0x2000 ('h')", right: "0x2004 ('o')", temp: "None" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "temp = *left; *left = *right; *right = temp;",
      description: "Swap characters at left and right addresses. 'h' and 'o' swap positions. String becomes 'oellh'.",
      variables: { str: '"oellh"', left: "0x2000 ('o')", right: "0x2004 ('h')", temp: "'h'" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Increment left pointer to 0x2001 (points to 'e'), decrement right pointer to 0x2003 (points to 'l').",
      variables: { str: '"oellh"', left: "0x2001 ('e')", right: "0x2003 ('l')", temp: "'h'" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "while (left < right)",
      description: "0x2001 < 0x2003 is true. Loop continues.",
      variables: { str: '"oellh"', left: "0x2001 ('e')", right: "0x2003 ('l')", temp: "'h'" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "temp = *left; *left = *right; *right = temp;",
      description: "Swap characters at left and right addresses. 'e' and 'l' swap positions. String becomes 'olleh'.",
      variables: { str: '"olleh"', left: "0x2001 ('l')", right: "0x2003 ('e')", temp: "'e'" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "left++; right--;",
      description: "Increment left pointer to 0x2002 (points to middle 'l'), decrement right pointer to 0x2002 (points to middle 'l').",
      variables: { str: '"olleh"', left: "0x2002 ('l')", right: "0x2002 ('l')", temp: "'e'" },
      callStack: ["reverseString()"]
    },
    {
      codeLine: "while (left < right)",
      description: "left (0x2002) is no longer less than right (0x2002). Loop exits.",
      variables: { str: '"olleh"', left: "0x2002 ('l')", right: "0x2002 ('l')", temp: "'e'" },
      callStack: ["reverseString()"]
    }
  ],
  realWorldApps: [
    "String Sanitizers: Reversing order formats or path parameters in text logs.",
    "Hardware Buffers: Flipping data arrays for serial port transmissions.",
    "Lexers: Checking suffixes or matching parentheses tokens."
  ],
  interviewTips: [
    "Pointer Arithmetic: Explain that 'ptr + 1' doesn't increment the address by 1 byte—it increments it by the byte-size of the data type (e.g. 1 byte for char, 4 bytes for int).",
    "Null Terminator Check: Always make sure the swap ignores the '\\0' null-terminator so string boundaries stay intact.",
    "Immutable Constants: If you pass a literal string directly (e.g. reverseString('hello')), it crashes! String literals are stored in read-only data segments. Explain how char arrays allocate stack writable memory instead."
  ],
  practiceVariations: [
    "Reverse only words inside a sentence using pointers.",
    "Implement the string reversal recursively using pointers.",
    "Reverse a float array using void pointers and manual casting."
  ]
};
