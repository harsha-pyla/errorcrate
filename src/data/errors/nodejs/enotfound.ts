import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "enotfound",
  "name": "ENOTFOUND",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "DNS lookup failed for the specified domain name.",
  "meanDescription": "ENOTFOUND stands for 'Entry Not Found'. In Node.js networking, it indicates that a DNS lookup (getaddrinfo) failed to resolve the given hostname into an IP address. This occurs if there is a typo in the hostname, if your DNS server is offline, or if you lack internet connectivity.",
  "causes": [
    "Hostname Typos: Providing paths or protocols in the hostname query (e.g. 'http://api.com' instead of 'api.com').",
    "Network Offline: Local internet or container DNS resolvers are offline.",
    "Missing Host Mapping: Querying custom local hostnames without defining them in the /etc/hosts file."
  ],
  "solutions": [
    "Sanitize Hostnames: Strip protocols and URL paths from destination domains.",
    "Verify Internet Connection: Test network resolution (e.g. ping google.com).",
    "Map Hosts: Edit the local operating system's hosts file to map development domain strings."
  ],
  "example": {
    "title": "ENOTFOUND DNS Resolution Failure",
    "code": "const dns = require('dns');\n\n// Resolving a non-existent domain name\ndns.lookup('non-existent-domain.xyz', (err, address) => {\n  if (err && err.code === 'ENOTFOUND') {\n    console.error('DNS Lookup failed: Domain not found.');\n  }\n});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Client Query",
    "code": "const http = require('http');\nhttp.get('http://fake-domain-123.com');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: getaddrinfo ENOTFOUND fake-domain-123.com\n    at GetAddrInfoReqWrap.onlookup (node:dns:107:26) {\n  errno: -3008,\n  code: 'ENOTFOUND',\n  syscall: 'getaddrinfo',\n  hostname: 'fake-domain-123.com'\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Route DNS Catch",
      "language": "javascript",
      "description": "Handling downstream DNS resolving failures in an Express controller.",
      "code": "app.get('/service', async (req, res, next) => {\n  try {\n    await axios.get('https://invalid-api-domain.com');\n  } catch (err) {\n    if (err.code === 'ENOTFOUND') {\n      return res.status(502).json({ error: 'Upstream gateway DNS resolution failed.' });\n    }\n    next(err);\n  }\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx DNS Resolver Setup",
      "language": "nginx",
      "description": "Configuring explicit DNS resolvers inside Nginx to prevent routing failures.",
      "code": "resolver 8.8.8.8 8.8.4.4 valid=300s;\nresolver_timeout 5s;"
    }
  ],
  "commonMistakes": [
    "Passing the protocol (like http://) inside host lookup parameters (e.g. dns.lookup('http://google.com') will throw ENOTFOUND; pass 'google.com' instead).",
    "Assuming local containers can resolve hostnames without adding Docker service networks."
  ],
  "prevention": [
    "Validate URL syntax configurations dynamically before parsing hostnames.",
    "Monitor DNS health queries."
  ],
  "faq": [
    {
      "question": "What does ENOTFOUND mean?",
      "answer": "It stands for Error Not Found. In the context of system networking, it indicates that the DNS server could not resolve the requested hostname into a valid IP address."
    },
    {
      "question": "Why does dns.lookup('http://google.com') throw ENOTFOUND?",
      "answer": "DNS lookups resolve pure hostnames (like 'google.com'). They do not understand application layer protocol prefixes (like 'http://' or 'https://') or path suffixes. Pass only the host."
    },
    {
      "question": "How do I add custom local hostname mappings?",
      "answer": "Add mapping entries to your operating system's hosts file (located at `/etc/hosts` on Linux/macOS, or `C:\\Windows\\System32\\drivers\\etc\\hosts` on Windows)."
    },
    {
      "question": "Can I set a custom DNS server in Node.js?",
      "answer": "Yes. You can use the `dns.setServers()` method to configure specific DNS servers (e.g., Google DNS `8.8.8.8`) for resolution."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js DNS Module Docs",
      "url": "https://nodejs.org/api/dns.html"
    }
  ],
  "relatedErrors": [
    "econnrefused",
    "etimedout"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Hostname Typos",
      "Network Offline",
      "Missing Host Mapping"
    ],
    "checklist": [
      "Sanitize Hostnames",
      "Verify Internet Connection",
      "Map Hosts"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Hostname Typos",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Network Offline",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing Host Mapping",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "ENOTFOUND: Quick Fix Guide for Node.js Developers",
  "seoDescription": "Fix ENOTFOUND fast. This Node.js debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
