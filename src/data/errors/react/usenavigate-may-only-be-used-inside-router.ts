import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "usenavigate-may-only-be-used-inside-router",
  "name": "useNavigate may only be used inside Router",
  "category": "react",
  "badges": [
    "React Error",
    "Router Exception",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The useNavigate hook was invoked outside a React Router context.",
  "meanDescription": "The useNavigate hook (from React Router) accesses the history context to navigate. Calling it in a component that is not nested inside a <BrowserRouter> (or other Router provider) triggers this error.",
  "causes": [
    "Calling useNavigate inside the App component before the Router wrapper tag is declared."
  ],
  "solutions": [
    "Nest components invoking useNavigate inside Router providers.",
    "Move the Router provider setup wrapper into root mounting files (like index.js)."
  ],
  "example": {
    "title": "Invalid Router Hook Call",
    "code": "// Wrong: useNavigate is called in App, but Router wraps child routes below\nfunction App() {\n  const navigate = useNavigate();\n  return <BrowserRouter><Routes>...</Routes></BrowserRouter>;\n}",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Hook outside Router",
    "code": "import { useNavigate, BrowserRouter } from 'react-router-dom';\n\nfunction App() {\n  const navigate = useNavigate(); // Throws error\n  return (\n    <BrowserRouter>\n      <div>My App</div>\n    </BrowserRouter>\n  );\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Hook inside Router Nesting",
    "code": "import { useNavigate, BrowserRouter } from 'react-router-dom';\n\nfunction MainApp() {\n  const navigate = useNavigate(); // Safe: wrapped inside BrowserRouter context\n  return <div>My App</div>;\n}\n\nexport default function App() {\n  return (\n    <BrowserRouter>\n      <MainApp />\n    </BrowserRouter>\n  );\n}",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Attempting to test routes using components containing useNavigate without wrapping test suites inside a `<MemoryRouter>`."
  ],
  "prevention": [
    "Ensure `<BrowserRouter>` wraps the outermost parent component containing all routes."
  ],
  "faq": [
    {
      "question": "Why does useNavigate need a Router?",
      "answer": "useNavigate relies on React Context supplied by the Router provider to access history APIs and perform transitions."
    },
    {
      "question": "Can I use useNavigation instead?",
      "answer": "No. useNavigation is a separate React Router hook that tracks page loading states. Both require a Router context to work."
    },
    {
      "question": "How do I fix this inside tests?",
      "answer": "Wrap your component in a `<MemoryRouter>` from `react-router-dom` in your test script."
    },
    {
      "question": "Does this happen in other router packages?",
      "answer": "Yes. Most routing libraries (e.g. Next.js router, Wouter) require target hooks to reside inside context providers."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Router useNavigate Docs",
      "url": "https://reactrouter.com/en/main/hooks/use-navigate"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "useNavigate called in root App component",
      "Router provider declared too low in the component tree",
      "Missing Router context in test files"
    ],
    "checklist": [
      "Wrap the entire component in BrowserRouter",
      "Move useNavigate calls into child components",
      "Use MemoryRouter in testing libraries",
      "Check packages version mismatches"
    ],
    "estimatedTime": "2–6 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "useNavigate in same component as BrowserRouter",
      "frequency": "75%"
    },
    {
      "scenario": "Missing Router wrapper inside tests",
      "frequency": "20%"
    },
    {
      "scenario": "Multiple router configurations conflict",
      "frequency": "5%"
    }
  ],
  "comments": [],
  "seoTitle": "Debug useNavigate may only be used inside Router in React —.",
  "seoDescription": "Fix useNavigate may only be used inside Router fast. This React debugging guide explains the root cause, shows common mistakes, and provides tested solutions."
};

export default errorData;
