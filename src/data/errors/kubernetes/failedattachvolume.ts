import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failedattachvolume",
  "name": "FailedAttachVolume",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Storage Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the cluster volume controller fails to attach a dynamic or static PersistentVolume disk to a worker node.",
  "meanDescription": "A 'FailedAttachVolume' warning is emitted by the cluster-level AD (Attach/Detach) controller indicating that the cloud provider API failed to mount the physical volume to the target virtual machine node. In Kubernetes v1.36 CSI workflows, this occurs prior to the Kubelet mounting stage (FailedMount). Typical causes include cloud provider API rate limits, zone mismatches (trying to attach an AWS EBS volume in us-east-1a to an EC2 instance in us-east-1b), or stuck volume attachments locks.",
  "causes": [
    "Availability Zone mismatch: The volume resides in one availability zone, but the Pod was scheduled to a node residing in a different zone.",
    "Stuck dynamic volume detachment: The cloud provider API fails to detach a volume from a terminated node, blocking attachments to new node targets.",
    "Insufficient cloud IAM permissions: The cluster CSI controller lacks authorization policies (like 'ec2:AttachVolume' or 'ec2:DetachVolume') to mutate host resources."
  ],
  "solutions": [
    "Verify VolumeAttachment resource: Run 'kubectl get volumeattachments' to check for unresolved attachment bindings.",
    "Pin pods to specific zones: Configure nodeAffinity or topologySpreadConstraints in the deployment spec to enforce zone matching.",
    "Audit CSI controller IAM credentials: Confirm IAM roles for service accounts (IRSA) have correct storage attach/detach policies."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Events:\n  Type     Reason              Age                From                         Message\n  ----     ------              ---                ----                         -------\n  Warning  FailedAttachVolume  15s (x5 over 1m)   attachdetach-controller      AttachVolume.Attach failed for volume \"pv-storage\" : attach timeout for volume",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Describe Pod details containing FailedAttachVolume warnings\nkubectl describe pod database-worker",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Events:\n  Type     Reason              Age                From                         Message\n  ----     ------              ---                ----                         -------\n  Warning  FailedAttachVolume  15s (x5 over 1m)   attachdetach-controller      AttachVolume.Attach failed for volume \"pv-storage\" : attach timeout for volume",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Zone Affinity Fix",
      "language": "yaml",
      "description": "Configure nodeAffinity inside Pod specs to restrict scheduling to the Availability Zone hosting the PersistentVolume in Kubernetes v1.36.",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: zone-locked-deployment\nspec:\n  replicas: 1\n  template:\n    spec:\n      affinity:\n        nodeAffinity:\n          requiredDuringSchedulingIgnoredDuringExecution:\n            nodeSelectorTerms:\n            - matchExpressions:\n              - key: topology.kubernetes.io/zone\n                operator: In\n                values:\n                # Force Pod to schedule in us-east-1a where EBS volume exists\n                - us-east-1a\n      containers:\n      - name: database\n        image: postgres:15"
    },
    {
      "name": "EBS IAM Policy",
      "language": "json",
      "description": "Ensure the cloud IAM role attached to the cluster CSI storage account has required attach/detach policy rules.",
      "code": "{\n  \"Version\": \"2012-10-17\",\n  \"Statement\": [\n    {\n      \"Effect\": \"Allow\",\n      \"Action\": [\n        \"ec2:AttachVolume\",\n        \"ec2:DetachVolume\",\n        \"ec2:DescribeVolumes\",\n        \"ec2:DescribeInstances\"\n      ],\n      \"Resource\": \"*\"\n    }\n  ]\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check the status of the VolumeAttachment resource bindings.",
      "code": "# 1. Get all active VolumeAttachments\nkubectl get volumeattachments\n\n# 2. Check the logs of the attachdetach controller inside kube-system\nkubectl logs -n kube-system deploy/kube-controller-manager --tail=100 | grep -i attach"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify volume device mappings inside Windows server nodes.",
      "code": "# List active disk partition mappings\nGet-Disk | Format-Table -AutoSize"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Query specific warning events list.",
      "code": "kubectl get events --field-selector reason=FailedAttachVolume"
    }
  ],
  "commonMistakes": [
    "Manually provisioning PV disks in a single Availability Zone (AZ) while allowing deployment workloads to schedule globally, triggering FailedAttachVolume on cross-zone nodes.",
    "Forgetting to verify that old worker nodes have completed termination detaches before restarting pods on new nodes."
  ],
  "prevention": [
    "Adopt dynamic StorageClasses configurations utilizing `volumeBindingMode: WaitForFirstConsumer` to automatically align volume creations with pod locations.",
    "Define fallback node configurations inside cloud provider auto-scaling groups."
  ],
  "faq": [
    {
      "question": "What is FailedAttachVolume?",
      "answer": "This is an error raised by the Kubernetes Attach/Detach controller when it cannot attach the physical cloud storage disk (like AWS EBS or Azure Disk) to the VM node where the Pod is scheduled. It happens before the Kubelet tries to mount the disk."
    },
    {
      "question": "How does this differ from FailedMount?",
      "answer": "FailedAttachVolume is a cluster-level operation where the disk is attached to the VM node itself (similar to plugging in a USB drive). FailedMount is a local node operation where the Kubelet mounts the attached disk file system into the container folder."
    },
    {
      "question": "Why does an AZ mismatch cause this error?",
      "answer": "Most block storage types (e.g. AWS EBS) are tied to a specific Availability Zone. If a PV exists in us-east-1a, but the scheduler places your Pod on a node in us-east-1b, the cloud API cannot attach the disk across zones, triggering this error."
    },
    {
      "question": "How do I prevent AZ mismatch scheduling failures?",
      "answer": "Kubernetes StorageClasses handle this using 'volumeBindingMode: WaitForFirstConsumer'. This tells the provisioner to wait and create the volume in the same zone where the Pod gets scheduled, avoiding AZ mismatches."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Storage Classes guide",
      "url": "https://kubernetes.io/docs/concepts/storage/storage-classes/"
    }
  ],
  "relatedErrors": [
    "failedmount"
  ],
  "quickFix": {
    "causes": [
      "Availability Zone mismatch between target node location and volume zone",
      "Delay or timeout detaching the volume from a previously terminated node",
      "CSI storage controller IAM roles lack cloud API attachment permissions"
    ],
    "checklist": [
      "Confirm zone mismatch warnings in describe events list",
      "Ensure StorageClass uses WaitForFirstConsumer mode",
      "Verify VolumeAttachment state using kubectl",
      "Check Cloud IAM role permissions for ec2:AttachVolume"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Stuck volume detach from an offline or rebooted worker node",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Availability Zone (AZ) mismatch between Pod and volume location",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing Cloud provider IAM permissions for the CSI controller",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot FailedAttachVolume — Kubernetes Error Guide",
  "seoDescription": "FailedAttachVolume in Kubernetes — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this."
};

export default errorData;
