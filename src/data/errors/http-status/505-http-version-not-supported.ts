import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "505-http-version-not-supported",
  "name": "505 HTTP Version Not Supported",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server does not support the major version of HTTP that was used.",
  "meanDescription": "The HTTP 505 HTTP Version Not Supported server error status code indicates that the server does not support, or refuses to support, the major version of HTTP that was used in the request message.",
  "causes": [
    "Client requesting resource using unsupported newer HTTP protocols (e.g. HTTP/3 on a server that only supports HTTP/1.1).",
    "Malformed HTTP protocol version string formats."
  ],
  "solutions": [
    "Downgrade client request protocols to match server capabilities.",
    "Configure origin server and proxy layers to support HTTP/2 or HTTP/3 upgrades."
  ],
  "example": {
    "title": "Unsupported HTTP Version",
    "code": "GET /index.html HTTP/3.0\nHost: old-server.local\n\n(Server only supports HTTP/1.1 and rejects HTTP/3 requests)",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Unsupported HTTP Version",
    "code": "GET /index.html HTTP/3.0\nHost: old-server.local\n\n(Server only supports HTTP/1.1 and rejects HTTP/3 requests)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Version Not Supported Response",
    "code": "HTTP/1.1 505 HTTP Version Not Supported\nContent-Type: text/plain\nContent-Length: 26\n\nHTTP Version Not Supported",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 505.",
      "code": "app.use((req, res, next) => {\n  if (req.httpVersionMajor > 2) {\n    return res.status(505).send('HTTP Version Not Supported');\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning 505.",
      "code": "export function GET() {\n  return new Response('Version Not Supported', { status: 505 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 505.",
      "code": "from django.http import HttpResponse\ndef check_version(request):\n    return HttpResponse(status=505)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 505.",
      "code": "@GetMapping(\"/version\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.HTTP_VERSION_NOT_SUPPORTED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx protocol layers.",
      "code": "# Nginx supports HTTP/1.0, HTTP/1.1, HTTP/2 by default, and HTTP/3 if compiled with quic module"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling HTTP/2 modules in Apache.",
      "code": "LoadModule http2_module modules/mod_http2.so"
    }
  ],
  "commonMistakes": [
    "Assuming all legacy backend proxies support HTTP/2 multiplexing pipelines directly."
  ],
  "prevention": [
    "Ensure proxies handle newer HTTP versions and translate them to HTTP/1.1 before contacting upstream application servers."
  ],
  "faq": [
    {
      "question": "Why is HTTP 505 rarely seen by users?",
      "answer": "Because modern proxies (like Nginx or Cloudflare) automatically downgrade HTTP/2 or HTTP/3 client requests to HTTP/1.1 before sending them to origin application servers."
    },
    {
      "question": "What version format triggers a 505 error?",
      "answer": "Sending unparseable version identifiers (e.g. HTTP/9.9) or newer HTTP/3 requests to an old legacy server that only supports HTTP/1.0 or HTTP/1.1."
    },
    {
      "question": "Is 505 cacheable?",
      "answer": "No. The 505 HTTP Version Not Supported status code is never cached."
    },
    {
      "question": "How do clients resolve 505 errors?",
      "answer": "Ensure the client library uses standard HTTP/1.1 or HTTP/2 request formatting."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505"
    },
    {
      "name": "RFC 7231 – Section 6.6.6",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6"
    }
  ],
  "relatedErrors": [
    "500-internal-server-error"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requesting resource using unsupported",
      "Malformed HTTP protocol version string"
    ],
    "checklist": [
      "Downgrade client request protocols to",
      "Configure origin server and proxy"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requesting resource using unsupported",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Malformed HTTP protocol version string",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix 505 HTTP Version Not Supported in HTTP (With.",
  "seoDescription": "Learn how to fix 505 HTTP Version Not Supported in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
