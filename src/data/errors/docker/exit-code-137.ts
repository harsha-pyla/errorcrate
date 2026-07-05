import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "exit-code-137",
  "name": "Exit Code 137",
  "category": "docker",
  "badges": [
    "Docker Runtime Error",
    "Exit Code",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The containerized process was forcefully terminated by a SIGKILL (signal 9) signal from the host, typically due to memory exhaustion.",
  "meanDescription": "Exit code 137 is returned when the container process terminates due to receiving Unix signal 9 (SIGKILL). This is computed as 128 (offset for signal terminations) + 9 (SIGKILL). The most common causes are memory exhaustion (OOM), manual container termination via docker kill, or a docker stop command that exceeded its 10-second grace timeout.",
  "causes": [
    "Kernel Out of Memory (OOM) Killer: The host operating system terminated the container process because it ran out of memory.",
    "Docker Stop timeout: The container process took too long to shutdown, forcing a SIGKILL from Docker.",
    "Manual Docker Kill: A developer executed the 'docker kill' command to stop the container immediately."
  ],
  "solutions": [
    "Allocate more memory resources: Increase container RAM limits using '-m' or compose configurations.",
    "Optimize application memory usage: Investigate memory leaks and optimize garbage collection parameters.",
    "Forward signals correctly: Ensure the container processes run under an init manager like 'tini' to forward SIGTERM."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Container exited with status 137",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker kill my-running-container",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "my-running-container\n$ echo $?\n137",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Capture container exit code",
      "language": "bash",
      "description": "Inspect container exit code history.",
      "code": "docker ps -a --filter \"exited=137\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Scan kernel logs for OOM and SIGKILL signals.",
      "code": "sudo journalctl -k | grep -i -E 'oom|kill'"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "Modify memory allocations in .wslconfig if WSL2 host memory runs out.",
      "code": "[wsl2]\nmemory=8GB"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Monitor resources allocation using docker stats.",
      "code": "docker stats"
    }
  ],
  "commonMistakes": [
    "Assuming exit code 137 is always caused by OOM (it also occurs when a docker stop times out and force-kills the container)."
  ],
  "prevention": [
    "Verify container entrypoints propagate OS termination signals correctly to child processes."
  ],
  "faq": [
    {
      "question": "What does exit code 137 mean?",
      "answer": "It indicates that the container was stopped forcefully by a SIGKILL (signal 9) signal."
    },
    {
      "question": "How is this different from exit code 143?",
      "answer": "Exit code 143 corresponds to SIGTERM (128 + 15), which represents a graceful shutdown request. Exit code 137 is a force kill (SIGKILL)."
    },
    {
      "question": "How do I inspect why a container exited with 137?",
      "answer": "Run 'docker inspect <container_id>' and check the 'OOMKilled' flag."
    },
    {
      "question": "How do I increase memory in compose?",
      "answer": "Set limits: resources.limits.memory inside the deploy block."
    }
  ],
  "helpfulResources": [
    {
      "name": "Unix Signals reference",
      "url": "https://en.wikipedia.org/wiki/Signal_(IPC)"
    }
  ],
  "relatedErrors": [
    "container-exited-with-code-137",
    "oomkilled"
  ],
  "quickFix": {
    "causes": [
      "Process consumed more memory than allocated",
      "Container ignored SIGTERM and was force-stopped",
      "Manual docker kill command executed"
    ],
    "checklist": [
      "Run docker inspect to check OOMKilled flag",
      "Increase host or container memory limits",
      "Add tini init flag to entrypoints",
      "Review application heap logs"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Kernel Out of Memory (OOM) event",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Docker stop command timeout",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Manual docker kill command",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Exit Code 137 in Docker — Causes & Solutions",
  "seoDescription": "Encountering Exit Code 137 in Docker? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening again."
};

export default errorData;
