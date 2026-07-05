import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failed-to-solve",
  "name": "Failed to solve",
  "category": "docker",
  "badges": [
    "Docker Build Error",
    "BuildKit Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The BuildKit compiler engine failed to compute the build steps (LLB definition) due to missing files, incorrect paths, or registry authorization errors.",
  "meanDescription": "This error is thrown by Docker's modern BuildKit compiler engine when it encounters a failure while executing the low-level build definition (LLB) steps. Common triggers include COPY or ADD instructions pointing to local files that do not exist inside the active build context, referencing private images without login credentials, or encountering DNS lookup blocks inside the BuildKit container.",
  "causes": [
    "Missing local files: Attempting to COPY a file or directory that is missing or excluded by .dockerignore.",
    "Registry authorization failure: Failing to authorize downloads for private base images defined in the FROM instruction.",
    "Syntax errors in multi-stage builds: Referencing incorrect stage aliases (e.g. COPY --from=builder-typo)."
  ],
  "solutions": [
    "Verify build context: Ensure the file exists in the folder context and is not excluded inside .dockerignore.",
    "Authenticate registry access: Run 'docker login' before starting the build to grant base image access.",
    "Check stage aliases spelling: Match multi-stage COPY labels with AS declarations (e.g. 'FROM alpine AS base')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "ERROR: failed to solve: failed to compute cache key: failed to calculate checksum of ref...",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Wrong: COPY non-existent file",
    "code": "FROM node:20-alpine\nWORKDIR /app\n# ERROR: If package.json is missing or ignored\nCOPY package.json ./\nRUN npm install",
    "language": "docker"
  },
  "exampleResponse": {
    "title": "Correct: Verify Context Files",
    "code": "FROM node:20-alpine\nWORKDIR /app\n# Ensure package.json exists in context directory\nCOPY package.json ./\nRUN npm install",
    "language": "docker"
  },
  "frameworkExamples": [
    {
      "name": "Checking .dockerignore",
      "language": "text",
      "description": "If a file is excluded inside .dockerignore, the COPY command will fail to locate it, triggering failed to solve.",
      "code": "# .dockerignore\nnode_modules\ndist\n# Fix: remove files that need to be copied into the container\n# src/secrets.json"
    },
    {
      "name": "Detailed BuildKit Logs",
      "language": "bash",
      "description": "Change build logs to plain text format to reveal the exact line of failure.",
      "code": "BUILDKIT_PROGRESS=plain docker build -t my-app ."
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Clearing local builder cache on Linux servers to resolve corrupted cache index paths.",
      "code": "docker builder prune -f\ndocker system prune --volumes -f"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Windows containers support disabling BuildKit if compatibility issues persist.",
      "code": "# Temporary disable BuildKit\n$env:DOCKER_BUILDKIT=0\ndocker build -t my-app ."
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Purging build cache inside macOS setups.",
      "code": "docker builder prune --all -f"
    }
  ],
  "commonMistakes": [
    "Using relative path dots (like `COPY ../parent-file.txt .`) that exit the active build context directory (Docker builds cannot access files outside the context root).",
    "Misspelling target image aliases inside multi-stage COPY operations."
  ],
  "prevention": [
    "Verify the build context root parameter (the `.` at the end of the `docker build` command) points to the correct directory.",
    "Verify private registry logins exist inside runner scripts in CI/CD build environments."
  ],
  "faq": [
    {
      "question": "What does failed to solve mean?",
      "answer": "It is a generic error thrown by BuildKit when it cannot resolve the execution graph (LLB) of your build, usually due to missing files or registry blocks."
    },
    {
      "question": "How do I get more build log details?",
      "answer": "Prepend the environment variable: 'BUILDKIT_PROGRESS=plain' to your build command (e.g., 'BUILDKIT_PROGRESS=plain docker build -t my-app .')."
    },
    {
      "question": "Why does my COPY fail even if the file exists?",
      "answer": "Check if the file or folder is listed inside your '.dockerignore' file. If excluded, BuildKit cannot see it."
    },
    {
      "question": "How do I disable BuildKit?",
      "answer": "You can disable BuildKit by setting the environment variable 'DOCKER_BUILDKIT=0', but it is recommended to keep it enabled and fix the build structure."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker BuildKit overview",
      "url": "https://docs.docker.com/build/buildkit/"
    },
    {
      "name": "Docker Ignore file reference",
      "url": "https://docs.docker.com/reference/dockerfile/#dockerignore"
    }
  ],
  "relatedErrors": [
    "dockerfile-parse-error"
  ],
  "quickFix": {
    "causes": [
      "File to copy is missing from context",
      "Target file is excluded inside .dockerignore",
      "Base image repository access requires login credentials"
    ],
    "checklist": [
      "Set BUILDKIT_PROGRESS=plain to debug logs",
      "Check .dockerignore exclusions list",
      "Verify file exists in build directory",
      "Run docker login if using private bases"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing COPY files or context mismatch",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Registry pull authorization blocks",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Multi-stage alias naming typos",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Failed to solve: Quick Fix Guide for Docker Developers",
  "seoDescription": "Complete guide to fixing Failed to solve in Docker. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
