import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "nameerror",
  "name": "NameError",
  "category": "python",
  "badges": [
    "Python System",
    "Runtime Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Python interpreter attempts to resolve a variable, function, or module name that has not been defined in the local or global scope.",
  "meanDescription": "A 'NameError' is a runtime error raised when Python fails to locate a matching identifier name in the local namespace, enclosing scopes, global namespace, or built-in namespaces. This commonly happens because of simple typographical spelling errors, referencing variables before they are initialized, neglecting to import modules before using them, or referencing variables defined inside function local scopes from parent global scopes.",
  "causes": [
    "Spelling typo in variable or function name: Simple spelling mistakes in referencing identifiers.",
    "Missing module imports: Calling library tools (like 'math.sin' or 'os.path') without writing the 'import' statement first.",
    "Variable scope boundary mismatch: Attempting to reference local variables outside their parent function boundaries."
  ],
  "solutions": [
    "Verify identifier spelling: Double check variable or function name spellings.",
    "Import required modules: Prepend the script with the required library imports.",
    "Check global vs local scope: Define variables in the appropriate scope or pass them as parameters, or use the 'global' or 'nonlocal' keywords."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    print(result)\nNameError: name 'result' is not defined",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Referencing variable before definition\nprint(value)\nvalue = 42",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 2, in <module>\n    print(value)\nNameError: name 'value' is not defined",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Global Scope Modifications",
      "language": "python",
      "description": "Use the global keyword to declare that modifications inside a function target a global variable.",
      "code": "counter = 0\n\ndef increment():\n    # Tell Python we are writing to the global counter variable\n    global counter\n    counter += 1\n\nincrement()\nprint(counter) # 1"
    },
    {
      "name": "Scope Variable Access",
      "language": "python",
      "description": "Return local values from function scopes to allow them to be captured globally.",
      "code": "# Wrong: throws NameError\n# def calculate():\n#     total = 42\n# calculate()\n# print(total)\n\n# Correct\ndef calculate():\n    total = 42\n    return total\n\nresult = calculate()\nprint(result) # 42"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify import syntax statements using quick testing lines.",
      "code": "python3 -c \"import sys; print(sys.argv)\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Use static analysis tools like pyflakes to check for undefined variables in directories.",
      "code": "# Install and run pyflakes scanner\npip install pyflakes\npyflakes script.py"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check builtins scope identifiers in active sessions.",
      "code": "python3 -c \"import builtins; print(dir(builtins))\""
    }
  ],
  "commonMistakes": [
    "Using a variable inside loops (like list comprehensions) that name-clashes with global variables, creating scope shadowing.",
    "Forgetting to import libraries like `os` or `sys` before referencing their methods, causing NameErrors on scripts startups."
  ],
  "prevention": [
    "Run static code linters (like PyFlakes or Flake8) to detect undefined names before execution.",
    "Declare and initialize all variables at the beginning of classes or code scopes."
  ],
  "faq": [
    {
      "question": "What is a NameError?",
      "answer": "It is a runtime exception raised when Python cannot find a variable or function name you referenced in your code."
    },
    {
      "question": "How do I fix 'NameError: name 'X' is not defined'?",
      "answer": "First check for typos. If the spelling is correct, ensure that the variable 'X' is assigned a value before you try to read it, or that you have imported the module hosting it."
    },
    {
      "question": "Why can't I access variables defined inside a function?",
      "answer": "Variables defined inside functions have 'local scope' and cannot be accessed from the outside. To use them, return the value from the function or declare the variable in the global scope."
    },
    {
      "question": "How do I access a global variable from inside a function?",
      "answer": "To read a global variable, you can reference it directly. To modify a global variable inside a function, declare it using the 'global' keyword: 'global my_var'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Scope and Namespaces guide",
      "url": "https://docs.python.org/3/tutorial/classes.html#python-scopes-and-namespaces"
    }
  ],
  "relatedErrors": [
    "attributeerror"
  ],
  "quickFix": {
    "causes": [
      "Typo or spelling mismatch inside referenced identifier string",
      "Forgetting to write the import statement for a module",
      "Variables defined inside local function scope accessed globally"
    ],
    "checklist": [
      "Check spelling of variables and functions names",
      "Add missing module import statements",
      "Ensure variables are defined before they are read",
      "Return local variables from functions to capture"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Spelling typo in identifier name (variable/function)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Neglecting to import module namespace (e.g. forgot import os)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Accessing local scope variables in global context",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix NameError in Python (With Examples)",
  "seoDescription": "Resolve NameError in Python with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified fixes."
};

export default errorData;
