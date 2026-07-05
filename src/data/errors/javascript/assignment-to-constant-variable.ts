import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "assignment-to-constant-variable",
  "name": "Assignment to constant variable",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "TypeError",
    "Easy"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An attempt was made to reassign a value to a variable declared with const.",
  "meanDescription": "This TypeError is thrown when you attempt to change the reference of a variable declared with the const keyword. Const declarations create read-only references to values. You cannot reassign them (e.g. const x = 5; x = 6;). Note that for objects declared with const, you can still modify their properties (like const obj = {}; obj.name = 'John'), but you cannot reassign the object itself.",
  "causes": [
    "Reassigning const variables in loops (e.g. inside for loops).",
    "Accidentally reusing variable names declared with const.",
    "Typing reassignment operators (=) instead of comparison operators (===) on const variables."
  ],
  "solutions": [
    "Use let instead of const if the variable needs to be reassigned.",
    "Modify object properties instead of reassigning the parent object reference.",
    "Double check conditions to ensure comparison operators (===) are used."
  ],
  "example": {
    "title": "TypeError Const Reassignment",
    "code": "const count = 1;\n// Throws TypeError: Assignment to constant variable.\ncount = 2;",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "const count = 1;\ncount = 2;",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError: Assignment to constant variable.\n    at <anonymous>:2:7",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Const Loop Iterator Error",
      "language": "javascript",
      "description": "Declaring loop counters using const instead of let.",
      "code": "try {\n  // Throws error on first loop increment\n  for (const i = 0; i < 5; i++) {\n    console.log(i);\n  }\n} catch (err) {\n  console.error(err.message); // Assignment to constant variable.\n}"
    },
    {
      "name": "Comparison Operator Typo",
      "language": "javascript",
      "description": "Accidentally typing reassignment (=) inside validations rather than comparison (===).",
      "code": "const active = true;\ntry {\n  if (active = false) { // Throws assignment error\n    console.log(\"Inactive\");\n  }\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Node.js configuration bindings",
      "language": "javascript",
      "description": "Checking variable scopes.",
      "code": "# Handled at code level"
    }
  ],
  "commonMistakes": [
    "Assuming const variables protect object keys from modification (objects fields can always be modified; only the primary variable reference is constant)."
  ],
  "prevention": [
    "Use let by default if you expect variables to change their values.",
    "Use Object.freeze(obj) to make object structures completely immutable."
  ],
  "faq": [
    {
      "question": "Can I change properties of a const object?",
      "answer": "Yes. Const only prevents reassignment of the variable name identifier to a new reference. You can add, delete, or change properties of arrays and objects declared with const."
    },
    {
      "question": "Should I use let or const?",
      "answer": "Use const by default for all variables that do not require reassignment. This makes your intent clear and prevents accidental reassignments. Use let only when values must be updated."
    },
    {
      "question": "What is the difference between let, const, and var?",
      "answer": "Var has function scope, can be redeclared, and is hoisted. Let has block scope and cannot be redeclared. Const has block scope, cannot be redeclared, and cannot be reassigned."
    },
    {
      "question": "Does Object.freeze prevent property modification?",
      "answer": "Yes. Calling `Object.freeze(obj)` prevents properties from being added, deleted, or updated, making the object immutable."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Const Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const"
    }
  ],
  "relatedErrors": [
    "variable-is-not-defined"
  ],
  "quickFix": {
    "causes": [
      "Reassigned const variable",
      "Const loop iterator",
      "Comparison typo (= instead of ===)"
    ],
    "checklist": [
      "Change declaration to let",
      "Use === for comparison",
      "Check loop iterator declarations",
      "Modify object keys directly"
    ],
    "estimatedTime": "1–3 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Reassignment of const",
      "frequency": "50%"
    },
    {
      "scenario": "Const loop iterators",
      "frequency": "30%"
    },
    {
      "scenario": "Comparison operator typos",
      "frequency": "20%"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Assignment to constant variable in JavaScript — Causes.",
  "seoDescription": "Troubleshoot Assignment to constant variable in JavaScript with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent."
};

export default errorData;
