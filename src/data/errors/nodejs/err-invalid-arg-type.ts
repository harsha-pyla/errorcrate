import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-invalid-arg-type",
  "name": "ERR_INVALID_ARG_TYPE",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Core modules",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An argument of an incorrect type was passed to a Node.js API function.",
  "meanDescription": "The ERR_INVALID_ARG_TYPE error is thrown by Node.js core APIs (like fs, path, or crypto) when an argument passed to a built-in function fails runtime type verification checks.",
  "causes": [
    "Null/Undefined Inputs: Passing undefined values to fs/path functions requiring strings (e.g. fs.readFile(undefined)).",
    "Wrong Callback Formats: Forgetting to supply a callback function for asynchronous methods."
  ],
  "solutions": [
    "Validate Inputs: Check argument types before passing them to native APIs.",
    "Leverage TypeScript: Enforce compile-time type checking across modules.",
    "Provide Fallback Values: Supply sensible default variables when arguments might be null."
  ],
  "example": {
    "title": "ERR_INVALID_ARG_TYPE Parameter Call",
    "code": "const fs = require('fs');\n\n// Throws ERR_INVALID_ARG_TYPE because path must be string or Buffer, not number\nfs.readFile(12345, (err, data) => {});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Mismatched Parameter Call",
    "code": "const fs = require('fs');\n// Throws ERR_INVALID_ARG_TYPE because path must be string or Buffer, not number\nfs.readFile(12345, (err, data) => {});",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError [ERR_INVALID_ARG_TYPE]: The \"path\" argument must be of type string, Buffer, or URL. Received type number (12345)\n    at new NodeError (node:internal/errors:371:5)\n    at Object.readFile (node:fs:379:10) {\n  code: 'ERR_INVALID_ARG_TYPE'\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Zod API Schema Validation",
      "language": "javascript",
      "description": "Checking router parameters using Zod validation before invoking core Node file operations.",
      "code": "const { z } = require('zod');\n\nconst paramSchema = z.object({\n  filename: z.string().min(1)\n});\n\napp.get('/view', (req, res) => {\n  const result = paramSchema.safeParse(req.query);\n  if (!result.success) {\n    return res.status(400).json({ error: 'Invalid filename argument type.' });\n  }\n  fs.readFile(result.data.filename, (err, data) => {/*...*/});\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx Parameter Filter",
      "language": "nginx",
      "description": "Limiting query types at the proxy layer.",
      "code": "# Handled at application layer"
    }
  ],
  "commonMistakes": [
    "Assuming request parameters (like req.query.id) are always strings (they can be arrays if multiple parameters exist, throwing type errors downstream).",
    "Omitting callback functions in asynchronous methods."
  ],
  "prevention": [
    "Use TypeScript to build compile-time type gates.",
    "Check variables using helper functions before passing them to native APIs."
  ],
  "faq": [
    {
      "question": "What triggers ERR_INVALID_ARG_TYPE?",
      "answer": "It is thrown when a value passed to a Node.js built-in API function (like `path.join()`, `fs.readFile()`, or `crypto.hash()`) is of a type that the function cannot accept."
    },
    {
      "question": "How do I fix this error inside fs.readFile?",
      "answer": "Verify that the path argument you pass is a string, Buffer, or URL object. Avoid passing variables that could resolve to `undefined` or `null` under bad queries."
    },
    {
      "question": "Can TypeScript prevent ERR_INVALID_ARG_TYPE?",
      "answer": "Yes, absolutely. TypeScript compiler checks match function parameter structures with node type declarations, raising type warnings if you pass invalid arguments."
    },
    {
      "question": "Does this error crash the Node process?",
      "answer": "Yes, if it is not caught. It is a subclass of `TypeError` which halts script execution unless caught by try-catch blocks or global uncaughtException handlers."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js Error Docs",
      "url": "https://nodejs.org/api/errors.html"
    }
  ],
  "relatedErrors": [
    "typeerror",
    "err-out-of-range"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Null/Undefined Inputs",
      "Wrong Callback Formats"
    ],
    "checklist": [
      "Validate Inputs",
      "Leverage TypeScript",
      "Provide Fallback Values"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Null/Undefined Inputs",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Wrong Callback Formats",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix ERR_INVALID_ARG_TYPE in Node.js (With Examples)",
  "seoDescription": "Troubleshoot ERR_INVALID_ARG_TYPE in Node.js with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in."
};

export default errorData;
