import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "305-use-proxy",
  "name": "305 Use Proxy",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The requested resource must be accessed through the proxy given by the Location field.",
  "meanDescription": "The HTTP 305 Use Proxy redirection status code is deprecated and no longer used due to security concerns. It instructed browser clients that they must access the requested resource through the proxy specified in the Location header.",
  "causes": [
    "Legacy proxy routing protocols requiring client configuration switches.",
    "Historical network boundary access restrictions."
  ],
  "solutions": [
    "Do not implement 305 in modern web architectures. Avoid using this code.",
    "Configure transparent reverse proxy layers (like Nginx/CDNs) instead."
  ],
  "example": {
    "title": "Legacy Proxy Directives",
    "code": "HTTP/1.1 305 Use Proxy\nLocation: http://proxy.example.com:8080\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Querying Restrained Resource",
    "code": "GET /secrets HTTP/1.1\nHost: secure.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Legacy Proxy Directives",
    "code": "HTTP/1.1 305 Use Proxy\nLocation: http://proxy.example.com:8080\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express returning legacy status 305.",
      "code": "app.get('/legacy-path', (req, res) => {\n  res.status(305).set('Location', 'http://proxy.com:8080').end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js route returning status 305.",
      "code": "export function GET() {\n  return new Response(null, { status: 305 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 305.",
      "code": "from django.http import HttpResponse\ndef legacy_view(request):\n    return HttpResponse(status=305)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 305.",
      "code": "@GetMapping(\"/proxy\")\npublic ResponseEntity<Void> legacy() {\n    return ResponseEntity.status(305).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Standard proxy forward configurations.",
      "code": "proxy_pass http://internal_proxy;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache mod_proxy configurations.",
      "code": "ProxyRequests On"
    }
  ],
  "commonMistakes": [
    "Using 305 Use Proxy in modern APIs (causes security blocks in modern browser engines).",
    "Omitting proxy parameters in the Location header."
  ],
  "prevention": [
    "Never generate 305 responses in modern web services.",
    "Migrate client traffic to VPN/WAF architectures instead."
  ],
  "faq": [
    {
      "question": "Why is HTTP 305 deprecated?",
      "answer": "Due to major security vulnerabilities. Allowing servers to dynamically configure the client's proxy settings exposes users to Man-In-The-Middle (MITM) attacks and credential hijacking."
    },
    {
      "question": "How do modern browsers handle 305 Use Proxy?",
      "answer": "For security reasons, modern browsers (Chrome, Firefox, Safari) refuse to follow 305 redirects and treat them as failed connection attempts."
    },
    {
      "question": "What replaced 305 Use Proxy?",
      "answer": "Transparent reverse proxies (like Nginx, HAProxy, CDNs) which handle proxy routing on the server-side, hiding proxy logistics from the client."
    },
    {
      "question": "Was 305 Use Proxy cacheable?",
      "answer": "No. The 305 response was never cacheable to prevent browsers from permanently routing all traffic to arbitrary proxies."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305"
    },
    {
      "name": "RFC 7231 – Section 6.4.5",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5"
    }
  ],
  "relatedErrors": [
    "306-switch-proxy"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Legacy proxy routing protocols requiring",
      "Historical network boundary access restrictions."
    ],
    "checklist": [
      "Do not implement 305 in",
      "Configure transparent reverse proxy layers"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Legacy proxy routing protocols requiring",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Historical network boundary access restrictions.",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "305 Use Proxy Error: Root Causes & Verified Fixes",
  "seoDescription": "Resolve 305 Use Proxy in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified fixes."
};

export default errorData;
