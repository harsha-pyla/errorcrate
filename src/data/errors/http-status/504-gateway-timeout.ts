import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "504-gateway-timeout",
  "name": "504 Gateway Timeout",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server, while acting as a gateway or proxy, did not receive a timely response.",
  "meanDescription": "The HTTP 504 Gateway Timeout server error status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from the upstream server specified by the URI (e.g. HTTP, FTP, LDAP) or some other auxiliary server (e.g. DNS) it needed to access.",
  "causes": [
    "Heavy database queries blocking backend execution thread for longer than proxy gateway timeout limits.",
    "Third-party API dependencies taking too long to respond to server requests.",
    "Mismatched connection timeouts between load balancers and origin nodes."
  ],
  "solutions": [
    "Optimize slow database queries and add indexing.",
    "Delegate heavy tasks to background queues (using Celery or BullMQ) instead of executing them synchronously.",
    "Increase read timeout variables inside Nginx (e.g. proxy_read_timeout 300s)."
  ],
  "example": {
    "title": "Nginx Timeout Log",
    "code": "[error] 1234#0: *568 upstream timed out (110: Connection timed out) while reading response header from upstream, client: 127.0.0.1, request: \"GET /heavy-query HTTP/1.1\", upstream: \"http://127.0.0.1:3000/heavy-query\"",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Querying Heavy Report",
    "code": "GET /api/reports/annual HTTP/1.1\nHost: site.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Gateway Timeout Response",
    "code": "HTTP/1.1 504 Gateway Timeout\nContent-Type: text/html\nContent-Length: 154\n\n<html><head><title>504 Gateway Timeout</title></head>\n<body><center><h1>504 Gateway Timeout</h1></center></body></html>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Simulating gateway timeout inside Express middleware.",
      "code": "app.get('/slow-api', (req, res) => {\n  // Let connection hang until gateway timeouts trigger\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js route timeout boundaries.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return new NextResponse('Gateway Timeout', { status: 504 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 504.",
      "code": "from django.http import HttpResponse\ndef slow_view(request):\n    return HttpResponse('Timeout', status=504)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning status 504.",
      "code": "@GetMapping(\"/slow\")\npublic ResponseEntity<String> slow() {\n    return ResponseEntity.status(HttpStatus.GATEWAY_TIMEOUT).body(\"Timeout\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Increasing upstream timeout parameters in Nginx.",
      "code": "proxy_connect_timeout 300s;\nproxy_send_timeout    300s;\nproxy_read_timeout    300s;\nsend_timeout          300s;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring ProxyTimeout directives in Apache.",
      "code": "ProxyTimeout 300"
    }
  ],
  "commonMistakes": [
    "Using 408 Request Timeout instead of 504 (use 408 when the *client* is slow; use 504 when the *upstream backend database/service* is slow).",
    "Failing to implement request cancellation in client libraries during timeouts, wasting server resources."
  ],
  "prevention": [
    "Implement aggressive query timeouts in your database configuration.",
    "Offload reports compilation or file packaging to asynchronous job queues."
  ],
  "faq": [
    {
      "question": "What is the difference between 502 and 504?",
      "answer": "502 Bad Gateway means the upstream server crashed or returned an invalid response immediately. 504 Gateway Timeout means the upstream server accepted the connection but took too long to complete the response, violating gateway time limits."
    },
    {
      "question": "How do I fix 504 Gateway Timeout in Nginx?",
      "answer": "Increase the upstream timeout limits using `proxy_read_timeout 300s;` and `proxy_connect_timeout 300s;` inside your server or location blocks."
    },
    {
      "question": "Can slow database queries cause 504 errors?",
      "answer": "Yes. If a database query blocks the application thread for longer than the Nginx or AWS load balancer timeout limits (typically 60 seconds), the proxy drops the connection and returns 504."
    },
    {
      "question": "Is 504 Gateway Timeout cacheable?",
      "answer": "No. The 504 status code represents a temporary timeout and is never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504"
    },
    {
      "name": "RFC 7231 – Section 6.6.5",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5"
    }
  ],
  "relatedErrors": [
    "502-bad-gateway",
    "500-internal-server-error",
    "408-request-timeout"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Heavy database queries blocking backend",
      "Third-party API dependencies taking too",
      "Mismatched connection timeouts between load"
    ],
    "checklist": [
      "Optimize slow database queries and",
      "Delegate heavy tasks to background",
      "Increase read timeout variables inside"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Heavy database queries blocking backend",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Third-party API dependencies taking too",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Mismatched connection timeouts between load",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "504 Gateway Timeout Explained: Causes, Fixes & Prevention",
  "seoDescription": "504 Gateway Timeout in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
