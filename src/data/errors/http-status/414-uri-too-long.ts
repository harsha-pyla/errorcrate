import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "414-uri-too-long",
  "name": "414 URI Too Long",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The URI requested by the client is longer than the server is willing to interpret.",
  "meanDescription": "The HTTP 414 URI Too Long client error status code indicates that the URI requested by the client is longer than the server is willing to interpret (e.g., when query string parameters exceed buffer limits).",
  "causes": [
    "Client passing extremely long query strings or arrays inside GET parameters.",
    "Redirection loops appending parameters recursively.",
    "Deceptive security injection payloads inside URIs."
  ],
  "solutions": [
    "Convert the request from GET to POST method, passing parameters inside the request body payload instead.",
    "Increase server URI buffer size limits (e.g. large_client_header_buffers in Nginx)."
  ],
  "example": {
    "title": "Overlimit URI Query",
    "code": "GET /search?q=verylongstring... (Exceeding 8192 characters) HTTP/1.1\nHost: site.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Overlimit URI Query",
    "code": "GET /search?q=verylongstring... (Exceeding 8192 characters) HTTP/1.1\nHost: site.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "URI Too Long Response",
    "code": "HTTP/1.1 414 URI Too Long\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 414 for excessive query lengths.",
      "code": "app.get('/search', (req, res) => {\n  if (req.url.length > 4000) {\n    return res.status(414).send('URI Too Long');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js route checking URL length parameters.",
      "code": "export function GET(request: Request) {\n  if (request.url.length > 4096) {\n    return new Response('URI Too Long', { status: 414 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view checking URL limits.",
      "code": "from django.http import HttpResponse\ndef search(request):\n    return HttpResponse(status=414)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 414.",
      "code": "@GetMapping(\"/search\")\npublic ResponseEntity<Void> check(HttpServletRequest request) {\n    if (request.getRequestURI().length() > 4000) {\n        return ResponseEntity.status(HttpStatus.URI_TOO_LONG).build();\n    }\n    return ResponseEntity.ok().build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Increasing URI buffer size limits in Nginx.",
      "code": "client_header_buffer_size 16k;\nlarge_client_header_buffers 4 16k;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring LimitRequestLine in Apache.",
      "code": "LimitRequestLine 16384"
    }
  ],
  "commonMistakes": [
    "Using GET requests with hundreds of query parameters instead of POST.",
    "Misconfiguring redirects, causing recursion loops that grow the URL on each cycle."
  ],
  "prevention": [
    "Audit client requests to ensure payload data is transmitted via POST body streams.",
    "Configure web servers to reject excessively long URLs to prevent buffer overflow attacks."
  ],
  "faq": [
    {
      "question": "What is the typical URL length limit on web servers?",
      "answer": "Most modern web servers default to a limit of 8KB (8192 characters) for the request URI and header buffers."
    },
    {
      "question": "Why is GET replaced with POST to fix 414?",
      "answer": "GET requests put all parameters in the URL path. POST requests pass parameters in the request body, which has no URL length constraints."
    },
    {
      "question": "Can search engine crawlers trigger 414?",
      "answer": "Very rarely, unless a site has recursive redirect links generating infinite query strings."
    },
    {
      "question": "Do browsers have URL length limits?",
      "answer": "Yes. Internet Explorer historically limited URLs to 2083 characters. Modern browsers (Chrome, Firefox, Safari) support URLs up to 64,000+ characters."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414"
    },
    {
      "name": "RFC 7231 – Section 6.5.12",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12"
    }
  ],
  "relatedErrors": [
    "431-request-header-fields-too-large",
    "413-content-too-large"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client passing extremely long query",
      "Redirection loops appending parameters recursively.",
      "Deceptive security injection payloads inside"
    ],
    "checklist": [
      "Convert the request from GET",
      "Increase server URI buffer size"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client passing extremely long query",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Redirection loops appending parameters recursively.",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Deceptive security injection payloads inside",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix 414 URI Too Long in HTTP (With Examples)",
  "seoDescription": "Encountering 414 URI Too Long in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening again."
};

export default errorData;
