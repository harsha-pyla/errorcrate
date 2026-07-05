import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "blocked-by-cors-policy",
  "name": "Blocked by CORS policy",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "Security Exception",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The browser blocked a cross-origin HTTP request because the destination server lacks Access-Control-Allow-Origin headers.",
  "meanDescription": "Cross-Origin Resource Sharing (CORS) is a security mechanism enforced by browsers to prevent scripts on one origin (e.g. domain A) from querying resources on another origin (e.g. domain B) unless domain B explicitly authorizes it via response headers.",
  "causes": [
    "The server does not send Access-Control-Allow-Origin headers.",
    "Mismatch in allowed methods (GET, POST) or custom request headers.",
    "Omitting credentials (cookies/tokens) configurations when requested."
  ],
  "solutions": [
    "Add Access-Control-Allow-Origin: * (or specific origin) headers to the server's HTTP responses.",
    "Configure the server to respond to preflight OPTIONS requests.",
    "Match request methods and custom headers with the server's allowed parameters."
  ],
  "example": {
    "title": "CORS Mismatch Block",
    "code": "// Triggers CORS policy warning in browser console if external.com lacks headers\nfetch('https://api.external.com/data');",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "fetch('https://api.external.com/data');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Browser Console Warning",
    "code": "Access to fetch at 'https://api.external.com/data' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "OPTIONS Preflight Headers",
      "language": "javascript",
      "description": "Custom headers trigger a preflight OPTIONS request. The server must allow them in CORS configs.",
      "code": "fetch('https://api.com/data', {\n  headers: {\n    'X-Custom-Header': 'val'\n  }\n});"
    },
    {
      "name": "Credentials Fetch config",
      "language": "javascript",
      "description": "Including cookies in cross-origin requests fails if the server doesn't authorize credentials.",
      "code": "fetch('https://api.com/data', {\n  credentials: 'include'\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Express CORS Middleware",
      "language": "javascript",
      "description": "Configuring the backend to respond with valid CORS headers using Express.",
      "code": "const cors = require('cors');\n// Enable CORS for all routes\napp.use(cors({\n  origin: 'http://localhost:3000',\n  credentials: true\n}));"
    }
  ],
  "commonMistakes": [
    "Expecting CORS to block backend requests (CORS is enforced strictly by the browser client, not by postman or curl)."
  ],
  "prevention": [
    "Deploy a reverse proxy (like Nginx) to route traffic through the same domain in production.",
    "Use local dev proxies to bypass CORS blocks during staging."
  ],
  "faq": [
    {
      "question": "What is CORS?",
      "answer": "Cross-Origin Resource Sharing is a browser security feature that restricts web pages from making requests to a different domain than the one that served the web page, unless the other domain explicitly allows it."
    },
    {
      "question": "Why does CORS work in Postman but fail in the browser?",
      "answer": "Postman is a developer tool, not a browser. CORS is a browser-enforced security policy designed to protect users from malicious script operations accessing their credentials."
    },
    {
      "question": "What is a preflight request?",
      "answer": "A preflight request is an OPTIONS request sent automatically by the browser before the actual request to verify if the server understands and allows the custom methods or headers used."
    },
    {
      "question": "Can I bypass CORS using a local proxy?",
      "answer": "Yes. You can run a proxy server on your own domain that fetches the data from the target API and returns it to your browser. Since the browser requests from the same domain, no CORS is triggered."
    }
  ],
  "helpfulResources": [
    {
      "name": "W3C CORS Specification",
      "url": "https://www.w3.org/TR/cors/"
    }
  ],
  "relatedErrors": [
    "failed-to-fetch"
  ],
  "quickFix": {
    "causes": [
      "Server missing Access-Control-Allow-Origin header",
      "Preflight OPTIONS check rejected",
      "Mismatched request headers"
    ],
    "checklist": [
      "Check server response headers",
      "Enable CORS on the API backend",
      "Allow custom headers in CORS config",
      "Deploy a proxy during development"
    ],
    "estimatedTime": "5–20 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Missing server CORS headers",
      "frequency": "60%"
    },
    {
      "scenario": "Preflight OPTIONS check rejection",
      "frequency": "25%"
    },
    {
      "scenario": "Credentials validation failures",
      "frequency": "15%"
    }
  ],
  "comments": [],
  "seoTitle": "Blocked by CORS policy: Quick Fix Guide for JavaScript.",
  "seoDescription": "Blocked by CORS policy in JavaScript — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this."
};

export default errorData;
