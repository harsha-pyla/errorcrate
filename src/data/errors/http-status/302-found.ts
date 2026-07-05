import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "302-found",
  "name": "302 Found",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The target resource resides temporarily under a different URI.",
  "meanDescription": "The HTTP 302 Found redirect status code indicates that the resource requested resides temporarily under a different URI. Since the redirection might be altered in the future, the client should continue to use the original URI for future requests.",
  "causes": [
    "Temporary promotions or maintenance updates redirecting users.",
    "Redirecting users to login pages when access checks fail.",
    "Locale or language routing checks."
  ],
  "solutions": [
    "Provide the temporary destination URL in the Location response header field.",
    "Ensure search engines do not update indices to index the temporary target instead."
  ],
  "example": {
    "title": "Temporary Redirect Response",
    "code": "HTTP/1.1 302 Found\nLocation: /maintenance-holding-page\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Querying Blocked Page",
    "code": "GET /dashboard HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Temporary Redirect Response",
    "code": "HTTP/1.1 302 Found\nLocation: /login\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express temporary redirection.",
      "code": "app.get('/dashboard', (req, res) => {\n  res.redirect(302, '/login');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Configuring temporary redirects in next.config.js.",
      "code": "module.exports = {\n  async redirects() {\n    return [\n      { source: '/dashboard', destination: '/login', permanent: false }\n    ];\n  }\n};"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning HttpResponseRedirect in Django views.",
      "code": "from django.http import HttpResponseRedirect\ndef my_view(request):\n    return HttpResponseRedirect('/login')"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning RedirectView.",
      "code": "@GetMapping(\"/dashboard\")\npublic RedirectView redirect() {\n    return new RedirectView(\"/login\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Temporary rewrites inside Nginx config.",
      "code": "rewrite ^/old-temp-path$ /new-temp-path redirect;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Temporary redirects in htaccess.",
      "code": "Redirect 302 /temp /new-temp"
    }
  ],
  "commonMistakes": [
    "Using 302 instead of 301 for domain changes (causes search engines to index both domains, triggering duplicate content penalties).",
    "Expecting the browser to preserve request body payloads during 302 redirects."
  ],
  "prevention": [
    "Always default to 302 for auth/login redirection scenarios.",
    "Use 307 Temporary Redirect if the HTTP request method must be preserved."
  ],
  "faq": [
    {
      "question": "Is HTTP 302 cached by browsers?",
      "answer": "No. Browsers do not cache 302 redirects by default, meaning every request will contact the server first to check if the route location has changed."
    },
    {
      "question": "Does 302 pass SEO Link Equity?",
      "answer": "Yes, but significantly less than 301. Search engines understand that 302 is temporary, so they keep index credit on the original URL."
    },
    {
      "question": "Why does a 302 redirect convert POST requests to GET?",
      "answer": "This is a legacy behavior defined in early HTTP specs. Browsers change POST to GET to prevent form re-submission loops."
    },
    {
      "question": "When should I use 302 vs 303?",
      "answer": "Use 303 See Other specifically after POST request submissions to guide browsers to load a success view via GET."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302"
    },
    {
      "name": "RFC 7231 – Section 6.4.3",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3"
    }
  ],
  "relatedErrors": [
    "301-moved-permanently",
    "307-temporary-redirect"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Temporary promotions or maintenance updates",
      "Redirecting users to login pages",
      "Locale or language routing checks."
    ],
    "checklist": [
      "Provide the temporary destination URL",
      "Ensure search engines do not"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Temporary promotions or maintenance updates",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Redirecting users to login pages",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Locale or language routing checks.",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "302 Found Explained: Causes, Fixes & Prevention",
  "seoDescription": "302 Found in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error permanently."
};

export default errorData;
