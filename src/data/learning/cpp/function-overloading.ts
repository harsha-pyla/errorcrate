import { LearningQuestion } from "@/types/learning";

export const functionOverloadingQuestion: LearningQuestion = {
  id: "function-overloading",
  title: "Demonstrate Function Overloading",
  difficulty: "Easy",
  topic: "cpp",
  problem: {
    description: "Write a C++ program that defines overloaded 'add' functions: one adding two integers, and one adding two double values.",
    input: "add(5, 10), add(5.5, 4.5)",
    output: `"Integer Sum: 15\\nDouble Sum: 10.0"`
  },
  story: "Imagine buying a blender. You can throw in soft fruits like bananas, or hard items like ice cubes. The blender has one 'Blend' button, but it handles different items differently. In C++, Function Overloading lets you use the same function name ('add') to handle different data types (ints, doubles) seamlessly!",
  simpleExplanation: "Function overloading is a feature in C++ that allows multiple functions to share the same name, provided they have different parameter types or parameter counts. The compiler selects the correct function at compile time by matching the arguments passed to the function signatures.",
  visualThinking: [
    "Compiler sees 'add(5, 10)' ➔ matches signature 'add(int, int)' ➔ returns 15",
    "Compiler sees 'add(5.5, 4.5)' ➔ matches signature 'add(double, double)' ➔ returns 10.0"
  ],
  visualExecution: {
    headers: ["Function Call", "Matched Signature", "Parameter Types", "Result"],
    inputs: ["add(5, 10);", "add(int, int)", "int, int", "15"],
    outputs: ["add(5.5, 4.5);", "add(double, double)", "double, double", "10.0"]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

// Function to add two integers
int add(int a, int b) {
    return a + b;
}

// Overloaded function to add two doubles
double add(double a, double b) {
    return a + b;
}

int main() {
    int intSum = add(5, 10);          // Calls add(int, int)
    double doubleSum = add(5.5, 4.5); // Calls add(double, double)
    
    cout << "Integer Sum: " << intSum << endl;
    cout << "Double Sum: " << doubleSum << endl;
    return 0;
}`
  },
  complexity: {
    label: "Function calls",
    operations: "Resolution operations",
    visualText: "Resolved at compile-time ➔ Zero runtime overhead ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Static polymorphism utilizing name mangling to resolve function addresses at compile time.",
    simple: "We write two functions named 'add'. The computer is smart: if we pass normal numbers (5, 10), it runs the integer function. If we pass decimals (5.5, 4.5), it runs the decimal function.",
    verySimple: "One name, different tasks. Like saying 'open' for a door vs 'open' for a jar!"
  },
  commonMistakes: [
    {
      wrongCode: `int add(int a, int b) { return a + b; }
double add(int a, int b) { return (double)(a + b); }
// compilation error!`,
      whyItFails: "You cannot overload functions by changing ONLY their return type! The compiler determines which function to call based on the parameter list. Since the parameters are both (int, int), the compiler doesn't know which one to call and throws an 'ambiguity error'.",
      correctCode: `int add(int a, int b) { ... }
double add(double a, double b) { ... }`,
      remedy: "Ensure overloaded functions have distinct parameter types or a different count of arguments."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int intSum = add(5, 10);",
      description: "Call add(5, 10). Compiler matches parameters to add(int, int), which returns 15.",
      variables: { intSum: 15, doubleSum: 0 },
      callStack: ["main()", "add(int, int)"]
    },
    {
      codeLine: "double doubleSum = add(5.5, 4.5);",
      description: "Call add(5.5, 4.5). Compiler matches parameters to add(double, double), which returns 10.0.",
      variables: { intSum: 15, doubleSum: 10.0 },
      callStack: ["main()", "add(double, double)"]
    }
  ],
  realWorldApps: [
    "Math libraries: Providing absolute value functions (abs) that accept float, double, or integer types.",
    "System loggers: Creating log functions that print a plain string, an error code, or a structured object.",
    "UI Renderers: Drawing shapes by passing coordinates as integer pixels or double percentages."
  ],
  interviewTips: [
    "Static vs Dynamic Polymorphism: Explain that function overloading is compile-time (static) polymorphism, whereas virtual functions represent runtime (dynamic) polymorphism.",
    "Name Mangling: Explain how the C++ compiler alters function names internally (e.g. mapping add(int, int) to _Z3addii) to support overloading.",
    "Ambiguity Errors: Be ready to discuss how implicit type conversions (like passing a float to a double parameter) can cause compile ambiguities."
  ],
  practiceVariations: [
    "Overload a print function to output an integer, a character array, and a double.",
    "Create a function area() that calculates the area of a circle (1 parameter) or a rectangle (2 parameters).",
    "Overload a function to append an integer or a string to a text buffer."
  ]
};
