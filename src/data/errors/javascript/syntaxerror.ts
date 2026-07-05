import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "syntaxerror",
  "name": "SyntaxError",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "Parse Error",
    "Easy"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A SyntaxError occurs when JavaScript encounters code that does not follow the language's syntax rules.",
  "meanDescription": "A SyntaxError is thrown when the JavaScript engine parses code that violates the grammatical rules of the language. Unlike TypeError or ReferenceError, a SyntaxError occurs during compilation/parsing before the program starts running. Because the engine cannot construct an Abstract Syntax Tree (AST), it halts execution immediately, preventing any part of the script from executing.",
  "causes": [
    "Missing parentheses: Forgetting to close function calls or control declarations (e.g. if blocks).",
    "Missing curly braces: Omitting block delimiters for functions, classes, or objects.",
    "Missing square brackets: Leaving arrays or indexed calls unclosed.",
    "Missing quotation marks: Failing to close string literals or template literals.",
    "Missing commas: Leaving out separating commas in arrays or objects keys.",
    "Invalid JavaScript keywords: Typing keywords incorrectly or referencing variables named after reserved words.",
    "Incorrect import/export syntax: Mismatching module structures.",
    "Unexpected tokens: Adding stray brackets or symbols inside expressions.",
    "Invalid JSON: Passing malformed JSON structures to JSON.parse().",
    "Duplicate parameter names: Declaring identical function parameter names under strict mode.",
    "Invalid template literals: Formatting template tags incorrectly."
  ],
  "solutions": [
    "Read the error message carefully: Target the specific token causing the parser failure.",
    "Check the reported line number: Focus on the line where the mismatch is detected.",
    "Check the line above the reported location: Often, missing semicolons or braces on previous lines trigger errors on the next line.",
    "Match all opening and closing elements: Verify matching parentheses, brackets, and braces.",
    "Verify commas and quotes: Ensure all items are separated by commas and strings are correctly enclosed.",
    "Validate JSON strings: Double check JSON formatting matches strict string regulations before parsing."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "SyntaxError: missing ) after argument list\n// or\nSyntaxError: Unexpected token '}'\n// or\nSyntaxError: Unexpected identifier",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Missing Parenthesis",
    "code": "console.log(\"Hello\"",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Fix: Close Parenthesis",
    "code": "console.log(\"Hello\");",
    "language": "javascript"
  },
  "frameworkExamples": [
    {
      "name": "Unexpected Token",
      "language": "javascript",
      "description": "Failing to align object braces correctly throws unexpected token parser errors.",
      "code": "try {\n  // Triggering stray bracket error\n  const user = { name: \"John\", };\n  }\n} catch (err) {\n  // SyntaxErrors cannot be caught at runtime if they reside in the main script\n}"
    },
    {
      "name": "Missing Curly Braces",
      "language": "javascript",
      "description": "Failing to close function bodies.",
      "code": "function greet() {\n  console.log(\"Hello\");\n  // Missing closing brace triggers Unexpected end of input"
    },
    {
      "name": "Missing Comma",
      "language": "javascript",
      "description": "Omitting object commas.",
      "code": "const person = {\n  name: \"John\"\n  age: 25 // Throws Unexpected identifier\n};"
    },
    {
      "name": "Duplicate Parameter strict mode",
      "language": "javascript",
      "description": "Strict mode enforces unique parameter variables.",
      "code": "\"use strict\";\nfunction add(a, a) {\n  // Throws: Duplicate parameter name not allowed\n  return a;\n}"
    },
    {
      "name": "Invalid Arrow Function",
      "language": "javascript",
      "description": "Arrow functions require parameter assignment tokens.",
      "code": "const sum => {\n  // Throws Unexpected token '=>'\n  return 5;\n};"
    },
    {
      "name": "Unterminated String",
      "language": "javascript",
      "description": "Strings must be closed on the same line unless template literals are used.",
      "code": "const name = \"John; // Throws Invalid or unexpected token"
    },
    {
      "name": "Missing Closing Bracket",
      "language": "javascript",
      "description": "Arrays must be closed with square brackets.",
      "code": "const numbers = [1,2,3; // Throws Unexpected token ';'"
    }
  ],
  "serverExamples": [
    {
      "name": "Invalid JSON Parse in Node.js",
      "language": "javascript",
      "description": "Attempting to parse single-quoted JSON strings throws SyntaxError.",
      "code": "try {\n  JSON.parse(\"{name:'John'}\"); // Throws Unexpected token n in JSON\n} catch (err) {\n  console.error(err.message);\n}"
    },
    {
      "name": "Invalid Import Syntax",
      "language": "javascript",
      "description": "Imports must carry from string literals.",
      "code": "import React from; // Throws Unexpected token ';'"
    }
  ],
  "commonMistakes": [
    "Writing single-quoted keys in JSON strings (always use double-quotes: '{\"key\":\"value\"}').",
    "Missing parentheses in arrow function parameters when utilizing multiple arguments.",
    "Editing minified production files directly, leading to accidental character truncation."
  ],
  "prevention": [
    "Use modern IDEs (like VS Code) that feature live syntax checking.",
    "Integrate ESLint and Prettier within your save-actions configuration.",
    "Always run tests and lint checks in CI/CD pipeline steps."
  ],
  "faq": [
    {
      "question": "What is a SyntaxError?",
      "answer": "A SyntaxError means your JavaScript code is not written according to the language's grammar, so it cannot be parsed."
    },
    {
      "question": "Does a SyntaxError stop execution?",
      "answer": "Yes. JavaScript cannot execute code containing a SyntaxError until the syntax is corrected."
    },
    {
      "question": "Is JSON.parse() SyntaxError the same?",
      "answer": "It's a SyntaxError, but it's specifically thrown when the JSON string is invalid."
    },
    {
      "question": "Can ESLint detect SyntaxErrors?",
      "answer": "Yes. ESLint and most modern editors detect many syntax problems before you run your code."
    },
    {
      "question": "Can TypeScript prevent SyntaxErrors?",
      "answer": "TypeScript uses JavaScript syntax, so it also reports syntax errors during development. However, build tools and editors usually catch them before your application runs."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs – SyntaxError",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"
    },
    {
      "name": "ECMAScript Language Specification",
      "url": "https://tc39.es/ecma262/"
    }
  ],
  "relatedErrors": [
    "typeerror",
    "referenceerror",
    "rangeerror"
  ],
  "quickFix": {
    "causes": [
      "Unmatched braces/brackets",
      "Missing quotes/commas",
      "Invalid JSON string format"
    ],
    "checklist": [
      "Check the error line number",
      "Verify closing braces/brackets",
      "Inspect quotes matching",
      "Validate JSON syntax"
    ],
    "estimatedTime": "1–5 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Unmatched parentheses/braces",
      "frequency": "35%"
    },
    {
      "scenario": "Missing commas/quotes",
      "frequency": "30%"
    },
    {
      "scenario": "Invalid JSON strings",
      "frequency": "15%"
    },
    {
      "scenario": "Missing semicolons/identifiers",
      "frequency": "10%"
    },
    {
      "scenario": "Mismatched import syntax",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Debug SyntaxError in JavaScript — Step-by-Step Fix",
  "seoDescription": "SyntaxError in JavaScript — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
