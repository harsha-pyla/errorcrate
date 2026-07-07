import { LearningQuestion } from "@/types/learning";

export const removeDuplicatesQuestion: LearningQuestion = {
  id: "remove-duplicates",
  title: "Remove Duplicates from a List",
  difficulty: "Easy",
  topic: "python",
  problem: {
    description: "Given a list containing duplicate values, filter it to return a new list containing only the unique elements in their original order.",
    input: "[1, 2, 2, 3, 1]",
    output: "[1, 2, 3]"
  },
  story: "Imagine you are collecting stickers. If you get a duplicate sticker of a cat, you don't add it to your collector album again; you set it aside. You only keep one copy of each unique sticker. That is what we are doing here—building a unique album of items!",
  simpleExplanation: "We create a new empty list and a lookup set to remember what we have seen. We check each item in the original list one by one. If we have not seen it before, we add it to both our list and our memory set. If we have already seen it, we ignore it!",
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
    language: "python",
    snippet: `def remove_duplicates(lst: list) -> list:
    unique_list = []
    seen = set()
    for item in lst:
        if item not in seen:
            unique_list.append(item)
            seen.add(item)
    return unique_list`
  },
  complexity: {
    label: "List size (n)",
    operations: "Lookup checks",
    visualText: "5 items ➔ 5 fast set lookups ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(n) — To store unique list and seen set variables"
  },
  explainLike10: {
    professional: "Linear list filter utilizing a hash set for constant time O(1) membership lookups to ensure uniqueness.",
    simple: "We check each item. If it's not in our list of 'seen' items, we add it. Otherwise, we ignore it.",
    verySimple: "Imagine putting toys in a basket. Before throwing a toy in, you ask: 'Do I already have this toy inside?' If yes, throw it away!"
  },
  commonMistakes: [
    {
      wrongCode: `def remove_dup(lst):
    # Using 'not in unique_list' check
    unique = []
    for x in lst:
        if x not in unique:
            unique.append(x)
    return unique`,
      whyItFails: "While correct, checking 'not in list' is slow! As the list grows, searching the list takes O(n) operations, making the entire code run in O(n^2) (quadratic time) which freezes on large lists. Using a 'seen' Set keeps lookups instant (O(1))!",
      correctCode: `def remove_duplicates(lst):
    seen = set()
    # set lookup is O(1)
    # ...`,
      remedy: "Use a Set variable for lookups instead of checking membership on a List directly."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "unique_list = []",
      description: "Initialize an empty list to store our unique items.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[]", seen: "set()", item: "None" },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "seen = set()",
      description: "Initialize a hash set to track seen elements instantly.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[]", seen: "set()", item: "None" },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "for item in lst:",
      description: "Pick first element item = 1.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[]", seen: "set()", item: 1 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "if item not in seen:",
      description: "Is 1 in seen? No. Proceed inside code block.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[]", seen: "set()", item: 1 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "unique_list.append(item); seen.add(item)",
      description: "Add 1 to unique_list and seen set.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1]", seen: "{1}", item: 1 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "for item in lst:",
      description: "Pick next element item = 2.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1]", seen: "{1}", item: 2 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "if item not in seen:",
      description: "Is 2 in seen? No. Proceed inside block.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1]", seen: "{1}", item: 2 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "unique_list.append(item); seen.add(item)",
      description: "Add 2 to unique_list and seen set.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2]", seen: "{1, 2}", item: 2 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "for item in lst:",
      description: "Pick next element item = 2.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2]", seen: "{1, 2}", item: 2 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "if item not in seen:",
      description: "Is 2 in seen? Yes! Skip insertion block.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2]", seen: "{1, 2}", item: 2 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "for item in lst:",
      description: "Pick next element item = 3.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2]", seen: "{1, 2}", item: 3 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "if item not in seen:",
      description: "Is 3 in seen? No. Proceed inside block.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2]", seen: "{1, 2}", item: 3 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "unique_list.append(item); seen.add(item)",
      description: "Add 3 to unique_list and seen set.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2, 3]", seen: "{1, 2, 3}", item: 3 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "for item in lst:",
      description: "Pick next element item = 1.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2, 3]", seen: "{1, 2, 3}", item: 1 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "if item not in seen:",
      description: "Is 1 in seen? Yes. Skip insertion block.",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2, 3]", seen: "{1, 2, 3}", item: 1 },
      callStack: ["remove_duplicates()"]
    },
    {
      codeLine: "return unique_list",
      description: "Loop ends. Return the unique list of elements [1, 2, 3].",
      variables: { lst: "[1, 2, 2, 3, 1]", unique_list: "[1, 2, 3]", seen: "{1, 2, 3}", item: 1 },
      callStack: ["remove_duplicates()"]
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
