import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "permissionerror",
  "name": "PermissionError",
  "category": "python",
  "badges": [
    "Python System",
    "OS Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to access a file or system resource without the necessary read, write, or administrative permissions.",
  "meanDescription": "The 'PermissionError' is raised when a file system or system call fails due to lack of authorization. This is the Python equivalent of POSIX errno EACCES or EPERM. It commonly happens when trying to write to files owned by 'root' without administrative elevation, attempting to read a restricted system file, or trying to bind a server socket to a privileged system port (like port 80 or 443) as a standard user.",
  "causes": [
    "Insufficient file access permissions: Attempting to write to a read-only file or one owned by another system user (e.g. root).",
    "Accessing restricted folders or system files: Attempting to write to root directories like '/etc/' or '/usr/bin/' directly.",
    "Privileged port binding: Attempting to bind a network server to a port below 1024 without root privileges."
  ],
  "solutions": [
    "Elevate process execution: Run the script using 'sudo' or modify the file owner namespace using 'chown'.",
    "Set file permissions: Adjust access permission bits on the target file using the 'chmod' utility.",
    "Use non-privileged port mappings: Bind applications to port values above 1023 (like 8080 or 5000) for standard users."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 1, in <module>\n    with open(\"/etc/hosts\", \"w\") as f:\nPermissionError: [Errno 13] Permission denied: '/etc/hosts'",
    "language": "python"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to write to restricted /etc/hosts without elevation\nwith open(\"/etc/hosts\", \"w\") as f:\n    f.write(\"127.0.0.1 custom.local\")",
    "language": "python"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Traceback (most recent call last):\n  File \"script.py\", line 2, in <module>\n    with open(\"/etc/hosts\", \"w\") as f:\nPermissionError: [Errno 13] Permission denied: '/etc/hosts'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Handling Directory Mismatches",
      "language": "python",
      "description": "Ensure your paths reference files instead of directories to avoid triggering system permissions blocks.",
      "code": "# Wrong: passing a folder path to open() throws PermissionError\n# with open(\"/var/log\", \"r\") as f:\n#     data = f.read()\n\n# Correct: reference a specific file in the folder\nwith open(\"/var/log/syslog\", \"r\") as f:\n    data = f.read()"
    },
    {
      "name": "Owner Permissions Fix",
      "language": "bash",
      "description": "Change ownership on target directory or elevate using sudo commands.",
      "code": "# 1. Run using administrative elevation\n$ sudo python3 script.py\n\n# 2. Or recursively change folder owner to your active user\n$ sudo chown -R $USER:$USER /var/www/html"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Grant network binding capabilities to the python executable to allow port 80/443 mapping without root.",
      "code": "sudo setcap 'cap_net_bind_service=+ep' $(which python3)"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Administrative elevation properties check on Windows systems.",
      "code": "# Run PowerShell as Administrator, then launch script\nStart-Process python -ArgumentList \"script.py\" -Verb RunAs"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify system protection rules on macOS directories.",
      "code": "ls -laO /System"
    }
  ],
  "commonMistakes": [
    "Running `open()` on directory paths instead of filenames, which returns a generic PermissionError on Unix environments.",
    "Using raw redirects (e.g. `sudo python script.py > /etc/out.txt`) where the output file redirection runs as standard user, triggering access denies."
  ],
  "prevention": [
    "Map system variables to user configuration folders (like `~/.config/`) instead of global directories.",
    "Adopt ports above 1023 for developer configuration environments."
  ],
  "faq": [
    {
      "question": "What is a PermissionError?",
      "answer": "It is a runtime exception raised when the operating system refuses a request from Python to access a file, directory, or network resource due to security restrictions."
    },
    {
      "question": "How do I fix 'PermissionError: [Errno 13] Permission denied'?",
      "answer": "This usually means the file or directory is owned by 'root' or another user. You can run your script with administrative privileges ('sudo python script.py') or change the file ownership to your current user: 'sudo chown $USER filename'."
    },
    {
      "question": "Why does binding port 80 throw this error?",
      "answer": "On Linux/Unix systems, ports below 1024 are 'privileged'. Standard users cannot bind to them. Either run as root, bind to a higher port (like 8080), or grant the Python binary binding capabilities using 'setcap'."
    },
    {
      "question": "Why do I get PermissionError when opening a directory?",
      "answer": "This happens if you pass a directory path to the 'open()' function instead of a file path. Make sure your path references a file."
    }
  ],
  "helpfulResources": [
    {
      "name": "Python File PermissionError reference",
      "url": "https://docs.python.org/3/library/exceptions.html#PermissionError"
    }
  ],
  "relatedErrors": [
    "filenotfounderror"
  ],
  "quickFix": {
    "causes": [
      "Accessing or writing to a file owned by root/another user",
      "Passing a directory folder path directly to open() function",
      "Binding sockets to privileged port values below 1024"
    ],
    "checklist": [
      "Check file ownership using ls -l",
      "Elevate execution: sudo python3 script.py",
      "Bind port above 1023 (e.g. 8080)",
      "Ensure path references a file, not a folder"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Writing to system root directories without sudo",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Privileged network port binding (port < 1024)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Target file lacks user write permissions (chmod)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "PermissionError: Complete Python Troubleshooting Guide",
  "seoDescription": "Troubleshoot PermissionError in Python with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
