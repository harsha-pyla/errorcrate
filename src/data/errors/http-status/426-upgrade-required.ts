import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "426-upgrade-required",
  "name": "426 Upgrade Required",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server refuses to perform the request using the current protocol.",
  "meanDescription": "The HTTP 426 Upgrade Required client error status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol (e.g. TLS 1.3).",
  "causes": [
    "Client requesting WebSocket paths using legacy HTTP/1.0 connections.",
    "Server requiring TLS connections but client requested cleartext HTTP."
  ],
  "solutions": [
    "Client should repeat the request using the upgraded protocol specified in the Upgrade header.",
    "Ensure Nginx or proxy rules append Upgrade response headers (Upgrade: TLS/1.2)."
  ],
  "example": {
    "title": "Upgrade Required Response",
    "code": "HTTP/1.1 426 Upgrade Required\nUpgrade: HTTP/2.0\nConnection: Upgrade\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "GET Request using Old Protocol",
    "code": "GET /api HTTP/1.0\nHost: api.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Upgrade Required Response",
    "code": "HTTP/1.1 426 Upgrade Required\nUpgrade: HTTP/2.0\nConnection: Upgrade\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware requiring HTTP/2.",
      "code": "app.use((req, res, next) => {\n  if (req.httpVersion < '2.0') {\n    return res.status(426).set('Upgrade', 'HTTP/2.0').set('Connection', 'Upgrade').end();\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning 426.",
      "code": "export function GET() {\n  return new Response('Upgrade Required', { status: 426, headers: { 'Upgrade': 'HTTP/2.0' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 426.",
      "code": "from django.http import HttpResponse\ndef upgrade_view(request):\n    return HttpResponse(status=426)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 426.",
      "code": "@GetMapping(\"/secure\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.UPGRADE_REQUIRED).header(\"Upgrade\", \"HTTP/2.0\").build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx upgrade header configurations.",
      "code": "# Handled by upstream proxy rules"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling protocol upgrades in Apache.",
      "code": "Protocols h2 h2c http/1.1"
    }
  ],
  "commonMistakes": [
    "Omitting the 'Upgrade' header field in 426 responses (the header is mandatory to guide the client)."
  ],
  "prevention": [
    "Configure reverse proxies to block legacy HTTP/1.0 client connections immediately."
  ],
  "faq": [
    {
      "question": "What header is mandatory in a 426 response?",
      "answer": "The 'Upgrade' header is mandatory. It must specify the protocol(s) the server requires to process the request (e.g. `Upgrade: HTTP/2.0`)."
    },
    {
      "question": "How does 426 differ from 101 Switching Protocols?",
      "answer": "426 Upgrade Required is a client *error* indicating the server refuses to compile the request unless the client upgrades first. 101 is an *informational* response indicating the server agrees to switch protocols."
    },
    {
      "question": "Does a browser upgrade automatically on 426?",
      "answer": "No. The browser cannot renegotiate protocols automatically mid-request. The client-side application script must establish a new socket connection."
    },
    {
      "question": "Is 426 cacheable?",
      "answer": "No. The 426 Upgrade Required status code is never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426"
    },
    {
      "name": "RFC 7231 – Section 6.5.15",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15"
    }
  ],
  "relatedErrors": [
    "101-switching-protocols"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requesting WebSocket paths using",
      "Server requiring TLS connections but"
    ],
    "checklist": [
      "Client should repeat the request",
      "Ensure Nginx or proxy rules append Upgrade response headers (Upgrade"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requesting WebSocket paths using",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Server requiring TLS connections but",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix 426 Upgrade Required in HTTP (With Examples)",
  "seoDescription": "Troubleshoot 426 Upgrade Required in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
