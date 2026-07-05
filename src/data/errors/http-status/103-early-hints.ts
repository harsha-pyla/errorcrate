import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "103-early-hints",
  "name": "103 Early Hints",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Informational (1xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Returns response headers before the final HTTP response, primarily used for link preloading.",
  "meanDescription": "The HTTP 103 Early Hints informational status code is primarily intended to be used with the Link header to allow the user agent to start preloading critical resources (like stylesheets or scripts) while the server is still preparing the main page response.",
  "causes": [
    "Page speed optimization protocols requesting asset preloads.",
    "Proxy server configurations forwarding link headers ahead of payload compilation."
  ],
  "solutions": [
    "Configure origin server web frameworks to flush headers early.",
    "Verify CDN intermediate configurations support Early Hints forwarding."
  ],
  "example": {
    "title": "Early Hints Response",
    "code": "HTTP/1.1 103 Early Hints\nLink: </style.css>; rel=preload; as=style\nLink: </script.js>; rel=preload; as=script",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Standard GET Request",
    "code": "GET /index.html HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Early Hints Response",
    "code": "HTTP/1.1 103 Early Hints\nLink: </style.css>; rel=preload; as=style\nLink: </script.js>; rel=preload; as=script\n\n(Browser parses critical assets and begins fetching them ahead of the HTML)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Flushing early hints headers manually in Node.js server connections.",
      "code": "app.get('/', (req, res) => {\n  res.write('HTTP/1.1 103 Early Hints\\r\\nLink: </css/main.css>; rel=preload; as=style\\r\\n\\r\\n');\n  res.send('Done');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Enabling experimental Early Hints layouts inside next.config.js configurations.",
      "code": "// next.config.js\nmodule.exports = {\n  experimental: { earlyHints: true },\n};"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning early headers inside ASGI middleware configurations.",
      "code": "# async request handler flushing 103 status\nasync def app(scope, receive, send):\n    pass"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Enabling early hint header flushing inside Java server engines.",
      "code": "@GetMapping(\"/\")\npublic String getHome(HttpServletResponse response) {\n    response.addHeader(\"Link\", \"</js/app.js>; rel=preload; as=script\");\n    return \"index\";\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Enabling early hints forwarding inside proxy configurations.",
      "code": "proxy_pass_header Link;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling H2Push configurations inside Apache virtual hosts.",
      "code": "H2Push On"
    }
  ],
  "commonMistakes": [
    "Using Early Hints on HTTP/1.0 clients that do not parse multiple responses.",
    "Preloading non-critical resources, resulting in resource bandwidth conflicts."
  ],
  "prevention": [
    "Only preload resources that block rendering (e.g. key CSS/Fonts).",
    "Verify client request headers before flushing early hints."
  ],
  "faq": [
    {
      "question": "Which browsers support 103 Early Hints?",
      "answer": "All modern Chromium-based browsers (Chrome, Edge, Opera) support 103 Early Hints. Safari and Firefox are still evaluating implementation."
    },
    {
      "question": "How does 103 Early Hints improve page load speed?",
      "answer": "It informs the browser of critical CSS/JS dependencies immediately, enabling parallel fetches while the server continues compiling HTML."
    },
    {
      "question": "Is 103 Early Hints the same as HTTP/2 Server Push?",
      "answer": "No. Server Push forces assets onto the client directly. Early Hints tells the client to request assets itself, letting the client check its cache first."
    },
    {
      "question": "Can I preload image files using 103?",
      "answer": "Yes, you can preload critical images (such as LCP hero images) by specifying 'as=image' inside the link header."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103"
    },
    {
      "name": "RFC 8297 – Early Hints",
      "url": "https://datatracker.ietf.org/doc/html/rfc8297"
    }
  ],
  "relatedErrors": [
    "102-processing",
    "200-ok"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Page speed optimization protocols requesting",
      "Proxy server configurations forwarding link"
    ],
    "checklist": [
      "Configure origin server web frameworks",
      "Verify CDN intermediate configurations support"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Page speed optimization protocols requesting",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Proxy server configurations forwarding link",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 103 Early Hints in HTTP — Causes & Solutions",
  "seoDescription": "Resolve 103 Early Hints in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
