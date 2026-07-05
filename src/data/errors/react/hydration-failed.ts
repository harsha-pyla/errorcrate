import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "hydration-failed",
  "name": "Hydration failed",
  "category": "react",
  "badges": [
    "React Error",
    "SSR Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The server-rendered HTML structure did not match the initial client-side render.",
  "meanDescription": "In Server-Side Rendering (SSR) frameworks (like Next.js), the server compiles the React tree to static HTML, and the client 'hydrates' it by binding event listeners. If the HTML structure generated on the client differs from what the server sent, React cannot reconcile them, causing hydration failures.",
  "causes": [
    "Nesting invalid HTML tags (like putting a <div> inside a <p> or another <div> inside a <span>).",
    "Accessing client-only globals (like window, localStorage, or dates) during initial render.",
    "Varying content dynamically based on navigator locale settings on the server."
  ],
  "solutions": [
    "Ensure HTML tag nesting adheres to strict semantic markup standards.",
    "Use useEffect hooks to run client-only features after the component mounts.",
    "Suppress warnings using suppressHydrationWarning on specific text elements when discrepancies are unavoidable."
  ],
  "example": {
    "title": "Invalid Nesting Hydration Failure",
    "code": "// Wrong\nreturn <p><div>Invalid Tag Nesting</div></p>;",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Wrong: Nested div inside p tag",
    "code": "export default function Component() {\n  return <p><div>This is invalid HTML nesting.</div></p>;\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Correct: Correct Nesting Blocks",
    "code": "export default function Component() {\n  return <div><div>This is correct markup.</div></div>;\n}",
    "language": "javascript"
  },
  "frameworkExamples": [],
  "serverExamples": [],
  "commonMistakes": [
    "Checking `typeof window !== 'undefined'` directly inside render scopes to output different HTML layouts."
  ],
  "prevention": [
    "Verify HTML markup standards.",
    "Implement hydration checks or use client-only dynamic imports inside Next.js."
  ],
  "faq": [
    {
      "question": "What is hydration?",
      "answer": "Hydration is the process where React client-side scripts bind event listeners to static HTML pre-rendered by the server, turning it into an interactive app."
    },
    {
      "question": "Why does invalid nesting cause hydration errors?",
      "answer": "Browsers automatically correct invalid nesting (e.g. moving a `div` out of a `p` tag). This changes the HTML structure, causing a mismatch when React tries to hydrate it."
    },
    {
      "question": "How do I handle client-only states safely?",
      "answer": "Use a state variable `isMounted` which starts at false and is set to true inside a `useEffect`. Render client content only when `isMounted` is true."
    },
    {
      "question": "What frameworks trigger this warning?",
      "answer": "Next.js, Remix, Astro, Gatsby, and any custom SSR implementations."
    }
  ],
  "helpfulResources": [
    {
      "name": "React SSR Reconciliations Docs",
      "url": "https://react.dev/reference/react-dom/client/hydrateRoot"
    }
  ],
  "relatedErrors": [
    "text-content-does-not-match-server-rendered-html"
  ],
  "quickFix": {
    "causes": [
      "Stray div tags inside p/span blocks",
      "Direct access to window/localStorage on render",
      "Dynamic dates outputting server-client mismatches"
    ],
    "checklist": [
      "Verify HTML tag nesting semantic rules",
      "Move client-specific scripts into useEffect",
      "Use dynamic client-only imports",
      "Suppress warnings using suppressHydrationWarning"
    ],
    "estimatedTime": "5–15 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Semantic HTML nesting errors",
      "frequency": "50%"
    },
    {
      "scenario": "Client-only globals direct usage",
      "frequency": "35%"
    },
    {
      "scenario": "Locale date discrepancies",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Hydration failed in React — Causes & Solutions",
  "seoDescription": "Resolve Hydration failed in React with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
