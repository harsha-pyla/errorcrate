import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "importerror",
  "name": "ImportError",
  "category": "python",
  "badges": [
    "Python System",
    "Import Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when Python successfully finds a module package but fails to import a specific class, function, or sub-module from it.",
  "meanDescription": "The 'ImportError' is raised when an import statement fails to load a module or a specific attribute from a module. While 'ModuleNotFoundError' (its subclass) specifically indicates that the module file itself cannot be located, a general 'ImportError' typically indicates circular dependency loops (Module A imports Module B, which imports Module A), binary extension loading failures (e.g. incompatible compiled C library wrappers), or attempts to import attributes that do not exist in the target module.",
  "causes": [
    "Circular import loop: Two or more modules import each other recursively, causing Python's import resolver to access a partially initialized module.",
    "Attribute missing from module: Attempting to run 'from module import name' but the target name is not defined in the module.",
    "Binary dependency loading failure: The module is located, but its compiled C extensions (like database drivers) fail to load due to missing shared system libraries."
  ],
  "solutions": [
    "Refactor circular dependencies: Restructure import layouts (e.g. move imports inside functions or merge modules).",
    "Verify import attribute spelling: Confirm that the class or function exists in the module and check for spelling errors.",
    "Reinstall native dependencies: Recompile or reinstall binary packages using pip to ensure shared system library compatibility."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"a.py\", line 1, in <module>\n    from b import func_b\n  File \"/project/b.py\", line 1, in <module>\n    from a import func_a\nImportError: cannot import name 'func_a' from partially initialized module 'a' (most likely due to a circular import)",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Running scripts with circular imports loops\npython a.py",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "ImportError: cannot import name 'func_a' from partially initialized module 'a' (most likely due to a circular import)",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Deferred Function Imports",
      "language": "python",
      "description": "Resolve circular imports by delaying the import query until the function is actually called at runtime.",
      "code": "# b.py (circular helper example)\ndef run_task_b():\n    # Move import inside function body (deferred import)\n    from a import func_a\n    print(\"Running B task...\")\n    func_a()"
    },
    {
      "name": "Checking Module Attributes",
      "language": "python",
      "description": "Check if an attribute is exported by a module using the dir function inside active python interpreter frames.",
      "code": "import math\n\n# List all attributes exported by math module\nprint(dir(math))\n# Confirm math contains 'sqrt'\n# from math import sqrt"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Scan missing shared binary dependencies on compiled python extensions (.so files).",
      "code": "ldd ~/.venv/lib/python3.10/site-packages/cryptography/hazmat/bindings/_rust.abi3.so"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "Resolve Windows DLL load failures by installing the official Microsoft Visual C++ redistributable packages.",
      "code": "# Download and install Visual C++ Redistributable from Microsoft:\n# https://aka.ms/vs/17/release/vc_redist.x64.exe"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check architecture matching on native python dynamic library targets.",
      "code": "# Verify binary architecture (e.g. arm64 vs x86_64)\nfile ~/.venv/lib/python3.10/site-packages/cryptography/hazmat/bindings/_rust.abi3.so"
    }
  ],
  "commonMistakes": [
    "Writing custom utility script names that collide with built-in library names (e.g. naming your local file `math.py` and trying to run `from math import sqrt`).",
    "Assuming renaming variables solves circular imports (the architecture layout itself must be decycled)."
  ],
  "prevention": [
    "Design clean hierarchical package layers where modules import downwards, never sideways or upwards recursively.",
    "Adopt absolute package reference names instead of relative package dots inside complex directory structures."
  ],
  "faq": [
    {
      "question": "How does ImportError differ from ModuleNotFoundError?",
      "answer": "ModuleNotFoundError means Python cannot find the file or package directory at all. ImportError means Python found the module, but something went wrong while executing its code or importing a specific name from it."
    },
    {
      "question": "What is a circular import?",
      "answer": "It occurs when Module A imports Module B, and Module B in turn imports Module A. Because neither module has finished executing, Python throws an 'ImportError: cannot import name X from Y'."
    },
    {
      "question": "How do I fix a circular import?",
      "answer": "Move the import statement inside the function or method where it is used (deferred import), or move shared code into a third helper module."
    },
    {
      "question": "Why do I get 'ImportError: DLL load failed'?",
      "answer": "On Windows, this means a compiled C/C++ extension module requires a DLL that is missing from your system. Installing the Microsoft Visual C++ Redistributable usually resolves this."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python ImportError reference",
      "url": "https://docs.python.org/3/library/exceptions.html#ImportError"
    }
  ],
  "relatedErrors": [
    "modulenotfounderror"
  ],
  "quickFix": {
    "causes": [
      "Circular dependency cycle loops between importing modules",
      "Import name is missing or misspelled in target module code",
      "Compiled native binary dynamic libraries failed to load"
    ],
    "checklist": [
      "Check trace for circular import warnings",
      "Move imports inside function definitions",
      "Verify target attribute spelling using dir()",
      "Install required OS shared DLL/so runtimes"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Circular dependency import cycles",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Attribute or name spelling mismatch inside module",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Failed native binary library bindings (.so/.dll)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix ImportError Fast — Python Solutions Guide",
  "seoDescription": "Fix ImportError fast. This Python debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
