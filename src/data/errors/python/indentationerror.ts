import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "indentationerror",
  "name": "IndentationError",
  "category": "python",
  "badges": [
    "Python System",
    "Parser Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you violate Python's strict spacing rules, such as mixing tabs and spaces or using inconsistent indentation depths.",
  "meanDescription": "Python uses indentation levels instead of curly braces to define code blocks (functions, loops, conditions). An 'IndentationError' is raised during the parsing phase when the interpreter encounters unexpected spaces or tabs, such as a child statement that is not indented further than its parent block, or mixing tabs and spaces on the same line, which is prohibited in Python 3.",
  "causes": [
    "Mixing tabs and spaces: Using tab characters in some lines and spaces in others within the same code block.",
    "Unexpected indentation: Indenting a line of code (such as a variable declaration) that does not start a new nested block.",
    "Missing block indentation: Forgetting to indent code lines directly following a header statement like 'def', 'if', or 'for'."
  ],
  "solutions": [
    "Normalize to spaces only: Configure your editor to automatically convert tabs to spaces (standard PEP 8 uses 4 spaces).",
    "Re-align block statement margins: Verify that all code statements within the same block level align to the exact same column.",
    "Run with tab detection flags: Use python's tabnanny library to detect ambiguous indentation states."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "  File \"script.py\", line 3\n    print(\"Hello\")\n    ^\nIndentationError: expected an indented block after 'if' statement on line 2",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Missing indentation under block header\nif True:\nprint(\"Hello\")",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "  File \"script.py\", line 3\n    print(\"Hello\")\n    ^\nIndentationError: expected an indented block after 'if' statement on line 2",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Standard Block Alignment",
      "language": "python",
      "description": "Align all child statements under a control flow block with consistent space columns.",
      "code": "# Wrong: throws IndentationError\n# if True:\n#   print(\"First line\")\n#     print(\"Second line - mismatched\")\n\n# Correct: PEP 8 compliant 4-space alignment\nif True:\n    print(\"First line\")\n    print(\"Second line\")"
    },
    {
      "name": "Tabnanny Detection Scan",
      "language": "bash",
      "description": "Run Python's built-in tabnanny tool to find mixed space/tab positions in files.",
      "code": "# 1. Run tabnanny check on code files\n$ python3 -m tabnanny script.py\n\n# Output displays mismatched lines details:\n# 'script.py' 12 '\\tprint(items)'"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Display hidden tabs and spaces formatting characters using cat utility flags.",
      "code": "# -T shows tabs as ^I, -E shows line ends as $\ncat -A script.py"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "VS Code configuration overrides to convert tabs to spaces.",
      "code": "# Open Settings (Ctrl+,)\n# Search: 'Insert Spaces'\n# Check: 'Editor: Insert Spaces' (Translate tabs into spaces)\n# Search: 'Tab Size'\n# Set to: 4"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Replace all tabs with spaces in files utilizing standard sed/tr commands.",
      "code": "# Translate tab characters to 4 spaces\nexpand -t 4 script.py > script_fixed.py"
    }
  ],
  "commonMistakes": [
    "Copying code snippets from web browser tutorials that mix spacebar entries with raw Tab margins.",
    "Assuming spaces count doesn't matter as long as lines are indented (blocks must have identical spacing depths; mixing 2-space and 4-space margins triggers errors)."
  ],
  "prevention": [
    "Configure your text editor to display whitespace symbols (spaces as dots, tabs as arrows) to locate formatting discrepancies visually.",
    "Run code formatters (like Black or YAPF) to automatically re-align code margins on file save."
  ],
  "faq": [
    {
      "question": "Why does Python require strict indentation?",
      "answer": "Python uses indentation to define block structures instead of braces '{}' or keywords like 'end'. This keeps code clean and readable, but makes margins critical."
    },
    {
      "question": "How do I fix 'TabError: inconsistent use of tabs and spaces'?",
      "answer": "This is a subclass of IndentationError. Set your text editor to 'Insert spaces instead of tabs' or 'Translate tabs' and re-save the file. You can also run 'python -m tabnanny <file>' to find where they are mixed."
    },
    {
      "question": "How many spaces should I use for indentation?",
      "answer": "The official Python style guide (PEP 8) recommends using exactly 4 spaces per indentation level. Never use tabs."
    },
    {
      "question": "Why did copying code from the internet cause this error?",
      "answer": "Boilerplate code copied from websites often mixes tabs and spaces. Select all code in your editor and run the 'Format Document' or 'Convert Indentation to Spaces' utility."
    }
  ],
  "helpfulResources": [
    {
      "name": "PEP 8 Style Guide - Indentation",
      "url": "https://peps.python.org/pep-0008/#indentation"
    }
  ],
  "relatedErrors": [
    "syntaxerror"
  ],
  "quickFix": {
    "causes": [
      "Mixed tab and space characters in the same block",
      "Missing indentation below block header statements",
      "Inconsistent spacing depth within same nested scope"
    ],
    "checklist": [
      "Find mixed whitespace using cat -A or editor settings",
      "Convert all tabs to spaces (PEP 8 uses 4 spaces)",
      "Align statements under headers",
      "Run python -m tabnanny to scan"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Mixing tab characters with space keys in same file",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing indentation under class/def/if headers",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Inconsistent indentation depths (e.g. 3 vs 4 spaces)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "IndentationError: Complete Python Troubleshooting Guide",
  "seoDescription": "Encountering IndentationError in Python? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
