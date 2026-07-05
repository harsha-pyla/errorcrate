import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "dial-tcp-timeout",
  "name": "Dial TCP timeout",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Network",
    "Connection Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a network socket fails to establish a three-way TCP handshake within the connection timeout limit.",
  "meanDescription": "A 'dial tcp: i/o timeout' error is raised when a client attempts to open a TCP connection to a server, but receives no response (SYN-ACK) before the connection context expires. In Kubernetes v1.36 clusters, this typically happens when Pods attempt to communicate across nodes while CNI vxlan/geneve encapsulation packets are blocked by security group firewalls, when kube-proxy rules fail to apply, or when CoreDNS fails to resolve target service IP routes.",
  "causes": [
    "Security group port blocks: AWS VPC Security Groups or local firewalls block internal network traffic on CNI overlay ports (like UDP 4789 for VXLAN or UDP 6081 for Geneve).",
    "Kube-proxy routing failures: The local kube-proxy daemon fails to synchronize iptables or IPVS rules, causing traffic routed to ClusterIPs to drop silently.",
    "Node routing partitions: Underlying cloud network routes between worker subnet groups are severed or misconfigured."
  ],
  "solutions": [
    "Audit CNI overlay firewall rules: Ensure security groups permit UDP ports 4789 (VXLAN) or 6081 (Geneve) between all cluster worker nodes.",
    "Verify kube-proxy health: Check kube-proxy pod logs in the kube-system namespace and confirm iptables rules are active.",
    "Test raw IP routing: Use 'ping' or 'traceroute' directly between node IPs to confirm subnet routing paths are clear."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "dial tcp 10.96.0.10:53: i/o timeout",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Accessing CoreDNS service from client container\ncurl -m 5 http://10.96.0.10:53",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "dial tcp 10.96.0.10:53: i/o timeout\n$ echo $?\n28",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Kube-Proxy Event Inspect",
      "language": "bash",
      "description": "Verify kube-proxy synchronization state events and inspect iptables rules maps.",
      "code": "# 1. Inspect kube-proxy pods logs\n$ kubectl logs -n kube-system daemonset/kube-proxy --tail=100\n\n# 2. Confirm rules are synchronized without error"
    },
    {
      "name": "Security Group Rules",
      "language": "text",
      "description": "Ensure VPC Security Groups authorize overlay port traffic between worker nodes.",
      "code": "# Type: Custom UDP\n# Port Range: 4789 (for VXLAN CNI overlay tunnel)\n# Source: worker-nodes-security-group\n# Description: Permit container network overlay tunnels"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect Linux host iptables rules tables directly from node shells.",
      "code": "# 1. List nat table routing rules\nsudo iptables -t nat -L -n -v\n\n# 2. Probe specific port route with timeout limit\nnc -w 5 -zv 10.96.0.10 53"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Disable Windows Defender firewall blocks on overlay adapters inside Windows nodes.",
      "code": "# Add Windows Firewall permit rules for overlay networks ports\nNew-NetFirewallRule -DisplayName \"K8s Overlay UDP\" -Direction Inbound -Protocol UDP -LocalPort 4789 -Action Allow"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Verify network routing paths using route commands.",
      "code": "route -n get 10.96.0.10"
    }
  ],
  "commonMistakes": [
    "Configuring custom firewall profiles on worker nodes that drop UDP traffic, blocking VXLAN container tunnels.",
    "Using public IP targets inside network policies instead of ClusterIP names."
  ],
  "prevention": [
    "Adopt Network Policies analyzers to verify intra-cluster security rules.",
    "Adopt health checker agents (like goldpinger) to monitor cross-node pod routing paths continuously."
  ],
  "faq": [
    {
      "question": "What is a dial TCP timeout?",
      "answer": "This means a TCP connection request (SYN packet) was sent, but the client received no reply at all, causing the connection attempt to time out. This is a routing or firewall issue."
    },
    {
      "question": "How does CNI VXLAN port blocking cause this?",
      "answer": "CNIs like Calico, Flannel, or Cilium route pod-to-pod traffic across nodes by encapsulating it in UDP packets. If your cloud security groups block UDP port 4789 (VXLAN) or UDP 6081 (Geneve) between worker nodes, cross-node pod traffic will time out."
    },
    {
      "question": "How do I troubleshoot kube-proxy iptables issues?",
      "answer": "Check if kube-proxy is running: 'kubectl get pods -n kube-system -l k8s-app=kube-proxy'. If it is running, check the logs. You can inspect the generated NAT rules on a node using: 'sudo iptables -t nat -L -n -v'."
    },
    {
      "question": "How do I test TCP ports directly?",
      "answer": "Use curl or nc: 'nc -w 5 -zv <target-ip> <port>'. The '-w 5' sets a 5-second timeout, helping you quickly identify connection timeout behaviors."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Troubleshoot Clusters guide",
      "url": "https://kubernetes.io/docs/tasks/debug/debug-cluster/"
    }
  ],
  "relatedErrors": [
    "connection-refused"
  ],
  "quickFix": {
    "causes": [
      "VPC Security Groups block VXLAN (UDP 4789) or Geneve (UDP 6081) ports between nodes",
      "Kube-proxy fails to synchronize iptables/IPVS routing tables",
      "Underlying cloud provider subnet routes are broken"
    ],
    "checklist": [
      "Confirm security groups permit CNI UDP tunnel ports",
      "Check kube-proxy daemon logs for sync errors",
      "Test socket routes using nc -w 5 -zv",
      "Confirm nodes share common route pathways"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Security groups blocking CNI overlay ports (UDP 4789 / 6081)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Kube-proxy sync failures (missing iptables/IPVS rules)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Cloud provider subnet routing misconfigurations",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Dial TCP timeout Explained: Causes, Fixes & Prevention",
  "seoDescription": "Complete guide to fixing Dial TCP timeout in Kubernetes. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
