import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "510-not-extended",
  "name": "510 Not Extended",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Further extensions to the request are required for the server to fulfill it.",
  "meanDescription": "The HTTP 510 Not Extended server error status code indicates that the server requires further extensions to the request in order to fulfill it (defined in RFC 2774 HTTP Extension Framework).",
  "causes": [
    "Missing mandatory HTTP extension declarations in client headers."
  ],
  "solutions": [
    "Include the requested HTTP extensions in the client request parameters.",
    "Check server extension logs."
  ],
  "example": {
    "title": "Missing Extension Response",
    "code": "HTTP/1.1 510 Not Extended\nContent-Type: text/plain\nContent-Length: 12\n\nNot Extended",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Standard Request lacking extensions",
    "code": "GET /api HTTP/1.1\nHost: site.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Missing Extension Response",
    "code": "HTTP/1.1 510 Not Extended\nContent-Type: text/plain\nContent-Length: 12\n\nNot Extended",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 510.",
      "code": "app.get('/extended', (req, res) => {\n  res.status(510).send('HTTP Extension required.');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning 510.",
      "code": "export function GET() {\n  return new Response('Not Extended', { status: 510 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 510.",
      "code": "from django.http import HttpResponse\ndef extension_view(request):\n    return HttpResponse(status=510)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 510.",
      "code": "@GetMapping(\"/extension\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.NOT_EXTENDED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx ignores status 510.",
      "code": "# 510 is not configured"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache ignores status 510.",
      "code": "# 510 is not configured"
    }
  ],
  "commonMistakes": [
    "Using 510 in modern APIs (the HTTP Extension Framework was an experimental proposal that was never widely adopted)."
  ],
  "prevention": [
    "Ensure web API controllers do not generate 510 responses."
  ],
  "faq": [
    {
      "question": "What is the HTTP Extension Framework?",
      "answer": "It was an experimental framework proposal (RFC 2774) designed to allow extending HTTP capabilities by attaching custom header descriptors."
    },
    {
      "question": "Is 510 Not Extended obsolete?",
      "answer": "Yes. The proposal was never widely adopted, and the 510 status code is kept as a reserved legacy code in modern specifications."
    },
    {
      "question": "Is 510 cacheable?",
      "answer": "No. The 510 Not Extended status code is never cached."
    },
    {
      "question": "Can I use 510 in my private project?",
      "answer": "You can, but it is highly recommended to use standard codes like 400 Bad Request or 422 Unprocessable Content instead to maintain client compatibility."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 2774 – HTTP Extension Framework",
      "url": "https://datatracker.ietf.org/doc/html/rfc2774"
    }
  ],
  "relatedErrors": [
    "500-internal-server-error"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Missing mandatory HTTP extension declarations"
    ],
    "checklist": [
      "Include the requested HTTP extensions",
      "Check server extension logs."
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing mandatory HTTP extension declarations",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "510 Not Extended: Complete HTTP Troubleshooting Guide",
  "seoDescription": "Encountering 510 Not Extended in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening again."
};

export default errorData;
