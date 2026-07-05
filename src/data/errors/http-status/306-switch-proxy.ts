import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "306-switch-proxy",
  "name": "306 Switch Proxy",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "No longer used. Originally meant subsequent requests should use the specified proxy.",
  "meanDescription": "The HTTP 306 Switch Proxy status code is an unused legacy status. It was originally defined to instruct clients that subsequent requests should be sent using the proxy specified in the response. It is now reserved for protocol extensions.",
  "causes": [
    "Legacy HTTP draft specification testing protocols."
  ],
  "solutions": [
    "Do not implement or generate 306 Switch Proxy status responses."
  ],
  "example": {
    "title": "Legacy Reserved State",
    "code": "HTTP/1.1 306 Switch Proxy\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Legacy Reserved Request",
    "code": "GET /unused-endpoint HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Legacy Reserved State",
    "code": "HTTP/1.1 306 Switch Proxy\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning reserved status 306.",
      "code": "app.get('/unused', (req, res) => {\n  res.status(306).end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API route returning status 306.",
      "code": "export function GET() {\n  return new Response(null, { status: 306 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 306.",
      "code": "from django.http import HttpResponse\ndef unused_view(request):\n    return HttpResponse(status=306)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 306.",
      "code": "@GetMapping(\"/unused\")\npublic ResponseEntity<Void> unused() {\n    return ResponseEntity.status(306).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx ignores status 306.",
      "code": "# 306 is not configured"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache ignores status 306.",
      "code": "# 306 is not configured"
    }
  ],
  "commonMistakes": [
    "Attempting to use 306 for modern client redirection (which will fail in all modern clients)."
  ],
  "prevention": [
    "Ensure web routers never return status 306."
  ],
  "faq": [
    {
      "question": "Is HTTP 306 Switch Proxy obsolete?",
      "answer": "Yes. It was defined in early HTTP specifications but has been omitted from RFC 7231 and is now reserved as an unused placeholder."
    },
    {
      "question": "What was the original purpose of 306?",
      "answer": "To allow a server to tell the browser client to change proxy configurations for subsequent connections."
    },
    {
      "question": "Can I use 306 in my API?",
      "answer": "No. No HTTP client library, browser, or proxy supports 306, and using it will cause requests to fail."
    },
    {
      "question": "Does 306 have a name in the HTTP standard?",
      "answer": "It is officially named 'Unused' or 'Switch Proxy' in legacy drafts, and is kept reserved to prevent namespace collision."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 7231 – Section 6.4.6",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.6"
    }
  ],
  "relatedErrors": [
    "305-use-proxy"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Legacy HTTP draft specification testing"
    ],
    "checklist": [
      "Do not implement or generate"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Legacy HTTP draft specification testing",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 306 Switch Proxy Fast — HTTP Solutions Guide",
  "seoDescription": "Fix 306 Switch Proxy fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
