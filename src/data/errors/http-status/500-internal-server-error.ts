import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "500-internal-server-error",
  "name": "500 Internal Server Error",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Server (500)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "Something went wrong on the server.",
  "meanDescription": "The HTTP 500 Internal Server Error response status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.",
  "causes": [
    "Crashed application processes (Node.js runtime crashes, PHP syntax crashes).",
    "Misconfigured web servers (.htaccess errors).",
    "Database connection timeouts."
  ],
  "solutions": [
    "Check server error logs.",
    "Wrap server router entries in try-catch exception blocks.",
    "Check database connection strings and pooling parameters."
  ],
  "example": {
    "title": "Unhandled Node.js Crash",
    "code": "app.get('/crash', (req, res) => {\n  throw new Error('Database connection failed unexpectedly!');\n});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Unhandled Node.js Crash",
    "code": "app.get('/crash', (req, res) => {\n  throw new Error('Database connection failed unexpectedly!');\n});",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Server Error Response",
    "code": "HTTP/1.1 500 Internal Server Error\nContent-Type: text/html\nContent-Length: 48\n\n<h1>500 Internal Server Error: App Crashed</h1>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express error handling middleware converting uncaught errors to status 500.",
      "code": "app.use((err, req, res, next) => {\n  res.status(500).json({ error: 'Internal Server Error' });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Handling server crashes inside error.tsx boundary frameworks.",
      "code": "'use client';\nexport default function Error() {\n  return <h1>500 - Server Error</h1>;\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Setting DEBUG = False and defining custom 500 views.",
      "code": "# settings.py\nDEBUG = False"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Handling uncaught exceptions using @ControllerAdvice in Spring.",
      "code": "@ControllerAdvice\npublic class GlobalExceptionHandler {\n    @ExceptionHandler(Exception.class)\n    public ResponseEntity<String> handle() {\n        return ResponseEntity.status(500).body(\"Error\");\n    }\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Setting custom error pages for Nginx server crash events.",
      "code": "error_page 500 502 503 504 /50x.html;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache Custom error document settings.",
      "code": "ErrorDocument 500 /500.html"
    }
  ],
  "commonMistakes": [
    "Failing to handle database query exceptions inside promises, resulting in unhandled rejections and crashes.",
    "Leaving DEBUG mode active in production, exposing database passwords in tracebacks."
  ],
  "prevention": [
    "Always wrap risky network calls inside try-catch validation blocks.",
    "Configure automated server monitoring (e.g. Sentry)."
  ],
  "faq": [
    {
      "question": "Why do browsers sometimes show a blank page for a 500 error?",
      "answer": "If the server crashes before writing headers or rendering the response, the connection is dropped prematurely, resulting in a browser 'No data received' default window."
    },
    {
      "question": "Is 500 Internal Server Error a database error?",
      "answer": "Often yes. If the database connection pool is full or credentials fail, the backend request crashes, triggering a 500 fallback."
    },
    {
      "question": "Should I expose tracebacks in production?",
      "answer": "Absolutely not. Exposing raw server tracebacks leaks details about database structure and framework variables, creating severe security vulnerabilities."
    },
    {
      "question": "What is the first step in debugging a 500 error?",
      "answer": "Inspect the backend server execution logs (e.g., PM2 logs, Docker console stdout, CloudWatch) to find the crash trace."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500"
    },
    {
      "name": "RFC 7231 – Section 6.6.1",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1"
    }
  ],
  "relatedErrors": [
    "503-service-unavailable"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Crashed application processes (Node.js runtime",
      "Misconfigured web servers (.htaccess errors).",
      "Database connection timeouts."
    ],
    "checklist": [
      "Check server error logs.",
      "Wrap server router entries in",
      "Check database connection strings and"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Crashed application processes (Node.js runtime",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Misconfigured web servers (.htaccess errors).",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Database connection timeouts.",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 500 Internal Server Error in HTTP — Step-by-Step Fix",
  "seoDescription": "Fix 500 Internal Server Error fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world."
};

export default errorData;
