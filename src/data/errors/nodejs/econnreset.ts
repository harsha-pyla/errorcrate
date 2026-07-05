import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "econnreset",
  "name": "ECONNRESET",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The connection was abruptly closed by the remote peer server or intermediary socket.",
  "meanDescription": "ECONNRESET stands for 'Connection Reset by Peer'. In Node.js networking, it indicates that an established TCP connection was abruptly closed by the remote server, intermediate load balancer, firewall, or proxy before the data exchange could be fully completed. Unlike normal socket closures, a reset indicates that the remote peer sent a TCP RST (reset) packet, discarding the connection immediately due to an error, timeout, or shutdown state. This is a common network exception when dealing with unstable APIs, database connection pools, or large file uploads.",
  "causes": [
    "Remote Server Crash: The destination API server crashed, restarted, or terminated the process mid-transaction.",
    "Inactivity Timeout: Firewalls, load balancers, or proxies closed idle connections to reclaim system resources.",
    "Malformed Requests: The client sent invalid request frames, forcing the server to issue a TCP RST packet to clean the socket.",
    "Connection Pool Recycling: Databasing pools or keep-alive sockets closed stale connections on the remote end."
  ],
  "solutions": [
    "Implement Automatic Retries: Use request client retry wrappers with exponential backoff to handle transient reset errors.",
    "Set Matching Keep-Alive Timeouts: Align Node's keep-alive timeout values with downstream proxies (e.g. Nginx).",
    "Optimize Heavy Payloads: Split large uploads or stream data chunk-by-chunk to prevent socket exhaustion.",
    "Catch Socket Errors: Always register error event listeners on HTTP/TCP socket clients to prevent unhandled crashes."
  ],
  "example": {
    "title": "ECONNRESET Socket Reset",
    "code": "const http = require('http');\n\n// Querying an unstable backend that resets sockets abruptly\nhttp.get('http://unstable-api.com', (res) => {\n  res.on('data', (chunk) => console.log(chunk));\n}).on('error', (err) => {\n  if (err.code === 'ECONNRESET') {\n    console.error('Remote server abruptly closed the connection.');\n  }\n});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Client Query",
    "code": "const axios = require('axios');\n// Calling a server that restarts mid-request\naxios.get('https://crashing-api.com/long-process');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: read ECONNRESET\n    at TCP.onStreamRead (node:internal/stream_base_commons:217:20) {\n  errno: -4077,\n  code: 'ECONNRESET',\n  syscall: 'read'\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Client Disconnects",
      "language": "javascript",
      "description": "Checking for client aborts and TCP socket closures within an Express route.",
      "code": "app.get('/stream-data', (req, res) => {\n  const interval = setInterval(() => {\n    res.write('Data chunk...\\n');\n  }, 1000);\n\n  req.on('close', () => {\n    console.log('Client aborted request or socket reset.');\n    clearInterval(interval);\n    res.end();\n  });\n});"
    },
    {
      "name": "Axios Automatic Retry Handler",
      "language": "javascript",
      "description": "Configuring Axios to automatically retry idempotent requests when ECONNRESET occurs.",
      "code": "const axios = require('axios');\nconst axiosRetry = require('axios-retry').default;\n\nconst client = axios.create();\naxiosRetry(client, {\n  retries: 3,\n  retryDelay: axiosRetry.exponentialDelay,\n  retryCondition: (error) => {\n    return error.code === 'ECONNRESET' || axiosRetry.isNetworkError(error);\n  }\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx Keepalive Config",
      "language": "nginx",
      "description": "Aligning Nginx keepalive timeouts to match Node's server limits.",
      "code": "http {\n    keepalive_timeout 65;\n    keepalive_requests 100;\n}"
    }
  ],
  "commonMistakes": [
    "Assuming ECONNRESET indicates a bug in your code (most of the time it is caused by remote server crashes or network middlebox timeouts).",
    "Failing to handle socket error events, causing Node applications to crash on temporary network drops."
  ],
  "prevention": [
    "Use robust client request libraries that support automatic retries (like Got or Axios).",
    "Implement circuit breakers (e.g. Opossum) for third-party microservices.",
    "Monitor proxy logs for upstream timeouts."
  ],
  "faq": [
    {
      "question": "What is the difference between ECONNRESET and ECONNREFUSED?",
      "answer": "ECONNRESET means the connection was established but was forcibly closed *during* the transaction. ECONNREFUSED means the target server refused to establish a connection *at all* (offline or blocked)."
    },
    {
      "question": "Why does a firewall cause ECONNRESET?",
      "answer": "If a connection is idle for too long, a stateful firewall may remove it from its tracking table. When a new packet arrives, the firewall replies with a TCP RST packet, triggering ECONNRESET on the client."
    },
    {
      "question": "How do I test my error handling for ECONNRESET?",
      "answer": "You can create a local TCP server that accepts a connection and immediately calls `socket.destroy()` without sending any data."
    },
    {
      "question": "Does Node.js automatically retry ECONNRESET errors?",
      "answer": "No. You must implement retry logic in your application code or use a third-party HTTP client that supports automatic retries."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js net Module",
      "url": "https://nodejs.org/api/net.html"
    }
  ],
  "relatedErrors": [
    "econnrefused",
    "etimedout"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Remote Server Crash",
      "Inactivity Timeout",
      "Malformed Requests"
    ],
    "checklist": [
      "Implement Automatic Retries",
      "Set Matching Keep-Alive Timeouts",
      "Optimize Heavy Payloads",
      "Catch Socket Errors"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Remote Server Crash",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Inactivity Timeout",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Malformed Requests",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug ECONNRESET in Node.js — Step-by-Step Fix",
  "seoDescription": "Getting ECONNRESET in Node.js? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix it."
};

export default errorData;
