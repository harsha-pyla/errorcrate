import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "function-components-cannot-be-given-refs",
  "name": "Function components cannot be given refs",
  "category": "react",
  "badges": [
    "React Error",
    "Refs Warning",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A ref was attached to a function component that does not support forwardRef.",
  "meanDescription": "Function components do not have instances, so they cannot receive refs. Attempting to pass a ref prop to a function component fails unless the component is wrapped in React.forwardRef().",
  "causes": [
    "Passing refs to standard custom function components."
  ],
  "solutions": [
    "Wrap target child components inside React.forwardRef() to expose inner elements.",
    "Assign refs directly to underlying HTML nodes inside elements."
  ],
  "example": {
    "title": "Invalid Ref Assignment",
    "code": "// Wrong: Child is a function component, ref assignment fails\nconst MyInput = () => <input />;\nreturn <MyInput ref={inputRef} />;",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Ref on Custom Function Component",
    "code": "const CustomInput = () => <input />;\n\nfunction Parent() {\n  const inputRef = useRef();\n  return <CustomInput ref={inputRef} />;\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: forwardRef Wrapper",
    "code": "import { forwardRef } from 'react';\n\nconst CustomInput = forwardRef((props, ref) => (\n  <input ref={ref} {...props} />\n));\n\nfunction Parent() {\n  const inputRef = useRef();\n  return <CustomInput ref={inputRef} />;\n}",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Expecting standard function components to yield reference nodes without declaring ForwardRef bindings."
  ],
  "prevention": [
    "Apply ForwardRef wrappers on custom input elements."
  ],
  "faq": [
    {
      "question": "Why do function components reject refs?",
      "answer": "Unlike class components, function components do not have instances in memory, meaning there is no backing object for a ref to bind to."
    },
    {
      "question": "Can I use useImperativeHandle?",
      "answer": "Yes. In conjunction with `forwardRef`, `useImperativeHandle` allows you to customize the instance value that is exposed to parent components."
    },
    {
      "question": "What is the behavior in React 19?",
      "answer": "React 19 removes the need for `forwardRef`. In React 19, function components can receive refs directly as normal props."
    },
    {
      "question": "Does this warning crash the browser?",
      "answer": "No. It is a console warning, but the ref object will resolve to `undefined` or `null` inside the parent."
    }
  ],
  "helpfulResources": [
    {
      "name": "React forwardRef API Docs",
      "url": "https://react.dev/reference/react/forwardRef"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "ref prop passed to standard function component",
      "React version is below 19 without forwardRef"
    ],
    "checklist": [
      "Wrap the child component in forwardRef()",
      "Pass the ref parameter down to inner DOM elements",
      "Upgrade to React 19 to pass refs as props",
      "Ensure useRef hook is declared in parent"
    ],
    "estimatedTime": "2–5 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Missing forwardRef wrapper",
      "frequency": "80%"
    },
    {
      "scenario": "Incorrect ref parameter propagation",
      "frequency": "20%"
    }
  ],
  "comments": [],
  "seoTitle": "Debug Function components cannot be given refs in React —.",
  "seoDescription": "Getting Function components cannot be given refs in React? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions."
};

export default errorData;
