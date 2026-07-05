import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "variable-is-not-defined",
  "name": "Variable is not defined",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "ReferenceError",
    "Easy"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An attempt was made to reference a variable that does not exist in any scope.",
  "meanDescription": "This ReferenceError occurs when the JavaScript engine attempts to resolve an identifier (variable name) that has not been declared in the active execution scope or parent scope chain.",
  "causes": [
    "Typographical errors in variable names.",
    "Accessing variables before declaring them (let/const TDZ rules).",
    "Referencing block-scoped variables outside their loop or condition brackets."
  ],
  "solutions": [
    "Always declare variables using let, const, or var before lookups.",
    "Verify spelling names and match capitalization cases exactly.",
    "Keep variable declarations within the visible block scope."
  ],
  "example": {
    "title": "ReferenceError Variable Not Found",
    "code": "// Throws ReferenceError: username is not defined\nconsole.log(username);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "console.log(username);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "ReferenceError: username is not defined\n    at <anonymous>:2:13",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Spelling Typos",
      "language": "javascript",
      "description": "Small spelling mistakes trigger ReferenceError since variables resolve to missing scope namespaces.",
      "code": "const greeting = \"Hello\";\ntry {\n  console.log(geeting); // typo here\n} catch (err) {\n  console.error(err.message); // geeting is not defined\n}"
    },
    {
      "name": "Block Scope Boundaries",
      "language": "javascript",
      "description": "Block variables are not visible outside their parent scopes.",
      "code": "try {\n  if (true) {\n    const temp = 99;\n  }\n  console.log(temp); // temp is out of scope\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Node.js scope checking",
      "language": "javascript",
      "description": "Checking variables.",
      "code": "# Handled at code level"
    }
  ],
  "commonMistakes": [
    "Forgetting to declare variables before assigning values (creating accidental globals in non-strict mode, throwing ReferenceErrors in strict mode)."
  ],
  "prevention": [
    "Enable 'use strict' mode globally to catch silent scoping errors.",
    "Enable ESLint rules to flag undeclared variable names."
  ],
  "faq": [
    {
      "question": "How does this differ from undefined?",
      "answer": "A variable is undefined when it has been declared but has no value assigned to it yet. A ReferenceError is thrown when the variable has not been declared at all in the active scope."
    },
    {
      "question": "How do I check if a variable exists safely?",
      "answer": "Use the typeof check: `if (typeof someVar !== 'undefined')` which does not throw a ReferenceError if the variable is missing."
    },
    {
      "question": "Can ESLint detect this?",
      "answer": "Yes, absolutely. The ESLint rule `no-undef` checks for undeclared variables and flags them during coding."
    },
    {
      "question": "Does hoisting prevent ReferenceError?",
      "answer": "Only for var declarations. Var declarations are hoisted to the top of their scope and initialized to undefined. Let and const are hoisted but not initialized, leaving them in the Temporal Dead Zone (TDZ) where lookup triggers a ReferenceError."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Scopes Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/Scope"
    }
  ],
  "relatedErrors": [
    "assignment-to-constant-variable"
  ],
  "quickFix": {
    "causes": [
      "Typo in spelling",
      "Undeclared variable",
      "Out of scope reference"
    ],
    "checklist": [
      "Double-check variable spelling",
      "Use typeof to check presence",
      "Verify scoping blocks",
      "Add variable declaration"
    ],
    "estimatedTime": "1–4 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Spelling typos",
      "frequency": "50%"
    },
    {
      "scenario": "Undeclared variables",
      "frequency": "30%"
    },
    {
      "scenario": "Scope boundaries violations",
      "frequency": "20%"
    }
  ],
  "comments": [],
  "seoTitle": "Variable is not defined Explained: Causes, Fixes &.",
  "seoDescription": "Fix Variable is not defined fast. This JavaScript debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world."
};

export default errorData;
