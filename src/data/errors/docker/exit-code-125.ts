import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "exit-code-125",
  "name": "Exit Code 125",
  "category": "docker",
  "badges": [
    "Docker CLI Error",
    "Exit Code",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The Docker CLI command itself failed to run, often due to syntactically invalid parameters or driver failures before the container process could start.",
  "meanDescription": "Exit code 125 is an error status returned by the Docker CLI client indicating that the docker run command itself failed to initialize the container environment. Unlike exit codes 126 or 127 (which originate from inside the container during execution), exit code 125 originates from Docker itself before the container process has been started. Common triggers include specifying invalid flag parameters, attempting to bind non-existent local network ports, or encountering system runtime configuration conflicts.",
  "causes": [
    "Invalid command line flags: Providing syntax errors (like -p instead of --publish, or mismatched quotation marks).",
    "System capabilities restriction: The host kernel restricts required container permissions (e.g. running under strict SELinux/AppArmor blocks).",
    "Conflicting container names: Attempting to run a new container using a name that is already allocated to another container on the system."
  ],
  "solutions": [
    "Verify run arguments: Match your parameters with official Docker CLI syntax to ensure flag correctness.",
    "Remove duplicate containers: Run 'docker rm -f <name>' to free up the container name namespace.",
    "Audit security profiles: Adjust AppArmor or SELinux policies if they block container creation."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: Conflict. The container name \"/my-app\" is already in use by container \"...\".\n# Command exits with status 125",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "# Attempting to run container with duplicate name\ndocker run --name web-server nginx",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: Error response from daemon: Conflict. The container name \"/web-server\" is already in use by container \"abcdef123456\". You have to remove (or rename) that container to be able to reuse that name.\n$ echo $?\n125",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Exit Codes",
      "language": "bash",
      "description": "How to verify and capture the exit code returned by the last run docker command in Linux and macOS shells.",
      "code": "docker run --invalid-flag-name alpine\necho $?\n# Outputs: 125"
    },
    {
      "name": "Pruning Conflicting Containers",
      "language": "bash",
      "description": "Clean up exited containers to free up name bindings and prevent code 125 conflicts.",
      "code": "# Remove specific conflicting container\ndocker rm -f web-server\n# Prune all stopped containers\ndocker container prune -f"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Checking security profile policies (like AppArmor) on Linux servers.",
      "code": "# Check if AppArmor service is active\nsudo systemctl status apparmor\n# Run container bypassing default profiles\ndocker run --security-opt apparmor=unconfined -d nginx"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Capturing exit status codes inside Windows PowerShell prompts.",
      "code": "docker run --invalid-flag alpine\n$LastExitCode\n# Outputs: 125"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS shell exit code validation.",
      "code": "docker run --name duplicate-name alpine; echo $?"
    }
  ],
  "commonMistakes": [
    "Mistaking exit code 125 for an application failure (it indicates the container itself was blocked from launching, meaning the code inside never ran).",
    "Declaring arguments in the wrong position relative to the image name (all docker flags must precede the image name; anything after the image name is treated as command arguments inside the container)."
  ],
  "prevention": [
    "Always check for running or stopped containers using `docker ps -a` before scripting name-specific runs.",
    "Use `--rm` flag to automatically clean up containers upon termination, freeing up the name namespace."
  ],
  "faq": [
    {
      "question": "What is exit code 125?",
      "answer": "Exit code 125 indicates that the Docker daemon or CLI client failed to start the container, meaning the problem lies in the command arguments or configuration, not the application inside the container."
    },
    {
      "question": "How does exit code 125 differ from 127?",
      "answer": "Exit code 125 is thrown by Docker itself when the container fails to launch. Exit code 127 is thrown from inside the container when a specified command or binary is not found inside the image."
    },
    {
      "question": "Why does duplicate container names throw 125?",
      "answer": "Because Docker cannot instantiate two containers with the same name. It will reject the creation phase and return exit code 125."
    },
    {
      "question": "How do I capture exit codes?",
      "answer": "Immediately after running a docker command, run 'echo $?' on Linux/macOS or '$LastExitCode' inside PowerShell to capture the status."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Run CLI Reference",
      "url": "https://docs.docker.com/engine/reference/commandline/run/"
    }
  ],
  "relatedErrors": [
    "exit-code-126",
    "exit-code-127"
  ],
  "quickFix": {
    "causes": [
      "Invalid command line parameter flags",
      "Conflicting container name already exists",
      "Kernel security policies AppArmor blocks"
    ],
    "checklist": [
      "Run docker rm -f <name> to clear conflicts",
      "Move options flags before the image name",
      "Verify flag names spelling",
      "Check active security profiles"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Invalid CLI flags or options syntax",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Conflicting container name namespace",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Host security profiles (AppArmor/SELinux) block",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Exit Code 125 Fast — Docker Solutions Guide",
  "seoDescription": "Getting Exit Code 125 in Docker? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix it."
};

export default errorData;
