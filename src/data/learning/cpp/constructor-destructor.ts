import { LearningQuestion } from "@/types/learning";

export const constructorDestructorQuestion: LearningQuestion = {
  id: "constructor-destructor",
  title: "Constructor vs Destructor Example",
  difficulty: "Easy",
  topic: "cpp",
  problem: {
    description: "Write a C++ class 'DatabaseConnection' that prints a message when created (constructor) and prints a message when deleted/destroyed (destructor).",
    input: "Object goes in and out of scope",
    output: `"Connection Opened\\nConnection Closed"`
  },
  story: "Imagine renting a hotel room. When you enter, the room service prepares the bed (Constructor setup). When you check out, the room service cleans everything up so the room is free for the next guest (Destructor cleanup). Constructors initialize resources, and destructors free them when the object leaves the scope!",
  simpleExplanation: "A constructor is a special function with the same name as the class that runs automatically when an object is created. A destructor has the same name prefixed with a tilde '~' and runs automatically when the object goes out of scope, allowing you to free heap memory or close file handlers.",
  visualThinking: [
    "Object connection created ➔ Constructor triggered ➔ Output: Connection Opened",
    "Object performs query tasks",
    "Scope block ends } ➔ connection object destroyed ➔ Destructor triggered ➔ Output: Connection Closed"
  ],
  visualExecution: {
    headers: ["Stage", "Triggered Method", "State change", "Console Log"],
    inputs: ["Start of block {", "Constructor", "Connection established", `"Connection Opened"`],
    outputs: ["End of block }", "Destructor", "Connection closed & cleared", `"Connection Closed"`]
  },
  code: {
    language: "cpp",
    snippet: `#include <iostream>
using namespace std;

class DatabaseConnection {
public:
    // Constructor
    DatabaseConnection() {
        cout << "Connection Opened" << endl;
    }

    // Destructor
    ~DatabaseConnection() {
        cout << "Connection Closed" << endl;
    }
};

int main() {
    cout << "Entering Main" << endl;
    {
        DatabaseConnection db; // Constructor runs here
        cout << "Querying database..." << endl;
    } // db goes out of scope here - Destructor runs automatically!
    cout << "Exited scope block" << endl;
    return 0;
}`
  },
  complexity: {
    label: "Objects",
    operations: "Triggered setups",
    visualText: "Scope entry/exit ➔ Automatic execution ➔ Time O(1)",
    timeComplexity: "O(1) — Constant Time",
    spaceComplexity: "O(1) — Constant Space"
  },
  explainLike10: {
    professional: "Deterministic stack allocation lifecycle executing constructor initialization and destructor RAII cleanup.",
    simple: "A constructor is the birth of the object, and a destructor is its death. The computer automatically says hello when it's born and cleans up when it goes away.",
    verySimple: "Turning on a vacuum cleaner (constructor) and wrapping up its cord to put it away when you are done (destructor)!"
  },
  commonMistakes: [
    {
      wrongCode: `class DatabaseConnection {
public:
    void ~DatabaseConnection() {
        // ...
    } // Return type specified!
};`,
      whyItFails: "Constructors and destructors do NOT have return types (not even 'void'). Specifying a return type throws a compilation syntax error!",
      correctCode: `~DatabaseConnection() {
    // ...
}`,
      remedy: "Remove any return type identifiers (including void) from constructor and destructor signatures."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "cout << \"Entering Main\" << endl;",
      description: "Print program start message.",
      variables: { db_status: '"Not Created"' },
      callStack: ["main()"]
    },
    {
      codeLine: "DatabaseConnection db;",
      description: "db object is created. DatabaseConnection constructor runs automatically, prints 'Connection Opened'.",
      variables: { db_status: '"Connection Opened"' },
      callStack: ["main()", "DatabaseConnection()"]
    },
    {
      codeLine: "cout << \"Querying database...\" << endl;",
      description: "Execute query simulation print.",
      variables: { db_status: '"Connection Opened"' },
      callStack: ["main()"]
    },
    {
      codeLine: "} // db goes out of scope",
      description: "Scope block ends. db object is popped from stack. Destructor (~DatabaseConnection) runs automatically, prints 'Connection Closed'.",
      variables: { db_status: '"Connection Closed"' },
      callStack: ["main()", "~DatabaseConnection()"]
    }
  ],
  realWorldApps: [
    "Database connections: Opening connections on startup, closing them on exit.",
    "File management (RAII): Opening a file stream and ensuring it closes even if code crashes.",
    "Heap Allocation: Allocating memory in constructor, calling 'delete' in destructor to prevent leaks."
  ],
  interviewTips: [
    "Define RAII: Explain Resource Acquisition Is Initialization (RAII), where resource lifecycles are tied to stack-allocated objects.",
    "Destructor parameters: Destructors cannot take arguments and cannot be overloaded. There is always exactly one destructor per class.",
    "Virtual Destructor: Explain why base class destructors should be declared 'virtual' when working with inheritance (preventing partial deletions)."
  ],
  practiceVariations: [
    "Allocate an integer array dynamically in the constructor and delete it in the destructor to prevent leaks.",
    "Track active connection count using a static integer updated in constructor and destructor.",
    "Write a class that opens a text file in constructor and writes a log in destructor."
  ]
};
