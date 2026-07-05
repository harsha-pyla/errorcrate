import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "network-not-found",
  "name": "Network not found",
  "category": "docker",
  "badges": [
    "Docker Daemon Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The container engine failed to attach a container because the specified bridge, overlay, or custom network does not exist.",
  "meanDescription": "This error occurs when you attempt to run or compose a container with a designated network binding (e.g. --network=my-net or network entries in docker-compose.yml) but the network has not been created or was deleted. Docker containers communicate over virtual networks, and assigning a container to a non-existent network causes the startup configuration to fail.",
  "causes": [
    "Missing network creation: Trying to attach a container to a custom network before executing 'docker network create'.",
    "Docker Compose external network mismatch: Setting an external network key in your compose file when the network was not created beforehand on the host.",
    "Typo in network name: Spelling mistakes in the CLI command or compose file."
  ],
  "solutions": [
    "Create the missing network: Run 'docker network create <network_name>' manually.",
    "Verify active networks list: Execute 'docker network ls' to list all active network adapters on the host.",
    "Autocreate compose networks: Omit the 'external: true' key if you want Docker Compose to create the network automatically."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: network network-name not found",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker run --network=production-bridge nginx",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: Error response from daemon: network production-bridge not found.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Listing and Creating Networks",
      "language": "bash",
      "description": "List all active Docker networks and create a new bridge network.",
      "code": "# 1. List existing network adapters\ndocker network ls\n\n# 2. Create the missing custom network\ndocker network create production-bridge"
    },
    {
      "name": "Docker Compose External Networks",
      "language": "yaml",
      "description": "When marking networks as external, you must create them before running docker compose.",
      "code": "version: '3.8'\nservices:\n  web:\n    image: nginx:alpine\n    networks:\n      - shared-net\n\nnetworks:\n  shared-net:\n    external: true # Fix: run 'docker network create shared-net' first"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Debugging network bridge adapters on Linux hosts.",
      "code": "# Inspect system network interfaces\nip link show\n# Inspect docker network configuration details\ndocker network inspect bridge"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check host NAT switches on Windows virtualization environments.",
      "code": "# List internal NAT configurations\nGet-NetNat"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS utilizes host loopbacks inside virtual machine sandboxes.",
      "code": "# Clean up unused network allocations\ndocker network prune -f"
    }
  ],
  "commonMistakes": [
    "Declaring `external: true` inside docker-compose files without running the corresponding network creation command beforehand.",
    "Typoing network names during manual container attachment commands."
  ],
  "prevention": [
    "Write initialization shell scripts that check for and create required network adapters before booting application services.",
    "Keep networks local to individual docker-compose files to allow automated creation and teardown cycles."
  ],
  "faq": [
    {
      "question": "Why does it say network not found?",
      "answer": "The Docker daemon could not find a network adapter matching the name specified in your CLI command or compose configuration."
    },
    {
      "question": "How do I list existing networks?",
      "answer": "Run 'docker network ls' to view all local networks, driver types (bridge, host, none), and IDs."
    },
    {
      "question": "What is an external network in Docker Compose?",
      "answer": "An external network is a network that is created outside the scope of Docker Compose. Declaring 'external: true' tells Compose to use the existing network rather than creating a new one."
    },
    {
      "question": "How do I delete unused networks?",
      "answer": "Run 'docker network prune' to clean up all networks that are not currently referenced by at least one container."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Container Networks overview",
      "url": "https://docs.docker.com/network/"
    }
  ],
  "relatedErrors": [
    "port-is-already-allocated"
  ],
  "quickFix": {
    "causes": [
      "Custom network has not been created yet",
      "Compose expects pre-created external network",
      "Typo in the network name"
    ],
    "checklist": [
      "Run docker network create <name>",
      "Check list using docker network ls",
      "Remove external: true from compose",
      "Verify name spelling"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Custom network not created yet",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Compose external network config mismatch",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in network name",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Network not found in Docker (With Examples)",
  "seoDescription": "Learn how to fix Network not found in Docker. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
