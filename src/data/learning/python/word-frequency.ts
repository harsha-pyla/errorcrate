import { LearningQuestion } from "@/types/learning";

export const wordFrequencyQuestion: LearningQuestion = {
  id: "word-frequency",
  title: "Count Word Frequency in a String",
  difficulty: "Medium",
  topic: "python",
  problem: {
    description: "Given a string of text, split it into words and count the occurrences of each word. Return a dictionary containing the words and their frequency.",
    input: `"apple banana apple"`,
    output: `{"apple": 2, "banana": 1}`
  },
  story: "Imagine you are counting words in a newspaper article. You open a notebook. Every time you see a word, you look it up in your notebook. If it is already written down, you add a tally mark (+1). If it is a new word, you write it down and put 1 tally mark next to it. By the end, you have the exact frequency count of every word!",
  simpleExplanation: "We split the string into a list of words using spaces. We then loop through each word. We use a dictionary (notebook) to keep track of the counts. For each word, if it is already in our dictionary, we add 1 to its count. If it isn't, we add it with a count of 1.",
  visualThinking: [
    `apple banana apple`,
    "Split into words ➔ ['apple', 'banana', 'apple']",
    "Check 'apple' ➔ New word ➔ Write 'apple': 1",
    "Check 'banana' ➔ New word ➔ Write 'banana': 1",
    "Check 'apple' ➔ Already exists ➔ Increment 'apple' ➔ 1 + 1 = 2",
    "Result ➔ {'apple': 2, 'banana': 1}"
  ],
  visualExecution: {
    headers: ["Word Read", "apple", "banana", "apple"],
    inputs: ["Is in Notebook?", "No (Start at 1)", "No (Start at 1)", "Yes (Increment)"],
    outputs: ["Notebook State", `{"apple": 1}`, `{"apple": 1, "banana": 1}`, `{"apple": 2, "banana": 1}`]
  },
  code: {
    language: "python",
    snippet: `def count_words(text: str) -> dict:
    words = text.split()
    frequency = {}
    for word in words:
        if word in frequency:
            frequency[word] += 1
        else:
            frequency[word] = 1
    return frequency`
  },
  complexity: {
    label: "Word count (n)",
    operations: "Dictionary lookups",
    visualText: "3 words ➔ 3 quick dictionary insertions ➔ Time O(n)",
    timeComplexity: "O(n) — Linear Time",
    spaceComplexity: "O(k) — Where k is the number of UNIQUE words stored"
  },
  explainLike10: {
    professional: "String split tokenizer generating dynamic arrays mapped to a hash map dictionary accumulator.",
    simple: "We cut the sentence into individual words, then use a dictionary to count how many times we see each word.",
    verySimple: "Sorting marbles by color. Pick up each marble and place it in the bucket of its color, then count how many marbles are in each bucket."
  },
  commonMistakes: [
    {
      wrongCode: `def count_w(text):
    # Forgetting to handle capitalization:
    words = text.split()
    # 'Apple' and 'apple' will be counted as two different words!`,
      whyItFails: "If the input string contains capitalized words (like 'Apple apple'), a simple split will treat them as distinct words because strings are case-sensitive in Python.",
      correctCode: `words = text.lower().split()`,
      remedy: "Convert the entire string to lowercase using .lower() before splitting to ignore case sensitivity bugs."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "words = text.split()",
      description: "Split 'apple banana apple' into a list of words: ['apple', 'banana', 'apple'].",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: "{}", word: "None" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "frequency = {}",
      description: "Initialize an empty dictionary to store word frequencies.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: "{}", word: "None" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "for word in words:",
      description: "Get first word: word = 'apple'.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: "{}", word: "'apple'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "if word in frequency:",
      description: "Is 'apple' in frequency? No.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: "{}", word: "'apple'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "frequency[word] = 1",
      description: "Add 'apple' to frequency dictionary with a starting count of 1.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 1}', word: "'apple'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "for word in words:",
      description: "Get next word: word = 'banana'.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 1}', word: "'banana'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "if word in frequency:",
      description: "Is 'banana' in frequency? No.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 1}', word: "'banana'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "frequency[word] = 1",
      description: "Add 'banana' to frequency dictionary with a starting count of 1.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 1, "banana": 1}', word: "'banana'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "for word in words:",
      description: "Get next word: word = 'apple'.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 1, "banana": 1}', word: "'apple'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "if word in frequency:",
      description: "Is 'apple' in frequency? Yes! Increment its count.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 1, "banana": 1}', word: "'apple'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "frequency[word] += 1",
      description: "Add 1 to the count of 'apple' (1 + 1 = 2).",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 2, "banana": 1}', word: "'apple'" },
      callStack: ["count_words()"]
    },
    {
      codeLine: "return frequency",
      description: "Loop completes. Return the resulting frequency dictionary.",
      variables: { text: '"apple banana apple"', words: "['apple', 'banana', 'apple']", frequency: '{"apple": 2, "banana": 1}', word: "'apple'" },
      callStack: ["count_words()"]
    }
  ],
  realWorldApps: [
    "Search Engines: Building index counts (inverted indexes) to rank document search results.",
    "Spam Filters: Analyzing word frequencies to check for repetitive spam patterns.",
    "Social Media: Tracking trending tags or words dynamically from user posts."
  ],
  interviewTips: [
    "Dictionary Performance: Explain that dictionary insertion and lookup run in O(1) average time.",
    "String Sanitization: Mention stripping out punctuation marks using regular expressions or 'str.translate()' in production.",
    "Memory limitations: Discuss what happens if the input text size exceeds RAM limit (e.g. streaming chunks)."
  ],
  practiceVariations: [
    "Find the top K most frequent words in a given paragraph.",
    "Count character frequency instead of word frequency.",
    "Filter out common grammar words (like 'the', 'a', 'is') from your count."
  ]
};
