import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "203-non-authoritative-information",
  "name": "203 Non-Authoritative Information",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The returned meta-information is not exactly the same as is available from the origin server.",
  "meanDescription": "The HTTP 203 Non-Authoritative Information status code indicates that the request was successful, but the payloads received have been modified by a transforming proxy from that of the origin server's 200 OK response.",
  "causes": [
    "Intermediate proxies or CDNs altering payload headers or content (e.g. converting images on the fly).",
    "API gateways combining multiple responses and returning customized metadata fields."
  ],
  "solutions": [
    "Check proxy headers (such as Warning or Via) indicating transformations.",
    "Establish direct connection to the origin server if unaltered payloads are critical."
  ],
  "example": {
    "title": "Proxy Transformation Request",
    "code": "GET /large-image.jpg HTTP/1.1\nHost: cdn-proxy.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Proxy Transformation Request",
    "code": "GET /large-image.jpg HTTP/1.1\nHost: cdn-proxy.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Proxy Altered Response",
    "code": "HTTP/1.1 203 Non-Authoritative Information\nContent-Type: image/webp\nWarning: 214 - \"Transformation Applied\"\n\n(Payload content has been compressed or transformed by proxy)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware returning 203 status for proxy compatibility checks.",
      "code": "app.get('/gateway', (req, res) => {\n  res.status(203).json({ source: 'proxy-aggregated', data: {} });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Edge route handler returning status 203.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return new NextResponse(null, { status: 203 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django HttpResponse returning status 203.",
      "code": "from django.http import HttpResponse\ndef proxy_view(request):\n    return HttpResponse(status=203)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 203.",
      "code": "@GetMapping(\"/gateway\")\npublic ResponseEntity<Void> getProxyInfo() {\n    return new ResponseEntity<>(HttpStatus.NON_AUTHORITATIVE_INFORMATION);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Enabling image filter transformations in Nginx, changing payload characteristics.",
      "code": "image_filter resize 150 100;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring mod_ext_filter to alter files dynamically.",
      "code": "ExtFilterDefine gzip mode=output cmd=/bin/gzip"
    }
  ],
  "commonMistakes": [
    "Assuming the payload checksum matches the origin server checksum when receiving a 203 response.",
    "Misidentifying proxy warnings as server crashes."
  ],
  "prevention": [
    "Use SSL/TLS (HTTPS) connection pipelines to prevent intermediate proxies from altering response payloads.",
    "Add Cache-Control: no-transform headers to prevent CDN proxies from modifying data."
  ],
  "faq": [
    {
      "question": "Is HTTP 203 cached by web browsers?",
      "answer": "Yes, 203 Non-Authoritative Information responses are cacheable by default unless specific cache-control constraints are set."
    },
    {
      "question": "How do proxies trigger a 203 response?",
      "answer": "A proxy triggers 203 when it intercepts a 200 OK from the origin, compresses or repackages the payload (like converting JPG to WebP), and forwards it."
    },
    {
      "question": "What header prevents proxy payload modifications?",
      "answer": "Setting the 'Cache-Control: no-transform' header forbids intermediate proxies from changing response details."
    },
    {
      "question": "Does 203 indicate authorization failures?",
      "answer": "No. It is a success code (2xx), not an authorization block (401/403). It simply signals metadata modifications."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203"
    },
    {
      "name": "RFC 7231 – Section 6.3.4",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4"
    }
  ],
  "relatedErrors": [
    "200-ok",
    "204-no-content"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Intermediate proxies or CDNs altering",
      "API gateways combining multiple responses"
    ],
    "checklist": [
      "Check proxy headers (such as",
      "Establish direct connection to the"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Intermediate proxies or CDNs altering",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "API gateways combining multiple responses",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix 203 Non-Authoritative Information in HTTP (With.",
  "seoDescription": "Troubleshoot 203 Non-Authoritative Information in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this."
};

export default errorData;
