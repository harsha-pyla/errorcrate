import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "enoent",
  "name": "ENOENT",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Filesystem Error",
    "Common"
  ],
  "updatedAt": "May 12, 2024",
  "shortDescription": "ENOENT stands for \"Error NO ENTry\" and indicates that Node.js tried to access a file or directory that doesn't exist.",
  "meanDescription": "ENOENT is one of the most common errors you'll encounter in Node.js. It stands for \"Error NO ENTry\" and indicates that Node.js tried to access a file or directory that doesn't exist. This error is most often caused by an incorrect file path, a missing file, or attempting to read a directory that has been moved or deleted. If you're working with the fs module, uploading files, reading configuration files, or loading assets, you've probably seen this error before.\n\nThink of it like asking someone to deliver a package to an address that doesn't exist. The delivery company isn't broken—they simply can't find the destination. Node.js works the same way. When your code requests a file that isn't present, it throws an ENOENT error.",
  "causes": [
    "The File Doesn't Exist: The target file has not been created or is missing from the directory.",
    "Wrong Relative Path: Paths resolved from the current working directory (process.cwd()) differ from the folder where the source file resides.",
    "The Directory Doesn't Exist: Attempting to write a file into a folder that has not been created yet.",
    "File Was Renamed or Deleted: A filename was modified or deleted by another process or collaborator.",
    "Typographical Errors: Small spelling discrepancies in names or folders (e.g. config.json vs configs.json).",
    "Incorrect Case: Filenames are case-sensitive on Linux and macOS (e.g. Logo.png vs logo.png)."
  ],
  "solutions": [
    "Verify the Path: Log or print the resolved path (console.log(filePath)) before executing the fs operation to make bugs obvious.",
    "Use Absolute Paths: Build paths dynamically relative to your project root (e.g. using path.join(process.cwd(), 'config.json')) instead of relying on process.cwd().",
    "Check Whether the File Exists: Verify presence before reading or writing using fs.promises.access().",
    "Create Missing Directories: Ensure the parent folder exists using fs.promises.mkdir(dir, { recursive: true }) before writing new files.",
    "Review Deployment Paths: Verify path mapping structures on your production or staging server since file structures can change after builds."
  ],
  "example": {
    "title": "ENOENT Error Formats",
    "code": "Error: ENOENT: no such file or directory, open '/Users/john/project/config.json'\n// or\nError: ENOENT: no such file or directory, scandir './uploads'\n// or\nError: ENOENT: no such file or directory, unlink './temp/image.png'",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Example Wording Variant A",
    "code": "Error: ENOENT: no such file or directory, open '/Users/john/project/config.json'",
    "language": "text"
  },
  "exampleResponse": {
    "title": "Example Wording Variant B",
    "code": "Error: ENOENT: no such file or directory, scandir './uploads'",
    "language": "text"
  },
  "frameworkExamples": [
    {
      "name": "Complete Example",
      "language": "javascript",
      "description": "Instead of crashing, this example detects the missing file and handles the situation appropriately.",
      "code": "import { readFile } from \"node:fs/promises\";\n\nasync function loadConfig() {\n    try {\n        const data = await readFile(\"./config.json\", \"utf8\");\n        console.log(data);\n    } catch (error) {\n        if (error.code === \"ENOENT\") {\n            console.log(\"Configuration file not found.\");\n            return;\n        }\n        throw error;\n    }\n}\n\nloadConfig();"
    },
    {
      "name": "Express Context",
      "language": "javascript",
      "description": "Handling missing static assets gracefully inside Express middleware.",
      "code": "app.get('/download/:name', (req, res, next) => {\n  const filePath = path.join(__dirname, 'files', req.params.name);\n  fs.access(filePath, fs.constants.F_OK, (err) => {\n    if (err) {\n      return res.status(404).json({ error: 'Requested resource is missing' });\n    }\n    res.sendFile(filePath);\n  });\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Directory Access Check",
      "language": "javascript",
      "description": "Pre-creating directories recursively on startup.",
      "code": "import { mkdir } from \"node:fs/promises\";\n\nawait mkdir(\"./uploads\", {\n    recursive: true\n});"
    }
  ],
  "commonMistakes": [
    "Assuming Relative Paths Start From the Current File: Relative paths are resolved from the application's current working directory, not from the location of the source file.",
    "Ignoring Missing Directories: Creating a file does not automatically create the folder containing it. Always ensure the directory exists before writing.",
    "Hardcoding File Paths: Paths like C:\\Users\\John\\Desktop\\data.json work only on a specific machine. Build paths dynamically instead.",
    "Ignoring Case Sensitivity: A project that works perfectly on Windows may fail on Linux because filenames don't match exactly."
  ],
  "prevention": [
    "Prefer absolute paths when possible.",
    "Keep configuration files in predictable locations.",
    "Validate uploaded file paths before reading them.",
    "Handle ENOENT separately from other filesystem errors.",
    "Create required directories during application startup.",
    "Log the full path when debugging file-related issues."
  ],
  "faq": [
    {
      "question": "Is ENOENT only for missing files?",
      "answer": "No. It can also indicate that a directory in the path doesn't exist."
    },
    {
      "question": "Can ENOENT happen when writing a file?",
      "answer": "Yes. If the parent directory doesn't exist, writing the file will fail with ENOENT."
    },
    {
      "question": "Why does my code work on Windows but fail on Linux?",
      "answer": "Linux filesystems are typically case-sensitive. A mismatch in filename capitalization is a common cause of ENOENT."
    },
    {
      "question": "Does reinstalling Node.js fix ENOENT?",
      "answer": "No. ENOENT is almost always related to your application's file paths or filesystem, not the Node.js installation itself."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js File System API",
      "url": "https://nodejs.org/api/fs.html"
    }
  ],
  "relatedErrors": [
    "eacces",
    "enotdir",
    "enotempty",
    "eperm",
    "eisdir",
    "emfile"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "The File Doesn't Exist",
      "Wrong Relative Path",
      "The Directory Doesn't Exist"
    ],
    "checklist": [
      "Verify the Path",
      "Use Absolute Paths",
      "Check Whether the File Exists",
      "Create Missing Directories"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "The File Doesn't Exist",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Wrong Relative Path",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "The Directory Doesn't Exist",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix ENOENT in Node.js — Causes & Solutions",
  "seoDescription": "Resolve ENOENT in Node.js with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified fixes."
};

export default errorData;
