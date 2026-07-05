import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "context-deadline-exceeded",
  "name": "Context deadline exceeded",
  "category": "kubernetes",
  "badges": [
    "Kubernetes API",
    "Timeout Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a client request (like kubectl commands or webhook calls) fails to complete within its allocated context timeout period.",
  "meanDescription": "A 'Context deadline exceeded' error is a Go-specific timeout exception raised when a context is cancelled because its deadline passed. In Kubernetes v1.36 clusters, this typically manifests when kubectl commands fail to receive replies from the API server, when the API server times out communicating with etcd databases, or when validating/mutating admission webhooks block request execution.",
  "causes": [
    "Admission webhook timeouts: A validating or mutating admission webhook fails to respond within its configured timeout limit (default is often 10 seconds).",
    "etcd storage backend latency: The API server times out waiting for etcd to read or write cluster state due to slow disk I/O or network latency.",
    "APIService or Custom Resource Definition (CRD) unavailability: An aggregated API server (like metrics-server) is offline or unreachable, blocking queries to its resources."
  ],
  "solutions": [
    "Verify webhook response status: Inspect admission webhook deployments logs or temporarily disable failing hooks ('failurePolicy: Ignore').",
    "Check etcd disk and network latency: Monitor etcd write durations metrics or optimize storage using high-speed SSDs.",
    "Check aggregated API registrations: Run 'kubectl get apiservice' and verify all registered custom endpoints return 'True' status."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error from server (InternalError): Internal error occurred: error resolving image: context deadline exceeded",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to create resource which invokes a slow webhook\nkubectl apply -f deployment.yaml",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Error from server (InternalError): Internal error occurred: error resolving image: context deadline exceeded",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Webhook FailurePolicy Bypass",
      "language": "yaml",
      "description": "Configure validating webhook configurations to fail open (Ignore) to prevent blocking resource creation during timeouts in Kubernetes v1.36.",
      "code": "apiVersion: admissionregistration.k8s.io/v1\nkind: ValidatingWebhookConfiguration\nmetadata:\n  name: policy-checker\nwebhooks:\n  - name: check.policy.io\n    rules:\n      - apiGroups: [\"\"]\n        apiVersions: [\"v1\"]\n        operations: [\"CREATE\", \"UPDATE\"]\n        resources: [\"pods\"]\n    # Configure to ignore failures if webhook times out\n    failurePolicy: Ignore\n    timeoutSeconds: 5\n    clientConfig:\n      service:\n        name: policy-service\n        namespace: default\n        path: \"/validate\""
    },
    {
      "name": "APIService Registration Check",
      "language": "bash",
      "description": "Verify aggregated APIServices health states to identify which service is blocking API server contexts.",
      "code": "# 1. List all APIServices\nkubectl get apiservice\n\n# 2. Check metrics service status (must return Available=True)\nkubectl describe apiservice v1beta1.metrics.k8s.io"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Review API server logs to track etcd write latencies and timeout events.",
      "code": "# 1. Read API server logs on control plane nodes\njournalctl -u kube-apiserver -n 50 --no-pager | grep -i \"deadline\"\n\n# 2. Query etcd write durations\ncurl -s http://localhost:2379/metrics | grep etcd_disk_wal_write_sec"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check network connection latency on Windows nodes.",
      "code": "# Verify latency response to API server host\nTest-Connection -ComputerName api-server-ip -Count 3"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Increase timeout parameters inline during kubectl queries.",
      "code": "kubectl get pods --request-timeout=\"30s\""
    }
  ],
  "commonMistakes": [
    "Running heavy validation webhooks that perform synchronous DNS checks or external API calls without timeout protections, blocking all cluster operations if the external system slows down.",
    "Neglecting to monitor etcd disk latency warnings in logs, leading to client connection dropouts."
  ],
  "prevention": [
    "Implement asynchronous patterns for admission webhooks, returning quickly and executing auditing out-of-band.",
    "Provision dedicated high-speed SSD storage classes (like gp3 on AWS with dedicated IOPS) for etcd nodes."
  ],
  "faq": [
    {
      "question": "What does 'context deadline exceeded' mean in Kubernetes?",
      "answer": "This is a Go language error indicating a timeout. A component (like kubectl or the API server) started an operation with a time limit, but the limit was reached before the operation finished."
    },
    {
      "question": "How do I fix webhook-related context deadline exceeded errors?",
      "answer": "Run 'kubectl get mutatingwebhookconfigurations,validatingwebhookconfigurations' to list webhooks. If a webhook is down or slow, it will block all resource creations. Check the webhook pod logs, or modify its config to 'failurePolicy: Ignore' to bypass it temporarily."
    },
    {
      "question": "Why does etcd cause this error?",
      "answer": "etcd is the single source of truth for Kubernetes. If etcd has slow disk I/O (common on cloud nodes with small IOPS limits), write requests will block. The API server waits, eventually hitting its context deadline and throwing this error."
    },
    {
      "question": "How do I troubleshoot metrics-server timeouts?",
      "answer": "If you see this error when running 'kubectl top nodes', the metrics API service is likely offline. Run 'kubectl get apiservice v1beta1.metrics.k8s.io' to check if the registration is active and healthy."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Dynamic Admission Control guide",
      "url": "https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"
    }
  ],
  "relatedErrors": [
    "unauthorized"
  ],
  "quickFix": {
    "causes": [
      "Validating/Mutating webhooks block requests longer than 10 seconds",
      "Slow disk I/O on etcd nodes causes transaction database timeouts",
      "Aggregated custom API registrations (like metrics-server) are offline"
    ],
    "checklist": [
      "Check apiservice status using kubectl get apiservice",
      "Temporarily set webhook failurePolicy: Ignore",
      "Increase kubectl client request-timeout flag value",
      "Verify etcd write metrics in control plane nodes"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Failing or slow validating/mutating admission webhooks",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "etcd storage database write latency (slow disk I/O)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Unreachable aggregated API services (e.g. metrics-server)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug Context deadline exceeded in Kubernetes —.",
  "seoDescription": "Getting Context deadline exceeded in Kubernetes? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code."
};

export default errorData;
