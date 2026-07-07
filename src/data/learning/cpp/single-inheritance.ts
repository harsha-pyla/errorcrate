import { LearningQuestion } from "@/types/learning";

export const singleInheritanceQuestion: LearningQuestion = {
  id: "single-inheritance",
  title: "Single Inheritance Example",
  difficulty: "Easy",
  topic: "cpp",
  problem: {
    description: "Write a C++ program demonstrating Single Inheritance where a child class 'Dog' inherits from a parent class 'Animal'.",
    input: "Dog object calls parent and child methods",
    output: `"Animal is eating...\\nDog is barking..."`
  },
  story: "Imagine a family trait. A parent has eyes and a nose, and can breathe. A child inherits these traits (eyes, nose, breathing) and adds their own unique traits (like a specific voice or hobby). In C++, Single Inheritance allows a child class to inherit all variables and functions of a single parent class and extend them!",
  simpleExplanation: "Inheritance is a key pillar of Object-Oriented Programming (OOP) that allows a class to inherit properties and behaviors from another class. In Single Inheritance, there is exactly one parent class (base class) and one child class (derived class). We define the base class 'Animal' with an eat() function, and the derived class 'Dog' inherits from it using public inheritance, adding a bark() function.",
  visualThinking: [
    "Base Class: Animal ➔ contains eat()",
    "Derived Class: Dog ➔ inherits eat() from Animal, adds bark()",
    "Instantiate Dog d; ➔ d contains BOTH eat() and bark()",
    "Call d.eat() ➔ executes Animal::eat()",
    "Call d.bark() ➔ executes Dog::bark()"
  ],
  visualExecution: {
    headers: ["Class", "Parent (Base)", "Child (Derived)", "Object", "Callable Methods"],
    inputs: ["Definition", "Animal", "Dog (extends Animal)", "d", "d.eat(), d.bark()"],
    outputs: ["Methods called", "Animal::eat()", "Dog::bark()", "d", `"Animal is eating...\\nDog is barking..."`]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

// Base (Parent) Class
class Animal {
public:
    void eat() {
        cout << "Animal is eating..." << endl;
    }
};

// Derived (Child) Class
class Dog : public Animal {
public:
    void bark() {
        cout << "Dog is barking..." << endl;
    }
};

int main() {
    Dog myDog;
    myDog.eat();  // Inherited method
    myDog.bark(); // Child's own method
    return 0;
}`
  },
  complexity: {
    label: "Inheritance layers",
    operations: "Method lookups",
    visualText: "Direct inheritance lookup ➔ No runtime resolution overhead ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Single inheritance derivation establishing an 'is-a' relationship with static method dispatch.",
    simple: "We make a parent class 'Animal' that knows how to eat. Then we make a child class 'Dog' that inherits the eating skill and adds a barking skill. A Dog object can now do both!",
    verySimple: "A phone template. The basic phone can call. The smart phone inherits calling and adds browsing!"
  },
  commonMistakes: [
    {
      wrongCode: `class Dog : Animal { // Missing public keyword!
    // ...
};`,
      whyItFails: "In C++, if you omit the 'public' keyword during inheritance, it defaults to 'private' inheritance! This means all public methods of Animal (like eat) become private in Dog, preventing you from calling 'myDog.eat()' from the main function.",
      correctCode: `class Dog : public Animal { ... }`,
      remedy: "Explicitly use 'public' inheritance to preserve the accessibility of parent methods."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Dog myDog;",
      description: "Create Dog object myDog on stack. Inherited Animal characteristics are prepared.",
      variables: { myDog_state: '"Initialized"' },
      callStack: ["main()"]
    },
    {
      codeLine: "myDog.eat();",
      description: "Call eat() method. Since Dog has no eat(), it delegates up to parent class Animal.",
      variables: { myDog_state: '"Eating"' },
      callStack: ["main()", "Animal::eat()"]
    },
    {
      codeLine: "myDog.bark();",
      description: "Call bark() method. Executes Dog's own bark() method.",
      variables: { myDog_state: '"Barking"' },
      callStack: ["main()", "Dog::bark()"]
    }
  ],
  realWorldApps: [
    "Game development: Creating a Monster class that inherits from a basic GameEntity class.",
    "GUI Systems: Creating a Button class that inherits from a generic Widget class.",
    "Data streams: Creating a FileStream class inheriting from a generic InputStream class."
  ],
  interviewTips: [
    "Access Specifier visibility: Explain how private, protected, and public inheritance alter parent member visibility inside the child class.",
    "Is-A Relationship: Explain that inheritance models an 'is-a' relationship (e.g. a Dog is an Animal).",
    "Constructor execution order: Be ready to state that when a child object is created, the parent class constructor runs first, followed by the child class constructor."
  ],
  practiceVariations: [
    "Add a constructor to Animal and Dog to print messages showing the order of constructor execution.",
    "Declare a protected variable in Animal and access it inside Dog.",
    "Override the eat() method in Dog to print a custom dog-eating message (Polymorphism)."
  ]
};
