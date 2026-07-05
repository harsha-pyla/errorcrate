import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "nothing-was-returned-from-render",
  "name": "Nothing was returned from render",
  "category": "react",
  "badges": [
    "React Error",
    "SyntaxError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A component function resolved without returning any valid React element or null.",
  "meanDescription": "Every React component must return a valid React element, a fragment, an array, or null to indicate nothing should be rendered. Returning undefined (or omitting return keywords) triggers this error.",
  "causes": [
    "Forgetting return statements inside components.",
    "Incorrect arrow function bodies containing curly braces without returns."
  ],
  "solutions": [
    "Add return statements inside function component blocks.",
    "Convert arrow functions to direct implicitly returned structures."
  ],
  "example": {
    "title": "Missing Component Returns",
    "code": "// Wrong: curly braces open block but return is omitted\nconst App = () => {\n  <div>Hello</div>\n};",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Missing Return",
    "code": "function App() {\n  // Missing return statement\n  <div>Hello World</div>\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: explicit return statement",
    "code": "function App() {\n  return <div>Hello World</div>;\n}",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Opening block scope brackets `{}` inside map loops returning components, but forgetting the return statement."
  ],
  "prevention": [
    "Ensure all conditional code branches inside components return elements or `null`."
  ],
  "faq": [
    {
      "question": "Can a component return null?",
      "answer": "Yes. Returning `null` is a valid way to tell React to render nothing, preventing the error."
    },
    {
      "question": "What is the difference between explicit and implicit returns?",
      "answer": "Implicit return (using parentheses: `() => (<div />)`) returns the value immediately. Explicit return (using curly braces: `() => { return <div />; }`) requires the `return` keyword."
    },
    {
      "question": "Can returning undefined ever be valid?",
      "answer": "No. In React, returning `undefined` is considered a developer bug, and is blocked by the runtime."
    },
    {
      "question": "Does this error affect class components?",
      "answer": "Yes. If the `render()` method of a class component does not return an element, the same error is thrown."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Component Structure Docs",
      "url": "https://react.dev/reference/react/Component"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "Forgetting return keyword inside component body",
      "Stray curly braces in arrow functions",
      "Conditional branch missing default return"
    ],
    "checklist": [
      "Add return statement inside function",
      "Use implicit arrow returns",
      "Add default return null at the end of component",
      "Check mapped arrays callbacks"
    ],
    "estimatedTime": "1–3 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Forgot return inside function",
      "frequency": "65%"
    },
    {
      "scenario": "Arrow function curly braces typo",
      "frequency": "25%"
    },
    {
      "scenario": "Missing conditional default returns",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot Nothing was returned from render — React Error.",
  "seoDescription": "Nothing was returned from render in React — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid."
};

export default errorData;
