import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "201-created",
  "name": "201 Created",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The request has succeeded and has led to the creation of a new resource.",
  "meanDescription": "The HTTP 201 Created success status code indicates that the request has succeeded and has led to the creation of a new resource. The new resource is effectively created before the response is sent back, and its URI is returned in the Location header.",
  "causes": [
    "Successful database inserts triggered by API POST requests.",
    "Uploading a new file to cloud storage bucket directories."
  ],
  "solutions": [
    "Ensure your server includes a Location header pointing to the newly created resource's URL.",
    "Return the created resource representation in the response body if desired."
  ],
  "example": {
    "title": "Resource POST Creation",
    "code": "POST /api/users HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\"name\": \"Alice\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Resource POST Creation",
    "code": "POST /api/users HTTP/1.1\nHost: example.com\nContent-Type: application/json\n\n{\"name\": \"Alice\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Created Success Response",
    "code": "HTTP/1.1 201 Created\nLocation: /api/users/99\nContent-Type: application/json\n\n{\"id\": 99, \"name\": \"Alice\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 201 status code and Location header in Express.",
      "code": "app.post('/api/users', (req, res) => {\n  const newId = 99;\n  res.setHeader('Location', `/api/users/${newId}`);\n  res.status(201).json({ id: newId, name: req.body.name });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 201 status inside Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport async function POST(req: Request) {\n  return NextResponse.json({ id: 99 }, { status: 201, headers: { 'Location': '/api/users/99' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning Http response 201 in Django REST Framework.",
      "code": "from rest_framework.response import Response\nfrom rest_framework import status\n\ndef create_user(request):\n    return Response({'id': 99}, status=status.HTTP_201_CREATED)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Returning 201 Created with URI location headers in Spring Controllers.",
      "code": "@PostMapping(\"/users\")\npublic ResponseEntity<User> create(@RequestBody User user) {\n    URI location = ServletUriComponentsBuilder.fromCurrentRequest().path(\"/{id}\").buildAndExpand(99).toUri();\n    return ResponseEntity.created(location).body(user);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Passing Location headers transparently from upstream application servers.",
      "code": "proxy_pass http://app_servers;\nproxy_redirect off;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Setting ProxyPass headers for location rewrites.",
      "code": "ProxyPassReverse /api http://app_servers/api"
    }
  ],
  "commonMistakes": [
    "Returning HTTP 200 OK instead of 201 Created when a resource is actually created.",
    "Omitting the Location header field, which is expected by REST standards."
  ],
  "prevention": [
    "Enforce RESTful API guidelines across your development team.",
    "Automate integration tests checking response headers and codes."
  ],
  "faq": [
    {
      "question": "Should a 201 response include payload body contents?",
      "answer": "While not strictly required, it is highly recommended to return the newly created object representation (including auto-generated IDs or database timestamps) to save clients an additional GET request."
    },
    {
      "question": "What is the purpose of the Location header in 201?",
      "answer": "It informs the client client where the newly created resource resides so the client can query or manage it."
    },
    {
      "question": "Does a 201 Created trigger a browser redirect?",
      "answer": "No. The browser does not navigate away; it simply receives the success confirmation. Redirects must be managed by the application JavaScript."
    },
    {
      "question": "When should I use 200 vs 201?",
      "answer": "Use 201 Created exclusively when a new database record or file is created. For updates (PUT/PATCH), use 200 OK or 204 No Content."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201"
    },
    {
      "name": "RFC 7231 – Section 6.3.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2"
    }
  ],
  "relatedErrors": [
    "200-ok",
    "202-accepted"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Successful database inserts triggered by",
      "Uploading a new file to"
    ],
    "checklist": [
      "Ensure your server includes a",
      "Return the created resource representation"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Successful database inserts triggered by",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Uploading a new file to",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve 201 Created — HTTP Debugging Guide",
  "seoDescription": "Encountering 201 Created in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening again."
};

export default errorData;
