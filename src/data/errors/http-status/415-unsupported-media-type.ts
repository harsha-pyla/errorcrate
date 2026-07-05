import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "415-unsupported-media-type",
  "name": "415 Unsupported Media Type",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The media format of the requested data is not supported by the server.",
  "meanDescription": "The HTTP 415 Unsupported Media Type client error status code indicates that the origin server refuses to service the request because the payload is in a format not supported by this method on the target resource.",
  "causes": [
    "Client sending XML data (Content-Type: application/xml) to an endpoint that only processes JSON.",
    "Uploading unsupported image formats (e.g. TIFF) to profile picture endpoints."
  ],
  "solutions": [
    "Check request Content-Type headers.",
    "Verify client payload matches server format capabilities.",
    "Update server serialization configurations."
  ],
  "example": {
    "title": "Mismatched Upload Type",
    "code": "POST /api/users HTTP/1.1\nContent-Type: text/xml\n\n<user><name>Bob</name></user>",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Mismatched Upload Type",
    "code": "POST /api/users HTTP/1.1\nContent-Type: text/xml\n\n<user><name>Bob</name></user>",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Unsupported Format Response",
    "code": "HTTP/1.1 415 Unsupported Media Type\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware validating Content-Type headers.",
      "code": "app.post('/api/data', (req, res) => {\n  if (req.headers['content-type'] !== 'application/json') {\n    return res.status(415).send('Unsupported Media Type: JSON only');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler checking media format types.",
      "code": "export function POST(request: Request) {\n  if (request.headers.get('content-type') !== 'application/json') {\n    return new Response('Unsupported Media Type', { status: 415 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django REST Framework automatically returning 415 for unmapped parsers.",
      "code": "# DRF views check parser_classes and raise UnsupportedMediaType automatically"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller restricting content types using consumes parameter.",
      "code": "@PostMapping(value = \"/users\", consumes = MediaType.APPLICATION_JSON_VALUE)\npublic ResponseEntity<Void> create() {\n    return ResponseEntity.ok().build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx handles format routing downstream to application.",
      "code": "# Format handled by upstream applications"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache mod_mime configuration mapping.",
      "code": "AddType application/json .json"
    }
  ],
  "commonMistakes": [
    "Sending HTTP requests with empty Content-Type headers when payload is present.",
    "Confusing 415 (payload sent is unsupported format) with 406 (format client requested in Accept header is unsupported)."
  ],
  "prevention": [
    "Explicitly declare Content-Type headers inside all client fetch utilities.",
    "Provide clear API documentation listing supported content types."
  ],
  "faq": [
    {
      "question": "What is the difference between 406 and 415?",
      "answer": "415 Unsupported Media Type means the *client uploaded* data in a format the server doesn't support. 406 Not Acceptable means the *client requested* the server to reply in a format the server doesn't support."
    },
    {
      "question": "Does 415 apply to file uploads?",
      "answer": "Yes. If an endpoint expects a JPEG image but the client uploads a PDF, the server should reject the request with 415 Unsupported Media Type."
    },
    {
      "question": "Is 415 cacheable?",
      "answer": "No. The 415 status code is not cacheable by default."
    },
    {
      "question": "How do clients resolve 415 errors?",
      "answer": "Verify the request body structure, convert it to the expected format (e.g. serialize to JSON), and make sure the 'Content-Type' header matches."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415"
    },
    {
      "name": "RFC 7231 – Section 6.5.13",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13"
    }
  ],
  "relatedErrors": [
    "406-not-acceptable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client sending XML data (Content-Type",
      "Uploading unsupported image formats (e.g."
    ],
    "checklist": [
      "Check request Content-Type headers.",
      "Verify client payload matches server",
      "Update server serialization configurations."
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client sending XML data (Content-Type",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Uploading unsupported image formats (e.g.",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot 415 Unsupported Media Type — HTTP Error Guide",
  "seoDescription": "Complete guide to fixing 415 Unsupported Media Type in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
