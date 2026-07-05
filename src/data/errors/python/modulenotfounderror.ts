import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "modulenotfounderror",
  "name": "ModuleNotFoundError",
  "category": "python",
  "badges": [
    "Python System",
    "Import Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when Python cannot locate the specified module package inside your active environment search paths.",
  "meanDescription": "The 'ModuleNotFoundError' is a subclass of 'ImportError' introduced in Python 3.6. It indicates that the Python interpreter failed to locate an external library or a local module referenced in an 'import' statement. This typically happens because the package has not been installed inside the active virtual environment, the module folder lacks an '__init__.py' file (for older Python compatibility), or the folder is missing from Python's search path ('sys.path').",
  "causes": [
    "Missing package installation: Trying to import a third-party library (like 'requests' or 'numpy') that has not been installed using pip.",
    "Active virtual environment mismatch: Installing the package globally but running the code inside an isolated virtual environment (venv) where it is missing.",
    "Spelling typo or casing mismatch: Mismatch in capitalization or spelling of the module name."
  ],
  "solutions": [
    "Install the package using pip: Install the missing module (e.g. 'pip install requests') in your active environment.",
    "Verify active virtual environment: Ensure your terminal shell has activated the correct environment (e.g. 'source venv/bin/activate').",
    "Verify sys.path location: Add the parent directory of your local module to sys.path programmatically or via environment variables."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    import requests\nModuleNotFoundError: No module named 'requests'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to import requests without installing it first\npython script.py",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    import requests\nModuleNotFoundError: No module named 'requests'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Virtual Environment Pip Install",
      "language": "bash",
      "description": "Ensure your virtual environment is active, then download the missing package using pip.",
      "code": "# 1. Activate your virtual environment (Linux/macOS)\n$ source venv/bin/activate\n\n# 2. Install the package inside the active environment\n(venv) $ pip install requests\n\n# 3. Launch python script successfully\n(venv) $ python script.py"
    },
    {
      "name": "Appending Local sys.path",
      "language": "python",
      "description": "If you are importing local scripts from secondary sibling folders, add the folder to the interpreter search path dynamically.",
      "code": "import sys\nimport os\n\n# 1. Calculate parent folder path\nparent_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), \"..\"))\n\n# 2. Append path to python import lookup array\nsys.path.append(parent_dir)\n\n# 3. Import local module\nimport my_local_utils"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify installed packages inside the system python path.",
      "code": "python3 -m pip list | grep -i requests"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Avoid executable mismatches in Windows cmd/powershell by invoking pip via the active python executable directly.",
      "code": "# Run pip directly using the target Python executable\npython -m pip install requests"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Find the path of the active Python binary on macOS to isolate package manager scopes.",
      "code": "which python3\n# Output example:\n# /usr/local/bin/python3"
    }
  ],
  "commonMistakes": [
    "Installing package using global system commands (`sudo apt install python3-requests`) when working within local virtual environments (`venv`), which will not propagate dependencies inside the environment.",
    "Using spelling name matches that differ from installation naming (e.g. running `pip install PyYAML` but writing `import yaml` in scripts)."
  ],
  "prevention": [
    "Manage repository package configurations inside a `requirements.txt` file and execute installs using `pip install -r requirements.txt`.",
    "Always check that your shell prompt shows the active environment marker `(venv)` before editing packages."
  ],
  "faq": [
    {
      "question": "What is ModuleNotFoundError?",
      "answer": "It is a subclass of ImportError raised when a module cannot be found during import resolution."
    },
    {
      "question": "Why does it fail when I already installed the package?",
      "answer": "You likely installed the package globally or in a different virtual environment. Make sure you activate your current virtual environment before installing packages."
    },
    {
      "question": "How do I import a local file from a parent folder?",
      "answer": "Add the folder path to the environment variable PYTHONPATH, or append it to sys.path in your script: 'import sys; sys.path.append(\"/path/to/folder\")'."
    },
    {
      "question": "Why is the package name different from the import name?",
      "answer": "Some packages have different installation names compared to their import names. For example, you run 'pip install beautifulsoup4' but import it using 'import bs4'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python Virtual Environments and Packages guide",
      "url": "https://docs.python.org/3/tutorial/venv.html"
    }
  ],
  "relatedErrors": [
    "importerror"
  ],
  "quickFix": {
    "causes": [
      "The third-party package has not been installed in the environment",
      "Active virtual environment (venv) is not activated in the shell terminal",
      "Spelling typo or capitalization discrepancy in import string"
    ],
    "checklist": [
      "Check if library is installed: pip show <package>",
      "Activate environment: source venv/bin/activate",
      "Install package: pip install <package>",
      "Verify spelling matches library import name"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Package has not been installed using pip",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Virtual environment mismatch (stale shell environment)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Folder path omitted from sys.path listing",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "ModuleNotFoundError Explained: Causes, Fixes & Prevention",
  "seoDescription": "Getting ModuleNotFoundError in Python? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
