import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "out-of-memory",
  "name": "Out of memory",
  "category": "linux",
  "badges": [
    "Linux System",
    "Memory Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the system resources cannot allocate more memory, or when an application exceeds its allocated heap memory constraints.",
  "meanDescription": "The 'Out of memory' error (ENOMEM) occurs when a process requests virtual or physical memory allocation from the operating system kernel, but the system has exhausted its memory resources and swap space. This error also occurs at the application level (like in Java, Node.js, or Python) when the program's runtime engine exceeds its pre-configured maximum heap memory limits.",
  "causes": [
    "Physical RAM and swap space exhaustion: The host server is running too many concurrent processes or has insufficient memory.",
    "Application heap limit exceeded: The application runtime (e.g. V8 engine or JVM) hits its predefined ceiling limit (e.g. FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory).",
    "Memory leak bugs: Software code holds references to unused memory, causing memory consumption to grow until depletion."
  ],
  "solutions": [
    "Increase process heap limit: Pass custom runtime parameters to allocate more memory (e.g. 'NODE_OPTIONS=\"--max-old-space-size=4096\"' or '-Xmx4g').",
    "Add system swap space: Configure a swap partition or swap file to act as memory overflow cache.",
    "Track and fix memory leaks: Use memory profile tracing utilities (like Chrome DevTools, heap dumps, or leak-detectors) to find memory leaks."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Running Node process that exceeds default memory ceiling\nnode index.js",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory\nAborted (core dumped)",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Node.js Heap Expansion",
      "language": "bash",
      "description": "Increase default V8 heap limits by setting the old space size option globally or inline.",
      "code": "# Inline configuration (increases heap limit to 4GB)\n$ node --max-old-space-size=4096 index.js\n\n# Or configure env globally\n$ export NODE_OPTIONS=\"--max-old-space-size=4096\""
    },
    {
      "name": "Java JVM Memory Setup",
      "language": "bash",
      "description": "Adjust JVM memory flags to allocate appropriate heap boundaries.",
      "code": "# Set initial heap to 2GB and maximum to 4GB\n$ java -Xms2g -Xmx4g -jar application.jar"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check current physical RAM usage details inside Linux console shells.",
      "code": "# Display memory details in human-readable megabytes/gigabytes\nfree -h"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "WSL virtual machine limits configuration check.",
      "code": "# Output memory state on WSL\ncat /proc/meminfo | grep -E \"(MemTotal|MemFree|SwapTotal)\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check memory pressure metrics using standard diagnostic commands.",
      "code": "vm_stat"
    }
  ],
  "commonMistakes": [
    "Increasing application heap size limits on a host server that lacks free physical memory, leading to heavy page swapping or OOM-killer interventions.",
    "Forgetting to release large objects inside JavaScript arrays or event listeners, leading to memory leaks that eventually bypass any heap expansion limits."
  ],
  "prevention": [
    "Avoid loading complete database datasets directly into system memory; utilize streaming tools (like Node.js streams or database cursors).",
    "Deploy regular memory profiling audits during development stages using heap snapshot trackers."
  ],
  "faq": [
    {
      "question": "What is ENOMEM?",
      "answer": "ENOMEM is the low-level POSIX error code returned by system calls (like malloc) when memory cannot be allocated."
    },
    {
      "question": "How do I fix 'JavaScript heap out of memory' in Node.js?",
      "answer": "By default, Node limits heap usage to around 1.5GB. Increase it by setting the '--max-old-space-size' parameter: 'node --max-old-space-size=4096 script.js'."
    },
    {
      "question": "How do I check current memory usage in Linux?",
      "answer": "Run 'free -h' to see total, used, and free physical memory and swap."
    },
    {
      "question": "Why is swap useful?",
      "answer": "Swap space is a dedicated area on a hard drive that acts as virtual RAM when physical memory is full, preventing immediate Out of Memory crashes."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js Memory Management and Profiling guide",
      "url": "https://nodejs.org/en/learn/diagnostics/memory"
    }
  ],
  "relatedErrors": [
    "killed"
  ],
  "quickFix": {
    "causes": [
      "Physical RAM limits and virtual swap blocks are full",
      "Application process exceeded runtime heap constraints limit",
      "Code contains memory leaks accumulating allocations over time"
    ],
    "checklist": [
      "Run free -h to check available RAM space",
      "Set environment variable NODE_OPTIONS for Node processes",
      "Adjust JVM -Xmx flags for Java applications",
      "Profile code closures for memory leaks"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Application runtime heap limit constraint",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Physical system RAM and swap depletion",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Code logic memory leaks (e.g. unclosed event listeners)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Out of memory Fast — Linux Solutions Guide",
  "seoDescription": "Complete guide to fixing Out of memory in Linux. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
