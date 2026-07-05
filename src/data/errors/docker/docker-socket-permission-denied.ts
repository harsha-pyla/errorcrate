import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "docker-socket-permission-denied",
  "name": "Docker socket permission denied",
  "category": "docker",
  "badges": [
    "Docker Socket Error",
    "Permission Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The current user does not have read/write access to the Unix socket file (/var/run/docker.sock) used to communicate with the Docker daemon.",
  "meanDescription": "This error occurs when a non-root user attempts to invoke Docker commands, but the Unix socket file (/var/run/docker.sock) used for communication is owned by root and restricts access to other users. Since the socket file serves as the main gateway to command the daemon, restricting access to it blocks all non-elevated CLI invocations.",
  "causes": [
    "Missing read/write permissions on docker.sock: The socket file permissions do not allow non-root reads/writes.",
    "Docker group not associated with docker.sock: The socket file group is not set to 'docker'.",
    "Active shell session not updated: The user was recently added to the group but the current shell has not been reloaded."
  ],
  "solutions": [
    "Change socket permissions temporarily: Run 'sudo chmod 666 /var/run/docker.sock' to immediately grant read/write access.",
    "Fix socket group ownership: Run 'sudo chown root:docker /var/run/docker.sock' to restore access to the docker group members.",
    "Reload active shell groups: Execute 'newgrp docker' to apply group membership changes to your current terminal session."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker ps",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Got permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Get \"http://%2Fvar%2Frun%2Fdocker.sock/v1.24/containers/json\": dial unix /var/run/docker.sock: connect: permission denied",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Socket Permissions",
      "language": "bash",
      "description": "Inspect the user and group owner, as well as the active read/write permissions of the Unix socket file.",
      "code": "$ ls -la /var/run/docker.sock\n\nsrw-rw---- 1 root root 0 Jun 28 12:00 /var/run/docker.sock\n# Notice the group is root, meaning only root can read/write without sudo."
    },
    {
      "name": "Fixed Socket Output",
      "language": "bash",
      "description": "Output after running chmod 666 or setting chown root:docker.",
      "code": "$ ls -la /var/run/docker.sock\n\nsrw-rw-rw- 1 root docker 0 Jun 28 12:05 /var/run/docker.sock\n# Members of the docker group can now query the socket file."
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Standard steps to change socket permissions and update active group configuration settings.",
      "code": "sudo chmod 666 /var/run/docker.sock\nsudo chown root:docker /var/run/docker.sock\nnewgrp docker"
    },
    {
      "name": "Windows (WSL2)",
      "language": "bash",
      "description": "Fixing socket file access inside WSL2 Ubuntu terminals.",
      "code": "sudo chown root:docker /var/run/docker.sock\nsudo chmod 666 /var/run/docker.sock"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS Docker Desktop handles socket connections dynamically. If socket fails, try restarting the application.",
      "code": "# Test socket path configuration\nls -la /var/run/docker.sock.raw"
    }
  ],
  "commonMistakes": [
    "Expecting chmod changes to persist indefinitely across daemon reboots (the daemon recreates the socket file on startup, resetting permissions).",
    "Running scripts inside containers that mount `/var/run/docker.sock` without configuring permissions matching the container user."
  ],
  "prevention": [
    "Always rely on group permissions (`chown root:docker`) instead of opening the socket to everyone (`chmod 666`) to maintain host security.",
    "Verify systemd services (like `docker.socket`) are loaded and managed using default configurations."
  ],
  "faq": [
    {
      "question": "What is docker.sock?",
      "answer": "It is a Unix socket file that the Docker daemon listens on for REST API requests sent by the client CLI."
    },
    {
      "question": "Is it safe to run chmod 666 on docker.sock?",
      "answer": "While it solves the permission issue, it allows any local user or process to gain root access to the host machine. On multi-user systems, adding users to the 'docker' group is much more secure."
    },
    {
      "question": "Why does my socket permissions reset after reboot?",
      "answer": "The docker.sock socket file is recreated by systemd every time the Docker service starts, resetting its permissions. Use group ownership configurations to make the fix permanent."
    },
    {
      "question": "How do I verify who owns the socket?",
      "answer": "Run 'ls -la /var/run/docker.sock' to see the user and group owner details."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Socket Security Guidelines",
      "url": "https://docs.docker.com/engine/security/#docker-daemon-attack-surface"
    }
  ],
  "relatedErrors": [
    "permission-denied",
    "cannot-connect-to-the-docker-daemon"
  ],
  "quickFix": {
    "causes": [
      "Socket file owned by root group",
      "User not added to docker group",
      "Socket permissions locked to srw-rw----"
    ],
    "checklist": [
      "Chown socket to docker group",
      "Chmod socket to 666 temporarily",
      "Verify group membership",
      "Restart docker systemd service"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Incorrect socket file permissions",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Socket group ownership mismatch",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Stale shell session state",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot Docker socket permission denied — Docker Error.",
  "seoDescription": "Docker socket permission denied in Docker — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid."
};

export default errorData;
