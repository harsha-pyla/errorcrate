import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "each-child-should-have-a-unique-key",
  "name": "Each child should have a unique key",
  "category": "react",
  "badges": [
    "React Error",
    "Virtual DOM Warning",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A warning indicating that elements returned in a list mapping lack a unique 'key' attribute.",
  "meanDescription": "When rendering a list of components dynamically (e.g., using .map()), React requires a unique key string property on each item to track modifications, additions, and deletions in the Virtual DOM. Omitting keys (or using array indexes which can change) reduces render performance and can cause UI glitches.",
  "causes": [
    "Mapping over an array and returning JSX without adding key attributes.",
    "Using index numbers as keys when lists are reordered.",
    "Failing to ensure key IDs are completely unique."
  ],
  "solutions": [
    "Add a unique key attribute (usually the database ID) to the outermost element in your map loop.",
    "Avoid using array indexes as keys unless the list is strictly static and never changes.",
    "Ensure keys are defined directly on the mapped element, not on nested children."
  ],
  "example": {
    "title": "Missing list keys",
    "code": "// Wrong\nitems.map(item => <li>{item.name}</li>);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Map without keys",
    "code": "const items = [{ id: 1, name: \"A\" }, { id: 2, name: \"B\" }];\nreturn (\n  <ul>\n    {items.map(item => <li>{item.name}</li>)}\n  </ul>\n);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Unique ID Keys",
    "code": "const items = [{ id: 1, name: \"A\" }, { id: 2, name: \"B\" }];\nreturn (\n  <ul>\n    {items.map(item => <li key={item.id}>{item.name}</li>)}\n  </ul>\n);",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Using index values as keys on arrays that undergo sorting or item filtering operations.",
    "Placing the key attribute on child tags instead of the parent container returned by the map function."
  ],
  "prevention": [
    "Utilize database IDs or generate keys using packages (like UUID) if arrays lack unique fields."
  ],
  "faq": [
    {
      "question": "Why does React need keys?",
      "answer": "React uses keys to identify which items have changed, been added, or been removed. This helps the diffing algorithm optimize DOM updates."
    },
    {
      "question": "Can I use array indexes as keys?",
      "answer": "Only as a last resort. If the list is static (never filtered, sorted, or mutated), index keys are safe. Otherwise, they can cause rendering bugs."
    },
    {
      "question": "Where should the key be declared?",
      "answer": "It must be declared on the outermost element returned by your map callback. If using React fragments, use `<React.Fragment key={...}>`."
    },
    {
      "question": "Do keys need to be globally unique?",
      "answer": "No. Keys only need to be unique among their siblings in a specific list, not globally across the entire app."
    }
  ],
  "helpfulResources": [
    {
      "name": "React List Keys Docs",
      "url": "https://react.dev/reference/react/legacy-apis/Children#children-map"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "Map callback returns JSX without key prop",
      "Using array index on dynamic list",
      "Key declared on inner child instead of outermost tag"
    ],
    "checklist": [
      "Add key prop to outermost mapped element",
      "Use database IDs for key values",
      "Avoid array index keys in dynamic lists",
      "Check Fragment structures for key declarations"
    ],
    "estimatedTime": "1–4 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Missing key prop in map loops",
      "frequency": "70%"
    },
    {
      "scenario": "Using array index keys",
      "frequency": "20%"
    },
    {
      "scenario": "Key placed on incorrect tag node",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Each child should have a unique key Error: Root Causes &.",
  "seoDescription": "Troubleshoot Each child should have a unique key in React with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent."
};

export default errorData;
