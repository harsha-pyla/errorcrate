import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "208-already-reported",
  "name": "208 Already Reported",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Used inside a DAV:propstat response element to avoid enumerating the members of multiple bindings repeatedly.",
  "meanDescription": "The HTTP 208 Already Reported WebDAV status code is used inside a 207 Multi-Status response body to indicate that a binding has already been reported in a previous response element, avoiding duplicate resource definitions.",
  "causes": [
    "WebDAV property requests (PROPFIND) query cycles on circular bindings or symbolic link trees."
  ],
  "solutions": [
    "Verify the client WebDAV parser identifies the 208 element and correctly maps properties without duplicate loops."
  ],
  "example": {
    "title": "Circular Directory Query",
    "code": "PROPFIND /shared-folder HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Circular Directory Query",
    "code": "PROPFIND /shared-folder HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Already Reported XML Element",
    "code": "HTTP/1.1 207 Multi-Status\nContent-Type: text/xml\n\n<multistatus xmlns=\"DAV:\">\n  <response>\n    <href>/shared-folder/symlink-back</href>\n    <status>HTTP/1.1 208 Already Reported</status>\n  </response>\n</multistatus>",
    "language": "xml"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning status code 208.",
      "code": "app.propfind('/circular', (req, res) => {\n  res.status(208).end();\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API Handler returning custom status 208.",
      "code": "export async function GET() {\n  return new Response(null, { status: 208 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 208.",
      "code": "from django.http import HttpResponse\ndef my_view(request):\n    return HttpResponse(status=208)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 208 Already Reported.",
      "code": "@RequestMapping(value = \"/circular\")\npublic ResponseEntity<Void> getAlreadyReported() {\n    return new ResponseEntity<>(HttpStatus.ALREADY_REPORTED);\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Passing WebDAV methods in Nginx configuration.",
      "code": "dav_methods PUT DELETE MKCOL COPY MOVE;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling DAV lock directories.",
      "code": "DavLockDB \"/var/spool/dav/DavLock\""
    }
  ],
  "commonMistakes": [
    "Failing to track query depth, resulting in proxy infinite loops despite 208 support.",
    "Misinterpreting 208 Already Reported as an error state."
  ],
  "prevention": [
    "Limit WebDAV folder query depth using Depth headers.",
    "Verify client library WebDAV parsing loops are guarded."
  ],
  "faq": [
    {
      "question": "What is the primary benefit of 208 Already Reported?",
      "answer": "It prevents infinite loops and reduces network overhead when WebDAV directories contain deep loops, internal links, or cross-referenced folders."
    },
    {
      "question": "Where is 208 Already Reported placed?",
      "answer": "It is returned inside the `<status>` elements within a 207 Multi-Status XML response body."
    },
    {
      "question": "Is 208 supported by standard browsers?",
      "answer": "Directly no. Standard browsers do not speak WebDAV natively. The code is handled by dedicated WebDAV desktop clients or network mounts."
    },
    {
      "question": "What is the difference between 208 and 207?",
      "answer": "207 is the root response status code indicating that multiple results are enclosed. 208 is an individual item status code inside the 207 body indicating duplicate listings have been skipped."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 5842 – Binding Extensions",
      "url": "https://datatracker.ietf.org/doc/html/rfc5842#section-7.1"
    }
  ],
  "relatedErrors": [
    "207-multi-status",
    "200-ok"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "WebDAV property requests (PROPFIND) query"
    ],
    "checklist": [
      "Verify the client WebDAV parser"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "WebDAV property requests (PROPFIND) query",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 208 Already Reported in HTTP — Step-by-Step Fix",
  "seoDescription": "Fix 208 Already Reported fast. This HTTP debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
