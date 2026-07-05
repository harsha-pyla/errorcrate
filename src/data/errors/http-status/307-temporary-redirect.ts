import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "307-temporary-redirect",
  "name": "307 Temporary Redirect",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The target resource resides temporarily under a different URI. The method MUST NOT be changed.",
  "meanDescription": "The HTTP 307 Temporary Redirect redirection status code indicates that the target resource resides temporarily under a different URI. Unlike 302 Found, a 307 redirect guarantees that the client's HTTP request method and body payload will not be changed when following the redirect (e.g. POST remains POST).",
  "causes": [
    "Redirecting form submissions (POST) temporarily during database migrations.",
    "Temporary proxy routing routing API requests."
  ],
  "solutions": [
    "Include the temporary target URL in the Location response header.",
    "Ensure client libraries follow redirects by preserving headers and body payloads."
  ],
  "example": {
    "title": "Method Preserving Redirect",
    "code": "HTTP/1.1 307 Temporary Redirect\nLocation: https://backup.api.com/users\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "POST Request to Target",
    "code": "POST /users HTTP/1.1\nHost: api.com\nContent-Type: application/json\n\n{\"name\": \"Alice\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Method Preserving Redirect",
    "code": "HTTP/1.1 307 Temporary Redirect\nLocation: https://backup.api.com/users\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express temporary redirect preserving POST method.",
      "code": "app.post('/api/users', (req, res) => {\n  res.redirect(307, 'https://backup.api.com/users');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Route Handlers returning 307 status.",
      "code": "import { NextResponse } from 'next/server';\nexport function POST() {\n  return NextResponse.redirect('https://backup.api.com/users', 307);\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning 307 redirect in Django views.",
      "code": "from django.http import HttpResponseRedirect\n# Django handles custom status codes in HttpResponseRedirect\n# return HttpResponseRedirect('/backup', status=307)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning status 307.",
      "code": "@PostMapping(\"/users\")\npublic ResponseEntity<Void> redirect() {\n    return ResponseEntity.status(HttpStatus.TEMPORARY_REDIRECT).header(\"Location\", \"/backup/users\").build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx rewrite rules with 307 status codes.",
      "code": "return 307 https://backup.api.com$request_uri;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing 307 redirects inside Apache configurations.",
      "code": "Redirect 307 /api /backup/api"
    }
  ],
  "commonMistakes": [
    "Using 302 instead of 307 for redirecting POST API requests (browsers will silently convert POST to GET, losing payload parameters).",
    "Using 307 for permanent redirects (caching 307 permanent is incorrect; use 308 instead)."
  ],
  "prevention": [
    "Always use 307 for API endpoints (POST, PUT, DELETE) where method preservation is required.",
    "Audit API redirects to verify payload preservation."
  ],
  "faq": [
    {
      "question": "What is the difference between 302 and 307?",
      "answer": "With 302, browsers are allowed to change the request method from POST to GET when following the redirect. With 307, the client MUST repeat the exact same request method (e.g. POST remains POST) and body payload."
    },
    {
      "question": "Is HTTP 307 cached?",
      "answer": "No. A 307 redirect is temporary and is never cached by browsers, meaning subsequent requests will query the origin server first."
    },
    {
      "question": "Does a browser ask for user permission before repeating a POST request on 307?",
      "answer": "Yes. According to RFC specifications, if the redirection is not a GET/HEAD request, browsers may prompt the user to confirm resending the data payload."
    },
    {
      "question": "Is 307 suitable for locale routing?",
      "answer": "Yes, though 302 is more common. If a POST user registration must be directed to a localized country sub-domain, 307 is required to preserve registration data."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307"
    },
    {
      "name": "RFC 7231 – Section 6.4.7",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7"
    }
  ],
  "relatedErrors": [
    "302-found",
    "308-permanent-redirect"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Redirecting form submissions (POST) temporarily",
      "Temporary proxy routing routing API"
    ],
    "checklist": [
      "Include the temporary target URL",
      "Ensure client libraries follow redirects"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Redirecting form submissions (POST) temporarily",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Temporary proxy routing routing API",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "307 Temporary Redirect: Complete HTTP Troubleshooting Guide",
  "seoDescription": "Encountering 307 Temporary Redirect in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
