import { LearningQuestion } from "@/types/learning";

export const operatorOverloadingQuestion: LearningQuestion = {
  id: "operator-overloading",
  title: "Demonstrate Operator Overloading",
  difficulty: "Medium",
  topic: "cpp",
  problem: {
    description: "Write a C++ class 'Complex' representing complex numbers, and overload the '+' operator to add two complex objects together.",
    input: "c1 = 2 + 3i, c2 = 4 + 5i",
    output: `"Sum: 6 + 8i"`
  },
  story: "Imagine telling a computer to add two numbers: '5 + 10'. It does it instantly. But what if you tell it to add two coordinates: '(2, 3) + (4, 5)'? Normally, the '+' symbol doesn't know how to handle coordinate blocks. Operator Overloading lets you teach the '+' symbol how to add custom coordinates or complex objects!",
  simpleExplanation: "Operator overloading allows you to redefine how standard C++ operators (like +, -, *, <<, etc.) work with user-defined classes. We write a special member function 'operator+' inside our Complex class. This function takes another Complex object as an argument, adds their real and imaginary parts, and returns a new Complex object.",
  visualThinking: [
    "c1 = 2 + 3i, c2 = 4 + 5i",
    "Call: c1 + c2 ➔ triggers operator+(c2)",
    "Real part sum ➔ 2 + 4 = 6",
    "Imaginary part sum ➔ 3 + 5 = 8",
    "Result ➔ 6 + 8i"
  ],
  visualExecution: {
    headers: ["Object 1", "Object 2", "Real Addition", "Imaginary Addition", "Output Object"],
    inputs: ["2 + 3i", "4 + 5i", "2 + 4 = 6", "3 + 5 = 8", "6 + 8i"],
    outputs: ["2 + 3i", "4 + 5i", "2 + 4 = 6", "3 + 5 = 8", "6 + 8i"]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

class Complex {
public:
    int real, imag;

    Complex(int r = 0, int i = 0) {
        real = r;
        imag = i;
    }

    // Overload the + operator
    Complex operator + (const Complex& obj) {
        Complex temp;
        temp.real = real + obj.real;
        temp.imag = imag + obj.imag;
        return temp;
    }

    void display() {
        cout << real << " + " << imag << "i" << endl;
    }
};

int main() {
    Complex c1(2, 3), c2(4, 5);
    Complex c3 = c1 + c2; // Calls operator+
    cout << "Sum: ";
    c3.display();
    return 0;
}`
  },
  complexity: {
    label: "Calculations",
    operations: "Assignments",
    visualText: "Adding fields ➔ 2 additions ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Ad-hoc polymorphism overloading mathematical operators via member function signatures.",
    simple: "We teach the '+' sign how to add complex numbers. When C++ sees 'c1 + c2', it runs our special code that adds real numbers together and imaginary numbers together.",
    verySimple: "Teaching the '+' symbol a new trick, like adding two points together instead of just two single numbers!"
  },
  commonMistakes: [
    {
      wrongCode: `Complex operator + (Complex obj) {
    // missing const and reference (&) parameters
    return Complex(real + obj.real, imag + obj.imag);
}`,
      whyItFails: "Passing objects by value makes a full copy of the object in memory. While it compiles, passing by const reference 'const Complex& obj' is much faster because it avoids copying the object and prevents modifying the original argument.",
      correctCode: `Complex operator + (const Complex& obj) { ... }`,
      remedy: "Always pass overloaded operator parameters by const reference to optimize memory performance."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Complex c1(2, 3), c2(4, 5);",
      description: "Instantiate complex numbers c1 (2+3i) and c2 (4+5i).",
      variables: { "c1.real": 2, "c1.imag": 3, "c2.real": 4, "c2.imag": 5 },
      callStack: ["main()"]
    },
    {
      codeLine: "Complex c3 = c1 + c2;",
      description: "Call operator+ on c1, passing c2 as argument. Inside operator+, temp.real = 2 + 4 = 6, temp.imag = 3 + 5 = 8.",
      variables: { "temp.real": 6, "temp.imag": 8 },
      callStack: ["main()", "operator+()"]
    },
    {
      codeLine: "return temp;",
      description: "Return temp object. c3 is initialized with values real=6, imag=8.",
      variables: { "c3.real": 6, "c3.imag": 8 },
      callStack: ["main()"]
    },
    {
      codeLine: "c3.display();",
      description: "Print result: '6 + 8i'.",
      variables: { "c3.real": 6, "c3.imag": 8 },
      callStack: ["main()", "c3.display()"]
    }
  ],
  realWorldApps: [
    "Vector Mathematics: Adding physics vectors (x, y, z coordinates) together inside game engines.",
    "String Concatenation: Overloading the '+' operator to merge two strings in custom libraries.",
    "Matrix Libraries: Multiplying mathematical matrices using the '*' symbol."
  ],
  interviewTips: [
    "Which operators cannot be overloaded?: Remember that some operators CANNOT be overloaded: '.', '::', '?:', and 'sizeof'.",
    "Unary vs Binary operators: Be ready to explain the difference (unary takes 0 arguments as a member function, binary takes 1 argument).",
    "Friend functions: Discuss overloading operators using friend functions when the left-hand operand is not an object of the class (like 'cout << obj')."
  ],
  practiceVariations: [
    "Overload the '-' operator to subtract two Complex numbers.",
    "Overload the comparison operator '==' to check if two Complex numbers are identical.",
    "Overload the '<<' output stream operator to print a Complex number directly using 'cout << c1;'."
  ]
};
