import { LearningQuestion } from "@/types/learning";

export const multipleInheritanceQuestion: LearningQuestion = {
  id: "multiple-inheritance",
  title: "Multiple Inheritance Example",
  difficulty: "Medium",
  topic: "cpp",
  problem: {
    description: "Write a C++ program demonstrating Multiple Inheritance where a child class 'SmartDevice' inherits from two parent classes 'Computer' and 'Monitor'.",
    input: "SmartDevice object calling methods from both parent classes",
    output: `"Booting computer...\\nDisplaying image..."`
  },
  story: "Imagine a smartphone. It is a telephone, but it is also a camera. It inherits calling abilities from a phone blueprint, and photographing abilities from a camera blueprint. In C++, Multiple Inheritance allows a child class to inherit members and functions from more than one parent class simultaneously!",
  simpleExplanation: "Multiple Inheritance is a feature of C++ where a class can inherit from more than one base class. This is different from Java, which does not support multiple inheritance of classes. We define two base classes, 'Computer' and 'Monitor', and a derived class 'SmartDevice' that inherits from both using a comma-separated list.",
  visualThinking: [
    "Base Class 1: Computer ➔ contains boot()",
    "Base Class 2: Monitor ➔ contains display()",
    "Derived Class: SmartDevice ➔ inherits from Computer and Monitor",
    "Instantiate SmartDevice dev; ➔ dev contains boot() and display()",
    "Call dev.boot() ➔ runs Computer::boot()",
    "Call dev.display() ➔ runs Monitor::display()"
  ],
  visualExecution: {
    headers: ["Class Type", "Base 1", "Base 2", "Derived Class", "Object Callable Methods"],
    inputs: ["Multiple base setup", "Computer", "Monitor", "SmartDevice", "dev.boot(), dev.display()"],
    outputs: ["Methods called", "Computer::boot()", "Monitor::display()", "dev", `"Booting computer...\\nDisplaying image..."`]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

// Base Class 1
class Computer {
public:
    void boot() {
        cout << "Booting computer..." << endl;
    }
};

// Base Class 2
class Monitor {
public:
    void display() {
        cout << "Displaying image..." << endl;
    }
};

// Derived Class inheriting from BOTH
class SmartDevice : public Computer, public Monitor {
public:
    void activate() {
        cout << "SmartDevice active." << endl;
    }
};

int main() {
    SmartDevice dev;
    dev.boot();    // Inherited from Computer
    dev.display(); // Inherited from Monitor
    dev.activate();
    return 0;
}`
  },
  complexity: {
    label: "Base classes",
    operations: "Method lookups",
    visualText: "Comma-separated parent indices lookup ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Multiple inheritance derivation compiling multiple parent virtual table offsets.",
    simple: "We make two parent classes: 'Computer' and 'Monitor'. Then we make a 'SmartDevice' child that inherits from both at the same time. The device can now use the computer's boot skill and the monitor's display screen skill.",
    verySimple: "A flying car: inherits driving skills from a car parent, and flying skills from an airplane parent!"
  },
  commonMistakes: [
    {
      wrongCode: `class SmartDevice : public Computer, Monitor { // public missing for Monitor
    // ...
};`,
      whyItFails: "If you omit the 'public' keyword before additional base classes in C++, they default to private inheritance! Here, Monitor methods would be private in SmartDevice, causing 'dev.display()' to fail compilation.",
      correctCode: `class SmartDevice : public Computer, public Monitor { ... }`,
      remedy: "You must repeat the 'public' access specifier for every single base class in the comma-separated inheritance list."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "SmartDevice dev;",
      description: "Create SmartDevice dev. Memory allocated for both parent structures.",
      variables: { dev_state: '"Initialized"' },
      callStack: ["main()"]
    },
    {
      codeLine: "dev.boot();",
      description: "Call boot(). Matches method in Base Class 1 (Computer). Prints 'Booting computer...'.",
      variables: { dev_state: '"Booted"' },
      callStack: ["main()", "Computer::boot()"]
    },
    {
      codeLine: "dev.display();",
      description: "Call display(). Matches method in Base Class 2 (Monitor). Prints 'Displaying image...'.",
      variables: { dev_state: '"Displaying"' },
      callStack: ["main()", "Monitor::display()"]
    }
  ],
  realWorldApps: [
    "Multimedia Systems: Creating video-player classes that inherit from AudioDecoder and VideoDecoder.",
    "Hardware Controllers: Implementing a smart device module that inherits from GPSModule and WiFiModule.",
    "Database Managers: Creating cache engines inheriting from FileWriter and MemoryCache."
  ],
  interviewTips: [
    "Diamond Problem: Be prepared to discuss the Diamond Problem, where a child inherits from two parents that share a common grandparent base class, and how 'virtual inheritance' solves it.",
    "Java comparison: Explain that Java does not support multiple inheritance of classes to avoid complexity (diamond problem), instead utilizing interfaces.",
    "Constructor order: Base constructors execute in the order they are listed in the inheritance declaration (Computer first, then Monitor), not the order of member initialization list."
  ],
  practiceVariations: [
    "Write a class TeacherStaff inheriting from two base classes: Teacher and Researcher.",
    "Demonstrate the Diamond Problem in code by creating a class Structure where Child inherits from Father and Mother who both inherit from Grandparent.",
    "Solve the diamond problem using virtual inheritance: 'class Father : virtual public Grandparent'."
  ]
};
