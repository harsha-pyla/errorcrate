import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "413-content-too-large",
  "name": "413 Content Too Large",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "Request entity is larger than limits defined by the server.",
  "meanDescription": "The HTTP 413 Content Too Large client error status code (formerly Payload Too Large) indicates that the request entity is larger than limits defined by the server; the server might close the connection or return a Retry-After header field.",
  "causes": [
    "Uploading files that exceed server configuration limits (e.g. Nginx client_max_body_size).",
    "Sending extremely large JSON array batches to REST endpoints."
  ],
  "solutions": [
    "Increase server file upload size configurations.",
    "Chunk large files into smaller segment slices during client-side uploads.",
    "Check server request limit variables."
  ],
  "example": {
    "title": "Overlimit File Upload",
    "code": "POST /upload HTTP/1.1\nContent-Length: 104857600\n\n(100MB file binary stream...)",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Overlimit File Upload",
    "code": "POST /upload HTTP/1.1\nContent-Length: 104857600\n\n(100MB file binary stream...)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Payload Too Large Response",
    "code": "HTTP/1.1 413 Content Too Large\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Setting body parser size limits in Express.",
      "code": "const express = require('express');\nconst app = express();\n// Limit JSON payload body size to 1MB\napp.use(express.json({ limit: '1mb' }));"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js custom config disabling default body sizes inside route handlers.",
      "code": "export const config = {\n  api: { bodyParser: { sizeLimit: '1mb' } },\n};"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django file upload limits settings.",
      "code": "# settings.py\nFILE_UPLOAD_MAX_MEMORY_SIZE = 1048576 # 1MB limit"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Configuring multipart upload limits in application.properties.",
      "code": "spring.servlet.multipart.max-file-size=1MB\nspring.servlet.multipart.max-request-size=1MB"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Increasing client max body size limit in Nginx.",
      "code": "server {\n    client_max_body_size 50M;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache directory file limit rule configurations.",
      "code": "LimitRequestBody 52428800"
    }
  ],
  "commonMistakes": [
    "Setting backend application body limits higher than proxy (Nginx) limits (results in Nginx returning 413 before the app even receives it).",
    "Failing to handle 413 gracefully on the client UI, causing file upload animations to freeze."
  ],
  "prevention": [
    "Synchronize body size limits across reverse proxies, app gateways, and frameworks.",
    "Check file sizes on the client side using JavaScript before starting uploads."
  ],
  "faq": [
    {
      "question": "What is the new name of 413 Payload Too Large?",
      "answer": "In newer HTTP specifications, the name has been updated to '413 Content Too Large' to reflect that it applies to the body content size regardless of payload framing."
    },
    {
      "question": "How do I fix a 413 error in Nginx?",
      "answer": "Add or increase the 'client_max_body_size' directive inside your nginx.conf server or location blocks (e.g. `client_max_body_size 10M;`)."
    },
    {
      "question": "Can I return a Retry-After header with 413?",
      "answer": "Yes, servers can include a 'Retry-After' header indicating when the client should try the transaction again."
    },
    {
      "question": "Should I use chunked uploads to prevent 413?",
      "answer": "Yes. Splitting large files into 1MB-5MB chunks and uploading them sequentially is the best way to bypass server size constraints."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413"
    },
    {
      "name": "RFC 7231 – Section 6.5.11",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11"
    }
  ],
  "relatedErrors": [
    "411-length-required"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Uploading files that exceed server",
      "Sending extremely large JSON array"
    ],
    "checklist": [
      "Increase server file upload size",
      "Chunk large files into smaller",
      "Check server request limit variables."
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Uploading files that exceed server",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Sending extremely large JSON array",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "413 Content Too Large Explained: Causes, Fixes & Prevention",
  "seoDescription": "Fix 413 Content Too Large fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
