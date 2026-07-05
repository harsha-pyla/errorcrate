import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "406-not-acceptable",
  "name": "406 Not Acceptable",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server cannot produce a response matching the list of acceptable values.",
  "meanDescription": "The HTTP 406 Not Acceptable client error status code indicates that the server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers (e.g. Accept, Accept-Language, Accept-Encoding).",
  "causes": [
    "Client requests application/xml format but API only supports application/json.",
    "Mismatch in Accept-Language headers between browser preferences and server translations."
  ],
  "solutions": [
    "Adjust client request 'Accept' headers to match server capabilities.",
    "Configure server application serializers to support client-preferred formats."
  ],
  "example": {
    "title": "Mismatched Format Request",
    "code": "GET /api/users HTTP/1.1\nAccept: application/xml",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Mismatched Format Request",
    "code": "GET /api/users HTTP/1.1\nAccept: application/xml",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Not Acceptable Response",
    "code": "HTTP/1.1 406 Not Acceptable\nContent-Type: application/json\n\n{\"error\": \"Only application/json formatting is supported\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Using req.accepts() to check format matching in Express.",
      "code": "app.get('/api/users', (req, res) => {\n  if (!req.accepts('json')) {\n    return res.status(406).send('Not Acceptable: JSON only');\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Checking header Accept match values in Route Handlers.",
      "code": "import { headers } from 'next/headers';\nexport async function GET() {\n  const reqHeaders = await headers();\n  if (reqHeaders.get('accept') !== 'application/json') {\n    return new Response('Not Acceptable', { status: 406 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django REST Framework content negotiation checks.",
      "code": "# DRF automatically returns 406 if no matching renderer is found"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Overriding content negotiation rules in Spring MVC configs.",
      "code": "@Override\npublic void configureContentNegotiation(ContentNegotiationConfigurer c) {\n    c.favorPathExtension(false).useRegisteredExtensionsOnly(true);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Rejecting request format configurations.",
      "code": "# Nginx passes formats downstream to app"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling MultiViews negotiated indexing in Apache.",
      "code": "Options +MultiViews"
    }
  ],
  "commonMistakes": [
    "Hardcoding JSON returns in application controllers without checking request Accept header flags.",
    "Misconfiguring translation packages, triggering 406 for valid languages."
  ],
  "prevention": [
    "Use default format fallbacks (e.g. default to JSON) instead of returning 406 for format mismatches unless strictly required.",
    "Verify API clients send correct Accept headers."
  ],
  "faq": [
    {
      "question": "What is content negotiation?",
      "answer": "Content negotiation is the mechanism defined in HTTP specs that allows a client and server to agree on the best representation format (e.g., JSON vs XML, or English vs Spanish) for a resource."
    },
    {
      "question": "Why is 406 rarely returned by APIs?",
      "answer": "Most APIs ignore the client's 'Accept' header and simply return application/json by default, avoiding the overhead of 406 error checks."
    },
    {
      "question": "Can I return a list of supported formats in a 406 response?",
      "answer": "Yes, it is highly recommended to include a list of supported mime-types in the response body to guide clients."
    },
    {
      "question": "Which headers trigger 406 Not Acceptable?",
      "answer": "The main headers are 'Accept', 'Accept-Charset', 'Accept-Encoding', and 'Accept-Language'."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406"
    },
    {
      "name": "RFC 7231 – Section 6.5.6",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6"
    }
  ],
  "relatedErrors": [
    "415-unsupported-media-type"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requests application/xml format but",
      "Mismatch in Accept-Language headers between"
    ],
    "checklist": [
      "Adjust client request 'Accept' headers",
      "Configure server application serializers to"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requests application/xml format but",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Mismatch in Accept-Language headers between",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "406 Not Acceptable Error: Root Causes & Verified Fixes",
  "seoDescription": "Encountering 406 Not Acceptable in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
