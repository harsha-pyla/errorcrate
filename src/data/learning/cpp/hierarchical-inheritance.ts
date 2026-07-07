import { LearningQuestion } from "@/types/learning";

export const hierarchicalInheritanceQuestion: LearningQuestion = {
  id: "hierarchical-inheritance",
  title: "Hierarchical Inheritance Example",
  difficulty: "Medium",
  topic: "cpp",
  problem: {
    description: "Write a C++ program demonstrating Hierarchical Inheritance where two separate child classes 'Dog' and 'Cat' inherit from a single parent class 'Animal'.",
    input: "Dog and Cat objects call parent and their own unique methods",
    output: `"Animal is eating...\\nDog is barking...\\nAnimal is eating...\\nCat is meowing..."`
  },
  story: "Imagine a family where two siblings (a brother and a sister) inherit traits from the same parent. Both siblings inherit the parent's generic traits (like eye color), but each has their own unique skills (brother plays soccer, sister plays violin). In C++, Hierarchical Inheritance allows multiple child classes to inherit from a single parent class!",
  simpleExplanation: "Hierarchical Inheritance is a structure where more than one derived class inherits from a single base class. We define a base class 'Animal' (Parent) with an eat() function. We then define two derived classes: 'Dog' (inherits from Animal, adds bark()) and 'Cat' (inherits from Animal, adds meow()). Both Dog and Cat share the parent's eat() method but have their own unique methods.",
  visualThinking: [
    "Base Class: Animal ➔ eat()",
    "Derived Class 1: Dog ➔ inherits eat() from Animal, adds bark()",
    "Derived Class 2: Cat ➔ inherits eat() from Animal, adds meow()",
    "Both myDog and myCat can call eat()",
    "Only myDog can bark(), only myCat can meow()"
  ],
  visualExecution: {
    headers: ["Base Class", "Derived Class 1", "Derived Class 2", "Dog Object Method", "Cat Object Method"],
    inputs: ["Animal", "Dog", "Cat", "myDog.eat()", "myCat.eat()"],
    outputs: ["Animal", "Dog", "Cat", "myDog.bark()", "myCat.meow()"]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

// Base Class
class Animal {
public:
    void eat() {
        cout << "Animal is eating..." << endl;
    }
};

// Derived Class 1
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking..." << endl;
    }
};

// Derived Class 2
class Cat : public Animal {
public:
    void meow() {
        cout << "Cat is meowing..." << endl;
    }
};

int main() {
    Dog myDog;
    Cat myCat;
    
    myDog.eat();  // Shared parent method
    myDog.bark(); // Dog's method
    
    myCat.eat();  // Shared parent method
    myCat.meow(); // Cat's method
    
    return 0;
}`
  },
  complexity: {
    label: "Derived classes",
    operations: "Method lookups",
    visualText: "Multiple children pointing to one base ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Hierarchical inheritance trees mapping multiple derived vtables to a single shared base template.",
    simple: "We make one parent class 'Animal' that knows how to eat. Then we make two different children: 'Dog' and 'Cat'. Both can eat because they inherit it, but only the Dog can bark and only the Cat can meow.",
    verySimple: "One template, two products. A basic car engine is used to build both a family minivan and a sports car!"
  },
  commonMistakes: [
    {
      wrongCode: `class Cat : public Dog { // Cat inherits from Dog?
    // ...
};`,
      whyItFails: "If Cat inherits from Dog, then Cat would inherit the bark() function, which is incorrect because cats do not bark! Sibling classes must inherit from the shared base class (Animal) directly, not from each other.",
      correctCode: `class Cat : public Animal { ... }`,
      remedy: "Ensure all sibling classes derive directly from the common parent class instead of nesting them."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Dog myDog; Cat myCat;",
      description: "Instantiate Dog and Cat. Both allocate separate stack space and inherit Animal's properties.",
      variables: { myDog_status: '"Ready"', myCat_status: '"Ready"' },
      callStack: ["main()"]
    },
    {
      codeLine: "myDog.eat();",
      description: "Call eat() on Dog. Runs parent Animal::eat(). Prints 'Animal is eating...'.",
      variables: { myDog_status: '"Eating"' },
      callStack: ["main()", "Animal::eat()"]
    },
    {
      codeLine: "myDog.bark();",
      description: "Call bark() on Dog. Runs Dog::bark(). Prints 'Dog is barking...'.",
      variables: { myDog_status: '"Barking"' },
      callStack: ["main()", "Dog::bark()"]
    },
    {
      codeLine: "myCat.eat();",
      description: "Call eat() on Cat. Runs parent Animal::eat(). Prints 'Animal is eating...'.",
      variables: { myCat_status: '"Eating"' },
      callStack: ["main()", "Animal::eat()"]
    },
    {
      codeLine: "myCat.meow();",
      description: "Call meow() on Cat. Runs Cat::meow(). Prints 'Cat is meowing...'.",
      variables: { myCat_status: '"Meowing"' },
      callStack: ["main()", "Cat::meow()"]
    }
  ],
  realWorldApps: [
    "Bank Accounts: SavingAccount and CheckingAccount classes inheriting from a shared BankAccount parent class.",
    "Geometric Shapes: Circle and Rectangle classes inheriting from a shared Shape base class.",
    "Vehicles: Truck and Motorcycle classes inheriting from a generic Vehicle class."
  ],
  interviewTips: [
    "Code Reusability: Explain that hierarchical inheritance maximizes code reusability by placing shared variables (like interestRate or area) in the common base class.",
    "Derived differences: Emphasize that derived classes in hierarchical structures are completely independent of each other (Dog knows nothing about Cat).",
    "Upcasting: Be ready to discuss upcasting (treating a Dog or Cat pointer as a generic Animal pointer, e.g. 'Animal *a = &myDog')."
  ],
  practiceVariations: [
    "Create a Shape base class, and derive Circle and Rectangle classes, implementing area() in each.",
    "Write a BankAccount base class, and derive SavingsAccount and CurrentAccount with custom interest rules.",
    "Add a virtual function draw() in parent and override it in child classes to demonstrate polymorphism."
  ]
};
