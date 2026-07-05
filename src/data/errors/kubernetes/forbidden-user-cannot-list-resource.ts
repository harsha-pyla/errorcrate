import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "forbidden-user-cannot-list-resource",
  "name": "Forbidden: User cannot list resource",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Security",
    "Auth Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the API server rejects a request because the authenticated user lacks the necessary RBAC permissions to execute the action.",
  "meanDescription": "A 'Forbidden: User cannot list resource' (HTTP 403) error is raised by the API server when the client is successfully authenticated, but lacks the necessary Role-Based Access Control (RBAC) permissions (Role, ClusterRole, RoleBinding, or ClusterRoleBinding) to perform the requested verb (like get, list, create, watch) on the specified resource type. In Kubernetes v1.36, RBAC validations are strictly audited.",
  "causes": [
    "Missing Role or ClusterRole permissions: The user or service account has no corresponding Rule authorizing the verb on the resource namespace.",
    "Missing RoleBinding: The Role exists, but has not been bound to the user's name or active group namespace.",
    "Mismatched API group scope: Authorizing resources without specifying their API group namespaces (e.g. listing 'deployments' under group '' instead of 'apps')."
  ],
  "solutions": [
    "Query active authorization: Run 'kubectl auth can-i <verb> <resource>' to test user permissions before running queries.",
    "Define and deploy RBAC Roles: Create a 'Role' or 'ClusterRole' listing the required resources and verbs.",
    "Bind Roles to user accounts: Deploy a 'RoleBinding' or 'ClusterRoleBinding' linking the Role rules to the target username or ServiceAccount."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Error from server (Forbidden): pods is forbidden: User \"developer\" cannot list resource \"pods\" in API group \"\" in the namespace \"default\"",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to list pods using service account without RBAC binds\nkubectl get pods --as=system:serviceaccount:default:app-sa",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Error from server (Forbidden): pods is forbidden: User \"system:serviceaccount:default:app-sa\" cannot list resource \"pods\" in API group \"\" in the namespace \"default\"",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "RBAC Role & Binding",
      "language": "yaml",
      "description": "Create a Role authorizing pods list actions and bind it to a ServiceAccount using a RoleBinding in Kubernetes v1.36.",
      "code": "apiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  namespace: default\n  name: pod-reader\nrules:\n- apiGroups: [\"\"] # Core API group\n  resources: [\"pods\"]\n  verbs: [\"get\", \"list\", \"watch\"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: read-pods-binding\n  namespace: default\nsubjects:\n- kind: ServiceAccount\n  name: app-sa\n  namespace: default\nroleRef:\n  kind: Role\n  name: pod-reader\n  apiGroup: rbac.authorization.k8s.io"
    },
    {
      "name": "Checking Can-I Permissions",
      "language": "bash",
      "description": "Utilize the auth can-i command to verify active authorizations dynamically.",
      "code": "# 1. Check if you can list deployments globally\n$ kubectl auth can-i list deployments --all-namespaces\n\n# 2. Check if a specific service account can list secrets\n$ kubectl auth can-i list secrets --as=system:serviceaccount:default:app-sa"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Trace API server audit events to track forbidden request logs.",
      "code": "# Check API server audit log files for 403 Forbidden events\ngrep -i \"403\" /var/log/kubernetes/audit.log | grep -i \"cannot list\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Validate active user configuration context privileges in Windows.",
      "code": "# Get active context details\nkubectl config get-contexts"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify cluster role bindings list.",
      "code": "kubectl get clusterrolebindings"
    }
  ],
  "commonMistakes": [
    "Leaving `apiGroups` empty when authorizing custom resource definitions (e.g. writing `apiGroups: [\"\"]` to authorize a Prometheus custom resource, which defaults to the core namespace, raising a Forbidden error).",
    "Binding Roles in different namespaces than the target workload ServiceAccount."
  ],
  "prevention": [
    "Apply least-privilege configurations systematically when creating service accounts.",
    "Verify RBAC alignments inside local development environments before deploying upgrades to production."
  ],
  "faq": [
    {
      "question": "What is the difference between Unauthorized and Forbidden?",
      "answer": "Unauthorized (HTTP 401) means the server doesn't know who you are. Forbidden (HTTP 403) means the server successfully verified your identity, but your user account does not have RBAC permissions to perform the requested action."
    },
    {
      "question": "How do I check if my user can perform a specific action?",
      "answer": "Use the 'kubectl auth can-i' command. For example, to check if you can list pods in the current namespace, run: 'kubectl auth can-i list pods'. It returns 'yes' or 'no'."
    },
    {
      "question": "How do I authorize a service account to list pods?",
      "answer": "You must create a Role that grants the 'list' verb on 'pods', and then create a RoleBinding that binds that Role to your ServiceAccount in the target namespace."
    },
    {
      "question": "Why do I get Forbidden for custom resources (CRDs)?",
      "answer": "When granting RBAC for custom resources, you must specify the custom resource's exact API group (e.g. 'apiGroups: [\"monitoring.coreos.com\"]') inside the Role definition. If you leave it empty ('apiGroups: [\"\"]'), the API server assumes the core group and rejects the call."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Using RBAC Authorization guide",
      "url": "https://kubernetes.io/docs/reference/access-authn-authz/rbac/"
    }
  ],
  "relatedErrors": [
    "unauthorized"
  ],
  "quickFix": {
    "causes": [
      "User or ServiceAccount lacks a Role/ClusterRole granting resource permissions",
      "The Role exists but has not been bound to the user name using a RoleBinding",
      "Wrong apiGroups parameter specified for custom resource definitions"
    ],
    "checklist": [
      "Run kubectl auth can-i list <resource> to check permissions",
      "Create Role defining resources and list/get/watch verbs rules",
      "Create RoleBinding mapping Role to ServiceAccount/User target",
      "Ensure apiGroups matches the CRD's API group name exactly"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "User has not been bound to a Role/ClusterRole (missing binding)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing verb (e.g. list, watch) inside the Role rules configuration",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incorrect API group namespace scope (e.g. missing apps group)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Forbidden: User cannot list resource: Complete Kubernetes.",
  "seoDescription": "Resolve Forbidden: User cannot list resource in Kubernetes with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples."
};

export default errorData;
