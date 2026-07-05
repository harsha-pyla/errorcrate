import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "301-moved-permanently",
  "name": "301 Moved Permanently",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The target resource has been assigned a new permanent URI.",
  "meanDescription": "The HTTP 301 Moved Permanently redirect status code indicates that the resource requested has been permanently moved to the URL given by the Location headers. Browser clients cache this redirect automatically, updating local bookmarks.",
  "causes": [
    "Changing site domains or URL structures permanently.",
    "Redirecting non-WWW links to WWW domains (or vice-versa).",
    "Forcing HTTP connections to upgrade to secure HTTPS channels."
  ],
  "solutions": [
    "Provide the new destination URL in the Location response header field.",
    "Verify search console indexes update to map the new routing destinations."
  ],
  "example": {
    "title": "Permanent Redirect Response",
    "code": "HTTP/1.1 301 Moved Permanently\nLocation: https://example.com/new-page\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Requesting Obsolete Page",
    "code": "GET /old-page HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Permanent Redirect Response",
    "code": "HTTP/1.1 301 Moved Permanently\nLocation: https://example.com/new-page\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express route redirecting permanently to a new path.",
      "code": "app.get('/old-path', (req, res) => {\n  res.redirect(301, '/new-path');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Configuring permanent redirects inside next.config.js.",
      "code": "module.exports = {\n  async redirects() {\n    return [\n      { source: '/old-path', destination: '/new-path', permanent: true }\n    ];\n  }\n};"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning HttpResponsePermanentRedirect in Django views.",
      "code": "from django.http import HttpResponsePermanentRedirect\ndef old_view(request):\n    return HttpResponsePermanentRedirect('/new-path')"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning RedirectView set to permanent.",
      "code": "@GetMapping(\"/old\")\npublic RedirectView redirect() {\n    RedirectView redirectView = new RedirectView(\"/new\");\n    redirectView.setStatusCode(HttpStatus.MOVED_PERMANENTLY);\n    return redirectView;\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Enforcing permanent HTTPS upgrades inside server blocks.",
      "code": "server {\n    listen 80;\n    return 301 https://$host$request_uri;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache htaccess permanent rewrite configurations.",
      "code": "Redirect 301 /old-path /new-path"
    }
  ],
  "commonMistakes": [
    "Using 301 for temporary redirects (since browsers cache 301s permanently, removing them is extremely difficult).",
    "Creating infinite redirect loops (e.g., page A redirects to B, and B redirects back to A)."
  ],
  "prevention": [
    "Only use 301 when you are absolutely sure the old URL will never be reused.",
    "Clear local browser cache when debugging redirect loops."
  ],
  "faq": [
    {
      "question": "Is HTTP 301 cacheable by browsers?",
      "answer": "Yes. Browsers cache 301 redirects aggressively. If a user enters the old URL, the browser redirects immediately without contacting the server again."
    },
    {
      "question": "Does a 301 redirect pass SEO Link Equity?",
      "answer": "Yes. Search engines pass 90-99% of page rank equity from the old URL to the new URL via 301 redirects."
    },
    {
      "question": "Does 301 change the request method?",
      "answer": "Yes. Historically, browsers changed POST requests to GET during 301 redirections. Use 308 Permanent Redirect if the method must remain unchanged."
    },
    {
      "question": "How long does Google take to process a 301 redirect?",
      "answer": "Usually between a few days to a few weeks, depending on how frequently the redirected URL is crawled."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301"
    },
    {
      "name": "RFC 7231 – Section 6.4.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2"
    }
  ],
  "relatedErrors": [
    "302-found",
    "308-permanent-redirect"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Changing site domains or URL",
      "Redirecting non-WWW links to WWW",
      "Forcing HTTP connections to upgrade"
    ],
    "checklist": [
      "Provide the new destination URL",
      "Verify search console indexes update"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Changing site domains or URL",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Redirecting non-WWW links to WWW",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Forcing HTTP connections to upgrade",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve 301 Moved Permanently — HTTP Debugging Guide",
  "seoDescription": "Troubleshoot 301 Moved Permanently in HTTP with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
