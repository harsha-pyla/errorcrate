import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "attributeerror",
  "name": "AttributeError",
  "category": "python",
  "badges": [
    "Python System",
    "Runtime Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to reference or assign an attribute or method that does not exist on a specified object.",
  "meanDescription": "An 'AttributeError' is raised at runtime when a reference to an attribute (or method call) fails. This commonly happens because of typographical errors in method names, attempting to call a method on a variable that evaluates to 'None' (e.g. 'NoneType has no attribute append'), or when a module or class has been updated and a deprecated attribute has been removed.",
  "causes": [
    "Calling methods on NoneType: Variables that evaluate to None (e.g. from failed database calls or functions missing return statements) are queried for attributes.",
    "Spelling typo in method name: Simple typos (e.g. calling '.apend()' instead of '.append()').",
    "Deprecated module features: Importing or calling a method that was deleted or renamed in a library update (e.g. using 'np.float' which was deprecated in numpy v1.20)."
  ],
  "solutions": [
    "Verify object is not None: Add safety guards ('if obj is not None:') before accessing properties.",
    "Inspect spelling using dir(): Query the object's interface using 'dir(obj)' to print valid attributes.",
    "Verify library version changes: Check the library changelog to see if attributes were deprecated or renamed."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    data.append(42)\nAttributeError: 'NoneType' object has no attribute 'append'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Function missing a return statement assigns None\ndef get_list():\n    my_list = [1, 2, 3]\n    # missing return\n\ndata = get_list()\ndata.append(42)",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 7, in <module>\n    data.append(42)\nAttributeError: 'NoneType' object has no attribute 'append'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "None Check Validation",
      "language": "python",
      "description": "Verify object integrity prior to calling attributes or mutating methods.",
      "code": "# Check if data is populated\nif data is not None:\n    data.append(42)\nelse:\n    data = [42] # Initialize fallback"
    },
    {
      "name": "Safe Attribute Getter",
      "language": "python",
      "description": "Utilize getattr to safely query attributes with custom fallbacks if the attribute is missing.",
      "code": "class Configuration:\n    port = 8080\n\nconfig = Configuration()\n\n# Safely retrieve 'host' attribute, fallback to localhost if missing\nhost_ip = getattr(config, \"host\", \"127.0.0.1\")\nprint(host_ip) # 127.0.0.1"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Query object interfaces inside interactive shells to locate spelling discrepancies.",
      "code": "python3 -c \"items = []; print(dir(items))\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Check numpy deprecated type variables configurations.",
      "code": "python3 -c \"import numpy as np; print(dir(np))\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Test hasattr check patterns in mac environments.",
      "code": "python3 -c \"print(hasattr(list, 'append'))\""
    }
  ],
  "commonMistakes": [
    "Forgetting that functions in Python return `None` by default if a `return` statement is omitted, which causes crashes when trying to chain methods on function responses.",
    "Using deprecated methods after updating third-party libraries without checking documentation migrations guides."
  ],
  "prevention": [
    "Run type linters (like mypy) to catch none-type accesses beforehand.",
    "Add explicit unit testing coverage on API response parses."
  ],
  "faq": [
    {
      "question": "What is an AttributeError?",
      "answer": "It is a runtime exception raised when you try to access an attribute or call a method on an object that does not define it."
    },
    {
      "question": "How do I fix 'AttributeError: 'NoneType' object has no attribute X'?",
      "answer": "This is the most common AttributeError. It means the object is 'None'. Check the line where the object was assigned; a function likely returned 'None' instead of the expected object."
    },
    {
      "question": "How do I inspect what attributes an object has?",
      "answer": "Use the built-in 'dir(obj)' function inside your code or an interactive Python shell to see all valid methods and properties of the object."
    },
    {
      "question": "How do I safely get an attribute if it might not exist?",
      "answer": "Use the 'getattr(obj, \"attr_name\", default_value)' function. This retrieves the attribute value if present, or returns the default value without raising an exception."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Built-in Functions - getattr",
      "url": "https://docs.python.org/3/library/functions.html#getattr"
    }
  ],
  "relatedErrors": [
    "nameerror"
  ],
  "quickFix": {
    "causes": [
      "Target variable evaluates to NoneType (e.g. missing return statement)",
      "Spelling typo inside attribute or method name string",
      "Deprecated library attributes removed in package updates"
    ],
    "checklist": [
      "Verify target variable is not None",
      "Run dir(obj) to inspect valid attributes",
      "Check object attributes availability with hasattr()",
      "Check package updates changelogs"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Calling attribute or method on NoneType",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in class method or attribute name",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incompatible library versions (deprecated attributes)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot AttributeError — Python Error Guide",
  "seoDescription": "Getting AttributeError in Python? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix."
};

export default errorData;
