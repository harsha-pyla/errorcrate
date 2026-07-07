import { LearningQuestion } from "@/types/learning";

export const stringCopyQuestion: LearningQuestion = {
  id: "string-copy",
  title: "Copy One String to Another Without strcpy()",
  difficulty: "Easy",
  topic: "c",
  problem: {
    description: "Write a C function to copy the contents of a source string into a destination character buffer without using the library strcpy() function.",
    input: `source = "hello"`,
    output: `destination = "hello"`
  },
  story: "Imagine you are copying letters from a sign onto a blank sheet of paper. You look at the first letter, write it down. Look at the second letter, write it down. You repeat this until the sign is empty, then draw a final period symbol at the end so people know the sentence is finished! That period is our null-terminator.",
  simpleExplanation: "To copy a string, we copy characters one by one from the source array to the destination array using a loop. Crucially, after the loop finishes, we must manually append the null-terminator character '\\0' at the end of the destination array so C recognizes it as a valid string.",
  visualThinking: [
    `source = "hello"`,
    "Copy index 0: dest[0] = src[0] ('h')",
    "Copy index 1: dest[1] = src[1] ('e')",
    "Copy index 2: dest[2] = src[2] ('l')",
    "Copy index 3: dest[3] = src[3] ('l')",
    "Copy index 4: dest[4] = src[4] ('o')",
    "Terminate: dest[5] = '\\0' ➔ Done!"
  ],
  visualExecution: {
    headers: ["Index i", "src[i]", "Action", "dest[i]", "dest state"],
    inputs: ["0", "'h'", "Copy", "'h'", `"h"`],
    outputs: ["5", "'\\0'", "Null-terminate", "'\\0'", `"hello"`]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>

void copyString(char *dest, const char *src) {
    if (dest == NULL || src == NULL) return;
    int i = 0;
    // Copy each character until we hit '\\0'
    while (src[i] != '\\0') {
        dest[i] = src[i];
        i++;
    }
    // Don't forget to append the null terminator!
    dest[i] = '\\0';
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Character copies",
    visualText: "5 letters ➔ 5 copies + 1 terminator ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (Performs copy directly in dest buffer)"
  },
  explainLike10: {
    professional: "Character array copy assignment loop terminating with explicit sentinel byte insertion.",
    simple: "We copy letters one by one from the old word to the new word. When we are done, we write a special '\\0' mark at the end so the computer knows the word is complete.",
    verySimple: "Reading letters from a board and typing them onto a blank screen, then typing a period at the end to finish!"
  },
  commonMistakes: [
    {
      wrongCode: `while (src[i] != '\\0') {
    dest[i] = src[i];
    i++;
} // Missing dest[i] = '\\0';`,
      whyItFails: "If you forget to write the null-terminator at the end of the destination array, printing it will read past the array boundary, printing random garbage memory characters until it crashes (Segmentation Fault)!",
      correctCode: `while (src[i] != '\\0') {
    dest[i] = src[i];
    i++;
}
dest[i] = '\\0';`,
      remedy: "Always write 'dest[i] = \\0' immediately after the copy loop finishes."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int i = 0;",
      description: "Initialize loop index counter to 0.",
      variables: { src: '"hello"', dest: '"empty"', i: 0 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "while (src[i] != '\\0')",
      description: "Check if src[0] ('h') is not null-terminator. It isn't. Loop starts.",
      variables: { src: '"hello"', dest: '"empty"', i: 0 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "dest[i] = src[i];",
      description: "Copy 'h' into dest[0].",
      variables: { src: '"hello"', dest: '"h"', i: 0 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "i++;",
      description: "Increment i to 1.",
      variables: { src: '"hello"', dest: '"h"', i: 1 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "while (src[i] != '\\0')",
      description: "Check if src[1] ('e') is not null-terminator. Loop continues.",
      variables: { src: '"hello"', dest: '"h"', i: 1 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "dest[i] = src[i];",
      description: "Copy 'e' into dest[1]. dest is now 'he'.",
      variables: { src: '"hello"', dest: '"he"', i: 1 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "i++;",
      description: "Skipping loops 2 to 4... index i incremented to 5.",
      variables: { src: '"hello"', dest: '"hello"', i: 5 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "while (src[i] != '\\0')",
      description: "Check if src[5] ('\\0') is not null. It is, so loop exits.",
      variables: { src: '"hello"', dest: '"hello"', i: 5 },
      callStack: ["copyString()"]
    },
    {
      codeLine: "dest[i] = '\\0';",
      description: "Write '\\0' to dest[5] to complete the string representation.",
      variables: { src: '"hello"', dest: '"hello\\0"', i: 5 },
      callStack: ["copyString()"]
    }
  ],
  realWorldApps: [
    "Data Buffering: Copying strings between system variables.",
    "File Parsers: Moving string segments into structural token records.",
    "Network protocols: Copying header strings inside packet frames."
  ],
  interviewTips: [
    "Buffer Overflow risk: Explain that this method is vulnerable to buffer overflows if the destination array is smaller than the source string. Mention 'strncpy()' as a secure alternative.",
    "Const qualifier: Always declare the source pointer as 'const char *src' to show you understand read-only contracts.",
    "Pointer shorthand: You can write the loop as 'while (*dest++ = *src++);' to show extreme C pointer shorthand competency."
  ],
  practiceVariations: [
    "Implement the string copy function using pointer notation (*dest++ = *src++) instead of indices.",
    "Implement a safe string copy (like strncpy) that accepts a maximum copy size limit.",
    "Copy a string recursively instead of using loops."
  ]
};
