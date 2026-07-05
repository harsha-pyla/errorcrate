import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "liveness-probe-failed",
  "name": "Liveness probe failed",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Health Check",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a container's liveness health check fails, causing the Kubelet to terminate and restart the container.",
  "meanDescription": "A 'Liveness probe failed' error indicates that the container is running but has entered an unrecoverable deadlocked or frozen state. When a liveness probe fails, the Kubelet immediately restarts the container according to its restartPolicy. In Kubernetes v1.36, liveness probes can use HTTP, TCP, gRPC, or Exec commands. Misconfiguration (like placing liveness checks on slow startup code) can trigger infinite crash loops.",
  "causes": [
    "Application deadlock or freeze: The application stops responding to requests due to thread locks, memory leaks, or endless loops.",
    "Insufficient probe timeout limits: The container is heavily loaded and cannot return a health check within the configured 'timeoutSeconds'.",
    "Liveness check overlapping startup: The liveness probe begins firing before a heavy Java or Node process completes its cold-start initialization."
  ],
  "solutions": [
    "Inspect crash restarts reason: Run 'kubectl describe pod <pod-name>' and check 'Last State' exit codes and events logs.",
    "Enable startupProbe protectors: Use a separate 'startupProbe' to delay liveness checks until initialization finishes.",
    "Adjust timeout and threshold parameters: Increase 'timeoutSeconds' and 'failureThreshold' to tolerate transient heavy loads."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Events:\n  Type     Reason     Age                From               Message\n  ----     ------     ---                ----               -------\n  Warning  Unhealthy  10s (x3 over 30s)  kubelet            Liveness probe failed: HTTP probe failed with statuscode: 500\n  Normal   Killing    10s                kubelet            Container web-app failed liveness probe, will be restarted",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Inspect the Pod description logs to locate restart events\nkubectl describe pod web-app",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Events:\n  Type     Reason     Age                From               Message\n  ----     ------     ---                ----               -------\n  Warning  Unhealthy  10s (x3 over 30s)  kubelet            Liveness probe failed: HTTP probe failed with statuscode: 500\n  Normal   Killing    10s                kubelet            Container web-app failed liveness probe, will be restarted",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Liveness & Startup Shield",
      "language": "yaml",
      "description": "Establish startupProbes to protect slow-starting applications from premature liveness kills in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: heavy-java-pod\nspec:\n  containers:\n  - name: java-app\n    image: openjdk:17-slim\n    # 1. Startup probe permits up to 5 minutes bootstrap window\n    startupProbe:\n      httpGet:\n        path: /health/startup\n        port: 8080\n      failureThreshold: 30\n      periodSeconds: 10\n    # 2. Liveness check activates only after startupProbe succeeds\n    livenessProbe:\n      httpGet:\n        path: /health/live\n        port: 8080\n      periodSeconds: 15\n      timeoutSeconds: 3\n      failureThreshold: 2"
    },
    {
      "name": "Exec Probe Validation",
      "language": "yaml",
      "description": "Configure execution command checks to test internal application socket status.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: cache-pod\nspec:\n  containers:\n  - name: redis\n    image: redis:alpine\n    livenessProbe:\n      exec:\n        command:\n        - redis-cli\n        - ping\n      initialDelaySeconds: 5\n      periodSeconds: 10"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Query container termination details (such as exit code 137 or SIGKILL signal tags) from Pod specs.",
      "code": "# 1. Inspect container restart numbers\nkubectl get pods web-app -o jsonpath='{.status.containerStatuses[*].restartCount}'\n\n# 2. Get last termination state logs\nkubectl get pod web-app -o jsonpath='{.status.containerStatuses[*].lastState.terminated}'"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Test TCP health check routes response times on Windows hosts.",
      "code": "# Verify port listener speeds\nMeasure-Command { Test-NetConnection -ComputerName pod-ip -Port 8080 }"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Monitor events list details for killing operations.",
      "code": "kubectl get events --field-selector reason=Killing"
    }
  ],
  "commonMistakes": [
    "Setting `timeoutSeconds` equal to `periodSeconds`, causing probes to pile up if single checks block, triggering false-positive container restarts.",
    "Pointing liveness probes to the same heavy database-checking endpoint as readiness probes, crashing the container during brief network fluctuations."
  ],
  "prevention": [
    "Ensure liveness check code is highly optimized, resolving immediately without querying external DBs or APIs.",
    "Configure appropriate `terminationGracePeriodSeconds` to permit cleanup tasks before SIGKILL runs."
  ],
  "faq": [
    {
      "question": "What is a liveness probe?",
      "answer": "A liveness probe is a diagnostic check run by the Kubelet to determine if a container needs to be restarted. If it fails, Kubernetes kills the container and starts a new one."
    },
    {
      "question": "Why does my Pod keep restarting automatically?",
      "answer": "If your container crashes every few minutes, run 'kubectl describe pod' and check the 'Events' section. If you see 'Liveness probe failed', it means the check returned a non-200 code or timed out, prompting the Kubelet to kill the container."
    },
    {
      "question": "How do I prevent restarts during application startup?",
      "answer": "Do not use a high liveness probe frequency or low initial delay for startup. Instead, use a 'startupProbe' (native in v1.36) that keeps liveness checks disabled until the startup probe succeeds."
    },
    {
      "question": "What exit code does a liveness restart trigger?",
      "answer": "When the Kubelet kills a container due to liveness failures, it sends a SIGTERM, followed by a SIGKILL (Exit Code 137) if it doesn't shut down gracefully within the terminationGracePeriodSeconds."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Liveness Probe definition",
      "url": "https://kubernetes.io/docs/reference/kubernetes-api/workload-resources/pod-v1/#PodSpec"
    }
  ],
  "relatedErrors": [
    "readiness-probe-failed"
  ],
  "quickFix": {
    "causes": [
      "Application is frozen due to thread deadlocks or memory leaks",
      "Liveness check starts firing before the container finishes bootstrap",
      "Slow response response time exceeding timeoutSeconds limit parameters"
    ],
    "checklist": [
      "Verify container exit codes inside describe results",
      "Isolate container startup checks with a startupProbe",
      "Increase timeoutSeconds and failureThreshold settings",
      "Point liveness checks to cheap, shallow memory endpoints"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Thread deadlocks or application infinite loops (freezing)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Liveness checks firing during slow container startup",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Too low timeoutSeconds threshold during load spikes",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Liveness probe failed: Quick Fix Guide for Kubernetes.",
  "seoDescription": "Complete guide to fixing Liveness probe failed in Kubernetes. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
