import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "list-index-out-of-range",
  "name": "List index out of range",
  "category": "python",
  "badges": [
    "Python Types",
    "Index Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to retrieve or mutate an item in a list using an index that is outside its range of elements.",
  "meanDescription": "The 'List index out of range' error is the standard message printed by the 'IndexError' exception class. It indicates that the numeric index passed to a list subscript (e.g. 'my_list[index]') exceeds the populated length of the list. In Python, sequences are 0-indexed; querying an index equal to or greater than the list length, or attempting to pop items from an empty list, triggers this exception.",
  "causes": [
    "Off-by-one loop boundary error: Iterating with indices that run from 1 to 'len(items)' instead of 0 to 'len(items) - 1'.",
    "Popping from an empty list: Calling 'list.pop()' on an array containing zero items.",
    "Accessing parsed CSV or regex split match values directly: Direct index access assuming matches exist when splits yield fewer items than expected."
  ],
  "solutions": [
    "Use range or direct element loops: Iterate using 'for item in my_list:' or 'for i in range(len(my_list)):'.",
    "Check list population state: Verify list size using 'if my_list:' before calling pop or indexing.",
    "Verify regex split match sizes: Inspect array sizes before accessing index elements."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    item = items[len(items)]\nIndexError: list index out of range",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to query index matching total length\nitems = [1, 2, 3]\nvalue = items[3]  # indices are 0, 1, 2",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    value = items[3]\nIndexError: list index out of range",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Safe List Getter Wrapper",
      "language": "python",
      "description": "Write a helper function to retrieve list elements safely with custom fallbacks on out-of-bounds queries.",
      "code": "def safe_get(target_list, index, default=None):\n    # Support negative index mapping checks\n    adjusted_index = index if index >= 0 else len(target_list) + index\n    if 0 <= adjusted_index < len(target_list):\n        return target_list[index]\n    return default\n\nitems = [10, 20, 30]\nprint(safe_get(items, 3, \"Missing\"))  # Missing"
    },
    {
      "name": "Parsing Split Safely",
      "language": "python",
      "description": "Inspect column split sizes before assigning parameters to prevent out of range crashes on malformed CSV data.",
      "code": "row = \"Alice,30\"  # Missing email column\ncolumns = row.split(\",\")\n\n# Wrong: throws IndexError\n# email = columns[2]\n\n# Correct: verify split length\nemail = columns[2] if len(columns) > 2 else \"unknown@domain.com\"\nprint(email) # unknown@domain.com"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Test pop operations on empty sequences in interactive console.",
      "code": "python3 -c \"items = []; print(items.pop() if items else 'Empty')\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Verify negative index wrap ranges checks.",
      "code": "python3 -c \"items = [1, 2]; print(items[-3] if len(items) >= 3 else 'Out of bounds')\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify iteration loop boundaries.",
      "code": "python3 -c \"items = [1, 2]; [print(items[i]) for i in range(len(items))]\""
    }
  ],
  "commonMistakes": [
    "Iterating with `range(1, len(items) + 1)` and then querying `items[i]`, missing the first element (index 0) and crashing on the last limit index.",
    "Modifying a list length inside a loop iteration frame while accessing values using pre-calculated index counters."
  ],
  "prevention": [
    "Prefer direct loop variables maps (`for item in items:`) to automate index pointer movements.",
    "Utilize `enumerate(items)` if both loop index and item references are required simultaneously."
  ],
  "faq": [
    {
      "question": "What causes 'list index out of range'?",
      "answer": "It occurs when you request an index number that is greater than or equal to the length of the list, or less than the negative length of the list."
    },
    {
      "question": "How do I safely get the last item of a list?",
      "answer": "Use index '-1': 'last_item = my_list[-1]'. If the list might be empty, wrap it: 'last_item = my_list[-1] if my_list else None'."
    },
    {
      "question": "Why does 'range(len(my_list))' prevent this error?",
      "answer": "Because 'range(N)' generates numbers from 0 up to 'N - 1'. This matches Python's 0-based indexing limits exactly, preventing index overflow crashes."
    },
    {
      "question": "How do I write a safe list getter?",
      "answer": "You can write a helper function or wrapper: 'def safe_get(lst, idx, default=None): return lst[idx] if 0 <= idx < len(lst) else default'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python List operations tutorial",
      "url": "https://docs.python.org/3/tutorial/datastructures.html"
    }
  ],
  "relatedErrors": [
    "indexerror"
  ],
  "quickFix": {
    "causes": [
      "Off-by-one calculations on loop indexes",
      "Calling list.pop() on an empty list array",
      "Querying split output data without length verification checks"
    ],
    "checklist": [
      "Check length of list using len()",
      "Guard pop calls: if items:",
      "Verify size of split arrays",
      "Use enumerate() instead of manual index counters"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Off-by-one loops boundaries index errors",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Calling pop() on empty list records",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Accessing parsed columns split data directly",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve List index out of range — Python Debugging Guide",
  "seoDescription": "Learn how to fix List index out of range in Python. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
