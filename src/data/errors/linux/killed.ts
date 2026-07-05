import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "killed",
  "name": "Killed",
  "category": "linux",
  "badges": [
    "Linux System",
    "Process Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the kernel or another process abruptly terminates a program by sending a SIGKILL (signal 9) signal.",
  "meanDescription": "The 'Killed' error message is returned by the shell when a process is terminated by the kernel with a SIGKILL (Signal 9) signal. SIGKILL cannot be caught, blocked, or ignored by the application, resulting in an immediate exit. This most commonly happens because the kernel's Out-Of-Memory (OOM) Killer stepped in to terminate memory-heavy processes to prevent a system crash, or because a system administrator or timeout monitor script explicitly ran the 'kill -9' command.",
  "causes": [
    "Kernel OOM Killer intervention: System ran out of physical memory and swap, causing the kernel to terminate the largest memory-consuming process.",
    "Manual process termination: An administrator or automated process manager sent a SIGKILL (signal 9) to the process.",
    "Systemd service memory limits: Systemd CGroups memory limits were exceeded, triggering automated process termination."
  ],
  "solutions": [
    "Inspect kernel logs: Search system logs ('dmesg -T | grep -i -E \"kill|oom\"') to verify if the OOM Killer terminated the process.",
    "Reduce process memory footprint: Configure memory limits in your application (e.g. Node's '--max-old-space-size' or JVM's '-Xmx').",
    "Increase swap space: Allocate a swap file to provide virtual memory padding for temporary resource spikes."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Killed",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Running a memory-intensive compile or script\n./heavy_build_process",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Killed\n$ echo $?\n137",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Inspecting OOM Logs",
      "language": "bash",
      "description": "Locate kernel crash messages to determine if the process was targeted by the Out-Of-Memory subsystem.",
      "code": "# Check system messages for memory events\n$ sudo dmesg -T | grep -i -E \"kill|oom\"\n\n# Look for matching line patterns:\n# [Mon Jun 29 08:30:15 2026] Out of memory: Kill process 12345 (heavy_build) score 850 or sacrifice child"
    },
    {
      "name": "Allocating System Swap Padding",
      "language": "bash",
      "description": "Add virtual swap storage to protect processes from failing during temporary spikes in memory consumption.",
      "code": "# 1. Create a 2GB swap file\n$ sudo fallocate -l 2G /swapfile\n\n# 2. Restrict file permissions\n$ sudo chmod 600 /swapfile\n\n# 3. Format file as swap storage\n$ sudo mkswap /swapfile\n\n# 4. Enable swap partition\n$ sudo swapon /swapfile"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Protect a critical process from being targeted by the OOM Killer by lowering its oom_score_adj ranking.",
      "code": "# Set process adjust score to lowest priority (requires root)\necho -1000 > /proc/$(pgrep -o nginx)/oom_score_adj"
    },
    {
      "name": "Windows (WSL)",
      "language": "text",
      "description": "WSL processes are terminated if they exceed the memory allocations defined in the global configurations file.",
      "code": "# Add memory allocation padding to %USERPROFILE%\\.wslconfig:\n# [wsl2]\n# memory=12GB"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Locate system termination codes using standard tools.",
      "code": "# Search log records for termination signals\nlog show --predicate 'eventMessage CONTAINS \"kill\"' --last 10m"
    }
  ],
  "commonMistakes": [
    "Running applications without memory limits in containers, leading the host operating system's OOM Killer to terminate container runtimes.",
    "Assuming the exit code `137` is a generic success code (exit code `137` indicates process termination by signal `9` [128 + 9])."
  ],
  "prevention": [
    "Establish memory resource constraints (`MemoryLimit` settings) in systemd service units.",
    "Monitor application heap usage and adjust process sizing boundaries."
  ],
  "faq": [
    {
      "question": "What is SIGKILL (signal 9)?",
      "answer": "SIGKILL is a system signal that forces a process to terminate immediately. Unlike SIGTERM (signal 15), the process cannot ignore this signal or run cleanup routines."
    },
    {
      "question": "How do I know if the OOM Killer killed my program?",
      "answer": "Run 'sudo dmesg -T | grep -i oom' or check '/var/log/syslog' for logs containing 'Out of memory: Kill process'."
    },
    {
      "question": "How do I prevent the OOM Killer from targeting my app?",
      "answer": "You can adjust its OOM score by writing to '/proc/<PID>/oom_score_adj'. Lower values make it less likely to be targeted by the kernel's cleanup routine."
    },
    {
      "question": "How do I create a swap file to prevent Killed errors?",
      "answer": "Run: 'sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile && sudo mkswap /swapfile && sudo swapon /swapfile'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Linux OOM Killer Guide",
      "url": "https://www.kernel.org/doc/ghtml/latest/admin-guide/sysctl/vm.html"
    }
  ],
  "relatedErrors": [
    "out-of-memory"
  ],
  "quickFix": {
    "causes": [
      "Physical host memory and swap allocations exhausted",
      "Process exceeded systemd or cgroup memory quotas",
      "Process was terminated by an administrator using kill -9"
    ],
    "checklist": [
      "Verify crash reason using dmesg -T",
      "Check exit code (137 indicates SIGKILL)",
      "Set up system swap file configuration",
      "Limit application maximum old space heap sizes"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Kernel OOM (Out Of Memory) Killer termination",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Resource constraints set by systemd CGroups",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Explicit administrative kill -9 execution",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Killed Explained: Causes, Fixes & Prevention",
  "seoDescription": "Getting Killed in Linux? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix it."
};

export default errorData;
