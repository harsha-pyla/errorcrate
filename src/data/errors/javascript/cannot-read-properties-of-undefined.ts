import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "cannot-read-properties-of-undefined",
  "name": "Cannot read properties of undefined",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "TypeError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An attempt was made to read a property or call a method on an undefined value.",
  "meanDescription": "This error occurs when you attempt to read a property or call a method on a variable that evaluates to undefined. In JavaScript, undefined represents the absence of a value. Since undefined is not an object, it has no properties or methods. Attempting to access anything on it (like undefined.name or undefined.length) triggers a TypeError and halts execution.",
  "causes": [
    "Accessing a nested property on a missing parent object.",
    "Accessing properties on uninitialized variables.",
    "Querying fields of an array element that doesn't exist.",
    "Reading properties from an API response that returned undefined properties."
  ],
  "solutions": [
    "Verify parent objects are defined before accessing child fields.",
    "Use optional chaining (e.g. user?.profile?.name) to gracefully return undefined instead of crashing.",
    "Provide default fallback values using nullish coalescing (e.g. const user = data ?? {}).",
    "Check array bounds before querying indexes."
  ],
  "example": {
    "title": "TypeError Undefined Property Access",
    "code": "const user = undefined;\n// Throws TypeError: Cannot read properties of undefined (reading 'name')\nconsole.log(user.name);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "const user = undefined;\nconsole.log(user.name);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError: Cannot read properties of undefined (reading 'name')\n    at <anonymous>:2:18",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Nested Property Access",
      "language": "javascript",
      "description": "Failing to check if parent keys exist before accessing children.",
      "code": "const user = { name: \"John\" };\ntry {\n  // user.address is undefined, reading street throws\n  console.log(user.address.street);\n} catch (err) {\n  console.error(err.message); // Cannot read properties of undefined (reading 'street')\n}"
    },
    {
      "name": "Function parameters",
      "language": "javascript",
      "description": "Executing functions without passing expected argument objects.",
      "code": "function greet(user) {\n  console.log(user.name);\n}\ntry {\n  greet(); // user is undefined, reading name throws\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Safe API Fetch Parsing",
      "language": "javascript",
      "description": "Verifying nested object properties using optional chaining on API request structures.",
      "code": "const fetchUserData = async () => {\n  const res = await fetch('/api/user');\n  const data = await res.json();\n  // Safe access avoiding undefined properties crashes\n  const email = data?.profile?.contact?.email;\n  console.log(email);\n};"
    }
  ],
  "commonMistakes": [
    "Assuming deeply nested API response trees are always fully populated.",
    "Accessing array elements (e.g., users[0].name) without checking if the array itself contains any entries."
  ],
  "prevention": [
    "Use JavaScript optional chaining (`?.`) extensively when querying nested attributes.",
    "Apply default object values on empty inputs using nullish coalescing (`??`).",
    "Validate API payloads using schema parsing packages."
  ],
  "faq": [
    {
      "question": "What is the difference between undefined and null?",
      "answer": "Undefined means a variable has been declared but has not been assigned a value yet. Null is an assignment value that represents an intentional absence of an object."
    },
    {
      "question": "Does optional chaining prevent this error?",
      "answer": "Yes. Optional chaining (`user?.name`) halts property evaluation if the left-side expression evaluates to `null` or `undefined`, returning `undefined` safely instead of throwing a TypeError."
    },
    {
      "question": "How do I check if a variable is undefined?",
      "answer": "You can check using `typeof variable === 'undefined'` or check strictly `variable === undefined`."
    },
    {
      "question": "Can I catch this error globally?",
      "answer": "Yes. You can hook into the window's error listener `window.addEventListener('error', (event) => { ... })` or process uncaught listeners."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Optional Chaining",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining"
    }
  ],
  "relatedErrors": [
    "cannot-read-properties-of-null",
    "x-is-not-a-function"
  ],
  "quickFix": {
    "causes": [
      "Variable is undefined",
      "API field is missing",
      "Array index is out of bounds"
    ],
    "checklist": [
      "Use optional chaining (?.)",
      "Print the parent object",
      "Initialize variables on declaration",
      "Validate API payloads"
    ],
    "estimatedTime": "2–5 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Nested property access",
      "frequency": "45%"
    },
    {
      "scenario": "Uninitialized variable lookup",
      "frequency": "25%"
    },
    {
      "scenario": "Out of bounds array indexing",
      "frequency": "15%"
    },
    {
      "scenario": "Missing API fields",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Cannot read properties of undefined Explained: Causes.",
  "seoDescription": "Getting Cannot read properties of undefined in JavaScript? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions."
};

export default errorData;
