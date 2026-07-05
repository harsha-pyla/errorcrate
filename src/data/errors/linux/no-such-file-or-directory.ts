import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "no-such-file-or-directory",
  "name": "No such file or directory",
  "category": "linux",
  "badges": [
    "Linux System",
    "File System Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a command or application attempts to access a file or folder path that does not exist.",
  "meanDescription": "The 'No such file or directory' error is a standard POSIX system error associated with the error code ENOENT (Error No Entity). It indicates that the operating system kernel failed to locate a file or directory at the specified path. This commonly happens due to typos in command paths, executing commands in the wrong directory, shell scripts using Windows carriage return endings, or missing mount points.",
  "causes": [
    "Spelling typo in target path: A simple spelling or capitalization typo in the file or directory name.",
    "Wrong working directory context: The active terminal session is in a different directory than the file's relative path destination.",
    "Windows CRLF script shebangs: Shell scripts edited on Windows containing carriage returns (\\r) causing the interpreter to search for a binary like '/bin/sh\\r' which does not exist."
  ],
  "solutions": [
    "Verify file existence: Run 'ls -l <path>' to check if the file or folder is present.",
    "Use absolute paths: Reference files using their full path (e.g. '/var/log/nginx/error.log') to avoid relative directory ambiguity.",
    "Normalize line endings: Convert scripts to Unix line endings (LF) using the 'dos2unix' tool."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "cat: config.json: No such file or directory",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to display file contents in the wrong folder\ncat config.json",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "cat: config.json: No such file or directory\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Finding and Verifying Files",
      "language": "bash",
      "description": "Locate files in directory listings or absolute search queries before accessing them.",
      "code": "# 1. Check current folder files\n$ ls -la\n\n# 2. Search for config files system-wide\n$ find / -name \"config.json\" 2>/dev/null\n/etc/app/config.json\n\n# 3. Read using absolute path\n$ cat /etc/app/config.json"
    },
    {
      "name": "Fixing Windows CRLF Shebangs",
      "language": "bash",
      "description": "Convert Windows carriage return formatting to Linux LF format to fix missing interpreter errors.",
      "code": "# Error output:\n# bash: ./run.sh: /bin/sh^M: bad interpreter: No such file or directory\n\n# Fix using dos2unix converter\n$ dos2unix run.sh\n$ ./run.sh"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify current folder path location and check files present.",
      "code": "pwd\nls -lh"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "Verify paths mapping on Windows Subsystem for Linux (WSL).",
      "code": "# Access Windows file path using mount nodes\nls /mnt/c/Users/Username/Documents/config.json"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check if target directory exists on macOS using testing flag options.",
      "code": "if [ ! -f \"/etc/hosts\" ]; then echo \"File missing\"; fi"
    }
  ],
  "commonMistakes": [
    "Assuming directory casing does not matter (Linux file systems like ext4 are strictly case-sensitive, meaning `Config.json` and `config.json` are different files).",
    "Running commands that expect a file path to exist in `~/.bashrc` or initialization scripts without verifying their presence."
  ],
  "prevention": [
    "Always use absolute paths inside automated scripts or cron jobs to eliminate relative directory dependency bugs.",
    "Utilize shell path autocompletes (Tab completion) to confirm folder routes interactively."
  ],
  "faq": [
    {
      "question": "What is ENOENT?",
      "answer": "ENOENT stands for 'Error No Entry' (specifically, 'No such file or directory'). It is the low-level operating system code for file missing exceptions."
    },
    {
      "question": "Why does my script say 'no such file' when the file is clearly there?",
      "answer": "This usually happens if the script has Windows-style CRLF line endings. The shell reads the shebang line as '#!/bin/bash\\r' and fails because the command '/bin/bash\\r' (with a carriage return) does not exist."
    },
    {
      "question": "How do I find a missing file on my system?",
      "answer": "Use the find utility: 'find / -name \"filename.txt\" 2>/dev/null' to search the entire system."
    },
    {
      "question": "How do I change carriage returns to Unix format?",
      "answer": "Install and run 'dos2unix filename.sh' to automatically strip Windows line endings."
    }
  ],
  "helpfulResources": [
    {
      "name": "POSIX System Error Codes",
      "url": "https://man7.org/linux/man-pages/man3/errno.3.html"
    }
  ],
  "relatedErrors": [
    "permission-denied"
  ],
  "quickFix": {
    "causes": [
      "Target file path spelling typo or case mismatch",
      "Terminal pwd does not contain the relative path",
      "Shell script has Windows carriage return CRLF line endings"
    ],
    "checklist": [
      "Check spelling and directory casing",
      "Verify path location using pwd/ls",
      "Convert line endings using dos2unix",
      "Reference target using absolute paths"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Spelling typo in file or directory path",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Incorrect terminal working directory (pwd)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Windows CRLF shebang line corruption",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot No such file or directory — Linux Error Guide",
  "seoDescription": "Fix No such file or directory fast. This Linux debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world."
};

export default errorData;
