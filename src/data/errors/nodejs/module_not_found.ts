import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "module_not_found",
  "name": "MODULE_NOT_FOUND",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Core modules",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "CommonJS require() failed to resolve a module path.",
  "meanDescription": "The MODULE_NOT_FOUND error occurs when Node.js attempts to resolve a module using the CommonJS require() function, but the module resolution algorithm fails to find the specified npm package, relative file pathway, or local file inside node_modules.",
  "causes": [
    "Missing Installation: The requested package was never installed (forgot to run 'npm install').",
    "Relative Path Typo: Relative paths are typed incorrectly (e.g. require('./utils') but file is named 'util.js').",
    "Case Sensitivity: Linux servers are strictly case-sensitive, while Windows dev environments are not."
  ],
  "solutions": [
    "Install the Dependency: Run npm install package_name.",
    "Check File Spelling: Ensure correct relative file extensions and spellings.",
    "Match Capitalization Cases: Maintain lowercase filenames or ensure capitalization cases match exactly."
  ],
  "example": {
    "title": "MODULE_NOT_FOUND require Failure",
    "code": "// Throws MODULE_NOT_FOUND if 'lodash' is missing from node_modules\nconst _ = require('lodash');",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering require",
    "code": "require('./missing-helper');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: Cannot find module './missing-helper'\nRequire stack:\n- c:\\Users\\harsh\\OneDrive\\Desktop\\errorwebsite\\test.js\n    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:933:15) {\n  code: 'MODULE_NOT_FOUND',\n  requireStack: [ 'c:\\\\Users\\\\harsh\\\\OneDrive\\\\Desktop\\\\errorwebsite\\\\test.js' ]\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Safe Module Require",
      "language": "javascript",
      "description": "Wrapping optional configurations requirements inside Express route scripts.",
      "code": "let config;\ntry {\n  config = require('./config.json');\n} catch (err) {\n  if (err.code === 'MODULE_NOT_FOUND') {\n    console.warn('config.json not found, falling back to environment variables.');\n    config = process.env;\n  }\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Static Bundle Checks",
      "language": "javascript",
      "description": "Checking project build module dependencies before running production deployments.",
      "code": "# Handled by bundlers during compilation"
    }
  ],
  "commonMistakes": [
    "Failing to add packages to package.json dependencies, causing deployment server builds to throw MODULE_NOT_FOUND.",
    "Mismatching spelling cases (e.g. require('./Helper') works on Windows but throws MODULE_NOT_FOUND on Linux servers)."
  ],
  "prevention": [
    "Always use git-tracked package.json files.",
    "Run npm install before executing code."
  ],
  "faq": [
    {
      "question": "What causes MODULE_NOT_FOUND?",
      "answer": "It is thrown when Node's CJS module loader cannot find the package in `node_modules` or fails to resolve a relative path to a local file."
    },
    {
      "question": "Why does a module load fine on Windows but fail on Linux with MODULE_NOT_FOUND?",
      "answer": "Windows filesystems are case-insensitive. Linux filesystems are strictly case-sensitive. If you write `require('./helpers')` but the file is `Helpers.js`, it will fail on Linux."
    },
    {
      "question": "How does Node resolve module lookup locations?",
      "answer": "Node searches local `node_modules` folders, then walks up parent directories recursively until it reaches root, looking for the target package."
    },
    {
      "question": "Can I catch MODULE_NOT_FOUND in my script?",
      "answer": "Yes. You can wrap `require('...')` statements inside `try-catch` blocks and inspect if `err.code === 'MODULE_NOT_FOUND'`."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js CommonJS Module resolution Docs",
      "url": "https://nodejs.org/api/modules.html#all-together"
    }
  ],
  "relatedErrors": [
    "err-module-not-found",
    "err-require-esm"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Missing Installation",
      "Relative Path Typo",
      "Case Sensitivity"
    ],
    "checklist": [
      "Install the Dependency",
      "Check File Spelling",
      "Match Capitalization Cases"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing Installation",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Relative Path Typo",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Case Sensitivity",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "MODULE_NOT_FOUND: Quick Fix Guide for Node.js Developers",
  "seoDescription": "Complete guide to fixing MODULE_NOT_FOUND in Node.js. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
