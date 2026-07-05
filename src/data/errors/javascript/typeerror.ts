import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "typeerror",
  "name": "TypeError",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "Runtime Error",
    "Easy"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A TypeError occurs when a value is used in a way that is not allowed for its type.",
  "meanDescription": "A TypeError is a native JavaScript runtime error thrown when an operation is performed on a value that is incompatible with the expected type. Common scenarios include attempting to invoke a non-callable object (like calling a number as a function), querying properties on null or undefined values, or violating language constraints such as reassigning a read-only constant variable.\n\nUnlike compile-time errors, a TypeError is triggered dynamically when the JavaScript engine attempts to execute the invalid operation at runtime, causing execution to halt unless handled within a try-catch block.",
  "causes": [
    "Accessing properties of undefined: Attempting to read a field of a variable that holds the value undefined.",
    "Accessing properties of null: Trying to look up keys or call functions on a null object.",
    "Calling a non-function: Executing parenthesis () on variables containing strings, numbers, arrays, or objects.",
    "Incorrect object type: Executing native methods on objects that do not define them.",
    "Invalid API response: Assuming an API returns defined JSON structures when it actually returns empty or null payloads.",
    "Incorrect DOM element lookup: Calling methods (like addEventListener) on a selector query that returned null.",
    "Writing to const: Reassigning values to variables declared with the const keyword.",
    "Invalid method usage: Using values in native method calls that do not match the expected API signature."
  ],
  "solutions": [
    "Check if a variable is undefined: Ensure values are fully initialized before accessing subfields.",
    "Check if a variable is null: Implement explicit checks to safeguard database null properties.",
    "Use optional chaining: Utilize the user?.name syntax to return undefined safely instead of crashing.",
    "Validate API responses: Parse backend responses before accessing nested fields.",
    "Use typeof guards: Verify functions exist (e.g. if (typeof value === 'function') { value(); }) before execution.",
    "Check DOM elements: Confirm document.querySelector results exist before adding event listeners."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "TypeError: Cannot read properties of undefined (reading 'name')\n// or\nTypeError: age is not a function\n// or\nTypeError: Assignment to constant variable.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Cannot read properties of undefined",
    "code": "const user = undefined;\nconsole.log(user.name);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Fix: Initialize Object",
    "code": "const user = {\n    name: \"John\"\n};\nconsole.log(user.name);",
    "language": "javascript"
  },
  "frameworkExamples": [
    {
      "name": "Calling a Non-Function",
      "language": "javascript",
      "description": "Attempting to invoke a non-function variable.",
      "code": "const age = 25;\ntry {\n  age();\n} catch (err) {\n  console.error(err.message); // age is not a function\n}"
    },
    {
      "name": "Assignment to const",
      "language": "javascript",
      "description": "Reassigning a constant variable throws a TypeError.",
      "code": "const name = \"John\";\ntry {\n  name = \"Alex\";\n} catch (err) {\n  console.error(err.message); // Assignment to constant variable.\n}"
    },
    {
      "name": "React Null Rendering",
      "language": "javascript",
      "description": "Accessing properties on null objects inside React components.",
      "code": "function App() {\n    const user = null;\n    // Fix: return <h1>{user?.name || 'Guest'}</h1>\n    return <h1>{user.name}</h1>;\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Node.js fs call type issue",
      "language": "javascript",
      "description": "Passing wrong parameter arguments to Node.js core filesystem modules.",
      "code": "const fs = require(\"fs\");\ntry {\n  fs.readFileSync(); // Throws TypeError: The \"path\" argument must be of type string.\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "commonMistakes": [
    "Assuming external JSON payloads always contain nested child fields.",
    "Executing document.querySelector queries without verifying if elements exist in the DOM environment.",
    "Reusing constant bindings in loops where variables must be updated (use let instead)."
  ],
  "prevention": [
    "Always validate external data inputs.",
    "Prefer optional chaining (?.) when querying deep object properties.",
    "Check for null and undefined definitions explicitly.",
    "Use TypeScript or JSDoc annotations to catch typing issues at compile time."
  ],
  "faq": [
    {
      "question": "Is TypeError a syntax error?",
      "answer": "No. A TypeError occurs while the code is running, whereas a SyntaxError prevents the code from running at all."
    },
    {
      "question": "Is TypeError only for browsers?",
      "answer": "No. It can occur in browsers, Node.js, Deno, Bun, and other JavaScript runtimes."
    },
    {
      "question": "Can TypeScript prevent TypeError?",
      "answer": "TypeScript can catch many type-related mistakes during development, but it cannot prevent every runtime TypeError."
    },
    {
      "question": "Is TypeError always caused by undefined?",
      "answer": "No. It can also be caused by invalid function calls, null values, incorrect arguments, or incompatible object types."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs – TypeError",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"
    },
    {
      "name": "ECMAScript Language Specification",
      "url": "https://tc39.es/ecma262/"
    }
  ],
  "relatedErrors": [
    "referenceerror",
    "syntaxerror",
    "rangeerror"
  ],
  "quickFix": {
    "causes": [
      "You accessed undefined",
      "You accessed null",
      "You called something that isn't a function"
    ],
    "checklist": [
      "Check the variable value",
      "Use console.log() to debug",
      "Verify API response payload",
      "Try optional chaining (?.)"
    ],
    "estimatedTime": "2–10 minutes"
  },
  "comments": [],
  "seoTitle": "Fix TypeError in JavaScript — Causes & Solutions",
  "seoDescription": "Learn how to fix TypeError in JavaScript. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
