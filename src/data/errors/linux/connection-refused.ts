import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "connection-refused",
  "name": "Connection refused",
  "category": "linux",
  "badges": [
    "Linux Network",
    "Socket Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a client attempts to connect to a server port, but the host rejects the connection because no service is listening or a firewall blocks it.",
  "meanDescription": "The 'Connection refused' error is a standard POSIX system error associated with the error code ECONNREFUSED. It indicates that the operating system kernel on the target machine received the connection request (SYN packet) but actively rejected it by sending a reset (RST) packet. This occurs because no application is listening on the destination port, or the application is bound to localhost (127.0.0.1) instead of public interface IPs (0.0.0.0), or a local firewall (like ufw or iptables) blocks the connection.",
  "causes": [
    "No service listening on port: The target server software (like Nginx, PostgreSQL, or Node) is stopped or failed to start.",
    "Interface binding mismatch: The server application is bound only to the local interface (127.0.0.1), preventing external remote network clients from connecting.",
    "Firewall block rules: Local firewalls (iptables, ufw) or cloud security groups reject incoming TCP handshakes on the target port."
  ],
  "solutions": [
    "Verify target service status: Run 'sudo systemctl status <service_name>' to verify that the service is running.",
    "Update application listening IP: Change the bind address configuration from '127.0.0.1' to '0.0.0.0' to accept connections on all network interfaces.",
    "Open port in firewall: Add ufw or iptables rule overrides to allow incoming TCP traffic (e.g. 'sudo ufw allow 80/tcp')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "curl: (7) Failed to connect to 192.168.1.10 port 8080: Connection refused",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to query a port where no service is listening\ncurl http://localhost:8080",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "curl: (7) Failed to connect to localhost port 8080: Connection refused\n$ echo $?\n7",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Listening Sockets",
      "language": "bash",
      "description": "Inspect which ports and interfaces have active listening sockets bound to them.",
      "code": "# 1. Run socket statistics tool (ss)\n$ sudo ss -tulpn\n\n# Look for port and bind address columns:\n# Netid State  Recv-Q Send-Q Local Address:Port Peer Address:Port Process\n# tcp   LISTEN 0      128    127.0.0.1:8080     0.0.0.0:*        users:((\"node\",pid=12345))\n# Note: Bound only to localhost (127.0.0.1)"
    },
    {
      "name": "UFW Firewall Port Enable",
      "language": "bash",
      "description": "Configure the local UFW firewall to permit traffic on the target application port.",
      "code": "# 1. Check active firewall rule lists\n$ sudo ufw status verbose\n\n# 2. Allow incoming traffic on port 8080\n$ sudo ufw allow 8080/tcp\n\n# 3. Reload rules configuration\n$ sudo ufw reload"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Test connection to a port and check handshake responses.",
      "code": "# Trace raw socket diagnostics using netcat (nc)\nnc -zv 192.168.1.10 8080"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "Accessing WSL services from Windows requires localhost forwarding configuration.",
      "code": "# Add port proxy forwarding in Windows Command Prompt:\n# netsh interface portproxy add v4tov4 listenport=8080 listenaddress=0.0.0.0 connectport=8080 connectaddress=<WSL_IP>"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check port bindings utilizing standard macOS utilities.",
      "code": "sudo lsof -i -P | grep LISTEN"
    }
  ],
  "commonMistakes": [
    "Conflating 'Connection refused' (host active reject) with 'Connection timed out' (silent packet drop, indicating firewall or routing drops).",
    "Leaving bind configurations at default `127.0.0.1` inside server configuration files (like pg_hba.conf or nginx.conf) while trying to query them remotely."
  ],
  "prevention": [
    "Bind server apps to `0.0.0.0` or specific network card interface IPs when hosting public web ports.",
    "Verify that deployment scripts check process health states immediately after startups."
  ],
  "faq": [
    {
      "question": "What is ECONNREFUSED?",
      "answer": "ECONNREFUSED is the POSIX system error code indicating that the target host rejected a connection request."
    },
    {
      "question": "How is 'Connection refused' different from 'Connection timed out'?",
      "answer": "'Connection refused' means the target host is reachable but actively rejected the packet (responded with RST). 'Connection timed out' means there was no response at all, usually due to a silent firewall drop or routing issue."
    },
    {
      "question": "How do I list active listening ports in Linux?",
      "answer": "Run 'sudo ss -tulpn' to list all active TCP/UDP ports, along with the process IDs and bind addresses."
    },
    {
      "question": "Why can't I access my server externally?",
      "answer": "Ensure the application is configured to bind to '0.0.0.0' (all interfaces) rather than '127.0.0.1' (local loopback only)."
    }
  ],
  "helpfulResources": [
    {
      "name": "Linux ss utility documentation",
      "url": "https://man7.org/linux/man-pages/man8/ss.8.html"
    }
  ],
  "relatedErrors": [
    "temporary-failure-in-name-resolution"
  ],
  "quickFix": {
    "causes": [
      "No daemon service is running or listening on the target port",
      "Server application is bound only to local loopback (127.0.0.1)",
      "Local firewall (UFW/iptables) rule blocks connections"
    ],
    "checklist": [
      "Check service state using systemctl status",
      "List port bindings using sudo ss -tulpn",
      "Bind service to 0.0.0.0 instead of 127.0.0.1",
      "Open port in firewall: sudo ufw allow <port>"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Target service application is not running",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Server listening only on localhost (127.0.0.1)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Local firewalls (UFW/iptables) block rules",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Connection refused: Quick Fix Guide for Linux Developers",
  "seoDescription": "Connection refused in Linux — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
