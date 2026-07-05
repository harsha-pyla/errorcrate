import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "image-not-found",
  "name": "Image not found",
  "category": "docker",
  "badges": [
    "Docker Registry Error",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The registry could not locate the requested image repository or user namespace.",
  "meanDescription": "This error occurs when you attempt to pull or run an image that does not exist on the remote registry, or when the namespace/repository spelling is incorrect. In Docker registries, images are structured as 'namespace/repository:tag'. If the namespace or repository is missing, the engine cannot resolve the request and reports that the image was not found.",
  "causes": [
    "Mismatched image repository spelling: Typo in the name of the container repository.",
    "Incorrect namespace prefix: Omitting the user/organization namespace (e.g. pulling 'mysql' instead of 'library/mysql' when namespace targets are altered).",
    "Active registry resolution failure: Local DNS or network connection blocks the client from looking up registry repositories."
  ],
  "solutions": [
    "Verify repository name spelling: Match casing and spelling precisely with the hub repository.",
    "Include full namespace path: Verify if the image name requires organization path prefixes.",
    "Search the registry: Run 'docker search <query>' to locate valid repository names."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error response from daemon: repository image-name not found: does not exist or no pull access",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker pull company-internal-db:latest",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Error response from daemon: repository company-internal-db not found: does not exist or no pull access",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Searching Registries",
      "language": "bash",
      "description": "Locate public image names using the search command.",
      "code": "$ docker search postgres\n\n# Outputs list of matching public repositories, stars, and official ratings"
    },
    {
      "name": "Docker Compose Configuration",
      "language": "yaml",
      "description": "Ensure the image tag format inside docker-compose.yml contains correct namespace prefixes.",
      "code": "version: '3.8'\nservices:\n  redis:\n    image: library/redis:7.0-alpine # Explicitly uses library namespace"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Standard CLI lookup commands on Linux machines.",
      "code": "docker search node\ndocker pull node:20"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Reviewing DNS resolution paths inside Windows PowerShell client.",
      "code": "# Test DNS resolution to Docker Hub\nResolve-DnsName registry-1.docker.io"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Resolving registry lookup issues on macOS configurations.",
      "code": "# Flush macOS DNS cache if registry resolves incorrectly\nsudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder"
    }
  ],
  "commonMistakes": [
    "Forgetting that private repositories will return 'image not found' instead of 'access denied' to hide their existence from unauthorized users.",
    "Omitting the namespace segment for custom repositories (e.g. pulling `my-app` instead of `my-org/my-app`)."
  ],
  "prevention": [
    "Maintain documented image paths inside README setup scripts.",
    "Use pinned image digests (`image: tag@sha256:xxxx`) inside production files to guarantee resolutions."
  ],
  "faq": [
    {
      "question": "Why does it say image not found?",
      "answer": "The registry could not resolve the repository path name you requested. Check for typos or missing namespace tags."
    },
    {
      "question": "How do I find public images?",
      "answer": "You can search directly using the CLI command 'docker search <image_name>' or browse Docker Hub."
    },
    {
      "question": "Can this happen due to private repository settings?",
      "answer": "Yes. If a repository is private, the registry responds with a generic 'image not found' or 'pull access denied' to protect repository privacy."
    },
    {
      "question": "How do I specify a tag?",
      "answer": "Append a colon and the tag version to the repository name, like 'ubuntu:22.04'. If omitted, Docker defaults to ':latest'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Search Command docs",
      "url": "https://docs.docker.com/engine/reference/commandline/search/"
    },
    {
      "name": "Docker Hub Registry interface",
      "url": "https://hub.docker.com/"
    }
  ],
  "relatedErrors": [
    "pull-access-denied",
    "manifest-unknown"
  ],
  "quickFix": {
    "causes": [
      "Repository name spelling typo",
      "Missing namespace prefix path",
      "Private repository accessed without login"
    ],
    "checklist": [
      "Check spelling on registry search",
      "Include org/username namespace",
      "Verify docker login state",
      "Check DNS resolution state"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Spelling typo in repository name",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing namespace prefix",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Registry DNS lookup block",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Image not found — Docker Debugging Guide",
  "seoDescription": "Troubleshoot Image not found in Docker with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
