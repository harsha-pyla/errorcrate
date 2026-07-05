import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unexpected-token",
  "name": "Unexpected token",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "SyntaxError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "JavaScript compiler encountered a symbol or character it did not expect in the active code grammar context.",
  "meanDescription": "This error is thrown during parsing when the JavaScript engine encounters a character or symbol (like a brace, parenthesis, comma, or semi-colon) that does not match the syntax rules of the language at that specific position. The engine cannot continue parsing the code layout and halts compilation.",
  "causes": [
    "Accidental extra or stray closing characters (like } or ).",
    "Using newer JavaScript syntax (e.g. optional chaining or nullish coalescing) in older browser engines without transpilation.",
    "Malformed JSON parsing in JSON.parse()."
  ],
  "solutions": [
    "Locate the line reported by the error and match all opening and closing elements.",
    "Validate JSON string structure before parsing.",
    "Configure modern babel/swc compile tools for older browser support."
  ],
  "example": {
    "title": "SyntaxError Unexpected Token",
    "code": "const user = { name: \"John\", };\n// Throws SyntaxError: Unexpected token '}'\n}",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "const user = { name: \"John\", };\n}",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "SyntaxError: Unexpected token '}'\n    at <anonymous>:2:1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "JSON.parse Formatting",
      "language": "javascript",
      "description": "JSON parsing requires double quotes for keys and string values. Single quotes throw unexpected token errors.",
      "code": "try {\n  // Throws: Unexpected token ' in JSON\n  JSON.parse(\"{'name':'John'}\");\n} catch (err) {\n  console.error(err.message);\n}"
    },
    {
      "name": "Object separator typo",
      "language": "javascript",
      "description": "Using equals (=) instead of colons (:) inside object definitions.",
      "code": "try {\n  // Throws: Unexpected token '='\n  const obj = { age = 20 };\n} catch (err) {\n  // Parsing errors block script compiling\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "API parsing checks",
      "language": "javascript",
      "description": "Checking tokens.",
      "code": "# Handled at parser layer"
    }
  ],
  "commonMistakes": [
    "Typing extra parentheses or braces when nesting deep function calls or loop brackets.",
    "Passing unescaped characters inside JSON strings."
  ],
  "prevention": [
    "Use modern IDE formatters (like Prettier) that auto-align code blocks.",
    "Enable lint checking rules to flag stray symbols."
  ],
  "faq": [
    {
      "question": "What is a token?",
      "answer": "A token is a single atomic unit of code (like a keyword, variable name, number, string, or punctuation symbol) that the parser reads to understand your program."
    },
    {
      "question": "Why does JSON.parse trigger unexpected token?",
      "answer": "Because the string you passed is not valid JSON. JSON requires double quotes around keys and string values, and rejects trailing commas."
    },
    {
      "question": "Does this happen at runtime?",
      "answer": "No. In standard JavaScript, syntax parsing occurs before runtime execution begins. However, functions like `eval()` or `JSON.parse()` can raise it at runtime."
    },
    {
      "question": "How do I debug mismatched braces?",
      "answer": "Use an editor like VS Code that highlights matching brackets, or run code formatters (like Prettier) which fail with helpful lines if brackets mismatch."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN SyntaxError",
      "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError"
    }
  ],
  "relatedErrors": [
    "unexpected-end-of-input",
    "cannot-use-import-statement-outside-a-module"
  ],
  "quickFix": {
    "causes": [
      "Stray closing brace/parenthesis",
      "Malformed JSON string",
      "Incorrect object key separator"
    ],
    "checklist": [
      "Check the exact line of failure",
      "Count opening/closing brackets",
      "Verify JSON quotes format",
      "Use a lint formatter"
    ],
    "estimatedTime": "1–4 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Mismatched braces/parentheses",
      "frequency": "45%"
    },
    {
      "scenario": "Malformed JSON strings",
      "frequency": "35%"
    },
    {
      "scenario": "Object declaration typos",
      "frequency": "20%"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Unexpected token — JavaScript Debugging Guide",
  "seoDescription": "Resolve Unexpected token in JavaScript with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
