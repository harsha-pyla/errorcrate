import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "objects-are-not-valid-as-a-react-child",
  "name": "Objects are not valid as a React child",
  "category": "react",
  "badges": [
    "React Error",
    "TypeError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An attempt was made to render a plain JavaScript object directly inside JSX.",
  "meanDescription": "React can render strings, numbers, elements, and arrays of these values. However, it cannot render plain JavaScript objects (e.g. { name: 'John' }) directly inside JSX tags (like <h1>{user}</h1>). Doing so triggers this error because React doesn't know how to convert a complex object into DOM nodes.",
  "causes": [
    "Rendering complete API response objects directly in text blocks.",
    "Failing to destructure objects correctly when printing values.",
    "Passing complex objects to components expecting strings."
  ],
  "solutions": [
    "Access specific properties of objects instead of rendering the whole object.",
    "Serialize objects using JSON.stringify() if you need to print them for debugging.",
    "Ensure components receive primitive values or JSX elements."
  ],
  "example": {
    "title": "Invalid Object Rendering",
    "code": "// Wrong\nconst user = { name: 'John' };\nreturn <div>{user}</div>; // Throws error",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Rendering Object directly",
    "code": "const user = { name: \"John\", age: 25 };\nreturn <div>{user}</div>;",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Render Primitive Properties",
    "code": "const user = { name: \"John\", age: 25 };\nreturn <div>{user.name} ({user.age})</div>;",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Trying to print Date objects directly (call `date.toLocaleDateString()` instead)."
  ],
  "prevention": [
    "Check data types and structure before inserting variables into JSX layout templates."
  ],
  "faq": [
    {
      "question": "Can I render arrays?",
      "answer": "Yes. React can render arrays of primitives or JSX elements natively. It only rejects plain objects."
    },
    {
      "question": "How do I debug which object is causing the issue?",
      "answer": "Look at the React stack trace in your browser. It will highlight the component and render block that failed."
    },
    {
      "question": "Does this happen in production?",
      "answer": "Yes. In production, this error is minified and reported as 'Minified React error #31'."
    },
    {
      "question": "How do I render a Date object?",
      "answer": "Convert it to a string using methods like `date.toString()` or `date.toLocaleDateString()`."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Rendering Lists Guide",
      "url": "https://react.dev/learn/rendering-lists"
    }
  ],
  "relatedErrors": [
    "minified-react-error-31"
  ],
  "quickFix": {
    "causes": [
      "Rendering full API response object",
      "Direct rendering of Date objects",
      "Incorrect destructured variables"
    ],
    "checklist": [
      "Access subproperties directly (user.name)",
      "Use JSON.stringify() to dump objects",
      "Convert dates using toLocaleDateString()",
      "Verify variable destructuring definitions"
    ],
    "estimatedTime": "1–3 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Direct API response rendering",
      "frequency": "60%"
    },
    {
      "scenario": "Direct Date objects rendering",
      "frequency": "25%"
    },
    {
      "scenario": "Destructuring typos",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Objects are not valid as a React child Error: Root Causes &.",
  "seoDescription": "Learn how to fix Objects are not valid as a React child in React. Understand the root causes, see real code examples, and apply verified solutions to resolve."
};

export default errorData;
