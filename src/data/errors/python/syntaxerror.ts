import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "syntaxerror",
  "name": "SyntaxError",
  "category": "python",
  "badges": [
    "Python System",
    "Parser Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Python parser encounters code that violates the grammatical rules of the language.",
  "meanDescription": "A 'SyntaxError' is raised by the Python parser during the parsing phase, before compilation or bytecode execution begins. It indicates that the parser has encountered a line of code that does not follow the correct syntax structure of the language, such as mismatched parentheses, unclosed quotation strings, missing colons in block headers, or using reserved keywords (like 'pass' or 'for') as variable names.",
  "causes": [
    "Missing colons on statement headers: Forgetting the colon (:) at the end of 'if', 'for', 'while', 'def', or 'class' statements.",
    "Mismatched parentheses or brackets: Opening a bracket, bracket brace, or parenthesis without closing it properly.",
    "Unclosed string quotes: Forgetting to close single ('), double (\"), or triple ('''/\"\"\") quote strings."
  ],
  "solutions": [
    "Append missing colon tokens: Verify colons are present on all control flow block headers.",
    "Verify parenthesis balancing: Match and balance all opening parentheses, brackets, and curly braces.",
    "Close all string literals: Balance all quotes and ensure multi-line strings use triple quote structures."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "  File \"script.py\", line 1\n    if True\n          ^\nSyntaxError: expected ':'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Missing colon header\nif True\n    print(\"Hello\")",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "  File \"script.py\", line 1\n    if True\n          ^\nSyntaxError: expected ':'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Fixing Block Headers",
      "language": "python",
      "description": "Ensure all block statements definitions close with colons.",
      "code": "# Wrong: throws SyntaxError\n# def calculate_total(items)\n#     return sum(items)\n\n# Correct\ndef calculate_total(items):\n    return sum(items)"
    },
    {
      "name": "Python 2 vs 3 Print syntax",
      "language": "python",
      "description": "Convert print statements to print function call structures to support modern Python 3 environments.",
      "code": "# Python 2 format: throws SyntaxError in Python 3\n# print \"Task complete\"\n\n# Python 3 format: works in all versions\nprint(\"Task complete\")"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Run compile check commands to verify syntax validity without running the script.",
      "code": "python3 -m py_compile script.py"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check if file utilizes correct UTF-8 byte order markings (BOM).",
      "code": "# Output file encoding details\nGet-Content .\\script.py -Encoding utf8 | Select-Object -First 3"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Validate script syntax using standard python helper shell wrappers.",
      "code": "python3 -c \"import py_compile; py_compile.compile('script.py')\""
    }
  ],
  "commonMistakes": [
    "Using python reserved keywords (like `class`, `import`, `with`, or `raise`) as variable names, which triggers immediate parser rejections.",
    "Forgetting that the actual syntax error is often located on the line preceding the caret (^) indicator, especially with unclosed parenthesis."
  ],
  "prevention": [
    "Use static code linters (like PyLint or Flake8) to scan code quality during file writes.",
    "Enable syntax highlighting and automatic parentheses matching inside your IDE."
  ],
  "faq": [
    {
      "question": "What is a SyntaxError?",
      "answer": "It is a compile-time error raised when code violates the grammatical structures of Python. Because it happens before execution, no code in the file is run."
    },
    {
      "question": "How do I find where the syntax error is located?",
      "answer": "The traceback prints a caret (^) pointing to the exact character where the parser realized the grammar was broken. Note: sometimes the actual error is on the line *before* the caret."
    },
    {
      "question": "Why does 'print \"hello\"' throw a SyntaxError in Python 3?",
      "answer": "In Python 2, 'print' was a statement. In Python 3, 'print' is a function and requires parentheses: 'print(\"hello\")'."
    },
    {
      "question": "How do I check a file for syntax errors without running it?",
      "answer": "Run 'python -m py_compile filename.py' in your terminal. If there is a syntax error, it will compile fail and print the traceback details."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Language Reference - Syntax",
      "url": "https://docs.python.org/3/reference/lexical_analysis.html"
    }
  ],
  "relatedErrors": [
    "indentationerror"
  ],
  "quickFix": {
    "causes": [
      "Missing colon (:) on control block statement headers",
      "Unmatched opening or closing parenthesis/bracket/brace",
      "Unclosed string quote literals or wrong print statement formats"
    ],
    "checklist": [
      "Look at the line above the traceback caret",
      "Verify all block definitions end with colons",
      "Verify brackets balance",
      "Compile check using python -m py_compile"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Missing colon at the end of block statement headers",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Unmatched or missing parenthesis/brackets/braces",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Unclosed string quotes or literal mismatched escapes",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix SyntaxError in Python — Causes & Solutions",
  "seoDescription": "Learn how to fix SyntaxError in Python. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
