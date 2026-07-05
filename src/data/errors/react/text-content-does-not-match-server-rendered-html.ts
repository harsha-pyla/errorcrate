import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "text-content-does-not-match-server-rendered-html",
  "name": "Text content does not match server-rendered HTML",
  "category": "react",
  "badges": [
    "React Error",
    "SSR Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The text output on the client differed from what the server compiled.",
  "meanDescription": "A subclass of hydration warnings, this occurs when text characters (rather than HTML element tags) differ between the server build and client rendering (such as rendering current timestamps or localized messages that change dynamically).",
  "causes": [
    "Rendering new Date() directly inside component text blocks.",
    "Displaying random numbers (Math.random()) or client-specific sizes.",
    "Varying texts dynamically using client geolocation settings."
  ],
  "solutions": [
    "Format dates and random calculations inside client-mounted useEffect states.",
    "Add suppressHydrationWarning to specific text tags.",
    "Use static mock text structures during server renders."
  ],
  "example": {
    "title": "Mismatched Date Render",
    "code": "// Wrong: server renders server time, client renders client browser time\nreturn <div>{new Date().toLocaleTimeString()}</div>;",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Dynamic Date Render",
    "code": "export default function Clock() {\n  return <div>{new Date().toLocaleTimeString()}</div>;\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Mounted Client State Date",
    "code": "import { useState, useEffect } from 'react';\n\nexport default function Clock() {\n  const [time, setTime] = useState('');\n  \n  useEffect(() => {\n    setTime(new Date().toLocaleTimeString());\n  }, []);\n\n  return <div>{time}</div>;\n}",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Printing localized currencies or times directly on server outputs without locking the timezone locale configurations."
  ],
  "prevention": [
    "Isolate dynamic state updates inside client hooks."
  ],
  "faq": [
    {
      "question": "Does this warning crash the application?",
      "answer": "No. In development, it prints a console warning. In production, React attempts to patch the text mismatch but it indicates poor render efficiency."
    },
    {
      "question": "How do I suppress hydration warnings?",
      "answer": "Add `suppressHydrationWarning` to the specific JSX tag. It only goes one level deep."
    },
    {
      "question": "Why does the browser console show a long HTML diff?",
      "answer": "React prints the exact diff between server static output and client output to help you locate the text mismatch."
    },
    {
      "question": "Can CSS changes cause text matches to fail?",
      "answer": "No. Only text content and HTML nodes structure changes trigger this warning."
    }
  ],
  "helpfulResources": [
    {
      "name": "React SSR Reconciliations Docs",
      "url": "https://react.dev/reference/react-dom/client/hydrateRoot"
    }
  ],
  "relatedErrors": [
    "hydration-failed"
  ],
  "quickFix": {
    "causes": [
      "Rendering Date objects directly",
      "Rendering Math.random() values",
      "Dynamic browser localized text translations"
    ],
    "checklist": [
      "Initialize dynamic values inside useEffect",
      "Lock translation language parameters",
      "Add suppressHydrationWarning tag attributes",
      "Apply client-only mounted flags"
    ],
    "estimatedTime": "3–10 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Dynamic Date/Time rendering",
      "frequency": "60%"
    },
    {
      "scenario": "Math.random() outputs",
      "frequency": "25%"
    },
    {
      "scenario": "Client locale language shifts",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Text content does not match server-rendered HTML Fast —.",
  "seoDescription": "Getting Text content does not match server-rendered HTML in React? This guide covers why it happens, common causes, quick fix checklists, and step-by-step."
};

export default errorData;
