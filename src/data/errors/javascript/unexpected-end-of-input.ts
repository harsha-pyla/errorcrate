import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unexpected-end-of-input",
  "name": "Unexpected end of input",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "SyntaxError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The JavaScript engine reached the end of the file/string while still expecting closing characters.",
  "meanDescription": "This error occurs when the parser reaches the very end of the file or string payload while it is still waiting for closing delimiters (like a matching curly brace, parenthesis, bracket, or quotation mark) to resolve an active block declaration.",
  "causes": [
    "Forgetting to close a function, loop, or class block.",
    "Leaving arrays, objects, or string quotes unclosed.",
    "Incomplete JSON strings passed to JSON.parse()."
  ],
  "solutions": [
    "Review the end of the script to ensure all opened structures are terminated.",
    "Use an editor that highlights matching braces.",
    "Check for complete payloads in network requests before parsing JSON."
  ],
  "example": {
    "title": "SyntaxError Unexpected End of Input",
    "code": "function greet() {\n  console.log(\"Hello\");\n// Missing closing brace at the end of file triggers error",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "function greet() {\n  console.log(\"Hello\");",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "SyntaxError: Unexpected end of input\n    at <anonymous>:3:23",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Mismatched Array Closing Bracket",
      "language": "javascript",
      "description": "Omitting the square bracket at the end of array lists.",
      "code": "try {\n  // Throws: Unexpected token ';' or end of input depending on engine\n  const list = [1, 2, 3;\n} catch (err) {\n  // Parsing blocks code load\n}"
    },
    {
      "name": "Incomplete JSON parse inputs",
      "language": "javascript",
      "description": "Attempting to parse truncated JSON strings.",
      "code": "try {\n  // Throws SyntaxError: Unexpected end of JSON input\n  JSON.parse('{\"name\":\"John\"');\n} catch (err) {\n  console.error(err.message);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "JSON stream validation",
      "language": "javascript",
      "description": "Checking JSON buffers.",
      "code": "# Handled at parser layer"
    }
  ],
  "commonMistakes": [
    "Writing long nested scripts without keeping indentation consistent, making it hard to see missing closing braces.",
    "Parsing incomplete network stream chunks before they fully resolve."
  ],
  "prevention": [
    "Standardize on automatic editor brace insertion plugins.",
    "Run lint formatting tools before running local servers."
  ],
  "faq": [
    {
      "question": "What does 'end of input' mean?",
      "answer": "It means the JavaScript engine parsed the entire file or string but reached the end of the text while still waiting for matching characters (like `}`, `]`, or `)`) to close open blocks."
    },
    {
      "question": "Why does this error point to the last line of my file?",
      "answer": "Because the parser doesn't know you forgot a brace until it reaches the very end of the file and still hasn't found it. The missing brace could be anywhere inside the script."
    },
    {
      "question": "Can I catch this error in try-catch?",
      "answer": "Only if it happens inside dynamic execution blocks like `eval()` or `JSON.parse()`. General syntax errors inside your source files block compilation completely, so no code runs."
    },
    {
      "question": "How do I prevent incomplete network buffers?",
      "answer": "Verify that your API response has completed fully before executing `.json()` or parsing payload buffers."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN SyntaxError Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"
    }
  ],
  "relatedErrors": [
    "unexpected-token",
    "cannot-use-import-statement-outside-a-module"
  ],
  "quickFix": {
    "causes": [
      "Missing closing brace }",
      "Missing closing bracket ]",
      "Incomplete JSON payload"
    ],
    "checklist": [
      "Verify matching brackets",
      "Format the code (Prettier)",
      "Check network response buffers",
      "Close all open quotes"
    ],
    "estimatedTime": "1–3 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Missing function/class braces",
      "frequency": "55%"
    },
    {
      "scenario": "Unclosed string/array quotes",
      "frequency": "25%"
    },
    {
      "scenario": "Network JSON truncation",
      "frequency": "20%"
    }
  ],
  "comments": [],
  "seoTitle": "Unexpected end of input: Quick Fix Guide for JavaScript.",
  "seoDescription": "Getting Unexpected end of input in JavaScript? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code."
};

export default errorData;
