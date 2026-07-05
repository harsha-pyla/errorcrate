import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "tls-handshake-timeout",
  "name": "TLS handshake timeout",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Network",
    "TLS Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a secure TLS connection fails to finalize the handshake phase within the default connection timeout window.",
  "meanDescription": "A 'TLS handshake timeout' error is raised by clients or server gateways when the network layer fails to complete the TLS/SSL cryptographic negotiation phase within a set duration. In Kubernetes v1.36 clusters, this typically happens when clients connect to the control plane API server over congested network links, when firewalls intercept and drop TLS packets, or when the API server is heavily loaded, failing to negotiate cipher parameters in time.",
  "causes": [
    "Network packet loss or congestion: High network latency or drop rates prevent the client and API server from exchanging key agreements.",
    "Overloaded API server control plane: The control plane CPU is throttled, delaying cryptography operations and triggering client-side timeouts.",
    "MTU size mismatches: Incorrect Maximum Transmission Unit (MTU) sizes in the container network interface (CNI) cause fragmented packets to be silently dropped."
  ],
  "solutions": [
    "Identify MTU network constraints: Verify and match MTU configurations across CNI configurations (e.g. Calico or AWS VPC CNI).",
    "Increase client connection timeout: Prepend client command parameters with increased timeout settings ('--request-timeout').",
    "Audit API server resources load: Check control plane resource metrics to verify CPU utilization levels."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Unable to connect to the server: net/http: TLS handshake timeout",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing API server over high latency connection\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Unable to connect to the server: net/http: TLS handshake timeout\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Calico MTU Configuration",
      "language": "yaml",
      "description": "Adjust the MTU size inside the CNI (e.g. Calico) configuration to prevent network packet fragmentation drops in Kubernetes v1.36.",
      "code": "apiVersion: projectcalico.org/v3\nkind: IPPool\nmetadata:\n  name: default-ipv4-ippool\nspec:\n  cidr: 192.168.0.0/16\n  ipipMode: Always\n  # Configure MTU size to account for VXLAN/IPIP tunnel encapsulation headers (e.g. 1440 instead of 1500)\n  blockSize: 26\n  nodeSelector: all()\n---\n# Verify config map MTU settings\napiVersion: v1\nkind: ConfigMap\nmetadata:\n  name: calico-config\n  namespace: kube-system\ndata:\n  veth_mtu: \"1440\""
    },
    {
      "name": "Kubectl Timeout Override",
      "language": "bash",
      "description": "Override request timeout boundaries inside client commands explicitly.",
      "code": "# Request timeout extension to give TLS negotiation enough window\n$ kubectl get pods --request-timeout=\"30s\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect network interface MTU configurations directly on Linux nodes.",
      "code": "# 1. List active network interfaces and MTU values\nip link show\n\n# 2. Test MTU size restrictions by pinging with don't-fragment flag\nping -M do -s 1472 -c 3 192.168.1.100"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Query MTU values on Windows server nodes.",
      "code": "# List Windows network adapter MTU sizes\nGet-NetIPInterface | Select-Object InterfaceAlias, NlMtu"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Exclude local cluster traffic from proxy routes using no_proxy variables.",
      "code": "# Exclude Kubernetes server domain from proxy routes\nexport no_proxy=\"192.168.1.100,localhost,127.0.0.1,.local\""
    }
  ],
  "commonMistakes": [
    "Setting MTU configurations to values larger than the physical host network card supports, triggering silent packet drops during SSL handshakes.",
    "Neglecting to scale API server resources during high concurrent user activities."
  ],
  "prevention": [
    "Adopt automated MTU detection systems within the cluster CNI configuration.",
    "Establish load balancers in front of API servers to distribute TLS termination loads."
  ],
  "faq": [
    {
      "question": "What causes a TLS handshake timeout in Kubernetes?",
      "answer": "This means the TCP connection was established, but the client and API server couldn't finalize the secure TLS handshake within the timeout limit (default is often 10 seconds). This is usually caused by network congestion, MTU size mismatches, or an overloaded API server."
    },
    {
      "question": "How does CNI MTU mismatch cause TLS timeouts?",
      "answer": "If your CNI network interface MTU is set larger than the physical network supports (e.g. 1500 on CNI vs 1420 on host VPN tunnel), large TLS packets (which contain key credentials) will be fragmented. If firewalls drop fragmented packets, the handshake hangs and times out."
    },
    {
      "question": "How do I troubleshoot an overloaded API server?",
      "answer": "Check the control plane node's CPU usage. TLS handshakes require high CPU cryptographic operations. If the API server is throttled, it won't negotiate ciphers fast enough, causing client-side TLS timeouts."
    },
    {
      "question": "How do I bypass proxy-induced TLS handshake timeouts on macOS?",
      "answer": "Ensure that local addresses (like ClusterIP ranges or local API endpoints) are added to the 'no_proxy' environment variable to prevent proxy servers from intercepting and delaying the TLS packets."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Network MTU Troubleshooting guide",
      "url": "https://kubernetes.io/docs/tasks/administer-cluster/network-policy-mtu/"
    }
  ],
  "relatedErrors": [
    "kubectl-unable-to-connect-to-the-server"
  ],
  "quickFix": {
    "causes": [
      "Fragmented network packets are dropped due to CNI MTU size mismatches",
      "Control plane API server CPU throttling delays SSL cryptographic handshakes",
      "System proxy routes intercept and delay TLS packet exchanges"
    ],
    "checklist": [
      "Check MTU settings inside CNI and nodes link profiles",
      "Exempt cluster host IP inside the no_proxy variable settings",
      "Run kubectl queries with --request-timeout=30s parameters",
      "Monitor API server CPU allocation metrics"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "CNI network MTU packet size mismatch (fragmentation drop)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "API server CPU throttling (crypto negotiation delay)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Network proxy or firewall packet inspections delay",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix TLS handshake timeout Fast — Kubernetes Solutions Guide",
  "seoDescription": "Fix TLS handshake timeout fast. This Kubernetes debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world."
};

export default errorData;
