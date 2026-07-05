import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "cannot-read-properties-of-null",
  "name": "Cannot read properties of null",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "TypeError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "An attempt was made to read a property or call a method on a null object.",
  "meanDescription": "This error is thrown when you attempt to access a property or invoke a method on a variable that evaluates to null. While null represents an intentional absence of any object value, it has no keys or attributes. Querying null.someProperty or null.toString() triggers a TypeError.",
  "causes": [
    "Querying DOM elements that do not exist (document.querySelector returns null).",
    "Parsing database queries or API payloads that return null values for empty fields.",
    "Explicitly setting variables to null and accessing properties later without resetting them."
  ],
  "solutions": [
    "Verify DOM query results exist before accessing their properties.",
    "Check for null using strict equality (if (user === null)).",
    "Use optional chaining (e.g. element?.textContent)."
  ],
  "example": {
    "title": "TypeError Null Property Access",
    "code": "const product = null;\n// Throws TypeError: Cannot read properties of null (reading 'price')\nconsole.log(product.price);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "const product = null;\nconsole.log(product.price);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError: Cannot read properties of null (reading 'price')\n    at <anonymous>:2:21",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "DOM querySelector Mismatches",
      "language": "javascript",
      "description": "Failing to verify if elements exist in the active document scope before binding event listeners.",
      "code": "const btn = document.querySelector(\"#non-existent-btn\");\ntry {\n  btn.addEventListener(\"click\", () => {}); // btn is null, throwing TypeError\n} catch (err) {\n  console.error(err.message); // Cannot read properties of null (reading 'addEventListener')\n}"
    },
    {
      "name": "API parsing fallback",
      "language": "javascript",
      "description": "API requests returning null values on inactive fields.",
      "code": "const data = { profile: null };\ntry {\n  console.log(data.profile.avatar); // profile is null, reading avatar throws\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Express JSON Sanitizer Middleware",
      "language": "javascript",
      "description": "Scanning incoming JSON bodies for null properties to prevent downstream crashes.",
      "code": "app.post('/update', (req, res) => {\n  const settings = req.body.settings;\n  if (settings === null) {\n    return res.status(400).json({ error: 'Settings object cannot be null.' });\n  }\n  res.send('Success');\n});"
    }
  ],
  "commonMistakes": [
    "Binding event listeners inside head scripts before the DOM structure is fully loaded by the browser.",
    "Accessing database records that have nullable columns without adding fallback checks."
  ],
  "prevention": [
    "Always query DOM elements inside DOMContentLoaded callbacks.",
    "Implement guards (e.g. if (element !== null)) before calling element methods."
  ],
  "faq": [
    {
      "question": "Why does querySelector return null?",
      "answer": "Because no element matches the specified selector in the active document. Double-check your spelling, query tags, or verify that the script is executed after the elements are fully rendered."
    },
    {
      "question": "What's the difference between null and undefined?",
      "answer": "Null is an assigned value representing the intentional absence of an object. Undefined means that a variable name has been declared but has no value associated with it yet."
    },
    {
      "question": "How do I check for null?",
      "answer": "Use strict equality: `if (variable === null)`. Avoid using loose equality `variable == null` if you need to distinguish between null and undefined."
    },
    {
      "question": "Can I set default values for null?",
      "answer": "Yes. You can use the logical OR operator (`const x = y || default`) or nullish coalescing (`const x = y ?? default`) to supply fallbacks."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN JS Null Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"
    }
  ],
  "relatedErrors": [
    "cannot-read-properties-of-undefined",
    "x-is-not-a-function"
  ],
  "quickFix": {
    "causes": [
      "querySelector failed to find element",
      "API returned null object",
      "Variable explicitly set to null"
    ],
    "checklist": [
      "Verify selector spelling",
      "Check database response payload",
      "Use optional chaining (?.)",
      "Add conditional check (if)"
    ],
    "estimatedTime": "2–8 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "DOM querySelector failures",
      "frequency": "50%"
    },
    {
      "scenario": "API null fields",
      "frequency": "30%"
    },
    {
      "scenario": "Uninitialized database records",
      "frequency": "20%"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Cannot read properties of null — JavaScript.",
  "seoDescription": "Learn how to fix Cannot read properties of null in JavaScript. Understand the root causes, see real code examples, and apply verified solutions to resolve this."
};

export default errorData;
