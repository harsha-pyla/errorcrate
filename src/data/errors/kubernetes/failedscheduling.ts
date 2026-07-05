import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failedscheduling",
  "name": "FailedScheduling",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Scheduler",
    "Scheduling Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Kubernetes scheduler cannot assign a Pod to any worker node due to filters mismatch, taints, or resource pressure.",
  "meanDescription": "A 'FailedScheduling' event is emitted by the kube-scheduler when it fails to find any worker node that satisfies all criteria required by the Pod's configuration. In Kubernetes v1.36 scheduling frameworks, this process involves filtering nodes (predicates) and scoring them (priorities). Typical triggers include node selector mismatches, taints without matching tolerations, pod affinity/anti-affinity conflicts, or nodes suffering from DiskPressure, PidPressure, or MemoryPressure.",
  "causes": [
    "Node selector or affinity mismatch: The Pod spec requires specific labels (e.g. 'kubernetes.io/os: windows') that do not match active node attributes.",
    "Host port conflicts: The Pod requests a static 'hostPort' that is already bound by another container running on the node.",
    "Node condition pressure taints: Worker nodes have transitioned to unhealthy states like 'DiskPressure' or 'NetworkUnavailable', blocking new schedulings."
  ],
  "solutions": [
    "Inspect scheduler warning logs: Run 'kubectl get events --field-selector reason=FailedScheduling' to see scheduling filter failures.",
    "Loosen affinity and selectors: Use soft node affinity ('preferredDuringSchedulingIgnoredDuringExecution') instead of hard selectors.",
    "Remove static hostPort bindings: Utilize dynamic service NodePorts or ingress routing rather than hardcoding hostPort values."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Events:\n  Type     Reason            Age   From               Message\n  ----     ------            ---   ----               -------\n  Warning  FailedScheduling  10s   default-scheduler  0/3 nodes are available: 3 node(s) didn't match Pod Topology Spread Constraints.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Fetch warning events specifically targeting FailedScheduling reasons\nkubectl get events --field-selector reason=FailedScheduling",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Events:\n  Type     Reason            Age   From               Message\n  ----     ------            ---   ----               -------\n  Warning  FailedScheduling  10s   default-scheduler  0/3 nodes are available: 3 node(s) didn't match Pod Topology Spread Constraints.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Soft Node Affinity config",
      "language": "yaml",
      "description": "Establish preferred scheduling rules instead of hard constraints to permit fallback scheduling if ideal nodes are full.",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: soft-affinity-app\nspec:\n  replicas: 2\n  template:\n    spec:\n      affinity:\n        nodeAffinity:\n          # preferred... makes scheduling a preference, not a hard blocking filter\n          preferredDuringSchedulingIgnoredDuringExecution:\n          - weight: 100\n            preference:\n              matchExpressions:\n              - key: disktype\n                operator: In\n                values:\n                - ssd\n      containers:\n      - name: web-app\n        image: nginx:latest"
    },
    {
      "name": "Removing hostPort Bindings",
      "language": "yaml",
      "description": "Expose containers using standard Services instead of binding nodes ports directly to prevent scheduling collisions.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: app-server\nspec:\n  containers:\n  - name: backend\n    image: backend-image:v1.0.0\n    ports:\n    - containerPort: 8080\n      # Wrong: blocks node port 80, preventing other pods scheduling\n      # hostPort: 80\n      \n      # Correct: omit hostPort, route traffic through a Service resource instead"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "List node conditions to identify disk or memory pressures blocking scheduling.",
      "code": "# Query node status conditions list\nkubectl get nodes -o custom-columns=NAME:.metadata.name,DISK_PRESSURE:.status.conditions[?(@.type==\"DiskPressure\")].status,MEM_PRESSURE:.status.conditions[?(@.type==\"MemoryPressure\")].status"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify Windows Node taints structures inside PowerShell controller scripts.",
      "code": "# Verify taints list on Windows nodes\nkubectl get nodes -l kubernetes.io/os=windows -o jsonpath='{.items[*].spec.taints}'"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check local scheduler config events.",
      "code": "kubectl get events -n default --sort-by='.metadata.creationTimestamp'"
    }
  ],
  "commonMistakes": [
    "Setting hard pod anti-affinity configurations (`requiredDuringSchedulingIgnoredDuringExecution`) for replicas exceeding the total count of worker nodes, locking extra replicas in FailedScheduling state.",
    "Using outdated Node Selector strings referencing deprecated node labels."
  ],
  "prevention": [
    "Configure Pod Topology Spread Constraints with `whenUnsatisfiable: ScheduleAnyway` fallback options.",
    "Utilize node taint tolerations systematically on system management daemonsets."
  ],
  "faq": [
    {
      "question": "What is FailedScheduling?",
      "answer": "It is an event emitted by the kube-scheduler when a Pod cannot be assigned to any node. This causes the Pod to remain in 'Pending' status."
    },
    {
      "question": "How does FailedScheduling differ from Pending Pod?",
      "answer": "'Pending' is the high-level Pod status. 'FailedScheduling' is the specific Event emitted by the scheduler explaining why the Pod is pending."
    },
    {
      "question": "How do I troubleshoot '0/3 nodes are available: 3 node(s) had untolerated taint'?",
      "answer": "This means the nodes have taints (restrictive labels) that your Pod doesn't tolerate. Add a matching 'tolerations' section to your Pod spec, or verify if you accidentally scheduled workload on the control-plane nodes."
    },
    {
      "question": "Why do hostPort conflicts block scheduling?",
      "answer": "If you specify 'hostPort: 80', only one Pod requesting this port can run on any single node. If you have more replica Pods than nodes, the extra Pods will trigger FailedScheduling. Use a Service instead."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Assigning Pods to Nodes guide",
      "url": "https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/"
    }
  ],
  "relatedErrors": [
    "pending-pod"
  ],
  "quickFix": {
    "causes": [
      "No node matches the nodeSelector or nodeAffinity rules set inside the Pod",
      "Multiple Pod replicas request identical static hostPort assignments",
      "All nodes suffer from DiskPressure or MemoryPressure conditions"
    ],
    "checklist": [
      "Query FailedScheduling events: kubectl get events",
      "Loosen nodeAffinity requirements to preferred",
      "Remove hostPort settings from pod templates specs",
      "Ensure worker nodes are not under DiskPressure"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Unsatisfied Node Selector or Node Affinity filters",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "HostPort conflicts (multiple pods requesting same host port)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Target nodes are under DiskPressure or PidPressure",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix FailedScheduling Fast — Kubernetes Solutions Guide",
  "seoDescription": "Getting FailedScheduling in Kubernetes? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
