import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "connection-refused",
  "name": "Connection refused",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Network",
    "Connection Error",
    "Medium Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a Pod or network client fails to establish a TCP handshake because the target IP address is not listening on the specified port.",
  "meanDescription": "A 'Connection refused' error indicates that the network host was reached, but the target operating system kernel actively rejected the connection because no process was listening on the requested TCP port. In Kubernetes v1.36 clusters, this typically happens when microservices attempt to call peer Pods before they are fully initialized, when a Service has no matching backend Pods in the endpoints list, or when CoreDNS resolves service names to incorrect ClusterIPs.",
  "causes": [
    "Service has zero active endpoints: The Service exists, but all backend pods are either crash-looping or failing readiness checks, leaving the endpoints list empty.",
    "Target port mismatch: The Service 'targetPort' does not match the actual 'containerPort' exposed by the application inside the Pod.",
    "Local container process offline: The target container process crashed or has not finished starting up, leaving the socket closed."
  ],
  "solutions": [
    "Inspect Service endpoints list: Run 'kubectl get endpoints <service-name>' to confirm matching Pod IPs are active.",
    "Align port mappings: Verify that 'containerPort', 'targetPort', and 'port' match across Pod and Service templates.",
    "Implement retry logic in code: Add exponential back-off connection retries inside application code to tolerate startup delays."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "curl: (7) Failed to connect to api-service port 8080: Connection refused",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to query service endpoint using curl from client container\ncurl http://api-service:8080/users",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "curl: (7) Failed to connect to api-service port 8080: Connection refused\n$ echo $?\n7",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Port Alignment Template",
      "language": "yaml",
      "description": "Align Service ports configuration with container ports exposed in the Pod manifest to ensure traffic matches active socket listeners in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: Service\nmetadata:\n  name: api-service\nspec:\n  selector:\n    app: backend-worker\n  ports:\n  - protocol: TCP\n    port: 8080        # Port clients connect to outside the Pod\n    targetPort: 9000  # Must match containerPort\n---\napiVersion: v1\nkind: Pod\nmetadata:\n  name: api-pod\n  labels:\n    app: backend-worker\nspec:\n  containers:\n  - name: server-container\n    image: node-backend:latest\n    ports:\n    - containerPort: 9000 # App process listens on port 9000"
    },
    {
      "name": "Endpoints Inspection",
      "language": "bash",
      "description": "Query endpoints details using kubectl to verify ready backend targets.",
      "code": "# 1. Get endpoints mapping for the service\n$ kubectl get endpoints api-service\n\n# 2. If 'ENDPOINTS' is <none> or empty, check why pods fail readiness checks\n$ kubectl get pods -l app=backend-worker"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Exec into a container to list active port listeners using ss or netstat commands.",
      "code": "# 1. Connect to target container\nkubectl exec -it api-pod -- sh\n\n# 2. Check active TCP listeners\nss -tuln\n# Or: netstat -tuln"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Query active port listeners inside Windows nodes.",
      "code": "# Query active TCP listeners on Windows\nGet-NetTCPConnection -State Listen"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Run telnet checks directly against target pods.",
      "code": "kubectl run telnet-test --image=busybox --rm -it --restart=Never -- telnet pod-ip 9000"
    }
  ],
  "commonMistakes": [
    "Assuming a Service routes traffic correctly when selector labels are mismatched (the Service is created successfully but endpoints remain empty, returning connection refused to client calls).",
    "Sending traffic to the wrong Service port number when multiple ports are exposed."
  ],
  "prevention": [
    "Implement client-side retries with jitter in microservice codebases to tolerate transient container starts.",
    "Adopt automated helm templates validation schemas to lock ports alignment across resources."
  ],
  "faq": [
    {
      "question": "What causes 'Connection refused' in Kubernetes?",
      "answer": "This means the network package reached the target Pod or Service, but the target system rejected it because no process was listening on that port. Common reasons are missing Service endpoints or port mismatches."
    },
    {
      "question": "How do I troubleshoot 'Connection refused' between two microservices?",
      "answer": "First check the endpoints: 'kubectl get endpoints <service-name>'. If the list is empty, the target pods are either crashing or failing readiness probes. Fix the pods first."
    },
    {
      "question": "Why does my Service connection fail but pod-to-pod IP works?",
      "answer": "Check your port definitions. The Service spec defines 'port' (what clients connect to) and 'targetPort' (what the container listens on). If 'targetPort' doesn't match the 'containerPort' in the Pod spec, traffic gets routed to the wrong port, causing connection refused."
    },
    {
      "question": "How do I inspect active listeners inside a running container?",
      "answer": "Exec into the container and use a netstat tool: 'kubectl exec -it <pod-name> -- netstat -tuln'. This shows which ports the application is actively listening on."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Service documentation",
      "url": "https://kubernetes.io/docs/concepts/services-networking/service/"
    }
  ],
  "relatedErrors": [
    "readiness-probe-failed"
  ],
  "quickFix": {
    "causes": [
      "Service selector labels mismatch, causing endpoints list to be empty",
      "Service targetPort does not match containerPort inside Pod manifest",
      "The application process crashed or has not completed startup listener binds"
    ],
    "checklist": [
      "Check Service endpoints: kubectl get endpoints",
      "Align containerPort and targetPort specs",
      "Exec in pod to run ss -tuln listener checks",
      "Confirm target Pod status is Running"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Service endpoints list is empty (no ready backend Pods)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Port mismatch between Service targetPort and containerPort",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Target container daemon process is down or restarting",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Connection refused Fast — Kubernetes Solutions Guide",
  "seoDescription": "Connection refused in Kubernetes — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this."
};

export default errorData;
