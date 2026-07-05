import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "containercreating-stuck",
  "name": "ContainerCreating stuck",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Scheduling Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a Pod remains in the ContainerCreating state due to volume mounting issues, CNI network timeouts, or runtime bugs.",
  "meanDescription": "A Pod stuck in the 'ContainerCreating' status indicates that the scheduler assigned the Pod to a node, but the local Kubelet cannot start the container runtime processes. In Kubernetes v1.36, this is commonly caused by Container Storage Interface (CSI) volume mount timeouts, Container Network Interface (CNI) IP address allocation timeouts, or host-level kernel resource bottlenecks.",
  "causes": [
    "CSI Volume mount locks: A Persistent Volume (PV) is locked by another node or fails to attach (common with multi-attach errors for block storage).",
    "CNI IP allocation failure: The Container Network Interface (e.g. Calico, Flannel, AWS VPC CNI) has exhausted its IP subnet or fails to bind virtual ethernet interfaces.",
    "Runtime or sandbox creation failure: The container runtime (containerd) fails to initialize the sandbox namespace due to host memory limits or OS resource leaks."
  ],
  "solutions": [
    "Inspect Kubelet events: Run 'kubectl describe pod <pod-name>' and review events for VolumeAttachment errors or CNI network setup failures.",
    "Check VolumeAttachment state: Run 'kubectl get volumeattachments' to see if a volume is stuck attaching to a node.",
    "Verify CNI subnet availability: Check CNI daemon logs (e.g. AWS VPC CNI L-IPAM daemon) to verify IP resource pools are not exhausted."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS              RESTARTS   AGE\nweb-server   0/1     ContainerCreating   0          8m40s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Fetch pods status showing container startup errors\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS              RESTARTS   AGE\nweb-server   0/1     ContainerCreating   0          8m40s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "VolumeAttachment Query",
      "language": "bash",
      "description": "Inspect active volume attachments to locate stuck locks.",
      "code": "# 1. List all volume attachments and check if attachment status is false\nkubectl get volumeattachments\n\n# 2. Describe stuck attachment metadata detail\nkubectl describe volumeattachment vault-volume-attachment-hash"
    },
    {
      "name": "CNI Pod Log Inspect",
      "language": "bash",
      "description": "Query daemon logs belonging to network controllers (such as AWS VPC CNI or Calico) to verify IP pools availability.",
      "code": "# Get logs for the CNI daemonset pods running on the target node\nkubectl logs -n kube-system daemonset/aws-node --tail=100 | grep -i -E 'fail|error|ip'"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Log into the worker node directly and review containerd and Kubelet log lines.",
      "code": "# 1. Inspect Kubelet logs for mounting errors\njournalctl -u kubelet -n 100 --no-pager\n\n# 2. Inspect Containerd sandbox creation logs\njournalctl -u containerd -n 100 | grep -i sandbox"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Audit Windows Host Network Service (HNS) networks status.",
      "code": "# Query HNS networks list on Windows node shell\nGet-HnsNetwork"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Watch events list related to failures.",
      "code": "kubectl get events --field-selector reason=FailedMount"
    }
  ],
  "commonMistakes": [
    "Re-deploying stateful workloads across zones assuming PersistentVolumes dynamically cross boundaries (read-write-once block storage cannot attach to a node in a different AZ, leaving the Pod stuck in ContainerCreating).",
    "Exhausting host file descriptors or node process ID limits (PID limits)."
  ],
  "prevention": [
    "Utilize ReadWriteMany (RWX) storage provisioners (like NFS, EFS) for workloads that must scale across multiple nodes.",
    "Adopt proper subnets allocations sizing configurations during initial CNI installations."
  ],
  "faq": [
    {
      "question": "Why is my Pod stuck in ContainerCreating status?",
      "answer": "This means the Kubelet on the scheduled node is attempting to spin up the container sandbox but is blocked. The most common reasons are volumes failing to attach/mount, or network plug-in (CNI) failures."
    },
    {
      "question": "How do I troubleshoot volume mount issues keeping a Pod in ContainerCreating?",
      "answer": "Run 'kubectl describe pod <pod-name>'. If you see events like 'Multi-Attach error for volume' or 'FailedMount', the volume is likely still attached to an old node. You may need to delete the stuck volume attachment or wait for the CSI driver to force detach it."
    },
    {
      "question": "What is a CNI error in this state?",
      "answer": "The Container Network Interface (CNI) is responsible for provisioning the pod's IP. If you see 'Failed to create pod sandbox: rpc error: code = Unknown desc = failed to set up sandbox container...', the CNI is failing to allocate an IP or set up the network interface."
    },
    {
      "question": "How do I inspect local node runtime issues in K8s v1.36?",
      "answer": "Log into the worker node and inspect containerd events using 'journalctl -u containerd' or check Kubelet logs using 'journalctl -u kubelet'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Troubleshoot Applications guide",
      "url": "https://kubernetes.io/docs/tasks/debug/debug-application/"
    }
  ],
  "relatedErrors": [
    "failedmount"
  ],
  "quickFix": {
    "causes": [
      "PersistentVolume is locked by an inactive node or fails to attach",
      "CNI network plug-in runs out of allocatable IP addresses",
      "Containerd fails to construct the namespace sandbox container"
    ],
    "checklist": [
      "Inspect events at the bottom of describe pod details",
      "Query stuck attachments using kubectl get volumeattachments",
      "Verify CNI subnet IP pool allocation numbers",
      "Restart containerd or Kubelet services on the node"
    ],
    "estimatedTime": "5 minutes"
  },
  "causesTable": [
    {
      "cause": "CSI volume attachment timeouts or locks (Multi-Attach-Error)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "CNI network subnet IP pool exhaustion",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Containerd sandbox namespace creation failures (OS limits)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "ContainerCreating stuck: Complete Kubernetes.",
  "seoDescription": "Learn how to fix ContainerCreating stuck in Kubernetes. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
