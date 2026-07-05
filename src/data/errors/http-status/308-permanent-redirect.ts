import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "308-permanent-redirect",
  "name": "308 Permanent Redirect",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The target resource has been assigned a new permanent URI. The method MUST NOT be changed.",
  "meanDescription": "The HTTP 308 Permanent Redirect redirection status code indicates that the target resource has been assigned a new permanent URI. Like 301 Moved Permanently, this redirect is cached by browsers. However, unlike 301, a 308 redirect guarantees that the HTTP request method and body payload will not be changed.",
  "causes": [
    "Moving API endpoints (e.g. POST endpoints) permanently to newer URIs.",
    "Standard secure domain updates requiring request method preservation."
  ],
  "solutions": [
    "Include the new permanent URL in the Location response header.",
    "Ensure clients cache this redirect to bypass hitting the old URL next time."
  ],
  "example": {
    "title": "Permanent Method Preserved Response",
    "code": "HTTP/1.1 308 Permanent Redirect\nLocation: https://v2.api.com/users\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "POST Request to Target",
    "code": "POST /users HTTP/1.1\nHost: api.com\nContent-Type: application/json\n\n{\"name\": \"Alice\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Permanent Method Preserved Response",
    "code": "HTTP/1.1 308 Permanent Redirect\nLocation: https://v2.api.com/users\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express permanent redirect preserving POST method.",
      "code": "app.post('/api/users', (req, res) => {\n  res.redirect(308, 'https://v2.api.com/users');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js redirect returning 308.",
      "code": "import { NextResponse } from 'next/server';\nexport function POST() {\n  return NextResponse.redirect('https://v2.api.com/users', 308);\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning 308 redirect.",
      "code": "from django.http import HttpResponseRedirect\n# return HttpResponseRedirect('/v2/users', status=308)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 308.",
      "code": "@PostMapping(\"/users\")\npublic ResponseEntity<Void> redirect() {\n    return ResponseEntity.status(HttpStatus.PERMANENT_REDIRECT).header(\"Location\", \"/v2/users\").build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Enforcing 308 redirects in server blocks.",
      "code": "return 308 https://v2.api.com$request_uri;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache htaccess rewrite settings with 308.",
      "code": "Redirect 308 /api /v2/api"
    }
  ],
  "commonMistakes": [
    "Using 301 instead of 308 for moving API endpoints (results in client requests dropping body payloads).",
    "Using 308 for temporary redirection (which results in client browsers caching the route permanently)."
  ],
  "prevention": [
    "Audit API redirections to ensure method compliance.",
    "Configure automated tests checking redirect codes for POST/PUT routes."
  ],
  "faq": [
    {
      "question": "What is the difference between 301 and 308?",
      "answer": "With 301, browsers may change the request method from POST to GET during redirect. With 308, the client MUST repeat the exact same request method (e.g. POST remains POST) and body payload."
    },
    {
      "question": "Is HTTP 308 cached?",
      "answer": "Yes. Browsers cache 308 redirects permanently. The browser remembers the redirection and goes directly to the new URL on subsequent queries."
    },
    {
      "question": "Does 308 pass link juice / SEO PageRank?",
      "answer": "Yes. Search engines treat 308 exactly like 301 in terms of passing index PageRank equity to the new target URL."
    },
    {
      "question": "Which HTTP version introduced 308?",
      "answer": "The 308 Permanent Redirect was introduced in RFC 7538 (published in 2015) to resolve the method-change ambiguity of 301."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308"
    },
    {
      "name": "RFC 7538 – 308 Permanent Redirect",
      "url": "https://datatracker.ietf.org/doc/html/rfc7538"
    }
  ],
  "relatedErrors": [
    "301-moved-permanently",
    "307-temporary-redirect"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Moving API endpoints (e.g. POST",
      "Standard secure domain updates requiring"
    ],
    "checklist": [
      "Include the new permanent URL",
      "Ensure clients cache this redirect"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Moving API endpoints (e.g. POST",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Standard secure domain updates requiring",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 308 Permanent Redirect in HTTP — Step-by-Step Fix",
  "seoDescription": "Complete guide to fixing 308 Permanent Redirect in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
