import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "typeerror",
  "name": "TypeError",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Language Exception",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An operand or argument passed to a function is incompatible with the expected type.",
  "meanDescription": "A TypeError is thrown by the V8 JavaScript engine when an operation is performed on a value of the incorrect type. This includes attempting to call something that isn't a function, or attempting to read/write properties on null or undefined.",
  "causes": [
    "Null/Undefined property lookup: Querying properties on missing variables (e.g. data.name but data is null).",
    "Calling Non-Functions: Attempting execution on objects that are not functions (e.g. obj() where obj is a string)."
  ],
  "solutions": [
    "Optional Chaining: Use optional chaining (e.g. data?.name) to bypass null lookups.",
    "Check typeof: Enforce type assertions before invocation.",
    "Apply Default Objects: Provide fallback values using nullish coalescing (e.g. const user = data ?? {})."
  ],
  "example": {
    "title": "TypeError Null Access",
    "code": "const data = null;\n// Throws TypeError: Cannot read properties of null (reading 'name')\nconst name = data.name;",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Accessing Undefined Property",
    "code": "const data = null;\n// Throws TypeError because data is null\nconst name = data.name;",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError: Cannot read properties of null (reading 'name')\n    at Object.<anonymous> (c:\\project\\test.js:2:19)\n    at Module._compile (node:internal/modules/cjs/loader:1101:14)",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Safe Controller Parse",
      "language": "javascript",
      "description": "Accessing deep JSON request properties safely inside Express routers.",
      "code": "app.post('/api/user', (req, res) => {\n  const email = req.body?.user?.contact?.email;\n  if (!email) {\n    return res.status(400).json({ error: 'Contact email is missing.' });\n  }\n  res.send({ email });\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Compile-time Checks",
      "language": "javascript",
      "description": "Checking types.",
      "code": "# Handled at code level"
    }
  ],
  "commonMistakes": [
    "Accessing properties deep inside nested API objects (like data.user.profile.avatar) without verifying intermediate parent definitions."
  ],
  "prevention": [
    "Enable strict null checks in tsconfig.json.",
    "Use JavaScript optional chaining (`?.`) and nullish coalescing (`??`) operators."
  ],
  "faq": [
    {
      "question": "What is a TypeError in JavaScript?",
      "answer": "A TypeError is a native JavaScript error thrown when a value is not of the expected type, such as attempting to execute a number as a function or accessing properties of `null` or `undefined`."
    },
    {
      "question": "What is the difference between TypeError and ReferenceError?",
      "answer": "TypeError means the variable exists but you performed an invalid operation on it. ReferenceError means the variable name does not exist anywhere in the scope."
    },
    {
      "question": "How do I prevent 'Cannot read properties of undefined (reading X)'?",
      "answer": "Use optional chaining (e.g. `obj?.child?.X`) which returns `undefined` immediately if any parent node is missing, instead of throwing an error."
    },
    {
      "question": "Is TypeError a runtime or compiler error?",
      "answer": "It is a runtime error thrown during script execution. In TypeScript, it will be flagged at compilation time."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS TypeError Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError"
    }
  ],
  "relatedErrors": [
    "referenceerror",
    "err-invalid-arg-type"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Null/Undefined property lookup",
      "Calling Non-Functions"
    ],
    "checklist": [
      "Optional Chaining",
      "Check typeof",
      "Apply Default Objects"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Null/Undefined property lookup",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Calling Non-Functions",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "TypeError Explained: Causes, Fixes & Prevention",
  "seoDescription": "TypeError in Node.js — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
