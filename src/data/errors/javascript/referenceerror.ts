import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "referenceerror",
  "name": "ReferenceError",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "Runtime Error",
    "Easy"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A ReferenceError occurs when JavaScript tries to access a variable, function, or identifier that does not exist in the current scope.",
  "meanDescription": "A ReferenceError indicates that an invalid reference has been detected. In JavaScript, this occurs when code attempts to look up or write to a variable identifier that hasn't been declared in any active execution scope (such as typos, missing declarations, or accessing block-scoped variables outside their local boundaries). It also occurs when you reference standard globals belonging strictly to other runtimes, like accessing 'window' inside Node.js or 'process' inside a browser client.",
  "causes": [
    "Variable is not declared: Accessing variables without declaring them using let, const, or var first.",
    "Typographical errors: Mispelled names (e.g. typing mesage instead of message).",
    "Accessing let or const before initialization: Accessing block-scoped variables in their Temporal Dead Zone (TDZ).",
    "Using browser globals in Node.js: Referencing browser DOM structures (like window, document) on the server side.",
    "Using Node.js globals in the browser: Accessing server process variables (like process.env) directly in browser code.",
    "Scope issues: Referencing local variables outside their function closures.",
    "Import/export mistakes: Invoking functions that weren't successfully imported.",
    "Deleted or unavailable global objects: Calling APIs that have been removed from the environment."
  ],
  "solutions": [
    "Declare variables before using them: Ensure all identifiers are declared (e.g. const name = 'John';) before lookup.",
    "Check spelling: Match variable cases and spelling names exactly.",
    "Ensure correct scoping: Scope variables globally or pass them through function parameters.",
    "Import the required modules: Verify import signatures match exports correctly.",
    "Verify runtime environment context: Guard environment APIs (e.g., check typeof window !== 'undefined' before calling browser globals)."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "ReferenceError: username is not defined\n// or\nReferenceError: Cannot access 'user' before initialization\n// or\nReferenceError: window is not defined",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Variable is not defined",
    "code": "console.log(username);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Fix: Declare Variable",
    "code": "const username = \"John\";\nconsole.log(username);",
    "language": "javascript"
  },
  "frameworkExamples": [
    {
      "name": "Access before initialization (TDZ)",
      "language": "javascript",
      "description": "Accessing block-scoped let/const bindings before they are declared raises a ReferenceError due to the Temporal Dead Zone.",
      "code": "try {\n  console.log(user);\n  let user = \"Alex\";\n} catch (err) {\n  console.error(err.message); // Cannot access 'user' before initialization\n}"
    },
    {
      "name": "Scope error",
      "language": "javascript",
      "description": "Block-scoped variables are not visible outside their parent scopes.",
      "code": "function login() {\n    const token = \"abc123\";\n}\n\ntry {\n  console.log(token);\n} catch (err) {\n  console.error(err.message); // token is not defined\n}"
    },
    {
      "name": "Browser Environment Mismatch",
      "language": "javascript",
      "description": "Accessing Node.js globals directly in a web client triggers a ReferenceError.",
      "code": "try {\n  console.log(process.env.NODE_ENV);\n} catch (err) {\n  console.error(err.message); // process is not defined\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Node.js Environment Mismatch",
      "language": "javascript",
      "description": "Accessing browser DOM window structures directly inside Node.js scripts raises ReferenceError.",
      "code": "try {\n  console.log(window.location);\n} catch (err) {\n  console.error(err.message); // window is not defined\n}"
    }
  ],
  "commonMistakes": [
    "Referencing variables before declaring them, expecting JavaScript hoisting rules (which only apply to var declarations, not let/const).",
    "Typoing import variables or using server-side configurations inside browser-targeted code packages."
  ],
  "prevention": [
    "Standardize on const and let declarations to prevent implicit global creation.",
    "Implement static code validation (ESLint) to flag undefined references during development.",
    "Use TypeScript for enhanced autocomplete and static type safety."
  ],
  "faq": [
    {
      "question": "What causes a ReferenceError?",
      "answer": "It happens when JavaScript cannot find a variable or identifier in the current scope."
    },
    {
      "question": "Is ReferenceError a compile-time error?",
      "answer": "No. It is a runtime error that occurs while the code is executing."
    },
    {
      "question": "Can let cause a ReferenceError?",
      "answer": "Yes. Accessing a let or const variable before it has been initialized triggers a ReferenceError due to the temporal dead zone."
    },
    {
      "question": "What's the difference between ReferenceError and TypeError?",
      "answer": "A ReferenceError means the variable cannot be found. A TypeError means the variable exists, but you're using it incorrectly (for example, calling a number as if it were a function)."
    },
    {
      "question": "Can TypeScript prevent ReferenceError?",
      "answer": "TypeScript can catch many undefined identifier issues during development, but runtime conditions and dynamically loaded code can still produce ReferenceErrors."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs – ReferenceError",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"
    },
    {
      "name": "ECMAScript Language Specification",
      "url": "https://tc39.es/ecma262/"
    }
  ],
  "relatedErrors": [
    "typeerror",
    "syntaxerror",
    "rangeerror"
  ],
  "quickFix": {
    "causes": [
      "Variable name has typo",
      "Variable was never declared",
      "Accessing let/const before initialization (Temporal Dead Zone)"
    ],
    "checklist": [
      "Check spelling of the variable",
      "Ensure variable is declared in active scope",
      "Import the module correctly",
      "Verify variable environment (browser vs Node.js)"
    ],
    "estimatedTime": "2–5 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Misspelled variable name",
      "frequency": "40%"
    },
    {
      "scenario": "Variable not declared",
      "frequency": "25%"
    },
    {
      "scenario": "Access before initialization (TDZ)",
      "frequency": "15%"
    },
    {
      "scenario": "Browser vs Node.js globals",
      "frequency": "10%"
    },
    {
      "scenario": "Import/export mistakes",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "ReferenceError: Complete JavaScript Troubleshooting Guide",
  "seoDescription": "Troubleshoot ReferenceError in JavaScript with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
