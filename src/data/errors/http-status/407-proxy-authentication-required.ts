import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "407-proxy-authentication-required",
  "name": "407 Proxy Authentication Required",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The client must first authenticate itself with the proxy.",
  "meanDescription": "The HTTP 407 Proxy Authentication Required client error status code indicates that the request has not been applied because the client needs to provide authentication credentials to access internet resources through a proxy server.",
  "causes": [
    "Corporate network gateway proxy filters restricting external internet access.",
    "Missing or invalid 'Proxy-Authorization' headers."
  ],
  "solutions": [
    "Provide credentials inside the 'Proxy-Authorization' request header.",
    "Configure local environment proxy variables (e.g. HTTP_PROXY) to include username:password."
  ],
  "example": {
    "title": "Proxy Challenge Response",
    "code": "HTTP/1.1 407 Proxy Authentication Required\nProxy-Authenticate: Basic realm=\"Corporate Proxy\"\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Querying External Web",
    "code": "GET http://external-site.com/ HTTP/1.1\nHost: external-site.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Proxy Challenge Response",
    "code": "HTTP/1.1 407 Proxy Authentication Required\nProxy-Authenticate: Basic realm=\"Corporate Proxy\"\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express middleware validating Proxy-Authorization.",
      "code": "app.use((req, res, next) => {\n  const proxyAuth = req.headers['proxy-authorization'];\n  if (!proxyAuth) {\n    return res.status(407).set('Proxy-Authenticate', 'Basic').end();\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API route returning status 407.",
      "code": "export function GET() {\n  return new Response('Proxy Auth Required', { status: 407 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 407.",
      "code": "from django.http import HttpResponse\ndef proxy_check(request):\n    return HttpResponse(status=407)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 407.",
      "code": "@GetMapping(\"/proxy-check\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.PROXY_AUTHENTICATION_REQUIRED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring forward proxy authorization logic.",
      "code": "# Nginx forward proxy basic authentication modules"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing authentication requirements inside Apache proxy setups.",
      "code": "<Proxy \"*\">\n    AuthType Basic\n    AuthName \"Corporate Proxy\"\n    AuthUserFile /etc/apache2/proxy_users\n    Require valid-user\n</Proxy>"
    }
  ],
  "commonMistakes": [
    "Confusing 407 with 401 (use 401 for origin server auth, 407 exclusively for intermediate proxy gateways).",
    "Omitting the 'Proxy-Authenticate' header field in the 407 response."
  ],
  "prevention": [
    "Ensure corporate clients are provisioned with automated proxy credential management files (PAC)."
  ],
  "faq": [
    {
      "question": "What is the difference between 401 and 407?",
      "answer": "401 represents authentication required by the origin server hosting the website. 407 represents authentication required by an intermediate proxy server (e.g. corporate gateway) before forwarding traffic."
    },
    {
      "question": "Which headers are used for proxy authentication?",
      "answer": "The server returns 'Proxy-Authenticate' in 407 responses. The client follows up by sending credentials in the 'Proxy-Authorization' request header."
    },
    {
      "question": "Does 407 trigger browser dialog boxes?",
      "answer": "Yes. If the proxy returns 'Proxy-Authenticate: Basic...', browsers will prompt users to authenticate with the proxy."
    },
    {
      "question": "How do CLI tools (like curl) handle proxy authentication?",
      "answer": "You must specify credentials using command options, such as `curl -x proxy:port -U username:password url`."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407"
    },
    {
      "name": "RFC 7235 – Section 3.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7235#section-3.2"
    }
  ],
  "relatedErrors": [
    "401-unauthorized"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Corporate network gateway proxy filters",
      "Missing or invalid 'Proxy-Authorization' headers."
    ],
    "checklist": [
      "Provide credentials inside the 'Proxy-Authorization'",
      "Configure local environment proxy variables (e.g. HTTP_PROXY) to include username"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Corporate network gateway proxy filters",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing or invalid 'Proxy-Authorization' headers.",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 407 Proxy Authentication Required Fast — HTTP Solutions.",
  "seoDescription": "Complete guide to fixing 407 Proxy Authentication Required in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and."
};

export default errorData;
