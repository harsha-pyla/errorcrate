import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "403-forbidden",
  "name": "403 Forbidden",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (403)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server understands the request but refuses to authorize it.",
  "meanDescription": "The HTTP 403 Forbidden response status code indicates that the server understands the request but refuses to authorize it. Unlike 401 Unauthorized, the client's identity is known to the server, but they do not possess the necessary access credentials.",
  "causes": [
    "Insufficient server folder or file read permissions.",
    "Missing or expired authentication headers/tokens.",
    "IP address blocked by web application firewall (WAF)."
  ],
  "solutions": [
    "Check file and directory permissions (e.g., chmod 755 for folders).",
    "Ensure API client authorization tokens are sent correctly.",
    "Verify firewall rules aren't blacklisting client IPs."
  ],
  "example": {
    "title": "Unauthorized Access Request",
    "code": "GET /admin/secrets.txt HTTP/1.1\nAuthorization: Bearer ExpiredToken123",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Unauthorized Access Request",
    "code": "GET /admin/secrets.txt HTTP/1.1\nAuthorization: Bearer ExpiredToken123",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Forbidden Response",
    "code": "HTTP/1.1 403 Forbidden\nContent-Type: text/html\nContent-Length: 42\n\n<h1>403 Forbidden: Access Denied</h1>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware verifying authorization headers and returning 403.",
      "code": "const checkAuth = (req, res, next) => {\n  if (req.user.role !== 'admin') {\n    return res.status(403).json({ error: 'Access forbidden' });\n  }\n  next();\n};"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 403 Forbidden inside Edge Middleware handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function middleware(request: Request) {\n  if (!isAuthenticated(request)) {\n    return new NextResponse('Forbidden', { status: 403 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Raising PermissionDenied to return 403 in Django.",
      "code": "from django.core.exceptions import PermissionDenied\ndef admin_view(request):\n    if not request.user.is_staff:\n        raise PermissionDenied"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Configuring Spring Security role authentication.",
      "code": "http.authorizeRequests().antMatchers(\"/admin/**\").hasRole(\"ADMIN\");"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Restricting folder access using IP allowlists.",
      "code": "location /internal {\n    deny all;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing access rules inside Apache directory blocks.",
      "code": "<Directory \"/secure\">\n    Require all denied\n</Directory>"
    }
  ],
  "commonMistakes": [
    "Confusing 403 Forbidden with 401 Unauthorized.",
    "Misconfiguring file permissions on static web root folders."
  ],
  "prevention": [
    "Implement role-based access control (RBAC) validations.",
    "Keep server directory configurations closed by default, white-listing paths explicitly."
  ],
  "faq": [
    {
      "question": "How does 403 differ from 401?",
      "answer": "A 401 Unauthorized code means credentials are missing or invalid, suggesting the client should authenticate. A 403 Forbidden code means authentication is complete, but the client is explicitly not allowed to view the resource."
    },
    {
      "question": "Why does Nginx return 403 for index.html views?",
      "answer": "This happens when file read permissions are too restrictive (e.g. owned by root only) or autoindex is off and no default index.html exists."
    },
    {
      "question": "Can a WAF return 403 Forbidden?",
      "answer": "Yes, web firewalls (like Cloudflare or AWS WAF) return 403 if they block traffic matching spam patterns or blacklisted IP addresses."
    },
    {
      "question": "Should I redirect users to login during a 403?",
      "answer": "No. Redirect to login for 401. For 403, render a clean 'Access Denied' screen, explaining they lack required security roles."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403"
    },
    {
      "name": "RFC 7231 – Section 6.5.3",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3"
    }
  ],
  "relatedErrors": [
    "404-not-found",
    "400-bad-request"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Insufficient server folder or file",
      "Missing or expired authentication headers/tokens.",
      "IP address blocked by web"
    ],
    "checklist": [
      "Check file and directory permissions",
      "Ensure API client authorization tokens",
      "Verify firewall rules aren't blacklisting"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Insufficient server folder or file",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing or expired authentication headers/tokens.",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "IP address blocked by web",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "403 Forbidden Explained: Causes, Fixes & Prevention",
  "seoDescription": "Getting 403 Forbidden in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to fix it."
};

export default errorData;
