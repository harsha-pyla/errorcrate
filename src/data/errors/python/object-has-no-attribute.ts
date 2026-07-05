import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "object-has-no-attribute",
  "name": "Object has no attribute",
  "category": "python",
  "badges": [
    "Python Types",
    "Attribute Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to invoke a method or access an attribute on an object of a type that does not support it (e.g. calling '.append()' on a string).",
  "meanDescription": "The 'Object has no attribute' error is the standard message printed by the 'AttributeError' exception class. It indicates that the target object belongs to a data type that does not implement the requested attribute or method. This typically happens when variables hold values of unexpected types (such as a list of strings where you expect objects, or calling list mutations on string variables due to parsing mistakes).",
  "causes": [
    "Incompatible type methods call: Calling methods belonging to one type on another (e.g. calling '.append()' on a string instead of a list).",
    "Mismatched variable types returned: Functions returning unexpected data types (like returning a tuple instead of a list).",
    "Capitalization spelling typo: Using incorrect casing for built-in or custom attributes."
  ],
  "solutions": [
    "Inspect object type: Run 'type(obj)' or 'print(type(obj))' to verify the variable's actual class type.",
    "Use compatible methods: Call methods that are defined for the target data type (e.g. using string concatenation '+' instead of '.append()').",
    "Check variable assignments trace: Verify the functions returned variables types match your expectations."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 2, in <module>\n    text.append(\"world\")\nAttributeError: 'str' object has no attribute 'append'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to call .append() on a string literal\ntext = \"hello\"\ntext.append(\"world\")",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    text.append(\"world\")\nAttributeError: 'str' object has no attribute 'append'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Object Types",
      "language": "python",
      "description": "Inspect object class namespaces using type() or isinstance() before performing type-specific operations.",
      "code": "data = \"hello\"\n\n# 1. Inspect the type directly\nprint(type(data))  # <class 'str'>\n\n# 2. Add type guards to protect calls\nif isinstance(data, list):\n    data.append(\"world\")\nelif isinstance(data, str):\n    data += \" world\"\n\nprint(data)  # \"hello world\""
    },
    {
      "name": "Resolving Tuple vs List return",
      "language": "python",
      "description": "Ensure methods called align with sequence type. Tuples do not support list-specific operations like append.",
      "code": "# Wrong: tuple returns do not have .append()\n# def get_data():\n#     return (1, 2, 3)\n# values = get_data()\n# values.append(4)\n\n# Correct: cast to list if mutation is required\ndef get_data():\n    return (1, 2, 3)\n\nvalues = list(get_data())\nvalues.append(4)  # Succeeds"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify object class directories and methods in interactive python sessions.",
      "code": "python3 -c \"text = 'abc'; print('split' in dir(text))\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Verify dictionary methods lookups in Windows environments.",
      "code": "python3 -c \"d = {}; print(hasattr(d, 'keys'))\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check if object has specific properties inside macOS python terminals.",
      "code": "python3 -c \"print(isinstance(5, int))\""
    }
  ],
  "commonMistakes": [
    "Calling `.append()` on list objects that were mutated inline (e.g. `items = [1, 2].append(3)` returns `None` because append modifies the list in place and returns None. Future calls on `items` raise AttributeError).",
    "Chaining methods assuming string returns when methods return other types."
  ],
  "prevention": [
    "Avoid reassignment of variables to different types in the same code file scope.",
    "Utilize type hints (`var: list = []`) to enable IDE method autocomplete selectors."
  ],
  "faq": [
    {
      "question": "What causes 'Object has no attribute' error?",
      "answer": "It occurs when you call a method or access an attribute on a type that doesn't define it. For example, strings do not have an '.append()' method (which belongs to lists)."
    },
    {
      "question": "How do I fix ''str' object has no attribute 'append''?",
      "answer": "This means the variable is a string, not a list. If you want to add items, convert the variable to a list first: 'my_list = []' and then call '.append()', or use string concatenation '+' if working with text."
    },
    {
      "question": "How do I inspect what methods are available on my object?",
      "answer": "Run 'dir(obj)' or read the official documentation for the object's type to see all valid methods and attributes."
    },
    {
      "question": "How do I check if an object is of a specific type before calling methods?",
      "answer": "Use the 'isinstance()' function: 'if isinstance(my_var, list): my_var.append(item)'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Standard Types reference",
      "url": "https://docs.python.org/3/library/stdtypes.html"
    }
  ],
  "relatedErrors": [
    "attributeerror"
  ],
  "quickFix": {
    "causes": [
      "Invoking list operations (like append) on string type variables",
      "Functions returning different data types than expected (e.g. None or Tuple)",
      "Capitalization typos in method or property lookup calls"
    ],
    "checklist": [
      "Print variable type: print(type(var))",
      "Ensure variable was not reset by inline methods (like append)",
      "Verify target method spelling in dir(var) list",
      "Use isinstance(var, type) guards"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Invoking list methods on string objects (e.g. append)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Inconsistent variable data type returns from functions",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Capitalization spelling typo in attribute names",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Object has no attribute Error: Root Causes & Verified Fixes",
  "seoDescription": "Encountering Object has no attribute in Python? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
