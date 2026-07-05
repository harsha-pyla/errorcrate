import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "205-reset-content",
  "name": "205 Reset Content",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Tells the user agent to reset the document view which caused the request to be sent.",
  "meanDescription": "The HTTP 205 Reset Content status code indicates that the server has fulfilled the request and desires that the user agent reset the 'document view' which caused the request to be sent, such as clearing a form.",
  "causes": [
    "Form submission endpoints clearing input boxes for new data entry.",
    "Admin panels resetting configuration form inputs after saving variables."
  ],
  "solutions": [
    "Verify form layout client actions execute form element resets (e.g. form.reset()) upon receiving a 205 status.",
    "Ensure response does not contain any message body payload."
  ],
  "example": {
    "title": "Form Submission Request",
    "code": "POST /survey HTTP/1.1\nHost: survey.com\nContent-Type: application/x-www-form-urlencoded\n\nfeedback=great",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Form Submission Request",
    "code": "POST /survey HTTP/1.1\nHost: survey.com\nContent-Type: application/x-www-form-urlencoded\n\nfeedback=great",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Reset Content Response",
    "code": "HTTP/1.1 205 Reset Content\nDate: Sat, 27 Jun 2026 21:00:00 GMT\n\n(Browser clears input form contents automatically)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 205 Reset Content in Express controllers.",
      "code": "app.post('/survey', (req, res) => {\n  res.status(205).end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js route handler returning 205 status code.",
      "code": "import { NextResponse } from 'next/server';\nexport function POST() {\n  return new NextResponse(null, { status: 205 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 205.",
      "code": "from django.http import HttpResponse\ndef reset_view(request):\n    return HttpResponse(status=205)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning 205 status code.",
      "code": "@PostMapping(\"/survey\")\npublic ResponseEntity<Void> reset() {\n    return new ResponseEntity<>(HttpStatus.RESET_CONTENT);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx setting proxy header rules to prevent payload inclusions on 205.",
      "code": "# Nginx auto filters headers for 205"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache setting header configurations for status overrides.",
      "code": "# Apache filters body output on 205"
    }
  ],
  "commonMistakes": [
    "Returning HTTP 205 but leaving form contents active due to missing client-side state actions.",
    "Returning body payloads on 205, violating specifications."
  ],
  "prevention": [
    "Use modern fetch frameworks to monitor status and clear client forms dynamically.",
    "Verify response headers do not indicate content length > 0."
  ],
  "faq": [
    {
      "question": "How does 205 Reset Content differ from 204 No Content?",
      "answer": "While both return no response body, a 205 response explicitly commands the client browser to reset the UI state (like clearing all text fields in a form), whereas 204 leaves the UI exactly as is."
    },
    {
      "question": "Is 205 Reset Content cached?",
      "answer": "No. The 205 Reset Content status code is never cached, as it always indicates a state-changing server transaction."
    },
    {
      "question": "Do modern browsers clear HTML forms automatically on 205?",
      "answer": "Historically yes, browsers cleared forms. In modern SPA environments, you must monitor fetch response statuses and trigger form.reset() explicitly."
    },
    {
      "question": "Can 205 contain an XML body?",
      "answer": "No. According to the HTTP specification, a 205 response must not contain any message body payload whatsoever."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205"
    },
    {
      "name": "RFC 7231 – Section 6.3.6",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6"
    }
  ],
  "relatedErrors": [
    "204-no-content",
    "200-ok"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Form submission endpoints clearing input",
      "Admin panels resetting configuration form"
    ],
    "checklist": [
      "Verify form layout client actions",
      "Ensure response does not contain"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Form submission endpoints clearing input",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Admin panels resetting configuration form",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "205 Reset Content Error: Root Causes & Verified Fixes",
  "seoDescription": "Learn how to fix 205 Reset Content in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
