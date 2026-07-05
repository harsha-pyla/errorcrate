import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failed-to-compile",
  "name": "Failed to compile",
  "category": "react",
  "badges": [
    "React Error",
    "Build Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The bundler compiler failed to build the React application due to compile errors.",
  "meanDescription": "This error is displayed by build systems (like webpack-dev-server, Vite, or next dev) when lint errors, TypeScript compile failures, or parse issues block the compilation of files.",
  "causes": [
    "TypeScript type mismatches.",
    "Typing import statements referencing missing file paths."
  ],
  "solutions": [
    "Read terminal errors output details to trace files.",
    "Check TypeScript compiler settings and fix missing files."
  ],
  "example": {
    "title": "Compilation Failures",
    "code": "Failed to compile.\n./src/App.tsx\nModule not found: Can't resolve './components/MissingComponent' in 'c:\\project\\src'",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Wrong: Missing imports",
    "code": "import MissingComponent from './MissingComponent';\nreturn <MissingComponent />;",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Ensure component path exists",
    "code": "import ExistingComponent from './ExistingComponent';\nreturn <ExistingComponent />;",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Ignoring TypeScript errors in dev mode, which then fail during production builds."
  ],
  "prevention": [
    "Verify code compiles clean locally using `npm run build` regularly."
  ],
  "faq": [
    {
      "question": "What does 'Failed to compile' mean?",
      "answer": "It means the build bundler (Vite, Webpack, Turbopack) encountered an error (like syntax, missing file, or TS error) that prevents it from generating the JS bundle."
    },
    {
      "question": "How do I fix 'Module not found' compilation errors?",
      "answer": "Verify that the file path in the import statement is spelled correctly and exists in the filesystem. Check relative path dots (`./` vs `../`)."
    },
    {
      "question": "Can syntax errors in CSS cause compilation to fail?",
      "answer": "Yes. If using CSS modules or Sass, compilation fails if the stylesheet contains invalid CSS syntax."
    },
    {
      "question": "How do I bypass TypeScript errors during builds?",
      "answer": "It is highly recommended to fix them. As a temporary workaround, you can add `// @ts-ignore` comments or set `ignoreBuildErrors: true` in your build config."
    }
  ],
  "helpfulResources": [
    {
      "name": "Webpack Compile Docs",
      "url": "https://webpack.js.org/configuration/dev-server/"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "Spelling typos in file imports paths",
      "TypeScript compiler type violations",
      "Syntax error inside stylesheet files"
    ],
    "checklist": [
      "Verify filename spelling and paths matches exactly",
      "Check Terminal compile logs for line numbers",
      "Resolve TypeScript type mismatches",
      "Verify CSS syntax"
    ],
    "estimatedTime": "2–10 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Missing module imports/path typos",
      "frequency": "60%"
    },
    {
      "scenario": "TypeScript type mismatches",
      "frequency": "30%"
    },
    {
      "scenario": "CSS/Sass compile errors",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Failed to compile: Complete React Troubleshooting Guide",
  "seoDescription": "Learn how to fix Failed to compile in React. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
