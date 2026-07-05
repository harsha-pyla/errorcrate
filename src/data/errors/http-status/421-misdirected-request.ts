import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "421-misdirected-request",
  "name": "421 Misdirected Request",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Request was directed at a server that is not able to produce a response.",
  "meanDescription": "The HTTP 421 Misdirected Request client error status code indicates that the request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.",
  "causes": [
    "HTTP/2 connection reuse mismatch where DNS maps multiple hosts to the same IP but the server TLS certificate doesn't cover all domains.",
    "Client browser sending requests to wrong virtual host configurations."
  ],
  "solutions": [
    "Configure TLS certificates to include all SAN (Subject Alternative Name) domains.",
    "Disable connection reuse in client HTTP/2 pipelines if SNI mismatches exist."
  ],
  "example": {
    "title": "HTTP/2 Host Reuse",
    "code": "HTTP/2 connection reused for domain2.com on domain1.com's socket.\nServer TLS cert does not cover domain2.com.",
    "language": "http"
  },
  "exampleRequest": {
    "title": "HTTP/2 Host Reuse",
    "code": "GET / HTTP/2\nHost: domain2.com\n(Reusing existing TCP/TLS socket for domain1.com)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Misdirected Request Response",
    "code": "HTTP/1.1 421 Misdirected Request\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 421 for hostname mismatches.",
      "code": "app.use((req, res, next) => {\n  if (req.hostname !== 'expected-domain.com') {\n    return res.status(421).send('Misdirected Request');\n  }\n  next();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler checking host header parameters.",
      "code": "import { headers } from 'next/headers';\nexport async function GET() {\n  const headersList = await headers();\n  if (headersList.get('host') !== 'domain.com') {\n    return new Response('Misdirected', { status: 421 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 421.",
      "code": "from django.http import HttpResponse\ndef check_host(request):\n    return HttpResponse(status=421)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 421.",
      "code": "@GetMapping(\"/check-domain\")\npublic ResponseEntity<Void> check() {\n    return ResponseEntity.status(421).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx to handle host mismatches in HTTP/2.",
      "code": "server {\n    listen 443 ssl http2;\n    server_name expected.com;\n    # Nginx returns 421 automatically if HTTP/2 connection reuse fails SSL matching\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache virtual host settings for HTTP/2.",
      "code": "Protocols h2 http/1.1"
    }
  ],
  "commonMistakes": [
    "Using wildcards certificates incorrectly across distinct IP nodes.",
    "Assuming client browsers will never reuse HTTP/2 socket connections for different domains on same IPs."
  ],
  "prevention": [
    "Keep server SAN certificates fully updated to list all mapped hostnames.",
    "Verify SNI configurations."
  ],
  "faq": [
    {
      "question": "What is the main trigger of a 421 Misdirected Request?",
      "answer": "It is almost always triggered by HTTP/2 or HTTP/3 connection reuse, when a browser tries to reuse an active TCP connection to load a different domain that is hosted on the same server IP but isn't covered by the server's TLS certificate."
    },
    {
      "question": "How do browsers react to a 421 response?",
      "answer": "Browsers automatically close the reused TCP connection, establish a brand-new TCP socket for the second domain, and retry the request."
    },
    {
      "question": "Does 421 happen in HTTP/1.1?",
      "answer": "No. HTTP/1.1 doesn't support request multiplexing or connection reuse across different hostnames on a single socket, making 421 obsolete for HTTP/1.1."
    },
    {
      "question": "Is 421 cacheable?",
      "answer": "No. The 421 Misdirected Request status code is not cacheable by default."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 7540 – HTTP/2 Section 9.1.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2"
    }
  ],
  "relatedErrors": [
    "400-bad-request"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "HTTP/2 connection reuse mismatch where",
      "Client browser sending requests to"
    ],
    "checklist": [
      "Configure TLS certificates to include",
      "Disable connection reuse in client"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "HTTP/2 connection reuse mismatch where",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Client browser sending requests to",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 421 Misdirected Request in HTTP — Step-by-Step Fix",
  "seoDescription": "Getting 421 Misdirected Request in HTTP? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples."
};

export default errorData;
