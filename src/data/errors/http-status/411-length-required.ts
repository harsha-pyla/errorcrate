import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "411-length-required",
  "name": "411 Length Required",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server refuses to accept the request without a defined Content-Length header.",
  "meanDescription": "The HTTP 411 Length Required client error status code indicates that the server refuses to accept the request without a defined Content-Length header field in the client request.",
  "causes": [
    "Client sending POST or PUT requests carrying body payloads but omitting the Content-Length header field.",
    "Server security rules rejecting chunked transfer-encoding requests."
  ],
  "solutions": [
    "Ensure client library requests declare Content-Length headers explicitly.",
    "Configure server settings to support chunked encoding filters."
  ],
  "example": {
    "title": "Omitted Content-Length POST",
    "code": "POST /api/data HTTP/1.1\nHost: site.com\n\n(Payload body contents present here)",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Omitted Content-Length POST",
    "code": "POST /api/data HTTP/1.1\nHost: site.com\n\n(Payload body contents present here)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Length Required Response",
    "code": "HTTP/1.1 411 Length Required\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware rejecting POST/PUT routes lacking Content-Length.",
      "code": "app.use((req, res, next) => {\n  if (['POST', 'PUT'].includes(req.method) && !req.headers['content-length']) {\n    return res.status(411).send('Length Required');\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API route verifying request headers.",
      "code": "export function POST(request: Request) {\n  if (!request.headers.get('content-length')) {\n    return new Response('Length Required', { status: 411 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django middleware verifying request body size headers.",
      "code": "from django.http import HttpResponse\n# Custom middleware returning HttpResponse(status=411)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning status 411.",
      "code": "@PostMapping(\"/data\")\npublic ResponseEntity<Void> check(@RequestHeader(value = \"Content-Length\", required = false) Long len) {\n    if (len == null) return ResponseEntity.status(411).build();\n    return ResponseEntity.ok().build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx enforces Content-Length validations automatically.",
      "code": "# Nginx returns 411 immediately if content-length is missing on write methods"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache directory rules checking body size headers.",
      "code": "# Apache filters out length-less write calls automatically"
    }
  ],
  "commonMistakes": [
    "Sending empty POST requests without setting Content-Length to 0.",
    "Assuming chunked transfer-encoding is supported by all legacy proxy gateways."
  ],
  "prevention": [
    "Verify client fetch libraries calculate content lengths dynamically."
  ],
  "faq": [
    {
      "question": "Why does a server require a Content-Length header?",
      "answer": "It allows the server to allocate request buffers correctly and protect itself from Denial of Service (DoS) attacks where clients stream bytes indefinitely."
    },
    {
      "question": "Can I use 'Transfer-Encoding: chunked' instead of Content-Length?",
      "answer": "Yes. If chunked encoding is used, Content-Length is not required. However, if the server refuses chunked encoding, it will return 411."
    },
    {
      "question": "Does 411 apply to GET requests?",
      "answer": "No. GET requests have no payload body and thus do not require a Content-Length header."
    },
    {
      "question": "How do client libraries solve 411 errors?",
      "answer": "Most modern client libraries (like Axios or Fetch) calculate the payload byte size and append the Content-Length header automatically."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411"
    },
    {
      "name": "RFC 7230 – Section 3.3.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.2"
    }
  ],
  "relatedErrors": [
    "413-content-too-large"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client sending POST or PUT",
      "Server security rules rejecting chunked"
    ],
    "checklist": [
      "Ensure client library requests declare",
      "Configure server settings to support"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client sending POST or PUT",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Server security rules rejecting chunked",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "411 Length Required: Quick Fix Guide for HTTP Developers",
  "seoDescription": "Getting 411 Length Required in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
