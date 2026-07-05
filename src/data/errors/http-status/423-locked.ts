import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "423-locked",
  "name": "423 Locked",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The resource that is being accessed is locked.",
  "meanDescription": "The HTTP 423 Locked WebDAV status code indicates that the resource that is being accessed is locked. WebDAV clients must unlock the resource first before performing write operations.",
  "causes": [
    "Accessing files locked by concurrent edit operations inside WebDAV folders."
  ],
  "solutions": [
    "Obtain lock tokens or check folder lock locks before editing.",
    "Issue UNLOCK commands to release resources."
  ],
  "example": {
    "title": "Editing Locked File",
    "code": "PUT /documents/locked-file.txt HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Editing Locked File",
    "code": "PUT /documents/locked-file.txt HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Locked File Response",
    "code": "HTTP/1.1 423 Locked\nContent-Type: text/xml\n\n<error xmlns=\"DAV:\"><lock-token-submitted/></error>",
    "language": "xml"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning WebDAV status 423.",
      "code": "app.put('/dav/file', (req, res) => {\n  res.status(423).send('Resource Locked');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "API Route returning status 423.",
      "code": "export function PUT() {\n  return new Response('Locked', { status: 423 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 423.",
      "code": "from django.http import HttpResponse\ndef my_view(request):\n    return HttpResponse(status=423)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 423.",
      "code": "@PutMapping(\"/dav\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.LOCKED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx WebDAV lock support.",
      "code": "dav_methods PUT DELETE MKCOL COPY MOVE;\n# WebDAV lock directives"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling DAV lock directories in Apache.",
      "code": "DavLockDB \"/var/spool/dav/DavLock\""
    }
  ],
  "commonMistakes": [
    "Failing to submit correct lock-token headers when trying to overwrite a locked file."
  ],
  "prevention": [
    "Check file lock state using PROPFIND methods before starting heavy edits."
  ],
  "faq": [
    {
      "question": "What protocol introduced the 423 status code?",
      "answer": "It was introduced by WebDAV (Web Distributed Authoring and Versioning) extensions in RFC 4918."
    },
    {
      "question": "How do WebDAV clients unlock resources?",
      "answer": "The client must issue an HTTP UNLOCK request pointing to the target URL, carrying the corresponding Lock-Token header."
    },
    {
      "question": "Is 423 cacheable?",
      "answer": "No. The 423 Locked status code is never cached."
    },
    {
      "question": "Can I use 423 in database APIs?",
      "answer": "Yes. If an account is locked due to security blocks or consecutive password failures, 423 is a highly semantic status code to return."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 4918 – Section 11.3",
      "url": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.3"
    }
  ],
  "relatedErrors": [
    "403-forbidden"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Accessing files locked by concurrent"
    ],
    "checklist": [
      "Obtain lock tokens or check",
      "Issue UNLOCK commands to release"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Accessing files locked by concurrent",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "423 Locked: Quick Fix Guide for HTTP Developers",
  "seoDescription": "Fix 423 Locked fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
