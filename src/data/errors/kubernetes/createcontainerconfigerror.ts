import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "createcontainerconfigerror",
  "name": "CreateContainerConfigError",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Configuration Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the Kubelet cannot start a container because of missing ConfigMaps, Secrets, or invalid environment parameters.",
  "meanDescription": "A 'CreateContainerConfigError' is a pod scheduling status indicating that the Kubelet on the scheduled node cannot assemble the container configuration options. In Kubernetes v1.36, this is almost always triggered by referencing non-existent ConfigMaps or Secrets inside the container's environment definitions ('env', 'envFrom') or volume definitions. Because Kubelet verifies all configurations prior to launching container sandboxes, missing keys halt execution immediately.",
  "causes": [
    "Missing ConfigMap reference: The container environment or volumes refer to a ConfigMap that has not been created inside the namespace.",
    "Missing Secret reference: The container refers to a Secret containing credentials or keys that is missing or deleted.",
    "Missing specific keys within ConfigMap/Secret: The ConfigMap or Secret exists, but the specific key referenced via 'valueFrom.configMapKeyRef' or 'secretKeyRef' is missing."
  ],
  "solutions": [
    "Verify ConfigMaps and Secrets existence: Run 'kubectl get configmap' and 'kubectl get secret' in the Pod's namespace to check availability.",
    "Check Pod detailed events: Run 'kubectl describe pod <pod-name>' to print the exact missing ConfigMap/Secret name or key.",
    "Create the missing configuration resources: Deploy the required ConfigMap/Secret values or mark references as optional using 'optional: true'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS                         RESTARTS   AGE\nweb-deploy   0/1     CreateContainerConfigError     0          14s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Fetch pods status showing container configuration errors\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS                         RESTARTS   AGE\nweb-deploy   0/1     CreateContainerConfigError     0          14s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Optional Env Reference",
      "language": "yaml",
      "description": "Configure ConfigMap and Secret references to be optional to prevent container startup blocks if keys are missing in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: optional-config-pod\nspec:\n  containers:\n  - name: app-container\n    image: app:latest\n    env:\n    - name: DATABASE_URL\n      valueFrom:\n        configMapKeyRef:\n          name: db-settings\n          key: db_url\n          # Mark optional to allow container startup if missing\n          optional: true"
    },
    {
      "name": "Creating Missing Secret",
      "language": "bash",
      "description": "Generate key-value secrets inside matching namespaces using kubectl commands.",
      "code": "# Create generic key-value secret inside 'production' namespace\nkubectl create secret generic db-secret \\\n  --namespace=production \\\n  --from-literal=database-password=super-secure-password"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Scan Pod events warning lists to extract specific missing configuration resource names.",
      "code": "# 1. Inspect Pod details and look at bottom events\nkubectl describe pod web-deploy\n\n# 2. Query warning events dynamically\nkubectl get events --field-selector type=Warning | grep -E \"Config|Secret\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check ConfigMaps keys availability inside target namespaces.",
      "code": "# List config maps in namespace\nkubectl get configmap -o wide"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify namespace variables consistency.",
      "code": "kubectl config view --minify | grep namespace"
    }
  ],
  "commonMistakes": [
    "Referencing configurations defined inside different namespaces (ConfigMaps/Secrets must reside in the exact same namespace as the Pod referencing them).",
    "Mistyping the lookup keys inside `secretKeyRef` or `configMapKeyRef` parameters."
  ],
  "prevention": [
    "Adopt validation tools (like Kubeval or Kustomize builds checks) to audit references integrity prior to updates.",
    "Adopt namespace deployment blueprints to manage environment secrets systematically."
  ],
  "faq": [
    {
      "question": "What is CreateContainerConfigError?",
      "answer": "This means the Kubelet scheduled your Pod to a node but cannot start the container because of a configuration issue, almost always a missing ConfigMap or Secret."
    },
    {
      "question": "How do I find out which ConfigMap or Secret is missing?",
      "answer": "Run 'kubectl describe pod <pod-name>'. Look at the 'Events' section at the bottom. It will say something like: 'Error: configmap \"my-config\" not found' or 'secret \"db-secret\" not found'."
    },
    {
      "question": "Can I make a ConfigMap reference optional?",
      "answer": "Yes. You can add 'optional: true' to the reference inside your Pod spec. If marked optional, Kubernetes will start the container even if the ConfigMap/Secret is missing."
    },
    {
      "question": "Why does it fail when I can see the ConfigMap in my terminal?",
      "answer": "Check the namespace. ConfigMaps and Secrets are namespaced. If your Pod is running in the 'production' namespace, it cannot read a ConfigMap defined in the 'default' namespace."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Distribute Credentials Securely Using Secrets guide",
      "url": "https://kubernetes.io/docs/tasks/inject-data-application/distribute-credentials-secure-secret/"
    }
  ],
  "relatedErrors": [
    "createcontainererror"
  ],
  "quickFix": {
    "causes": [
      "ConfigMap referenced in container specification does not exist in active namespace",
      "Secret containing keys is missing, deleted, or misaligned namespace-wise",
      "Referenced key does not exist inside the ConfigMap or Secret payload"
    ],
    "checklist": [
      "Verify ConfigMap or Secret exists in namespace using kubectl get",
      "Check name spelling and keys matching inside describe events",
      "Declare references optional: true if fallback is supported",
      "Confirm target Pod and Configurations share matching namespaces"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "ConfigMap referenced in envFrom does not exist",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Secret referenced in envFrom does not exist",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Referenced key (e.g. database-password) is missing in Secret",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "CreateContainerConfigError: Quick Fix Guide for Kubernetes.",
  "seoDescription": "Fix CreateContainerConfigError fast. This Kubernetes debugging guide explains the root cause, shows common mistakes, and provides tested solutions with."
};

export default errorData;
