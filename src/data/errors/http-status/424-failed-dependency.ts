import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "424-failed-dependency",
  "name": "424 Failed Dependency",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The method could not be performed because the requested action depended on another action which failed.",
  "meanDescription": "The HTTP 424 Failed Dependency WebDAV status code indicates that the method could not be performed because the requested action depended on another action and that action failed (e.g. bulk operations where one item crashes).",
  "causes": [
    "WebDAV bulk transactions where a sub-operation (like editing a folder parent) fails, causing child operations to be aborted."
  ],
  "solutions": [
    "Check sub-operation parameters.",
    "Handle transactional errors gracefully, reverting changes if dependent steps fail."
  ],
  "example": {
    "title": "Dependent Task Failure",
    "code": "HTTP/1.1 207 Multi-Status\nContent-Type: text/xml\n\n<multistatus xmlns=\"DAV:\">\n  <response>\n    <href>/doc/parent</href>\n    <status>HTTP/1.1 409 Conflict</status>\n  </response>\n  <response>\n    <href>/doc/parent/child</href>\n    <status>HTTP/1.1 424 Failed Dependency</status>\n  </response>\n</multistatus>",
    "language": "xml"
  },
  "exampleRequest": {
    "title": "PROPPATCH Action",
    "code": "PROPPATCH /doc/parent HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Dependent Task Failure",
    "code": "HTTP/1.1 207 Multi-Status\nContent-Type: text/xml\n\n<multistatus xmlns=\"DAV:\">\n  <response>\n    <href>/doc/parent</href>\n    <status>HTTP/1.1 409 Conflict</status>\n  </response>\n  <response>\n    <href>/doc/parent/child</href>\n    <status>HTTP/1.1 424 Failed Dependency</status>\n  </response>\n</multistatus>",
    "language": "xml"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 424 status for multi-step transaction failures in Express.",
      "code": "app.post('/api/steps', (req, res) => {\n  // if step 1 fails, return 424 for step 2\n  res.status(424).json({ error: 'Step 1 failed, aborting Step 2' });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "API route returning status 424.",
      "code": "export function POST() {\n  return new Response('Dependency Failed', { status: 424 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 424.",
      "code": "from django.http import HttpResponse\ndef my_view(request):\n    return HttpResponse(status=424)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 424.",
      "code": "@PostMapping(\"/steps\")\npublic ResponseEntity<Void> run() {\n    return ResponseEntity.status(HttpStatus.FAILED_DEPENDENCY).build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx forwards status 424 downstream.",
      "code": "# Forwarded downstream"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache forwards status 424 downstream.",
      "code": "# Forwarded downstream"
    }
  ],
  "commonMistakes": [
    "Using 424 for general server crashes (use 500 or 503 instead)."
  ],
  "prevention": [
    "Design transactional APIs to rollback changes cleanly on sub-failures."
  ],
  "faq": [
    {
      "question": "What is the origin of 424 Failed Dependency?",
      "answer": "It was introduced in the WebDAV specification (RFC 4918) to manage parent-child resource constraints in directory tree commands."
    },
    {
      "question": "Can I use 424 in microservice architectures?",
      "answer": "Yes. If an API gateway cannot process a request because a required internal microservice failed to reply or crashed, returning 424 is very semantic."
    },
    {
      "question": "Is 424 cacheable?",
      "answer": "No. Failed dependency responses are never cached."
    },
    {
      "question": "How do clients handle 424 responses?",
      "answer": "Clients should review which root dependency failed, address that issue (e.g. retry the first task), and re-submit the transaction."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 4918 – Section 11.4",
      "url": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.4"
    }
  ],
  "relatedErrors": [
    "207-multi-status"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "WebDAV bulk transactions where a"
    ],
    "checklist": [
      "Check sub-operation parameters.",
      "Handle transactional errors gracefully, reverting"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "WebDAV bulk transactions where a",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve 424 Failed Dependency — HTTP Debugging Guide",
  "seoDescription": "Encountering 424 Failed Dependency in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
