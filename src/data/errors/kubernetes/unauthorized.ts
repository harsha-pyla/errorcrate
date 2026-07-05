import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unauthorized",
  "name": "Unauthorized",
  "category": "kubernetes",
  "badges": [
    "Kubernetes API",
    "Auth Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the API server rejects a request due to missing, invalid, or expired authentication credentials.",
  "meanDescription": "An 'Unauthorized' (HTTP 401) error is returned by the Kubernetes API server when the client request fails authentication checks. In Kubernetes v1.36 clusters, this indicates that the provided Bearer token, client certificate, or OIDC login token is either malformed, expired, or has not been recognized by the configured authentication provider (like AWS IAM authenticator, GCP auth helper, or OpenID Connect provider).",
  "causes": [
    "Expired cloud token: The temporary IAM credentials token (e.g. from AWS ECR/EKS or Google GKE) has expired (default limit is usually 15 minutes to 1 hour).",
    "Incorrect Kubeconfig credentials mapping: The kubeconfig references a wrong client cert key or points to an outdated token file path.",
    "OIDC integration configuration drift: The OpenID Connect token is rejected because the API server flags or local clock times are out of sync with the identity provider."
  ],
  "solutions": [
    "Refresh provider login: Authenticate using your cloud CLI (e.g. run 'aws eks update-kubeconfig' or 'gcloud container clusters get-credentials') to reset the token.",
    "Check kubeconfig authentication block: Inspect the 'users' section of the kubeconfig file and verify credentials helper scripts are executing successfully.",
    "Synchronize cluster clocks: Ensure target worker/control-plane nodes are synchronized utilizing NTP to prevent token timestamp validity mismatches."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "error: You must be logged in to the server (Unauthorized)",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing API server with expired token credentials\nkubectl get services",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "error: You must be logged in to the server (Unauthorized)\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Kubeconfig User block",
      "language": "yaml",
      "description": "Examine user token credential helpers definitions inside the kubeconfig users array configuration.",
      "code": "apiVersion: v1\nkind: Config\nusers:\n- name: developer-user\n  user:\n    # 1. AWS IAM Authenticator helper block\n    exec:\n      apiVersion: client.authentication.k8s.io/v1beta1\n      command: aws\n      args:\n        - \"eks\"\n        - \"get-token\"\n        - \"--cluster-name\"\n        - \"production-cluster\""
    },
    {
      "name": "Refreshing EKS Credentials",
      "language": "bash",
      "description": "Use cloud CLI utilities to automatically refresh local tokens mappings.",
      "code": "# Force update active user token context\n$ aws eks update-kubeconfig --name production-cluster --region us-west-2"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect API server logs to track token authentication reject events.",
      "code": "# Read API server logs filtering by authentication faults\njournalctl -u kube-apiserver -n 50 | grep -i \"authentication failed\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Reset Windows PowerShell credentials variables configurations.",
      "code": "# Clear potential AWS/GCP session credentials overrides\nRemove-Item Env:\\AWS_ACCESS_KEY_ID -ErrorAction SilentlyContinue\nRemove-Item Env:\\AWS_SECRET_ACCESS_KEY -ErrorAction SilentlyContinue"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify local clock synchronization settings to prevent OIDC expiration check failures.",
      "code": "# Query macOS NTP time sync status\nsypower -c time\n# Or run manual system time check\ndate"
    }
  ],
  "commonMistakes": [
    "Running `kubectl` inside scripts using static hardcoded tokens that were generated temporarily, failing once the token lease duration lapses.",
    "Mismatched context names inside kubeconfig where client usernames point to wrong cluster endpoints."
  ],
  "prevention": [
    "Always rely on dynamic CLI credential helper plugins (`exec` auth) rather than copy-pasting static bearer tokens.",
    "Synchronize cluster nodes using reliable time sync clients (like chrony or systemd-timesyncd)."
  ],
  "faq": [
    {
      "question": "What is the difference between Unauthorized and Forbidden?",
      "answer": "Unauthorized (HTTP 401) means the API server does not know who you are (your credentials are missing or expired). Forbidden (HTTP 403) means you are successfully authenticated, but you do not have RBAC permissions to perform the requested action."
    },
    {
      "question": "How do I fix 'Unauthorized' when running kubectl commands?",
      "answer": "This is almost always due to an expired session token. If you are on a cloud-managed Kubernetes cluster (EKS, GKE, AKS), run the cloud CLI login commands again to refresh your token."
    },
    {
      "question": "Why does clock drift cause this error?",
      "answer": "OIDC tokens contain a 'not before' (nbf) and 'expiration' (exp) timestamp. If the clocks on your worker nodes or local machine drift by even a few minutes compared to the OIDC provider, the API server will reject the token as invalid or not yet active."
    },
    {
      "question": "How do I troubleshoot webhook authentication failures?",
      "answer": "If you use Webhook Token Authentication, the API server sends a TokenReview request to the webhook. Ensure the webhook server is reachable and configured with the correct shared keys."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Authenticating guide",
      "url": "https://kubernetes.io/docs/reference/access-authn-authz/authentication/"
    }
  ],
  "relatedErrors": [
    "kubectl-unable-to-connect-to-the-server"
  ],
  "quickFix": {
    "causes": [
      "Temporary cloud provider CLI session access token has expired",
      "Kubeconfig user settings reference stale credentials helper configurations",
      "Clock drift on cluster nodes causes identity token invalidations"
    ],
    "checklist": [
      "Run cloud login commands (aws eks update-kubeconfig)",
      "Check client exec helper args inside kubeconfig",
      "Check time synchronization on nodes (NTP checks)",
      "Verify authorization backend server availability"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Expired cloud provider access token (timeout exceeded)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Stale or misconfigured credential files in user's home folder",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "OIDC identity provider token verification failure (clock drift)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Unauthorized: Complete Kubernetes Troubleshooting Guide",
  "seoDescription": "Encountering Unauthorized in Kubernetes? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
