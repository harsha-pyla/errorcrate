import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "sudo-command-not-found",
  "name": "sudo: command not found",
  "category": "linux",
  "badges": [
    "Linux System",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the 'sudo' utility is not installed in the operating system environment, commonly inside lightweight Docker containers.",
  "meanDescription": "The 'sudo: command not found' error indicates that the shell could not locate the 'sudo' (superuser do) utility binary. Sudo is not built into the Linux kernel or standard shell; it is an external security package. While standard Linux server installations include it by default, minimal or lightweight environments (such as official Docker container base images like Ubuntu, Debian, or Alpine) omit sudo entirely to reduce package footprint size, expecting users to run commands directly as root or install packages using the base root user.",
  "causes": [
    "Docker minimal container base: Lightweight Docker images (e.g. debian:slim or ubuntu:latest) do not install sudo by default.",
    "Minimal system installation: Installing a barebones, minimal Linux server distribution that leaves out administrative utility tools.",
    "Missing path entry for /usr/bin/sudo: The binary exists, but /usr/bin/ is missing from the active user's $PATH."
  ],
  "solutions": [
    "Install sudo: Use the root shell to install the sudo package using apt or yum (e.g. 'apt-get update && apt-get install -y sudo').",
    "Execute directly as root: Avoid using sudo in containers where your shell is already active as root (UID 0).",
    "Check PATH environment: Ensure /usr/bin or /usr/sbin directories are included in the user's active PATH variable."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "bash: sudo: command not found",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to run sudo inside a minimal Docker container\nsudo apt-get update",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "bash: sudo: command not found\n$ echo $?\n127",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Dockerfile Sudo Installation",
      "language": "docker",
      "description": "If you require sudo for non-root users inside a container, install it during the build phase before dropping root privileges.",
      "code": "FROM ubuntu:22.04\n\n# 1. Install sudo as root\nRUN apt-get update && apt-get install -y sudo && rm -rf /var/lib/apt/lists/*\n\n# 2. Create non-root user and grant sudo privileges\nRUN useradd -m developer && echo \"developer ALL=(ALL) NOPASSWD:ALL\" >> /etc/sudoers\n\nUSER developer\nWORKDIR /home/developer"
    },
    {
      "name": "Bypassing Sudo in Containers",
      "language": "bash",
      "description": "If you are already running as root, omit sudo from your commands.",
      "code": "# Wrong: throws error if sudo is missing\nroot@container:/# sudo apt-get install curl\n\n# Correct: run command directly\nroot@container:/# apt-get install curl"
    }
  ],
  "serverExamples": [
    {
      "name": "Debian / Ubuntu containers",
      "language": "bash",
      "description": "Install the sudo utility using apt package tools.",
      "code": "apt-get update && apt-get install -y sudo"
    },
    {
      "name": "RHEL / CentOS containers",
      "language": "bash",
      "description": "Install the sudo utility using yum tools.",
      "code": "yum install -y sudo"
    },
    {
      "name": "Alpine containers",
      "language": "bash",
      "description": "Install the sudo utility utilizing apk manager.",
      "code": "apk add --no-cache sudo"
    }
  ],
  "commonMistakes": [
    "Using sudo inside Dockerfiles (instructions like `RUN sudo apt-get install` will fail because sudo isn't installed and the build process already runs as root).",
    "Switching to a non-root user inside a container without adding them to the `/etc/sudoers` file first, which blocks privilege escalation."
  ],
  "prevention": [
    "Verify active shell privileges (run `whoami` or check if the prompt shows root `#` or standard user `$`).",
    "Avoid sudo usage inside automated CI/CD runners (GitHub Actions, GitLab CI) which run commands directly under service accounts."
  ],
  "faq": [
    {
      "question": "Why does my container lack sudo?",
      "answer": "Containers are designed to be as small as possible. Since container tasks usually run directly as root or are configured by the Docker host, the sudo utility is considered redundant and is excluded."
    },
    {
      "question": "How do I install sudo inside a Dockerfile?",
      "answer": "Add 'RUN apt-get update && apt-get install -y sudo' in your Dockerfile before switching to a non-root user."
    },
    {
      "question": "Can I just run commands without sudo inside a container?",
      "answer": "Yes. If the prompt ends with '#', you are logged in as root. Running sudo is unnecessary and will throw this error if the utility isn't installed."
    },
    {
      "question": "How do I grant a non-root user sudo rights after installing?",
      "answer": "Add the user to the sudo group: 'usermod -aG sudo <username>' or append permission lines inside the /etc/sudoers file."
    }
  ],
  "helpfulResources": [
    {
      "name": "Sudo Project Homepage",
      "url": "https://www.sudo.ws/"
    }
  ],
  "relatedErrors": [
    "command-not-found"
  ],
  "quickFix": {
    "causes": [
      "Running in a minimal Docker base image lacking sudo",
      "Minimal system installations of Linux distributions",
      "/usr/bin/ or /usr/sbin/ missing from active $PATH"
    ],
    "checklist": [
      "Check if already running as root (whoami)",
      "Omit sudo prefix inside Docker container environments",
      "Install using apt-get/yum/apk as root",
      "Add user privileges inside /etc/sudoers"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Minimal Docker container environment (UID 0 active)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Minimal Linux server OS installation",
      "frequency": "⭐⭐⭐"
    },
    {
      "cause": "PATH variable missing system binaries folders",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve sudo: command not found — Linux Debugging Guide",
  "seoDescription": "Resolve sudo: command not found in Linux with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
