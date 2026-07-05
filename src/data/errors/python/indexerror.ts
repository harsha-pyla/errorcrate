import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "indexerror",
  "name": "IndexError",
  "category": "python",
  "badges": [
    "Python System",
    "Runtime Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to access an item from a list or tuple using an index that is outside the range of its populated elements.",
  "meanDescription": "An 'IndexError' is raised at runtime when you attempt to retrieve or mutate an item in a sequence collection (such as a list, tuple, range, or string) using an integer index that is less than the negative length of the sequence or greater than or equal to its positive length. Modern Python versions (Python 3.11+) provide enhanced error traceback logs pointing to the exact subscript brackets causing the out-of-bounds access.",
  "causes": [
    "Accessing index equal to or greater than length: Requesting 'items[len(items)]' (since indexing is 0-based, the maximum index is 'len - 1').",
    "Accessing index on empty list: Attempting to read index 0 from a list that contains zero items.",
    "Incorrect negative offset indexing: Using negative values (like '-5' on a list of length 3) that exceed the sequence offset limits."
  ],
  "solutions": [
    "Check sequence length: Verify the index query is less than the sequence size ('if index < len(items):') before reading.",
    "Use list slicing bounds protection: Request item slices (e.g. 'items[0:1]') which return empty lists instead of raising exceptions on overflow.",
    "Verify list is not empty: Guard index calls with checks to verify the sequence is populated ('if items:')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 2, in <module>\n    item = items[3]\n           ~~~~~^^^\nIndexError: list index out of range",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing index 3 in a list of length 3 (indices are 0, 1, 2)\nitems = [10, 20, 30]\nprint(items[3])",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    print(items[3])\n          ~~~~~^^^\nIndexError: list index out of range",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Index Boundary Check",
      "language": "python",
      "description": "Verify index query limits against the list length before accessing elements.",
      "code": "items = [10, 20, 30]\nindex_to_query = 3\n\nif 0 <= index_to_query < len(items):\n    print(f\"Value: {items[index_to_query]}\")\nelse:\n    print(f\"Index {index_to_query} is out of bounds. List length: {len(items)}\")"
    },
    {
      "name": "Slicing Bounds Fallback",
      "language": "python",
      "description": "Use slice operators to safely extract elements without raising IndexErrors on empty or short sequences.",
      "code": "items = [10, 20, 30]\n\n# Slices never throw IndexError, they return available items or empty lists\nsafe_slice = items[3:4]\n\nif safe_slice:\n    value = safe_slice[0]\nelse:\n    value = \"Default Value\"\nprint(value) # Default Value"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify list operations in interactive console shells.",
      "code": "python3 -c \"items = [1, 2]; print(items[-1])\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Demonstrate traceback enhancements in modern Python 3.11+ editions.",
      "code": "# Python 3.11+ tracebacks pinpoint the specific bracket indices causing crashes\npython3 -c \"d = [[]]; print(d[0][5])\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Safe check for empty list collections in macOS python.",
      "code": "python3 -c \"items = []; print(items[0] if items else None)\""
    }
  ],
  "commonMistakes": [
    "Using loop index iterators (like `for i in range(len(items)):`) and then modifying or populating the list length inside the loop body, causing indices mismatch crashes.",
    "Forgetting that `list.pop()` raises an IndexError if the list is empty."
  ],
  "prevention": [
    "Prefer direct iteration over elements (`for item in items:`) instead of manually tracking numeric indices.",
    "Use helper defaults getters (like `next(iter(items), default)`) to safely extract the first element of a sequence."
  ],
  "faq": [
    {
      "question": "What is an IndexError?",
      "answer": "It is a runtime error raised when you attempt to access a list or tuple element using a numeric index that does not exist in the collection."
    },
    {
      "question": "How do I prevent 'IndexError: list index out of range'?",
      "answer": "Ensure that your index is within the boundaries of the list. You can check the length using 'len(my_list)' or verify the list is not empty using 'if my_list:'."
    },
    {
      "question": "How does negative indexing work in Python?",
      "answer": "Negative indices count backwards from the end of the collection (e.g. '-1' is the last item, '-2' is the second-to-last item). If the negative index exceeds the negative length, an IndexError is raised."
    },
    {
      "question": "Why do slices not throw an IndexError?",
      "answer": "Python's slicing syntax (e.g. 'my_list[0:100]') is designed to be forgiving. If the slice range exceeds the list length, it simply returns whatever items are available (or an empty list if starting out of bounds) without raising an exception."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Sequence Types documentation",
      "url": "https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range"
    }
  ],
  "relatedErrors": [
    "keyerror"
  ],
  "quickFix": {
    "causes": [
      "Target query index is equal to or greater than the sequence length",
      "Attempting to query indices on empty lists or tuple records",
      "Negative index query wraps beyond the negative size boundaries"
    ],
    "checklist": [
      "Check length of list using len()",
      "Verify collection is populated: if items:",
      "Replace raw index query with safe slice parameters",
      "Check loops constraints limits"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Accessing index equal to or greater than list length",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Attempting to index an empty list collection",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Negative index offset exceeding negative length",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug IndexError in Python — Step-by-Step Fix",
  "seoDescription": "Complete guide to fixing IndexError in Python. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
