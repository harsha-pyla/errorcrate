import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "manifest-unknown",
  "name": "Manifest unknown",
  "category": "docker",
  "badges": [
    "Docker Registry Error",
    "Image Tag Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The registry could not find the manifest matching the requested image name or version tag.",
  "meanDescription": "This error occurs when the registry finds the image repository you requested, but cannot locate the specific manifest associated with the tag you provided. In Docker, a manifest is a JSON file that defines the image layers, configuration, and architecture support. If you try to pull a tag that was never built or pushed, the registry throws this error.",
  "causes": [
    "Non-existent version tag: Referencing a tag that does not exist in the repository (e.g. pulling a typo version tag).",
    "Platform/Architecture mismatch: The requested tag does not support the host CPU architecture (e.g. pulling arm64 only tags on amd64 machine).",
    "Incomplete multi-arch push: The manifest list was partially uploaded during build stages, resulting in missing index references."
  ],
  "solutions": [
    "Verify version tags: Look up the valid tags on the registry dashboard (like Docker Hub or GHCR).",
    "Pull explicit architectures: Specify platform flags during pulls (e.g. '--platform linux/amd64').",
    "Rebuild and push multi-arch: Execute 'docker buildx build --platform' to rebuild the missing architecture layers."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: manifest for repository:tag not found: manifest unknown",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker pull node:invalid-version-tag",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Error response from daemon: manifest for node:invalid-version-tag not found: manifest unknown: manifest unknown",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Manifest Details",
      "language": "bash",
      "description": "Inspect the manifest structure from the remote registry to verify supported host platforms.",
      "code": "$ docker manifest inspect node:20-alpine\n\n# Outputs JSON list of platform architectures (amd64, arm64, 386 etc.)"
    },
    {
      "name": "Docker Compose Platform Spec",
      "language": "yaml",
      "description": "Expliciting lock image platform architectures inside compose service configurations.",
      "code": "version: '3.8'\nservices:\n  db:\n    image: mysql:8.0\n    platform: linux/amd64 # Forces amd64 execution target on arm64 host machines"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Forcing platform specifications on Linux hosts.",
      "code": "docker pull --platform linux/amd64 alpine:3.18"
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Windows containers support platform switches under hyper-v isolation settings.",
      "code": "docker pull --platform windows/amd64 mcr.microsoft.com/windows/nanoserver:ltsc2022"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Apple Silicon (M1/M2/M3) chips require platform targets when translation layers are unavailable.",
      "code": "docker pull --platform linux/arm64 python:3.11-slim"
    }
  ],
  "commonMistakes": [
    "Assuming the 'latest' tag always exists (Docker does not automatically generate a 'latest' tag; it must be pushed manually).",
    "Pulling ARM-only images on x86 servers without enabling QEMU emulation."
  ],
  "prevention": [
    "Always check your registry dashboards to confirm that target tags have been successfully uploaded.",
    "Utilize Docker Buildx to build and push multi-architecture manifest lists in one run."
  ],
  "faq": [
    {
      "question": "What is an image manifest?",
      "answer": "A manifest is a JSON metadata file describing the layers, size, platform, and architecture bindings of a container image."
    },
    {
      "question": "Why does 'latest' throw manifest unknown?",
      "answer": "Because the repository owner did not push a tag explicitly named 'latest'. Docker does not automatically generate a 'latest' tag; it must be pushed manually."
    },
    {
      "question": "How do I inspect available tags?",
      "answer": "You can use the registry HTTP API, or inspect the registry repository dashboard."
    },
    {
      "question": "How do I check local architectures?",
      "answer": "Run 'docker info' or inspect client configurations to check CPU architecture configurations."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Manifest Command Docs",
      "url": "https://docs.docker.com/engine/reference/commandline/manifest/"
    },
    {
      "name": "Multi-platform images build guide",
      "url": "https://docs.docker.com/build/building/multi-platform/"
    }
  ],
  "relatedErrors": [
    "image-not-found",
    "pull-access-denied"
  ],
  "quickFix": {
    "causes": [
      "Typo in requested image tag version",
      "The tag lacks an image for your CPU architecture",
      "Latest tag was never pushed to the registry"
    ],
    "checklist": [
      "Check tag spelling on registry GUI",
      "Specify pull architecture platform",
      "Inspect manifest list using docker manifest",
      "Push an explicit tag version"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Non-existent version tag spelling",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Unsupported host CPU architecture",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Broken multi-arch manifest list",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Manifest unknown Explained: Causes, Fixes & Prevention",
  "seoDescription": "Manifest unknown in Docker — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
