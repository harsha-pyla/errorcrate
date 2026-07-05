import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "object-is-not-callable",
  "name": "Object is not callable",
  "category": "python",
  "badges": [
    "Python Types",
    "TypeError",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to invoke a non-callable object (like a string, list, or integer) as if it were a function using parentheses.",
  "meanDescription": "The 'Object is not callable' error is raised by the 'TypeError' exception class when you append parentheses '()' to an object that does not implement the magic '__call__' method. This commonly happens because a variable name shadows a built-in function (e.g. naming a list 'list = []' and then trying to call the list constructor 'list()'), forgetting mathematical operators (like writing 'x(y + 1)' instead of 'x * (y + 1)'), or placing parentheses after properties instead of methods.",
  "causes": [
    "Parentheses on non-callable variables: Attempting to call standard variables (strings, lists, dicts) as functions (e.g. 'name()').",
    "Shadowing built-in function names: Reassigning built-in function identifiers (like 'list', 'str', 'dict') to local variables.",
    "Missing math operator overrides: Writing math equations using algebraic shorthand formats without operators (e.g. '5(x + 2)')."
  ],
  "solutions": [
    "Verify parenthesis usage: Ensure you only place parentheses '()' after actual function, method, or class constructors definitions.",
    "Avoid shadowing built-in names: Rename local variables to avoid overriding built-in constructors.",
    "Add explicit math operators: Write algebraic equations with explicit multiplication signs ('5 * (x + 2)')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 4, in <module>\n    new_items = list(items)\nTypeError: 'list' object is not callable",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Shadowing the built-in list constructor name\nlist = [10, 20]\nitems = (30, 40)\nnew_items = list(items)",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 4, in <module>\n    new_items = list(items)\nTypeError: 'list' object is not callable",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Avoiding Shadowing Mismatches",
      "language": "python",
      "description": "Do not override built-in function names (like list, dict, str, int, type, sum) with variable names.",
      "code": "# Wrong: shadows sum\n# sum = 10\n# values = [1, 2, 3]\n# print(sum(values))  # TypeError: 'int' object is not callable\n\n# Correct\ntotal_sum = 10\nvalues = [1, 2, 3]\nprint(sum(values))  # 6"
    },
    {
      "name": "Checking Callability",
      "language": "python",
      "description": "Audit call options on objects dynamically before appending parentheses.",
      "code": "def process_data():\n    return \"Success\"\n\nmessage = \"Hello\"\n\n# Check callability using built-in function\nprint(callable(process_data))  # True\nprint(callable(message))       # False"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check built-in class types definitions in terminal prompts.",
      "code": "python3 -c \"print(callable(int))\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Check algebraic equations validation constraints.",
      "code": "python3 -c \"x = 5; print(2 * (x + 3))\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify indexing vs calling list items in macOS python.",
      "code": "python3 -c \"items = [1, 2]; print(items[0])\""
    }
  ],
  "commonMistakes": [
    "Using parentheses `()` instead of square brackets `[]` when querying elements from a list, tuple, or dictionary.",
    "Declaring properties in custom classes with the same name as methods, leading attributes to shadow functions."
  ],
  "prevention": [
    "Adopt descriptive naming structures (`user_list`, `total_sum`) to avoid clashes with built-ins.",
    "Verify syntax operators inside complex mathematical formulas."
  ],
  "faq": [
    {
      "question": "What does 'Object is not callable' mean?",
      "answer": "It means you added parentheses '()' after a variable that is not a function, class, or method, attempting to run it like one."
    },
    {
      "question": "How do I fix ''list' object is not callable'?",
      "answer": "This usually happens if you named a local variable 'list' (e.g. 'list = [1, 2, 3]') which shadows the built-in 'list()' constructor. When you try to call 'list()' later, Python tries to call your local list variable and fails. Rename your variable to something else, like 'my_list'."
    },
    {
      "question": "Why did math equations throw this error?",
      "answer": "In math, '5(x + 2)' implies multiplication. In Python, this is interpreted as calling a function named '5'. You must write: '5 * (x + 2)'."
    },
    {
      "question": "How do I check if an object is callable in Python?",
      "answer": "Use the built-in 'callable(obj)' function. It returns 'True' if the object is a function or implements the '__call__' method, and 'False' otherwise."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Built-in Functions - callable",
      "url": "https://docs.python.org/3/library/functions.html#callable"
    }
  ],
  "relatedErrors": [
    "typeerror"
  ],
  "quickFix": {
    "causes": [
      "Shadowing built-in identifiers (list, dict, str, sum) with variable values",
      "Using parentheses () instead of brackets [] for sequence queries",
      "Omitted math multiplication signs (*) inside algebraic expressions"
    ],
    "checklist": [
      "Verify target variable is not shadowing built-ins",
      "Convert sequence calls to brackets index queries: var[idx]",
      "Append explicit multiplication signs: *",
      "Verify callability using callable(var)"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Shadowing built-in constructors (e.g. list/str/dict variables)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Calling list index bracket queries using parentheses ()",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing math multiplication operators (*)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Object is not callable Fast — Python Solutions Guide",
  "seoDescription": "Complete guide to fixing Object is not callable in Python. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
