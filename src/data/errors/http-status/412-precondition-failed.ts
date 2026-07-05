import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "412-precondition-failed",
  "name": "412 Precondition Failed",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "One or more preconditions in the request header fields evaluated to false.",
  "meanDescription": "The HTTP 412 Precondition Failed client error status code indicates that one or more preconditions given in the request header fields evaluated to false when tested on the server. This is used with conditional requests (e.g. If-Match, If-None-Match).",
  "causes": [
    "Client requests modifications carrying If-Match headers that do not match the current server ETag hash.",
    "Client requests If-Unmodified-Since dates older than server modification states."
  ],
  "solutions": [
    "Client should fetch the latest version of the resource to obtain the updated ETag tag.",
    "Ensure request header conditions are generated correctly."
  ],
  "example": {
    "title": "Mismatched If-Match Request",
    "code": "PUT /api/users/99 HTTP/1.1\nIf-Match: \"old-etag-hash\"\n\n{\"name\": \"AliceUpdated\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Mismatched If-Match Request",
    "code": "PUT /api/users/99 HTTP/1.1\nIf-Match: \"old-etag-hash\"\n\n{\"name\": \"AliceUpdated\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Precondition Failed Response",
    "code": "HTTP/1.1 412 Precondition Failed\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware checking If-Match headers.",
      "code": "app.put('/api/data', (req, res) => {\n  const currentEtag = 'hash-123';\n  if (req.headers['if-match'] && req.headers['if-match'] !== currentEtag) {\n    return res.status(412).send('Precondition Failed');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js route handler checking conditional request headers.",
      "code": "export function PUT(request: Request) {\n  return new Response('Precondition Failed', { status: 412 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view throwing 412.",
      "code": "from django.http import HttpResponse\ndef my_view(request):\n    return HttpResponse(status=412)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning status 412.",
      "code": "@PutMapping(\"/data\")\npublic ResponseEntity<Void> check(@RequestHeader(\"If-Match\") String ifMatch) {\n    if (!\"hash-123\".equals(ifMatch)) return ResponseEntity.status(412).build();\n    return ResponseEntity.ok().build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx proxy configuration handling conditional requests.",
      "code": "# Nginx forwards conditional headers downstream"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache mod_headers checking conditional requests.",
      "code": "# Apache checks conditional validation"
    }
  ],
  "commonMistakes": [
    "Using 412 instead of 304 (use 304 Not Modified for GET requests; use 412 Precondition Failed for write methods like PUT/POST/DELETE).",
    "Failing to update client ETag listings after success updates."
  ],
  "prevention": [
    "Ensure web API clients check ETag codes before executing updates."
  ],
  "faq": [
    {
      "question": "What is the main purpose of 412 Precondition Failed?",
      "answer": "It prevents the 'lost update' problem, where a client downloads a resource, edits it, and uploads it back, unknowingly overwriting changes made by another client in the meantime."
    },
    {
      "question": "How does 412 differ from 304?",
      "answer": "Use 304 Not Modified for GET requests to verify caching. Use 412 Precondition Failed for state-changing requests (PUT, POST, DELETE) to verify concurrency locks."
    },
    {
      "question": "Which headers trigger 412 errors?",
      "answer": "The main headers are 'If-Match', 'If-None-Match', 'If-Modified-Since', and 'If-Unmodified-Since'."
    },
    {
      "question": "How do clients recover from a 412 error?",
      "answer": "The client must fetch the latest version of the resource to get the updated ETag, merge the changes, and try the PUT request again."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412"
    },
    {
      "name": "RFC 7232 – Section 4.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7232#section-4.2"
    }
  ],
  "relatedErrors": [
    "409-conflict",
    "304-not-modified"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requests modifications carrying If-Match",
      "Client requests If-Unmodified-Since dates older"
    ],
    "checklist": [
      "Client should fetch the latest",
      "Ensure request header conditions are"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requests modifications carrying If-Match",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Client requests If-Unmodified-Since dates older",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve 412 Precondition Failed — HTTP Debugging Guide",
  "seoDescription": "Resolve 412 Precondition Failed in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
