import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "temporary-failure-in-name-resolution",
  "name": "Temporary failure in name resolution",
  "category": "linux",
  "badges": [
    "Linux Network",
    "DNS Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the system cannot resolve a domain name to an IP address due to missing, corrupted, or unreachable DNS configurations.",
  "meanDescription": "The 'Temporary failure in name resolution' error (EAI_AGAIN) is returned by the name resolution subsystem (getaddrinfo) when it cannot map a domain name (like github.com) to an IP address. This indicates that the system DNS configuration files (e.g. '/etc/resolv.conf') are missing valid nameservers, local networking is offline, or the upstream DNS servers are unreachable.",
  "causes": [
    "Missing or incorrect DNS nameservers: The '/etc/resolv.conf' configuration lacks working name servers.",
    "Unreachable network interfaces: The local network interface is down, blocking outward internet routing.",
    "Docker DNS resolution limits: Containers running on networks that do not propagate DNS servers properly, leaving them with blank resolvers."
  ],
  "solutions": [
    "Add public DNS nameservers: Populate '/etc/resolv.conf' with reliable nameservers (like Google DNS '8.8.8.8' or Cloudflare '1.1.1.1').",
    "Verify local interfaces: Restart the network manager interface using systemctl (e.g. 'sudo systemctl restart NetworkManager').",
    "Set Docker daemon DNS fallback: Define custom DNS arrays in '/etc/docker/daemon.json' to ensure containers inherit valid resolvers."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "ping: github.com: Temporary failure in name resolution",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to ping a website when resolver configs are blank\nping github.com",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "ping: github.com: Temporary failure in name resolution\n$ echo $?\n2",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Setting Up Static Resolver",
      "language": "bash",
      "description": "Manually seed active DNS resolvers inside the resolv.conf file using administrative privileges.",
      "code": "# 1. Write public nameservers to resolv.conf (using pipe tee to escape redirects limits)\n$ echo -e \"nameserver 8.8.8.8\\nnameserver 1.1.1.1\" | sudo tee /etc/resolv.conf\n\n# 2. Test resolution with nslookup query\n$ nslookup github.com\nServer:         8.8.8.8\nAddress:        8.8.8.8#53\n\nNon-authoritative answer:\nName:   github.com\nAddress: 140.82.121.4"
    },
    {
      "name": "Disabling WSL Auto DNS",
      "language": "ini",
      "description": "Configure WSL to stop auto-generating resolv.conf with internal hypervisor addresses, allowing static overrides.",
      "code": "# 1. Append options to /etc/wsl.conf\n[network]\ngenerateResolvConf = false\n\n# 2. Delete existing symbolic link\n# $ sudo rm /etc/resolv.conf\n\n# 3. Create static resolv.conf with 'nameserver 8.8.8.8'"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Trace raw name servers query routing using dig utility tools.",
      "code": "dig github.com +short"
    },
    {
      "name": "Windows (WSL)",
      "language": "powershell",
      "description": "Restart WSL subsystem inside Windows terminals to flush host bridge conflicts.",
      "code": "# Shutdown WSL VM environment\nwsl --shutdown"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Clear the local system DNS caching tables on macOS.",
      "code": "sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder"
    }
  ],
  "commonMistakes": [
    "Editing `/etc/resolv.conf` directly on systems where dynamic managers (like `resolvconf` or `systemd-resolved`) run, which silently wipes manual changes on next reboot.",
    "Forgetting that firewall blocks on egress port 53 (UDP/TCP) will trigger name resolution failures even if nameservers are configured correctly."
  ],
  "prevention": [
    "Configure DNS addresses directly inside main interface setups (like Netplan files `/etc/netplan/*.yaml`).",
    "Monitor network resolver access status under automated server health checks."
  ],
  "faq": [
    {
      "question": "What does 'Temporary failure in name resolution' mean?",
      "answer": "It means the operating system's DNS lookup tool cannot contact a DNS server to translate a domain name into an IP address."
    },
    {
      "question": "How do I fix /etc/resolv.conf changes getting overwritten?",
      "answer": "In modern Linux systems, NetworkManager or systemd-resolved manages resolv.conf. To prevent overrides, disable systemd-resolved or configure DNS parameters directly in Netplan or NetworkManager configurations."
    },
    {
      "question": "How do I troubleshoot DNS queries?",
      "answer": "Use 'dig google.com' or 'nslookup google.com' to test if a specific DNS server resolves names successfully."
    },
    {
      "question": "How do I resolve DNS blocks in WSL?",
      "answer": "Add '[network]\\ngenerateResolvConf = false' to '/etc/wsl.conf', delete '/etc/resolv.conf' (which is a symlink), and create a new static file with 'nameserver 8.8.8.8'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Systemd-resolved DNS guide",
      "url": "https://www.freedesktop.org/software/systemd/man/latest/systemd-resolved.service.html"
    }
  ],
  "relatedErrors": [
    "connection-refused"
  ],
  "quickFix": {
    "causes": [
      "DNS configuration file /etc/resolv.conf is empty or corrupt",
      "Active network interfaces are offline, blocking routing",
      "WSL environment auto-generated resolver is out of sync"
    ],
    "checklist": [
      "Add nameserver 8.8.8.8 to /etc/resolv.conf",
      "Disable auto DNS generation in wsl.conf if in WSL",
      "Verify connection using ping or nslookup",
      "Check port 53 egress firewall permissions"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Corrupt or blank /etc/resolv.conf",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Network routing interface offline (down)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Docker container network bridge DNS mismatch",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Temporary failure in name resolution Explained: Causes.",
  "seoDescription": "Fix Temporary failure in name resolution fast. This Linux debugging guide explains the root cause, shows common mistakes, and provides tested solutions with."
};

export default errorData;
