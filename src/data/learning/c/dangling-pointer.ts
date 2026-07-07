import { LearningQuestion } from "@/types/learning";

export const danglingPointerQuestion: LearningQuestion = {
  id: "dangling-pointer",
  title: "Dangling Pointers & Memory Leaks",
  difficulty: "Medium",
  topic: "c",
  problem: {
    description: "Explain and demonstrate in C what a dangling pointer and a memory leak are, how they occur in memory, and how to prevent them.",
    input: "heap allocation and deallocation lifecycle",
    output: "resilient memory pointer lifecycle"
  },
  story: "Imagine renting a locker at a bus station (allocating memory). You get a key (pointer). If you return the key to the clerk but keep a copy of the key (dangling pointer), you can still open the locker, which might now hold someone else's bags! Alternatively, if you lock your bags inside and leave without returning the key (memory leak), no one else can use that locker, and the station runs out of locker space!",
  simpleExplanation: "A Dangling Pointer occurs when you free a block of dynamic memory but keep using the pointer variable that pointed to it. A Memory Leak occurs when you allocate dynamic memory but forget to free it before losing the pointer variable, leaving the memory permanently occupied.",
  visualThinking: [
    "malloc(sizeof(int)) ➔ Pointer ptr gets address 0x5000",
    "free(ptr) ➔ Memory at 0x5000 is released to heap",
    "ptr is still 0x5000! ➔ Dangling Pointer danger",
    "Fix dangling pointer ➔ Set ptr = NULL after free",
    "Lose pointer without free(ptr) ➔ Leak! Memory at 0x5000 locked forever"
  ],
  visualExecution: {
    headers: ["Operation", "Heap Memory at 0x5000", "Pointer ptr value", "Pointer status", "Memory Safety"],
    inputs: ["malloc()", "Allocated (4 bytes)", "0x5000", "Valid", "Safe"],
    outputs: ["free() without NULL", "Deallocated", "0x5000", "Dangling", "CRITICAL ERROR: DANGER!"]
  },
  code: {
    language: "c",
    snippet: `#include <stdio.h>
#include <stdlib.h>

void danglingPointerDemo() {
    int *ptr = (int *)malloc(sizeof(int)); // Allocate memory
    *ptr = 42;
    
    free(ptr); // Release memory. ptr is now DANGLING!
    
    // WARNING: ptr still holds 0x5000. Accessing *ptr now is undefined behavior!
    // *ptr = 100; // DANGEROUS!
    
    ptr = NULL; // Prevention: nullify pointer immediately
}

void memoryLeakDemo() {
    int *ptr = (int *)malloc(100 * sizeof(int)); // Allocate block
    
    // If we return or overwrite ptr here without calling free(ptr),
    // those 400 bytes are leaked until the program exits!
    
    free(ptr); // Prevention: release block before pointer goes out of scope
}`
  },
  complexity: {
    label: "Allocation size (b)",
    operations: "Pointers",
    visualText: "malloc() / free() ➔ Dynamic memory block swaps ➔ Space O(b)",
    timeComplexity: "O(1) — Allocation/Deallocation time",
    spaceComplexity: "O(b) — Dynamically allocated heap bytes"
  },
  explainLike10: {
    professional: "Dangling pointer: dereferencing a pointer to an invalid/deallocated memory page. Memory leak: losing all heap references without calling free().",
    simple: "A dangling pointer is like having the key to a house that was already demolished. A memory leak is like locking a toy in a box, throwing away the key, and forgetting the box exists—you can't use that space anymore.",
    verySimple: "Dangling pointer = key copy to a returned locker. Memory leak = losing the locker key without cleaning out your locker."
  },
  commonMistakes: [
    {
      wrongCode: `void leak() {
    int *p = malloc(sizeof(int));
    if (error_condition) {
        return; // Exits function! p is lost, memory is LEAKED!
    }
    free(p);
}`,
      whyItFails: "If error_condition evaluates to true, the function returns immediately. The local pointer variable p goes out of scope and is destroyed, but the allocated heap memory remains locked, creating a memory leak!",
      correctCode: `if (error_condition) {
    free(p); // Free before return!
    return;
}`,
      remedy: "Always ensure every code exit path frees dynamically allocated memory before pointers go out of scope."
    }
  ],
  visualizerSteps: [
    {
      codeLine: "int *ptr = (int *)malloc(sizeof(int));",
      description: "Heap allocates 4 bytes. ptr points to 0x5000.",
      variables: { ptr: "0x5000", "*ptr": 0, status: '"Allocated"' },
      callStack: ["danglingPointerDemo()"]
    },
    {
      codeLine: "*ptr = 42;",
      description: "Write value 42 to address 0x5000.",
      variables: { ptr: "0x5000", "*ptr": 42, status: '"Allocated"' },
      callStack: ["danglingPointerDemo()"]
    },
    {
      codeLine: "free(ptr);",
      description: "Free memory at 0x5000. Memory is released, but ptr STILL holds 0x5000 (Dangling!).",
      variables: { ptr: "0x5000", "*ptr": "Garbage/Invalid", status: '"Dangling!"' },
      callStack: ["danglingPointerDemo()"]
    },
    {
      codeLine: "ptr = NULL;",
      description: "Nullify pointer. Now ptr holds 0x0000, making it safe from accidental access.",
      variables: { ptr: "0x0000 (NULL)", "*ptr": "Invalid", status: '"Safe (Nullified)"' },
      callStack: ["danglingPointerDemo()"]
    }
  ],
  realWorldApps: [
    "Operating Systems: Managing system pages and processes memory layouts without crashes.",
    "Embedded Devices: Running loops in devices with very small RAM without running out of memory.",
    "Web Servers: Handling millions of HTTP requests daily without accumulating memory leaks that crash the daemon."
  ],
  interviewTips: [
    "Dangling pointer definition: Explain that a dangling pointer is a pointer that points to a memory location that has been deallocated or freed.",
    "How to prevent leaks: Discuss utilizing RAII concepts, smart wrappers, or setting pointers to NULL immediately after calling free().",
    "Void Pointer uses: Explain that malloc returns a void pointer (void *), which can be cast to any pointer type without warnings."
  ],
  practiceVariations: [
    "Write a program that uses Valgrind or compiler diagnostics to detect memory leaks.",
    "Demonstrate a dangling pointer created by returning a local stack variable address from a function.",
    "Create a safe wrapper function for free() that automatically sets the passed pointer to NULL."
  ]
};
