import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "100-continue",
  "name": "100 Continue",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Informational (1xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server has received the request headers, and the client should proceed to send the request body.",
  "meanDescription": "The HTTP 100 Continue informational status code indicates that everything so far is OK and that the client should continue the request or ignore the response if the request is already finished.",
  "causes": [
    "Client sent 'Expect: 100-continue' header to verify server acceptance before uploading large file payload body data.",
    "Proxy server intermediate validation checks passing authentication headers successfully."
  ],
  "solutions": [
    "Client should wait for 100 Continue response before streaming the request body data.",
    "Configure reverse proxies to allow expect header pass-through pipelines."
  ],
  "example": {
    "title": "Expect 100 Request Header",
    "code": "POST /upload HTTP/1.1\nHost: example.com\nExpect: 100-continue\nContent-Length: 987654",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Expect 100 Request Header",
    "code": "POST /upload HTTP/1.1\nHost: example.com\nExpect: 100-continue\nContent-Length: 987654",
    "language": "http"
  },
  "exampleResponse": {
    "title": "100 Continue Server Response",
    "code": "HTTP/1.1 100 Continue\n\n(Server is ready for client to stream the remaining body payload)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Handling expect headers in Express server applications.",
      "code": "const express = require('express');\nconst app = express();\n\napp.post('/upload', (req, res) => {\n  res.status(200).send('Upload completed');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Handling preflight body uploads in custom Next.js API Routes.",
      "code": "import type { NextApiRequest, NextApiResponse } from 'next';\n\nexport default async function handler(req: NextApiRequest, res: NextApiResponse) {\n  if (req.headers['expect'] === '100-continue') {\n    res.status(100).end();\n  }\n  res.status(200).json({ success: true });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Standard middleware configuration checking payload size thresholds.",
      "code": "from django.http import HttpResponse\n\ndef upload_view(request):\n    return HttpResponse('Upload Success')"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Overriding Expectation values in Java Spring controllers.",
      "code": "@PostMapping(\"/upload\")\npublic ResponseEntity<String> upload() {\n    return ResponseEntity.ok(\"Uploaded\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Setting buffer and client body size thresholds to handle expect operations.",
      "code": "server {\n    client_max_body_size 10M;\n    client_body_buffer_size 128k;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring LimitRequestBody in Apache servers.",
      "code": "LimitRequestBody 10485760"
    }
  ],
  "commonMistakes": [
    "Client sending the body payload immediately without waiting for the 100 Continue response.",
    "Server rejecting 100-continue headers due to proxy timeout limits."
  ],
  "prevention": [
    "Verify intermediate load balancers support HTTP Expect headers correctly.",
    "Ensure client libraries timeout gracefully if the server fails to return 100."
  ],
  "faq": [
    {
      "question": "What is the main purpose of 100 Continue?",
      "answer": "It allows clients to check if the server will accept a large request (based on headers like authentication or content-length) before sending the actual body, saving bandwidth and processing time."
    },
    {
      "question": "Does standard Axios support 100-continue automatically?",
      "answer": "Yes, Node.js HTTP client layers manage Expect headers, but explicit configuration may be needed in web browser clients since browsers stream uploads differently."
    },
    {
      "question": "Can Nginx intercept and return 100-continue?",
      "answer": "Yes, Nginx handles 100-continue handshakes automatically on behalf of upstream servers to prevent unauthenticated payload streaming."
    },
    {
      "question": "Is there a performance downside to using 100 Continue?",
      "answer": "Yes. It adds an extra network round-trip for headers checking, which can slow down small payload requests. It should only be used for large uploads."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100"
    },
    {
      "name": "RFC 7231 – Section 6.2.1",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1"
    }
  ],
  "relatedErrors": [
    "101-switching-protocols",
    "400-bad-request"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client sent 'Expect",
      "Proxy server intermediate validation checks"
    ],
    "checklist": [
      "Client should wait for 100",
      "Configure reverse proxies to allow"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client sent 'Expect",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Proxy server intermediate validation checks",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 100 Continue Fast — HTTP Solutions Guide",
  "seoDescription": "100 Continue in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
