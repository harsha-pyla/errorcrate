import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "maximum-call-stack-size-exceeded",
  "name": "Maximum call stack size exceeded",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "RangeError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A function called itself recursively too many times, exceeding the browser's stack limits.",
  "meanDescription": "The V8 engine has a limit on the number of active call stack frames allowed at one time. When a function calls itself recursively without a stopping criteria (base case), the call stack overflows, throwing this RangeError.",
  "causes": [
    "Missing recursive base stopping condition.",
    "Infinite loops inside event listeners or getter/setter properties.",
    "Circular object relationships inside deep cloning scripts."
  ],
  "solutions": [
    "Implement clear stopping checks (base cases) inside all recursive methods.",
    "Use iterative loop structures instead of recursion for large data processing.",
    "Avoid naming local variables identical to class getters/setters."
  ],
  "example": {
    "title": "RangeError Call Stack Overflow",
    "code": "function recurse() {\n  recurse();\n}\n// Throws RangeError: Maximum call stack size exceeded\nrecurse();",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "function recurse() {\n  recurse();\n}\nrecurse();",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "RangeError: Maximum call stack size exceeded\n    at recurse (<anonymous>:2:3)\n    at recurse (<anonymous>:2:3)\n    at recurse (<anonymous>:2:3)",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Infinite Object Getters",
      "language": "javascript",
      "description": "Naming property keys identical to getter definitions creates an infinite lookup loop.",
      "code": "const user = {\n  get name() {\n    // Fix: return this._name;\n    return this.name; // Calls getter again recursively\n  }\n};\ntry {\n  console.log(user.name);\n} catch (err) {\n  console.error(err.message); // Maximum call stack size exceeded\n}"
    },
    {
      "name": "Factorial Missing Base Case",
      "language": "javascript",
      "description": "Executing recursive loops without base return checks.",
      "code": "function factorial(n) {\n  // Fix: if (n <= 1) return 1;\n  return n * factorial(n - 1);\n}\ntry {\n  factorial(5);\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Recursion checks",
      "language": "javascript",
      "description": "Checking call stack depth bounds.",
      "code": "# Handled at compiler execution layer"
    }
  ],
  "commonMistakes": [
    "Binding event listeners that trigger each other recursively, resulting in infinite loops.",
    "Setting object properties inside setter overrides using the same property name."
  ],
  "prevention": [
    "Ensure all recursive pathways have clear, tested exit base returns.",
    "Favor flat iteration algorithms over recursive structures where applicable."
  ],
  "faq": [
    {
      "question": "What is the call stack?",
      "answer": "The call stack is a mechanism the JavaScript engine uses to keep track of its place in a script that calls multiple functions (which function is currently running and which functions are called from within that function)."
    },
    {
      "question": "How large is the JavaScript call stack limit?",
      "answer": "It varies by browser and engine. Typically, the V8 engine limits call stacks to between 10,000 and 50,000 frames. Exceeding this limit triggers the error."
    },
    {
      "question": "How do I debug infinite recursion?",
      "answer": "Analyze the stack trace. It will show the same function name repeated hundreds of times. Add console.logs at the start of the function to inspect variable values."
    },
    {
      "question": "Does tail call optimization prevent this?",
      "answer": "Although part of ES6 specifications, tail call optimization is currently only supported in select browser engines (like Safari/JavaScriptCore). Do not rely on it in cross-browser applications."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Call Stack Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/Call_stack"
    }
  ],
  "relatedErrors": [
    "rangeerror"
  ],
  "quickFix": {
    "causes": [
      "Missing recursion stopping check",
      "Infinite getter/setter loop",
      "Circular event trigger"
    ],
    "checklist": [
      "Identify the recursive function name",
      "Define a base case return statement",
      "Verify getter/setter property naming",
      "Track execution loops"
    ],
    "estimatedTime": "3–15 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Unbounded recursion",
      "frequency": "60%"
    },
    {
      "scenario": "Getter/Setter loop property conflicts",
      "frequency": "25%"
    },
    {
      "scenario": "Circular event dispatchers",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Maximum call stack size exceeded Error: Root Causes &.",
  "seoDescription": "Encountering Maximum call stack size exceeded in JavaScript? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent."
};

export default errorData;
