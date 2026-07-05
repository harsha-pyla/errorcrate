import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "428-precondition-required",
  "name": "428 Precondition Required",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The origin server requires the request to be conditional.",
  "meanDescription": "The HTTP 428 Precondition Required client error status code indicates that the origin server requires the request to be conditional (e.g. carrying If-Match or If-None-Match headers). This protects against 'lost update' conflicts.",
  "causes": [
    "Client attempts write operations (PUT/DELETE) without conditional headers (If-Match) on resources where concurrency locks are enforced."
  ],
  "solutions": [
    "Client must fetch the resource ETag using a GET request first.",
    "Append the ETag value in the If-Match header during writing commands."
  ],
  "example": {
    "title": "Unconditional PUT Request",
    "code": "PUT /api/users/99 HTTP/1.1\nHost: api.com\n\n{\"name\": \"AliceUpdated\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Unconditional PUT Request",
    "code": "PUT /api/users/99 HTTP/1.1\nHost: api.com\n\n{\"name\": \"AliceUpdated\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Precondition Required Response",
    "code": "HTTP/1.1 428 Precondition Required\nContent-Type: application/json\n\n{\"error\": \"If-Match header is required to update this resource\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware enforcing conditional checks.",
      "code": "app.put('/api/data', (req, res, next) => {\n  if (!req.headers['if-match']) {\n    return res.status(428).json({ error: 'If-Match header required' });\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler checking conditional header presence.",
      "code": "import { NextResponse } from 'next/server';\nexport function PUT(req: Request) {\n  if (!req.headers.get('if-match')) {\n    return new NextResponse('Precondition Required', { status: 428 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 428.",
      "code": "from django.http import HttpResponse\ndef my_view(request):\n    return HttpResponse(status=428)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 428.",
      "code": "@PutMapping(\"/data\")\npublic ResponseEntity<String> check(HttpServletRequest req) {\n    if (req.getHeader(\"If-Match\") == null) {\n        return ResponseEntity.status(HttpStatus.PRECONDITION_REQUIRED).body(\"If-Match required\");\n    }\n    return ResponseEntity.ok(\"OK\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx forwards conditional headers downstream.",
      "code": "# Forwarded downstream"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache forwards conditional headers downstream.",
      "code": "# Forwarded downstream"
    }
  ],
  "commonMistakes": [
    "Using 412 Precondition Failed when the header is *missing* (use 428 when the header is missing; use 412 when the header is present but evaluates to false)."
  ],
  "prevention": [
    "Enforce concurrency checks inside REST documentation pipelines."
  ],
  "faq": [
    {
      "question": "Why did HTTP introduce the 428 status code?",
      "answer": "To prevent the 'lost update' problem, where client A fetches a file, client B fetches it too, B edits and saves, and then A saves, overwriting B's changes silently. Enforcing conditional If-Match headers resolves this."
    },
    {
      "question": "What is the difference between 428 and 412?",
      "answer": "428 Precondition Required means the client *forgot* to send conditional headers. 412 Precondition Failed means the client *sent* headers, but the conditions evaluated to false (e.g. resource was modified by someone else)."
    },
    {
      "question": "Is 428 cacheable?",
      "answer": "No. The 428 Precondition Required status code is never cached."
    },
    {
      "question": "What is the recommended recovery action for clients on 428?",
      "answer": "Issue a GET request to obtain the current resource representation and its ETag header, copy the ETag hash, and resend the request with an 'If-Match' header."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 6585 – Additional HTTP Status Codes",
      "url": "https://datatracker.ietf.org/doc/html/rfc6585#section-3"
    }
  ],
  "relatedErrors": [
    "412-precondition-failed"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client attempts write operations (PUT/DELETE)"
    ],
    "checklist": [
      "Client must fetch the resource",
      "Append the ETag value in"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client attempts write operations (PUT/DELETE)",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot 428 Precondition Required — HTTP Error Guide",
  "seoDescription": "428 Precondition Required in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this."
};

export default errorData;
