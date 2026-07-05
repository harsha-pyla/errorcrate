import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "pull-access-denied",
  "name": "Pull access denied",
  "category": "docker",
  "badges": [
    "Docker Registry Error",
    "Authentication Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The registry rejected the image download request because the repository is private, does not exist, or requires login credentials.",
  "meanDescription": "This error occurs when you attempt to pull a container image from a registry (like Docker Hub, GitHub Container Registry, or Amazon ECR) but the registry rejects the download. This typically happens because the image repository is private and you are not logged in, you misspelled the image name or tag, or your active authentication tokens have expired.",
  "causes": [
    "Missing registry authentication: Attempting to download private images without running 'docker login' first.",
    "Misspelled image repository or tag: Typo in the namespace, image name, or version tag.",
    "Expired session credentials: Local authentication tokens inside ~/.docker/config.json have expired."
  ],
  "solutions": [
    "Log in to the registry: Run 'docker login' (or specify the host, e.g. 'docker login ghcr.io') and enter your registry username and password or token.",
    "Verify image spelling: Verify the repository name and version tag on the registry dashboard.",
    "Refresh local auth config: Log out using 'docker logout' and run 'docker login' again to overwrite expired session tokens."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: pull access denied for repository, repository does not exist or may require 'docker login'",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker pull private-company/internal-api:v1.0",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Error response from daemon: pull access denied for private-company/internal-api, repository does not exist or may require 'docker login': denied: requested access to the resource is denied",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Custom Registry Login Examples",
      "language": "bash",
      "description": "How to authenticate against different container registries.",
      "code": "# Docker Hub\ndocker login\n\n# GitHub Container Registry (GHCR)\necho $GITHUB_TOKEN | docker login ghcr.io -u username --password-stdin\n\n# GitLab Container Registry\ndocker login registry.gitlab.com"
    },
    {
      "name": "Docker Compose Private Pulls",
      "language": "yaml",
      "description": "Docker compose files reference the credentials configured on the host machine. Ensure you run login first.",
      "code": "version: '3.8'\nservices:\n  web:\n    image: registry.gitlab.com/my-group/my-project/web:latest\n    # Note: Requires 'docker login registry.gitlab.com' on the host before running up"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Authenticating using standard CLI pass managers on Linux hosts.",
      "code": "docker login\n# Verify tokens written inside user home configs\ncat ~/.docker/config.json"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Authenticating Docker CLI using Windows Credential Manager integration.",
      "code": "docker login\n# Access tokens are securely mapped to Windows vault"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Authenticating Docker CLI utilizing macOS Keychain store.",
      "code": "docker login\n# Verify active login session\ndocker system info | grep Registry"
    }
  ],
  "commonMistakes": [
    "Assuming public images never throw this error (Docker Hub enforces anonymous rate limits, which can sometimes manifest as access blocks).",
    "Using your general password instead of Personal Access Tokens (PAT) when logging into GitHub (GHCR) or GitLab registries."
  ],
  "prevention": [
    "Utilize Personal Access Tokens (PAT) with read-only scopes inside CI/CD scripts for automated pulling.",
    "Verify tag formats before releasing build scripts."
  ],
  "faq": [
    {
      "question": "What does pull access denied mean?",
      "answer": "It means the registry server refused to let you download the image, either because it does not exist or because it is private and you don't have authorization."
    },
    {
      "question": "How do I log in to a custom registry?",
      "answer": "Specify the domain name after the command, for example: 'docker login ghcr.io' or 'docker login registry.gitlab.com'."
    },
    {
      "question": "Can I pull private images in Docker Compose?",
      "answer": "Yes, but the host machine running the compose command must be logged in to the target registry beforehand."
    },
    {
      "question": "Why do I get access denied on public images?",
      "answer": "This can happen if you exceed the anonymous pull rate limits on Docker Hub, causing the registry to temporarily reject requests."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Login Reference",
      "url": "https://docs.docker.com/engine/reference/commandline/login/"
    },
    {
      "name": "GHCR Authenticating Guide",
      "url": "https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry"
    }
  ],
  "relatedErrors": [
    "image-not-found",
    "manifest-unknown"
  ],
  "quickFix": {
    "causes": [
      "Not logged into target registry",
      "Typo in image namespace or tag",
      "Expired token in ~/.docker/config.json"
    ],
    "checklist": [
      "Run docker login <registry>",
      "Check spelling on registry hub UI",
      "Run docker logout first to clear cache",
      "Verify access tokens permissions"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Private repository lookup without login",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in image name/tag",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Expired authentication tokens",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Pull access denied in Docker — Causes & Solutions",
  "seoDescription": "Troubleshoot Pull access denied in Docker with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
