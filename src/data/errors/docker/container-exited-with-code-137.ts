import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "container-exited-with-code-137",
  "name": "Container exited with code 137",
  "category": "docker",
  "badges": [
    "Docker Runtime Error",
    "Exit Code",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The container was terminated abruptly by the host operating system because it ran out of memory (OOM) or received a SIGKILL signal.",
  "meanDescription": "Exit code 137 indicates that the containerized process was forcefully terminated by a SIGKILL (signal 9) signal. The number 137 is derived from the standard Unix shell convention: 128 (default exit code offset for signal terminations) + 9 (the signal number for SIGKILL). The two most common causes of this termination are: 1) the host kernel's Out-Of-Memory (OOM) Killer terminated the container because the host ran out of physical RAM, or 2) the container failed to stop gracefully within the 10-second grace period during a 'docker stop' command, forcing Docker to send a SIGKILL.",
  "causes": [
    "Out of Memory (OOM) Killer: The host kernel terminated the process because memory consumption exceeded allocated system/container limits.",
    "Forceful container termination: Running 'docker kill' or running 'docker stop' on a container that ignored the initial SIGTERM signal for more than 10 seconds.",
    "Docker Desktop resources exhausted: The virtual machine hypervisor running Docker Desktop hit its hard RAM ceiling."
  ],
  "solutions": [
    "Increase container memory limits: Adjust memory allocation flags (e.g. '-m 4g') or set up memory limits inside your compose files.",
    "Configure grace stopping periods: Update application code to handle the SIGTERM signal cleanly to exit under 10 seconds.",
    "Increase Docker Desktop VM resources: Raise RAM allocation settings inside the Docker Desktop configuration panel."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error: Container exited with code 137",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker run --rm -m 50m node node -e \"const a = []; while(true) a.push(new Array(1000000));\"",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "# Container halts and outputs exit status\n$ echo $?\n137",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking OOM Status",
      "language": "bash",
      "description": "Inspect the container state details to verify if it was OOM killed.",
      "code": "$ docker inspect my-container --format '{{.State.OOMKilled}}'\n\ntrue\n# If true, the container was terminated by the OOM killer"
    },
    {
      "name": "Docker Compose Memory Limits",
      "language": "yaml",
      "description": "Configure hard memory limits and reservations for container resources inside compose files.",
      "code": "version: '3.8'\nservices:\n  api:\n    image: my-app:latest\n    deploy:\n      resources:\n        limits:\n          memory: 2G # Hard cap; exceeding this triggers exit code 137\n        reservations:\n          memory: 512M"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect Linux kernel messages (dmesg) to confirm OOM terminations.",
      "code": "# Search system logs for Out of Memory events\ndmesg -T | grep -i oom\n# Or inspect system logs\nsudo journalctl -k | grep -i oom"
    },
    {
      "name": "Windows (WSL2)",
      "language": "text",
      "description": "Create or edit your %USERPROFILE%\\.wslconfig to allocate more memory to the WSL2 virtual machine.",
      "code": "[wsl2]\nmemory=8GB # Increase RAM allocated to WSL2\nprocessors=4"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check the memory allocation settings inside Docker Desktop configuration settings.",
      "code": "# Inspect VM engine stats\ndocker stats"
    }
  ],
  "commonMistakes": [
    "Assuming exit code 137 always means OOM (it can also mean a manual `docker kill` command or a timed-out `docker stop` command).",
    "Setting memory limits inside containers too close to the startup overhead requirements of heavy engines (like JVM/Node)."
  ],
  "prevention": [
    "Ensure applications running as PID 1 forward signal requests correctly to child processes (use lightweight entrypoint scripts like `tini`).",
    "Set up monitoring alerts on container memory utilization metrics."
  ],
  "faq": [
    {
      "question": "What does exit code 137 mean?",
      "answer": "It means the container was forcefully stopped by the host using a SIGKILL (signal 9) signal, usually due to memory exhaustion."
    },
    {
      "question": "How do I check if my container was OOM killed?",
      "answer": "Run 'docker inspect <container_id> --format \"{{.State.OOMKilled}}\"'. If it prints 'true', it was terminated due to memory limits."
    },
    {
      "question": "Why does my container ignore docker stop?",
      "answer": "If your application process is running as PID 1 and does not forward SIGTERM signals to child processes, it will hang for 10 seconds until Docker kills it with exit code 137."
    },
    {
      "question": "How do I allocate more memory to a container?",
      "answer": "Use the '-m' or '--memory' flag, for example: 'docker run -m 4g my-image'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Runtime Resource Limits Docs",
      "url": "https://docs.docker.com/config/containers/resource_constraints/"
    },
    {
      "name": "Unix Signals Reference",
      "url": "https://en.wikipedia.org/wiki/Signal_(IPC)"
    }
  ],
  "relatedErrors": [
    "oomkilled"
  ],
  "quickFix": {
    "causes": [
      "Container memory consumption hit allocated limits",
      "Host system ran out of swap/RAM",
      "Process ignored SIGTERM during docker stop"
    ],
    "checklist": [
      "Check OOMKilled flag using inspect",
      "Increase VM / Container memory allocation",
      "Review application memory leak logs",
      "Integrate tini process manager as PID 1"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Out of Memory (OOM) termination",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Forceful docker stop timeout",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Manual docker kill command",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Container exited with code 137 Explained: Causes, Fixes &.",
  "seoDescription": "Complete guide to fixing Container exited with code 137 in Docker. Includes root cause analysis, step-by-step solutions, framework-specific examples, and."
};

export default errorData;
