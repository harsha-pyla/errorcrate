import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "volume-not-found",
  "name": "Volume not found",
  "category": "docker",
  "badges": [
    "Docker Daemon Error",
    "Volume Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The container engine failed to mount a persistent volume because the specified named volume does not exist.",
  "meanDescription": "This error occurs when a container attempts to mount a named volume (e.g. -v my-vol:/data or volume mappings in docker-compose.yml) but the volume has not been created on the host system. Docker uses named volumes to persist container data, and mapping to a non-existent named volume causes container startup to fail if configured as an external dependency.",
  "causes": [
    "Volume not created: Referencing a named volume that has not been initialized with 'docker volume create'.",
    "Docker Compose external volume mismatch: Declaring an external volume inside your compose file when the volume does not exist on the host.",
    "Typo in volume name: Spelling mistakes inside the CLI command or compose settings."
  ],
  "solutions": [
    "Create the missing volume: Run 'docker volume create <volume_name>' manually.",
    "Verify active volumes list: Execute 'docker volume ls' to list all active volumes on the host.",
    "Remove external key in compose: Allow Docker Compose to manage and create the volume automatically by removing the external flag."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: volume volume-name not found",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker run -v production-db:/var/lib/postgresql/data postgres",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: Error response from daemon: volume production-db not found.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Listing and Creating Volumes",
      "language": "bash",
      "description": "List all active Docker volumes and create a new named storage volume.",
      "code": "# 1. List existing named volumes\ndocker volume ls\n\n# 2. Create the missing named volume\ndocker volume create production-db"
    },
    {
      "name": "Docker Compose External Volumes",
      "language": "yaml",
      "description": "When marking volumes as external, you must create them before running docker compose.",
      "code": "version: '3.8'\nservices:\n  db:\n    image: postgres:alpine\n    volumes:\n      - db-data:/var/lib/postgresql/data\n\nvolumes:\n  db-data:\n    external: true # Fix: run 'docker volume create db-data' first"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Locating persistent volume storage directories on Linux servers.",
      "code": "# Inspect detailed volume meta specs\ndocker volume inspect bridge\n# Local volumes are stored inside the host filesystem at:\n# /var/lib/docker/volumes/"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "WSL2 volumes are stored inside the vhdx virtual disk file system.",
      "code": "# Verify active wsl mounting mounts\nls \\\\wsl$\\docker-desktop-data\\data\\docker\\volumes\\"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Pruning unused volumes to free up disk space in macOS hypervisors.",
      "code": "# Remove all volumes not used by at least one container\ndocker volume prune -f"
    }
  ],
  "commonMistakes": [
    "Setting the `external: true` flag inside docker-compose files without running the corresponding volume creation command beforehand.",
    "Confusing relative path bind mounts (`-v ./data:/data`) with named volumes (`-v data:/data`). Named volumes do not start with a dot or slash."
  ],
  "prevention": [
    "Document host setup commands clearly to avoid missing volume initialization steps.",
    "Omit `external: true` tags when possible to let Docker Compose automatically create, mount, and manage volume lifecycles."
  ],
  "faq": [
    {
      "question": "Why does it say volume not found?",
      "answer": "The Docker daemon cannot find a named volume matching the name specified in your run command or compose configuration."
    },
    {
      "question": "How do I list existing volumes?",
      "answer": "Run 'docker volume ls' to view all local named volumes."
    },
    {
      "question": "What is an external volume in Docker Compose?",
      "answer": "An external volume is a volume created outside of the compose setup. Declaring 'external: true' tells Compose to expect and use the existing volume rather than creating a new one."
    },
    {
      "question": "How do I delete unused volumes?",
      "answer": "Run 'docker volume prune' to clean up all volumes that are not currently mapped to a container."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Volumes documentation",
      "url": "https://docs.docker.com/storage/volumes/"
    }
  ],
  "relatedErrors": [
    "network-not-found"
  ],
  "quickFix": {
    "causes": [
      "Named volume has not been created yet",
      "Compose expects pre-created external volume",
      "Typo in the volume name"
    ],
    "checklist": [
      "Run docker volume create <name>",
      "Check list using docker volume ls",
      "Remove external: true from compose",
      "Verify name spelling"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Named volume not created yet",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Compose external volume config mismatch",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in volume name",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Volume not found: Quick Fix Guide for Docker Developers",
  "seoDescription": "Volume not found in Docker — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
