import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "417-expectation-failed",
  "name": "417 Expectation Failed",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The expectation given in the Expect request header field cannot be met.",
  "meanDescription": "The HTTP 417 Expectation Failed client error status code indicates that the expectation given in the Expect request header field cannot be met by at least one of the inbound servers (origin or proxies).",
  "causes": [
    "Inbound proxy servers unable to comply with Expect: 100-continue request parameters.",
    "Unsupported custom expectation header properties."
  ],
  "solutions": [
    "Remove Expect headers from client request layouts if proxy layers reject them.",
    "Configure intermediate proxies to pass Expect headers transparently."
  ],
  "example": {
    "title": "Unsupported Expectation",
    "code": "POST /upload HTTP/1.1\nExpect: custom-expectation-99\nContent-Length: 500",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Unsupported Expectation",
    "code": "POST /upload HTTP/1.1\nExpect: custom-expectation-99\nContent-Length: 500",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Expectation Failed Response",
    "code": "HTTP/1.1 417 Expectation Failed\nConnection: close\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Handling unfulfilled Expect headers in Express.",
      "code": "app.post('/upload', (req, res) => {\n  if (req.headers.expect === 'custom-value') {\n    return res.status(417).send('Expectation Failed');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API Handler returning status 417.",
      "code": "export function POST() {\n  return new Response('Expectation Failed', { status: 417 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 417.",
      "code": "from django.http import HttpResponse\ndef upload_view(request):\n    return HttpResponse(status=417)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 417.",
      "code": "@PostMapping(\"/upload\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx passes expect headers downstream to app servers.",
      "code": "# Expect configurations"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache mod_headers checking expectations.",
      "code": "# Expect checks"
    }
  ],
  "commonMistakes": [
    "Sending custom Expect values that are unrecognized by proxy servers.",
    "Failing to retry upload streams without Expect headers upon receiving 417."
  ],
  "prevention": [
    "Only use standard HTTP Expect headers (e.g. Expect: 100-continue)."
  ],
  "faq": [
    {
      "question": "Why is 417 Expectation Failed triggered?",
      "answer": "It is triggered when the client sends an 'Expect' header (like Expect: 100-continue) and a proxy or server in the connection path cannot meet that expectation."
    },
    {
      "question": "What is the most common expectation?",
      "answer": "The only standard HTTP expectation defined is '100-continue', which asks the server to verify headers before the client sends the payload body."
    },
    {
      "question": "Can I bypass a 417 error on the client?",
      "answer": "Yes. If a client receives a 417 error, it should retry the request immediately without sending the 'Expect' header."
    },
    {
      "question": "Is 417 cacheable?",
      "answer": "No. 417 Expectation Failed responses are never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417"
    },
    {
      "name": "RFC 7231 – Section 6.5.14",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14"
    }
  ],
  "relatedErrors": [
    "100-continue"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Inbound proxy servers unable to comply with Expect",
      "Unsupported custom expectation header properties."
    ],
    "checklist": [
      "Remove Expect headers from client",
      "Configure intermediate proxies to pass"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Inbound proxy servers unable to comply with Expect",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Unsupported custom expectation header properties.",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 417 Expectation Failed Fast — HTTP Solutions Guide",
  "seoDescription": "417 Expectation Failed in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
