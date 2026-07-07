import { LearningQuestion } from "@/types/learning";

export const constructorOverloadingQuestion: LearningQuestion = {
  id: "constructor-overloading",
  title: "Demonstrate Constructor Overloading",
  difficulty: "Easy",
  topic: "cpp",
  problem: {
    description: "Write a C++ class 'Box' that contains multiple constructors: one with no arguments (default dimensions 1), and one with custom dimensions (width, height, depth).",
    input: "Box b1 (default), Box b2(2, 3, 4)",
    output: `"Box Volume: 1\\nBox Volume: 24"`
  },
  story: "Imagine buying a cardboard box. If you don't specify any size, the store gives you a default shipping box of size 1x1x1 (Default Constructor). But if you say 'I want a box that is 2 feet wide, 3 feet tall, and 4 feet deep', the clerk builds a custom box for you (Parameterized Constructor). Multiple ways to build the same object is Constructor Overloading!",
  simpleExplanation: "Constructor overloading allows a class to have more than one constructor, as long as they have different parameter lists (different types or number of arguments). The compiler automatically detects which constructor to call based on the arguments passed during instantiation.",
  visualThinking: [
    "Class Box with: Box() and Box(w, h, d)",
    "Instantiate b1 ➔ Box b1; ➔ calls Box() ➔ dims 1x1x1 ➔ vol = 1",
    "Instantiate b2 ➔ Box b2(2,3,4); ➔ calls Box(2,3,4) ➔ dims 2x3x4 ➔ vol = 24"
  ],
  visualExecution: {
    headers: ["Instantiation syntax", "Called Constructor", "Dimensions", "Volume"],
    inputs: ["Box b1;", "Default Box()", "1 x 1 x 1", "1"],
    outputs: ["Box b2(2, 3, 4);", "Parameterized Box(int, int, int)", "2 x 3 x 4", "24"]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

class Box {
public:
    int width, height, depth;

    // Default Constructor (no arguments)
    Box() {
        width = 1;
        height = 1;
        depth = 1;
    }

    // Parameterized Constructor
    Box(int w, int h, int d) {
        width = w;
        height = h;
        depth = d;
    }

    int getVolume() {
        return width * height * depth;
    }
};

int main() {
    Box b1;            // Calls default constructor
    Box b2(2, 3, 4);   // Calls parameterized constructor
    cout << "Box 1 Volume: " << b1.getVolume() << endl;
    cout << "Box 2 Volume: " << b2.getVolume() << endl;
    return 0;
}`
  },
  complexity: {
    label: "Objects initialized",
    operations: "Assignments",
    visualText: "b1 ➔ 3 assignments, b2 ➔ 3 assignments ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Polymorphic compile-time constructor binding determined by parameter signature matching.",
    simple: "We can build our box in two ways: either we call 'Box()' to get a small 1x1x1 box, or we write 'Box(2,3,4)' to define its height, width, and depth.",
    verySimple: "Buying a toy: either you buy the pre-made standard toy (default), or customize its colors and sizes (parameterized)!"
  },
  commonMistakes: [
    {
      wrongCode: `Box b1(); // Trying to call default constructor`,
      whyItFails: "Writing 'Box b1();' is parsed by C++ as a function declaration named 'b1' that returns a 'Box' object and takes no parameters! This is known as the 'most vexing parse'. The object is never created, and trying to use b1.getVolume() throws a compile error.",
      correctCode: `Box b1; // No parentheses for default constructor!`,
      remedy: "Omit parentheses when instantiating objects using the default constructor."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "Box b1;",
      description: "Instantiate b1. Default constructor Box() runs, initializing width, height, and depth to 1.",
      variables: { "b1.width": 1, "b1.height": 1, "b1.depth": 1 },
      callStack: ["main()", "Box()"]
    },
    {
      codeLine: "Box b2(2, 3, 4);",
      description: "Instantiate b2. Parameterized constructor Box(int, int, int) runs, setting width=2, height=3, depth=4.",
      variables: { "b2.width": 2, "b2.height": 3, "b2.depth": 4 },
      callStack: ["main()", "Box(int, int, int)"]
    },
    {
      codeLine: "cout << b1.getVolume();",
      description: "Calculate b1 volume: 1 * 1 * 1 = 1.",
      variables: { "b1.vol": 1 },
      callStack: ["main()", "b1.getVolume()"]
    },
    {
      codeLine: "cout << b2.getVolume();",
      description: "Calculate b2 volume: 2 * 3 * 4 = 24.",
      variables: { "b2.vol": 24 },
      callStack: ["main()", "b2.getVolume()"]
    }
  ],
  realWorldApps: [
    "User Interface Widgets: Constructing a window with default dimensions or custom pixel coordinates.",
    "Graphics Colors: Creating a Color class with default black or custom RGB variables.",
    "Database Drivers: Instantiating client connections using default local host or custom port parameters."
  ],
  interviewTips: [
    "Most Vexing Parse: Be ready to explain why writing 'Box b1();' behaves as a function declaration rather than object creation.",
    "Implicit Default Constructor: If you write custom parameterized constructors, the compiler will NOT generate a default constructor automatically. You must define it yourself if you plan to instantiate 'Box b1;' empty objects.",
    "Constructor Chaining: Mention delegate constructors (calling one constructor from another inside the initialization list)."
  ],
  practiceVariations: [
    "Add a third constructor that takes a single integer and sets all dimensions to it (creating a Cube).",
    "Use constructor delegation (C++11) to make the default constructor call the parameterized constructor.",
    "Write a Point class with overloaded constructors for Cartesian (x,y) and polar coordinates."
  ]
};
