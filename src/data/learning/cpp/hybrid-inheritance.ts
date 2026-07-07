import { LearningQuestion } from "@/types/learning";

export const hybridInheritanceQuestion: LearningQuestion = {
  id: "hybrid-inheritance",
  title: "Hybrid Inheritance Example",
  difficulty: "Advanced",
  topic: "cpp",
  problem: {
    description: "Write a C++ program demonstrating Hybrid Inheritance (a combination of two or more types of inheritance) using virtual base classes to solve the Diamond Problem.",
    input: "Hybrid diamond classes: Parent, Child1, Child2, Grandchild",
    output: `"Grandparent constructor called\\nChild1 constructor called\\nChild2 constructor called\\nGrandchild constructor called"`
  },
  story: "Imagine a diamond structure in a family. A Grandparent has a house. Both Mom and Dad inherit this house. Then, a Grandchild inherits from both Mom and Dad. If the Grandchild looks up who owns the house, they get two conflicting copies of the grandparent's house (one from Mom, one from Dad), causing confusion (The Diamond Problem!). In C++, we use 'virtual inheritance' to ensure only ONE shared copy of the grandparent's house exists!",
  simpleExplanation: "Hybrid Inheritance is a combination of two or more types of inheritance (e.g. hierarchical and multiple). The most famous case is the Diamond Problem, where a class inherits from two parent classes that both inherit from the same grandparent. In C++, this causes ambiguity because the child gets duplicate copies of the grandparent's members. We solve this by inheriting using the 'virtual' keyword in the parent classes.",
  visualThinking: [
    "      Grandparent (Base)",
    "      /        \\",
    "  Parent1      Parent2   (Inherit vertically with 'virtual')",
    "      \\        /",
    "     Grandchild          (Multiple inherits Parent1, Parent2)",
    "Result ➔ Only 1 copy of Grandparent members exists in Grandchild!"
  ],
  visualExecution: {
    headers: ["Structure Type", "Common Grandparent", "Intermediate Parents", "Derived Endpoint", "Mitigation Keyword"],
    inputs: ["Diamond Shape", "Grandparent", "Parent1, Parent2", "Grandchild", "virtual (prevents duplicates)"],
    outputs: ["Diamond Shape", "Grandparent", "Parent1, Parent2", "Grandchild", `"Grandparent constructor runs ONCE"`]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

class Grandparent {
public:
    Grandparent() {
        cout << "Grandparent constructor called" << endl;
    }
    int gold = 100;
};

// Inherit virtual to prevent duplicate Grandparent copies
class Parent1 : virtual public Grandparent {
public:
    Parent1() {
        cout << "Parent1 constructor called" << endl;
    }
};

class Parent2 : virtual public Grandparent {
public:
    Parent2() {
        cout << "Parent2 constructor called" << endl;
    }
};

// Multiple inheritance combining Parent1 and Parent2
class Grandchild : public Parent1, public Parent2 {
public:
    Grandchild() {
        cout << "Grandchild constructor called" << endl;
    }
};

int main() {
    Grandchild child;
    // Without 'virtual', child.gold would be ambiguous and fail to compile!
    cout << "Gold inherited: " << child.gold << " ounces." << endl;
    return 0;
}`
  },
  complexity: {
    label: "Diamond Depth",
    operations: "Vtable lookups",
    visualText: "Virtual pointer offset lookup ➔ 1 runtime jump ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Hybrid diamond inheritance resolution utilizing virtual base class tables to coalesce duplicate subobjects.",
    simple: "If Grandchild inherits from Parent1 and Parent2, who both inherit from Grandparent, the Grandchild gets two copies of the Grandparent's gold. This confuses the computer. By using the 'virtual' keyword, C++ makes Mom and Dad share the grandparent's gold, so the Grandchild gets exactly one copy.",
    verySimple: "Preventing double copies. Ensuring a grandchild inherits only one copy of their grandparent's traits instead of getting duplicates from both parents."
  },
  commonMistakes: [
    {
      wrongCode: `class Parent1 : public Grandparent { ... };
class Parent2 : public Grandparent { ... };
// ...
cout << child.gold; // compilation error: gold is ambiguous!`,
      whyItFails: "If you omit the 'virtual' keyword during parent inheritance, Grandchild gets two copies of 'gold' (one from Parent1, one from Parent2). Trying to write child.gold fails compilation because the compiler doesn't know which 'gold' you mean!",
      correctCode: `class Parent1 : virtual public Grandparent { ... };
class Parent2 : virtual public Grandparent { ... };`,
      remedy: "Use the 'virtual' keyword when intermediate parents inherit from the shared grandparent base class."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Grandchild child;",
      description: "Create Grandchild child. The compiler checks virtual tables and executes Grandparent constructor first.",
      variables: { gold_copies: 1, grandparent_status: '"Constructed"' },
      callStack: ["main()", "Grandparent()"]
    },
    {
      codeLine: "Parent1 constructor called",
      description: "Run Parent1 constructor. Prints 'Parent1 constructor called'.",
      variables: { gold_copies: 1, parent1_status: '"Constructed"' },
      callStack: ["main()", "Parent1()"]
    },
    {
      codeLine: "Parent2 constructor called",
      description: "Run Parent2 constructor. Note that it skips calling Grandparent constructor again because it is virtual!",
      variables: { gold_copies: 1, parent2_status: '"Constructed"' },
      callStack: ["main()", "Parent2()"]
    },
    {
      codeLine: "Grandchild constructor called",
      description: "Run Grandchild constructor. Prints 'Grandchild constructor called'.",
      variables: { gold_copies: 1, grandchild_status: '"Constructed"' },
      callStack: ["main()", "Grandchild()"]
    },
    {
      codeLine: "cout << child.gold;",
      description: "Access gold. Resolved cleanly to the single shared copy (100).",
      variables: { gold_val: 100 },
      callStack: ["main()"]
    }
  ],
  realWorldApps: [
    "IO Streams: The C++ standard library iostream class inherits from istream and ostream, which both inherit from ios (a classic diamond solved via virtual inheritance).",
    "Enterprise Systems: Creating a Consultant manager inheriting from Employee and Contractor, who both inherit from Person.",
    "Graphics Widgets: An interactive textbox inheriting from KeyboardListener and MouseListener, who both inherit from EventListener."
  ],
  interviewTips: [
    "Diamond Problem Definition: Explain the Diamond Problem: ambiguity created when a derived class inherits from multiple parents who share a common base grandparent.",
    "Virtual Base Class: Explain that virtual base classes guarantee that only one instance of the grandparent base class is created in the final grandchild object.",
    "Virtual pointer overhead: Note that virtual inheritance adds a small runtime overhead because members are accessed indirectly using virtual base pointers."
  ],
  practiceVariations: [
    "Demonstrate what happens if you try to call child.gold without the virtual keyword (inspecting compilation logs).",
    "Create a class TeachingAssistant that inherits from Teacher and Student, both inheriting from Person using virtual base classes.",
    "Write custom constructors with parameters for Grandparent, and initialize them inside Parent1, Parent2, and Grandchild."
  ]
};
