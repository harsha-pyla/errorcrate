import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "keyerror",
  "name": "KeyError",
  "category": "python",
  "badges": [
    "Python System",
    "Runtime Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to access a dictionary key that does not exist in the collection.",
  "meanDescription": "A 'KeyError' is raised at runtime when a dictionary lookup operation fails to find the requested key. Unlike some languages where missing keys return a default value (like 'undefined' in JavaScript), Python raises this exception immediately to prevent developer oversights. Modern Python (Python 3.11+) traceback prints the exact missing key string inline.",
  "causes": [
    "Accessing non-existent key: Directly requesting 'my_dict[key]' when 'key' has not been defined in the dictionary.",
    "Key type mismatch: Querying with a key of the wrong type (such as using an integer '1' instead of string '\"1\"', or vice versa).",
    "Whitespace spelling typo: Simple spelling typos or leading/trailing whitespace mismatches in the lookup key string."
  ],
  "solutions": [
    "Use the dict.get() method: Use '.get(key, default)' to return a fallback default value (or 'None') instead of raising exceptions.",
    "Verify key existence: Guard index lookups using the 'in' membership check operator ('if key in my_dict:').",
    "Use defaultdict class: Instantiate dictionary wrappers from the collections module ('from collections import defaultdict') to automate default values for missing keys."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 2, in <module>\n    value = user[\"email\"]\nKeyError: 'email'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing a key that does not exist in dictionary\nuser = {\"name\": \"Alice\", \"age\": 30}\nprint(user[\"email\"])",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    print(user[\"email\"])\n          ~~~~^^^^^^^^^\nKeyError: 'email'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Dict Get and Guards",
      "language": "python",
      "description": "Utilize the safe get method or check key presence with membership checks prior to access.",
      "code": "user = {\"name\": \"Alice\", \"age\": 30}\n\n# 1. Safe get method (returns None instead of raising KeyError)\nuser_email = user.get(\"email\")\n\n# 2. Provide custom fallback value if key is missing\nuser_role = user.get(\"role\", \"standard_user\")\n\n# 3. Membership check guard\nif \"email\" in user:\n    print(user[\"email\"])"
    },
    {
      "name": "Defaultdict Automations",
      "language": "python",
      "description": "Instantiate defaultdict to automatically seed missing keys with default values.",
      "code": "from collections import defaultdict\n\n# Initialize dictionary where missing keys automatically resolve to integer (0)\nstats = defaultdict(int)\n\n# Safely increment keys without pre-declaring them\nstats[\"views\"] += 1\nprint(stats[\"views\"])       # 1\nprint(stats[\"downloads\"])   # 0 (auto-initialized)"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify dictionary lookups behaviors in python shells.",
      "code": "python3 -c \"d = {'a': 1}; print(d.get('b', 'Missing'))\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Test type safety rules (strings vs integers keys mismatch) inside python commands.",
      "code": "python3 -c \"d = {'1': 'string_key'}; print(d.get(1, 'Key Mismatch'))\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Demonstrate defaultdict creation lists in macOS python.",
      "code": "python3 -c \"from collections import defaultdict; d = defaultdict(list); d['k'].append(1); print(d['k'])\""
    }
  ],
  "commonMistakes": [
    "Assuming numeric strings and raw integers map to the same key value (e.g. querying `d[1]` to access a value defined under key `\"1\"`).",
    "Running direct lookups on nested dictionaries (e.g. `data[\"user\"][\"address\"]`) assuming outer keys are always present, throwing KeyErrors on nested levels."
  ],
  "prevention": [
    "Adopt schema validation libraries (like Pydantic or Marshmallow) when parsing raw JSON payloads from APIs.",
    "Utilize safe default structures when executing dictionary accumulators."
  ],
  "faq": [
    {
      "question": "What is a KeyError?",
      "answer": "It is a runtime exception raised when you attempt to retrieve a value from a dictionary using a key that does not exist in the dictionary."
    },
    {
      "question": "How is 'dict.get()' different from bracket indexing?",
      "answer": "Bracket indexing ('my_dict[\"key\"]') raises a KeyError if the key is missing. The '.get(\"key\", default)' method returns 'None' (or your specified default value) instead of raising an error."
    },
    {
      "question": "How do I avoid KeyErrors when building a counter?",
      "answer": "Use the 'collections.defaultdict(int)' class. It automatically initializes missing keys to 0 when you increment them."
    },
    {
      "question": "Why did 'my_dict[1]' fail when I have '1' as a key?",
      "answer": "Python keys are strictly typed. The integer '1' is different from the string '\"1\"'. If your dictionary has string keys, lookup using an integer will fail with a KeyError."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Collections defaultdict documentation",
      "url": "https://docs.python.org/3/library/collections.html#collections.defaultdict"
    }
  ],
  "relatedErrors": [
    "indexerror"
  ],
  "quickFix": {
    "causes": [
      "Target lookup key is missing from dictionary mappings",
      "Key type mismatch (e.g. searching integer 1 instead of string '1')",
      "Typo or whitespace differences in key string parameter"
    ],
    "checklist": [
      "Switch bracket indexing to .get(key, default)",
      "Check keys list spelling and types",
      "Guard direct calls: if key in my_dict:",
      "Use defaultdict for list/integer counters"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Directly querying non-existent dictionary keys",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Key type mapping mismatch (e.g. integer vs string)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo or hidden trailing whitespace in key",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "KeyError: Quick Fix Guide for Python Developers",
  "seoDescription": "KeyError in Python — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error permanently."
};

export default errorData;
