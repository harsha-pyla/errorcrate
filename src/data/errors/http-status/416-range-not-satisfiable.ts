import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "416-range-not-satisfiable",
  "name": "416 Range Not Satisfiable",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The range specified by the Range header in the request cannot be fulfilled.",
  "meanDescription": "The HTTP 416 Range Not Satisfiable client error status code indicates that a server cannot serve the requested ranges of a file. The most common cause is that the requested range is out of the file size boundaries.",
  "causes": [
    "Client requesting byte range offsets that exceed file sizes (e.g., Range: bytes=5000-6000 on a 100-byte file).",
    "Malformed range headers syntaxes."
  ],
  "solutions": [
    "Include a Content-Range header specifying the actual file size (e.g., Content-Range: bytes */100).",
    "Verify client range index calculations."
  ],
  "example": {
    "title": "Invalid Byte Query",
    "code": "GET /file.txt HTTP/1.1\nRange: bytes=5000-6000\n\n(Assuming file.txt is only 200 bytes long)",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Invalid Byte Query",
    "code": "GET /file.txt HTTP/1.1\nRange: bytes=5000-6000\n\n(Assuming file.txt is only 200 bytes long)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Range Out of Bounds Response",
    "code": "HTTP/1.1 416 Range Not Satisfiable\nContent-Range: bytes */200\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express range checks returning 416.",
      "code": "app.get('/file', (req, res) => {\n  const fileSize = 200;\n  // If client range is out of bounds, return 416\n  res.status(416).set('Content-Range', `bytes */${fileSize}`).end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js route returning 416.",
      "code": "export function GET() {\n  return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */100' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 416.",
      "code": "from django.http import HttpResponse\ndef file_view(request):\n    return HttpResponse(status=416)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 416.",
      "code": "@GetMapping(\"/file\")\npublic ResponseEntity<Void> getFile() {\n    return ResponseEntity.status(HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx range filters.",
      "code": "# Nginx handles out of bounds ranges automatically returning 416"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache mod_headers range configurations.",
      "code": "# Apache filters range limits automatically"
    }
  ],
  "commonMistakes": [
    "Failing to include the Content-Range header field indicating actual resource lengths.",
    "Misidentifying 416 as a server crash instead of a client query error."
  ],
  "prevention": [
    "Ensure client media players fetch header details (via HEAD requests) before compiling range requests."
  ],
  "faq": [
    {
      "question": "What header must be returned with a 416 error?",
      "answer": "The server must include a 'Content-Range' header specifying the actual size of the resource using the format 'bytes */size' (e.g. `Content-Range: bytes */500`)."
    },
    {
      "question": "Why is 416 triggered by media players?",
      "answer": "If a video player requests a chunk ahead of buffering limits or requests bytes after a file was dynamically modified and shrunk, the server returns 416."
    },
    {
      "question": "Is 416 cacheable?",
      "answer": "No. The 416 Range Not Satisfiable status code is not cacheable by default."
    },
    {
      "question": "How do clients resolve 416 errors?",
      "answer": "The client should read the actual file size from the returned Content-Range header, reset its request offsets, and issue a new request within bounds."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416"
    },
    {
      "name": "RFC 7233 – Section 4.4",
      "url": "https://datatracker.ietf.org/doc/html/rfc7233#section-4.4"
    }
  ],
  "relatedErrors": [
    "206-partial-content"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requesting byte range offsets that exceed file sizes (e.g., Range",
      "Malformed range headers syntaxes."
    ],
    "checklist": [
      "Include a Content-Range header specifying the actual file size (e.g., Content-Range",
      "Verify client range index calculations."
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requesting byte range offsets that exceed file sizes (e.g., Range",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Malformed range headers syntaxes.",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "416 Range Not Satisfiable Error: Root Causes & Verified.",
  "seoDescription": "Troubleshoot 416 Range Not Satisfiable in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in."
};

export default errorData;
