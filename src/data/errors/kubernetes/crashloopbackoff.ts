import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "crashloopbackoff",
  "name": "CrashLoopBackOff",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Scheduling Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a container in a Pod repeatedly starts, crashes, and restarts in an increasing back-off loop.",
  "meanDescription": "A 'CrashLoopBackOff' is a common Kubernetes pod state indicating that a container cannot start or run successfully, leading the kubelet to restart it repeatedly with an exponential delay (back-off). The delay starts at 10 seconds and doubles at each retry up to a maximum of 5 minutes. This state is not the crash itself; rather, it is Kubernetes' mechanism to protect cluster resources from being overwhelmed by a failing container.",
  "causes": [
    "Application code failure: The primary container process crashes or throws uncaught exceptions during startup.",
    "Missing configuration or environment files: The application relies on variables, config maps, or secrets that have not been populated.",
    "Misconfigured container commands or ports: The Docker entrypoint command fails, exits immediately, or attempts to bind to blocked ports."
  ],
  "solutions": [
    "Inspect container logs: Run 'kubectl logs <pod-name>' (with '--previous' if the pod already restarted) to see application-level errors.",
    "Check pod description events: Run 'kubectl describe pod <pod-name>' to inspect the exit code and Kubelet events.",
    "Ensure resources and environment are ready: Verify that all referenced ConfigMaps, Secrets, and persistent volumes are correctly created."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS             RESTARTS      AGE\nweb-deploy   0/1     CrashLoopBackOff   4 (35s ago)   2m15s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Retrieve pods in namespace showing status column\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS             RESTARTS      AGE\nweb-deploy   0/1     CrashLoopBackOff   4 (35s ago)   2m15s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Kube Diagnostic Pipeline",
      "language": "bash",
      "description": "Execute diagnostic steps to locate the exact trigger of the CrashLoopBackOff.",
      "code": "# 1. Inspect the Pod status and find restarting containers\nkubectl get pods\n\n# 2. View details, looking for Exit Code and Last State events\nkubectl describe pod web-deploy\n\n# 3. Pull logs from the container that crashed just before the restart\nkubectl logs web-deploy --previous"
    },
    {
      "name": "Correcting Short-lived Entrypoints",
      "language": "yaml",
      "description": "If a container is meant to keep running but exits immediately (exiting with code 0), ensure your command starts a persistent foreground process or daemon.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: utility-pod\nspec:\n  containers:\n  - name: alpine-service\n    image: alpine:latest\n    # Wrong: exits immediately, triggering CrashLoopBackOff\n    # command: [\"echo\", \"Done\"]\n    \n    # Correct: starts a persistent foreground command\n    command: [\"sh\", \"-c\", \"while true; do sleep 3600; done\"]"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Retrieve exit code statistics from Pod status attributes using jsonpath selectors.",
      "code": "kubectl get pod web-deploy -o jsonpath='{.status.containerStatuses[*].lastState.terminated.exitCode}'"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Query Windows host namespace containers logs in hybrid Kubernetes clusters.",
      "code": "# View events filters on Windows Node pods\nkubectl get events --field-selector involvedObject.name=web-deploy-win"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check local Docker Desktop Kubernetes logs.",
      "code": "kubectl logs -l app=web-deploy --all-containers=true"
    }
  ],
  "commonMistakes": [
    "Attempting to read active container logs (`kubectl logs pod-name`) instead of historical logs (`kubectl logs pod-name --previous`), showing blank screens if the container is currently in the back-off pause loop.",
    "Forgetting that exit code 137 indicates the container was forcefully terminated by the OS Out-Of-Memory killer (OOMKilled)."
  ],
  "prevention": [
    "Run Docker containers locally to verify they run in the foreground without crashing before pushing images to registry libraries.",
    "Utilize liveness and readiness probe delays to prevent premature container terminations during slow application startups."
  ],
  "faq": [
    {
      "question": "What is CrashLoopBackOff?",
      "answer": "It means a container in a Pod is crashing repeatedly, and Kubernetes is waiting an increasing amount of time before trying to restart it again to avoid overloading the system."
    },
    {
      "question": "How do I view logs for a crashed container?",
      "answer": "If the container has already restarted, run 'kubectl logs <pod-name> --previous'. This shows the logs of the container instance that just crashed, rather than the currently restarting one."
    },
    {
      "question": "What do the exit codes mean in a CrashLoopBackOff?",
      "answer": "Common exit codes in 'kubectl describe pod' are: Exit Code 1 (Application crash/general error), Exit Code 137 (OOMKilled - container exceeded memory limits), and Exit Code 0 (Container completed its task and exited because it wasn't a long-running service)."
    },
    {
      "question": "Why does my container exit with Exit Code 0?",
      "answer": "If a container is not configured to run as a long-running daemon (like a web server or worker), it runs its script, exits successfully, and Kubernetes restarts it thinking it should keep running. Ensure your entrypoint starts a persistent process."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Pod Lifecycle documentation",
      "url": "https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/"
    }
  ],
  "relatedErrors": [
    "oomkilled"
  ],
  "quickFix": {
    "causes": [
      "Application process crashes during initialization",
      "Missing ConfigMaps, Secrets, or configuration environment parameters",
      "Docker entrypoint script finishes and exits immediately"
    ],
    "checklist": [
      "Fetch previous logs: kubectl logs --previous",
      "Read status details: kubectl describe pod",
      "Ensure environment secrets and volumes exist",
      "Verify container CMD runs persistently in the foreground"
    ],
    "estimatedTime": "5 minutes"
  },
  "causesTable": [
    {
      "cause": "Application process crashes (exit code 1 or unhandled exceptions)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing referenced ConfigMap, Secret, or config file",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Misconfigured CMD or ENTRYPOINT command exiting immediately",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix CrashLoopBackOff in Kubernetes — Causes & Solutions",
  "seoDescription": "Resolve CrashLoopBackOff in Kubernetes with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
