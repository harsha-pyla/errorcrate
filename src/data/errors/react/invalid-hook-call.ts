import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "invalid-hook-call",
  "name": "Invalid Hook Call",
  "category": "react",
  "badges": [
    "React Error",
    "Hooks",
    "Medium"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The Invalid Hook Call error occurs when a React Hook (such as useState, useEffect, or useContext) is called in a place where Hooks are not allowed.",
  "meanDescription": "The Invalid Hook Call error occurs when a React Hook is called outside the body of a React function component or a custom Hook. React Hooks rely on a stable, predictable call order on every single render to map state values to their corresponding component instances. Calling Hooks conditionally, inside loops, nested functions, or event handlers violates the Rules of Hooks and causes this error. Additionally, duplicate React packages in node_modules or version mismatches between react and react-dom can also trigger this issue.",
  "causes": [
    "Calling Hook Outside Component: Hooks cannot be called in plain JavaScript functions, event handlers, or class components.",
    "Calling Hook Inside Condition: Declaring Hooks inside if/else blocks changes call order dynamically based on state.",
    "Calling Hook Inside Loop: Placing Hooks inside for/while loops alters the count of Hook calls between renders.",
    "Calling Hook Inside Nested Function: Declaring Hooks inside inner functions or callbacks.",
    "Multiple React Versions: Having duplicate React installations in node_modules creates dispatcher conflicts.",
    "React and React DOM Mismatch: Out-of-sync react and react-dom dependency versions (e.g. React 19 with React DOM 18)."
  ],
  "solutions": [
    "Move Hooks to the top level: Ensure Hooks are declared directly at the top level of function components or custom Hooks.",
    "Follow the Rules of Hooks: Never place Hooks inside conditions, loops, event handlers, or nested callbacks.",
    "Check React installations: Run 'npm ls react' inside the project directory to verify only a single version of React exists.",
    "Deduplicate node modules: Execute 'npm dedupe' or clean install dependencies to resolve duplicate React packages.",
    "Restart dev server: Reboot the dev server ('npm run dev') to purge caching states."
  ],
  "example": {
    "title": "Syntax Error representation",
    "code": "Error: Invalid hook call. Hooks can only be called inside the body of a function component.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Wrong: Hook inside condition",
    "code": "import { useState } from \"react\";\n\nif (true) {\n    const [count, setCount] = useState(0);\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Top-level Component Hook",
    "code": "import { useState } from \"react\";\n\nexport default function Counter() {\n    const [count, setCount] = useState(0);\n\n    return (\n        <button onClick={() => setCount(count + 1)}>\n            {count}\n        </button>\n    );\n}",
    "language": "javascript"
  },
  "frameworkExamples": [
    {
      "name": "Hook Inside Loop",
      "language": "javascript",
      "description": "Declaring Hooks inside loops violates render order constraints.",
      "code": "import { useEffect } from 'react';\n// Wrong\nfor (let i = 0; i < 3; i++) {\n  useEffect(() => {\n    console.log('Hook inside loop');\n  }, []);\n}"
    },
    {
      "name": "Hook Inside Event Handler",
      "language": "javascript",
      "description": "Hooks cannot be invoked dynamically inside event callbacks.",
      "code": "import { useState } from 'react';\n// Wrong\nfunction ClickButton() {\n  const handleClick = () => {\n    const [active, setActive] = useState(false); // Throws Invalid Hook Call\n  };\n  return <button onClick={handleClick}>Click</button>;\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Deduplicate Check Command",
      "language": "bash",
      "description": "Verifying dependencies structure using npm.",
      "code": "npm ls react\nnpm ls react-dom\nnpm dedupe"
    }
  ],
  "commonMistakes": [
    "Reusing Hooks inside event response methods.",
    "Using different package managers (like mixing npm and yarn) leading to nested node_modules copy duplicates."
  ],
  "prevention": [
    "Integrate the official eslint-plugin-react-hooks plugin inside your linter configs.",
    "Declare reusable hook logic strictly within custom Hook files prefixed with 'use' (e.g. useAuth)."
  ],
  "faq": [
    {
      "question": "Can I call Hooks inside an if statement?",
      "answer": "No. Hooks must always be called in the same order on every render. Placing them inside conditions alters render execution order."
    },
    {
      "question": "Can I use Hooks inside loops?",
      "answer": "No."
    },
    {
      "question": "Can class components use Hooks?",
      "answer": "No. Hooks only work in function components and custom Hooks."
    },
    {
      "question": "Why does React care about Hook order?",
      "answer": "React uses the order of Hook calls to associate state with the correct component instance. Changing the order breaks that mapping."
    }
  ],
  "helpfulResources": [
    {
      "name": "React Rules of Hooks Guide",
      "url": "https://react.dev/warnings/invalid-hook-call-warning"
    }
  ],
  "relatedErrors": [
    "too-many-re-renders",
    "maximum-update-depth-exceeded",
    "rendered-more-hooks-than-expected",
    "rendered-fewer-hooks-than-expected"
  ],
  "quickFix": {
    "causes": [
      "Hook called inside if condition or loop",
      "Hook called inside event handler or nested helper",
      "Duplicate copies of React in the project"
    ],
    "checklist": [
      "Move Hooks to the top level of the component",
      "Check React versions match in package.json",
      "Run npm ls react to verify single instance",
      "Restart your dev server"
    ],
    "estimatedTime": "2–8 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Hook inside condition/loop",
      "frequency": "40%"
    },
    {
      "scenario": "Hook inside event handler",
      "frequency": "30%"
    },
    {
      "scenario": "Duplicate React libraries",
      "frequency": "20%"
    },
    {
      "scenario": "Version mismatches",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Invalid Hook Call: Quick Fix Guide for React Developers",
  "seoDescription": "Fix Invalid Hook Call fast. This React debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
