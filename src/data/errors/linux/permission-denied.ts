import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "permission-denied",
  "name": "Permission denied",
  "category": "linux",
  "badges": [
    "Linux System",
    "File System Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to read, write, or execute a file or directory without the necessary permissions or user ownership.",
  "meanDescription": "The 'Permission denied' error is a standard POSIX system error associated with the error code EACCES. It indicates that the operating system kernel blocked a file system request because the executing user process does not have sufficient permission bits (read, write, or execute) for the file, or lacks directory traversal rights (+x) on one of the parent folders in the path.",
  "causes": [
    "Missing read/write/execute permission bits: The file's permission flags (e.g. -rw-r--r--) block the current user from executing or writing to it.",
    "Process owner mismatch: The file is owned by root or another user account, and you are logged in as a standard user.",
    "Directory traversal restriction: One of the parent directories in the path is missing the execution (+x) permission, preventing lookup."
  ],
  "solutions": [
    "Change file permissions: Use the 'chmod' command to grant the required permissions (e.g. 'chmod +x script.sh').",
    "Change file owner: Use the 'chown' command to change the owner or group to your active user account (e.g. 'chown user:group file').",
    "Elevate execution privilege: Prepend the command with 'sudo' to execute with temporary administrative (root) rights."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "bash: ./run.sh: Permission denied",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to execute a file without execution bits\n./run.sh",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "bash: ./run.sh: Permission denied\n$ echo $?\n126",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking and Fixing Permissions",
      "language": "bash",
      "description": "Inspect permissions bits using long listing flags and grant execution privileges.",
      "code": "# 1. Inspect permissions\n$ ls -l run.sh\n-rw-r--r-- 1 user group 150 Jun 29 08:00 run.sh\n# Note: Missing 'x' execution bits\n\n# 2. Grant executable permission\n$ chmod +x run.sh\n\n# 3. Check again\n$ ls -l run.sh\n-rwxr-xr-x 1 user group 150 Jun 29 08:00 run.sh"
    },
    {
      "name": "Privileged Redirects Fix",
      "language": "bash",
      "description": "Standard redirects fail even with sudo because the redirection operator runs in standard user context. Use tee instead.",
      "code": "# Wrong: permission denied\n$ sudo echo \"nameserver 8.8.8.8\" > /etc/resolv.conf\n\n# Correct: pipes stdout to sudo privileged tee command\n$ echo \"nameserver 8.8.8.8\" | sudo tee /etc/resolv.conf"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Recursively update ownership configurations on folder structures.",
      "code": "# Change owner to current active user\nsudo chown -R $USER:$USER /var/www/html"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "WSL drives (/mnt/c) require metadata options enabled in wsl.conf to modify permissions.",
      "code": "# Edit /etc/wsl.conf to append mount options:\n# [automount]\n# options = \"metadata\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "System Integrity Protection (SIP) locks system files on macOS, throwing permission errors even under sudo.",
      "code": "# Inspect file flags (restricted files display 'restricted' attributes)\nls -lO /System"
    }
  ],
  "commonMistakes": [
    "Using `chmod 777` as a quick fix. This grants read, write, and execute permissions to everyone, posing severe security vulnerabilities.",
    "Forgetting that directories need execution permissions (+x) to allow files inside them to be accessed or read."
  ],
  "prevention": [
    "Always follow the Principle of Least Privilege: only grant the minimal permissions necessary.",
    "Verify groups configurations to allow developers sharing folders to belong to the same group namespace."
  ],
  "faq": [
    {
      "question": "What is EACCES?",
      "answer": "EACCES is the POSIX system error code representing 'Permission denied'."
    },
    {
      "question": "How do I read file permissions in 'ls -l'?",
      "answer": "The output displays 10 characters: first is directory flag (d/-), next three are owner permissions (rwx), next three are group (rwx), and final three are others (rwx)."
    },
    {
      "question": "Why does 'sudo' still give permission denied on file redirects?",
      "answer": "Running 'sudo echo \"text\" > file' fails if the file is root-owned because the shell redirect (>) runs as the standard user, not sudo. To fix it, run: 'echo \"text\" | sudo tee file'."
    },
    {
      "question": "What is directory execution (+x) permission?",
      "answer": "For directories, the 'r' flag allows listing files, while the 'x' flag allows traversing (opening) the directory. Without +x, you cannot read files inside it, even if you have read permissions on those files."
    }
  ],
  "helpfulResources": [
    {
      "name": "Linux File Permissions overview",
      "url": "https://wiki.archlinux.org/title/File_permissions_and_attributes"
    }
  ],
  "relatedErrors": [
    "no-such-file-or-directory"
  ],
  "quickFix": {
    "causes": [
      "File lacks execution bits (+x) for current user",
      "Target file is owned by root or another user profile",
      "Parent directory is missing execution traversals (+x)"
    ],
    "checklist": [
      "Check permissions flags using ls -l",
      "Add execute permission: chmod +x <file>",
      "Change owner permissions: chown $USER:$USER <file>",
      "Use sudo command or privilege pipe tee to write"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "File or folder owned by another user (root)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing write/execute permission bits (+w/+x)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Parent directory lacks execution flag (+x)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug Permission denied in Linux — Step-by-Step Fix",
  "seoDescription": "Permission denied in Linux — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
