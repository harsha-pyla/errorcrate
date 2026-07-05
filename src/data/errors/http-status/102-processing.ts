import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "102-processing",
  "name": "102 Processing",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Informational (1xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "An interim response indicating the server has accepted the request but has not completed it.",
  "meanDescription": "The HTTP 102 Processing status code is an WebDAV extension used to inform the client that the server has accepted the complete request, but has not yet completed it and does not have a final status response ready yet.",
  "causes": [
    "Long-running WebDAV file operations on network folders.",
    "Server resetting client socket connection timeout clock during complex calculations."
  ],
  "solutions": [
    "Extend browser or client fetch request timeout configurations.",
    "Use modern task queues (e.g. Celery, BullMQ) returning job status polling URLs instead of synchronous WebDAV."
  ],
  "example": {
    "title": "WebDAV COPY Command",
    "code": "COPY /large-directory /backup-directory HTTP/1.1\nHost: storage.example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "WebDAV COPY Command",
    "code": "COPY /large-directory /backup-directory HTTP/1.1\nHost: storage.example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Processing Response",
    "code": "HTTP/1.1 102 Processing\n\n(Server resets connection timeout. Work continues in the background)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Simulating interim processing status codes in Express middleware.",
      "code": "app.get('/dav', (req, res) => {\n  res.status(102).send();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API route using Server-Sent Events (SSE) to stream updates instead of 102.",
      "code": "export default async function handler(req: any, res: any) {\n  res.status(102).end();\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning WebDAV XML structures.",
      "code": "from django.http import HttpResponse\ndef dav_view(request):\n    return HttpResponse(status=102)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 102.",
      "code": "@RequestMapping(\"/dav\")\npublic ResponseEntity<Void> handle() {\n    return new ResponseEntity<>(HttpStatus.PROCESSING);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx WebDAV extensions.",
      "code": "dav_methods PUT DELETE MKCOL COPY MOVE;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling WebDAV engine configurations.",
      "code": "DAV On"
    }
  ],
  "commonMistakes": [
    "Assuming standard browsers support 102 Processing status codes dynamically.",
    "Failing to close the socket connection after final operations finish."
  ],
  "prevention": [
    "Use WebSockets or EventSource streams instead of legacy WebDAV 102 status handlers.",
    "Ensure proxies do not buffer headers indefinitely."
  ],
  "faq": [
    {
      "question": "Is 102 Processing deprecated?",
      "answer": "Yes. It was defined in RFC 2518 for WebDAV but has been omitted from RFC 4918 updates, advising developers to use alternate polling mechanisms."
    },
    {
      "question": "Why would my client time out even after receiving a 102 status?",
      "answer": "Many HTTP client libraries have hard-coded timeout limits (e.g. 30 seconds) that ignore informational 102 status code packet updates."
    },
    {
      "question": "What is WebDAV?",
      "answer": "Web Distributed Authoring and Versioning (WebDAV) is a set of extensions to the HTTP protocol which allows clients to perform remote Web content authoring operations."
    },
    {
      "question": "Should I use 102 for standard REST API endpoints?",
      "answer": "No. It is highly recommended to use asynchronous job queues with a status URL (returning 202 Accepted) instead of synchronous 102 blocks."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 4918 – WebDAV extensions",
      "url": "https://datatracker.ietf.org/doc/html/rfc4918#section-12.1"
    }
  ],
  "relatedErrors": [
    "101-switching-protocols",
    "103-early-hints"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Long-running WebDAV file operations on",
      "Server resetting client socket connection"
    ],
    "checklist": [
      "Extend browser or client fetch",
      "Use modern task queues (e.g."
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Long-running WebDAV file operations on",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Server resetting client socket connection",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 102 Processing in HTTP — Step-by-Step Fix",
  "seoDescription": "Getting 102 Processing in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix it."
};

export default errorData;
