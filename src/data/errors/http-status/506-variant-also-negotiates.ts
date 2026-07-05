import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "506-variant-also-negotiates",
  "name": "506 Variant Also Negotiates",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server has an internal configuration error in content negotiation.",
  "meanDescription": "The HTTP 506 Variant Also Negotiates server error status code indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper negotiation endpoint.",
  "causes": [
    "Circular configuration references where variant resources refer to content negotiation loops."
  ],
  "solutions": [
    "Verify transparent content negotiation configurations on the server.",
    "Ensure variant resources resolve to static files rather than another content negotiation block."
  ],
  "example": {
    "title": "Negotiation Loop Response",
    "code": "HTTP/1.1 506 Variant Also Negotiates\nContent-Type: text/plain\nContent-Length: 24\n\nVariant Also Negotiates",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Negotiating Circular Path",
    "code": "GET /negotiated-endpoint HTTP/1.1\nHost: site.com\nAccept: text/html",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Negotiation Loop Response",
    "code": "HTTP/1.1 506 Variant Also Negotiates\nContent-Type: text/plain\nContent-Length: 24\n\nVariant Also Negotiates",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 506.",
      "code": "app.get('/negotiate', (req, res) => {\n  res.status(506).send('Content negotiation loop detected.');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning 506.",
      "code": "export function GET() {\n  return new Response('Variant Also Negotiates', { status: 506 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 506.",
      "code": "from django.http import HttpResponse\ndef negotiate_view(request):\n    return HttpResponse(status=506)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 506.",
      "code": "@GetMapping(\"/negotiate\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.VARIANT_ALSO_NEGOTIATES).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx ignores status 506.",
      "code": "# Handled by upstream application"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring Apache mod_negotiation rules.",
      "code": "# Apache MultiViews content negotiation settings"
    }
  ],
  "commonMistakes": [
    "Configuring content negotiation indices to reference other index files recursively."
  ],
  "prevention": [
    "Map all content variations (e.g. languages) to explicit, terminal resource paths."
  ],
  "faq": [
    {
      "question": "What is transparent content negotiation?",
      "answer": "It is an HTTP protocol extension (RFC 2295) that allows a server to delegate the selection of format representations to the client, supplying index parameters."
    },
    {
      "question": "Why does a 506 error occur?",
      "answer": "It occurs when a server tries to negotiate a resource format (like language or type), but the chosen variation is configured to negotiate again, creating an infinite loop."
    },
    {
      "question": "Is 506 cacheable?",
      "answer": "No. 506 Variant Also Negotiates responses are never cached."
    },
    {
      "question": "Is 506 widely used?",
      "answer": "No. Transparent content negotiation is rarely implemented in modern web APIs; most web apps use custom routing parameters instead."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 2295 – Transparent Content Negotiation",
      "url": "https://datatracker.ietf.org/doc/html/rfc2295"
    }
  ],
  "relatedErrors": [
    "406-not-acceptable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Circular configuration references where variant"
    ],
    "checklist": [
      "Verify transparent content negotiation configurations",
      "Ensure variant resources resolve to"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Circular configuration references where variant",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot 506 Variant Also Negotiates — HTTP Error Guide",
  "seoDescription": "Getting 506 Variant Also Negotiates in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code."
};

export default errorData;
