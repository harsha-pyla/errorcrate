import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "pending-pod",
  "name": "Pending Pod",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Scheduling Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This status occurs when a Pod cannot be scheduled onto a node due to resource constraints, taints, or missing volumes.",
  "meanDescription": "A Pod in 'Pending' status indicates that the Kubernetes scheduler (kube-scheduler) cannot assign it to a node. Unlike running pods, a pending pod resides in the scheduler queue. In Kubernetes v1.36 scheduling frameworks, scheduling failures are logged as Events. Common scheduling blockers include CPU/Memory resource exhaustion, Node Taints that the Pod does not tolerate, or PersistentVolumeClaims (PVCs) failing to bind or locate matching storage classes.",
  "causes": [
    "Insufficient node resources: The requested CPU or Memory limits inside the container spec exceed the available allocatable capacity on all nodes.",
    "Node Taints and Tolerations mismatch: Nodes are tainted (e.g. 'node-role.kubernetes.io/control-plane:NoSchedule') and the Pod does not have matching tolerations.",
    "Unbound Persistent Volume Claims (PVC): The Pod requests storage volumes that cannot bind due to incorrect size requests or missing StorageClasses."
  ],
  "solutions": [
    "Inspect scheduling events: Run 'kubectl describe pod <pod-name>' and check the bottom 'Events' section for scheduler warning details.",
    "Adjust container resource requests: Decrease requested CPU/Memory limits to fit within node capacities.",
    "Verify PVC bindings: Confirm the PVC status is 'Bound' and the StorageClass exists by running 'kubectl get pvc'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS    RESTARTS   AGE\napp-worker   0/1     Pending   0          58s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Query Pods list showing scheduling status\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS    RESTARTS   AGE\napp-worker   0/1     Pending   0          58s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Tolerations Configuration",
      "language": "yaml",
      "description": "Configure Pod tolerations to allow scheduling on tainted nodes (such as master or control-plane nodes).",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: control-plane-utility\nspec:\n  containers:\n  - name: sys-monitor\n    image: monitor:v1.2.0\n  # Match the taint key, value, and effect\n  tolerations:\n  - key: \"node-role.kubernetes.io/control-plane\"\n    operator: \"Exists\"\n    effect: \"NoSchedule\""
    },
    {
      "name": "Node Selector Schedule",
      "language": "yaml",
      "description": "Bind Pod scheduling targets directly to specific nodes utilizing labels matching profiles.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: gpu-calc-pod\nspec:\n  containers:\n  - name: cuda-app\n    image: cuda-runner:latest\n  # Schedule only on nodes containing target labels\n  nodeSelector:\n    hardware-acceleration: \"gpu-nvidia\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Query node capacity limits using kubectl commands directly from terminal controllers.",
      "code": "# 1. Describe node resources limits allocations\nkubectl describe nodes | grep -A 10 \"Allocated resources\"\n\n# 2. View details on the pending pod\nkubectl describe pod app-worker"
    },
    {
      "name": "Windows",
      "language": "yaml",
      "description": "Specify target OS requirements to route container schedules to compatible node systems.",
      "code": "# Ensure Windows Pods map to Windows nodes using nodeSelectors\nspec:\n  nodeSelector:\n    kubernetes.io/os: windows"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check local minikube or docker-desktop cluster limits status.",
      "code": "kubectl get nodes -o wide"
    }
  ],
  "commonMistakes": [
    "Setting container `resources.requests` equal to or higher than the total capacity of individual worker nodes (scheduling will fail even if the cluster has many nodes, because a single Pod cannot be split across nodes).",
    "Forgetting to check the status of PV Provisioners when utilizing dynamic volumes mappings."
  ],
  "prevention": [
    "Adopt cluster autoscalers (like Karpenter or Kubernetes Cluster Autoscaler) to automatically provision nodes when resource exhaustion is detected.",
    "Define sensible resource requests and limits defaults using LimitRange files inside namespaces."
  ],
  "faq": [
    {
      "question": "Why is my Pod stuck in Pending status?",
      "answer": "This means the Kubernetes scheduler cannot find any worker node that meets the Pod's requirements. Run 'kubectl describe pod <pod-name>' and look at the 'Events' section at the bottom for the exact reason (e.g. '0/3 nodes are available: 3 Insufficient cpu')."
    },
    {
      "question": "How do I fix 'Insufficient memory' scheduling failures?",
      "answer": "Your containers have requested more CPU or Memory than what is available on the nodes. You can either lower the 'resources.requests' inside your deployment YAML or add more/larger nodes to your cluster."
    },
    {
      "question": "How Node Taints cause a Pod to stay Pending?",
      "answer": "Taints allow a node to repel a set of pods. For example, control-plane nodes have a 'NoSchedule' taint. If your Pod does not have a matching 'tolerations' section in its spec, it won't be scheduled on those nodes."
    },
    {
      "question": "Why is my volume request keeping my Pod Pending?",
      "answer": "If your Pod uses a PersistentVolumeClaim (PVC) that is not bound yet, the scheduler cannot schedule the Pod because it doesn't know which node can access the volume. Check your PVC status using 'kubectl get pvc'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Scheduler documentation",
      "url": "https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/"
    }
  ],
  "relatedErrors": [
    "failedscheduling"
  ],
  "quickFix": {
    "causes": [
      "Requested CPU or Memory limits exceed available allocations on all nodes",
      "Missing tolerations matching node NoSchedule taints parameters",
      "Pod relies on PersistentVolumeClaims (PVC) currently unbound"
    ],
    "checklist": [
      "Check bottom Events description: kubectl describe pod",
      "Reduce CPU/Memory resource requests parameters",
      "Add node tolerations for master/control-plane",
      "Verify StorageClass and PVC status: kubectl get pvc"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Insufficient Node resources (CPU/Memory limits overflow)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Node Taints blocking scheduling (missing tolerations)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "PersistentVolumeClaims (PVC) stuck in Pending state",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Pending Pod in Kubernetes (With Examples)",
  "seoDescription": "Learn how to fix Pending Pod in Kubernetes. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
