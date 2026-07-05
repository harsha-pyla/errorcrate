import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "206-partial-content",
  "name": "206 Partial Content",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "Delivering part of the resource due to range headers sent by the client.",
  "meanDescription": "The HTTP 206 Partial Content success status code indicates that the request has succeeded and the body contains the requested ranges of data, as described in the Range header of the request.",
  "causes": [
    "Clients requesting specific byte ranges of large files to resume downloads.",
    "Multi-part range requests asking for multiple non-contiguous segments of a file."
  ],
  "solutions": [
    "Configure web server to support range requests (returns Accept-Ranges: bytes).",
    "Ensure response contains Content-Range header specifying current segment and total size."
  ],
  "example": {
    "title": "Byte Range Request",
    "code": "GET /video.mp4 HTTP/1.1\nHost: streaming.com\nRange: bytes=0-1023",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Byte Range Request",
    "code": "GET /video.mp4 HTTP/1.1\nHost: streaming.com\nRange: bytes=0-1023",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Partial Content Response",
    "code": "HTTP/1.1 206 Partial Content\nContent-Range: bytes 0-1023/459802\nContent-Length: 1024\n\n(1024 bytes of binary video data stream segment)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Streaming partial file content using Node.js stream structures in Express.",
      "code": "app.get('/video', (req, res) => {\n  res.status(206).end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Handling range stream queries in Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return new NextResponse(null, { status: 206 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Using FileResponse with range requests in Django views.",
      "code": "# Django handles FileResponse streaming ranges automatically"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Streaming video chunks using ResourceRegion in Spring Controllers.",
      "code": "@GetMapping(\"/video\")\npublic ResponseEntity<ResourceRegion> getVideo() {\n    return ResponseEntity.status(HttpStatus.PARTIAL_CONTENT).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx byte range slices.",
      "code": "slice 1m;\nproxy_set_header Range $slice_range;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling ranges module output in Apache configurations.",
      "code": "Header set Accept-Ranges bytes"
    }
  ],
  "commonMistakes": [
    "Returning a full 200 OK response with the entire file, ignoring the client's Range header.",
    "Miscalculating byte offsets, leading to corrupted data transfers."
  ],
  "prevention": [
    "Use server defaults instead of writing raw byte range calculations.",
    "Always set correct Content-Range and Content-Type response headers."
  ],
  "faq": [
    {
      "question": "Why is HTTP 206 critical for video streaming?",
      "answer": "It allows video players to request small chunks of a video file dynamically as the user watches, instead of downloading a multi-gigabyte file all at once, saving bandwidth and improving buffer speed."
    },
    {
      "question": "What header specifies the file ranges allowed?",
      "answer": "The server returns the 'Accept-Ranges: bytes' header to indicate that it supports partial downloads."
    },
    {
      "question": "What is the difference between 206 and 416?",
      "answer": "206 indicates success in delivering the requested range, while 416 (Range Not Satisfiable) means the client requested bytes outside the file size limits."
    },
    {
      "question": "Can I request multiple byte ranges in one request?",
      "answer": "Yes. The server will return a 'multipart/byteranges' payload containing each block separated by boundary flags."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206"
    },
    {
      "name": "RFC 7233 – Range Requests",
      "url": "https://datatracker.ietf.org/doc/html/rfc7233#section-4.1"
    }
  ],
  "relatedErrors": [
    "200-ok",
    "416-range-not-satisfiable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Clients requesting specific byte ranges",
      "Multi-part range requests asking for"
    ],
    "checklist": [
      "Configure web server to support range requests (returns Accept-Ranges",
      "Ensure response contains Content-Range header"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Clients requesting specific byte ranges",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Multi-part range requests asking for",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 206 Partial Content Fast — HTTP Solutions Guide",
  "seoDescription": "Getting 206 Partial Content in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
