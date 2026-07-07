import { LearningQuestion } from "@/types/learning";

export const stringLengthQuestion: LearningQuestion = {
  id: "string-length",
  title: "Find Length of a String Without strlen()",
  difficulty: "Easy",
  topic: "c",
  problem: {
    description: "Write a C function that calculates and returns the length of a string without using the standard library strlen() function.",
    input: `"hello"`,
    output: "5"
  },
  story: "Imagine walking down a fence until you reach the dead end. Every post you pass, you count 1, 2, 3... When you hit the dead-end sign (which is the null-terminator '\\0' in C), you stop! The final count is the length of the fence.",
  simpleExplanation: "In C, strings are arrays of characters ending with a special null character '\\0'. We start a counter at 0 and look at the first character. If it is not '\\0', we increment our counter and move to the next character. We repeat this until we find '\\0', and return the count.",
  visualThinking: [
    "hello (stored as 'h','e','l','l','o','\\0')",
    "Index 0 ➔ 'h' != '\\0' ➔ count = 1",
    "Index 1 ➔ 'e' != '\\0' ➔ count = 2",
    "Index 2 ➔ 'l' != '\\0' ➔ count = 3",
    "Index 3 ➔ 'l' != '\\0' ➔ count = 4",
    "Index 4 ➔ 'o' != '\\0' ➔ count = 5",
    "Index 5 ➔ '\\0' == '\\0' ➔ Stop! Return 5"
  ],
  visualExecution: {
    headers: ["Index i", "Character str[i]", "Is Null Terminator?", "Count"],
    inputs: ["0", "'h'", "No", "1"],
    outputs: ["5", "'\\0'", "Yes (Stop)", "5"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>

int getStringLength(char *str) {
    if (str == NULL) return 0;
    int count = 0;
    // Loop until we reach the null character '\\0'
    while (str[count] != '\\0') {
        count++;
    }
    return count;
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Character checks",
    visualText: "5 characters ➔ 5 checks ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Uses a single count integer)"
  },
  explainLike10: {
    professional: "Linear character array traversal detecting null sentinel byte terminator.",
    simple: "We check characters one by one. Each time we see a normal letter, we add 1 to our count. We stop counting when we hit the secret stop-marker at the end of the word.",
    verySimple: "Counting steps: walk forward checking each block until you step on a red block that says STOP!"
  },
  commonMistakes: [
    {
      wrongCode: `while (str[count] != NULL) { // testing NULL instead of '\\0'
    count++;
}`,
      whyItFails: "In C, 'NULL' is a pointer constant, whereas '\\0' is a character constant. While some compilers permit it due to matching 0 values, it is bad style and can throw compiler warnings or errors!",
      correctCode: `while (str[count] != '\\0') {
    count++;
}`,
      remedy: "Use the character literal '\\0' to check for string boundaries."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int count = 0;",
      description: "Initialize length counter to 0.",
      variables: { str: '"hello"', count: 0 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "while (str[count] != '\\0')",
      description: "Check if str[0] ('h') is not '\\0'. It isn't. Loop starts.",
      variables: { str: '"hello"', count: 0 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count to 1.",
      variables: { str: '"hello"', count: 1 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "while (str[count] != '\\0')",
      description: "Check if str[1] ('e') is not '\\0'. Loop continues.",
      variables: { str: '"hello"', count: 1 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count to 2.",
      variables: { str: '"hello"', count: 2 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "while (str[count] != '\\0')",
      description: "Check if str[2] ('l') is not '\\0'.",
      variables: { str: '"hello"', count: 2 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count to 3.",
      variables: { str: '"hello"', count: 3 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "while (str[count] != '\\0')",
      description: "Check if str[3] ('l') is not '\\0'.",
      variables: { str: '"hello"', count: 3 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count to 4.",
      variables: { str: '"hello"', count: 4 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "while (str[count] != '\\0')",
      description: "Check if str[4] ('o') is not '\\0'.",
      variables: { str: '"hello"', count: 4 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "count++;",
      description: "Increment count to 5.",
      variables: { str: '"hello"', count: 5 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "while (str[count] != '\\0')",
      description: "Check if str[5] ('\\0') is not '\\0'. This is false. Loop exits.",
      variables: { str: '"hello"', count: 5 },
      callStack: ["getStringLength()"]
    },
    {
      codeLine: "return count;",
      description: "Return string length 5.",
      variables: { str: '"hello"', count: 5 },
      callStack: ["getStringLength()"]
    }
  ],
  realWorldApps: [
    "Text Validation: Checking bounds of user inputs before writing to arrays.",
    "File Utilities: Reading character lengths of lines to allocate buffers.",
    "String Processing: Core index calculations inside search algorithms."
  ],
  interviewTips: [
    "String representation: Emphasize that C doesn't have a native 'string' class; strings are char arrays ending in '\\0' (takes 1 extra byte).",
    "Pointer vs Indexing: Mention that '*(str + count) != \\0' is equivalent to 'str[count] != \\0' due to pointer decay.",
    "Const qualifier: Accept string parameter as 'const char *str' to prevent accidental alterations."
  ],
  practiceVariations: [
    "Calculate string length recursively using pointers.",
    "Find string length using pointer subtraction (setting ptr to start, walking to end, and calculating 'end - start').",
    "Count only alphabetic characters, ignoring spaces or numbers."
  ]
};
