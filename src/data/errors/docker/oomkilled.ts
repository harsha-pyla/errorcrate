import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "oomkilled",
  "name": "OOMKilled",
  "category": "docker",
  "badges": [
    "Docker Runtime Error",
    "Memory Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The container was forcefully terminated by the kernel because its memory usage exceeded the set limit or exhausted host RAM.",
  "meanDescription": "OOMKilled (Out of Memory Killed) is a status set by the Docker daemon when the host operating system's kernel terminates a container process to free up memory. This happens when the container's memory consumption exceeds the hard limit specified by the --memory or -m flag, or when the host machine runs out of physical RAM and swap memory, prompting the Linux kernel's OOM Killer to select and terminate the container process.",
  "causes": [
    "Exceeded container memory limit: The application consumed more RAM than allowed by the container's runtime configurations.",
    "Host memory exhaustion: The host machine ran out of physical memory, forcing the kernel OOM killer to terminate processes.",
    "Memory leaks in application: Undetected memory leak issues in the application running inside the container."
  ],
  "solutions": [
    "Increase allocated memory limits: Raise memory cap configurations inside runtime settings (e.g. increase '-m' limit).",
    "Optimize application memory footprint: Fix garbage collection configuration or resolve code memory leaks.",
    "Enable swap limits: Configure container swap limits (e.g. '--memory-swap') to allow disk overflow buffers."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "State: OOMKilled=true",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker inspect my-crashed-container --format '{{.State.OOMKilled}}'",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "true",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Node.js Max Old Space limit",
      "language": "javascript",
      "description": "Configure the Node.js garbage collector heap size to stay safely within container memory limits.",
      "code": "# Start node container with memory limit and garbage collection flag\ndocker run -m 512m node:20 node --max-old-space-size=450 index.js\n# Prevents container OOMKilled by crashing Node internally before hitting container limits."
    },
    {
      "name": "JVM Heap limits configuration",
      "language": "bash",
      "description": "Configure Java applications to recognize container bounds dynamically.",
      "code": "# Set JVM MaxRAMPercentage to automatically scale heap size relative to container limits\njava -XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0 -jar app.jar"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check kernel system syslog messages to verify OOM events.",
      "code": "sudo tail -n 100 /var/log/messages | grep -i oom\n# Or check systemd journal\njournalctl -p 3 -xb | grep -i oom"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "WSL2 allocates up to 50% of host RAM by default. Adjust allocations inside %USERPROFILE%\\.wslconfig.",
      "code": "[wsl2]\nmemory=12GB # Set higher RAM ceiling for WSL development"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Inspect memory allocation trends inside Docker Desktop.",
      "code": "# View active memory overheads of running nodes\ndocker stats --no-stream"
    }
  ],
  "commonMistakes": [
    "Setting hard memory limits on containers (`-m 256m`) without setting corresponding application heap limits, leading to silent container crashes.",
    "Ignoring background memory overheads like sidecars or database caching processes in Docker Compose files."
  ],
  "prevention": [
    "Configure container restart policies cautiously (`restart: on-failure`) to avoid endless crash loops on memory leaks.",
    "Always set memory reservations (soft limits) in conjunction with hard limits."
  ],
  "faq": [
    {
      "question": "What is OOMKilled?",
      "answer": "It is a container state flag indicating that the container's main process was terminated by the kernel's Out of Memory killer."
    },
    {
      "question": "How does OOMKilled differ from exit code 137?",
      "answer": "Exit code 137 is a generic exit code representing SIGKILL (which can be triggered manually by 'docker stop' or 'docker kill'). OOMKilled is a specific flag confirming the SIGKILL was triggered by the OOM killer due to memory exhaustion."
    },
    {
      "question": "Will Docker automatically restart OOMKilled containers?",
      "answer": "Only if the container has a restart policy (like 'restart: always' or 'restart: on-failure') configured, but if the memory issue persists, it will enter a crash loop."
    },
    {
      "question": "How do I prevent OOMKilled on JVM apps?",
      "answer": "Set appropriate Java heap memory limits (like '-Xmx') or use `MaxRAMPercentage` to ensure the JVM knows its bounds before hitting the container limits."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker memory resource constraints",
      "url": "https://docs.docker.com/config/containers/resource_constraints/#memory"
    }
  ],
  "relatedErrors": [
    "container-exited-with-code-137"
  ],
  "quickFix": {
    "causes": [
      "Container memory usage exceeded hard ceiling limit",
      "Host machine physical RAM exhausted",
      "Memory leak inside runtime process"
    ],
    "checklist": [
      "Inspect OOMKilled state using docker inspect",
      "Increase container memory limit configuration",
      "Configure MaxOldSpace / JVM Heap properties",
      "Fix memory leak vulnerabilities"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Container memory cap limit hit",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Host system physical RAM depletion",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Application memory leak",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix OOMKilled Fast — Docker Solutions Guide",
  "seoDescription": "Fix OOMKilled fast. This Docker debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
