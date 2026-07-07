import { LearningQuestion } from "@/types/learning";

export const removeSpacesQuestion: LearningQuestion = {
  id: "remove-spaces",
  title: "Remove All Spaces from a String",
  difficulty: "Easy",
  topic: "c",
  problem: {
    description: "Write a C function that modifies a string in-place to strip out all space characters, keeping other characters in their original sequence order.",
    input: `"a b c"`,
    output: `"abc"`
  },
  story: "Imagine a conveyor belt carrying boxes. Some slots are empty spaces, while others hold letters. To compress the conveyor belt, a worker stands at the end. Every time they see a valid letter box, they pull it forward, skipping over the empty slots. In C, we do this using a fast pointer and a slow pointer to squeeze the spaces out in-place!",
  simpleExplanation: "We use two pointers (indices): a reader index ('i') and a writer index ('count'). We walk through the string with 'i'. Every time 'i' sees a character that is NOT a space, we write it to index 'count' and increment 'count'. Spaces are simply skipped. At the very end, we null-terminate at index 'count'.",
  visualThinking: [
    `a b c`,
    "Index 0: 'a' (not space) ➔ write to dest[0] ➔ count = 1",
    "Index 1: ' ' (is space) ➔ skip",
    "Index 2: 'b' (not space) ➔ write to dest[1] ➔ count = 2",
    "Index 3: ' ' (is space) ➔ skip",
    "Index 4: 'c' (not space) ➔ write to dest[2] ➔ count = 3",
    "Null terminate dest[3] ➔ result is 'abc'"
  ],
  visualExecution: {
    headers: ["Reader Index i", "Character str[i]", "Action", "Writer Index count", "Modified String"],
    inputs: ["0", "'a'", "Write", "0", `"a b c"`],
    outputs: ["4", "'c'", "Write", "2", `"abc (null-terminated)"`]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>

void removeSpaces(char *str) {
    if (str == NULL) return;
    int count = 0; // Writer index tracker
    
    // Loop through the string
    for (int i = 0; str[i] != '\\0'; i++) {
        // If character is not a space, copy it forward
        if (str[i] != ' ') {
            str[count] = str[i];
            count++;
        }
    }
    // Null-terminate the compressed string
    str[count] = '\\0';
}`
  },
  complexity: {
    label: "String Length (n)",
    operations: "Pointers writes",
    visualText: "5 characters ➔ 3 writes ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(1) — Constant Space (In-place compaction)"
  },
  explainLike10: {
    professional: "In-place string array filtering using two-pointer pointer writes compaction.",
    simple: "We go through each letter. If it's a real letter (not a space), we slide it forward in our word row. If it's a space, we ignore it. At the end, we draw the stop-marker at the new ending spot.",
    verySimple: "Squeezing a line of blocks: slide all letter blocks together to fill up the gaps left by the empty spaces!"
  },
  commonMistakes: [
    {
      wrongCode: `void removeSp(char *str) {
    int count = 0;
    for (int i = 0; str[i] != '\\0'; i++) {
        if (str[i] != ' ') str[count++] = str[i];
    }
} // Missing null-terminator!`,
      whyItFails: "If you forget to write 'str[count] = \\0' after the loop, printing the string will read the old characters that were left at the end of the array, displaying junk or duplicate letters (like 'abcc')!",
      correctCode: `str[count] = '\\0';`,
      remedy: "Explicitly null-terminate the string at index count after the compression loop finishes."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int count = 0;",
      description: "Initialize writer pointer count to 0.",
      variables: { str: '"a b c"', count: 0, i: "None" },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "for (int i = 0; str[i] != '\\0'; i++)",
      description: "Start loop at i = 0 (char 'a').",
      variables: { str: '"a b c"', count: 0, i: 0 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "if (str[i] != ' ')",
      description: "Is 'a' != ' '? Yes! Copy it forward.",
      variables: { str: '"a b c"', count: 0, i: 0 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "str[count] = str[i]; count++;",
      description: "Write 'a' to str[0]. count becomes 1.",
      variables: { str: '"a b c"', count: 1, i: 0 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "for (int i = 0; str[i] != '\\0'; i++)",
      description: "Increment i to 1 (char ' ').",
      variables: { str: '"a b c"', count: 1, i: 1 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "if (str[i] != ' ')",
      description: "Is ' ' != ' '? No. Skip assignment.",
      variables: { str: '"a b c"', count: 1, i: 1 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "for (int i = 0; str[i] != '\\0'; i++)",
      description: "Increment i to 2 (char 'b').",
      variables: { str: '"a b c"', count: 1, i: 2 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "str[count] = str[i]; count++;",
      description: "Write 'b' to str[1]. count becomes 2. String state is 'ab b c'.",
      variables: { str: '"ab b c"', count: 2, i: 2 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "for (int i = 0; ...)",
      description: "Skipping intermediate loops... i incremented to 5 (null terminator). Loop exits.",
      variables: { str: '"abc b c"', count: 3, i: 5 },
      callStack: ["removeSpaces()"]
    },
    {
      codeLine: "str[count] = '\\0';",
      description: "Null-terminate at str[3]. String is now 'abc'.",
      variables: { str: '"abc\\0"', count: 3, i: 5 },
      callStack: ["removeSpaces()"]
    }
  ],
  realWorldApps: [
    "Compilers Lexers: Stripping whitespaces to parse tokens.",
    "Form Sanitizers: Cleaning up credit card numbers or serial inputs.",
    "URL Encoding: Truncating spacing offsets from query requests."
  ],
  interviewTips: [
    "In-place optimization: Be ready to explain why the two-pointer compaction algorithm runs in O(1) extra space, which is much better than creating copies.",
    "Tab and newlines: Clarify if other spacing symbols (like tabs '\\t' or newlines '\\n') should be removed as well. Show familiarity with 'isspace()' from ctype.h.",
    "Writable arrays: Mention that literal strings cannot be modified in-place, so writable char arrays should be used."
  ],
  practiceVariations: [
    "Remove all whitespaces (including tabs, newlines, and carriage returns) using isspace().",
    "Replace multiple consecutive spaces with a single space character in-place.",
    "Strip leading and trailing spaces from a string in-place."
  ]
};
