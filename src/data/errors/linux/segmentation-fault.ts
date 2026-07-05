import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "segmentation-fault",
  "name": "Segmentation fault",
  "category": "linux",
  "badges": [
    "Linux System",
    "Process Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This crash occurs when a program attempts to read or write to a memory location it does not have permission to access.",
  "meanDescription": "A Segmentation Fault (SIGSEGV) is a signal sent by the Linux kernel to a running process when it detects an invalid memory access violation. This happens when a compiled application (C, C++, Rust, Go, or Node binary modules) attempts to access memory outside its allocated virtual memory space, dereferences a null pointer, performs a stack overflow, or attempts to write to read-only memory pages.",
  "causes": [
    "Null pointer dereferencing: Attempting to read or write memory using a pointer that is null (0x0).",
    "Buffer overflow: Writing data beyond the bounds of an allocated array, corrupting the call stack memory.",
    "Stack overflow: Excessive recursion or massive local variables consuming all available process stack space."
  ],
  "solutions": [
    "Inspect core dump logs: Enable core dumps ('ulimit -c unlimited') and load the core file in GDB to locate the crashing line.",
    "Run with memory sanitizers: Compile and test code using Valgrind or AddressSanitizer (ASan) to inspect memory leaks/bounds.",
    "Verify native dependencies: Check and rebuild compiled native addons (like node-gyp modules) matching the target OS."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Segmentation fault (core dumped)",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Run buggy compiled binary\n./buggy_program",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Segmentation fault (core dumped)\n$ echo $?\n139",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Enabling Core Dumps",
      "language": "bash",
      "description": "Configure the shell limits to write core dump logs on crash, then load GDB to locate the trace.",
      "code": "# 1. Enable core files generation\n$ ulimit -c unlimited\n\n# 2. Run binary to trigger crash and dump file\n$ ./buggy_program\nSegmentation fault (core dumped)\n\n# 3. Open core file in GDB debugger\n$ gdb ./buggy_program core\n(gdb) bt\n# Shows stack frame trace pointing to the crashing line of code"
    },
    {
      "name": "Valgrind Memory Scan",
      "language": "bash",
      "description": "Run memory analyzer checks on binary applications to find illegal reads/writes.",
      "code": "# Run program under Valgrind profiling wrappers\n$ valgrind --tool=memcheck ./buggy_program\n\n# Output highlights:\n# ==12345== Invalid read of size 4\n# ==12345==    at 0x4005B4: main (main.c:12)"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Rebuild native C/C++ packages matching node runtime to fix V8 engine segfaults.",
      "code": "# Clean and rebuild native node-gyp packages\nnpm rebuild"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "Check if Windows host crash monitoring flags block local WSL core dump settings.",
      "code": "# Inspect core dump file pattern template\ncat /proc/sys/kernel/core_pattern"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS diagnostic report location checks.",
      "code": "# List reports for process segfault crashes\nls -la ~/Library/Logs/DiagnosticReports/"
    }
  ],
  "commonMistakes": [
    "Assuming segmentation faults in Node.js or Python can be caught with try/catch blocks (native crashes terminate the entire virtual machine directly without raising runtime exceptions).",
    "Forgetting to supply debugging symbols (`-g` compiler flags) when compile-building binary files, making core dump backtraces unreadable."
  ],
  "prevention": [
    "Employ modern memory-safe programming languages (like Rust) that prevent memory layout pointer hazards at compile time.",
    "Perform boundary verification checks before writing user-supplied input data to buffer frames."
  ],
  "faq": [
    {
      "question": "What is a segmentation fault?",
      "answer": "It is a crash triggered when a program violates memory access permissions set by the hardware's Memory Management Unit (MMU) and OS kernel."
    },
    {
      "question": "How do I debug a segfault?",
      "answer": "Enable core dumps: 'ulimit -c unlimited', reproduce the crash, and analyze the resulting core dump using a debugger like GDB: 'gdb <program> <core-file>'. Type 'bt' (backtrace) to see the crash line."
    },
    {
      "question": "Why does Node.js throw a segmentation fault?",
      "answer": "Pure JavaScript cannot cause a segfault. Node.js segfaults are caused by bugs in native C++ addons (like bcrypt, sass, or database drivers) or the Node.js V8 engine itself."
    },
    {
      "question": "What is Valgrind?",
      "answer": "Valgrind is a programming tool for memory debugging, memory leak detection, and profiling. Run: 'valgrind ./myprogram' to locate memory leaks."
    }
  ],
  "helpfulResources": [
    {
      "name": "GDB Debugger Home page",
      "url": "https://www.sourceware.org/gdb/"
    }
  ],
  "relatedErrors": [
    "operation-not-permitted"
  ],
  "quickFix": {
    "causes": [
      "Process read/write request to restricted physical memory addresses",
      "Null pointer dereference or stack recursion exhaustion",
      "Native compiled binary package incompatibility"
    ],
    "checklist": [
      "Enable cores dumps: ulimit -c unlimited",
      "Reproduce crash and load core in GDB",
      "Trace crash using GDB backtrace (bt) commands",
      "Recompile native extensions using npm rebuild"
    ],
    "estimatedTime": "5 minutes"
  },
  "causesTable": [
    {
      "cause": "Null pointer dereferences in native code",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Out of bounds buffer array write access",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incompatible precompiled binary dependencies",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Segmentation fault: Quick Fix Guide for Linux Developers",
  "seoDescription": "Getting Segmentation fault in Linux? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
