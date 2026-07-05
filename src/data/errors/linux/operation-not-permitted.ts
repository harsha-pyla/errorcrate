import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "operation-not-permitted",
  "name": "Operation not permitted",
  "category": "linux",
  "badges": [
    "Linux System",
    "Security Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the kernel blocks an action because it requires superuser privileges or conflicts with active security policies.",
  "meanDescription": "The 'Operation not permitted' error is a standard POSIX system error associated with the error code EPERM. Unlike 'Permission denied' (EACCES), which typically relates to file access bits, EPERM indicates that the operation itself is restricted by security policies, lack of system capabilities, file immutable attributes, or Docker security profiles (seccomp). Even the root user can receive EPERM if trying to modify immutable files or perform raw hardware modifications blocked by the kernel.",
  "causes": [
    "Lack of kernel capabilities: Attempting to bind low ports (<1024) or manipulate network interfaces without CAP_NET_ADMIN privileges.",
    "Immutable file attributes: Attempting to edit or delete files marked with the +i (immutable) attribute.",
    "Docker sandbox constraints: Standard container runtimes restrict system calls (like mounting filesystems or changing clocks) using default seccomp profiles."
  ],
  "solutions": [
    "Add Docker capabilities: Start containers with required capabilities flags (e.g. '--cap-add=NET_ADMIN').",
    "Remove immutable attributes: Strip the immutable flag using 'sudo chattr -i <file>' before editing.",
    "Run with elevated system privileges: Prepend commands with 'sudo' or configure CAP policies for the binary."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "rm: cannot remove 'system.log': Operation not permitted",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to delete an immutable system file even as root\nsudo rm -f /var/log/system.log",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "rm: cannot remove '/var/log/system.log': Operation not permitted\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Immutable Attributes",
      "language": "bash",
      "description": "Inspect and unlock immutable files blocked by Linux file attributes.",
      "code": "# 1. Inspect file attributes\n$ lsattr /var/log/system.log\n----i--------e-- /var/log/system.log\n# Note: 'i' attribute indicates immutable block active\n\n# 2. Unlock the file\n$ sudo chattr -i /var/log/system.log\n\n# 3. Modify or delete the file\n$ sudo rm /var/log/system.log"
    },
    {
      "name": "Binding ports without root",
      "language": "bash",
      "description": "Grant individual binaries specific capability targets to avoid running them as root.",
      "code": "# Grant network binding capability to Node.js binary\n$ sudo setcap 'cap_net_bind_service=+ep' $(which node)\n\n# Node can now listen on port 80/443 under a standard user account"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check currently active process capability maps.",
      "code": "# Read capability bits of active shell process\ncapsh --print"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "Raw hardware and block device modifications fail on WSL2 due to virtualization restrictions.",
      "code": "# WSL kernels block raw disk partition mount commands\nsudo mount /dev/sdb1 /mnt/data"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "System Integrity Protection (SIP) throws EPERM on macOS system files.",
      "code": "# Check if SIP is active\ncsrutil status\n# Expected: System Integrity Protection status: enabled."
    }
  ],
  "commonMistakes": [
    "Assuming running as root solves all permission errors (EPERM can block root operations if files have immutable attributes or container policies restrict them).",
    "Running insecure containers with `--privileged` unnecessarily, which compromises host security instead of granting narrow `--cap-add` capabilities."
  ],
  "prevention": [
    "Manage file attributes explicitly inside backup automated scripts.",
    "Adopt narrow Docker capability maps instead of wide superuser overrides."
  ],
  "faq": [
    {
      "question": "How does EPERM differ from EACCES?",
      "answer": "EACCES (Permission denied) means the user lacks basic rwx file bits permissions. EPERM (Operation not permitted) means the operation itself is restricted by kernel-level security rules, regardless of file permissions."
    },
    {
      "question": "Why does root get 'Operation not permitted'?",
      "answer": "Root can get EPERM if a file has the 'immutable' flag enabled. Run 'lsattr <file>' to check. If you see 'i', run 'sudo chattr -i <file>' to unlock it."
    },
    {
      "question": "How do I bind port 80/443 without root?",
      "answer": "Grant the binary the network binding capability: 'sudo setcap 'cap_net_bind_service=+ep' /path/to/binary'."
    },
    {
      "question": "Why do mounting commands fail in containers?",
      "answer": "Docker containers drop mounting capabilities by default to prevent hosts escape vulnerabilities. Run the container using the '--privileged' flag or specify '--cap-add=SYS_ADMIN'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Linux capabilities man page",
      "url": "https://man7.org/linux/man-pages/man7/capabilities.7.html"
    }
  ],
  "relatedErrors": [
    "permission-denied"
  ],
  "quickFix": {
    "causes": [
      "File has the immutable attribute flag enabled (+i)",
      "Process lacks system capability (e.g. binding low ports)",
      "Docker container profile seccomp sandbox blocks system call"
    ],
    "checklist": [
      "Run lsattr to check for immutable flags",
      "Unlock files using sudo chattr -i",
      "Add Docker capabilities (e.g. --cap-add)",
      "Grant capabilities using setcap utility"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing raw kernel capability privileges",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Active immutable file attributes (chattr +i)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Docker container seccomp sandbox restriction",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Operation not permitted Error: Root Causes & Verified Fixes",
  "seoDescription": "Encountering Operation not permitted in Linux? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
