import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "400-bad-request",
  "name": "400 Bad Request",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (400)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server cannot process the request due to something that is perceived to be a client error.",
  "meanDescription": "The HTTP 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).",
  "causes": [
    "Malformed request syntax in headers or body payload data.",
    "Request cookie size exceeds server limits.",
    "Deceptive or invalid network gateway requests."
  ],
  "solutions": [
    "Verify client query parameters and request serialization formats.",
    "Clear client browser cookies and cached site files.",
    "Check proxy and firewall access configurations."
  ],
  "example": {
    "title": "Malformed HTTP Headers",
    "code": "GET /index.html HTTP/1.1\nInvalid-Header: {MalformedJSONHere}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Malformed HTTP Headers",
    "code": "GET /index.html HTTP/1.1\nInvalid-Header: {MalformedJSONHere}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Bad Request Response",
    "code": "HTTP/1.1 400 Bad Request\nContent-Type: text/plain\nContent-Length: 15\n\nBad Request (400)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware validating JSON payloads and returning 400.",
      "code": "app.post('/api/users', (req, res) => {\n  if (!req.body.name) {\n    return res.status(400).json({ error: 'Name is required' });\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 400 Bad Request inside API Routes.",
      "code": "import { NextResponse } from 'next/server';\nexport async function POST(request: Request) {\n  const data = await request.json().catch(() => null);\n  if (!data) return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning a JsonResponse status 400 in Django views.",
      "code": "from django.http import JsonResponse\ndef my_view(request):\n    if request.method != 'POST':\n        return JsonResponse({'error': 'POST required'}, status=400)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 400.",
      "code": "@PostMapping(\"/users\")\npublic ResponseEntity<String> register(@RequestBody User user) {\n    if (user.getName() == null) {\n        return ResponseEntity.badRequest().body(\"Name is required\");\n    }\n    return ResponseEntity.ok(\"Success\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Setting buffer limits to reject overly large header sizes.",
      "code": "large_client_header_buffers 4 8k;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring LimitRequestFieldSize rules.",
      "code": "LimitRequestFieldSize 8190"
    }
  ],
  "commonMistakes": [
    "Returning HTTP 200 OK with error bodies (Soft 200) instead of a clear 400 Bad Request.",
    "Sending unescaped query string arguments, resulting in server-side parsing crashes."
  ],
  "prevention": [
    "Implement standard payload schema validators (e.g. Zod, Joi, or Hibernate Validators).",
    "Sanitize and encode all URI query parameters."
  ],
  "faq": [
    {
      "question": "Can a client-side library trigger 400 errors?",
      "answer": "Yes. If an AJAX request fails to serialize its payload (e.g., sending invalid JSON string representations), the receiving server will reject the request as a 400 Bad Request."
    },
    {
      "question": "What is the difference between 400 Bad Request and 422 Unprocessable Entity?",
      "answer": "400 means syntax is corrupt (like invalid JSON). 422 means syntax is correct, but semantic rules fail (like email address already taken)."
    },
    {
      "question": "How do I log 400 errors?",
      "answer": "Log them in backend request filters before returning responses. Ensure client payload trace details are captured."
    },
    {
      "question": "Can invalid cookies cause a 400 Bad Request?",
      "answer": "Yes. If browser cookie sizes accumulate beyond proxy buffer limits, Nginx or Apache will reject the request with a 400 Bad Request."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400"
    },
    {
      "name": "RFC 7231 – Section 6.5.1",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1"
    }
  ],
  "relatedErrors": [
    "404-not-found",
    "403-forbidden"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Malformed request syntax in headers",
      "Request cookie size exceeds server",
      "Deceptive or invalid network gateway"
    ],
    "checklist": [
      "Verify client query parameters and",
      "Clear client browser cookies and",
      "Check proxy and firewall access"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Malformed request syntax in headers",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Request cookie size exceeds server",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Deceptive or invalid network gateway",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 400 Bad Request in HTTP — Causes & Solutions",
  "seoDescription": "Troubleshoot 400 Bad Request in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
