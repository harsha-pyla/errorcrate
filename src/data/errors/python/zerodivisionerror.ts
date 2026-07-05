import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "zerodivisionerror",
  "name": "ZeroDivisionError",
  "category": "python",
  "badges": [
    "Python System",
    "Arithmetic Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to divide a number by zero or perform a modulo operation with a divisor of zero.",
  "meanDescription": "A 'ZeroDivisionError' is raised at runtime when the second argument of a division or modulo operator is zero. Mathematically, division by zero is undefined, and Python raises this exception to prevent incorrect arithmetic cascades. This commonly occurs when computing averages, processing ratio fractions, or during statistical database queries containing empty datasets.",
  "causes": [
    "Division by zero: Using the slash (/) or double-slash (//) operator with a denominator of zero.",
    "Modulo by zero: Using the modulo (%) operator with a divisor of zero.",
    "Calculating averages on empty lists: Dividing a sum by 'len(items)' when the list is empty."
  ],
  "solutions": [
    "Guard denominator values: Add checks ('if denominator != 0:') before performing division calculations.",
    "Check list size for averages: Verify list size is greater than zero before dividing sum totals.",
    "Use ternary fallback checks: Use inline conditions to provide fallback ratios when the divisor is zero."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 3, in <module>\n    ratio = numerator / denominator\nZeroDivisionError: division by zero",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Simple division by zero\nnumerator = 10\ndenominator = 0\nratio = numerator / denominator",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 4, in <module>\n    ratio = numerator / denominator\nZeroDivisionError: division by zero",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Average Calculation Guard",
      "language": "python",
      "description": "Ensure the list contains elements prior to dividing total sums by sequence length.",
      "code": "def calculate_average(prices):\n    # Protect against empty lists to avoid ZeroDivisionError\n    if not prices:\n        return 0.0\n    return sum(prices) / len(prices)"
    },
    {
      "name": "Ternary Ratio Fallback",
      "language": "python",
      "description": "Utilize Python's ternary conditional expression to declare fallback values inline.",
      "code": "clicks = 0\nviews = 1000\n\n# Fallback to 0.0 click-through-rate if clicks is zero\nctr = (clicks / views) if views != 0 else 0.0\nprint(f\"CTR: {ctr:.2%}\")"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify division behaviors in python interactive prompts.",
      "code": "python3 -c \"print(5 / 0 if 0 != 0 else 'Safe')\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Verify modulo operations results with zero check gates.",
      "code": "python3 -c \"divisor = 0; print(10 % divisor if divisor != 0 else 'Modulo Safe')\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Test double-slash floor divisions with zero checks.",
      "code": "python3 -c \"den = 0; print(10 // den if den != 0 else 0)\""
    }
  ],
  "commonMistakes": [
    "Assuming modulo operators (`%`) with a zero divisor return 0 or do not raise division errors.",
    "Using float conversions on denominators (e.g. `10 / 0.0`) expecting it to return infinity (`inf`) like other languages (Python raises a ZeroDivisionError for floating-point zero divisions as well)."
  ],
  "prevention": [
    "Verify the size of input datasets before calculating metrics aggregates.",
    "Establish default fallback values in configuration files for denominator fields."
  ],
  "faq": [
    {
      "question": "What is a ZeroDivisionError?",
      "answer": "It is a runtime exception raised when the denominator in a division or modulo operation is zero."
    },
    {
      "question": "How do I prevent ZeroDivisionError?",
      "answer": "Always validate your divisor before running a division command: 'result = numerator / divisor if divisor != 0 else 0'."
    },
    {
      "question": "Why does modulo (%) by zero raise this error?",
      "answer": "Modulo calculates the remainder of a division. Because division by zero is undefined, calculating a remainder when dividing by zero is also impossible and raises this exception."
    },
    {
      "question": "How do I calculate list average safely?",
      "answer": "Verify the list is not empty first: 'avg = sum(items) / len(items) if items else 0'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Numeric Types documentation",
      "url": "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex"
    }
  ],
  "relatedErrors": [
    "valueerror"
  ],
  "quickFix": {
    "causes": [
      "Denominator variable in division (/) evaluates to zero",
      "Divisor variable in modulo (%) evaluates to zero",
      "Dividing totals by len(items) when the items list is empty"
    ],
    "checklist": [
      "Check denominator values before dividing",
      "Use inline ternary guards: if divisor != 0",
      "Ensure lists are populated before taking averages",
      "Catch exception using except ZeroDivisionError"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Dividing totals by zero denominator variable",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Calculating averages on empty lists (len == 0)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Modulo operations with a zero divisor",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix ZeroDivisionError in Python (With Examples)",
  "seoDescription": "Encountering ZeroDivisionError in Python? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
