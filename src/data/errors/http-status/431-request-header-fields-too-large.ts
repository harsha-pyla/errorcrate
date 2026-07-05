import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "431-request-header-fields-too-large",
  "name": "431 Request Header Fields Too Large",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Server is unwilling to process request because header fields are too large.",
  "meanDescription": "The HTTP 431 Request Header Fields Too Large client error status code indicates that the server is unwilling to process the request because either an individual header field, or all the header fields in collective, are too large.",
  "causes": [
    "Accumulation of huge browser cookie files.",
    "Extremely long Referer URLs.",
    "Excessive custom HTTP headers sent by client libraries."
  ],
  "solutions": [
    "Clear client browser cookies and local storage parameters.",
    "Increase proxy header buffer limit configurations (e.g. large_client_header_buffers in Nginx)."
  ],
  "example": {
    "title": "Bloated Cookie Headers",
    "code": "GET /api HTTP/1.1\nCookie: longsessionstring123... (Accumulating over 16KB of session data)\nHost: site.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Bloated Cookie Headers",
    "code": "GET /api HTTP/1.1\nCookie: longsessionstring123... (Accumulating over 16KB of session data)\nHost: site.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Header Too Large Response",
    "code": "HTTP/1.1 431 Request Header Fields Too Large\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router checking header sizes.",
      "code": "app.use((req, res, next) => {\n  const headersStr = JSON.stringify(req.headers);\n  if (headersStr.length > 8000) {\n    return res.status(431).send('Header fields too large');\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning 431.",
      "code": "export function GET() {\n  return new Response('Header fields too large', { status: 431 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 431.",
      "code": "from django.http import HttpResponse\ndef check_headers(request):\n    return HttpResponse(status=431)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 431.",
      "code": "@GetMapping(\"/check\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(431).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Increasing Nginx client header buffer parameters.",
      "code": "large_client_header_buffers 4 16k;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring Apache RequestField limits.",
      "code": "LimitRequestFieldSize 16384"
    }
  ],
  "commonMistakes": [
    "Storing massive session objects inside client cookies instead of database sessions.",
    "Confusing 431 (headers too large) with 414 (URL too long)."
  ],
  "prevention": [
    "Store large user session data parameters in backend caching datastores (like Redis), keeping cookies light."
  ],
  "faq": [
    {
      "question": "What is the most common cause of a 431 error?",
      "answer": "The accumulation of cookies. Over time, web apps might append multiple authorization, tracker, and session cookies, eventually bloating headers past server size limits."
    },
    {
      "question": "How can users fix 431 errors in their browser?",
      "answer": "Users can clear browser history, cookies, and site cache for the affected domain to wipe the bloated headers."
    },
    {
      "question": "What is the default header size limit on servers?",
      "answer": "Most modern web servers (Node.js, Apache, Nginx) default to limits between 8KB and 16KB for header buffers."
    },
    {
      "question": "Is 431 cacheable?",
      "answer": "No. The 431 Request Header Fields Too Large status code is never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 6585 – Additional HTTP Status Codes",
      "url": "https://datatracker.ietf.org/doc/html/rfc6585#section-5"
    }
  ],
  "relatedErrors": [
    "414-uri-too-long"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Accumulation of huge browser cookie",
      "Extremely long Referer URLs.",
      "Excessive custom HTTP headers sent"
    ],
    "checklist": [
      "Clear client browser cookies and",
      "Increase proxy header buffer limit"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Accumulation of huge browser cookie",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Extremely long Referer URLs.",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Excessive custom HTTP headers sent",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 431 Request Header Fields Too Large Fast — HTTP.",
  "seoDescription": "Getting 431 Request Header Fields Too Large in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with."
};

export default errorData;
