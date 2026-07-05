import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "docker-daemon-is-not-running",
  "name": "Docker daemon is not running",
  "category": "docker",
  "badges": [
    "Docker Engine Error",
    "Daemon Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The Docker command-line client cannot establish a connection because the background Docker daemon process is not running on the system.",
  "meanDescription": "This error occurs when you invoke docker commands but the background engine service (dockerd) has not been initialized or was terminated. The Docker client acts only as a frontend command parser; the actual heavy lifting (building, running, and managing containers) is done by the daemon. When the daemon is stopped, the CLI cannot route your commands and displays this warning.",
  "causes": [
    "Docker service not enabled on boot: The host machine started up but did not boot the daemon.",
    "Docker Desktop engine stopped: The Docker Desktop GUI is inactive on macOS/Windows.",
    "Insufficient system resources: The virtual machine running Docker ran out of memory or CPU and crashed."
  ],
  "solutions": [
    "Enable Docker service on boot: Execute 'sudo systemctl enable docker' (on Linux) to ensure the service runs on system startup.",
    "Start the service manually: Use 'sudo systemctl start docker' or restart Docker Desktop via the GUI.",
    "Increase system resource limits: Allocate more memory/CPU to your WSL2 or Docker Desktop settings if the service frequently crashes."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "docker-daemon: Docker daemon is not running. Please start the Docker daemon and try again.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker info",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Docker daemon is not running",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking system logs",
      "language": "bash",
      "description": "Inspect the systemd logs to see why the Docker daemon failed to run.",
      "code": "sudo journalctl -u docker -n 50 --no-pager"
    },
    {
      "name": "Verify connection stability",
      "language": "bash",
      "description": "Run standard diagnostics to verify the connection.",
      "code": "docker version"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Commands to enable and start the service on systemd Linux distributions.",
      "code": "sudo systemctl enable docker\nsudo systemctl start docker"
    },
    {
      "name": "Windows (WSL2)",
      "language": "bash",
      "description": "Starting the docker daemon service inside WSL2 environments.",
      "code": "sudo service docker start\n# Or restart WSL using powershell\nwsl --shutdown"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Launching Docker Desktop via the macOS Application interface.",
      "code": "open -a \"Docker\""
    }
  ],
  "commonMistakes": [
    "Assuming the daemon is running just because the Docker CLI is installed.",
    "Forgetting to start the WSL2 backend before invoking commands from bash terminals on Windows."
  ],
  "prevention": [
    "Set the Docker service to run automatically on system boot.",
    "Ensure your local virtual machine has at least 4GB of RAM allocated to prevent daemon out-of-memory crashes."
  ],
  "faq": [
    {
      "question": "How do I check if the Docker daemon is running?",
      "answer": "Run `docker info` in your terminal. If the daemon is running, it will output system information; otherwise, it will show the daemon is not running error."
    },
    {
      "question": "Why does my Docker daemon keep stopping?",
      "answer": "It is usually due to resource constraints. Check your host's free memory and review Docker Desktop logs for OOM (Out of Memory) crash indications."
    },
    {
      "question": "How do I start Docker daemon on boot?",
      "answer": "On Linux, run `sudo systemctl enable docker`. On Windows or macOS, check the 'Start Docker Desktop when you log in' box in the application settings."
    },
    {
      "question": "Can I run Docker without the daemon?",
      "answer": "No. The Docker CLI depends completely on the daemon to perform all containerization operations."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Engine Daemon Reference",
      "url": "https://docs.docker.com/config/daemon/"
    },
    {
      "name": "Docker Desktop Troubleshooting",
      "url": "https://docs.docker.com/desktop/troubleshoot/overview/"
    }
  ],
  "relatedErrors": [
    "cannot-connect-to-the-docker-daemon",
    "docker-socket-permission-denied"
  ],
  "quickFix": {
    "causes": [
      "Docker service is stopped or disabled",
      "Virtual machine virtualization crash",
      "Resource depletion (out of memory)"
    ],
    "checklist": [
      "Enable Docker on boot",
      "Restart system daemon service",
      "Increase VM memory allocation",
      "Reboot Docker Desktop"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Docker service not enabled on boot",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Docker Desktop engine stopped",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Virtualization memory crash",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Docker daemon is not running in Docker (With.",
  "seoDescription": "Troubleshoot Docker daemon is not running in Docker with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this."
};

export default errorData;
