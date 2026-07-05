import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "404-not-found",
  "name": "404 Not Found",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (404)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server cannot find the requested resource. The requested URL may be misspelled or the resource you're looking for might have been removed.",
  "meanDescription": "The HTTP 404 Not Found response status code indicates that the server cannot find the requested resource. This means that the website server is communicating, but the specific page or asset you requested does not exist at that path. This is a client-side error, meaning the request has a typo or refers to an outdated resource.",
  "causes": [
    "The URL is misspelled or incorrect.",
    "The page has been moved or deleted.",
    "Broken links from other websites.",
    "The resource never existed."
  ],
  "solutions": [
    "Check the URL for typos.",
    "Ensure the resource exists.",
    "Check if the page was moved (use 301 redirect).",
    "Update or remove broken links."
  ],
  "example": {
    "title": "Example Request",
    "code": "GET /page-not-exist HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Example Request",
    "code": "GET /page-not-exist HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Example Response",
    "code": "HTTP/1.1 404 Not Found\nContent-Type: text/html; charset=UTF-8\nContent-Length: 138\n\n<h1>404 Not Found</h1>\n<p>The requested resource was not found on this server.</p>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express fallback middleware returning 404.",
      "code": "app.use((req, res) => {\n  res.status(404).send('Page not found');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Triggering standard Next.js 404 notFound functions.",
      "code": "import { notFound } from 'next/navigation';\nexport default function Page() {\n  notFound();\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Raising Http404 errors inside Django views.",
      "code": "from django.http import Http404\ndef detail_view(request):\n    raise Http404('Resource missing')"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 404.",
      "code": "@GetMapping(\"/users/{id}\")\npublic User get(@PathVariable Long id) {\n    return repo.findById(id).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Custom error page rendering settings.",
      "code": "error_page 404 /404.html;\nlocation = /404.html {\n    root /usr/share/nginx/html;\n}"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enforcing custom error document redirects.",
      "code": "ErrorDocument 404 /custom-404.html"
    }
  ],
  "commonMistakes": [
    "Failing to redirect deleted assets (301 redirects), causing search rankings to fall.",
    "Incorrect case sensitivity settings on file systems."
  ],
  "prevention": [
    "Audit logs weekly to identify broken links.",
    "Setup automated redirections using redirection tables."
  ],
  "faq": [
    {
      "question": "Can a 404 error affect my website's SEO?",
      "answer": "Standard 404 errors do not directly lower your overall website ranking in search results. However, if important pages with high traffic or external backlinks return 404 errors, you will lose search equity. You should 301 redirect them to relevant active pages."
    },
    {
      "question": "When should I use 410 Gone instead of 404?",
      "answer": "Use 410 Gone when a page is permanently deleted and you want search engines to drop it from their index instantly."
    },
    {
      "question": "Why does my SPA refresh return 404 on custom routes?",
      "answer": "Standard web servers look for physical directories matching the URL path. You must configure rewrite fallbacks directing all routes to index.html."
    },
    {
      "question": "How do I declare a custom 404 in Next.js?",
      "answer": "Create a `not-found.tsx` file inside your route directory structure. Next.js will serve it automatically upon calling the `notFound()` hook."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404"
    },
    {
      "name": "RFC 7231 – Section 6.5.4",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4"
    }
  ],
  "relatedErrors": [
    "400-bad-request",
    "403-forbidden",
    "410-gone",
    "500-internal-server-error",
    "503-service-unavailable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "The URL is misspelled or",
      "The page has been moved",
      "Broken links from other websites."
    ],
    "checklist": [
      "Check the URL for typos.",
      "Ensure the resource exists.",
      "Check if the page was",
      "Update or remove broken links."
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "The URL is misspelled or",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "The page has been moved",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Broken links from other websites.",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix 404 Not Found in HTTP (With Examples)",
  "seoDescription": "Resolve 404 Not Found in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified fixes."
};

export default errorData;
