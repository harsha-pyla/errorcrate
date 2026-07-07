import { LearningQuestion } from "@/types/learning";

export const javaRemoveDuplicatesQuestion: LearningQuestion = {
  id: "remove-duplicates",
  title: "Remove Duplicate Elements from an Array",
  difficulty: "Medium",
  topic: "java",
  problem: {
    description: "Write a Java method to remove duplicates from an array, returning a new array containing only the unique elements in their original order.",
    input: "[1, 2, 2, 3, 1]",
    output: "[1, 2, 3]"
  },
  story: "Imagine you are collecting stickers. If you get a duplicate sticker of a cat, you don't add it to your collector album again; you set it aside. You only keep one copy of each unique sticker. That is what we are doing here—building a unique album of items!",
  simpleExplanation: "We create a new empty list and a lookup set to remember what we have seen. We check each item in the original array one by one. If we have not seen it before, we add it to both our list and our memory set. If we have already seen it, we ignore it!",
  visualThinking: [
    "[1, 2, 2, 3, 1]",
    "Check 1 ➔ Not seen ➔ Add ➔ [1] (seen: {1})",
    "Check 2 ➔ Not seen ➔ Add ➔ [1, 2] (seen: {1, 2})",
    "Check 2 ➔ Already seen ➔ Skip ➔ [1, 2]",
    "Check 3 ➔ Not seen ➔ Add ➔ [1, 2, 3] (seen: {1, 2, 3})",
    "Check 1 ➔ Already seen ➔ Skip ➔ [1, 2, 3]",
    "Result ➔ [1, 2, 3]"
  ],
  visualExecution: {
    headers: ["Element Checked", "1", "2", "2", "3", "1"],
    inputs: ["Is in Memory?", "No (Add)", "No (Add)", "Yes (Skip)", "No (Add)", "Yes (Skip)"],
    outputs: ["Unique List", "[1]", "[1, 2]", "[1, 2]", "[1, 2, 3]", "[1, 2, 3]"]
  },
  code: {
    language: "java",
    snippet: `import java.util.LinkedHashSet;
import java.util.Set;

public static int[] removeDuplicates(int[] arr) {
    if (arr == null) return null;
    // Use LinkedHashSet to preserve insertion order while removing duplicates
    Set<Integer> set = new LinkedHashSet<>();
    for (int num : arr) {
        set.add(num);
    }
    // Convert Set back to primitive array
    int[] result = new int[set.size()];
    int index = 0;
    for (int num : set) {
        result[index++] = num;
    }
    return result;
}`
  },
  complexity: {
    label: "Array size (n)",
    operations: "Set insertions",
    visualText: "5 items ➔ 5 set insertions ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(n) — To store the unique elements in the Set and the returned array"
  },
  explainLike10: {
    professional: "Linear list filter utilizing a hash set for constant time O(1) membership lookups to ensure uniqueness.",
    simple: "We check each item. If it's not in our list of 'seen' items, we add it. Otherwise, we ignore it.",
    verySimple: "Imagine putting toys in a basket. Before throwing a toy in, you ask: 'Do I already have this toy inside?' If yes, throw it away!"
  },
  commonMistakes: [
    {
      wrongCode: `import java.util.HashSet;
// ...
Set<Integer> set = new HashSet<>(); // Scrambles order!`,
      whyItFails: "Using a standard HashSet removes duplicates but scrambles the original order of the numbers! If order matters, standard HashSet fails. Using LinkedHashSet preserves the original insertion order.",
      correctCode: `Set<Integer> set = new LinkedHashSet<>();`,
      remedy: "Use LinkedHashSet in Java to maintain the original sequence order while removing duplicates."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Set<Integer> set = new LinkedHashSet<>();",
      description: "Initialize a LinkedHashSet to filter out duplicates while maintaining order.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[]", index: 0 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Loop starts. Pick first element num = 1.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[]", num: 1 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "set.add(num);",
      description: "Add 1 to the set. Set is now [1].",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1]", num: 1 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 2.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1]", num: 2 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "set.add(num);",
      description: "Add 2 to the set. Set is now [1, 2].",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2]", num: 2 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 2.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2]", num: 2 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "set.add(num);",
      description: "Try to add 2 to the set. Set already has 2, so it is ignored. Set remains [1, 2].",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2]", num: 2 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 3.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2]", num: 3 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "set.add(num);",
      description: "Add 3 to the set. Set is now [1, 2, 3].",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2, 3]", num: 3 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "for (int num : arr)",
      description: "Pick next element num = 1.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2, 3]", num: 1 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "set.add(num);",
      description: "Try to add 1 to the set. Set already has 1, so it is ignored.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2, 3]", num: 1 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "int[] result = new int[set.size()];",
      description: "Create target results array of size 3.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2, 3]", result: "[0, 0, 0]", index: 0 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "result[index++] = num;",
      description: "Populate results index 0 with 1, index 1 with 2, index 2 with 3.",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2, 3]", result: "[1, 2, 3]", index: 3 },
      callStack: ["removeDuplicates()"]
    },
    {
      codeLine: "return result;",
      description: "Return the filtered unique array [1, 2, 3].",
      variables: { arr: "[1, 2, 2, 3, 1]", set: "[1, 2, 3]", result: "[1, 2, 3]", index: 3 },
      callStack: ["removeDuplicates()"]
    }
  ],
  realWorldApps: [
    "User Signups: Deduplicating list registers to filter out repeat registration errors.",
    "Data Integration: Merging datasets from different source databases while removing duplicate columns.",
    "Log Analytics: Extracting list of unique IP addresses accessing a portal."
  ],
  interviewTips: [
    "Explain Set lookup times: Always emphasize that Set lookup is O(1), which makes it much faster than checking membership on lists directly (O(n)).",
    "Preserve Order: Explain how using list(set(lst)) removes duplicates but scrambles the order of items, whereas using a seen set preserves order.",
    "Space-Time Tradeoff: Note that we trade O(n) memory space to achieve an optimal O(n) time performance."
  ],
  practiceVariations: [
    "Remove duplicates from an array in-place (without creating a new list) returning its unique size.",
    "Filter out duplicates while maintaining a count of how many times each item was removed.",
    "Remove duplicates from a list of complex objects using a specific key parameter."
  ]
};
