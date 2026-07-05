import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "508-loop-detected",
  "name": "508 Loop Detected",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server terminated an operation because it encountered an infinite loop.",
  "meanDescription": "The HTTP 508 Loop Detected WebDAV server error status code indicates that the server terminated an operation because it encountered an infinite loop while processing a request with 'Depth: infinity'.",
  "causes": [
    "Circular symbolic directory references inside WebDAV directories requested recursively.",
    "Internal routing loops between server configurations."
  ],
  "solutions": [
    "Audit symbolic folder references inside filesystem shares.",
    "Ensure server commands check folder traversal depths."
  ],
  "example": {
    "title": "WebDAV Traversals Loop",
    "code": "HTTP/1.1 508 Loop Detected\nContent-Type: text/plain\nContent-Length: 13\n\nLoop Detected",
    "language": "http"
  },
  "exampleRequest": {
    "title": "PROPFIND with Depth Infinity",
    "code": "PROPFIND /shared HTTP/1.1\nDepth: infinity",
    "language": "http"
  },
  "exampleResponse": {
    "title": "WebDAV Traversals Loop",
    "code": "HTTP/1.1 508 Loop Detected\nContent-Type: text/plain\nContent-Length: 13\n\nLoop Detected",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 508.",
      "code": "app.get('/traverse', (req, res) => {\n  res.status(508).send('Infinite loop detected in folder traversal.');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning status 508.",
      "code": "export function GET() {\n  return new Response('Loop Detected', { status: 508 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 508.",
      "code": "from django.http import HttpResponse\ndef loop_view(request):\n    return HttpResponse(status=508)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 508.",
      "code": "@GetMapping(\"/loop\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.LOOP_DETECTED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Preventing circular loop proxying.",
      "code": "# Nginx tracks internal redirection limits returning 508 if exceeded"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache directory rules managing recursion limits.",
      "code": "LimitInternalRecursion 10"
    }
  ],
  "commonMistakes": [
    "Configuring symbol links pointing back to parent directories on WebDAV file servers."
  ],
  "prevention": [
    "Guard directories traversal algorithms using visited path caches."
  ],
  "faq": [
    {
      "question": "What is the difference between 508 Loop Detected and 208 Already Reported?",
      "answer": "208 is a successful response (2xx) returned inside a Multi-Status body to indicate a duplicate link was skipped. 508 is an error response (5xx) indicating the server aborted the entire operation because it hit an infinite loop."
    },
    {
      "question": "What header is used to request infinite directory traversal?",
      "answer": "WebDAV clients send the 'Depth: infinity' request header, which tells the server to recursively traverse all subfolders."
    },
    {
      "question": "Is 508 cacheable?",
      "answer": "No. The 508 Loop Detected status code is never cached."
    },
    {
      "question": "How do servers detect loops?",
      "answer": "By keeping a registry of filesystem node IDs (inodes) traversed during the request and checking if any ID is encountered twice."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 5842 – Binding Extensions Section 7.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc5842#section-7.2"
    }
  ],
  "relatedErrors": [
    "208-already-reported"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Circular symbolic directory references inside",
      "Internal routing loops between server"
    ],
    "checklist": [
      "Audit symbolic folder references inside",
      "Ensure server commands check folder"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Circular symbolic directory references inside",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Internal routing loops between server",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 508 Loop Detected Fast — HTTP Solutions Guide",
  "seoDescription": "Fix 508 Loop Detected fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
