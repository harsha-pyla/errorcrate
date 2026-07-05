import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "too-many-re-renders",
  "name": "Too many re-renders",
  "category": "react",
  "badges": [
    "React Error",
    "State Loop",
    "Medium"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The component enters an infinite loop of updating its state during the render phase.",
  "meanDescription": "This error occurs when a React component executes a state update function (like `setCount` or `setOpen`) directly inside its main render body. In React, updating a state value tells the framework to schedule a new render cycle for that component. When this update is called unconditionally during rendering, it triggers another render, which triggers another update, resulting in an infinite loop. To prevent browser memory exhaustion, React halts execution and throws this error.",
  "causes": [
    "Invoking State Setters in JSX Event Props: Passing direct function invocations to event props (e.g., `onClick={setCount(count + 1)}`) instead of passing function references (e.g., `onClick={() => setCount(count + 1)}`).",
    "Direct State Mutation in Component Bodies: Executing state updates unconditionally inside the main function body or render block of a component.",
    "Unconditional State Changes inside render paths: Changing state based on conditions checked during the render phase."
  ],
  "solutions": [
    "Wrap event-triggered state setters in arrow functions: Always ensure event props receive function references rather than immediate execution results.",
    "Compute values inline during render: If a value depends on state, calculate it dynamically in the component body instead of saving it back to state.",
    "Move body-level updates into useEffect: Safely handle side-effects and initial configuration checks after mounting."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Wrong: Calling Setter on Click Render",
    "code": "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  // ERROR: setCount(count + 1) runs immediately when rendering the button\n  return (\n    <button onClick={setCount(count + 1)}>\n      Click {count}\n    </button>\n  );\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Use Arrow Function Reference",
    "code": "import { useState } from 'react';\n\nexport default function Counter() {\n  const [count, setCount] = useState(0);\n\n  // FIX: Pass an anonymous arrow function reference\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Click {count}\n    </button>\n  );\n}",
    "language": "javascript"
  },
  "frameworkExamples": [
    {
      "name": "Direct body state update",
      "language": "javascript",
      "description": "Calling a state setter directly in the function body updates state on every render, triggering an infinite loop.",
      "code": "import { useState } from 'react';\n\nfunction BadProfile({ user }) {\n  const [name, setName] = useState(user.name);\n  \n  // Wrong: re-setting name on every render\n  setName(user.name);\n  \n  return <h1>{name}</h1>;\n}"
    },
    {
      "name": "Fix: Compute values dynamically",
      "language": "javascript",
      "description": "Avoid syncing props to state; simply render the prop value directly.",
      "code": "function GoodProfile({ user }) {\n  // Fix: no need for a duplicate state variable, just render user.name directly!\n  return <h1>{user.name}</h1>;\n}"
    }
  ],
  "serverExamples": [],
  "commonMistakes": [
    "Confusing function invocation (`onClick={setOpen(true)}`) with callback declaration (`onClick={() => setOpen(true)}`).",
    "Updating parent states unconditionally inside child components during mounting phases."
  ],
  "prevention": [
    "Always check your event handlers for trailing parentheses (`()`) inside JSX tags.",
    "Ensure state update calls inside `useEffect` are guarded by dependency conditions."
  ],
  "faq": [
    {
      "question": "Why does React limit the number of renders?",
      "answer": "React limits nested render updates (typically up to 50) to catch infinite loops early. This prevents the page from freezing or crashing the user's browser."
    },
    {
      "question": "Can I call a state setter in useEffect?",
      "answer": "Yes, but you must supply a dependency array. If you update a state variable that is also listed as a dependency in the same useEffect, it can cause an infinite loop. Ensure the update is guarded by a conditional check."
    },
    {
      "question": "What is the difference between onClick={setCount} and onClick={setCount()}?",
      "answer": "`onClick={setCount}` passes the function reference to be called when the user clicks the button. `onClick={setCount()}` invokes the function immediately during rendering, setting state and causing a loop."
    },
    {
      "question": "Does updating a ref trigger re-renders?",
      "answer": "No. Mutating `ref.current` does not trigger a re-render, so updating refs in the component body will not cause this error."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Docs – State: A Component's Memory",
      "url": "https://react.dev/learn/state-a-components-memory"
    }
  ],
  "relatedErrors": [
    "maximum-update-depth-exceeded"
  ],
  "quickFix": {
    "causes": [
      "Direct function invocation inside onClick listener",
      "State setter called unconditionally in component body",
      "Circular dependency in useEffect"
    ],
    "checklist": [
      "Wrap onClick state setters in arrow functions",
      "Remove state updates from the direct component body",
      "Verify useEffect dependencies do not loop"
    ],
    "estimatedTime": "2–5 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Direct event handler invocation",
      "frequency": "70%"
    },
    {
      "scenario": "Unconditional state sets in body",
      "frequency": "20%"
    },
    {
      "scenario": "useEffect dependency loops",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Too many re-renders: Complete React Troubleshooting Guide",
  "seoDescription": "Resolve Too many re-renders in React with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
