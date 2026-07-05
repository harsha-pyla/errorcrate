import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "referenceerror",
  "name": "ReferenceError",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Language Exception",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A non-existent variable was referenced in code scope.",
  "meanDescription": "A ReferenceError is thrown by the JavaScript engine when your code attempts to access a variable name that does not exist or has not been declared inside the active scope context.",
  "causes": [
    "Undeclared Variables: Referencing variables that were never declared using let, const, or var.",
    "Spelling Discrepancies: Typographical errors inside variable spelling references.",
    "Scope Access: Referencing block-scoped variables outside their closing brackets."
  ],
  "solutions": [
    "Declare Variables: Always use const, let, or var declaration keywords.",
    "Check scope Boundaries: Verify that loop variables are declared within accessible blocks.",
    "Use typeof Check: Check if global elements exist safely without throwing errors using typeof."
  ],
  "example": {
    "title": "ReferenceError Variable Reference",
    "code": "const total = sum + 20;\n// Throws ReferenceError: sum is not defined",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Referencing Unresolved Variable",
    "code": "const result = x + 10;\n// Throws ReferenceError because x is not declared anywhere!",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "ReferenceError: x is not defined\n    at Object.<anonymous> (c:\\project\\test.js:1:16)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Safe Scope Variable Reference",
      "language": "javascript",
      "description": "Checking variable presence dynamically using typeof inside routes.",
      "code": "app.get('/config', (req, res) => {\n  if (typeof globalConfig !== 'undefined') {\n    return res.json(globalConfig);\n  }\n  res.status(500).json({ error: 'Global configuration is missing.' });\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Scope validation checks",
      "language": "javascript",
      "description": "Checking scope values.",
      "code": "# Handled at application layer"
    }
  ],
  "commonMistakes": [
    "Accessing block-scoped let/const variables outside the loop/if block brackets where they were initialized."
  ],
  "prevention": [
    "Use static code analysis tools (ESLint) to flag undeclared variables during development.",
    "Compile JavaScript using strict mode ('use strict')."
  ],
  "faq": [
    {
      "question": "What is a ReferenceError?",
      "answer": "It is a native JavaScript error thrown when you reference a variable name that does not exist or has not been initialized in the current scope context."
    },
    {
      "question": "What is the Temporal Dead Zone (TDZ)?",
      "answer": "It is the period between entering a block scope and when a `let` or `const` variable is declared. Referencing the variable in this zone throws a ReferenceError."
    },
    {
      "question": "How does ReferenceError differ from undefined?",
      "answer": "An undeclared variable throws a ReferenceError. A declared variable that has not been assigned a value resolves to the primitive value `undefined` without throwing an error."
    },
    {
      "question": "How do I verify if a variable is declared globally without throwing an error?",
      "answer": "Use the `typeof` check (e.g. `if (typeof someVar !== 'undefined') { ... }`) which is safe and never throws a ReferenceError."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS ReferenceError Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError"
    }
  ],
  "relatedErrors": [
    "typeerror"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Undeclared Variables",
      "Spelling Discrepancies",
      "Scope Access"
    ],
    "checklist": [
      "Declare Variables",
      "Check scope Boundaries",
      "Use typeof Check"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Undeclared Variables",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling Discrepancies",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Scope Access",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve ReferenceError — Node.js Debugging Guide",
  "seoDescription": "Troubleshoot ReferenceError in Node.js with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
