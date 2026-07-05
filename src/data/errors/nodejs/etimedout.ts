import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "etimedout",
  "name": "ETIMEDOUT",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The connection attempt timed out before receiving a response.",
  "meanDescription": "ETIMEDOUT stands for 'Connection Timed Out'. It is thrown when a network request, handshake, or TCP connection takes longer than the client's configured timeout limit. If the target server is unreachable, overloaded, or drops packets silently, the operating system or client library closes the socket after a period of inactivity, throwing ETIMEDOUT.",
  "causes": [
    "Server Overloaded: The backend API is busy processing heavy operations and fails to reply within the timeout threshold.",
    "Silent Firewall Drops: Network firewalls drop packets instead of rejecting them, leaving the client waiting until the timeout limits expire.",
    "Strict Client Timeout Limit: The client-side application timeout is configured too aggressively (e.g. 50ms)."
  ],
  "solutions": [
    "Optimize Heavy Endpoints: Use pagination or worker threads for long-running server operations.",
    "Adjust Timeout Limits: Raise the client-side request timeout bounds to match server processing limits.",
    "Check Network Status: Verify destination IP routing and security group rules."
  ],
  "example": {
    "title": "ETIMEDOUT Request Timeout",
    "code": "const axios = require('axios');\n\n// Triggering request with an aggressive 100ms timeout\naxios.get('https://slow-api.com/reports', { timeout: 100 })\n  .catch(err => {\n    if (err.code === 'ETIMEDOUT') {\n      console.error('Request timed out before server could respond.');\n    }\n  });",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Querying Route",
    "code": "const http = require('http');\nconst req = http.request('http://10.255.255.1', { timeout: 1000 });\nreq.end();",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: connect ETIMEDOUT 10.255.255.1:80\n    at TCPConnectWrap.afterConnect (node:net:1305:16) {\n  errno: -4039,\n  code: 'ETIMEDOUT',\n  syscall: 'connect',\n  address: '10.255.255.1',\n  port: 80\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Next.js AbortController Timeout",
      "language": "typescript",
      "description": "Applying timeouts inside Next.js API Routes using an AbortController.",
      "code": "export async function GET() {\n  const controller = new AbortController();\n  const id = setTimeout(() => controller.abort(), 5000);\n\n  try {\n    const res = await fetch('https://api.com/data', { signal: controller.signal });\n    clearTimeout(id);\n    return Response.json(await res.json());\n  } catch (err: any) {\n    if (err.name === 'AbortError') {\n      return new Response('Request Timed Out', { status: 504 });\n    }\n    return new Response('Error', { status: 500 });\n  }\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx Timeout Rules",
      "language": "nginx",
      "description": "Increasing Nginx read and connection timeouts for slow backends.",
      "code": "server {\n    proxy_read_timeout 300s;\n    proxy_connect_timeout 60s;\n}"
    }
  ],
  "commonMistakes": [
    "Setting connection timeouts too short for heavy backend endpoints (like report generations or CSV exports).",
    "Failing to handle timeout errors, leading to hung script execution states."
  ],
  "prevention": [
    "Use pagination or asynchronous background tasks for heavy computations.",
    "Check server load metrics during peak times."
  ],
  "faq": [
    {
      "question": "What is the difference between connect and read timeouts?",
      "answer": "Connect timeout is the time spent establishing the TCP connection. Read timeout is the time spent waiting for data packets to arrive after the connection is established."
    },
    {
      "question": "Why does a firewall cause ETIMEDOUT instead of ECONNREFUSED?",
      "answer": "Firewalls can be configured to drop packets silently. Since no reject packet is returned, the client keeps waiting until it hits connection timeout limits."
    },
    {
      "question": "How do I configure request timeouts in standard fetch?",
      "answer": "Fetch does not have a timeout parameter. You must use an `AbortController` and call `controller.abort()` using a `setTimeout` timer."
    },
    {
      "question": "Can I automatically retry timed-out requests?",
      "answer": "Yes. Axios-retry or similar libraries can catch ETIMEDOUT and automatically retry the request, but make sure the endpoint is idempotent (safe to run twice)."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js System Types Docs",
      "url": "https://nodejs.org/api/errors.html#typeerror"
    }
  ],
  "relatedErrors": [
    "econnrefused",
    "econnreset"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Server Overloaded",
      "Silent Firewall Drops",
      "Strict Client Timeout Limit"
    ],
    "checklist": [
      "Optimize Heavy Endpoints",
      "Adjust Timeout Limits",
      "Check Network Status"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Server Overloaded",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Silent Firewall Drops",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Strict Client Timeout Limit",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix ETIMEDOUT in Node.js — Causes & Solutions",
  "seoDescription": "Encountering ETIMEDOUT in Node.js? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening again."
};

export default errorData;
