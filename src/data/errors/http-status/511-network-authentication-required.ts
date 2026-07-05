import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "511-network-authentication-required",
  "name": "511 Network Authentication Required",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The client needs to authenticate to gain network access.",
  "meanDescription": "The HTTP 511 Network Authentication Required server error status code indicates that the client needs to authenticate to gain network access. It is primarily returned by intercepting proxies (e.g. Wi-Fi captive portals).",
  "causes": [
    "Unauthenticated connections to public airport or hotel Wi-Fi networks.",
    "Captive portal page redirections."
  ],
  "solutions": [
    "Redirect user to the login/agreement portal page.",
    "Check connection status using specific URLs (like connectivity check URLs)."
  ],
  "example": {
    "title": "Captive Portal Redirect",
    "code": "HTTP/1.1 511 Network Authentication Required\nLocation: https://wifi-login.hotel.com/portal\nContent-Type: text/html\n\n<html><body>Please authenticate at captive portal</body></html>",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Querying Web without Auth",
    "code": "GET /index.html HTTP/1.1\nHost: google.com\n(Intercepted by Wi-Fi gateway proxy)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Captive Portal Redirect",
    "code": "HTTP/1.1 511 Network Authentication Required\nLocation: https://wifi-login.hotel.com/portal\nContent-Type: text/html\n\n<html><body>Please authenticate at captive portal</body></html>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 511 for unauthenticated gateways.",
      "code": "app.get('/gateway', (req, res) => {\n  res.status(511).set('Location', 'https://wifi-portal.com').send('Network auth required');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning status 511.",
      "code": "export function GET() {\n  return new Response('Network Auth Required', { status: 511, headers: { 'Location': '/portal' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 511.",
      "code": "from django.http import HttpResponse\ndef portal_view(request):\n    return HttpResponse('Auth Required', status=511)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 511.",
      "code": "@GetMapping(\"/portal\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(HttpStatus.NETWORK_AUTHENTICATION_REQUIRED).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx proxy rules for captive portal intercepts.",
      "code": "# Captive portal redirects returning 511"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache redirects returning 511.",
      "code": "# Captive portal redirects returning 511"
    }
  ],
  "commonMistakes": [
    "Using 401 Unauthorized instead of 511 (use 401 for logging in to a specific website; use 511 for logging in to the physical network provider like Wi-Fi)."
  ],
  "prevention": [
    "Ensure web sockets or long polling handles captive portal transitions gracefully."
  ],
  "faq": [
    {
      "question": "What is a captive portal?",
      "answer": "A captive portal is a web page displayed to newly connected users of a public Wi-Fi network (like airports or hotels) before they are granted broader internet access."
    },
    {
      "question": "Why did HTTP introduce the 511 status code?",
      "answer": "To prevent security issues where captive portals hijacked origin website links, which confused browsers and triggered HTTPS certificate errors."
    },
    {
      "question": "How do modern OSes handle 511 responses?",
      "answer": "Operating systems periodically fetch specific URLs (like Apple's captive portal check). If they receive 511 or a redirect, they immediately display a login popup window."
    },
    {
      "question": "Is 511 cacheable?",
      "answer": "No. The 511 Network Authentication Required status code is never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 6585 – Additional HTTP Status Codes",
      "url": "https://datatracker.ietf.org/doc/html/rfc6585#section-6"
    }
  ],
  "relatedErrors": [
    "401-unauthorized"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Unauthenticated connections to public airport",
      "Captive portal page redirections."
    ],
    "checklist": [
      "Redirect user to the login/agreement",
      "Check connection status using specific"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Unauthenticated connections to public airport",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Captive portal page redirections.",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 511 Network Authentication Required in HTTP —.",
  "seoDescription": "Complete guide to fixing 511 Network Authentication Required in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and."
};

export default errorData;
