import { LearningQuestion } from "@/types/learning";

export const multilevelInheritanceQuestion: LearningQuestion = {
  id: "multilevel-inheritance",
  title: "Multilevel Inheritance Example",
  difficulty: "Medium",
  topic: "cpp",
  problem: {
    description: "Write a C++ program demonstrating Multilevel Inheritance where a class 'Puppy' inherits from 'Dog', which in turn inherits from 'Animal'.",
    input: "Puppy object calls grandfather, father, and child methods",
    output: `"Animal is eating...\\nDog is barking...\\nPuppy is weeping..."`
  },
  story: "Imagine a family tree: Grandfather ➔ Father ➔ Child. The Father inherits traits from the Grandfather, and the Child inherits traits from the Father (which already includes the Grandfather's traits!). In C++, Multilevel Inheritance represents this chain of parentage where a class inherits from a derived class.",
  simpleExplanation: "Multilevel Inheritance is a chain of inheritance where a derived class acts as a base class for another derived class. We define 'Animal' (Grandparent), 'Dog' (Parent, inherits from Animal), and 'Puppy' (Child, inherits from Dog). A Puppy object can call methods from all three classes in the chain.",
  visualThinking: [
    "Animal (Grandparent) ➔ eat()",
    "Dog (Parent) ➔ inherits eat(), adds bark()",
    "Puppy (Child) ➔ inherits eat() and bark(), adds weep()",
    "Puppy p; ➔ p.eat(), p.bark(), p.weep() are all valid!"
  ],
  visualExecution: {
    headers: ["Grandparent Class", "Parent Class", "Child Class", "Object", "Resolution Chain"],
    inputs: ["Animal", "Dog (extends Animal)", "Puppy (extends Dog)", "p", "Puppy ➔ Dog ➔ Animal"],
    outputs: ["Animal::eat()", "Dog::bark()", "Puppy::weep()", "p", `"Eating ➔ Barking ➔ Weeping"`]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

// Grandparent Class
class Animal {
public:
    void eat() {
        cout << "Animal is eating..." << endl;
    }
};

// Parent Class (derived from Animal)
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking..." << endl;
    }
};

// Child Class (derived from Dog)
class Puppy : public Dog {
public:
    void weep() {
        cout << "Puppy is weeping..." << endl;
    }
};

int main() {
    Puppy myPuppy;
    myPuppy.eat();  // Inherited from Animal (via Dog)
    myPuppy.bark(); // Inherited from Dog
    myPuppy.weep(); // Puppy's own method
    return 0;
}`
  },
  complexity: {
    label: "Chain depth (d=3)",
    operations: "Pointer displacements",
    visualText: "Recursive base lookup ➔ Compile-time resolution ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Multilevel class derivation hierarchy compiling nested vtable base pointer offsets.",
    simple: "We make a chain of classes: Puppy inherits from Dog, and Dog inherits from Animal. Since Puppy is at the bottom of the chain, it automatically gets all the skills of both its parent (Dog) and grandparent (Animal)!",
    verySimple: "Passing down traits: Grandfather has a watch, Father gets it, and you get the watch plus your father's car!"
  },
  commonMistakes: [
    {
      wrongCode: `class Puppy : public Animal { // skipping Dog
    // ...
};`,
      whyItFails: "If Puppy inherits directly from Animal, it is only Single Inheritance. Puppy will NOT get any methods defined inside Dog (like bark)! The chain must be built step-by-step: Dog inherits from Animal, and Puppy inherits from Dog.",
      correctCode: `class Puppy : public Dog { ... }`,
      remedy: "Ensure the child inherits from the immediate parent in the hierarchy chain."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Puppy myPuppy;",
      description: "Create Puppy object myPuppy. Stack allocates space for Animal, Dog, and Puppy attributes.",
      variables: { myPuppy_state: '"Initialized"' },
      callStack: ["main()"]
    },
    {
      codeLine: "myPuppy.eat();",
      description: "Call eat(). Looks up Puppy ➔ not found. Looks up Dog ➔ not found. Looks up Animal ➔ found. Executes Animal::eat().",
      variables: { myPuppy_state: '"Eating"' },
      callStack: ["main()", "Animal::eat()"]
    },
    {
      codeLine: "myPuppy.bark();",
      description: "Call bark(). Looks up Puppy ➔ not found. Looks up Dog ➔ found. Executes Dog::bark().",
      variables: { myPuppy_state: '"Barking"' },
      callStack: ["main()", "Dog::bark()"]
    },
    {
      codeLine: "myPuppy.weep();",
      description: "Call weep(). Found inside Puppy. Executes Puppy::weep().",
      variables: { myPuppy_state: '"Weeping"' },
      callStack: ["main()", "Puppy::weep()"]
    }
  ],
  realWorldApps: [
    "Enterprise Systems: Manager inheriting from Employee, which inherits from Person.",
    "Web Frameworks: CustomJSONResponse inheriting from JSONResponse, inheriting from HTTPResponse.",
    "Hardware Drivers: PCIeEthernet inheriting from Ethernet, inheriting from NetworkDevice."
  ],
  interviewTips: [
    "Inheritance Chain resolution: Explain that C++ resolves method calls at compile-time by searching up the inheritance chain from child to grandparent.",
    "Constructor order: Grandparent constructor runs first, then Parent constructor, then Child constructor. Destructors run in the exact reverse order.",
    "Inheritance limit: Be ready to explain how deep inheritance chains can lead to tight coupling and make code hard to maintain, recommending composition over inheritance in some cases."
  ],
  practiceVariations: [
    "Write a class Car inheriting from Vehicle, and SportsCar inheriting from Car, adding specific methods for each.",
    "Demonstrate overriding a grandparent method inside the child class.",
    "Add constructors to all three classes and print messages to verify constructor/destructor execution order."
  ]
};
