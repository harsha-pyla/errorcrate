import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "501-not-implemented",
  "name": "501 Not Implemented",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server does not support the functionality required to fulfill the request.",
  "meanDescription": "The HTTP 501 Not Implemented server error status code indicates that the server does not support the functionality required to fulfill the request. This is the appropriate response when the server does not recognize the request method and is not capable of supporting it for any resource.",
  "causes": [
    "Client requesting unsupported HTTP verbs (like PATCH on a server that only understands GET/POST).",
    "API request calling features or codecs that haven't been integrated yet on the server."
  ],
  "solutions": [
    "Ensure client requests use standard HTTP methods supported by the target host.",
    "Implement missing request handlers or features on the backend application."
  ],
  "example": {
    "title": "Unsupported HTTP Verb",
    "code": "PURGE /api/cache HTTP/1.1\nHost: site.com\n\n(Server does not implement PURGE methods)",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Unsupported HTTP Verb",
    "code": "PURGE /api/cache HTTP/1.1\nHost: site.com\n\n(Server does not implement PURGE methods)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Not Implemented Response",
    "code": "HTTP/1.1 501 Not Implemented\nContent-Type: text/plain\nContent-Length: 15\n\nNot Implemented",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 501 status for unimplemented API methods in Express.",
      "code": "app.all('/api/legacy', (req, res) => {\n  res.status(501).send('Feature not implemented yet.');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 501 status inside API Route handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function PATCH() {\n  return new NextResponse('Not Implemented', { status: 501 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 501.",
      "code": "from django.http import HttpResponseNotAllowed\n# DRF view returning status 501\nfrom django.http import HttpResponse\n\ndef my_view(request):\n    return HttpResponse('Unimplemented', status=501)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller throwing status 501.",
      "code": "@GetMapping(\"/future\")\npublic ResponseEntity<String> future() {\n    return ResponseEntity.status(HttpStatus.NOT_IMPLEMENTED).body(\"Not Implemented\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx returning 501 for unmapped methods.",
      "code": "# Nginx returns 501 automatically for unknown HTTP verbs"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache configurations checking methods.",
      "code": "# Apache method filter"
    }
  ],
  "commonMistakes": [
    "Using 405 Method Not Allowed instead of 501 (use 405 if the server *knows* the method but the path doesn't support it; use 501 if the server *cannot* perform that method for any route)."
  ],
  "prevention": [
    "Align backend protocol routers to fail with 501 when encountering unrecognized client methods."
  ],
  "faq": [
    {
      "question": "What is the difference between 405 Method Not Allowed and 501 Not Implemented?",
      "answer": "Use 405 when the server is capable of processing the method but rejects it for that specific URL (e.g. GET is OK, but POST is not). Use 501 when the server doesn't support that method *at all* on any route."
    },
    {
      "question": "Is 501 Not Implemented cacheable?",
      "answer": "Yes. 501 responses are cacheable by default unless specified by cache-control headers."
    },
    {
      "question": "Does 501 indicate a server crash?",
      "answer": "No. It indicates the server is operating normally but has explicitly chosen to reject the request protocol or feature as unimplemented."
    },
    {
      "question": "Can search engines de-index 501 pages?",
      "answer": "Yes. If index pages return 501, search crawlers will remove those URLs from search results."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501"
    },
    {
      "name": "RFC 7231 – Section 6.6.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2"
    }
  ],
  "relatedErrors": [
    "405-method-not-allowed",
    "500-internal-server-error"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requesting unsupported HTTP verbs",
      "API request calling features or"
    ],
    "checklist": [
      "Ensure client requests use standard",
      "Implement missing request handlers or"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requesting unsupported HTTP verbs",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "API request calling features or",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 501 Not Implemented in HTTP — Causes & Solutions",
  "seoDescription": "Encountering 501 Not Implemented in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
