import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "503-service-unavailable",
  "name": "503 Service Unavailable",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (503)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server is temporarily unavailable.",
  "meanDescription": "The HTTP 503 Service Unavailable response status code indicates that the server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.",
  "causes": [
    "Origin server undergoing maintenance window tasks.",
    "Network routing loops during high-volume traffic spikes.",
    "Failure of downstream database dependency services."
  ],
  "solutions": [
    "Deploy a temporary static backup holding page.",
    "Configure load balancers to scale nodes horizontally.",
    "Implement client back-off and retry logic algorithms."
  ],
  "example": {
    "title": "Server Overload Log",
    "code": "[ERROR] HTTP 503: Connection count exceeded limit (max 5000 concurrent clients reached).",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Server Overload Log",
    "code": "[ERROR] HTTP 503: Connection count exceeded limit (max 5000 concurrent clients reached).",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Service Unavailable Response",
    "code": "HTTP/1.1 503 Service Unavailable\nRetry-After: 3600\nContent-Length: 33\n\n<h1>503 Server Under Maintenance</h1>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 503 status code dynamically during application shutdown.",
      "code": "app.get('/api', (req, res) => {\n  if (app.isShuttingDown) {\n    res.status(503).set('Retry-After', '120').send('Service Unavailable');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning status 503 under server overload warnings.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return new NextResponse('Overloaded', { status: 503, headers: { 'Retry-After': '300' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 503.",
      "code": "from django.http import HttpResponse\ndef maintenance_view(request):\n    response = HttpResponse('Maintenance', status=503)\n    response['Retry-After'] = '3600'\n    return response"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 503.",
      "code": "@GetMapping(\"/service\")\npublic ResponseEntity<String> getService() {\n    return ResponseEntity.status(HttpStatus.SERVICE_UNAVAILABLE).header(\"Retry-After\", \"3600\").body(\"Unavailable\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Returning static maintenance pages for upstream failures.",
      "code": "error_page 503 /maintenance.html;\nlocation = /maintenance.html { root /usr/share/nginx/html; }"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing maintenance redirects using rewrite rules.",
      "code": "RewriteRule ^ - [R=503,L]"
    }
  ],
  "commonMistakes": [
    "Failing to provide a Retry-After header, causing web crawlers to check too frequently during down times.",
    "Allowing downstream crashes to keep backend loops running endlessly instead of failing fast."
  ],
  "prevention": [
    "Configure health check endpoints for automated load balancer traffic routing.",
    "Perform rolling updates instead of synchronous offline maintenance."
  ],
  "faq": [
    {
      "question": "What does the Retry-After header do?",
      "answer": "The Retry-After header advises the client (browsers or crawlers) when they should make their next request. Search engine bots will respect this header to delay crawlers without de-indexing the URL."
    },
    {
      "question": "How does 503 differ from 502 Bad Gateway?",
      "answer": "502 Bad Gateway means Nginx received an invalid/empty response from backend servers. 503 means Nginx or the balancer successfully communicated, but the backend is explicitly refusing connection due to maintenance or overload limits."
    },
    {
      "question": "Can search engines de-index my page if it returns 503?",
      "answer": "No. If a 503 is returned with a 'Retry-After' header, Googlebot knows the site is undergoing maintenance and will revisit later without dropping index ranks."
    },
    {
      "question": "How can I test my 503 holding page?",
      "answer": "In Nginx, temporarily set `return 503;` inside the server block, reload config, and check if the browser serves your custom HTML guide layout."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503"
    },
    {
      "name": "RFC 7231 – Section 6.6.4",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4"
    }
  ],
  "relatedErrors": [
    "500-internal-server-error"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Origin server undergoing maintenance window",
      "Network routing loops during high-volume",
      "Failure of downstream database dependency"
    ],
    "checklist": [
      "Deploy a temporary static backup",
      "Configure load balancers to scale",
      "Implement client back-off and retry"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Origin server undergoing maintenance window",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Network routing loops during high-volume",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Failure of downstream database dependency",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve 503 Service Unavailable — HTTP Debugging Guide",
  "seoDescription": "Troubleshoot 503 Service Unavailable in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in."
};

export default errorData;
