import { LearningQuestion } from "@/types/learning";

export const classObjectQuestion: LearningQuestion = {
  id: "class-object",
  title: "Create a Class and Object",
  difficulty: "Easy",
  topic: "cpp",
  problem: {
    description: "Write a C++ program that defines a 'Student' class with parameters (name, age) and a method to print details, then instantiate an object and call the method.",
    input: "name = \"Alice\", age = 20",
    output: `"Student Name: Alice, Age: 20"`
  },
  story: "Imagine a blueprint for building a house. The blueprint itself isn't a house—it's just the description (Class). Once you build a physical house using that blueprint, you have an actual house you can live in (Object)! In C++, a Class is the blueprint, and an Object is the physical item you build from it.",
  simpleExplanation: "A class acts as a template defining attributes (variables) and behaviors (functions). An object is an instance of that class. We define the class 'Student' with member variables 'name' and 'age' and a function 'display()'. In the main function, we create a Student object named 's1', assign values to it, and call its display function.",
  visualThinking: [
    "Class 'Student' ➔ Template with [name, age, display()]",
    "Instantiate s1 ➔ Memory allocates slot for s1",
    "Set s1.name = \"Alice\" ➔ Write to s1's name slot",
    "Set s1.age = 20 ➔ Write to s1's age slot",
    "Call s1.display() ➔ reads attributes from s1 and prints them!"
  ],
  visualExecution: {
    headers: ["Class Blueprint", "Object Instance", "s1.name value", "s1.age value", "Output Method"],
    inputs: ["Student template", "s1", `"Alice"`, "20", "s1.display()"],
    outputs: ["Student template", "s1", `"Alice"`, "20", `"Student Name: Alice, Age: 20"`]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int age;

    void display() {
        cout << "Student Name: " << name << ", Age: " << age << endl;
    }
};

int main() {
    Student s1; // Instantiate an object s1 of Class Student
    s1.name = "Alice";
    s1.age = 20;
    s1.display(); // Call member function
    return 0;
}`
  },
  complexity: {
    label: "Objects instantiated",
    operations: "Method calls",
    visualText: "1 object ➔ 1 allocation ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space (Stores only member attributes)"
  },
  explainLike10: {
    professional: "Object instantiation on the call stack invoking default implicit compiler-generated constructor.",
    simple: "A class is like a form you fill out, and an object is the filled-out form. We design a Student form, fill out one for Alice, and print it.",
    verySimple: "Class is a gingerbread cookie cutter. Object is the actual gingerbread cookie you bake and decorate!"
  },
  commonMistakes: [
    {
      wrongCode: `class Student {
    string name;
    int age;
}; // public keyword missing!`,
      whyItFails: "In C++, members of a class are 'private' by default! If you omit the 'public:' keyword, trying to access s1.name or s1.age inside the main function throws a compilation error stating that members are private and inaccessible.",
      correctCode: `class Student {
public:
    string name;
    int age;
};`,
      remedy: "Explicitly add the 'public:' access modifier before members you want to access from outside the class."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Student s1;",
      description: "Instantiate Student object s1 on the stack. Memory allocated for name and age.",
      variables: { "s1.name": '""', "s1.age": 0 },
      callStack: ["main()"]
    },
    {
      codeLine: "s1.name = \"Alice\";",
      description: "Assign string 'Alice' to s1's name variable.",
      variables: { "s1.name": '"Alice"', "s1.age": 0 },
      callStack: ["main()"]
    },
    {
      codeLine: "s1.age = 20;",
      description: "Assign integer 20 to s1's age variable.",
      variables: { "s1.name": '"Alice"', "s1.age": 20 },
      callStack: ["main()"]
    },
    {
      codeLine: "s1.display();",
      description: "Call member function display() which prints Alice's name and age.",
      variables: { "s1.name": '"Alice"', "s1.age": 20 },
      callStack: ["main()", "s1.display()"]
    }
  ],
  realWorldApps: [
    "User Profile Systems: Defining a User class template to instantiate individual profiles.",
    "Game Entities: Creating an Enemy class to generate multiple monsters on a screen.",
    "File Handles: Creating File streams objects to read/write disk files."
  ],
  interviewTips: [
    "Default access modifiers: Remember that classes in C++ default to private members, whereas structures (struct) default to public members.",
    "Object vs Class: Define Class as a logical template (no memory allocation), and Object as a physical instance (allocates stack/heap memory).",
    "Accessor keywords: Understand the difference between public, private, and protected accessibility limits."
  ],
  practiceVariations: [
    "Add a constructor method to initialize name and age during instantiation.",
    "Make variables private and write public getter and setter methods to practice encapsulation.",
    "Create an array of 3 Student objects and loop through them to display details."
  ]
};
