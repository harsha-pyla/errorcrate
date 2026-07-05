import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "204-no-content",
  "name": "204 No Content",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The request has succeeded but there is no payload body to return.",
  "meanDescription": "The HTTP 204 No Content success status code indicates that the request has succeeded, but that the client doesn't need to navigate away from its current page. It is commonly used in REST APIs for DELETE or PUT requests where returning a resource representation is unnecessary.",
  "causes": [
    "Successful DELETE requests removing resources from databases.",
    "Successful PUT/PATCH requests updating database fields where client-side representations are already up-to-date.",
    "CORS preflight OPTIONS requests returning success confirmation headers."
  ],
  "solutions": [
    "Ensure the server does not send a response body payload for a 204 status, otherwise clients may fail to parse it.",
    "Configure client fetch libraries to handle empty payload body streams correctly."
  ],
  "example": {
    "title": "DELETE Api Request",
    "code": "DELETE /api/users/99 HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "DELETE Api Request",
    "code": "DELETE /api/users/99 HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "No Content Response",
    "code": "HTTP/1.1 204 No Content\nDate: Sat, 27 Jun 2026 21:00:00 GMT\n\n(No message body is returned by the server)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 204 No Content for a delete route in Express.",
      "code": "app.delete('/api/users/:id', (req, res) => {\n  res.status(204).end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning status 204 inside Next.js Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport async function PUT() {\n  return new NextResponse(null, { status: 204 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 204.",
      "code": "from django.http import HttpResponse\ndef delete_view(request, id):\n    return HttpResponse(status=204)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring Boot controller returning status 204 No Content.",
      "code": "@DeleteMapping(\"/users/{id}\")\npublic ResponseEntity<Void> delete(@PathVariable Long id) {\n    return ResponseEntity.noContent().build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Returning 204 No Content immediately for CORS OPTIONS preflights.",
      "code": "if ($request_method = 'OPTIONS') { return 204; }"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Returning 204 for OPTIONS calls inside Apache settings.",
      "code": "RewriteCond %{REQUEST_METHOD} OPTIONS\nRewriteRule ^(.*)$ - [R=204,L]"
    }
  ],
  "commonMistakes": [
    "Sending JSON response payload content resulting in client parser errors.",
    "Misconfiguring CORS responses with 200 instead of 204 OPTIONS preflights."
  ],
  "prevention": [
    "Use .end() in Express or null bodies in modern framework responses.",
    "Verify HTTP spec compliance with automated testing frameworks."
  ],
  "faq": [
    {
      "question": "Are there any size restrictions for 204 No Content responses?",
      "answer": "A 204 response must not contain a message body. Any headers specifying content-length or transfer-encoding are either omitted or set to 0."
    },
    {
      "question": "Why does my fetch request fail on a 204 No Content response?",
      "answer": "Many frontend libraries fail if they automatically run 'response.json()' on an empty 204 stream. You must check status first before attempting body decoding."
    },
    {
      "question": "When should I use 204 over 200 in a REST API?",
      "answer": "Use 204 No Content for DELETE actions or updates that do not result in a new object representation required by the UI."
    },
    {
      "question": "Can Nginx return 204 responses directly?",
      "answer": "Yes, Nginx is commonly configured to return 204 directly for health check paths (/health) or cross-origin preflight requests."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204"
    },
    {
      "name": "RFC 7231 – Section 6.3.5",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5"
    }
  ],
  "relatedErrors": [
    "200-ok",
    "205-reset-content"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Successful DELETE requests removing resources",
      "Successful PUT/PATCH requests updating database",
      "CORS preflight OPTIONS requests returning"
    ],
    "checklist": [
      "Ensure the server does not",
      "Configure client fetch libraries to"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Successful DELETE requests removing resources",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Successful PUT/PATCH requests updating database",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "CORS preflight OPTIONS requests returning",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot 204 No Content — HTTP Error Guide",
  "seoDescription": "204 No Content in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
