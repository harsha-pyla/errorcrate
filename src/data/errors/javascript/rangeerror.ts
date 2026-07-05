import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "rangeerror",
  "name": "RangeError",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "Runtime Error",
    "Medium"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "A RangeError occurs when a value is outside the allowed range for an operation.",
  "meanDescription": "A RangeError is thrown by the JavaScript runtime when a numeric argument or value exceeds the boundaries of allowed values for a given operation. Unlike a TypeError, where the data type itself is incorrect (e.g. attempting to call a string as a function), a RangeError indicates that the type is correct (typically a number), but the value falls outside the logical constraints of the method or object constructor.",
  "causes": [
    "Maximum call stack exceeded: Executing infinite recursion without a termination condition.",
    "Invalid array length: Creating a new Array constructor with a negative size or exceeding maximum safe memory lengths.",
    "Invalid number precision: Setting precision bounds on toFixed() or toPrecision() outside the supported ranges.",
    "Invalid string repeat: Calling repeat() with negative counts or values that cause the string to exceed maximum length limits.",
    "Invalid TypedArray size: Initializing binary typed arrays (like Uint8Array) with negative counts.",
    "Invalid time component values: Supplying values that fail range checks in date-formatting APIs."
  ],
  "solutions": [
    "Add recursion termination: Always verify base cases exist inside recursive functions to halt executions.",
    "Validate array bounds: Ensure array sizes are positive integers before initialization.",
    "Limit decimal precision: Keep toFixed() values between 0 and 100, and toPrecision() between 1 and 100.",
    "Sanitize repeat counts: Validate repeat counts are positive and keep results within memory boundaries."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "RangeError: Maximum call stack size exceeded\n// or\nRangeError: Invalid array length\n// or\nRangeError: toFixed() digits argument must be between 0 and 100",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Invalid Array Length",
    "code": "const numbers = new Array(-1);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Fix: Positive Array Length",
    "code": "const numbers = new Array(10);",
    "language": "javascript"
  },
  "frameworkExamples": [
    {
      "name": "Maximum Call Stack Exceeded",
      "language": "javascript",
      "description": "Infinite recursion calls exhaust the V8 call stack size, throwing a RangeError.",
      "code": "function hello() {\n  hello();\n}\ntry {\n  hello();\n} catch (err) {\n  console.error(err.message); // Maximum call stack size exceeded\n}"
    },
    {
      "name": "Invalid Precision",
      "language": "javascript",
      "description": "Methods like toFixed() limit digits parameters between 0 and 100.",
      "code": "const num = 10;\ntry {\n  num.toFixed(200);\n} catch (err) {\n  console.error(err.message); // toFixed() digits argument must be between 0 and 100\n}"
    },
    {
      "name": "String Repeat Count",
      "language": "javascript",
      "description": "String repeat parameters must not be negative.",
      "code": "try {\n  \"Hello\".repeat(-2);\n} catch (err) {\n  console.error(err.message); // Invalid count value\n}"
    },
    {
      "name": "Invalid Number Precision (JS replacement)",
      "language": "javascript",
      "description": "The toPrecision() method requires arguments strictly between 1 and 100.",
      "code": "const num = 10;\ntry {\n  num.toPrecision(150);\n} catch (err) {\n  console.error(err.message); // toPrecision() argument must be between 1 and 100\n}"
    },
    {
      "name": "Infinite Recursive Factorial",
      "language": "javascript",
      "description": "Failing to stop recursion inside computation routines.",
      "code": "function factorial(n) {\n  return n * factorial(n - 1);\n}\ntry {\n  factorial(5);\n} catch (err) {\n  console.error(err.message); // Maximum call stack size exceeded\n}"
    },
    {
      "name": "Invalid TypedArray Length",
      "language": "javascript",
      "description": "Typed arrays reject negative dimensions on initialization.",
      "code": "try {\n  new Uint8Array(-10);\n} catch (err) {\n  console.error(err.message); // Invalid typed array length\n}"
    },
    {
      "name": "Invalid Date API Bounds",
      "language": "javascript",
      "description": "Constructing invalid date strings inside validating date engines.",
      "code": "const year = 2026;\nconst month = 1000;\n// Normalizes dynamically in browser standard but throws RangeError on date parser frameworks\nconst date = new Date(year, month);"
    }
  ],
  "commonMistakes": [
    "Omitting recursive stopping conditions.",
    "Passing user input size variables directly to new Array() or Uint8Array() without sanitizing boundaries.",
    "Providing excessively large precision values to toFixed() or toPrecision()."
  ],
  "prevention": [
    "Always validate numeric variables boundaries before passing them to native methods.",
    "Prefer iteration (like standard loops) instead of recursion when handling deep tree traversals.",
    "Catch RangeError in input parsing stages to handle invalid sizes gracefully."
  ],
  "faq": [
    {
      "question": "What causes a RangeError?",
      "answer": "A RangeError occurs when a value is outside the acceptable range for a JavaScript operation or API."
    },
    {
      "question": "Is Maximum Call Stack Size Exceeded a RangeError?",
      "answer": "Yes. In most JavaScript engines, exceeding the call stack limit results in a RangeError."
    },
    {
      "question": "What's the difference between RangeError and TypeError?",
      "answer": "RangeError: The value's type is correct, but its value is outside the valid range. TypeError: The value is of the wrong type or is being used in an invalid way."
    },
    {
      "question": "Can RangeError happen in Node.js?",
      "answer": "Yes. Node.js APIs such as Buffer, streams, and other core modules can throw RangeError when given invalid values."
    },
    {
      "question": "Can TypeScript prevent RangeError?",
      "answer": "TypeScript can catch some mistakes during development, but it cannot prevent runtime values from being outside the valid range."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs – RangeError",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError"
    },
    {
      "name": "ECMAScript Language Specification",
      "url": "https://tc39.es/ecma262/"
    }
  ],
  "relatedErrors": [
    "typeerror",
    "referenceerror",
    "syntaxerror"
  ],
  "quickFix": {
    "causes": [
      "Infinite recursion (Stack overflow)",
      "Array size is negative or too large",
      "Invalid precision in toFixed()"
    ],
    "checklist": [
      "Check stopping condition in recursion",
      "Verify array size argument is positive",
      "Check toFixed() digits (0–100)",
      "Ensure repeat() count is non-negative"
    ],
    "estimatedTime": "3–15 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Infinite recursion",
      "frequency": "55%"
    },
    {
      "scenario": "Invalid array length",
      "frequency": "20%"
    },
    {
      "scenario": "toFixed() precision",
      "frequency": "10%"
    },
    {
      "scenario": "String.repeat() invalid count",
      "frequency": "8%"
    },
    {
      "scenario": "Buffer/TypedArray size",
      "frequency": "7%"
    }
  ],
  "comments": [],
  "seoTitle": "Fix RangeError Fast — JavaScript Solutions Guide",
  "seoDescription": "Complete guide to fixing RangeError in JavaScript. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
