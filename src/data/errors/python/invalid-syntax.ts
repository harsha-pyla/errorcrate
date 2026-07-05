import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "invalid-syntax",
  "name": "Invalid syntax",
  "category": "python",
  "badges": [
    "Python System",
    "Parser Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you write code that violates Python's grammar rules, such as using reserved keywords for variables or incorrect print syntax.",
  "meanDescription": "The 'Invalid syntax' error is the standard message returned by the 'SyntaxError' class during compilation. It indicates that the Python parser could not translate the code structure into bytecode because it violates core syntax rules. This commonly occurs when mixing Python 2 and Python 3 syntax (like writing print without parentheses), using keywords as variable names, or using incorrect formatting inside dictionaries, lists, or control flow definitions.",
  "causes": [
    "Python 2 vs 3 print mismatch: Writing 'print \"message\"' (which is invalid in Python 3 where print is a function).",
    "Reserved keyword assignments: Attempting to assign values to reserved keyword names like 'class = 1' or 'yield = 5'.",
    "Malformed f-string expressions: Mixing quotes or writing incorrect expressions inside f-string brackets (specifically improved in modern Python versions)."
  ],
  "solutions": [
    "Use print with parentheses: Convert print statements to function calls containing brackets ('print(\"message\")').",
    "Rename keyword variables: Use non-reserved naming structures (e.g. 'class_name' or 'yield_value') instead of Python keywords.",
    "Correct f-string quote matching: Ensure quote symbols inside f-string braces do not conflict with outer quote delimiters."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "  File \"script.py\", line 1\n    print \"hello\"\n          ^^^^^^^\nSyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Python 2 print statement in Python 3\nprint \"hello\"",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "  File \"script.py\", line 2\n    print \"hello\"\n          ^^^^^^^\nSyntaxError: Missing parentheses in call to 'print'. Did you mean print(...)?",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Reserved Naming Fix",
      "language": "python",
      "description": "Do not assign values to keyword definitions. Use descriptive variable suffixes to prevent grammar parser blocks.",
      "code": "# Wrong: throws SyntaxError: invalid syntax\n# pass = True\n\n# Correct\npass_status = True"
    },
    {
      "name": "f-string Quote Configuration",
      "language": "python",
      "description": "Format nested braces quotes inside f-strings to avoid parsing collisions.",
      "code": "user = {\"name\": \"Alice\"}\n\n# Wrong: inner single quotes match outer single quotes, causing parser splits\n# message = f'Hello {user['name']}'\n\n# Correct: mix single and double quotes\nmessage = f\"Hello {user['name']}\"\nprint(message)"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Perform syntax parsing check commands to locate bugs without running code.",
      "code": "python3 -m py_compile script.py"
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Ensure files use standard UTF-8 encoding patterns.",
      "code": "# Compile verify syntax\npython -m py_compile script.py"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Test print conversions in macOS python.",
      "code": "python3 -c \"print('Hello')\""
    }
  ],
  "commonMistakes": [
    "Copying Python 2 legacy code modules into modern Python 3 scripts, triggering immediate syntax rejections on print statements.",
    "Forgetting commas `,` separating items inside multi-line lists or dictionary configurations."
  ],
  "prevention": [
    "Configure IDE syntax linters (like PyLint or Flake8) to flag syntax errors on save.",
    "Utilize modern code formatting tools (like Black) to normalize structure patterns."
  ],
  "faq": [
    {
      "question": "What is 'SyntaxError: invalid syntax'?",
      "answer": "It is a compile-time error raised when your code violates the syntax rules of Python. The program cannot start executing until the syntax is corrected."
    },
    {
      "question": "How is 'invalid syntax' different from other SyntaxErrors?",
      "answer": "'invalid syntax' is a generic catch-all message the parser prints when it encounters grammatical errors that do not match more specific exceptions (like 'expected \":\"' or 'unexpected indent')."
    },
    {
      "question": "Why does 'print \"hello\"' throw this error?",
      "answer": "In Python 3, print is a function. You must write: 'print(\"hello\")'."
    },
    {
      "question": "Can I use words like 'pass', 'try', or 'except' as variable names?",
      "answer": "No, these are reserved keywords that Python uses to parse control structures. Attempting to assign values to them (e.g. 'pass = True') will always raise a SyntaxError."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Keyword Reference",
      "url": "https://docs.python.org/3/reference/lexical_analysis.html#keywords"
    }
  ],
  "relatedErrors": [
    "syntaxerror"
  ],
  "quickFix": {
    "causes": [
      "Using legacy Python 2 print syntax without parentheses",
      "Assigning variable values to reserved keywords (pass, class)",
      "Unmatched quote nesting bounds inside f-string braces"
    ],
    "checklist": [
      "Verify print statement calls use parentheses",
      "Rename variable names that match reserved keywords",
      "Balance double and single quotes inside f-strings",
      "Scan syntax using python -m py_compile"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Using Python 2 print statements in Python 3",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Assigning values to Python reserved keywords",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Malformed syntax inside f-string braces",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Invalid syntax in Python — Causes & Solutions",
  "seoDescription": "Troubleshoot Invalid syntax in Python with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
