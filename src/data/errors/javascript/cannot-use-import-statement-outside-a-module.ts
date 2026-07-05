import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "cannot-use-import-statement-outside-a-module",
  "name": "Cannot use import statement outside a module",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "SyntaxError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The browser attempted to compile ES module import statements in a script not declared as type=\"module\".",
  "meanDescription": "This SyntaxError occurs when the browser's JavaScript engine parses ES6 import/export statements inside a file that is loaded as a classic script. To utilize imports, the script tag must carry the type=\"module\" attribute.",
  "causes": [
    "Script tag missing type=\"module\" attribute in HTML.",
    "Using ESM syntax inside older browser engines lacking module capabilities.",
    "Bundler output conflicts leaving raw imports inside classic scripts."
  ],
  "solutions": [
    "Add type=\"module\" attribute to HTML script tags.",
    "Configure compilers to bundle modules into classic script outputs.",
    "Verify path names and relative file extensions."
  ],
  "example": {
    "title": "SyntaxError ESM Module Import",
    "code": "// Throws: Cannot use import statement outside a module if loaded as classic script\nimport { auth } from './auth.js';",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "import { auth } from './auth.js';",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "SyntaxError: Cannot use import statement outside a module\n    at <anonymous>:1:1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "HTML Script Tag Fix",
      "language": "html",
      "description": "Declaring scripts as modules inside HTML files.",
      "code": "<!-- Enables browser ESM support -->\n<script type=\"module\" src=\"app.js\"></script>"
    }
  ],
  "serverExamples": [
    {
      "name": "Bundler outputs checking",
      "language": "javascript",
      "description": "Webpack/Babel configurations.",
      "code": "# Handled at compiler compiler stage"
    }
  ],
  "commonMistakes": [
    "Omitting script type attributes when utilizing ES6 syntax directly in client files."
  ],
  "prevention": [
    "Standardize on Webpack/Vite bundlers to target backwards-compatible builds."
  ],
  "faq": [
    {
      "question": "Why do I need type=\"module\"?",
      "answer": "Because the JavaScript engine parses classic scripts and module scripts differently. Module scripts support ES6 features like `import` and `export` and execute in strict mode by default."
    },
    {
      "question": "Does type=\"module\" defer script execution?",
      "answer": "Yes. Module scripts are deferred automatically, meaning they execute only after the HTML document parser has finished loading."
    },
    {
      "question": "Can I use require() inside type=\"module\"?",
      "answer": "No. `require()` is a CommonJS module loader syntax and is not supported inside standard browser ES Modules. Use `import` instead."
    },
    {
      "question": "How do I resolve module paths?",
      "answer": "Relative imports must include file extensions (e.g. `import './file.js'`) in native browser module configurations."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Modules Guide",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules"
    }
  ],
  "relatedErrors": [
    "unexpected-token",
    "unexpected-end-of-input"
  ],
  "quickFix": {
    "causes": [
      "Script tag missing type=\"module\" attribute",
      "Browser doesn't support ES Modules",
      "Classic script contains import statement"
    ],
    "checklist": [
      "Add type=\"module\" to HTML script tag",
      "Check browser compatibility",
      "Verify bundler config is active",
      "Use relative paths with extensions"
    ],
    "estimatedTime": "1–4 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Missing type=\"module\" in HTML",
      "frequency": "70%"
    },
    {
      "scenario": "Bundler config outputs mismatch",
      "frequency": "20%"
    },
    {
      "scenario": "Browser engine compatibility issues",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Cannot use import statement outside a module in.",
  "seoDescription": "Resolve Cannot use import statement outside a module in JavaScript with this complete troubleshooting guide. Covers error causes, prevention strategies, code."
};

export default errorData;
