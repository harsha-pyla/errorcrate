import { LearningQuestion } from "@/types/learning";

export const asciiValuesQuestion: LearningQuestion = {
  id: "ascii-values",
  title: "Print ASCII Values of All Characters",
  difficulty: "Easy",
  topic: "c",
  problem: {
    description: "Write a C program that loops through a given string and prints the character alongside its corresponding integer ASCII decimal value.",
    input: `"Abc"`,
    output: `"A: 65, b: 98, c: 99"`
  },
  story: "Imagine computers don't understand letters. To a computer, the letter 'A' is just the number 65, and a space ' ' is 32. The ASCII table is a giant translation book mapping characters to numbers. Printing the ASCII value lets us see how the computer represents text underneath!",
  simpleExplanation: "In C, characters (char) are actually small integers (1 byte). To print the ASCII value of a character, we print it using the '%d' format specifier (which prints integers) instead of '%c' (which prints characters).",
  visualThinking: [
    `string = "Abc"`,
    "char at 0: 'A' ➔ print as %c (A), print as %d (65)",
    "char at 1: 'b' ➔ print as %c (b), print as %d (98)",
    "char at 2: 'c' ➔ print as %c (c), print as %d (99)",
    "Done!"
  ],
  visualExecution: {
    headers: ["Index i", "Character", "Format %c Output", "Format %d Output (ASCII)"],
    inputs: ["0", "'A'", "A", "65"],
    outputs: ["2", "'c'", "c", "99"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>

void printASCII(const char *str) {
    if (str == NULL) return;
    int i = 0;
    while (str[i] != '\\0') {
        // %c prints character, %d prints the underlying integer ASCII code
        printf("Character: %c has ASCII value: %d\\n", str[i], str[i]);
        i++;
    }
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Character checks",
    visualText: "3 characters ➔ 3 prints ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Character casting conversion to integer representation printed via standard formatting streams.",
    simple: "We loop through the word and print each letter. But next to the letter, we tell the computer to show us the number value it uses to remember that letter.",
    verySimple: "Opening a codebook. Looking up each letter of our word and finding its unique code number!"
  },
  commonMistakes: [
    {
      wrongCode: `printf("ASCII: %c\\n", str[i]); // only using %c`,
      whyItFails: "Using '%c' tells the printf function to show the letter representation only. It will not display the integer decimal code! To show the integer value, you must use '%d'.",
      correctCode: `printf("ASCII: %d\\n", str[i]);`,
      remedy: "Use the '%d' integer format specifier to extract and print the character's ASCII integer value."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int i = 0;",
      description: "Initialize string index pointer to 0.",
      variables: { str: '"Abc"', i: 0 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "while (str[i] != '\\0')",
      description: "Check if character at index 0 ('A') is not '\\0'. Loop starts.",
      variables: { str: '"Abc"', i: 0 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "printf(...);",
      description: "Print character 'A' and its ASCII integer code (65).",
      variables: { str: '"Abc"', i: 0 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "i++;",
      description: "Increment i to 1.",
      variables: { str: '"Abc"', i: 1 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "while (str[i] != '\\0')",
      description: "Check if character at index 1 ('b') is not '\\0'. Loop continues.",
      variables: { str: '"Abc"', i: 1 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "printf(...);",
      description: "Print character 'b' and its ASCII integer code (98).",
      variables: { str: '"Abc"', i: 1 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "i++;",
      description: "Increment i to 2.",
      variables: { str: '"Abc"', i: 2 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "while (str[i] != '\\0')",
      description: "Check if character at index 2 ('c') is not '\\0'.",
      variables: { str: '"Abc"', i: 2 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "printf(...);",
      description: "Print character 'c' and its ASCII integer code (99).",
      variables: { str: '"Abc"', i: 2 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "i++;",
      description: "Increment i to 3.",
      variables: { str: '"Abc"', i: 3 },
      callStack: ["printASCII()"]
    },
    {
      codeLine: "while (str[i] != '\\0')",
      description: "Check if character at index 3 ('\\0') is not '\\0'. It is, so loop exits.",
      variables: { str: '"Abc"', i: 3 },
      callStack: ["printASCII()"]
    }
  ],
  realWorldApps: [
    "Text Encoding: Parsing between UTF-8 and ASCII string formats.",
    "Input Validation: Verifying if user typed numbers only (checking if ASCII value falls in range 48-57).",
    "Data Encryption: Shifting character codes (Caesar Cipher) by adding integer offsets to character values."
  ],
  interviewTips: [
    "Character offset math: Explain that you can convert a lowercase character to uppercase by subtracting 32 (since 'a' is 97 and 'A' is 65).",
    "Signed vs Unsigned char: Explain that standard char is signed (ranges -128 to 127), which can represent negative numbers for special characters.",
    "ASCII Table landmarks: Remember key milestones: 'A' = 65, 'a' = 97, '0' = 48."
  ],
  practiceVariations: [
    "Convert a string from lowercase to uppercase using ASCII arithmetic offsets (-32).",
    "Count how many letters, digits, and space symbols exist in a string using ASCII ranges.",
    "Check if a character is alphanumeric using ASCII intervals."
  ]
};
