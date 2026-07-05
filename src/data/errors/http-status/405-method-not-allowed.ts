import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "405-method-not-allowed",
  "name": "405 Method Not Allowed",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The request method is known by the server but is not supported by the target resource.",
  "meanDescription": "The HTTP 405 Method Not Allowed client error status code indicates that the request method is known by the server but is not supported by the target resource. The server must generate an Allow header listing supported methods.",
  "causes": [
    "Sending a POST request to static HTML pages or directories.",
    "Target resource API route only supports GET/POST but client issued a DELETE request."
  ],
  "solutions": [
    "Check the requested URL path routing parameters.",
    "Verify client HTTP methods match routes.",
    "Ensure server includes an 'Allow' header (e.g. Allow: GET, POST)."
  ],
  "example": {
    "title": "Invalid POST Request",
    "code": "POST /about.html HTTP/1.1\nHost: site.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Invalid POST Request",
    "code": "POST /about.html HTTP/1.1\nHost: site.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Method Not Allowed Response",
    "code": "HTTP/1.1 405 Method Not Allowed\nAllow: GET, HEAD\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Handling unmapped router methods and returning 405 with Allow headers.",
      "code": "app.route('/api/users')\n  .get((req, res) => res.json([]))\n  .all((req, res) => {\n    res.setHeader('Allow', 'GET');\n    res.status(405).send('Method Not Allowed');\n  });"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler fallback methods returning 405.",
      "code": "import { NextResponse } from 'next/server';\nexport function PUT() {\n  return new NextResponse('Method Not Allowed', { status: 405, headers: { 'Allow': 'GET, POST' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Enforcing view methods using decorators in Django.",
      "code": "from django.views.decorators.http import require_http_methods\n@require_http_methods([\"GET\", \"POST\"])\ndef my_view(request):\n    return HttpResponse('OK')"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Handling HttpRequestMethodNotSupportedException in Spring Boot controller advice.",
      "code": "@ExceptionHandler(HttpRequestMethodNotSupportedException.class)\npublic ResponseEntity<String> handle(HttpRequestMethodNotSupportedException ex) {\n    return ResponseEntity.status(405).header(\"Allow\", \"GET\").body(\"Invalid method\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Returning 405 redirects for static folder POST requests.",
      "code": "error_page 405 =200 $uri;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache directory configuration rejecting trace requests.",
      "code": "TraceEnable Off"
    }
  ],
  "commonMistakes": [
    "Failing to supply the mandatory 'Allow' response header field.",
    "Misconfiguring CORS preflight OPTIONS to return 405 instead of 200/204."
  ],
  "prevention": [
    "Always design custom API routing trees to yield 405 fallbacks for unregistered verbs.",
    "Verify frontend fetch code uses the correct REST methods."
  ],
  "faq": [
    {
      "question": "What header is mandatory in a 405 response?",
      "answer": "The 'Allow' response header field is mandatory. It must contain a comma-separated list of HTTP methods supported by the target resource (e.g. 'Allow: GET, POST')."
    },
    {
      "question": "Why does Nginx return 405 for static file POST requests?",
      "answer": "Nginx rejects POST requests to static files (like /index.html) by default because static files cannot process request bodies, returning a 405 Method Not Allowed error."
    },
    {
      "question": "What is the difference between 405 Method Not Allowed and 501 Not Implemented?",
      "answer": "405 means the server *knows* the method but the target path doesn't support it. 501 means the server is *incapable* of supporting the method at all (e.g. a server that doesn't implement PATCH anywhere)."
    },
    {
      "question": "Does a 405 response affect search engine indexing?",
      "answer": "Yes. Search engine crawlers only issue GET/HEAD. If your index pages return 405 on GET requests, crawlers will immediately drop those pages from search results."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405"
    },
    {
      "name": "RFC 7231 – Section 6.5.5",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5"
    }
  ],
  "relatedErrors": [
    "501-not-implemented",
    "404-not-found"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Sending a POST request to",
      "Target resource API route only"
    ],
    "checklist": [
      "Check the requested URL path",
      "Verify client HTTP methods match",
      "Ensure server includes an 'Allow' header (e.g. Allow"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Sending a POST request to",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Target resource API route only",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot 405 Method Not Allowed — HTTP Error Guide",
  "seoDescription": "Fix 405 Method Not Allowed fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
