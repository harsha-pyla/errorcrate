import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unexpected-indent",
  "name": "Unexpected indent",
  "category": "python",
  "badges": [
    "Python System",
    "Parser Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a line of code is indented more than the active block requires, violating Python's block definition margins.",
  "meanDescription": "The 'Unexpected indent' error is raised by the 'IndentationError' class when Python encounters a line of code that is pushed forward in space without a starting block header (like if, for, while, def, class). In Python, all code at the same hierarchy level must start at the exact same column position; adding accidental leading spaces or mixing tabs and spaces will confuse the parser, raising this error.",
  "causes": [
    "Accidental leading spaces: Double-tapping space keys or copying code snippets with trailing indentation structures.",
    "Indenting standard statements: Pushing forward standard variables declarations or function calls that do not sit inside conditional loops.",
    "Mismatched nested blocks formatting: Writing nested structures with inconsistent space sizing depths (e.g. 2 spaces vs 4 spaces)."
  ],
  "solutions": [
    "Re-align to baseline columns: Move the offending line back to align exactly with surrounding statements.",
    "Use space normalize formatting tools: Re-save files using code formatting tools (like Black) that enforce standard PEP 8 spacing margins.",
    "Show invisible whitespace: Enable whitespace characters visibility inside the text editor to trace hidden spacing discrepancies."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "  File \"script.py\", line 3\n    x = 10\n    ^\nIndentationError: unexpected indent",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Variable statement is indented without block header\nx = 5\n  y = 10",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "  File \"script.py\", line 3\n    y = 10\n    ^\nIndentationError: unexpected indent",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Re-aligning Margins",
      "language": "python",
      "description": "Align variables and standard statements to the same base column margin.",
      "code": "# Wrong: y is unexpectedly indented\n# x = 5\n#   y = 10\n\n# Correct\nx = 5\ny = 10"
    },
    {
      "name": "Nested Scope Alignment",
      "language": "python",
      "description": "Ensure block child items share consistent indentation levels.",
      "code": "# Wrong: statements inside function mismatch\n# def run():\n#     print(\"Start\")\n#       print(\"Step\")  # Unexpected indent\n\n# Correct\ndef run():\n    print(\"Start\")\n    print(\"Step\")"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Examine invisible spaces and tabs using cat formatting switches.",
      "code": "# Shows tabs as ^I and line ends as $\ncat -A script.py"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "Auto-formatting python code blocks in VS Code editor layouts.",
      "code": "# Open script.py\n# Press Shift+Alt+F (Format Document) to automatically re-align spaces\n# If multiple formatters exist, select 'Black' or 'autopep8'"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Normalize tabs to spaces using macOS shells utility helpers.",
      "code": "expand -t 4 script.py > script_fixed.py"
    }
  ],
  "commonMistakes": [
    "Copying snippets from PDF books or web browser blogs where the formatting engine introduces non-standard indent keys.",
    "Forgetting to verify whitespace rules in code loops where block statements mix tabs and spaces."
  ],
  "prevention": [
    "Configure text editors to display formatting characters automatically.",
    "Integrate code formatting pre-commit hooks (like pre-commit black) to normalize margins before commit."
  ],
  "faq": [
    {
      "question": "What is 'unexpected indent'?",
      "answer": "It means the parser found a line of code that is indented further than the surrounding code, but there is no block header (like 'if' or 'def') preceding it to justify the indentation."
    },
    {
      "question": "How do I find where the unexpected indent is?",
      "answer": "The traceback prints a caret (^) pointing to the exact character where the indentation started. Move that line back to match the alignment of the lines around it."
    },
    {
      "question": "Why did copying code cause this error?",
      "answer": "Code formatting can get scrambled when copied from web browsers. Select the block and press 'Shift+Tab' in your editor to un-indent, then re-align it using the Tab key or standard formatting shortcuts."
    },
    {
      "question": "How do I convert tabs to spaces?",
      "answer": "In VS Code, open the Command Palette (Ctrl+Shift+P) and select 'Convert Indentation to Spaces'."
    }
  ],
  "helpfulResources": [
    {
      "name": "PEP 8 Style Guide",
      "url": "https://peps.python.org/pep-0008/"
    }
  ],
  "relatedErrors": [
    "indentationerror"
  ],
  "quickFix": {
    "causes": [
      "Accidental spaces typed at the beginning of a line",
      "Copy-pasting code block structures from external browsers",
      "Mixing space margins depths inside the same function block"
    ],
    "checklist": [
      "Check traceback caret position line",
      "Move line back to align with parent block statements",
      "Convert all tab keys to spaces",
      "Re-format document using IDE formatters"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Accidental space inputs on standard statements",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Copying and pasting block snippets from external browsers",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Mismatched indentation spacing depth (2 vs 4 spaces)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Unexpected indent — Python Debugging Guide",
  "seoDescription": "Resolve Unexpected indent in Python with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
