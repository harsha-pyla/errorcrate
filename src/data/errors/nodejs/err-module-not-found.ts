import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-module-not-found",
  "name": "ERR_MODULE_NOT_FOUND",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Core modules",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "ECMAScript module (ESM) import statement failed to resolve.",
  "meanDescription": "The ERR_MODULE_NOT_FOUND error occurs when an ES Module (ESM) import statement fails to resolve. Unlike CommonJS require(), which resolves file extensions automatically, ES Modules inside Node.js mandate explicit file extensions (e.g. .js or .mjs) in relative paths.",
  "causes": [
    "Omitted File Extensions: Attempting relative imports without adding .js or .mjs extensions (e.g. import './utils').",
    "Missing module field targets inside third-party packages.",
    "Forgetting to define 'type': 'module' inside package.json while executing ESM import syntax."
  ],
  "solutions": [
    "Append Extensions: Ensure relative paths include extensions (e.g. import './utils.js').",
    "Declare Module Type: Add 'type': 'module' to package.json configurations.",
    "Check Package exports: Ensure module entry points are defined correctly."
  ],
  "example": {
    "title": "ERR_MODULE_NOT_FOUND ESM Import Failure",
    "code": "// Throws ERR_MODULE_NOT_FOUND because relative extension is omitted\nimport { helper } from './utils';",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "ESM Mismatched Import",
    "code": "// Throws ERR_MODULE_NOT_FOUND in ESM because extension is omitted\nimport { helper } from './utils';",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "node:internal/errors:464\n    ErrorCaptureStackTrace(err);\n    ^\nError [ERR_MODULE_NOT_FOUND]: Cannot find module 'c:\\project\\utils' imported from c:\\project\\index.js\n  code: 'ERR_MODULE_NOT_FOUND'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express ESM Routes Config",
      "language": "javascript",
      "description": "Setting up ES module routing correctly inside Express.",
      "code": "import express from 'express';\nimport { userRouter } from './routes/users.js'; // Note the mandatory .js extension\n\nconst app = express();\napp.use('/users', userRouter);"
    }
  ],
  "serverExamples": [
    {
      "name": "Bundling ESM",
      "language": "javascript",
      "description": "Vite/esbuild scripts automatically resolving extensions during production compilation.",
      "code": "# Compiles files to standard builds"
    }
  ],
  "commonMistakes": [
    "Expecting Node.js ESM to resolve paths without extensions exactly like Webpack or TypeScript compilers do.",
    "Omitting 'type': 'module' inside package.json while executing ESM code."
  ],
  "prevention": [
    "Configure ESLint rules to enforce explicit ESM import extensions.",
    "Use modern module bundlers (like Vite, esbuild, or TSUp) to compile outputs."
  ],
  "faq": [
    {
      "question": "Why does ESM require file extensions in Node.js?",
      "answer": "To match browser-native ESM specs. Browsers do not perform filesystem guesses (checking for .js, .json, index.js) like CommonJS did, so Node's ESM implementation mandates explicit extensions."
    },
    {
      "question": "What is the difference between MODULE_NOT_FOUND and ERR_MODULE_NOT_FOUND?",
      "answer": "MODULE_NOT_FOUND is thrown by CommonJS (`require()`). ERR_MODULE_NOT_FOUND is thrown by ES Modules (`import`)."
    },
    {
      "question": "How do I import JSON files in Node ESM?",
      "answer": "You must use import assertions/attributes (e.g. `import data from './data.json' with { type: 'json' };` or `assert { type: 'json' }` depending on your Node.js version)."
    },
    {
      "question": "Can I use directory imports (import './folder') in ESM?",
      "answer": "No. ESM does not resolve `index.js` automatically. You must specify the full file path (e.g. `import './folder/index.js'`)."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js ECMAScript Modules Docs",
      "url": "https://nodejs.org/api/esm.html#resolution-algorithm"
    }
  ],
  "relatedErrors": [
    "module_not_found",
    "err-require-esm"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Omitted File Extensions",
      "Missing module field targets inside",
      "Forgetting to define 'type'"
    ],
    "checklist": [
      "Append Extensions",
      "Declare Module Type",
      "Check Package exports"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Omitted File Extensions",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing module field targets inside",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Forgetting to define 'type'",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot ERR_MODULE_NOT_FOUND — Node.js Error Guide",
  "seoDescription": "ERR_MODULE_NOT_FOUND in Node.js — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
