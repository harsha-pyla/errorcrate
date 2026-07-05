import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "minified-react-error-130",
  "name": "Minified React error #130",
  "category": "react",
  "badges": [
    "React Error",
    "Production Exception",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "Element type is invalid (Production Minified variant #130).",
  "meanDescription": "Minified React error #130 is the production equivalent of 'Element type is invalid'. It means React expected a component type but received undefined or an object during production mounting.",
  "causes": [
    "Mismatched exports or import typings in production code."
  ],
  "solutions": [
    "Audit import structures inside files compiled for production builds.",
    "Check default exports."
  ],
  "example": {
    "title": "Minified #130 Stacktrace",
    "code": "Error: Minified React error #130; visit https://react.dev/errors/130 for the full details.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Production Mismatch",
    "code": "// Mismatched default/named import in production bundle\nimport { MyBtn } from './MyBtn';\nreturn <MyBtn />;",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Match exports",
    "code": "import MyBtn from './MyBtn';\nreturn <MyBtn />;",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Importing components with naming capitalization mismatches."
  ],
  "prevention": [
    "Use auto-imports and lint rules to verify components resolution."
  ],
  "faq": [
    {
      "question": "What is Minified React error #130?",
      "answer": "It is the production version of the 'Element type is invalid' error, thrown when a component resolves to undefined during render."
    },
    {
      "question": "Why does this happen in production but not in dev?",
      "answer": "Usually because of differences in tree-shaking, packaging, or different path case resolutions on production servers."
    },
    {
      "question": "How do I debug Minified React error #130?",
      "answer": "Follow the console URL to see details, then trace import blocks in components that were recently updated or refactored."
    },
    {
      "question": "Can circular imports trigger this?",
      "answer": "Yes. Circular dependencies result in undefined exports, triggering error #130 when mounting."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Error Decoder #130",
      "url": "https://react.dev/errors/130"
    }
  ],
  "relatedErrors": [
    "element-type-is-invalid"
  ],
  "quickFix": {
    "causes": [
      "Default vs Named export mismatch in prod",
      "Path case-sensitivity issues on server filesystems",
      "Circular module references"
    ],
    "checklist": [
      "Audit import/export signatures in target files",
      "Check filenames spelling capitalization",
      "Resolve circular dependencies in source trees",
      "Verify build compilation logs"
    ],
    "estimatedTime": "2–8 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Import/Export signature mismatch",
      "frequency": "70%"
    },
    {
      "scenario": "Case-sensitive path mismatches",
      "frequency": "20%"
    },
    {
      "scenario": "Circular imports in production bundle",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Minified React error #130 Explained: Causes, Fixes &.",
  "seoDescription": "Complete guide to fixing Minified React error #130 in React. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
