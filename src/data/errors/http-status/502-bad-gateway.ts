import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "502-bad-gateway",
  "name": "502 Bad Gateway",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (5xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The proxy server received an invalid response from the upstream server.",
  "meanDescription": "The HTTP 502 Bad Gateway server error status code indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request.",
  "causes": [
    "Upstream application process (Node.js/PM2/PHP-FPM) crashed or is not running.",
    "Reverse proxy (Nginx) configuration listening to wrong backend port.",
    "Firewalls blocking connection ports between proxy and app servers."
  ],
  "solutions": [
    "Check backend application process status (e.g. pm2 status).",
    "Verify port mappings inside Nginx proxy_pass configurations.",
    "Check backend server error logs for crashes during request parsing."
  ],
  "example": {
    "title": "Nginx Proxy Crash Log",
    "code": "[error] 1234#0: *567 connect() failed (111: Connection refused) while connecting to upstream, client: 127.0.0.1, server: localhost, request: \"GET / HTTP/1.1\", upstream: \"http://127.0.0.1:3000/\"",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Client GET Request to Proxy",
    "code": "GET /api HTTP/1.1\nHost: proxy-server.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Proxy 502 Response",
    "code": "HTTP/1.1 502 Bad Gateway\nContent-Type: text/html\nContent-Length: 150\n\n<html><head><title>502 Bad Gateway</title></head>\n<body><center><h1>502 Bad Gateway</h1></center></body></html>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Simulating gateway failures in Express.",
      "code": "app.get('/gateway', (req, res) => {\n  res.status(502).send('Invalid upstream response');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 502 status inside custom API endpoints.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return new NextResponse('Bad Gateway', { status: 502 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 502.",
      "code": "from django.http import HttpResponse\ndef my_view(request):\n    return HttpResponse('Bad Gateway', status=502)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 502.",
      "code": "@GetMapping(\"/gateway\")\npublic ResponseEntity<String> getGateway() {\n    return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(\"Bad Gateway\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Enforcing Nginx error page redirects for upstream server crashes.",
      "code": "error_page 502 /502.html;\nlocation = /502.html {\n    root /usr/share/nginx/html;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Proxy pass timeout setups in Apache virtual hosts.",
      "code": "ProxyPass /app http://localhost:3000 retry=0"
    }
  ],
  "commonMistakes": [
    "Assuming 502 is a client browser error (502 is strictly a server-to-server connection error).",
    "Leaving port firewalls closed on private VPC networks, blocking proxies from hitting application clusters."
  ],
  "prevention": [
    "Configure automated process managers (PM2, systemd, or Kubernetes) to restart crashed applications automatically.",
    "Monitor proxy error logs constantly."
  ],
  "faq": [
    {
      "question": "What is the most common cause of a 502 Bad Gateway?",
      "answer": "The backend application server (like Node.js or PHP-FPM) is shut down, crashed, or not listening on the port configured in your reverse proxy (like Nginx or Apache)."
    },
    {
      "question": "How does 502 differ from 504?",
      "answer": "502 Bad Gateway means the upstream server replied with an invalid response or reset the connection immediately. 504 Gateway Timeout means the upstream server accepted the connection but took too long to return any response."
    },
    {
      "question": "Can Cloudflare trigger 502 Bad Gateway?",
      "answer": "Yes. If Cloudflare successfully routes traffic to your server, but your Nginx proxy or origin server is offline, Cloudflare returns a '502 Bad Gateway' error screen."
    },
    {
      "question": "Is 502 Bad Gateway cached by browsers?",
      "answer": "No. The 502 status code represents a temporary connection failure and is never cached by browsers."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502"
    },
    {
      "name": "RFC 7231 – Section 6.6.3",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3"
    }
  ],
  "relatedErrors": [
    "504-gateway-timeout",
    "500-internal-server-error",
    "503-service-unavailable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Upstream application process (Node.js/PM2/PHP-FPM) crashed",
      "Reverse proxy (Nginx) configuration listening",
      "Firewalls blocking connection ports between"
    ],
    "checklist": [
      "Check backend application process status",
      "Verify port mappings inside Nginx",
      "Check backend server error logs"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Upstream application process (Node.js/PM2/PHP-FPM) crashed",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Reverse proxy (Nginx) configuration listening",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Firewalls blocking connection ports between",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "502 Bad Gateway: Quick Fix Guide for HTTP Developers",
  "seoDescription": "Complete guide to fixing 502 Bad Gateway in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
