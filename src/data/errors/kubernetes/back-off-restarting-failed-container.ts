import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "back-off-restarting-failed-container",
  "name": "Back-off restarting failed container",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Runtime Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Kubelet enters a delayed back-off phase after a container in a Pod repeatedly fails and restarts.",
  "meanDescription": "The 'Back-off restarting failed container' status is an event raised by the Kubelet indicating that a container has terminated repeatedly (crashed). Rather than immediately launching another instance and exhausting CPU/IO resources on the host, the Kubelet enforces an exponential back-off restart delay starting at 10 seconds, doubling at each failure up to a maximum limit of 5 minutes. This state corresponds directly with the 'CrashLoopBackOff' status column.",
  "causes": [
    "Application startup runtime crash: Uncaught runtime exceptions (like SegFaults, out of memory, or script syntax errors) cause the container process to exit immediately.",
    "Failed liveness or startup probes: The Kubelet forcefully kills and restarts the container because health checks repeatedly fail or time out.",
    "Unsupported host kernel calls: Enforcing security profiles (like custom AppArmor or Seccomp configurations) that block kernel syscalls required by the container's executable."
  ],
  "solutions": [
    "Inspect container logs: Run 'kubectl logs <pod-name> --previous' to retrieve application-level logs just before the last crash.",
    "Analyze container exit codes: Run 'kubectl describe pod <pod-name>' and review 'lastState.terminated.exitCode' (e.g. exit code 1 or 137).",
    "Audit system logs on Node: If logs are empty, log into the node to inspect the container runtime (containerd) and check for system-level resource limitations."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Events:\n  Type     Reason   Age                From               Message\n  ----     ------   ---                ----               -------\n  Warning  BackOff  14s (x8 over 2m)   kubelet            Back-off restarting failed container=api-server in pod=api-pod-hash",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Describe Pod details containing back-off warning logs\nkubectl describe pod api-pod-hash",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Events:\n  Type     Reason   Age                From               Message\n  ----     ------   ---                ----               -------\n  Warning  BackOff  14s (x8 over 2m)   kubelet            Back-off restarting failed container=api-server in pod=api-pod-hash",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Extracting Exit Status",
      "language": "bash",
      "description": "Retrieve exit code reasons and timestamps for terminated container instances dynamically.",
      "code": "# 1. Retrieve the container lastState termination details\n$ kubectl get pod api-pod-hash -o jsonpath='{.status.containerStatuses[*].lastState.terminated}'\n\n# 2. Check logs of the crashed container instance\n$ kubectl logs api-pod-hash --previous"
    },
    {
      "name": "Seccomp Profile Config",
      "language": "yaml",
      "description": "Configure container runtime security options (Seccomp) systematically using NodeDefault settings in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: secure-runtime-pod\nspec:\n  securityContext:\n    seccompProfile:\n      # Adopt NodeDefault profile to prevent custom syscall crash blocks\n      type: RuntimeDefault\n  containers:\n  - name: application\n    image: app-runner:latest"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect container runtime system logs on worker nodes to trace kernel calls blocks.",
      "code": "# 1. Inspect containerd event logs on linux node\njournalctl -u containerd -n 50 --no-pager\n\n# 2. Check audit logs for AppArmor access blocks\nsudo grep -i \"apparmor\" /var/log/audit/audit.log"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check container crash history inside Windows Node logs.",
      "code": "# Filter events related to system application crashes\nGet-EventLog -LogName Application -EntryType Error -Newest 10"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Query specific pods warning events.",
      "code": "kubectl get events --field-selector reason=BackOff"
    }
  ],
  "commonMistakes": [
    "Attempting to query active logs (`kubectl logs pod-name`) instead of historical logs (`kubectl logs pod-name --previous`), showing empty screens if the container is currently paused.",
    "Ignoring the exit code details inside describe results (e.g. exit code 139 indicates a Segmentation Fault crash, meaning the container binary has internal runtime code bugs)."
  ],
  "prevention": [
    "Verify container entrypoint scripts run correctly under unprivileged non-root users locally.",
    "Implement comprehensive health check probes delay configurations to protect slow-starting services."
  ],
  "faq": [
    {
      "question": "What does 'Back-off restarting failed container' mean?",
      "answer": "This is the Event description equivalent to 'CrashLoopBackOff'. It means the container has crashed multiple times, and the Kubelet is waiting before trying to start it again."
    },
    {
      "question": "How do I find out why the container failed?",
      "answer": "First run 'kubectl logs <pod-name> --previous'. If the container crashed, this command prints the logs of the failed instance. If that's empty, run 'kubectl describe pod <pod-name>' to check the exit code."
    },
    {
      "question": "What is exit code 139?",
      "answer": "Exit code 139 means the container exited due to a Segmentation Fault (SIGSEGV). This is a low-level C/C++ memory access crash inside the container's binary."
    },
    {
      "question": "How do AppArmor or Seccomp profiles trigger restarts?",
      "answer": "If your cluster enforces strict security profiles, and your application tries to run a restricted system call (e.g. modifying network settings), the kernel blocks the syscall, forcing the process to crash immediately."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Debug running Pods guide",
      "url": "https://kubernetes.io/docs/tasks/debug/debug-application/debug-running-pod/"
    }
  ],
  "relatedErrors": [
    "crashloopbackoff"
  ],
  "quickFix": {
    "causes": [
      "Application process crashes immediately due to uncaught runtime exceptions",
      "Kubelet kills container due to repeated liveness probe failures",
      "Host security rules (AppArmor/Seccomp) block internal system calls"
    ],
    "checklist": [
      "Verify container exit code in describe pod results",
      "Pull historical logs: kubectl logs --previous",
      "Verify Seccomp configuration profiles",
      "Review application configuration parameters"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Application runtime process crash (uncaught code exceptions)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Forceful container termination due to failed liveness probes",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Kernel system calls blocked by AppArmor or Seccomp profiles",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot Back-off restarting failed container —.",
  "seoDescription": "Complete guide to fixing Back-off restarting failed container in Kubernetes. Includes root cause analysis, step-by-step solutions, framework-specific examples."
};

export default errorData;
