import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "maximum-update-depth-exceeded",
  "name": "Maximum update depth exceeded",
  "category": "react",
  "badges": [
    "React Error",
    "Lifecycle Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "React stops execution because a component repeatedly schedules updates inside lifecycle callbacks or useEffect hooks.",
  "meanDescription": "Similar to 'Too many re-renders', this error occurs when a component recursively schedules state updates in lifecycle methods (like componentDidUpdate) or useEffect hooks. If updating state inside useEffect triggers a change that matches the hook's dependencies, the hook runs again and updates state again, creating an infinite loop.",
  "causes": [
    "Updating state inside a useEffect without dependencies.",
    "Updating state inside useEffect on a dependency variable that is updated inside the same hook (circular updates).",
    "Calling state setters unconditionally in componentDidUpdate."
  ],
  "solutions": [
    "Define dependencies array in useEffect.",
    "Verify state updates do not trigger the same dependencies in a loop.",
    "Always add conditional checks around state setters inside lifecycles."
  ],
  "example": {
    "title": "useEffect infinite update loop",
    "code": "// Wrong\nuseEffect(() => {\n  setCount(count + 1); // Loops if count is in dependencies\n}, [count]);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Circular useEffect update",
    "code": "useEffect(() => {\n  // Triggers state change which re-runs hook\n  setCount(c => c + 1);\n}, [count]);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Conditionally Guarded Updates",
    "code": "useEffect(() => {\n  if (count < 10) {\n    setCount(c => c + 1);\n  }\n}, [count]);",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Forgetting the dependency array in useEffect altogether."
  ],
  "prevention": [
    "Use ESLint rules (eslint-plugin-react-hooks) to check hook dependency listings."
  ],
  "faq": [
    {
      "question": "What is the update depth limit?",
      "answer": "React limits nested updates to 50 deep to prevent infinite loops from hanging the browser thread."
    },
    {
      "question": "Does updating refs trigger this error?",
      "answer": "No. Changing ref values (`ref.current`) does not schedule renders, so it cannot trigger update loops."
    },
    {
      "question": "How do I update state based on previous state safely?",
      "answer": "Use functional state updates: `setCount(prev => prev + 1)` which avoids adding the state variable itself to dependencies."
    },
    {
      "question": "Can context updates cause this error?",
      "answer": "Yes. If a child updates context, causing the parent to update, which in turn triggers the child, a loop occurs."
    }
  ],
  "helpfulResources": [
    {
      "name": "React useEffect Docs",
      "url": "https://react.dev/reference/react/useEffect"
    }
  ],
  "relatedErrors": [
    "too-many-re-renders"
  ],
  "quickFix": {
    "causes": [
      "useEffect missing dependency array",
      "useEffect updates its own dependency",
      "componentDidUpdate unconditional state sets"
    ],
    "checklist": [
      "Add dependencies array to useEffect",
      "Guard state updates behind conditionals",
      "Inspect componentDidUpdate parameter checks"
    ],
    "estimatedTime": "3–10 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "useEffect dependency loop",
      "frequency": "55%"
    },
    {
      "scenario": "Missing dependency array",
      "frequency": "30%"
    },
    {
      "scenario": "componentDidUpdate loops",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Maximum update depth exceeded — React Debugging.",
  "seoDescription": "Encountering Maximum update depth exceeded in React? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
