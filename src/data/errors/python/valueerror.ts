import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "valueerror",
  "name": "ValueError",
  "category": "python",
  "badges": [
    "Python System",
    "Runtime Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a function receives an argument of the correct data type but with an invalid value (e.g. parsing an alphanumeric string as an integer).",
  "meanDescription": "A 'ValueError' is raised at runtime when a built-in operation or function receives an argument that has the correct data type but contains an inappropriate value. For example, the 'int()' constructor accepts string inputs, but calling 'int(\"xyz\")' raises a ValueError because the string cannot be parsed as a base-10 numerical digit. It is also commonly raised during list unpacking operations when the number of target variables does not match the items count in the iterable.",
  "causes": [
    "Invalid type conversion value: Passing an incompatible value to parsing constructors (e.g. 'int(\"abc\")' or 'float(\"nan\")' in invalid contexts).",
    "Mismatched tuple/list unpacking: Trying to unpack an iterable into too many or too few variables.",
    "Invalid value search query: Running '.index()' or '.remove()' on a list or string for an item that does not exist."
  ],
  "solutions": [
    "Validate strings before conversion: Use testing strings methods like '.isdigit()' or wrap casting in try/except blocks.",
    "Balance unpacking variables: Ensure variable count matches the length of the list/tuple (or use the asterisk '*' collector).",
    "Check item existence in lists: Verify the target item exists in the collection using the 'in' membership operator before calling '.index()' or '.remove()'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    number = int(\"abc\")\nValueError: invalid literal for int() with base 10: 'abc'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to cast text to integer\nnumber = int(\"abc\")",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    number = int(\"abc\")\nValueError: invalid literal for int() with base 10: 'abc'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Safe Casting Pattern",
      "language": "python",
      "description": "Wrap casting attempts inside try/except structures to return fallback values on parse failures.",
      "code": "def parse_port(port_str):\n    try:\n        return int(port_str)\n    except ValueError:\n        print(f\"Warning: '{port_str}' is not a valid port. Defaulting to 8080.\")\n        return 8080"
    },
    {
      "name": "Asterisk List Unpacking",
      "language": "python",
      "description": "Use the asterisk syntax key to collect remaining values when unpacking lists of unknown lengths.",
      "code": "# Mismatched variables counts throw ValueError: too many values to unpack\n# first, second = [10, 20, 30]\n\n# Correct: collects remainder items into a list\nfirst, second, *remainder = [10, 20, 30, 40]\nprint(first)      # 10\nprint(remainder)  # [30, 40]"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Test input numeric validations in interactive python shell prompts.",
      "code": "python3 -c \"text = '123'; print(text.isdigit())\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Validate list item presence checks inside scripts.",
      "code": "python3 -c \"items = ['a', 'b']; print('c' in items)\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Test unpacking tuples behaviors.",
      "code": "python3 -c \"a, b = (1, 2); print(a)\""
    }
  ],
  "commonMistakes": [
    "Running list `.remove()` or `.index()` on user inputs directly without checking if the value exists in the list, which will raise a ValueError when missing.",
    "Unpacking values returned by database query cursors (e.g. `x, y = query()`) assuming 2 items are always returned, causing crashes when queries yield empty lists or single rows."
  ],
  "prevention": [
    "Use target collection checks (`if item in list:`) to safeguard index search methods.",
    "Validate input formats using standard patterns before executing operations."
  ],
  "faq": [
    {
      "question": "What is the difference between TypeError and ValueError?",
      "answer": "TypeError is raised when you pass a completely wrong type (e.g. passing a list to int()). ValueError is raised when the type is correct, but the value is invalid (e.g. passing 'abc' to int())."
    },
    {
      "question": "How do I fix 'ValueError: not enough values to unpack'?",
      "answer": "This means you are trying to unpack an iterable (like a list) into more variables than it contains (e.g. 'a, b, c = [1, 2]'). Ensure the number of variables matches the list size, or use 'a, *b = [1, 2, 3]' to capture remaining items."
    },
    {
      "question": "How do I safely parse an integer in Python?",
      "answer": "Use a try/except block: 'try: val = int(text) except ValueError: val = 0'."
    },
    {
      "question": "Why does list.remove() throw a ValueError?",
      "answer": "If you run 'my_list.remove(\"item\")' but \"item\" is not in the list, Python raises a ValueError. Always check if the item is present using 'if \"item\" in my_list:' first."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Exception hierarchy reference",
      "url": "https://docs.python.org/3/library/exceptions.html#ValueError"
    }
  ],
  "relatedErrors": [
    "typeerror"
  ],
  "quickFix": {
    "causes": [
      "Passing invalid text strings to type conversion constructors",
      "Mismatch between variable count and unpacked items size",
      "Searching or removing missing items from collections"
    ],
    "checklist": [
      "Check variable length before unpacking",
      "Use try/except blocks to wrap int() casting",
      "Confirm item presence using 'in' operator",
      "Validate user inputs before processing"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Alphanumeric string parsing in int() constructor",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Mismatched iterable variables unpacking count",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Searching non-existent items in list index()",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "ValueError Explained: Causes, Fixes & Prevention",
  "seoDescription": "Fix ValueError fast. This Python debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
