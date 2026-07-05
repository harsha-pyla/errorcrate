import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "port-is-already-allocated",
  "name": "Port is already allocated",
  "category": "docker",
  "badges": [
    "Docker Daemon Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The host network port specified in the container binding is already being used by another process or container.",
  "meanDescription": "This error occurs when you attempt to start a container with a host port mapping (e.g. -p 8080:80) but the specified host port (8080) is already occupied by a running service on your host machine (like an Apache/Nginx server, a local database, another active container, or a zombie process that did not release the socket).",
  "causes": [
    "Another container using the port: An active or orphaned container has already mapped the host port.",
    "Host service using the port: A local server process running directly on the host machine is listening on the port (e.g. local PostgreSQL running on 5432).",
    "Zombie process lock: A terminated process failed to release its socket binding, leaving the port locked."
  ],
  "solutions": [
    "Map to a different host port: Modify the port mapping flag to use an available host port (e.g. change '-p 8080:80' to '-p 8081:80').",
    "Identify and terminate the blocking process: Use system network tools (like 'lsof' or 'netstat') to find the PID, and kill the process.",
    "Stop conflicting containers: Check running containers using 'docker ps' and stop the container that is using the target port."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: driver failed programming external connectivity on endpoint: Bind for 0.0.0.0:8080 failed: port is already allocated",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker run -p 80:80 nginx",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: Error response from daemon: driver failed programming external connectivity on endpoint web-server (xxx): Bind for 0.0.0.0:80 failed: port is already allocated.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Finding Port Users",
      "language": "bash",
      "description": "Locate which process or server is holding the socket path.",
      "code": "# Linux/macOS command to trace port 80\nsudo lsof -i :80\n# Outputs: PID 1234 (nginx)\n\n# Terminate the process holding the port\nsudo kill -9 1234"
    },
    {
      "name": "Docker Compose Dynamic Ports",
      "language": "yaml",
      "description": "Avoid hardcoded port conflicts in compose files by using environment variables with defaults.",
      "code": "version: '3.8'\nservices:\n  web:\n    image: nginx:alpine\n    ports:\n      # If APP_PORT is defined in .env, use it; otherwise fallback to 8080\n      - \"${APP_PORT:-8080}:80\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Find and kill socket processes using netstat or ss on Linux.",
      "code": "# Identify socket PID\nsudo ss -lptn 'sport = :8080'\n# Terminate process\nsudo kill -9 <PID>"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Locate and stop port-blocking processes inside Windows PowerShell.",
      "code": "# Find the process ID listening on port 8080\nGet-NetTCPConnection -LocalPort 8080 | Select-Object LocalPort, OwningProcess\n\n# Stop the process\nStop-Process -Id <PID> -Force"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS port lookup and diagnostics.",
      "code": "# Trace process utilizing port 8080\nsudo lsof -i tcp:8080\n# Kill process holding port\nkill -9 <PID>"
    }
  ],
  "commonMistakes": [
    "Starting a local developer database server (like postgres or mysql) directly on the host machine while simultaneously trying to launch a container mapping to the same default database port.",
    "Ignoring stopped containers that still hold proxy binding records."
  ],
  "prevention": [
    "Always run `docker compose down` instead of simply closing the terminal to ensure ports are fully released.",
    "Implement port isolation strategies using custom Docker networks instead of binding all containers directly to the host network."
  ],
  "faq": [
    {
      "question": "What does port is already allocated mean?",
      "answer": "It means the port you are trying to publish on your host machine is already in use by another application or container."
    },
    {
      "question": "How do I find what process is using a port?",
      "answer": "On Linux/macOS, use 'lsof -i :<port>'. On Windows, use 'netstat -ano | findstr :<port>' inside PowerShell."
    },
    {
      "question": "Can I share a port between two containers?",
      "answer": "No. Two containers cannot bind to the exact same port on the host machine. You can, however, map them to different host ports (e.g., -p 8080:80 and -p 8081:80)."
    },
    {
      "question": "Why do closed containers still block ports?",
      "answer": "If a container is stopped but not removed, some network adapters can fail to clear proxy rules. Run 'docker system prune' or restart the Docker service to clear these locks."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Container Ports documentation",
      "url": "https://docs.docker.com/engine/reference/run/#expose-incoming-ports"
    }
  ],
  "relatedErrors": [
    "network-not-found"
  ],
  "quickFix": {
    "causes": [
      "Host database or web server is currently active",
      "Another running container maps to the same port",
      "Zombie process did not release socket connection"
    ],
    "checklist": [
      "Change host mapping port (e.g. -p 8081:80)",
      "Find blocking PID using lsof/netstat",
      "Kill the conflicting process",
      "Stop existing container using docker stop"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Host service utilizing the port",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Another active docker container",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Zombie process socket lock",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug Port is already allocated in Docker — Step-by-Step Fix",
  "seoDescription": "Complete guide to fixing Port is already allocated in Docker. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
