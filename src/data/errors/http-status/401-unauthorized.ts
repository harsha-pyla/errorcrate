import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "401-unauthorized",
  "name": "401 Unauthorized",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The client must authenticate itself to get the requested response.",
  "meanDescription": "The HTTP 401 Unauthorized client error status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.",
  "causes": [
    "Missing Authorization header in request.",
    "Invalid or expired JSON Web Token (JWT) credentials.",
    "Incorrect username or password during Basic authentication handshakes."
  ],
  "solutions": [
    "Ensure authorization tokens (e.g. Bearer token) are sent correctly in headers.",
    "Refresh expired login sessions or tokens.",
    "Verify server authorization token signatures and validation keys."
  ],
  "example": {
    "title": "Missing Credentials Request",
    "code": "GET /api/user-profile HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Missing Credentials Request",
    "code": "GET /api/user-profile HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Unauthorized Access Response",
    "code": "HTTP/1.1 401 Unauthorized\nWWW-Authenticate: Bearer realm=\"api\"\nContent-Type: application/json\n\n{\"error\": \"Authentication required\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "JSON Web Token verification returning 401 on authentication failures.",
      "code": "app.get('/api/secure', (req, res) => {\n  const authHeader = req.headers.authorization;\n  if (!authHeader) {\n    return res.status(401).set('WWW-Authenticate', 'Bearer').json({ error: 'Auth required' });\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 401 status inside API Route handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning a 401 response in Django REST Framework views.",
      "code": "from rest_framework.response import Response\nfrom rest_framework import status\n\ndef my_view(request):\n    return Response({'error': 'Unauthorized'}, status=status.HTTP_401_UNAUTHORIZED)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring Security entry point returning 401 Unauthorized.",
      "code": "@Override\npublic void commence(HttpServletRequest req, HttpServletResponse res, AuthenticationException auth) throws IOException {\n    res.sendError(HttpServletResponse.SC_UNAUTHORIZED, \"Unauthorized\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Basic HTTP Authentication in Nginx.",
      "code": "location /admin {\n    auth_basic \"Admin Area\";\n    auth_basic_user_file /etc/nginx/.htpasswd;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing basic auth directories inside Apache settings.",
      "code": "<Directory \"/admin\">\n    AuthType Basic\n    AuthName \"Admin Area\"\n    AuthUserFile /etc/apache2/.htpasswd\n    Require valid-user\n</Directory>"
    }
  ],
  "commonMistakes": [
    "Using 401 Unauthorized for users whose identity is known but lack roles (use 403 Forbidden instead).",
    "Omitting the WWW-Authenticate header field, which is required by HTTP standards for 401 responses."
  ],
  "prevention": [
    "Establish automated middleware checking header presence early.",
    "Enforce short token lifetimes and implement secure refresh tokens."
  ],
  "faq": [
    {
      "question": "What is the difference between 401 and 403?",
      "answer": "401 Unauthorized means the user's identity is not known or verified (they are unauthenticated). 403 Forbidden means identity is known, but they do not have permission to view the resource."
    },
    {
      "question": "Why is the WWW-Authenticate header required?",
      "answer": "It informs client applications which authentication scheme (e.g., Bearer, Basic, Digest) is expected by the server to unlock access."
    },
    {
      "question": "Does 401 trigger browser login popups?",
      "answer": "Yes. If the server returns 'WWW-Authenticate: Basic...', the browser will display a native username/password prompt box automatically."
    },
    {
      "question": "How do clients follow a 401 response?",
      "answer": "The client should prompt users for login, obtain credentials (e.g. a token), and re-issue the request with an 'Authorization' header."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401"
    },
    {
      "name": "RFC 7235 – Section 3.1",
      "url": "https://datatracker.ietf.org/doc/html/rfc7235#section-3.1"
    }
  ],
  "relatedErrors": [
    "403-forbidden",
    "400-bad-request"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Missing Authorization header in request.",
      "Invalid or expired JSON Web",
      "Incorrect username or password during"
    ],
    "checklist": [
      "Ensure authorization tokens (e.g. Bearer",
      "Refresh expired login sessions or",
      "Verify server authorization token signatures"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing Authorization header in request.",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Invalid or expired JSON Web",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incorrect username or password during",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "401 Unauthorized: Quick Fix Guide for HTTP Developers",
  "seoDescription": "401 Unauthorized in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
