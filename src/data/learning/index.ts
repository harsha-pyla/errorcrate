import { LearningQuestion } from "@/types/learning";

// Python Guides
import { reverseStringQuestion } from "./python/reverse-string";
import { checkPrimeQuestion } from "./python/check-prime";
import { fibonacciQuestion } from "./python/fibonacci";
import { palindromeQuestion } from "./python/palindrome";
import { factorialQuestion } from "./python/factorial";
import { findLargestQuestion } from "./python/find-largest";
import { removeDuplicatesQuestion } from "./python/remove-duplicates";
import { countVowelsQuestion } from "./python/count-vowels";
import { sortListQuestion } from "./python/sort-list";
import { wordFrequencyQuestion } from "./python/word-frequency";

// Java Guides
import { javaReverseStringQuestion } from "./java/reverse-string";
import { javaPalindromeQuestion } from "./java/palindrome";
import { javaFibonacciQuestion } from "./java/fibonacci";
import { javaCheckPrimeQuestion } from "./java/check-prime";
import { javaFactorialQuestion } from "./java/factorial";
import { javaFindLargestQuestion } from "./java/find-largest";
import { javaRemoveDuplicatesQuestion } from "./java/remove-duplicates";
import { javaCountVowelsQuestion } from "./java/count-vowels";
import { javaReverseArrayQuestion } from "./java/reverse-array";
import { javaSecondLargestQuestion } from "./java/second-largest";
import { binarySearchQuestion } from "./java/binary-search";

// C Guides
import { swapPointersQuestion } from "./c/swap-pointers";
import { reversePointersQuestion } from "./c/reverse-pointers";
import { danglingPointerQuestion } from "./c/dangling-pointer";
import { tictactoeProjectQuestion } from "./c/tictactoe-project";
import { stackArrayQuestion } from "./c/stack-array";
import { stringLengthQuestion } from "./c/string-length";
import { stringCopyQuestion } from "./c/string-copy";
import { asciiValuesQuestion } from "./c/ascii-values";
import { removeSpacesQuestion } from "./c/remove-spaces";
import { queueArrayQuestion } from "./c/queue-array";

// C++ Guides
import { classObjectQuestion } from "./cpp/class-object";
import { constructorDestructorQuestion } from "./cpp/constructor-destructor";
import { constructorOverloadingQuestion } from "./cpp/constructor-overloading";
import { functionOverloadingQuestion } from "./cpp/function-overloading";
import { operatorOverloadingQuestion } from "./cpp/operator-overloading";
import { singleInheritanceQuestion } from "./cpp/single-inheritance";
import { multipleInheritanceQuestion } from "./cpp/multiple-inheritance";
import { multilevelInheritanceQuestion } from "./cpp/multilevel-inheritance";
import { hierarchicalInheritanceQuestion } from "./cpp/hierarchical-inheritance";
import { hybridInheritanceQuestion } from "./cpp/hybrid-inheritance";

export const learningQuestions: LearningQuestion[] = [
  // Python Guides
  reverseStringQuestion,
  checkPrimeQuestion,
  fibonacciQuestion,
  palindromeQuestion,
  factorialQuestion,
  findLargestQuestion,
  removeDuplicatesQuestion,
  countVowelsQuestion,
  sortListQuestion,
  wordFrequencyQuestion,

  // Java Guides
  javaReverseStringQuestion,
  javaPalindromeQuestion,
  javaFibonacciQuestion,
  javaCheckPrimeQuestion,
  javaFactorialQuestion,
  javaFindLargestQuestion,
  javaRemoveDuplicatesQuestion,
  javaCountVowelsQuestion,
  javaReverseArrayQuestion,
  javaSecondLargestQuestion,
  binarySearchQuestion,

  // C Guides
  swapPointersQuestion,
  reversePointersQuestion,
  danglingPointerQuestion,
  tictactoeProjectQuestion,
  stackArrayQuestion,
  stringLengthQuestion,
  stringCopyQuestion,
  asciiValuesQuestion,
  removeSpacesQuestion,
  queueArrayQuestion,

  // C++ Guides
  classObjectQuestion,
  constructorDestructorQuestion,
  constructorOverloadingQuestion,
  functionOverloadingQuestion,
  operatorOverloadingQuestion,
  singleInheritanceQuestion,
  multipleInheritanceQuestion,
  multilevelInheritanceQuestion,
  hierarchicalInheritanceQuestion,
  hybridInheritanceQuestion
];
