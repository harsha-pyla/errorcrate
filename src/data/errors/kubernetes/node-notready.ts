import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "node-notready",
  "name": "Node NotReady",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Node",
    "Infra Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a worker node transitions to the NotReady status due to resource pressure, Kubelet process failures, or network splits.",
  "meanDescription": "A 'Node NotReady' status indicates that the control plane (specifically the kube-controller-manager) has lost connection or stopped receiving heartbeats from the worker node's Kubelet service. In Kubernetes v1.36 clusters, node heartbeat mechanisms utilize Lease resources ('coordination.k8s.io') in addition to NodeStatus objects. Typical causes include Kubelet service crashes, memory/disk exhaustion on the host, network partitions, or container runtime (containerd) hangs.",
  "causes": [
    "Kubelet service failure: The local Kubelet service crashes or stops responding due to host kernel bugs or configuration mismatches.",
    "Container runtime crash: The container runtime (containerd) crashes or blocks, preventing Kubelet from querying container states.",
    "Network partition split: The host node experiences a network failure, blocking outbound connections to control-plane API servers."
  ],
  "solutions": [
    "Inspect node description: Run 'kubectl describe node <node-name>' and review 'Conditions' lists to identify DiskPressure or OutOfDisk flags.",
    "Restart container runtime and Kubelet: Log into the worker node using SSH and execute 'systemctl restart containerd kubelet'.",
    "Verify Lease heartbeat status: Confirm coordinate Lease records are active in the 'kube-node-lease' namespace."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME          STATUS     ROLES    AGE   VERSION\nworker-node-1 NotReady   worker   42d   v1.36.0",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Query nodes status list\nkubectl get nodes",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME          STATUS     ROLES    AGE   VERSION\nworker-node-1 NotReady   worker   42d   v1.36.0",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Node Lease Inspection",
      "language": "bash",
      "description": "Inspect Kube Lease heartbeats inside the system leases namespace in Kubernetes v1.36.",
      "code": "# 1. List active leases in kube-node-lease\n$ kubectl get leases -n kube-node-lease\n\n# 2. Check the specific lease detail for worker-node-1\n$ kubectl describe lease worker-node-1 -n kube-node-lease"
    },
    {
      "name": "Node Eviction Toleration",
      "language": "yaml",
      "description": "Configure Pod eviction toleration times to prevent premature rescheduling during transient node disconnects.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: stateful-database-app\nspec:\n  containers:\n  - name: DB\n    image: postgres:15\n  # Toleration parameters for node conditions\n  tolerations:\n  - key: \"node.kubernetes.io/not-ready\"\n    operator: \"Exists\"\n    effect: \"NoExecute\"\n    # Wait 10 minutes (600s) before evicting Pod to new node\n    tolerationSeconds: 600"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Log into the affected worker node via SSH and diagnose Kubelet / Containerd systemd services status.",
      "code": "# 1. Inspect services status\nsudo systemctl status kubelet\nsudo systemctl status containerd\n\n# 2. Restart services if hanging\nsudo systemctl restart containerd kubelet\n\n# 3. Read Kubelet tail logs\njournalctl -u kubelet -n 100 --no-pager"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Restart Kubelet process on Windows Server nodes.",
      "code": "# Restart Windows Kubelet service\nRestart-Service -Name kubelet"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Inspect node conditions warning blocks.",
      "code": "kubectl describe node worker-node-1"
    }
  ],
  "commonMistakes": [
    "Evicting pods prematurely due to short toleration timings during transient CNI network drops.",
    "Ignoring disk capacity fills (if node root folder hits 85%+, Kubelet triggers DiskPressure evictions, which can lead to NotReady transitions)."
  ],
  "prevention": [
    "Configure node disk cleanup routines to automatically prune dangling container images.",
    "Implement high-availability (HA) master endpoints configurations to ensure nodes can always reach at least one API server instance."
  ],
  "faq": [
    {
      "question": "What causes 'Node NotReady' status?",
      "answer": "This means the control plane has lost contact with the Kubelet on that node. It is usually caused by the Kubelet service crashing, containerd hanging, or node network partitions."
    },
    {
      "question": "How does the node send heartbeats in Kubernetes v1.36?",
      "answer": "Kubernetes uses Node Lease objects under the 'kube-node-lease' namespace. Instead of updating the heavy Node object every few seconds, the Kubelet updates a lightweight Lease. If it fails to renew the Lease within the timeout, the node is marked NotReady."
    },
    {
      "question": "How do I troubleshoot NotReady nodes?",
      "answer": "SSH into the affected node and check the services status: 'sudo systemctl status kubelet' and 'sudo systemctl status containerd'. Restarting these services ('sudo systemctl restart containerd kubelet') often resolves transient hangs."
    },
    {
      "question": "What happens to Pods running on a NotReady node?",
      "answer": "If a node stays NotReady for longer than the toleration seconds (default is 5 minutes), the control plane automatically schedules the Pods for eviction, recreating them on other healthy Ready nodes."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Node Status documentation",
      "url": "https://kubernetes.io/docs/concepts/architecture/nodes/#node-status"
    }
  ],
  "relatedErrors": [
    "failedscheduling"
  ],
  "quickFix": {
    "causes": [
      "Kubelet service daemon crashed or is locked due to memory leaks",
      "containerd container runtime crashed or blocks on Docker queries",
      "Worker host network partition isolates node from API servers"
    ],
    "checklist": [
      "Check node state conditions in describe outputs",
      "SSH into node and run systemctl status kubelet",
      "Restart containerd and Kubelet services",
      "Verify Node Lease status in kube-node-lease namespace"
    ],
    "estimatedTime": "5 minutes"
  },
  "causesTable": [
    {
      "cause": "Kubelet systemd service crash or out-of-memory lock",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Container runtime daemon (containerd) hang or failure",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Network partition isolating the worker host from control plane",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Node NotReady — Kubernetes Debugging Guide",
  "seoDescription": "Troubleshoot Node NotReady in Kubernetes with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
