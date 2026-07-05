import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "no-space-left-on-device",
  "name": "No space left on device",
  "category": "linux",
  "badges": [
    "Linux System",
    "Disk Space Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the file system runs out of physical disk space or has exhausted its pool of available inodes.",
  "meanDescription": "The 'No space left on device' error is a standard POSIX system error associated with the error code ENOSPC. It indicates that a write operation failed because the target partition is 100% full, the kernel has hit its maximum pre-allocated quota, or the file system has exhausted its available inodes. Inodes are metadata structures used to track file data; if you have millions of tiny files, you can run out of inodes even if you still have gigabytes of physical free space.",
  "causes": [
    "Physical storage exhaustion: The partition disk capacity has reached 100% occupancy.",
    "Inode exhaustion: The file system has run out of available inodes (common in mail servers or caches containing millions of small files).",
    "Locked deleted files: Running processes holding handles to deleted files, preventing the filesystem from reclaiming their space."
  ],
  "solutions": [
    "Prune system files and logs: Clean up logs in '/var/log/' or empty the package manager cache ('sudo apt-get clean').",
    "Reclaim space from deleted files: Find and restart processes holding deleted file handles using 'lsof'.",
    "Clean up orphan files to release inodes: Locate and delete directories containing millions of tiny session or cache files."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "write error: No space left on device",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to write data when partition blocks are filled\necho \"data\" > test.txt",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "-bash: echo: write error: No space left on device\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Locating Heavy Folders",
      "language": "bash",
      "description": "Trace which directories are consuming the most block space on the root mount.",
      "code": "# Sort root directories by size\n$ sudo du -sh /* 2>/dev/null | sort -h\n\n4.2G    /usr\n8.9G    /var\n24G     /home"
    },
    {
      "name": "Checking Inodes Limits",
      "language": "bash",
      "description": "Verify if the inode table is exhausted even if physical bytes show free space.",
      "code": "# Check inode allocations percentage\n$ df -i\n\nFilesystem     Inodes  IUsed  IFree IUse% Mounted on\n/dev/sda1        640K   640K      0  100% /"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Locate files that have been deleted but are still held open in memory by system processes.",
      "code": "# Find unreleased deleted files\nsudo lsof +L1\n# Restart or reload the holding process to free up disk space\nsudo systemctl reload nginx"
    },
    {
      "name": "Windows (WSL)",
      "language": "powershell",
      "description": "Compact WSL2 virtual disk (.vhdx) files inside Windows Host.",
      "code": "# Shutdown active WSL environments\nwsl --shutdown\n# Compact disk using Diskpart tool"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Flush local system logs on macOS servers to free storage blocks.",
      "code": "sudo rm -rf /private/var/log/asl/*"
    }
  ],
  "commonMistakes": [
    "Deleting large log files while applications are running without restarting the processes, meaning the disk blocks remain locked and space is not reclaimed.",
    "Forgetting to check the inode allocation stats (`df -i`) and focusing solely on block size (`df -h`)."
  ],
  "prevention": [
    "Set up automated log rotations using `logrotate` to prevent single files from growing indefinitely.",
    "Configure monitoring alarms (like Prometheus node-exporter) to alert when disk spaces reach 85% occupancy."
  ],
  "faq": [
    {
      "question": "How do I check if my disk is full?",
      "answer": "Run 'df -h' to check partition block occupancy. If any mount is at 100%, writes to that partition will fail."
    },
    {
      "question": "What is inode exhaustion?",
      "answer": "Every file requires an inode metadata entry. If you run out of inodes (check with 'df -i'), you cannot create new files even if physical disk space is available."
    },
    {
      "question": "Why does df show 100% full after I deleted a large file?",
      "answer": "Linux does not release disk blocks until all active processes close their file handles. If a process (like Nginx) is still reading/writing to the deleted log file, the space remains locked. Run 'sudo lsof +L1' to find and restart these processes."
    },
    {
      "question": "How do I find the largest directories?",
      "answer": "Run 'sudo du -sh /* 2>/dev/null | sort -h' to trace which root folders consume the most space."
    }
  ],
  "helpfulResources": [
    {
      "name": "Linux df command specs",
      "url": "https://man7.org/linux/man-pages/man1/df.1.html"
    }
  ],
  "relatedErrors": [
    "read-only-file-system"
  ],
  "quickFix": {
    "causes": [
      "Partition blocks physical capacity reached 100%",
      "Inodes table exhausted due to millions of small files",
      "Active process handles lock space of deleted log files"
    ],
    "checklist": [
      "Check space using df -h and df -i",
      "Reclaim deleted blocks using lsof +L1",
      "Clean package cache: apt-get clean",
      "Prune application and database log archives"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Physical disk block exhaustion (100% full)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Stale deleted files held active by open processes",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Inode table exhaustion (no free metadata blocks)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix No space left on device in Linux (With Examples)",
  "seoDescription": "Resolve No space left on device in Linux with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
