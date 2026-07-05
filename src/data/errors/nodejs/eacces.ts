import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "eacces",
  "name": "EACCES",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Filesystem Error",
    "Common"
  ],
  "updatedAt": "May 12, 2024",
  "shortDescription": "EACCES stands for Error: Access. It means your application found the file or directory, but doesn't have permission to access it.",
  "meanDescription": "EACCES stands for Error: Access. It means your application found the file or directory, but doesn't have permission to access it. Unlike ENOENT, where the file doesn't exist, an EACCES error means the file is there—Node.js is simply not allowed to read, write, or execute it. This is one of the most common permission-related errors in Node.js applications, especially on Linux and macOS.\n\nImagine a library. The book you're looking for exists. But it's stored in a locked room. You know where it is, but you don't have the key. That's exactly what EACCES means. Node.js found the resource but wasn't allowed to access it.",
  "causes": [
    "Reading a Protected File: Attempting to open a file that only administrators or the owner can access (e.g., /etc/shadow).",
    "Writing to a Protected Directory: Writing inside system folders (like /root) that normal users cannot write to.",
    "Creating Folders Without Permission: Modifying directories (like /var/www) without elevated execution roles.",
    "Using Port 80 or 443: Binding network servers to restricted ports below 1024 without root privileges.",
    "Incorrect File Permissions: Accessing files whose configuration flags block access for the active user account."
  ],
  "solutions": [
    "Check File Permissions: Use 'ls -l filename' on Linux/macOS to check read/write/execute configuration parameters.",
    "Use Writable Directories: Avoid system folders; write inside application-owned locations (like ./uploads) instead.",
    "Verify File Ownership: Ensure the process owner matches the target resource owner, changing ownership if required.",
    "Avoid Restricted Ports: Bind Node.js processes to user ports (like 3000) during development and use NginX for port 80 forwarding.",
    "Avoid Blanket Administrator Rights: Fix permissions rather than using sudo/administrator roles to bypass restrictions, minimizing security exposure."
  ],
  "example": {
    "title": "EACCES Error Formats",
    "code": "Error: EACCES: permission denied, open '/etc/config.json'\n// or\nError: EACCES: permission denied, mkdir '/var/www/uploads'\n// or\nError: listen EACCES: permission denied 0.0.0.0:80",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Example Wording Variant A",
    "code": "Error: EACCES: permission denied, open '/etc/config.json'",
    "language": "text"
  },
  "exampleResponse": {
    "title": "Example Wording Variant B",
    "code": "Error: listen EACCES: permission denied 0.0.0.0:80",
    "language": "text"
  },
  "frameworkExamples": [
    {
      "name": "Complete Example",
      "language": "javascript",
      "description": "This example catches permission failures during logs writes and advises target directory changes.",
      "code": "import { writeFile } from \"node:fs/promises\";\n\nasync function saveLog() {\n    try {\n        await writeFile(\"/root/log.txt\", \"Application started\");\n        console.log(\"Log saved.\");\n    } catch (error) {\n        if (error.code === \"EACCES\") {\n            console.log(\"Permission denied. Choose a writable directory.\");\n            return;\n        }\n        throw error;\n    }\n}\n\nsaveLog();"
    },
    {
      "name": "Express Context",
      "language": "javascript",
      "description": "Defensively verifying port permissions before starting express listeners.",
      "code": "const server = app.listen(80);\nserver.on('error', (err) => {\n  if (err.code === 'EACCES') {\n    console.error('Privileged port 80 requires root privileges. Binding to 3000 instead.');\n    app.listen(3000);\n  }\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Port Forwarding Setup",
      "language": "nginx",
      "description": "Forwarding privileged port 80 down to Node running on user port 3000.",
      "code": "server {\n    listen 80;\n    location / {\n        proxy_pass http://127.0.0.1:3000;\n    }\n}"
    }
  ],
  "commonMistakes": [
    "Assuming the File Doesn't Exist: Assuming EACCES indicates a missing file when it is actually an access permission restriction.",
    "Using sudo as the First Solution: Using elevated rights as a quick fix instead of investigating root directory permissions or user roles.",
    "Writing Application Data to System Folders: Store logs, uploads, and temporary files inside directories your application owns.",
    "Ignoring Different Deployment Environments: An application may work on your local machine but fail on a server because the server uses different users and permissions."
  ],
  "prevention": [
    "Store application data in writable directories.",
    "Handle EACCES separately from other filesystem errors.",
    "Avoid running applications as the root user unless absolutely necessary.",
    "Use higher ports during development.",
    "Verify permissions before performing file operations.",
    "Log the full path when debugging permission issues."
  ],
  "faq": [
    {
      "question": "Is EACCES the same as ENOENT?",
      "answer": "No. ENOENT means the file or directory cannot be found. EACCES means it exists, but you don't have permission to access it."
    },
    {
      "question": "Can EACCES happen when starting an Express server?",
      "answer": "Yes. It's common when trying to listen on restricted ports such as 80 or 443 without sufficient privileges."
    },
    {
      "question": "Does changing file permissions always fix EACCES?",
      "answer": "Not always. The problem could also be caused by directory permissions, file ownership, or the user running the Node.js process."
    },
    {
      "question": "Can EACCES occur on Windows?",
      "answer": "Yes. Although permission systems differ, Windows can also return EACCES when access to a file or folder is denied."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js System Errors Documentation",
      "url": "https://nodejs.org/api/errors.html#system-errors"
    }
  ],
  "relatedErrors": [
    "enoent",
    "eperm",
    "eisdir",
    "enotdir",
    "ebusy",
    "erofs"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Reading a Protected File",
      "Writing to a Protected Directory",
      "Creating Folders Without Permission"
    ],
    "checklist": [
      "Check File Permissions",
      "Use Writable Directories",
      "Verify File Ownership",
      "Avoid Restricted Ports"
    ],
    "estimatedTime": "5 minutes"
  },
  "causesTable": [
    {
      "cause": "Reading a Protected File",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Writing to a Protected Directory",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Creating Folders Without Permission",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "EACCES Error: Root Causes & Verified Fixes",
  "seoDescription": "Troubleshoot EACCES in Node.js with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your projects."
};

export default errorData;
