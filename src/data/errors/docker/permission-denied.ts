import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "permission-denied",
  "name": "Permission denied",
  "category": "docker",
  "badges": [
    "Docker CLI Error",
    "Permission Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The system rejected a Docker operation because the current user lacks the required read/write permissions for files, sockets, or directories.",
  "meanDescription": "This error occurs when the Docker daemon or client attempts to perform an operation (like reading a local file for a build, mounting a volume directory, or writing output files) but is blocked by the host operating system's security controls. It most commonly manifests when running commands without the 'sudo' prefix before your user has been added to the docker system group.",
  "causes": [
    "User not in Docker Group: The active shell user is not listed inside the system's docker group.",
    "Volume mount permission mismatch: Mounting host directories that have root-only ownership inside containers running under non-root users.",
    "Dockerfile copy access blocked: Trying to COPY files that are protected or owned by different system accounts."
  ],
  "solutions": [
    "Add user to docker group: Run 'sudo usermod -aG docker $USER' and log out/log back in or run 'newgrp docker' to reload.",
    "Correct volume ownership: Run 'chown -R 1000:1000' (or corresponding container user ID) on mounted host directories.",
    "Run with elevated privileges: Prepend commands with 'sudo' as a temporary validation step."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "docker: Permission denied. got permission denied while trying to connect to the Docker daemon socket.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker ps",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Volume Mount Permission Mismatch",
      "language": "bash",
      "description": "If a container runs as a non-root user (e.g. node, uid 1000) and mounts a host directory owned by root, it will throw permission errors when writing.",
      "code": "# Inspect host folder ownership\nls -ld ./data\n# Fix: Change ownership to match container user\nsudo chown -R 1000:1000 ./data"
    },
    {
      "name": "Checking user groups",
      "language": "bash",
      "description": "List the groups the current user belongs to.",
      "code": "groups $USER"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Adding the active user to the docker group on Linux hosts.",
      "code": "sudo usermod -aG docker $USER\n# Apply group changes immediately without logging out\nnewgrp docker"
    },
    {
      "name": "Windows (WSL2)",
      "language": "bash",
      "description": "Applying permissions within the WSL2 terminal profile.",
      "code": "sudo usermod -aG docker $USER\n# If it still fails, restart the WSL VM\nwsl --shutdown"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Fixing ownership on macOS Docker client configuration directory.",
      "code": "sudo chown -R $(whoami) ~/.docker"
    }
  ],
  "commonMistakes": [
    "Running all docker commands with sudo, which creates root-owned files on your host machine that are hard to edit later.",
    "Forgetting to restart the terminal or log out after adding the user to the docker group."
  ],
  "prevention": [
    "Always declare non-root users inside your custom Dockerfiles (`USER node` or `USER 1000`).",
    "Ensure host directory permission properties match container execution users."
  ],
  "faq": [
    {
      "question": "Why does Docker say permission denied?",
      "answer": "The client lacks access to read/write system resources (like docker.sock or host directories)."
    },
    {
      "question": "Should I run Docker commands using sudo?",
      "answer": "Ideally no. Prepending sudo can cause files created inside the container to belong to root, causing permissions issues later. Add your user to the docker group instead."
    },
    {
      "question": "How do I fix permission denied on volume mounts?",
      "answer": "Ensure the folder on your host machine has read/write permissions matching the user running inside the container."
    },
    {
      "question": "How do I reload group settings without rebooting?",
      "answer": "Run the 'newgrp docker' command to apply group changes immediately in the active terminal shell."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Linux Post-Install steps",
      "url": "https://docs.docker.com/engine/install/linux-postinstall/"
    },
    {
      "name": "Docker Volumes Permissions Guide",
      "url": "https://docs.docker.com/storage/volumes/"
    }
  ],
  "relatedErrors": [
    "docker-socket-permission-denied",
    "cannot-connect-to-the-docker-daemon"
  ],
  "quickFix": {
    "causes": [
      "User not in docker system group",
      "Volume mount directory owned by root",
      "Incorrect socket file permissions"
    ],
    "checklist": [
      "Add user to docker group",
      "Run newgrp docker to reload",
      "Chown volume host directory",
      "Verify group memberships"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "User missing from docker group",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Host volume mount permissions mismatch",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "File permissions in COPY/ADD",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Permission denied: Complete Docker Troubleshooting Guide",
  "seoDescription": "Encountering Permission denied in Docker? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
