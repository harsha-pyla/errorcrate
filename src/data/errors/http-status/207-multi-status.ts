import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "207-multi-status",
  "name": "207 Multi-Status",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Conveys information about multiple resources in situations where multiple status codes might be appropriate.",
  "meanDescription": "The HTTP 207 Multi-Status WebDAV status code conveys information about multiple resources in situations where multiple status codes might be appropriate. The response body is an XML payload containing individual status reports for each sub-resource request.",
  "causes": [
    "WebDAV directory listing or properties requests (PROPFIND/PROPPATCH) returning status info for multiple files."
  ],
  "solutions": [
    "Verify the client WebDAV XML parser identifies status elements inside individual XML nodes correctly.",
    "Check individual status entries in the XML node list to isolate specific sub-resource errors."
  ],
  "example": {
    "title": "PROPFIND Folder Request",
    "code": "PROPFIND /documents HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleRequest": {
    "title": "PROPFIND Folder Request",
    "code": "PROPFIND /documents HTTP/1.1\nHost: dav.example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Multi-Status XML Response",
    "code": "HTTP/1.1 207 Multi-Status\nContent-Type: text/xml; charset=\"utf-8\"\nContent-Length: 295\n\n<multistatus xmlns=\"DAV:\">\n  <response>\n    <href>/documents/file1.txt</href>\n    <status>HTTP/1.1 200 OK</status>\n  </response>\n</multistatus>",
    "language": "xml"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 207 Multi-Status XML responses in Express controllers.",
      "code": "app.propfind('/documents', (req, res) => {\n  res.status(207).set('Content-Type', 'text/xml').send('<multistatus></multistatus>');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API Handler returning custom XML data structures.",
      "code": "export async function GET() {\n  return new Response('<multistatus></multistatus>', { status: 207 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning XML responses in Django views.",
      "code": "from django.http import HttpResponse\ndef dav_view(request):\n    return HttpResponse('<multistatus></multistatus>', status=207)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 207.",
      "code": "@RequestMapping(value = \"/dav\")\npublic ResponseEntity<String> getMultiStatus() {\n    return ResponseEntity.status(207).body(\"<multistatus></multistatus>\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Allowing WebDAV protocol configurations.",
      "code": "dav_methods PUT DELETE MKCOL COPY MOVE;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling WebDAV module for virtual directories.",
      "code": "DAV On"
    }
  ],
  "commonMistakes": [
    "Returning a single 200 OK status code but failed item results are embedded inside the XML body.",
    "Misconfiguring xml mime types resulting in client parsing errors."
  ],
  "prevention": [
    "Use XML mapping libraries to generate structured node trees.",
    "Always set Content-Type header to text/xml or application/xml."
  ],
  "faq": [
    {
      "question": "Is 207 Multi-Status used in REST APIs?",
      "answer": "Normally no. It is an extension defined by WebDAV (RFC 4918). However, some batch processing REST API designs use it to return status results for arrays of items uploaded at once."
    },
    {
      "question": "What format is the 207 response body?",
      "answer": "The body is typically formatted in XML using WebDAV namespaces (multistatus, response, href, status)."
    },
    {
      "question": "Can a 207 response contain both 2xx and 4xx status items?",
      "answer": "Yes. Each sub-element carries its own status code (e.g. file1.txt succeeded with 200, file2.txt failed with 403)."
    },
    {
      "question": "Should I use 207 for bulk uploads?",
      "answer": "It is a valid approach, though returning a simple JSON array with status codes (e.g. {results: [{status: 200}, {status: 400}]}) is more common in modern APIs."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 4918 – Multi-Status",
      "url": "https://datatracker.ietf.org/doc/html/rfc4918#section-11"
    }
  ],
  "relatedErrors": [
    "208-already-reported",
    "200-ok"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "WebDAV directory listing or properties"
    ],
    "checklist": [
      "Verify the client WebDAV XML",
      "Check individual status entries in"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "WebDAV directory listing or properties",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "207 Multi-Status: Complete HTTP Troubleshooting Guide",
  "seoDescription": "Resolve 207 Multi-Status in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and community-verified."
};

export default errorData;
