import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "typeerror",
  "name": "TypeError",
  "category": "python",
  "badges": [
    "Python System",
    "Runtime Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when an operation or function is applied to an object of an inappropriate data type.",
  "meanDescription": "A 'TypeError' is a runtime error raised when a program attempts to perform an operation on an object whose type does not support it. This commonly happens when trying to perform arithmetic operations on mismatching types (like adding a string and an integer), calling an object that is not a function, passing incorrect argument counts to functions, or indexing an object that is not a collection.",
  "causes": [
    "Unsupported operand operations: Attempting to combine incompatible data types (e.g. '1 + \"2\"').",
    "Incorrect function arguments: Passing too many or too few parameters to a function definition.",
    "Non-subscriptable object indexing: Attempting to access keys or indexes on objects that do not support indexing (like calling 'my_int[0]')."
  ],
  "solutions": [
    "Cast matching data types: Explicitly convert objects to matching types before operations (e.g. 'int(\"2\")' or 'str(1)').",
    "Match function arguments footprint: Verify the calling arguments count matches the function parameters layout.",
    "Verify object subscript eligibility: Ensure objects are lists, dictionaries, or tuples before using index brackets."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    result = \"total: \" + 42\nTypeError: can only concatenate str (not \"int\") to str",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Concatenating string with integer\nresult = \"total: \" + 42",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    result = \"total: \" + 42\nTypeError: can only concatenate str (not \"int\") to str",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Type Casting Operations",
      "language": "python",
      "description": "Convert mismatched types explicitly using constructors before combining them.",
      "code": "# Wrong: throws TypeError\n# print(\"Score: \" + 10)\n\n# Correct\nprint(\"Score: \" + str(10))"
    },
    {
      "name": "Static Type Checking",
      "language": "bash",
      "description": "Run mypy static type checking scans to flag potential runtime type mismatches.",
      "code": "# 1. Install mypy\n$ pip install mypy\n\n# 2. Run mypy check on type-hinted code files\n$ mypy script.py"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify python runtime behavior with test interpreter commands.",
      "code": "python3 -c \"print('Total: ' + str(42))\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Run static analysis checks utilizing type checker extensions inside Windows environments.",
      "code": "# Scan python project with mypy\nmypy .\\src\\"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check type signatures matching in macOS python shells.",
      "code": "python3 -c \"type(None)\""
    }
  ],
  "commonMistakes": [
    "Attempting to modify immutable tuple collections directly (e.g. `my_tuple[0] = 5`), which returns a TypeError because tuple items cannot be altered.",
    "Shadowing core built-in keywords (like naming a custom list array `list = [1, 2]`), which triggers errors when attempting to use the list constructor afterwards."
  ],
  "prevention": [
    "Employ Type Hinting syntax configurations to clarify function parameters interfaces.",
    "Perform explicit `None` checks before attempting dictionary lookups on API responses."
  ],
  "faq": [
    {
      "question": "What causes a TypeError in Python?",
      "answer": "It occurs when you apply a built-in operation or function to an object of an incorrect type (like trying to concatenate 'str' and 'int')."
    },
    {
      "question": "How do I fix 'TypeError: 'NoneType' object is not subscriptable'?",
      "answer": "This means you are trying to index (e.g. 'data[\"key\"]') a variable that has a value of 'None'. Check why the function or database returned 'None' instead of a dictionary or list."
    },
    {
      "question": "How do I enforce strict type checking?",
      "answer": "Python is dynamically typed but supports type hinting. Install and run 'mypy script.py' to run static type checker scans on type-annotated code."
    },
    {
      "question": "Why do I get 'TypeError: 'list' object is not callable'?",
      "answer": "This happens if you named a variable 'list' (shadowing the built-in 'list()' function) or if you tried to call a list like a function using parentheses: 'my_list()' instead of using index brackets 'my_list[0]'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Type Hints documentation",
      "url": "https://docs.python.org/3/library/typing.html"
    }
  ],
  "relatedErrors": [
    "valueerror"
  ],
  "quickFix": {
    "causes": [
      "Unsupported arithmetic operation on mismatched data types",
      "Passing incorrect parameter counts to function definitions",
      "Attempting to index non-subscriptable object collections"
    ],
    "checklist": [
      "Inspect the traceback variables types",
      "Cast parameters explicitly: str(), int(), float()",
      "Check argument counts in function signature",
      "Run mypy static check validation"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Unsupported arithmetic operations on mixed types",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Mismatched argument counts passed to function",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Indexing non-subscriptable objects (e.g. NoneType)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "TypeError: Quick Fix Guide for Python Developers",
  "seoDescription": "Getting TypeError in Python? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix it."
};

export default errorData;
