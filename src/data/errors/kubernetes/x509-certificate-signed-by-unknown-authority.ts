import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "x509-certificate-signed-by-unknown-authority",
  "name": "x509 certificate signed by unknown authority",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Security",
    "TLS Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a client (like kubectl or container runtime) rejects a TLS connection because the server's certificate was signed by an untrusted Certificate Authority.",
  "meanDescription": "An 'x509: certificate signed by unknown authority' error is raised during TLS handshakes when a client cannot verify the identity of a target server. This happens because the root Certificate Authority (CA) certificate that signed the server's certificate is not present in the client's local trusted certificate store. In Kubernetes v1.36 clusters, this occurs when kubectl connects to an API server using self-signed certificates, when the Kubelet communicates with custom registries, or when workloads make TLS calls to webhook servers.",
  "causes": [
    "Self-signed API server certificates: The cluster uses a custom CA (standard in tool setups like kubeadm or minikube) and the client machine lacks the root CA file.",
    "Registry cert trust missing: Container runtimes (containerd) fail to pull images from private registries utilizing private TLS certs.",
    "Validating/Mutating webhook TLS mismatch: The API server rejects admission webhooks because the webhook server's certificate CA is not configured in the webhook's 'caBundle'."
  ],
  "solutions": [
    "Distribute Root CA certificate: Install the cluster root CA cert on client machines and add it to system trustroots (/etc/ssl/certs or keychain).",
    "Configure caBundle in webhooks: Ensure webhook configuration manifests declare the base64-encoded root CA cert in the 'caBundle' attribute.",
    "Utilize kubeconfig certificate-authority-data: Prepend connection credentials with CA strings directly inside Kubeconfig contexts."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Unable to connect to the server: x509: certificate signed by unknown authority (possibly because of \"crypto/rsa: verification error\" while trying to verify candidate authority \"kubernetes\")",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing API server from external client without CA mappings\nkubectl cluster-info",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Unable to connect to the server: x509: certificate signed by unknown authority (possibly because of \"crypto/rsa: verification error\" while trying to verify candidate authority \"kubernetes\")",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Webhook caBundle Inject",
      "language": "yaml",
      "description": "Inject the base64-encoded CA certificate inside validating webhook structures to verify webhook TLS certs in Kubernetes v1.36.",
      "code": "apiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingWebhookConfiguration\nmetadata:\n  name: validator-hook\nwebhooks:\n  - name: validate.example.com\n    # Inject base64 string of root CA cert here\n    caBundle: \"LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCg==...\"\n    clientConfig:\n      service:\n        name: validator-service\n        namespace: kube-system\n        path: \"/validate\"\n    admissionReviewVersions: [\"v1\"]\n    sideEffects: None"
    },
    {
      "name": "Kubeconfig CA Embedding",
      "language": "yaml",
      "description": "Embed base64 encoded cluster CA certificates inside the kubeconfig clusters configurations list.",
      "code": "apiVersion: v1\nkind: Config\nclusters:\n- name: custom-cluster\n  cluster:\n    server: https://192.168.1.100:6443\n    # Embed root CA cert base64 string to bypass unknown authority errors\n    certificate-authority-data: LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCg==..."
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Distribute and update trusted CA certificates stores on Debian/Ubuntu client nodes.",
      "code": "# 1. Copy CA cert to system anchor directory\nsudo cp cluster-ca.crt /usr/local/share/ca-certificates/cluster-ca.crt\n\n# 2. Re-index trusted certificates database\nsudo update-ca-certificates"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Import cluster CA certificates into Windows trusted root certificate store.",
      "code": "# Run as Administrator to import CA cert\nImport-Certificate -FilePath .\\cluster-ca.crt -CertStoreLocation Cert:\\LocalMachine\\Root"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Import and trust certificates in macOS system keychains.",
      "code": "# Import certificate and trust it for all users\nsudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain cluster-ca.crt"
    }
  ],
  "commonMistakes": [
    "Using `--insecure-skip-tls-verify` inside production CI/CD pipelines to bypass x509 exceptions, which disables transport layer encryption checks, exposing workloads to man-in-the-middle exploits.",
    "Injecting raw PEM certificates text strings inside YAML attributes where base64-encoded strings are strictly required."
  ],
  "prevention": [
    "Adopt automated certificate managers (like cert-manager) to manage and rotate trusted TLS certificates profiles.",
    "Verify container runtime configurations are synchronized with cluster custom CAs."
  ],
  "faq": [
    {
      "question": "What does 'x509: certificate signed by unknown authority' mean?",
      "answer": "This means a secure TLS connection failed because the client doesn't trust the CA that signed the server's certificate. You need to add the server's root CA certificate to your client's trusted certificate store."
    },
    {
      "question": "How do I fix this error for kubectl?",
      "answer": "Ensure your kubeconfig file has the 'certificate-authority-data' field populated with the base64-encoded root CA of the cluster. Alternatively, you can bypass validation temporarily using 'kubectl --insecure-skip-tls-verify', though this is highly discouraged for production."
    },
    {
      "question": "How do I configure this for admission webhooks?",
      "answer": "Admission webhooks must specify a 'caBundle' field in their configuration YAML containing the base64-encoded CA certificate that signed the webhook server's TLS certificate. If missing or incorrect, the API server rejects calls with this x509 error."
    },
    {
      "question": "How do I make containerd trust my private registry CA?",
      "answer": "Under containerd v2.0+ (standard in v1.36), place your registry CA file under '/etc/containerd/certs.d/<registry-domain>/ca.crt' on all cluster nodes, then restart the containerd service."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Cert-manager documentation",
      "url": "https://cert-manager.io/docs/"
    }
  ],
  "relatedErrors": [
    "kubectl-unable-to-connect-to-the-server"
  ],
  "quickFix": {
    "causes": [
      "Missing cluster root CA certificate in client's trusted root certs store",
      "Missing or mismatching caBundle parameters inside admission webhooks specs",
      "Containerd runtime lacks certificates mapping to trust private registries"
    ],
    "checklist": [
      "Inject base64 encoded CA string into kubeconfig contexts",
      "Insert caBundle base64 value inside validating webhooks configs",
      "Store private registry CA under /etc/containerd/certs.d/",
      "Run update-ca-certificates to update Linux client trustroots"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing Root CA cert in developer client machine trusted root store",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing or wrong caBundle in validating/mutating webhook configurations",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Container runtime (containerd) lacks private registry CA certificates",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug x509 certificate signed by unknown authority in.",
  "seoDescription": "Complete guide to fixing x509 certificate signed by unknown authority in Kubernetes. Includes root cause analysis, step-by-step solutions, framework-specific."
};

export default errorData;
