import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "exit-code-126",
  "name": "Exit Code 126",
  "category": "docker",
  "badges": [
    "Docker Runtime Error",
    "Exit Code",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The command specified inside the container was found, but it could not be executed due to permission limitations or file format issues.",
  "meanDescription": "Exit code 126 is a standard POSIX error returned when a command is located inside the container's file system, but the execution attempt is blocked. In Docker, this most commonly occurs when: 1) the script or binary file lacks execution permissions (missing 'chmod +x' flag), 2) you attempted to execute a directory as a command, or 3) the container was mounted using the 'noexec' mount option.",
  "causes": [
    "Missing execution permissions: The shell script or binary inside the container does not have user execution permissions.",
    "Attempting to execute a directory: Supplying a path that resolves to a folder instead of a runnable file.",
    "Volume mounted with noexec: The container storage volume or mount path prevents binary execution."
  ],
  "solutions": [
    "Set file execution flags: Add 'RUN chmod +x /path/to/script.sh' inside the Dockerfile compilation phases.",
    "Verify run command targets: Ensure paths reference files directly rather than directories.",
    "Verify mount security flags: Ensure execution is not blocked by 'noexec' parameters inside host mounts."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "docker: Error response from daemon: OCI runtime create failed: container_linux.go:349: starting container process caused: exec: \"/app/run.sh\": permission denied: unknown.\n# Command exits with status 126",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "# Running a script that lacks executable permission\ndocker run --rm alpine /app/run.sh",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "standard_init_linux.go:228: exec user process caused: permission denied\n$ echo $?\n126",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Dockerfile chmod Execution Fix",
      "language": "docker",
      "description": "Always add execute privileges to entrypoint scripts copied from the host.",
      "code": "FROM alpine:3.18\nCOPY entrypoint.sh /usr/local/bin/\n# Fix: ensure script is marked executable\nRUN chmod +x /usr/local/bin/entrypoint.sh\nENTRYPOINT [\"/usr/local/bin/entrypoint.sh\"]"
    },
    {
      "name": "Bypassing Entrypoints to Inspect Permissions",
      "language": "bash",
      "description": "Override the entrypoint to run an interactive shell and check execution permission bits.",
      "code": "docker run -it --entrypoint /bin/sh my-image\n# Inspect permissions\nls -la /usr/local/bin/entrypoint.sh\n# Output: -rw-r--r-- (Missing 'x' executable bits, triggers code 126)"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Linux file system mount checks for noexec restrictions.",
      "code": "# Check if the mount directory has noexec flags enabled\nmount | grep \"/var/lib/docker\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Git running on Windows does not track execution bits, stripping permissions during clone.",
      "code": "# Configure git to track and respect execution bits in repo checkouts\ngit config core.filemode true"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS Docker Desktop permission checks.",
      "code": "# Execute script directly via container bash bypass\ndocker run -it my-image sh -c \"chmod +x /app/run.sh && /app/run.sh\""
    }
  ],
  "commonMistakes": [
    "Mapping host folders into containers and attempting to execute scripts inside them directly, without verifying if host permissions match container user privileges.",
    "Accidentally typing a directory name (like `/usr/local/bin`) inside ENTRYPOINT or CMD instead of the exact script file path."
  ],
  "prevention": [
    "Integrate `git config core.filemode true` inside developer workflow documentation.",
    "Always use the `chmod +x` instruction inside Dockerfiles for all custom script additions."
  ],
  "faq": [
    {
      "question": "What is exit code 126?",
      "answer": "Exit code 126 means 'Command invoked cannot execute'. The file exists inside the container, but it is not runnable."
    },
    {
      "question": "How do I fix permission denied inside exit code 126?",
      "answer": "Ensure the file is marked executable. Inside your Dockerfile, add a line: 'RUN chmod +x /path/to/script.sh'."
    },
    {
      "question": "Can Windows file checkouts trigger this?",
      "answer": "Yes. Git running on Windows does not natively track the Unix execute permission bit. When the code is cloned on Windows and copied into a container, scripts lose their executable state, triggering exit code 126."
    },
    {
      "question": "How do I check local file permissions inside the container?",
      "answer": "Run 'docker run -it --entrypoint /bin/sh <image>' and run 'ls -la' to inspect the execution bit flags of the target command file."
    }
  ],
  "helpfulResources": [
    {
      "name": "runc system execution details",
      "url": "https://github.com/opencontainers/runc/blob/main/docs/spec.md"
    }
  ],
  "relatedErrors": [
    "exit-code-125",
    "exit-code-127",
    "permission-denied"
  ],
  "quickFix": {
    "causes": [
      "Script lacks user execution flags (+x)",
      "Target command is a directory, not a file",
      "Mount volume is configured with noexec flag"
    ],
    "checklist": [
      "Add RUN chmod +x to Dockerfile script paths",
      "Ensure path targets the file, not the folder",
      "Inspect permissions using shell bypass",
      "Check mount config flags"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing script execution permissions (+x)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Executing directory path by mistake",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "noexec flag inside host mounts",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Exit Code 126: Complete Docker Troubleshooting Guide",
  "seoDescription": "Resolve Exit Code 126 in Docker with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
