import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "200-ok",
  "name": "200 OK",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The request has succeeded. The meaning of a success varies depending on the HTTP method.",
  "meanDescription": "The HTTP 200 OK status code indicates that the request has succeeded. A 200 response is cacheable by default. The payload sent in a 200 response depends on the request method (e.g., resource representation for GET, action results for POST).",
  "causes": [
    "Successful GET request fetching web pages, images, or JSON data.",
    "Successful POST, PUT, or DELETE request completing operations on the server."
  ],
  "solutions": [
    "No action needed for a 200 OK status as it indicates successful execution.",
    "Verify response header Content-Type matches client expectation (e.g. application/json)."
  ],
  "example": {
    "title": "Standard GET Request",
    "code": "GET /index.html HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Standard GET Request",
    "code": "GET /index.html HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "OK Response Payload",
    "code": "HTTP/1.1 200 OK\nContent-Type: text/html; charset=UTF-8\nContent-Length: 32\n\n<html><body>Hello</body></html>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 200 OK with JSON response payload in Express.",
      "code": "app.get('/api/data', (req, res) => {\n  res.status(200).json({ success: true, payload: [] });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning JSON responses in Next.js Server Actions or Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport async function GET() {\n  return NextResponse.json({ success: true }, { status: 200 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning a JsonResponse status 200 in Django views.",
      "code": "from django.http import JsonResponse\ndef my_view(request):\n    return JsonResponse({'success': True}, status=200)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 200 OK.",
      "code": "@GetMapping(\"/data\")\npublic ResponseEntity<Map<String, Object>> getData() {\n    return ResponseEntity.ok(Map.of(\"success\", true));\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring standard file serving resulting in 200 OK status codes.",
      "code": "location / {\n    try_files $uri $uri/ =404;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Setting DirectoryIndex options to serve base file requests.",
      "code": "DirectoryIndex index.html"
    }
  ],
  "commonMistakes": [
    "Returning HTTP 200 OK but embedding error messages (e.g. { error: 'Database failed' }) in the payload body (Soft 200).",
    "Failing to set cache-control headers, resulting in stale cached responses."
  ],
  "prevention": [
    "Strictly map HTTP status codes to actual backend results (e.g., return 500 for backend crash instead of 200).",
    "Use robust validation middleware before executing request logic."
  ],
  "faq": [
    {
      "question": "What is a 'Soft 200' error?",
      "answer": "A Soft 200 happens when a page returns a 200 OK status code, but the page content is actually an error message (like a 404 or server crash). This confuses search crawlers and client fetch wrappers."
    },
    {
      "question": "Are 200 OK responses cached by default?",
      "answer": "Yes, GET requests resulting in a 200 OK are cached unless explicit cache-control headers (like Cache-Control: no-store) are returned by the server."
    },
    {
      "question": "Can POST requests return 200 OK?",
      "answer": "Yes. If a POST request processes an action and returns the output payload directly, 200 OK is the standard response code."
    },
    {
      "question": "How does 200 OK differ from 304 Not Modified?",
      "answer": "A 200 OK returns the full response payload body, whereas 304 Not Modified tells the browser that the cached local version is still valid, skipping body data downloads."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200"
    },
    {
      "name": "RFC 7231 – Section 6.3.1",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1"
    }
  ],
  "relatedErrors": [
    "201-created",
    "204-no-content"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Successful GET request fetching web",
      "Successful POST, PUT, or DELETE"
    ],
    "checklist": [
      "No action needed for a",
      "Verify response header Content-Type matches"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Successful GET request fetching web",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Successful POST, PUT, or DELETE",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "200 OK: Quick Fix Guide for HTTP Developers",
  "seoDescription": "Fix 200 OK fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
