import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "errimagepull",
  "name": "ErrImagePull",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Image Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error represents the initial registry communication or image download failure before Kubernetes transitions to a back-off status.",
  "meanDescription": "An 'ErrImagePull' is a transient container status indicating that the Kubelet runtime failed to download the requested container image from the registry. Unlike 'ImagePullBackOff', which is the subsequent state where the controller enters a sleep delay, 'ErrImagePull' is the direct, primary error indicating the pull failure itself. In Kubernetes v1.36, it communicates socket errors, TLS handshakes discrepancies, registry timeouts, or namespace resolution failures between the node and Docker Hub, AWS ECR, or private registries.",
  "causes": [
    "Network routing or DNS block: The worker node cannot resolve the registry domain name (e.g. DNS resolution timeout in private VPCs).",
    "TLS/SSL handshake validation failure: The registry uses a custom or self-signed certificate that the node's container runtime truststore does not validate.",
    "Incorrect registry domain path: Referencing wrong domain urls or namespaces in the image string."
  ],
  "solutions": [
    "Check Node internet connectivity: Run tests to verify the Node can resolve and reach the registry endpoint.",
    "Install registry root certificates on Nodes: Add self-signed CA certificates to the container runtime (containerd) trusted certs folder.",
    "Verify image endpoint URL: Confirm registry URLs are fully qualified (e.g. 'quay.io/username/app:tag')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS         RESTARTS   AGE\nweb-deploy   0/1     ErrImagePull   0          12s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Fetch pods status showing the initial pulling error\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS         RESTARTS   AGE\nweb-deploy   0/1     ErrImagePull   0          12s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Pulling by digest",
      "language": "yaml",
      "description": "Specify the exact SHA-256 digest of the image inside the pod spec to guarantee immutable pulls and prevent tag resolution errors.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: secure-digest-pod\nspec:\n  containers:\n  - name: web-app\n    # Reference the immutable SHA digest directly\n    image: nginx@sha256:2f1cd90e0082c0508e70a31622edc7a84093952ba5c3ecfb85dfc1d0cae7f4fb"
    },
    {
      "name": "Containerd Registry Config",
      "language": "toml",
      "description": "Configure containerd v2.0+ custom hosts registry paths inside node profiles to bypass certificate constraints on private domains.",
      "code": "# Path: /etc/containerd/certs.d/private-registry.io/hosts.toml\nserver = \"https://private-registry.io\"\n\n[host.\"https://private-registry.io\"]\n  capabilities = [\"pull\", \"resolve\"]\n  # Trust custom CA certificate file\n  ca = \"/etc/containerd/certs.d/private-registry.io/ca.crt\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify network resolution path to registry server directly from worker nodes.",
      "code": "# 1. Verify DNS resolutions\nnslookup registry-1.docker.io\n\n# 2. Test TLS handshake and certificate chain\nopenssl s_client -connect registry-1.docker.io:443 -showcerts"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify registry connection endpoints on Windows Server nodes.",
      "code": "# Test web request endpoint\nInvoke-WebRequest -Uri \"https://registry-1.docker.io/v2/\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Inspect local daemon events log queries.",
      "code": "kubectl get events --sort-by='.metadata.creationTimestamp'"
    }
  ],
  "commonMistakes": [
    "Omitting the registry domain for custom registries (e.g. writing `org/image` assuming it defaults to your private host; Kubernetes always defaults namespace-free lookups to Docker Hub).",
    "Running worker nodes inside air-gapped secure subnets without configuring NAT gateway routes to allow image pull connections."
  ],
  "prevention": [
    "Always declare fully qualified image addresses (`gcr.io/project/image:tag`) inside resource blueprints.",
    "Adopt internal cluster pull-through cache proxies (like Harbor or Nexus) inside private networks."
  ],
  "faq": [
    {
      "question": "What is the difference between ErrImagePull and ImagePullBackOff?",
      "answer": "ErrImagePull is the active error representing the actual failure to download the image. ImagePullBackOff is the state the pod enters after the pull fails, where Kubernetes waits before retrying."
    },
    {
      "question": "How do I solve self-signed certificate errors during pull?",
      "answer": "You must configure your container runtime (e.g. containerd) to trust the custom CA. For containerd in K8s v1.36, place the root certificate under '/etc/containerd/certs.d/<registry-domain>/ca.crt' on all worker nodes."
    },
    {
      "question": "Why does my private registry query time out?",
      "answer": "Check your cluster network policies and security groups. Worker nodes must have outbound internet access or explicit route paths to reach private registry VPC endpoints."
    },
    {
      "question": "Can I pull images by digest instead of tag to avoid mutable tag issues?",
      "answer": "Yes. Referencing the sha256 digest (e.g. 'nginx@sha256:2f1cd...') guarantees you pull the exact, immutable binary, bypassing tag resolver glitches."
    }
  ],
  "helpfulResources": [
    {
      "name": "Containerd Host Config Guide",
      "url": "https://github.com/containerd/containerd/blob/main/docs/hosts.md"
    }
  ],
  "relatedErrors": [
    "imagepullbackoff"
  ],
  "quickFix": {
    "causes": [
      "Worker nodes cannot resolve or route to registry servers domains",
      "Registry server TLS certs cannot be validated by containerd",
      "Missing namespace domain prefix on private repository image strings"
    ],
    "checklist": [
      "Test network resolution from node using nslookup",
      "Mount custom CA root certificate in /etc/containerd/certs.d/",
      "Specify fully qualified image tags: domain/org/repo:tag",
      "Check remote registry server availability status"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Domain DNS resolution timeout from worker nodes",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Registry TLS certificate validation failure (untrusted CAs)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Malformed image registry path URL (missing domain namespace)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix ErrImagePull in Kubernetes (With Examples)",
  "seoDescription": "Troubleshoot ErrImagePull in Kubernetes with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
