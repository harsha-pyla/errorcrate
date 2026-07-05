import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "certificate-has-expired",
  "name": "Certificate has expired",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Security",
    "TLS Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the cluster client certificates or control plane component certificates exceed their expiration timestamps.",
  "meanDescription": "A 'Certificate has expired' (or x509: certificate has expired) error is raised when TLS verification fails because the current system time is past the 'NotAfter' validity timestamp of the certificate. In Kubernetes v1.36 clusters, certificates are used extensively for control plane communications (kubelet-to-apiserver, apiserver-to-etcd, etc.) and client authentication. Standard installer tools (like kubeadm) configure control plane certificates with a 1-year expiration period, requiring periodic renewal.",
  "causes": [
    "Expired control plane certificates: Cluster certificates (apiserver.crt, etcd-peer.crt) have not been renewed and exceed their 1-year lease limit.",
    "Outdated Kubelet client certificate auto-renew: The Kubelet fails to auto-rotate its client certificates ('client-kubelet.pem') because bootstrapping permissions are blocked.",
    "Clock drift on nodes: The virtual machine host system clock drifts significantly, falsely flagging active certificates as expired or not yet valid."
  ],
  "solutions": [
    "Renew control plane certificates using Kubeadm: Run 'kubeadm certs renew all' on control plane nodes to reset all leases.",
    "Verify current certificates validity dates: Use 'kubeadm certs check-expiration' to print remaining validity days.",
    "Configure Kubelet cert rotation: Ensure 'rotate-server-certificates: true' is enabled inside the Kubelet configuration profile."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Unable to connect to the server: x509: certificate has expired or is not yet valid: current time 2026-06-29T10:00:00Z is after 2026-06-28T09:00:00Z",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing API server after certificates expiration\nkubectl get nodes",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Unable to connect to the server: x509: certificate has expired or is not yet valid: current time 2026-06-29T10:00:00Z is after 2026-06-28T09:00:00Z",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Kubeadm Check & Renew",
      "language": "bash",
      "description": "Verify and renew all control plane certificates using Kubeadm utility tools in Kubernetes v1.36.",
      "code": "# 1. Check expiration of all cluster certs\n$ sudo kubeadm certs check-expiration\n\n# 2. Renew all certificates dynamically\n$ sudo kubeadm certs renew all\n\n# 3. Copy updated admin config to user config directory\n$ sudo cp /etc/kubernetes/admin.conf $HOME/.kube/config\n$ sudo chown $(id -u):$(id -g) $HOME/.kube/config"
    },
    {
      "name": "Kubelet Auto-Rotation Config",
      "language": "yaml",
      "description": "Configure Kubelet server certificate rotation parameters inside config profiles.",
      "code": "apiVersion: kubelet.config.k8s.io/v1beta1\nkind: KubeletConfiguration\n# Enable dynamic client and server cert rotation\nrotateCertificates: true\nrotateServerCertificates: true"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Examine the validity window of raw certificate files using OpenSSL commands.",
      "code": "# 1. Inspect api server certificate expiry date\nopenssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -enddate\n\n# 2. Restart control plane container runtime components to load new certificates\nsudo systemctl restart containerd"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Query certificates validity windows inside Windows node shell.",
      "code": "# Get certificates expiry details on Windows node\nGet-ChildItem -Path Cert:\\LocalMachine\\My | Select-Object Subject, NotAfter"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify certificates status.",
      "code": "kubectl config view"
    }
  ],
  "commonMistakes": [
    "Renewing certificates using Kubeadm but forgetting to restart control plane static pods (kube-apiserver, kube-controller-manager, etcd), leaving the memory processes using the expired certificates.",
    "Updating control plane certificates without replacing the user's `~/.kube/config` file, locking clients out with Unauthorized or expired warnings."
  ],
  "prevention": [
    "Configure automated cron tasks or configure control plane cert automation scripts to run renews yearly.",
    "Integrate monitoring checks to alert operations teams when certificate validity drops below 30 days."
  ],
  "faq": [
    {
      "question": "What causes a 'Certificate has expired' error in Kubernetes?",
      "answer": "Kubernetes control plane certificates (created by tools like kubeadm) expire after 1 year by default. If they are not renewed, components like the API server or etcd will refuse to communicate with each other, halting the cluster."
    },
    {
      "question": "How do I check when my certificates expire?",
      "answer": "If your cluster was built with kubeadm, run 'kubeadm certs check-expiration' on the control plane node. For raw files, use OpenSSL: 'openssl x509 -in /etc/kubernetes/pki/apiserver.crt -noout -text | grep Validity -A 2'."
    },
    {
      "question": "How do I renew expired kubeadm certificates?",
      "answer": "Log into the control plane node and run: 'sudo kubeadm certs renew all'. After renewing, you must restart the control plane pods (kube-apiserver, kube-controller-manager, kube-scheduler, etcd) to load the new certificates."
    },
    {
      "question": "Why do nodes fail to auto-rotate client certificates?",
      "answer": "Ensure that Kubelet certificate rotation is enabled in your Kubelet config ('rotate-certificates: true') and that the cluster has an active signer (like kube-controller-manager) capable of auto-approving Kubelet CSRs (Certificate Signing Requests)."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Certificate Management with Kubeadm guide",
      "url": "https://kubernetes.io/docs/tasks/administer-cluster/kubeadm/kubeadm-certs/"
    }
  ],
  "relatedErrors": [
    "x509-certificate-signed-by-unknown-authority"
  ],
  "quickFix": {
    "causes": [
      "Control plane certs exceed their default 1-year lifetime limits",
      "Kubelet client cert rotation is blocked by missing RBAC credentials",
      "Worker host clock drift flags active certificates as expired"
    ],
    "checklist": [
      "Check cert expirations using kubeadm certs check-expiration",
      "Renew all certificates: kubeadm certs renew all",
      "Replace local user ~/.kube/config files with fresh admin configurations",
      "Restart API server, etcd, and controller-manager static pods"
    ],
    "estimatedTime": "5 minutes"
  },
  "causesTable": [
    {
      "cause": "Control plane certificates exceed their 1-year lifetime (standard kubeadm setup)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Clock drift on host nodes causing premature certificate invalidation",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Kubelet client certificate auto-rotation fails (RBAC blocks)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Certificate has expired Error: Root Causes & Verified Fixes",
  "seoDescription": "Troubleshoot Certificate has expired in Kubernetes with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error."
};

export default errorData;
