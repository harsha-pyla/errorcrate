import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "no-matching-distribution-found",
  "name": "No matching distribution found",
  "category": "python",
  "badges": [
    "Python Package",
    "Pip Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the pip package installer cannot find a package version matching your request or system compatibility constraints.",
  "meanDescription": "The 'No matching distribution found' error is thrown by the pip installer when it searches package index servers (like PyPI) but cannot locate a package version that matches your system architecture, Python runtime version, or package constraints. This commonly happens because of spelling typos in package names, attempting to install packages compiled for older Python versions on modern engines (like Python 3.14.6), or trying to install platform-specific binaries on incompatible operating systems.",
  "causes": [
    "Spelling typo in package name: A spelling mistake or incorrect casing in the package name parameter during 'pip install'.",
    "Incompatible Python version: The package exists on PyPI, but none of its releases support your active Python version (e.g. trying to install a legacy library that only supports Python 2).",
    "Incompatible platform architecture: Attempting to install a package that requires compiled C extensions that do not support your OS or CPU architecture (like installing an Intel-only wheel on Apple Silicon M1/M2 or Windows ARM64)."
  ],
  "solutions": [
    "Verify package name spelling: Double check the spelling of the package on PyPI (pypi.org).",
    "Upgrade pip and setuptools: Run 'pip install --upgrade pip setuptools wheel' to ensure pip can read the latest wheel file formats.",
    "Check Python version support: Down-grade or verify package support matching your current Python runtime version."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "ERROR: Could not find a version that satisfies the requirement non_existent_package (from versions: none)\nERROR: No matching distribution found for non_existent_package",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to install a package with spelling typo\npip install non_existent_package",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "ERROR: Could not find a version that satisfies the requirement non_existent_package (from versions: none)\nERROR: No matching distribution found for non_existent_package\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Upgrading Installer Utilities",
      "language": "bash",
      "description": "Ensure your pip environment is updated to parse modern Python packaging wheel files (.whl).",
      "code": "# 1. Upgrade pip, setuptools, and wheel in active environment\n$ python3 -m pip install --upgrade pip setuptools wheel\n\n# 2. Re-try package installation\n$ pip install PyYAML"
    },
    {
      "name": "Targeting Specific Python Version",
      "language": "bash",
      "description": "If a library lacks support for your newer Python version, use pyenv to manage and build virtual environments on older stable releases.",
      "code": "# 1. Install an older stable Python version (e.g. 3.10)\n$ pyenv install 3.10.12\n\n# 2. Set local project directory version\n$ pyenv local 3.10.12\n\n# 3. Create virtual environment and install packages\n$ python -m venv venv\n$ source venv/bin/activate\n(venv) $ pip install legacy-library"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Upgrade system-wide pip toolsets using python modules calls.",
      "code": "python3 -m pip install --upgrade pip"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Run pip installations targeting specific Windows CPU architectures.",
      "code": "# Force pip to download specific platform wheel files if resolving fails\npip install --only-binary=:all: --platform win_amd64 numpy"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Resolve Apple Silicon M-series build issues by launching terminal sessions under Rosetta emulation.",
      "code": "# Run shell under x86_64 architecture emulation\narch -x86_64 ibrew install python\narch -x86_64 pip install cryptography"
    }
  ],
  "commonMistakes": [
    "Assuming package names on PyPI always match the import name (e.g. running `pip install yaml` instead of `pip install PyYAML`).",
    "Running `pip install` without active internet access or behind enterprise proxies that block PyPI query endpoints."
  ],
  "prevention": [
    "Verify target library compatibility boundaries on PyPI package details page before upgrading production servers.",
    "Utilize requirement files to lock package names and versions tags."
  ],
  "faq": [
    {
      "question": "What causes 'No matching distribution found'?",
      "answer": "It means pip searched PyPI (the Python Package Index) but could not find any version of the package that is compatible with your current Python version, operating system, and hardware architecture."
    },
    {
      "question": "How do I fix spelling errors?",
      "answer": "Verify the exact name on PyPI (https://pypi.org). For example, running 'pip install py-yaml' will fail; the correct name is 'pip install PyYAML'."
    },
    {
      "question": "Why does upgrading pip fix this?",
      "answer": "Older versions of pip do not know how to parse modern wheel package files (.whl). Upgrading pip ensures it can read the latest package binary wheel specifications."
    },
    {
      "question": "How do I install an older package on a newer Python?",
      "answer": "If a package has not been updated to support Python 3.12+, you might need to use an older Python version environment (like Python 3.10) for your project, or search for community forks that add support."
    }
  ],
  "helpfulResources": [
    {
      "name": "PyPI Package Search portal",
      "url": "https://pypi.org/"
    }
  ],
  "relatedErrors": [
    "modulenotfounderror"
  ],
  "quickFix": {
    "causes": [
      "Spelling typo inside package name query string",
      "Stale pip version unable to decode modern Wheel binary files",
      "Target package does not support your active Python or CPU architecture version"
    ],
    "checklist": [
      "Verify spelling on pypi.org",
      "Upgrade pip: python -m pip install --upgrade pip",
      "Check Python version limits for the package",
      "Isolate environment using pyenv if legacy Python is needed"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Spelling typo in package name parameter",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Package does not support current Python version (e.g. 3.14.x)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing precompiled wheel files for target CPU architecture",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot No matching distribution found — Python Error.",
  "seoDescription": "Fix No matching distribution found fast. This Python debugging guide explains the root cause, shows common mistakes, and provides tested solutions with."
};

export default errorData;
