import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "408-request-timeout",
  "name": "408 Request Timeout",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server timed out waiting for the request from the client.",
  "meanDescription": "The HTTP 408 Request Timeout client error status code indicates that the server would like to shut down this unused connection. It is sent on idle connections by servers to free up resources.",
  "causes": [
    "Client connection dropped mid-stream due to network loss.",
    "Slow client connections failing to transmit headers/body parameters within server timeout limits."
  ],
  "solutions": [
    "Verify client network stability.",
    "Increase server idle timeout settings (e.g., keepalive_timeout in Nginx).",
    "Optimize payload streaming packet sizes."
  ],
  "example": {
    "title": "Idle Timeout Response",
    "code": "HTTP/1.1 408 Request Timeout\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Hanging Idle Connection",
    "code": "(Client establishes socket connection but sends no request payload bytes)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Idle Timeout Response",
    "code": "HTTP/1.1 408 Request Timeout\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Using timeout middleware in Express to return 408 on slow uploads.",
      "code": "const timeout = require('connect-timeout');\napp.use(timeout('5s'));\napp.use((req, res, next) => {\n  if (req.timedout) res.status(408).send('Request Timeout');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API Handler returning status 408.",
      "code": "export function GET() {\n  return new Response('Timeout', { status: 408 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 408.",
      "code": "from django.http import HttpResponse\ndef timeout_view(request):\n    return HttpResponse(status=408)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 408.",
      "code": "@GetMapping(\"/timeout\")\npublic ResponseEntity<Void> getTimeout() {\n    return ResponseEntity.status(HttpStatus.REQUEST_TIMEOUT).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Setting client header/body timeouts in Nginx.",
      "code": "client_header_timeout 10s;\nclient_body_timeout 10s;\nkeepalive_timeout 15s;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring connection Timeout in Apache.",
      "code": "Timeout 60\nKeepAliveTimeout 15"
    }
  ],
  "commonMistakes": [
    "Confusing 408 with 504 Gateway Timeout (use 408 when the *client* takes too long; use 504 when upstream backend servers take too long).",
    "Keeping client timeouts shorter than server timeouts, resulting in unhandled connection resets."
  ],
  "prevention": [
    "Configure sensible server connection limits to recycle idle sockets safely.",
    "Implement client-side retries with backoff strategies."
  ],
  "faq": [
    {
      "question": "What is the difference between 408 and 504?",
      "answer": "408 Request Timeout means the server waited too long for the *client* to send its request. 504 Gateway Timeout means a proxy/gateway waited too long for an *upstream backend server* to reply."
    },
    {
      "question": "Does 408 close the connection?",
      "answer": "Yes. A 408 response typically includes a 'Connection: close' header, and the server closes the underlying TCP socket immediately."
    },
    {
      "question": "Can search engine crawlers trigger 408?",
      "answer": "No, unless crawler network conditions are extremely poor. If search engines receive recurring 408s, they will reduce crawling frequency."
    },
    {
      "question": "How do browsers handle 408 errors?",
      "answer": "Most browsers retry the request automatically in the background on a new socket connection before displaying an error to the user."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408"
    },
    {
      "name": "RFC 7231 – Section 6.5.7",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7"
    }
  ],
  "relatedErrors": [
    "504-gateway-timeout"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client connection dropped mid-stream due",
      "Slow client connections failing to"
    ],
    "checklist": [
      "Verify client network stability.",
      "Increase server idle timeout settings",
      "Optimize payload streaming packet sizes."
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Client connection dropped mid-stream due",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Slow client connections failing to",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "408 Request Timeout: Complete HTTP Troubleshooting Guide",
  "seoDescription": "Troubleshoot 408 Request Timeout in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
