import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-require-esm",
  "name": "ERR_REQUIRE_ESM",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Core modules",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "Attempted to require() an ES Module.",
  "meanDescription": "The ERR_REQUIRE_ESM error is thrown when a CommonJS script calls require() to load a module that has been compiled exclusively as an ES Module (ESM). Since ES Modules are loaded asynchronously, CommonJS synchronous require() functions cannot process them natively.",
  "causes": [
    "Requiring ESM Package: A target npm dependency (like node-fetch v3 or chalk v5) is strictly ESM-only.",
    "Self require(): Running require() on a local file that has package.json type config set to 'module'."
  ],
  "solutions": [
    "Use Dynamic Imports: Utilize asynchronous import() statements: const fetch = await import('node-fetch').",
    "Upgrade Project to ESM: Set 'type': 'module' inside your package.json and migration require to import statements.",
    "Downgrade Dependency: Install a previous version of the target package that still supports CommonJS."
  ],
  "example": {
    "title": "ERR_REQUIRE_ESM require ESM package",
    "code": "// Throws ERR_REQUIRE_ESM if node-fetch is ESM-only\nconst fetch = require('node-fetch');",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "CommonJS require ESM package",
    "code": "// Throws ERR_REQUIRE_ESM if node-fetch is ESM-only\nconst fetch = require('node-fetch');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error [ERR_REQUIRE_ESM]: require() of ES Module c:\\project\\node_modules\\node-fetch\\src\\index.js from c:\\project\\test.js not supported.\nInstead change the require of index.js in test.js to a dynamic import() which is available in all CommonJS modules.\n  code: 'ERR_REQUIRE_ESM'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Async Dynamic Import",
      "language": "javascript",
      "description": "Loading ESM dependencies dynamically inside an Express route handler.",
      "code": "app.post('/fetch-data', async (req, res, next) => {\n  try {\n    const { default: fetch } = await import('node-fetch');\n    const response = await fetch('https://api.com');\n    res.json(await response.json());\n  } catch (err) {\n    next(err);\n  }\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Next.js ESM Transpilation",
      "language": "javascript",
      "description": "Tuning next.config.js to transpile strict ESM modules.",
      "code": "// next.config.js\nmodule.exports = {\n  transpilePackages: ['node-fetch'],\n};"
    }
  ],
  "commonMistakes": [
    "Assuming all npm packages support CommonJS require() statements in older Node.js versions.",
    "Attempting to write top-level await in CommonJS scripts."
  ],
  "prevention": [
    "Standardize on ESM ('type': 'module' inside package.json) for all new Node.js projects.",
    "Check package packaging details before updating dependencies."
  ],
  "faq": [
    {
      "question": "Why does Node.js not allow require() on ES Modules?",
      "answer": "Because ES Modules are loaded asynchronously during compile phases, whereas CommonJS `require()` is strictly synchronous. Sync operations cannot block thread execution to wait for async imports."
    },
    {
      "question": "How do I load an ESM package inside a CommonJS file?",
      "answer": "Use dynamic imports: `import('package-name')`. Since it returns a promise, you can resolve it using `await` inside async functions."
    },
    {
      "question": "What is a 'Dual Module' package?",
      "answer": "A dual module package provides both CommonJS (`exports.require`) and ES Module (`exports.import`) builds in its package.json configuration, allowing both require and import to work."
    },
    {
      "question": "How do I check if an npm package is ESM-only?",
      "answer": "Inspect the package's `package.json`. If it contains 'type': 'module' and lacks a CommonJS entry file, it is ESM-only."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js ESM Docs",
      "url": "https://nodejs.org/api/esm.html"
    }
  ],
  "relatedErrors": [
    "module_not_found",
    "err-module-not-found"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Requiring ESM Package",
      "Self require()"
    ],
    "checklist": [
      "Use Dynamic Imports",
      "Upgrade Project to ESM",
      "Downgrade Dependency"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Requiring ESM Package",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Self require()",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "ERR_REQUIRE_ESM: Complete Node.js Troubleshooting Guide",
  "seoDescription": "Resolve ERR_REQUIRE_ESM in Node.js with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
