import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "x-is-not-a-function",
  "name": "x is not a function",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "TypeError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An attempt was made to call a value as a function, but the value is not callable.",
  "meanDescription": "The 'x is not a function' TypeError occurs when you attempt to invoke a variable or property as if it were a function (using parenthesis ()), but the variable contains a different type (such as a string, number, object, or undefined) that is not callable.",
  "causes": [
    "Typo in method names or spelling errors.",
    "Reassigning a function variable to a primitive value.",
    "Attempting to call array methods on objects that are not arrays.",
    "Invoking callback functions that were not passed to the wrapper function."
  ],
  "solutions": [
    "Check typeof value === 'function' before calling it.",
    "Double-check method spelling and match capitalization cases.",
    "Ensure modules or APIs are successfully imported.",
    "Provide fallback functions when callbacks are optional."
  ],
  "example": {
    "title": "TypeError Non Function Call",
    "code": "const age = 25;\n// Throws TypeError: age is not a function\nage();",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "const age = 25;\nage();",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError: age is not a function\n    at <anonymous>:2:1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Mismatched Array Methods",
      "language": "javascript",
      "description": "Calling array functions (like map or filter) on elements that are strings or normal objects.",
      "code": "const data = { names: \"John\" };\ntry {\n  // Throws TypeError because names is a string, not an array\n  data.names.map(n => console.log(n));\n} catch (err) {\n  console.error(err.message); // data.names.map is not a function\n}"
    },
    {
      "name": "Optional Callbacks Failures",
      "language": "javascript",
      "description": "Failing to check if arguments were supplied before execution.",
      "code": "function greet(callback) {\n  // Fix: callback?.();\n  callback();\n}\ntry {\n  greet(); // callback is undefined, executing callback() throws\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Node.js optional function checks",
      "language": "javascript",
      "description": "Checking function parameters.",
      "code": "# Handled at code level"
    }
  ],
  "commonMistakes": [
    "Assuming a third-party package exports a default function when it actually exports named bindings.",
    "Typoing capitalization on standard utility methods (e.g. calling getelementbyid instead of getElementById)."
  ],
  "prevention": [
    "Use TypeScript to guarantee that callables match signature definitions.",
    "Implement callback fallback assertions: `const fn = callback || (() => {})`."
  ],
  "faq": [
    {
      "question": "What does 'x is not a function' mean?",
      "answer": "It means you attempted to call a variable like a function using `()`, but the variable does not contain a callable function."
    },
    {
      "question": "How do I check if a variable is a function?",
      "answer": "Verify using the typeof operator: `if (typeof variable === 'function')`."
    },
    {
      "question": "Can optional chaining be used on functions?",
      "answer": "Yes. You can use the syntax `callback?.()` to invoke the function only if it is defined and callable."
    },
    {
      "question": "Why does this happen on array map?",
      "answer": "Because the variable you are calling `.map()` on is not an array. It could be an object, null, or undefined. Print the variable type using `Array.isArray(variable)`."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Functions Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"
    }
  ],
  "relatedErrors": [
    "cannot-read-properties-of-undefined",
    "cannot-read-properties-of-null"
  ],
  "quickFix": {
    "causes": [
      "Variable is a primitive value",
      "Typo in method name spelling",
      "Callback was not passed"
    ],
    "checklist": [
      "Check spelling of function name",
      "Check typeof variable",
      "Use function optional chaining (?.)",
      "Verify import signatures"
    ],
    "estimatedTime": "2–6 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Typo in method names",
      "frequency": "40%"
    },
    {
      "scenario": "Array method called on non-array",
      "frequency": "30%"
    },
    {
      "scenario": "Missing callback arguments",
      "frequency": "20%"
    },
    {
      "scenario": "Import resolver failures",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix x is not a function in JavaScript (With Examples)",
  "seoDescription": "Encountering x is not a function in JavaScript? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
