import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "element-type-is-invalid",
  "name": "Element type is invalid",
  "category": "react",
  "badges": [
    "React Error",
    "Import Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "React expected a component type but received undefined or an object.",
  "meanDescription": "This error occurs when React attempts to render an element, but the tag resolves to undefined, null, or a plain object instead of a valid component function, class, or HTML tag. It is usually caused by import/export mismatching.",
  "causes": [
    "Mismatched exports (mixing up default and named exports).",
    "Typo in file paths inside import paths resolving to empty modules."
  ],
  "solutions": [
    "Verify target component import naming matches its export structure.",
    "Check file paths spelling and default exports."
  ],
  "example": {
    "title": "Invalid Element Import",
    "code": "// Wrong: Button is default export but imported as named\nimport { Button } from './Button';\nreturn <Button />;",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Named import of Default export",
    "code": "// Button.js: export default function Button() {}\nimport { Button } from \"./Button\";\nreturn <Button />;",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Default import syntax",
    "code": "import Button from \"./Button\";\nreturn <Button />;",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Importing components with casing typos (e.g. `./button` instead of `./Button`), leading to undefined resolve values on case-sensitive filesystems."
  ],
  "prevention": [
    "Leverage auto-imports inside your IDE configurations."
  ],
  "faq": [
    {
      "question": "What does 'Element type is invalid' mean?",
      "answer": "It means the variable name you passed to JSX (like `<MyComponent />`) resolves to `undefined` or a plain object instead of a valid function or class."
    },
    {
      "question": "Why does this happen when importing default exports?",
      "answer": "If you write `import { MyComponent } from './MyComponent'` instead of `import MyComponent from './MyComponent'`, the imported object is undefined, triggering the error."
    },
    {
      "question": "What is the equivalent production error ID?",
      "answer": "In production builds, this resolves to 'Minified React error #130'."
    },
    {
      "question": "Can cyclic dependencies cause this?",
      "answer": "Yes. If component A imports B, and B imports A, it can lead to undefined imports during initialization, throwing this error."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Imports and Exports Guide",
      "url": "https://react.dev/learn/importing-and-exporting-components"
    }
  ],
  "relatedErrors": [
    "minified-react-error-130"
  ],
  "quickFix": {
    "causes": [
      "Named import on default export",
      "Default import on named export",
      "Casing typo in file paths"
    ],
    "checklist": [
      "Check export style in target file",
      "Remove/add curly braces inside imports",
      "Verify file path spelling casing",
      "Resolve circular dependencies"
    ],
    "estimatedTime": "1–4 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Named/Default export mismatch",
      "frequency": "75%"
    },
    {
      "scenario": "File path casing typos",
      "frequency": "15%"
    },
    {
      "scenario": "Circular imports",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Element type is invalid Fast — React Solutions Guide",
  "seoDescription": "Element type is invalid in React — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this."
};

export default errorData;
