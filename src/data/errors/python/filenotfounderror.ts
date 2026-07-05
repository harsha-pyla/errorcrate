import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "filenotfounderror",
  "name": "FileNotFoundError",
  "category": "python",
  "badges": [
    "Python System",
    "OS Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to open or access a file path that does not exist in the file system.",
  "meanDescription": "The 'FileNotFoundError' is raised when a file system operation (like opening a file with 'open()', listing a directory, or deleting a file) references a path that does not exist. This is the Python equivalent of POSIX errno ENOENT. Typical causes include typing spelling errors, relative path confusion where the program runs from a different working directory than the target file, or trying to write to a nested folder path that has not been created yet.",
  "causes": [
    "Wrong relative path context: The executing terminal working directory does not match the script's assumed relative path location.",
    "Spelling typo in file name or directory: A simple typo or case mismatch in the file path string.",
    "Missing parent directory structure: Attempting to create a file in a subdirectory that has not been initialized (e.g. saving to 'logs/app.log' when 'logs/' does not exist)."
  ],
  "solutions": [
    "Use absolute paths: Resolve paths dynamically relative to the script's file path using 'os.path.abspath' or 'pathlib.Path(__file__)'.",
    "Create missing parent directories: Use 'os.makedirs(exist_ok=True)' or 'pathlib.Path.mkdir(parents=True)' before writing files.",
    "Verify file existence: Check if the path exists using 'os.path.exists()' or 'pathlib.Path.exists()' before opening."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    with open(\"config.json\", \"r\") as f:\nFileNotFoundError: [Errno 2] No such file or directory: 'config.json'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to read config file assuming active directory contains it\nwith open(\"config.json\", \"r\") as f:\n    data = f.read()",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 2, in <module>\n    with open(\"config.json\", \"r\") as f:\nFileNotFoundError: [Errno 2] No such file or directory: 'config.json'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Pathlib Absolute Resolution",
      "language": "python",
      "description": "Locate files relative to the script file location using the pathlib module to prevent active terminal working directory confusion.",
      "code": "from pathlib import Path\n\n# 1. Get parent folder of active script file\nbase_dir = Path(__file__).resolve().parent\n\n# 2. Build target absolute path\nconfig_path = base_dir / \"config.json\"\n\n# 3. Read safely\nif config_path.exists():\n    with config_path.open(\"r\") as f:\n        print(f.read())\nelse:\n    print(f\"File missing at resolved path: {config_path}\")"
    },
    {
      "name": "Creating Nested Directories",
      "language": "python",
      "description": "Create parent directories recursively before attempting to write output files in nested folders.",
      "code": "from pathlib import Path\n\noutput_file = Path(\"./logs/app/activity.log\")\n\n# Create 'logs/app/' directory structure if missing\noutput_file.parent.mkdir(parents=True, exist_ok=True)\n\n# Write file now succeeds\nwith output_file.open(\"w\") as f:\n    f.write(\"Application started\")"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Display the active terminal working directory (pwd) and check folder casing.",
      "code": "pwd\nls -la"
    },
    {
      "name": "Windows",
      "language": "python",
      "description": "Avoid backslash string escaping conflicts in Windows paths by utilizing raw string prefixes.",
      "code": "# Wrong: '\\n' in path is parsed as newline, triggering FileNotFoundError\n# path = \"C:\\new_project\\data.txt\"\n\n# Correct: raw string prefix blocks escapes\npath = r\"C:\\new_project\\data.txt\"\n\n# Also correct: standard forward slashes work on Windows in Python\npath2 = \"C:/new_project/data.txt\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify file existence flags.",
      "code": "python3 -c \"import os; print(os.path.exists('config.json'))\""
    }
  ],
  "commonMistakes": [
    "Running scripts from a cron tab task scheduler or systemd service using relative paths, which fails because their active directory context defaults to root namespaces.",
    "Using Windows backslashes (`\\`) inside strings without escaping them (e.g. `\"C:\\temp\\file.txt\"`), causing Python to parse `\\t` as a tab character."
  ],
  "prevention": [
    "Always rely on `pathlib` for file paths management, as it automatically normalizes slash directions across platforms.",
    "Log resolved absolute path locations in debug outputs when handling files access tasks."
  ],
  "faq": [
    {
      "question": "What is a FileNotFoundError?",
      "answer": "It is a runtime exception raised when Python cannot find a file or directory at the specified path."
    },
    {
      "question": "Why does it fail when the file is right there?",
      "answer": "This is almost always due to relative path confusion. Python resolves relative paths based on where you ran the python command, not where the script file is located. Run 'os.getcwd()' to inspect your active working directory."
    },
    {
      "question": "How do I build paths relative to my script file?",
      "answer": "Use pathlib: 'from pathlib import Path; file_path = Path(__file__).parent / \"data.txt\"'. This ensures the path is resolved relative to the script's location, regardless of where it is executed from."
    },
    {
      "question": "Why does open('folder/file.txt', 'w') fail with FileNotFoundError?",
      "answer": "While Python can create a new file, it cannot create new folders automatically. If 'folder/' does not exist, the call fails. Create the directory first using 'os.makedirs(\"folder\", exist_ok=True)'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python pathlib library documentation",
      "url": "https://docs.python.org/3/library/pathlib.html"
    }
  ],
  "relatedErrors": [
    "permissionerror"
  ],
  "quickFix": {
    "causes": [
      "Executing the command from a different folder than the relative path base",
      "Spelling typo or casing discrepancy in the file or folder path",
      "Parent directory folders have not been created"
    ],
    "checklist": [
      "Print active directory: print(os.getcwd())",
      "Convert relative paths to pathlib.Path(__file__)",
      "Create folders: pathlib.Path.mkdir(parents=True)",
      "Use raw strings r'path' for Windows backslashes"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Running script from a different working directory (relative path issue)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo or casing mismatch in path string",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing parent directory folders hierarchy",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "FileNotFoundError Error: Root Causes & Verified Fixes",
  "seoDescription": "Resolve FileNotFoundError in Python with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
