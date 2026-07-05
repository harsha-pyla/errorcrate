import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "imagepullbackoff",
  "name": "ImagePullBackOff",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Image Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when Kubernetes cannot pull a container image from a registry, resulting in a back-off state.",
  "meanDescription": "An 'ImagePullBackOff' is a container lifecycle status indicating that Kubernetes attempted to pull a container image from a registry but failed. Rather than looping continuously, the Kubelet enters a back-off scheduling phase, doubling the retry delay up to 5 minutes. This is a follow-up status to 'ErrImagePull'. Common reasons include typo errors in the image name or tag, attempting to access private registries without imagePullSecrets, or exceeding registry download limits (like Docker Hub rate limits). In Kubernetes v1.36 environments, Container Runtime Interface (CRI) endpoints communicate these failures with rich status codes.",
  "causes": [
    "Spelling typo in image tag or name: Mismatch in image name string or version tag (e.g. referencing 'nginx:latst' instead of 'nginx:latest').",
    "Missing registry credentials: Running Pods referencing private registries (e.g. AWS ECR, GCP GAR, or Docker Hub private repos) without configuring 'imagePullSecrets' in the Pod specification.",
    "Registry rate limiting: Exceeding anonymous pull thresholds (e.g. Docker Hub's 100 pulls per 6 hours limit)."
  ],
  "solutions": [
    "Verify image name and tags: Check local docker images lists or query the remote registry to confirm the tag exists.",
    "Configure imagePullSecrets: Create a secret of type 'kubernetes.io/dockerconfigjson' containing credentials, and mount it in the Pod spec.",
    "Configure credential helpers or authenticated logins: Authenticate daemon processes to registry accounts to bypass anonymous rate limits."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS             RESTARTS   AGE\nweb-deploy   0/1     ImagePullBackOff   0          45s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Retrieve pods showing image status errors\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS             RESTARTS   AGE\nweb-deploy   0/1     ImagePullBackOff   0          45s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "imagePullSecrets Mount",
      "language": "yaml",
      "description": "Configure image pull credentials in Pod configurations referencing private registry servers.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: private-service-pod\nspec:\n  containers:\n  - name: secure-app\n    image: private-registry.io/org/secure-app:v1.0.0\n  # Reference the authentication secret\n  imagePullSecrets:\n  - name: registry-credentials-secret"
    },
    {
      "name": "Creating Docker Secret",
      "language": "bash",
      "description": "Generate registry credentials secret of type docker-registry dynamically.",
      "code": "# Create credentials secret for private registry access\nkubectl create secret docker-registry registry-credentials-secret \\\n  --docker-server=private-registry.io \\\n  --docker-username=developer-user \\\n  --docker-password=secret-access-token \\\n  --docker-email=dev@org.com"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Log directly into nodes and use CRI tools (crictl) to pull images outside of Kubelet loop.",
      "code": "# 1. Inspect local containerd runtime events\njournalctl -u containerd -n 50\n\n# 2. Test pulling using CRI command line\ncrictl pull private-registry.io/org/secure-app:v1.0.0"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Windows Container runtime image test checks.",
      "code": "# Verify image pulls under Windows container runtime\ndocker pull mcr.microsoft.com/windows/servercore:ltsc2022"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check Docker Desktop local cluster images cache.",
      "code": "docker images"
    }
  ],
  "commonMistakes": [
    "Assuming public images are immune to ImagePullBackOff (Docker Hub enforces strict rate limiting blocks on anonymous connections shareable across NAT gateways).",
    "Forgetting to match namespace scopes (Secrets must reside inside the same namespace as the referencing Pod to be accessible during pulls)."
  ],
  "prevention": [
    "Verify that the container image is built and successfully pushed to the registry before triggering cluster deployment pipelines.",
    "Adopt custom local container registries (like Harbor) to cache public hub images within cluster networks."
  ],
  "faq": [
    {
      "question": "What is the difference between ErrImagePull and ImagePullBackOff?",
      "answer": "ErrImagePull is the initial failure exception when trying to fetch the image. ImagePullBackOff is the subsequent state where Kubernetes backs off and waits before trying again to avoid flooding the registry server."
    },
    {
      "question": "How do I configure pull credentials in Kubernetes?",
      "answer": "First, create a secret: 'kubectl create secret docker-registry regcred --docker-server=<registry-url> --docker-username=<user> --docker-password=<pass>'. Then, reference it in your Pod template spec under 'imagePullSecrets: - name: regcred'."
    },
    {
      "question": "Why do I get this error for public images like Nginx?",
      "answer": "This is usually caused by Docker Hub's anonymous rate limits. If your cluster shares a NAT gateway IP with other nodes, the rate limit might be exhausted. Authenticating with Docker Hub resolves this."
    },
    {
      "question": "How do I inspect image pull details at the runtime level?",
      "answer": "In Kubernetes v1.36, you can log into the node and use the CRI CLI utility 'crictl pull <image>' to test pulling the image directly outside of Kubernetes."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Pull an Image from a Private Registry guide",
      "url": "https://kubernetes.io/docs/tasks/configure-pod-container/pull-image-private-registry/"
    }
  ],
  "relatedErrors": [
    "errimagepull"
  ],
  "quickFix": {
    "causes": [
      "Image name string typos or missing version tag on registry servers",
      "Missing imagePullSecrets mapping credentials for private repositories",
      "Exceeded anonymous pull limits on public libraries (Docker Hub limits)"
    ],
    "checklist": [
      "Confirm image name and tag spelling on registry portal",
      "Generate docker-registry secret credentials",
      "Map imagePullSecrets to target Pod specifications",
      "Verify node internet route to registry server"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Image name spelling typo or non-existent tag",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing private registry authentication (imagePullSecrets)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Exceeded public registry anonymous pull limits (rate limiting)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug ImagePullBackOff in Kubernetes — Step-by-Step Fix",
  "seoDescription": "Fix ImagePullBackOff fast. This Kubernetes debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
