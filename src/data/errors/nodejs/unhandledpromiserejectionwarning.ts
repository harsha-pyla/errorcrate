import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unhandledpromiserejectionwarning",
  "name": "UnhandledPromiseRejectionWarning",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Promise Warning",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A promise was rejected but no catch handler was attached.",
  "meanDescription": "The UnhandledPromiseRejectionWarning occurs in Node.js when an asynchronous Promise is rejected (fails), but no catch handler (.catch() or try-catch block) is registered to capture the exception. Since Node.js v15, this warning is treated as a fatal crash error that terminates the process automatically.",
  "causes": [
    "Missing catch Chains: Leaving out .catch() blocks on async database queries or third-party fetches.",
    "Uncaught async functions: Throwing errors inside async functions without wrapper try-catch statements."
  ],
  "solutions": [
    "Implement Catch: Always append .catch() or wrap await statements inside try-catch structures.",
    "Global Rejection Listeners: Listen to the unhandledRejection process event globally to log errors before exiting.",
    "Use Async middleware wrappers: Automatically forward async route exceptions inside Express."
  ],
  "example": {
    "title": "UnhandledPromiseRejectionWarning trigger",
    "code": "const failingPromise = Promise.reject(new Error('DB Query failed!'));\n// Throws UnhandledPromiseRejectionWarning because no .catch is attached!",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Unhandled Rejection Script",
    "code": "const myPromise = Promise.reject(new Error('Database crashed!'));\n// Throws UnhandledPromiseRejectionWarning because no .catch is attached!",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "(node:1234) UnhandledPromiseRejectionWarning: Error: Database crashed!\n    at Object.<anonymous> (c:\\project\\test.js:1:34)\n(node:1234) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block...",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Async Error Handling Wrapper",
      "language": "javascript",
      "description": "Utilizing express-async-errors to forward rejected promises automatically to Express error handlers.",
      "code": "require('express-async-errors');\n\napp.get('/user', async (req, res) => {\n  const user = await db.fetchUser(); // Rejected promises are caught automatically\n  res.json(user);\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "PM2 Process Crash Catching",
      "language": "javascript",
      "description": "Logging and handling global process level rejections.",
      "code": "process.on('unhandledRejection', (reason, promise) => {\n  console.error('Unhandled Promise Rejection:', reason);\n  process.exit(1);\n});"
    }
  ],
  "commonMistakes": [
    "Assuming Node.js ignores unhandled rejections (since Node 15, unhandled promise rejections terminate/crash the application process automatically)."
  ],
  "prevention": [
    "Use static analysis linters (like ESLint rules for floating promises).",
    "Implement global process error monitors."
  ],
  "faq": [
    {
      "question": "Why does my Node.js application crash on unhandled rejections?",
      "answer": "Since Node.js version 15, the default behavior for unhandled promise rejections has been upgraded from printing a warning to terminating the process immediately with a non-zero exit code."
    },
    {
      "question": "How do I catch all unhandled rejections globally?",
      "answer": "Add a process event listener: `process.on('unhandledRejection', (reason, promise) => { ... });` to log the failure and close connection resources."
    },
    {
      "question": "Does async/await require try-catch?",
      "answer": "Yes. If an await statement fails and is not wrapped in a try-catch block, it will result in an unhandled promise rejection."
    },
    {
      "question": "Can I ignore these warnings?",
      "answer": "No. In modern Node.js, ignoring rejections leads to process crashes, exposing applications to denial of service."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js Process Events",
      "url": "https://nodejs.org/api/process.html"
    }
  ],
  "relatedErrors": [
    "aborterror"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Missing catch Chains",
      "Uncaught async functions"
    ],
    "checklist": [
      "Implement Catch",
      "Global Rejection Listeners",
      "Use Async middleware wrappers"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing catch Chains",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Uncaught async functions",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix UnhandledPromiseRejectionWarning in Node.js.",
  "seoDescription": "Learn how to fix UnhandledPromiseRejectionWarning in Node.js. Understand the root causes, see real code examples, and apply verified solutions to resolve this."
};

export default errorData;
