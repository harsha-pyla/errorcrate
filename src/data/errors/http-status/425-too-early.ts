import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "425-too-early",
  "name": "425 Too Early",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server is unwilling to risk processing a request that might be replayed.",
  "meanDescription": "The HTTP 425 Too Early client error status code indicates that the server is unwilling to risk processing a request that might be replayed, typically in TLS early data scenarios (avoiding replay attacks).",
  "causes": [
    "Client browser sending GET requests carrying state-changing query parameters inside TLS 1.3 Early Data (0-RTT) handshakes."
  ],
  "solutions": [
    "Ensure clients do not send state-changing requests inside TLS 0-RTT handshakes.",
    "Retry the request using standard TLS handshake completion pipelines."
  ],
  "example": {
    "title": "TLS 0-RTT Replay Risk",
    "code": "POST /api/pay HTTP/1.1\nHost: pay.com\n(Sent inside TLS 1.3 Early Data packets)",
    "language": "http"
  },
  "exampleRequest": {
    "title": "TLS 0-RTT Replay Risk",
    "code": "POST /api/pay HTTP/1.1\nHost: pay.com\n(Sent inside TLS 1.3 Early Data packets)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Too Early Response",
    "code": "HTTP/1.1 425 Too Early\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware detecting early data headers.",
      "code": "app.post('/api/action', (req, res) => {\n  if (req.headers['early-data'] === '1') {\n    return res.status(425).send('Too Early');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler checking early data headers.",
      "code": "import { headers } from 'next/headers';\nexport async function POST() {\n  const h = await headers();\n  if (h.get('early-data') === '1') {\n    return new Response('Too Early', { status: 425 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 425.",
      "code": "from django.http import HttpResponse\ndef early_view(request):\n    return HttpResponse(status=425)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 425.",
      "code": "@PostMapping(\"/action\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(425).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Enabling TLS 1.3 early data and forwarding header checks to backend.",
      "code": "ssl_protocols TLSv1.3;\nssl_early_data on;\nproxy_set_header Early-Data $ssl_early_data;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache SSL early data configurations.",
      "code": "SSLSessionTickets On"
    }
  ],
  "commonMistakes": [
    "Ignoring the Early-Data headers on writing routes, exposing operations to replay attacks."
  ],
  "prevention": [
    "Only enable TLS 1.3 0-RTT for safe, idempotent GET requests."
  ],
  "faq": [
    {
      "question": "What is TLS 1.3 Early Data (0-RTT)?",
      "answer": "It is a performance feature of TLS 1.3 that allows clients to send application data (like a GET request) during the initial TLS handshake packet exchange, saving a round-trip time (0-RTT)."
    },
    {
      "question": "What is a replay attack?",
      "answer": "In a replay attack, a malicious actor intercepts a TLS 1.3 early data packet (e.g. a payment request) and re-sends it to the server. Since 0-RTT lacks server-side handshake completion, the server might process the transaction twice."
    },
    {
      "question": "How do clients handle 425 responses?",
      "answer": "The client must automatically retry the request after completing the TLS handshake, ensuring the data is not sent inside 0-RTT."
    },
    {
      "question": "Is 425 cacheable?",
      "answer": "No. 425 Too Early responses are never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 8470 – Too Early Status",
      "url": "https://datatracker.ietf.org/doc/html/rfc8470"
    }
  ],
  "relatedErrors": [
    "400-bad-request"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client browser sending GET requests"
    ],
    "checklist": [
      "Ensure clients do not send",
      "Retry the request using standard"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client browser sending GET requests",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "425 Too Early Explained: Causes, Fixes & Prevention",
  "seoDescription": "Complete guide to fixing 425 Too Early in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
