import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failedmount",
  "name": "FailedMount",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Storage Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Kubelet cannot mount a volume inside a container, commonly due to directory locks, wrong credentials, or CSI driver failures.",
  "meanDescription": "A 'FailedMount' event is raised by the Kubelet when it fails to mount the designated volume path into the container sandbox. In Kubernetes v1.36 architectures, this is mediated by Container Storage Interface (CSI) drivers. Typical causes include network latency blocking remote attachments, target directory path locks, using ReadWriteOnce (RWO) volumes across multiple nodes, or missing sub-path keys.",
  "causes": [
    "Multi-Attach error for RWO volume: Attempting to attach a ReadWriteOnce volume to a new Pod on Node B while it is still locked by a terminated Pod on Node A.",
    "CSI driver connection timeouts: The node's CSI plugin container cannot communicate with the cloud storage API (e.g. AWS EBS or Azure Disk) to finalize the mount.",
    "Missing Secret keys for storage credentials: The volume mount configuration references a Secret or ConfigMap containing access keys that does not exist in the namespace."
  ],
  "solutions": [
    "Inspect volume status details: Run 'kubectl describe pod <pod-name>' and review events for mount locks or permission errors.",
    "Force volume detachment: Delete stuck VolumeAttachment resources or scale down the original deployment to release locks.",
    "Verify CSI plugin availability: Ensure CSI daemon pods (e.g. ebs-csi-node) are Running in the kube-system namespace."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Events:\n  Type     Reason       Age                From               Message\n  ----     ------       ---                ----               -------\n  Warning  FailedMount  12s (x8 over 90s)  kubelet            MountVolume.SetUp failed for volume \"pv-data\" : kubernetes.io/csi: mounter.SetUpAt failed to get CSI client",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Fetch pod details including FailedMount events\nkubectl describe pod database-pod",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Events:\n  Type     Reason       Age                From               Message\n  ----     ------       ---                ----               -------\n  Warning  FailedMount  12s (x8 over 90s)  kubelet            MountVolume.SetUp failed for volume \"pv-data\" : kubernetes.io/csi: mounter.SetUpAt failed to get CSI client",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "VolumeAttachment Clean",
      "language": "bash",
      "description": "Locate and remove stuck RWO volume attachments to allow the volume to bind on new scheduled nodes.",
      "code": "# 1. List all active VolumeAttachments\n$ kubectl get volumeattachments\n\n# 2. Delete the stuck attachment locking the volume\n$ kubectl delete volumeattachment csi-attachment-hash"
    },
    {
      "name": "ConfigMap Mount Specs",
      "language": "yaml",
      "description": "Mount ConfigMaps or Secrets as file directories, ensuring resources exist inside same namespaces.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: config-reader-pod\n  namespace: production\nspec:\n  containers:\n  - name: app\n    image: app-runner:latest\n    volumeMounts:\n    - name: settings-volume\n      mountPath: /app/config\n  volumes:\n  - name: settings-volume\n    configMap:\n      # Must exist inside 'production' namespace\n      name: app-settings-config"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Log into the worker node directly to check local mounting directories under the Kubelet directory structure.",
      "code": "# 1. Inspect Kubelet journal logs filtering by mounts\njournalctl -u kubelet -n 100 --no-pager | grep -i \"mount\"\n\n# 2. Check mount points in system directories\ndf -h | grep kubelet"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Audit Windows CSI plugins status.",
      "code": "# Verify CSI driver registration on Windows nodes\nGet-Service | Where-Object { $_.Name -like \"*csi*\" }"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Monitor dynamic warnings events list.",
      "code": "kubectl get events --field-selector reason=FailedMount"
    }
  ],
  "commonMistakes": [
    "Mounting ConfigMaps or Secrets as volumes using non-existent keys, causing the Kubelet mount daemon to fail indefinitely.",
    "Attempting to scale a deployment with a ReadWriteOnce (RWO) volume to multiple replicas, causing FailedMount on all replicas scheduled to different nodes."
  ],
  "prevention": [
    "Use ReadWriteMany (RWX) PV storage types (e.g. AWS EFS, Azure Files) for replica workloads.",
    "Adopt GitOps sync checks (like ArgoCD or Flux) to ensure config maps exist before pods launch."
  ],
  "faq": [
    {
      "question": "What causes FailedMount in Kubernetes?",
      "answer": "This means the Kubelet successfully scheduled the Pod but cannot mount the requested storage volume. It's usually due to RWO volume locks, CSI driver issues, or missing configuration secrets."
    },
    {
      "question": "How do I solve 'Multi-Attach error for volume' during mount?",
      "answer": "A ReadWriteOnce (RWO) volume can only be mounted by a single node at a time. If a Pod is rescheduled to a new node but the old node hasn't released the volume, you get this error. You can delete the stuck 'VolumeAttachment' resource or restart the old node to force detach the disk."
    },
    {
      "question": "Why does my ConfigMap mount fail?",
      "answer": "If you mount a ConfigMap or Secret as a volume but it doesn't exist in the same namespace, the Kubelet cannot compile the virtual files and raises a FailedMount error. Ensure the ConfigMap/Secret is created first."
    },
    {
      "question": "How do I check Kubelet mount logs on worker nodes?",
      "answer": "Log into the worker node and inspect mount processes logs: 'journalctl -u kubelet | grep -E \"MountVolume|AttachVolume\"'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Volumes documentation",
      "url": "https://kubernetes.io/docs/concepts/storage/volumes/"
    }
  ],
  "relatedErrors": [
    "containercreating-stuck"
  ],
  "quickFix": {
    "causes": [
      "ReadWriteOnce volume is locked by another node due to delayed detachment",
      "CSI driver container crashed or is unreachable on the scheduled node",
      "Reference to missing ConfigMaps or Secrets within the volume definition"
    ],
    "checklist": [
      "Confirm Multi-Attach warning inside kubectl describe events",
      "Delete stuck VolumeAttachment resource mappings",
      "Verify CSI daemonset status in kube-system namespace",
      "Confirm Secret or ConfigMap exists in the active namespace"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "ReadWriteOnce volume multi-attach locks (stuck detach)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing access credential Secrets in Pod namespace",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "CSI node daemon container crash or timeout",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "FailedMount Error: Root Causes & Verified Fixes",
  "seoDescription": "Learn how to fix FailedMount in Kubernetes. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
