import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "kubectl-unable-to-connect-to-the-server",
  "name": "kubectl Unable to connect to the server",
  "category": "kubernetes",
  "badges": [
    "Kubernetes CLI",
    "Connection Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the kubectl command-line tool cannot establish a network connection with the Kubernetes API server.",
  "meanDescription": "The 'kubectl Unable to connect to the server' error occurs when the client CLI tool fails to connect to the API server address specified in the active Kubeconfig profile. In Kubernetes v1.36 setups, this typically stems from incorrect context configs, expired client certificates, firewalls or security groups blocking port 6443, or the control plane API server process being offline or restarting.",
  "causes": [
    "Misconfigured Kubeconfig context: The active configuration file references a wrong cluster server URL or wrong port (e.g. localhost instead of remote gateway IP).",
    "Firewall or security group block: Network security gates block ports like 6443 (default API server port) or 8443 on the remote cluster node.",
    "Expired or invalid client certificates: The client certificate token configured in kubeconfig has expired, or was revoked during user permission updates."
  ],
  "solutions": [
    "Verify active kubeconfig context: Run 'kubectl config view' or inspect the '~/.kube/config' file to confirm the host URL.",
    "Check cluster port availability: Use 'nc' or 'telnet' on the server IP and port 6443 to test basic socket routing.",
    "Refresh control plane tokens: Authenticate with your cloud provider (e.g. run 'aws eks update-kubeconfig' or 'gcloud container clusters get-credentials') to renew access credentials."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Unable to connect to the server: dial tcp 192.168.1.100:6443: connect: connection refused",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to get cluster nodes list\nkubectl get nodes",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Unable to connect to the server: dial tcp 192.168.1.100:6443: connect: connection refused",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Kubeconfig Verification",
      "language": "bash",
      "description": "Inspect active contexts, cluster lists, and API server endpoints paths.",
      "code": "# 1. Print current context in use\nkubectl config current-context\n\n# 2. View full config configurations\nkubectl config view\n\n# 3. Force connection check specifying kubeconfig path\nkubectl --kubeconfig=$HOME/.kube/config cluster-info"
    },
    {
      "name": "Cloud Auth Refresh",
      "language": "bash",
      "description": "Refresh control plane authentication certificates using cloud provider CLI tools.",
      "code": "# For AWS EKS\n$ aws eks update-kubeconfig --region us-east-1 --name production-cluster\n\n# For Google GKE\n$ gcloud container clusters get-credentials production-cluster --region us-central1\n\n# For Azure AKS\n$ az aks get-credentials --resource-group prod-rg --name production-cluster"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Diagnose network socket routes to API server port 6443 from client machines.",
      "code": "# Test TCP connection to server endpoint\nnc -zv 192.168.1.100 6443"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check connection ports and active environment parameters in Windows shells.",
      "code": "# 1. Test TCP connection port on Windows\nTest-NetConnection -ComputerName 192.168.1.100 -Port 6443\n\n# 2. Check env variables overrides\n$env:KUBECONFIG"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Clear macOS proxy environment values that might intercept kubectl requests.",
      "code": "# Clear proxy configurations temporarily to test direct routing\nunset http_proxy https_proxy"
    }
  ],
  "commonMistakes": [
    "Assuming kubectl defaults to local settings when the `KUBECONFIG` environment variable is set to a stale or invalid path location.",
    "Attempting to query public cluster endpoints while disconnected from the organization's corporate VPN, triggering connection timeouts."
  ],
  "prevention": [
    "Adopt helper extensions (like kubectx or fzf context filters) to verify cluster destination contexts before executing commands.",
    "Configure API server gateways behind secure load balancers with redundant route groups."
  ],
  "faq": [
    {
      "question": "What causes 'kubectl Unable to connect to the server'?",
      "answer": "This means kubectl cannot reach the cluster API server. It could be due to a wrong server URL in your Kubeconfig, network firewalls blocking port 6443, or the API server being down."
    },
    {
      "question": "How do I verify which server URL kubectl is trying to contact?",
      "answer": "Run 'kubectl config view' to inspect your active configuration, or print the current context using 'kubectl config current-context'."
    },
    {
      "question": "How do I test if the API server port is open?",
      "answer": "Run a netcat test: 'nc -zv <server-ip> 6443'. If it says connection refused or timed out, check your network security groups, firewalls, or VPN settings."
    },
    {
      "question": "How do I refresh expired tokens for cloud clusters (AWS, Azure, GCP)?",
      "answer": "Re-authenticate with your cloud CLI to rebuild the token (e.g. 'aws eks update-kubeconfig --name <cluster>' or 'az aks get-credentials --resource-group <group> --name <cluster>')."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Organizing Cluster Access Using Kubeconfig Files guide",
      "url": "https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/"
    }
  ],
  "relatedErrors": [
    "unauthorized"
  ],
  "quickFix": {
    "causes": [
      "Target server URL or port is misconfigured inside kubeconfig contexts",
      "Cluster control plane port 6443 is blocked by security firewalls",
      "Local terminal shell proxy settings intercepting HTTP socket calls"
    ],
    "checklist": [
      "Verify target server IP using kubectl config view",
      "Ping port 6443 using nc or Test-NetConnection",
      "Re-authenticate with cloud CLI (aws eks / gcloud)",
      "Unset proxy variables (http_proxy/https_proxy)"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "API server port 6443 blocked by security groups/firewalls",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Inactive context or typo in kubeconfig server URL",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Expired developer client certificate auth tokens",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix kubectl Unable to connect to the server in Kubernetes —.",
  "seoDescription": "Encountering kubectl Unable to connect to the server in Kubernetes? Discover what triggers this error, how to diagnose it, and the best practices to fix and."
};

export default errorData;
