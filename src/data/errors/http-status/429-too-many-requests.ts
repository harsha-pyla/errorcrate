import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "429-too-many-requests",
  "name": "429 Too Many Requests",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The user has sent too many requests in a given amount of time.",
  "meanDescription": "The HTTP 429 Too Many Requests client error status code indicates the user has sent too many requests in a given amount of time (rate limiting). It should include a Retry-After header indicating how long the client must wait.",
  "causes": [
    "Client script looping API requests endlessly (accidental DDOS).",
    "Scraping bots crawling pages aggressively.",
    "IP addresses sharing requests exceeding firewall thresholds."
  ],
  "solutions": [
    "Implement client-side request throttling.",
    "Configure rate-limiting libraries on the backend.",
    "Ensure responses return a 'Retry-After' header."
  ],
  "example": {
    "title": "Rate Limit Block",
    "code": "HTTP/1.1 429 Too Many Requests\nRetry-After: 60\nContent-Type: application/json\n\n{\"error\": \"Rate limit exceeded. Try again in 60 seconds.\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Aggressive GET Requests Loop",
    "code": "GET /api/data HTTP/1.1\nHost: api.com\n\n(100th request within 1 second)",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Rate Limit Block",
    "code": "HTTP/1.1 429 Too Many Requests\nRetry-After: 60\nContent-Type: application/json\n\n{\"error\": \"Rate limit exceeded. Try again in 60 seconds.\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Enforcing rate limiting using express-rate-limit middleware.",
      "code": "const rateLimit = require('express-rate-limit');\nconst limiter = rateLimit({\n  windowMs: 60 * 1000, // 1 minute\n  max: 100, // limit each IP to 100 requests per windowMs\n  message: 'Too many requests, please try again later.',\n  statusCode: 429\n});\napp.use('/api/', limiter);"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Simple upstash rate limiter implementation inside Next.js Middleware.",
      "code": "import { NextResponse } from 'next/server';\nexport function middleware() {\n  // Rate limit implementation returning status 429\n  return new NextResponse('Too Many Requests', { status: 429, headers: { 'Retry-After': '60' } });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Enforcing throttling parameters inside Django REST Framework settings.",
      "code": "# settings.py\nREST_FRAMEWORK = {\n    'DEFAULT_THROTTLE_CLASSES': [\n        'rest_framework.throttling.AnonRateThrottle',\n    ],\n    'DEFAULT_THROTTLE_RATES': {\n        'anon': '100/day',\n    }\n}"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Implementing bucket4j rate limiting inside Spring Interceptors.",
      "code": "@Override\npublic boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object handler) {\n    if (bucket.tryConsume(1)) return true;\n    res.setStatus(429);\n    res.addHeader(\"Retry-After\", \"60\");\n    return false;\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring Nginx limit_req zone parameters.",
      "code": "limit_req_zone $binary_remote_addr zone=one:10m rate=1r/s;\nserver {\n    location /search/ {\n        limit_req zone=one burst=5 nodelay;\n    }\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling mod_ratelimit bandwidth configurations.",
      "code": "<Location \"/downloads\">\n    SetOutputFilter RATE_LIMIT\n    SetEnv rate-limit 512\n</Location>"
    }
  ],
  "commonMistakes": [
    "Failing to supply a 'Retry-After' header, causing clients to poll continuously instead of backing off.",
    "Misconfiguring rate limit rules on shared IP addresses (e.g. office NAT IPs), blocking entire companies."
  ],
  "prevention": [
    "Setup rate limit alerts inside server monitor dashboards.",
    "Implement exponential backoff algorithms inside API clients."
  ],
  "faq": [
    {
      "question": "What is rate limiting?",
      "answer": "Rate limiting is a server strategy to limit the number of requests a client (identified by IP, API key, or user token) can make within a specific timeframe, protecting servers from overload and DDoS."
    },
    {
      "question": "What header guides client backoff periods on 429?",
      "answer": "The server should return the 'Retry-After' header, which specifies the number of seconds (e.g. `Retry-After: 60`) or a GMT date indicating when the client can retry."
    },
    {
      "question": "Is 429 Too Many Requests cacheable?",
      "answer": "No. The 429 status code is never cached."
    },
    {
      "question": "How do clients handle 429 errors?",
      "answer": "Clients should intercept 429 responses, read the Retry-After header, pause all outgoing API requests, and resume after the backoff timer expires."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 6585 – Additional HTTP Status Codes",
      "url": "https://datatracker.ietf.org/doc/html/rfc6585#section-4"
    }
  ],
  "relatedErrors": [
    "503-service-unavailable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client script looping API requests",
      "Scraping bots crawling pages aggressively.",
      "IP addresses sharing requests exceeding"
    ],
    "checklist": [
      "Implement client-side request throttling.",
      "Configure rate-limiting libraries on the",
      "Ensure responses return a 'Retry-After'"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client script looping API requests",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Scraping bots crawling pages aggressively.",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "IP addresses sharing requests exceeding",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "429 Too Many Requests Error: Root Causes & Verified Fixes",
  "seoDescription": "Learn how to fix 429 Too Many Requests in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly."
};

export default errorData;
