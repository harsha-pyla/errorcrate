import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "cannot-connect-to-the-docker-daemon",
  "name": "Cannot connect to the Docker daemon",
  "category": "docker",
  "badges": [
    "Docker Engine Error",
    "Common Error",
    "Linux • Windows • macOS"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "Docker cannot communicate with the Docker daemon because the daemon is stopped, inaccessible, or the current user lacks permission.",
  "meanDescription": "The Docker daemon (dockerd) is the background service running on your host machine that manages all your Docker containers, images, networks, and volumes. When you run a command like 'docker ps' or 'docker run', the Docker client CLI sends a request to the daemon via a Unix socket (on Linux/macOS) or a named pipe (on Windows). If the daemon is stopped, crashed, or permissions to its interface socket are restricted, the client will fail to connect and display this error.",
  "causes": [
    "Docker not running: The background service has not been started.",
    "Permission denied: The current terminal user is not part of the 'docker' user group.",
    "Wrong Docker context: The active Docker context points to a remote endpoint that is unreachable.",
    "Docker Desktop stopped: The GUI application is closed or not fully initialized on Windows or macOS.",
    "WSL integration issue: Windows Subsystem for Linux integration has been disabled inside Docker settings.",
    "Daemon crashed: The Docker daemon process encountered a fatal error and terminated."
  ],
  "solutions": [
    "Start Docker: Run 'sudo systemctl start docker' (on systemd Linux distros) to boot the daemon.",
    "Restart service: Run 'sudo systemctl restart docker' to reset crashed daemon processes.",
    "Check status: Run 'systemctl status docker' to inspect daemon load details.",
    "Configure User permissions: Add your user to the docker group via 'sudo usermod -aG docker $USER' to run without sudo.",
    "Restart Docker Desktop: Reboot the GUI app on Windows/macOS to reset virtualization states."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker ps",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Docker Compose",
      "language": "bash",
      "description": "Compose commands also fail if the connection socket is closed.",
      "code": "$ docker compose up -d\n\nCannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?"
    },
    {
      "name": "Verify Connection Status",
      "language": "bash",
      "description": "Verify connection stability after launching daemon using status checks.",
      "code": "# 1. Check version details\ndocker version\n\n# 2. Check daemon system specs\ndocker info\n\n# 3. List active container IDs\ndocker ps"
    },
    {
      "name": "Example hello-world Run",
      "language": "bash",
      "description": "Output when running the lightweight test container after launching daemon.",
      "code": "$ docker run hello-world\n\nHello from Docker!\nThis message shows that your installation appears to be working correctly."
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Standard systemd commands to manage Docker daemon services on Ubuntu/Debian/CentOS.",
      "code": "# Start Daemon\nsudo systemctl start docker\n\n# Enable on startup boot\nsudo systemctl enable docker\n\n# Restart Daemon\nsudo systemctl restart docker"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Restarting Docker Service inside PowerShell run as administrator.",
      "code": "# Check Docker service status\nGet-Service *docker*\n\n# Start Docker service\nStart-Service *docker*\n\n# Check WSL VM connection integration\nwsl --list --running"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Managing daemon connection on macOS clients using Docker Desktop.",
      "code": "# Start Docker Desktop application\nopen --background -a Docker\n\n# Check active client context\ndocker context ls"
    }
  ],
  "commonMistakes": [
    "Assuming installing the Docker CLI package automatically starts the backend daemon engine.",
    "Using multiple terminal profiles with mismatched environmental variables pointing to incorrect socket files."
  ],
  "prevention": [
    "Configure Docker to launch automatically on host boot cycles.",
    "Keep Docker Desktop application packages updated to minimize virtualization compatibility failures.",
    "Avoid running Docker commands exclusively using 'sudo' permissions as it can mess up localized cache folders."
  ],
  "faq": [
    {
      "question": "Why can't Docker connect?",
      "answer": "The client cannot communicate with the socket at /var/run/docker.sock, usually because the dockerd daemon process is stopped or permissions are restricted."
    },
    {
      "question": "Is Docker running?",
      "answer": "You can check if Docker is running by executing 'docker info' or checking service status via systemctl status docker."
    },
    {
      "question": "How do I restart Docker?",
      "answer": "On Linux, use 'sudo systemctl restart docker'. On Windows/macOS, restart Docker Desktop via the system tray icon."
    },
    {
      "question": "How do I check Docker daemon?",
      "answer": "Review system logs using 'journalctl -u docker' or check the service state directly."
    },
    {
      "question": "Why is docker.sock permission denied?",
      "answer": "By default, the Unix socket belongs to root. To connect without sudo, add your user to the 'docker' group."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Engine reference docs",
      "url": "https://docs.docker.com/engine/reference/commandline/dockerd/"
    },
    {
      "name": "Docker Desktop user guide",
      "url": "https://docs.docker.com/desktop/"
    },
    {
      "name": "GitHub issues discussions",
      "url": "https://github.com/docker/for-linux/issues"
    }
  ],
  "relatedErrors": [
    "permission-denied",
    "oci-runtime-create-failed",
    "container-exited-with-code-137",
    "port-already-allocated",
    "network-not-found"
  ],
  "quickFix": {
    "causes": [
      "Docker service is stopped",
      "Missing group user privileges on Unix socket",
      "Active Docker context pointing to wrong host"
    ],
    "checklist": [
      "Start Docker service / desktop",
      "Add user to docker group",
      "Verify docker.sock path exists",
      "Check docker context ls"
    ],
    "estimatedTime": "30 seconds"
  },
  "causesTable": [
    {
      "cause": "Docker not running",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Permission denied",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Wrong Docker context",
      "frequency": "⭐⭐⭐"
    },
    {
      "cause": "Docker Desktop stopped",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "WSL issue",
      "frequency": "⭐⭐"
    },
    {
      "cause": "Daemon crashed",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Cannot connect to the Docker daemon — Docker.",
  "seoDescription": "Encountering Cannot connect to the Docker daemon in Docker? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it."
};

export default errorData;
