import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "cannot-update-a-component-while-rendering-another-component",
  "name": "Cannot update a component while rendering another component",
  "category": "react",
  "badges": [
    "React Error",
    "Lifecycle Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A child component schedules a state update on its parent during the render phase.",
  "meanDescription": "This warning occurs when a component executes a function that updates the state of another component (usually a parent component via callback props) during its own render phase. React enforces unidirectional data flow and blocks side-effects from running during rendering.",
  "causes": [
    "Calling parent state setters directly inside the body of a rendering child component.",
    "Triggering context updates inside child component definitions."
  ],
  "solutions": [
    "Move state updates into useEffect hooks inside the child component.",
    "Trigger parent updates from events (like button clicks) rather than on render."
  ],
  "example": {
    "title": "Invalid Child Parent State Update",
    "code": "// Wrong\nfunction Child({ setParentState }) {\n  setParentState('updated'); // Triggers parent update on render\n  return <div>Child</div>;\n}",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Parent State set in Render",
    "code": "function Child({ onRender }) {\n  onRender(); // parent setter called during child rendering\n  return <div>Child</div>;\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Parent State set in useEffect",
    "code": "import { useEffect } from 'react';\n\nfunction Child({ onRender }) {\n  useEffect(() => {\n    onRender(); // called safely after mount/render phases complete\n  }, [onRender]);\n\n  return <div>Child</div>;\n}",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Updating Context variables unconditionally inside child component render methods."
  ],
  "prevention": [
    "Verify child components only read properties during rendering and trigger modifications inside effects or actions."
  ],
  "faq": [
    {
      "question": "Why does React block updates during rendering?",
      "answer": "Rendering must be a pure function of props and state. Side effects (like scheduling updates on other components) during render break predictability and trigger rendering errors."
    },
    {
      "question": "How does using useEffect fix this?",
      "answer": "useEffect runs after the active render cycle is complete and the layout is painted to the DOM, allowing React to schedule new updates safely."
    },
    {
      "question": "Can Redux dispatch calls cause this error?",
      "answer": "Yes. Dispatching actions inside the render body of a component triggers state changes, raising the same warning."
    },
    {
      "question": "Does this warning crash my production application?",
      "answer": "No. It is a console warning in development, but it indicates poor lifecycle implementation and can lead to unexpected UI glitches."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Lifecycle Docs",
      "url": "https://react.dev/learn/keeping-components-pure"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "Child component executes parent setter on render",
      "Context updates triggered inside render body",
      "Redux dispatch executed directly in function component"
    ],
    "checklist": [
      "Move setter call into useEffect hook",
      "Bind parent updates to user events (onClick)",
      "Check Context dispatch placement",
      "Remove Redux actions from render bodies"
    ],
    "estimatedTime": "3–8 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Child updating parent in render body",
      "frequency": "65%"
    },
    {
      "scenario": "Context dispatch on render",
      "frequency": "25%"
    },
    {
      "scenario": "Redux dispatch on render",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot Cannot update a component while rendering.",
  "seoDescription": "Complete guide to fixing Cannot update a component while rendering another component in React. Includes root cause analysis, step-by-step solutions."
};

export default errorData;
