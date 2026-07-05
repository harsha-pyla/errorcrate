import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "econnrefused",
  "name": "ECONNREFUSED",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The target machine actively refused the connection attempt.",
  "meanDescription": "ECONNREFUSED stands for 'Connection Refused'. It indicates that Node.js attempted to establish a TCP connection to a specific port and IP address, but the target machine actively rejected the request. This occurs when there is no application listening on that port, or when system-level firewalls and network routing rules block socket requests.",
  "causes": [
    "Target Service Offline: The database, cache, or external microservice is not running.",
    "Wrong Port Configuration: The code is querying the wrong port (e.g., hitting port 3000 instead of 8080).",
    "Docker Localhost Isolation: Querying 'localhost' inside a Docker container to hit a database running on the host machine.",
    "Firewall Blocking: Security groups, firewalls, or routing tables are dropping/refusing connection packages."
  ],
  "solutions": [
    "Verify Service Status: Ensure the target service (Redis, PostgreSQL, MongoDB, etc.) is online and running.",
    "Double-Check Ports and Hostnames: Verify connection parameters in environment variables.",
    "Configure Docker Networks: Use container service names or host.docker.internal for container-to-host queries.",
    "Inspect Firewall Rules: Ensure that the target port is open for incoming connections from your app server."
  ],
  "example": {
    "title": "ECONNREFUSED Connection Refused",
    "code": "const net = require('net');\n\n// Attempting to connect to an offline local port\nconst client = net.createConnection({ port: 9999, host: 'localhost' });\nclient.on('error', (err) => {\n  if (err.code === 'ECONNREFUSED') {\n    console.error('Connection refused. Is the server running on port 9999?');\n  }\n});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering DB Call",
    "code": "const { Client } = require('pg');\nconst client = new Client({ port: 5432, host: 'localhost' });\nclient.connect();",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: connect ECONNREFUSED 127.0.0.1:5432\n    at TCPConnectWrap.afterConnect (node:net:1305:16) {\n  errno: -4078,\n  code: 'ECONNREFUSED',\n  syscall: 'connect',\n  address: '127.0.0.1',\n  port: 5432\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Startup DB Check",
      "language": "javascript",
      "description": "Checking database availability on startup before launching the Express server.",
      "code": "const mongoose = require('mongoose');\n\nmongoose.connect('mongodb://localhost:27017/myapp')\n  .then(() => {\n    app.listen(3000, () => console.log('App running on port 3000'));\n  })\n  .catch(err => {\n    if (err.code === 'ECONNREFUSED') {\n      console.error('MongoDB is offline. Exiting process.');\n      process.exit(1);\n    }\n  });"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx Upstream Configurations",
      "language": "nginx",
      "description": "Defining multiple backup servers in Nginx to prevent complete service downtime.",
      "code": "upstream app_servers {\n    server 127.0.0.1:3000;\n    server 127.0.0.1:3001 backup;\n}"
    }
  ],
  "commonMistakes": [
    "Forgetting to start local datastores (Redis, Postgres, Mongo) before initiating development servers.",
    "Using localhost inside Docker containers instead of utilizing Docker networks."
  ],
  "prevention": [
    "Use environment variables for hostnames and ports.",
    "Implement server dependency health-check loops in deployment configurations."
  ],
  "faq": [
    {
      "question": "Why does localhost throw ECONNREFUSED in Node but works in the browser?",
      "answer": "Browser clients fall back between IPv4 (127.0.0.1) and IPv6 (::1) address lookups automatically. Node.js resolves localhost based on OS hosts priority configuration. Try explicitly querying `127.0.0.1` in Node."
    },
    {
      "question": "What is the difference between ECONNREFUSED and ETIMEDOUT?",
      "answer": "ECONNREFUSED indicates the target server was reached instantly but explicitly rejected the connection. ETIMEDOUT means the request got no response whatsoever, eventually exceeding timeout limits."
    },
    {
      "question": "How do I fix ECONNREFUSED for Docker containers?",
      "answer": "Do not use 'localhost' to query other containers. Put all containers on the same Docker network and use the target container's service name as the host name."
    },
    {
      "question": "Can firewalls cause ECONNREFUSED?",
      "answer": "Yes. If local firewall rules (like iptables, ufw, or Windows Firewall) block incoming traffic on a port, the OS returns a connection refused packet."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js HTTP client api Docs",
      "url": "https://nodejs.org/api/http.html"
    }
  ],
  "relatedErrors": [
    "econnreset",
    "etimedout"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Target Service Offline",
      "Wrong Port Configuration",
      "Docker Localhost Isolation"
    ],
    "checklist": [
      "Verify Service Status",
      "Double-Check Ports and Hostnames",
      "Configure Docker Networks",
      "Inspect Firewall Rules"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Target Service Offline",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Wrong Port Configuration",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Docker Localhost Isolation",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "ECONNREFUSED: Complete Node.js Troubleshooting Guide",
  "seoDescription": "Learn how to fix ECONNREFUSED in Node.js. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
