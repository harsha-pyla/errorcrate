import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "410-gone",
  "name": "410 Gone",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (410)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The resource is permanently gone.",
  "meanDescription": "The HTTP 410 Gone response status code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.",
  "causes": [
    "Resource was deleted intentionally.",
    "Promotional or temporary pages expired.",
    "Database records purged permanently."
  ],
  "solutions": [
    "Remove links pointing to the expired resource.",
    "Configure search engines to drop the index immediately.",
    "Use redirects if a newer version exists."
  ],
  "example": {
    "title": "Requesting Expired Resource",
    "code": "GET /expired-campaign-page HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Requesting Expired Resource",
    "code": "GET /expired-campaign-page HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Gone Response",
    "code": "HTTP/1.1 410 Gone\nContent-Type: text/html\nContent-Length: 30\n\n<h1>Resource is Permanent Gone</h1>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 410 for expired endpoints.",
      "code": "app.get('/old-campaign', (req, res) => {\n  res.status(410).send('This promotion has ended');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning status 410 inside Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return new NextResponse('Gone', { status: 410 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 410.",
      "code": "from django.http import HttpResponse\ndef expired_view(request):\n    return HttpResponse('Expired', status=410)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning status 410.",
      "code": "@GetMapping(\"/expired\")\npublic ResponseEntity<String> gone() {\n    return ResponseEntity.status(HttpStatus.GONE).body(\"Gone\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Returning 410 immediately for static paths.",
      "code": "location /old-page { return 410; }"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing Gone status inside .htaccess mod_rewrite blocks.",
      "code": "Redirect gone /old-page"
    }
  ],
  "commonMistakes": [
    "Using 404 Not Found instead of 410 Gone for resources that were intentionally deleted.",
    "Keeping active backlinks to 410 pages on the site indexing tree."
  ],
  "prevention": [
    "Implement routing patterns that automatically flag expired campaigns or pages with 410 Gone.",
    "Maintain active redirects where possible."
  ],
  "faq": [
    {
      "question": "Does Googlebot treat 404 and 410 differently?",
      "answer": "Yes. Googlebot removes a 410 page from its search indexes immediately, whereas a 404 page is checked multiple times over several days before being removed, to safeguard against accidental errors."
    },
    {
      "question": "When is 410 preferred over 404?",
      "answer": "Use 410 for intentionally and permanently deleted endpoints, such as one-time secure links, deleted accounts, or expired promotional landing pages."
    },
    {
      "question": "Should a 410 page trigger redirects?",
      "answer": "It depends. If a direct successor page exists, redirecting via 301 is better. Otherwise, returning 410 is correct to purge the index."
    },
    {
      "question": "How do crawlers handle 410 caching?",
      "answer": "Crawlers cache the 'gone' status eagerly, meaning search bots will stop visiting that URL much sooner than a 404 URL."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410"
    },
    {
      "name": "RFC 7231 – Section 6.5.9",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9"
    }
  ],
  "relatedErrors": [
    "404-not-found"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Resource was deleted intentionally.",
      "Promotional or temporary pages expired.",
      "Database records purged permanently."
    ],
    "checklist": [
      "Remove links pointing to the",
      "Configure search engines to drop",
      "Use redirects if a newer"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Resource was deleted intentionally.",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Promotional or temporary pages expired.",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Database records purged permanently.",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 410 Gone in HTTP — Causes & Solutions",
  "seoDescription": "Learn how to fix 410 Gone in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in production."
};

export default errorData;
