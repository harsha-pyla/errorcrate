import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "pvc-pending",
  "name": "PVC Pending",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Storage",
    "Storage Error",
    "Medium Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This status occurs when a PersistentVolumeClaim cannot bind to a PersistentVolume due to missing storage classes or unsatisfied resource parameters.",
  "meanDescription": "A 'PVC Pending' (PersistentVolumeClaim Pending) status indicates that the claim has been created but cannot bind to an appropriate PersistentVolume (PV). In Kubernetes v1.36 storage architectures, this binding is handled dynamically by a volume provisioner associated with the requested StorageClass, or statically by matching labels and resource sizes. Common triggers include referencing non-existent StorageClasses, requesting storage capacities exceeding physical limits, or using 'waitForFirstConsumer' binding modes which intentionally delay binding until a Pod requests the storage.",
  "causes": [
    "Missing or wrong StorageClass: The PVC manifest references a 'storageClassName' that does not exist in the cluster.",
    "Unsatisfied static PV capacity or selectors: Statically defined PersistentVolumes do not match the size request or selector labels specified in the PVC.",
    "StorageClass waitForFirstConsumer mode: The StorageClass uses the 'volumeBindingMode: WaitForFirstConsumer' setting, meaning the PVC will remain Pending until a Pod referencing it is scheduled."
  ],
  "solutions": [
    "Verify StorageClass availability: Run 'kubectl get storageclass' to confirm the class name is spelled correctly and available.",
    "Check PVC events details: Run 'kubectl describe pvc <pvc-name>' to locate provisioner failures or size errors.",
    "Deploy referencing Pods: If using 'WaitForFirstConsumer', deploy the workload Pod to trigger volume provisioning on the selected node."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME          STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE\ndata-claim    Pending                                      gp3            24s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Query PVCs status inside namespace\nkubectl get pvc",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME          STATUS    VOLUME   CAPACITY   ACCESS MODES   STORAGECLASS   AGE\ndata-claim    Pending                                      gp3            24s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "StorageClass Verification",
      "language": "bash",
      "description": "Inspect available StorageClass systems and check their volumeBindingMode properties.",
      "code": "# 1. List active StorageClasses\n$ kubectl get storageclass\n\n# 2. Describe StorageClass parameters\n$ kubectl describe storageclass gp3"
    },
    {
      "name": "Dynamic PVC Manifest",
      "language": "yaml",
      "description": "Write a dynamic PVC config file matching cluster storage class specs in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: app-data-pvc\nspec:\n  accessModes:\n    - ReadWriteOnce\n  # Match the active cluster storageClassName\n  storageClassName: gp3\n  resources:\n    requests:\n      storage: 10Gi"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check the events of the PVC and monitor CSI controller pods logs.",
      "code": "# 1. Inspect PVC events logs details\nkubectl describe pvc data-claim\n\n# 2. Read CSI controller provisioner logs\nkubectl logs -n kube-system deploy/ebs-csi-controller -c csi-provisioner --tail=50"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check static PV binding parameters on Windows systems.",
      "code": "# Verify static PVs size capacities matching\nkubectl get pv"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Watch status transitions.",
      "code": "kubectl get pvc --watch"
    }
  ],
  "commonMistakes": [
    "Mistyping the `storageClassName` string inside the PVC manifest, causing the controller loop to search for a non-existent provisioner.",
    "Panicking when a PVC remains Pending under `WaitForFirstConsumer` mode before scheduling the Pod (this is expected behavior; the volume provisioner needs to know the Pod's target node zone configuration first)."
  ],
  "prevention": [
    "Establish default StorageClass rules inside the cluster configuration to capture empty storageClass calls.",
    "Verify dynamic CSI driver controllers are updated to match cloud platform API upgrades."
  ],
  "faq": [
    {
      "question": "Why is my PVC stuck in Pending status?",
      "answer": "This means Kubernetes cannot find or dynamically create a PersistentVolume (PV) that matches the PVC's storage class, size requests, or access modes. Run 'kubectl describe pvc <pvc-name>' to check the events."
    },
    {
      "question": "What does 'volumeBindingMode: WaitForFirstConsumer' mean?",
      "answer": "This is a setting in the StorageClass. It tells Kubernetes not to create the volume immediately when the PVC is created, but rather wait until a Pod that uses the PVC is scheduled. This ensures the volume is created in the same zone as the node the Pod is running on. In this case, 'Pending' is normal and will resolve when you start the Pod."
    },
    {
      "question": "How do I troubleshoot static PV binding failures?",
      "answer": "Ensure you have a PV created with a size equal to or greater than the PVC requests, matching 'accessModes' (e.g. ReadWriteOnce), and matching 'storageClassName'. if any of these mismatch, the PVC will stay Pending."
    },
    {
      "question": "Why does it say 'waiting for a volume to be created, either by external provisioner...'?",
      "answer": "This means the dynamic volume provisioner (like AWS EBS CSI or GCP Persistent Disk driver) is either not installed or is failing to call the cloud provider's API. Check the logs of the CSI controller pod in the kube-system namespace."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Persistent Volumes guide",
      "url": "https://kubernetes.io/docs/concepts/storage/persistent-volumes/"
    }
  ],
  "relatedErrors": [
    "failedmount"
  ],
  "quickFix": {
    "causes": [
      "Referenced storageClassName does not exist or is misspelled",
      "Static PV size parameters or accessModes fail to match the PVC criteria",
      "WaitForFirstConsumer binding mode is active, awaiting Pod deployment scheduling"
    ],
    "checklist": [
      "Confirm StorageClass spelling matches output of kubectl get storageclass",
      "Deploy referencing Pods if using WaitForFirstConsumer mode",
      "Inspect dynamic CSI controller logs for AWS/GCP API failures",
      "Ensure static PV sizes are equal to or larger than PVC requests"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "StorageClass name typo or missing provisioner",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Dynamic volumeBindingMode is set to WaitForFirstConsumer (expected behavior)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Static PVs size requests exceed available allocations",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot PVC Pending — Kubernetes Error Guide",
  "seoDescription": "Getting PVC Pending in Kubernetes? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix."
};

export default errorData;
