import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "readiness-probe-failed",
  "name": "Readiness probe failed",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Health Check",
    "Medium Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a container's readiness health check fails, preventing it from receiving network traffic from Services.",
  "meanDescription": "A 'Readiness probe failed' error indicates that the container is running but is not yet ready to accept incoming client connections. When a readiness probe fails, the Kubelet removes the Pod's IP address from the Endpoints list of all matching Services. In Kubernetes v1.36, readiness probes support HTTP, TCP, gRPC, and Exec action hooks, and failure events are registered within the Kubelet state logs.",
  "causes": [
    "Slow application startup: The container starts up slowly, and the readiness probe executes before the application service is fully initialized.",
    "Incorrect probe path or port: The probe configuration references a wrong HTTP path (e.g. '/health') or a wrong network port.",
    "Database or backend dependency offline: The application's health check endpoint tests downstream database connections that are temporarily unreachable."
  ],
  "solutions": [
    "Configure initialDelaySeconds: Increase the initial delay parameter to give the application enough time to bootstrap.",
    "Verify health check endpoint path: Test the endpoint path and port directly using curl or wget from within the cluster.",
    "Implement graceful startup probes: Add a separate 'startupProbe' to handle initial boot, leaving 'readinessProbe' to monitor runtime states."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Events:\n  Type     Reason     Age                From               Message\n  ----     ------     ---                ----               -------\n  Warning  Unhealthy  15s (x3 over 45s)  kubelet            Readiness probe failed: HTTP probe failed with statuscode: 503",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Inspect the Pod events log to verify probe failures\nkubectl describe pod web-app",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Events:\n  Type     Reason     Age                From               Message\n  ----     ------     ---                ----               -------\n  Warning  Unhealthy  15s (x3 over 45s)  kubelet            Readiness probe failed: HTTP probe failed with statuscode: 503",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "gRPC & Startup Probes",
      "language": "yaml",
      "description": "Configure native gRPC readiness checks in Kubernetes v1.36 and protect bootstrapping using a startupProbe.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: grpc-service-pod\nspec:\n  containers:\n  - name: grpc-app\n    image: grpc-server:v1.36.0\n    ports:\n    - containerPort: 50051\n    # 1. Startup probe shields app until boot finishes\n    startupProbe:\n      grpc:\n        port: 50051\n      failureThreshold: 30\n      periodSeconds: 10\n    # 2. Readiness probe runs only after startupProbe succeeds\n    readinessProbe:\n      grpc:\n        port: 50051\n      periodSeconds: 5"
    },
    {
      "name": "HTTP Probe Setup",
      "language": "yaml",
      "description": "Establish HTTP readiness configurations including path definitions and timeouts rules.",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: web-server\nspec:\n  replicas: 3\n  template:\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:latest\n        readinessProbe:\n          httpGet:\n            path: /healthz\n            port: 80\n          initialDelaySeconds: 5\n          periodSeconds: 10\n          timeoutSeconds: 2\n          failureThreshold: 3"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Query endpoint listings to see if the Pod IP is removed from Services list during readiness failures.",
      "code": "# 1. Inspect Service active endpoints\nkubectl get endpoints web-server-service\n\n# 2. Test the app port from inside a test cluster container\nkubectl run curl-test --image=curlimages/curl --rm -it -- restart=Never -- curl -I http://pod-ip:80/healthz"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Test TCP probe connections on Windows pods nodes namespaces.",
      "code": "# Check TCP port listener response\nTest-NetConnection -ComputerName pod-ip -Port 80"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Monitor warning event trends in real-time.",
      "code": "kubectl get events --watch --field-selector reason=Unhealthy"
    }
  ],
  "commonMistakes": [
    "Setting `timeoutSeconds` value lower than the average response latency of the downstream database checks, causing healthy containers to be marked unhealthy during query spikes.",
    "Using liveness probes configurations instead of readiness probes for slow-starting daemons, triggering infinite container restart loops."
  ],
  "prevention": [
    "Design light-weight health check endpoints (e.g. `/healthz`) that return quick HTTP 200 without executing expensive database writes.",
    "Adopt startup probes to handle slow cold-starts in large microservices architectures."
  ],
  "faq": [
    {
      "question": "What is a readiness probe?",
      "answer": "A readiness probe is a diagnostic check run by the Kubelet to determine if a container is ready to accept network traffic. If it fails, the Pod is removed from Kubernetes Service endpoints."
    },
    {
      "question": "How does a readiness probe differ from a liveness probe?",
      "answer": "If a readiness probe fails, Kubernetes stops sending traffic to the Pod but keeps it running. If a liveness probe fails, Kubernetes kills and restarts the container."
    },
    {
      "question": "How do I fix failures caused by slow startup?",
      "answer": "Increase the 'initialDelaySeconds' in your YAML, or configure a 'startupProbe' (available since v1.18 and recommended in v1.36) to shield the readiness probe until bootstrap completes."
    },
    {
      "question": "How do I write a gRPC readiness probe?",
      "answer": "In Kubernetes v1.36, gRPC probes are natively supported: 'grpc: port: 8080'. Ensure your gRPC server implements the standard gRPC Health Checking Protocol."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Configure Liveness, Readiness and Startup Probes guide",
      "url": "https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/"
    }
  ],
  "relatedErrors": [
    "liveness-probe-failed"
  ],
  "quickFix": {
    "causes": [
      "Container starts up too slowly and fails initial probe timings",
      "Wrong HTTP path, port value, or query schema in probe setup",
      "Downstream database connection timeouts during health check queries"
    ],
    "checklist": [
      "Verify HTTP status codes return 200",
      "Increase initialDelaySeconds parameter",
      "Isolate boot testing with a startupProbe",
      "Verify Service Endpoint maps: kubectl get endpoints"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Application startup is slower than probe initial delay",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Typo in HTTP health check path or container port",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Unreachable downstream database or external API dependencies",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Readiness probe failed Error: Root Causes & Verified Fixes",
  "seoDescription": "Resolve Readiness probe failed in Kubernetes with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
