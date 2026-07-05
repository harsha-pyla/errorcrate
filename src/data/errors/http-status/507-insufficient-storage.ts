import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "507-insufficient-storage",
  "name": "507 Insufficient Storage",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server is unable to store the representation needed to complete the request.",
  "meanDescription": "The HTTP 507 Insufficient Storage WebDAV status code indicates that the server is unable to store the representation needed to complete the request (e.g., when the server disk space is full).",
  "causes": [
    "Server hard drive partition running out of disk space (0 bytes free).",
    "Uploading large files that exceed user quota allocations inside storage buckets."
  ],
  "solutions": [
    "Clean up temporary files, logs, and docker image volumes.",
    "Upgrade server hard drive disk storage partitions.",
    "Set alert monitors for disk usage thresholds (e.g. using Prometheus/Grafana)."
  ],
  "example": {
    "title": "Disk Full Response",
    "code": "HTTP/1.1 507 Insufficient Storage\nContent-Type: application/json\n\n{\"error\": \"Write failed: Disk partition '/var/www' is full (0 bytes free).\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Uploading Document to Full Disk",
    "code": "PUT /documents/movie.mp4 HTTP/1.1\nHost: storage.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Disk Full Response",
    "code": "HTTP/1.1 507 Insufficient Storage\nContent-Type: application/json\n\n{\"error\": \"Write failed: Disk partition '/var/www' is full (0 bytes free).\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router checking disk space before saving files.",
      "code": "const fs = require('fs');\napp.post('/upload', (req, res) => {\n  // Check disk space; if full, return 507\n  res.status(507).send('Insufficient disk storage.');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "API Route returning status 507.",
      "code": "export function POST() {\n  return new Response('Insufficient Storage', { status: 507 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 507.",
      "code": "from django.http import HttpResponse\ndef upload_view(request):\n    return HttpResponse(status=507)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 507.",
      "code": "@PostMapping(\"/upload\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.INSUFFICIENT_STORAGE).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx WebDAV file upload setups.",
      "code": "# WebDAV disk checks"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache directory rules managing locks.",
      "code": "# Apache disk filters"
    }
  ],
  "commonMistakes": [
    "Confusing 507 with 413 Content Too Large (use 413 when the *client request* exceeds size limits; use 507 when the *server disk* is full)."
  ],
  "prevention": [
    "Setup automated cron scripts to delete logs files older than 14 days.",
    "Move file uploads to cloud object storage (AWS S3, Google Cloud Storage) instead of local server disks."
  ],
  "faq": [
    {
      "question": "What is the origin of 507 Insufficient Storage?",
      "answer": "It was defined in the WebDAV specification (RFC 4918) to handle filesystem space limits during remote authoring upload commands."
    },
    {
      "question": "What is the difference between 413 and 507?",
      "answer": "Use 413 Content Too Large when the client tries to upload a file larger than allowed by configuration. Use 507 when the upload is allowed but the server's hard drive has run out of space."
    },
    {
      "question": "Is 507 Insufficient Storage cacheable?",
      "answer": "No. 507 responses are never cached."
    },
    {
      "question": "How do I monitor disk space to prevent 507?",
      "answer": "Configure server monitoring tools (e.g. Datadog, Prometheus node-exporter) to send Slack or email alerts when disk usage exceeds 85%."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 4918 – Section 11.5",
      "url": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.5"
    }
  ],
  "relatedErrors": [
    "413-content-too-large",
    "500-internal-server-error"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Server hard drive partition running",
      "Uploading large files that exceed"
    ],
    "checklist": [
      "Clean up temporary files, logs,",
      "Upgrade server hard drive disk",
      "Set alert monitors for disk"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Server hard drive partition running",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Uploading large files that exceed",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "507 Insufficient Storage Error: Root Causes & Verified Fixes",
  "seoDescription": "Resolve 507 Insufficient Storage in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
