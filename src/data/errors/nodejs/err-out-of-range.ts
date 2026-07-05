import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-out-of-range",
  "name": "ERR_OUT_OF_RANGE",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Core modules",
    "Rarer"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A numeric value is outside the allowed boundaries.",
  "meanDescription": "The ERR_OUT_OF_RANGE error is thrown by Node.js when an input value (typically a number, index offset, or port) is outside the bounds of allowed arguments for a core API function.",
  "causes": [
    "Negative Sizes: Passing negative values to buffer allocation functions.",
    "Crypto Lengths: Providing randomBytes lengths that exceed system allocation limits.",
    "Out of Bounds Ports: Attempting to bind sockets to ports outside the 0 - 65535 range."
  ],
  "solutions": [
    "Enforce Ranges: Validate number boundaries before invoking API calls.",
    "Sanitize Ports: Verify that server port parameters are valid unsigned 16-bit integers."
  ],
  "example": {
    "title": "ERR_OUT_OF_RANGE Crypto Call",
    "code": "const crypto = require('crypto');\n\n// Throws ERR_OUT_OF_RANGE because size must be positive\ncrypto.randomBytes(-10);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Buffer Out of Bounds constructor",
    "code": "const crypto = require('crypto');\n// Throws ERR_OUT_OF_RANGE because negative bytes length is invalid\ncrypto.randomBytes(-1);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "RangeError [ERR_OUT_OF_RANGE]: The value of \"size\" is out of range. It must be >= 0. Received -10\n    at new NodeError (node:internal/errors:371:5)\n    at Object.randomBytes (node:crypto:330:7) {\n  code: 'ERR_OUT_OF_RANGE'\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Port range checks",
      "language": "javascript",
      "description": "Checking port variable ranges before binding the listener server.",
      "code": "const port = parseInt(process.env.PORT || '3000');\nif (port < 0 || port > 65535) {\n  throw new Error('Port variable out of range');\n}\napp.listen(port);"
    }
  ],
  "serverExamples": [
    {
      "name": "Port range limits",
      "language": "javascript",
      "description": "Checking port inputs.",
      "code": "# Handled at application layer"
    }
  ],
  "commonMistakes": [
    "Passing user input directly to buffer allocations or crypto functions without validating the numbers bounds."
  ],
  "prevention": [
    "Implement schema constraints (e.g. Zod `.min()`, `.max()`) on API payload properties."
  ],
  "faq": [
    {
      "question": "What triggers ERR_OUT_OF_RANGE?",
      "answer": "It is thrown when a numeric parameter passed to a core Node.js function is outside the expected logical range (such as size constraints or negative array indexes)."
    },
    {
      "question": "How does it differ from ERR_BUFFER_OUT_OF_BOUNDS?",
      "answer": "ERR_OUT_OF_RANGE is a general error for function parameters. ERR_BUFFER_OUT_OF_BOUNDS is thrown specifically during buffer slice/read/write index overflows."
    },
    {
      "question": "Is this a RangeError?",
      "answer": "Yes. It inherits from JavaScript's built-in `RangeError` class."
    },
    {
      "question": "How do I fix a port value out of range?",
      "answer": "Ensure the port number parameter is an integer between 0 and 65535."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js RangeError Docs",
      "url": "https://nodejs.org/api/errors.html#rangeerror"
    }
  ],
  "relatedErrors": [
    "err-buffer-out-of-bounds",
    "err-invalid-arg-type"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Negative Sizes",
      "Crypto Lengths",
      "Out of Bounds Ports"
    ],
    "checklist": [
      "Enforce Ranges",
      "Sanitize Ports"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Negative Sizes",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Crypto Lengths",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Out of Bounds Ports",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix ERR_OUT_OF_RANGE Fast — Node.js Solutions Guide",
  "seoDescription": "Getting ERR_OUT_OF_RANGE in Node.js? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
