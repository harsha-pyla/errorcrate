import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "226-im-used",
  "name": "226 IM Used",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server has completed a GET request for the resource, and the response is a representation of one or more instance-manipulations.",
  "meanDescription": "The HTTP 226 IM Used status code is returned by a server in response to a GET request when Delta encoding is active. It indicates that the server is returning only the diff (instance-manipulations) between the current version of the resource and a base version specified by the client in the A-IM request header.",
  "causes": [
    "Delta encoding requests where the client specifies A-IM (Accept-Instance-Manipulation) headers (e.g. A-IM: feed, vcdiff)."
  ],
  "solutions": [
    "Verify the client application correctly applies the diff (manipulation) to its local base version to reconstruct the complete resource."
  ],
  "example": {
    "title": "Delta Encoding GET Request",
    "code": "GET /feed.xml HTTP/1.1\nHost: site.com\nIf-None-Match: \"base-version-etag\"\nA-IM: feed",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Delta Encoding GET Request",
    "code": "GET /feed.xml HTTP/1.1\nHost: site.com\nIf-None-Match: \"base-version-etag\"\nA-IM: feed",
    "language": "http"
  },
  "exampleResponse": {
    "title": "IM Used Diff Response",
    "code": "HTTP/1.1 226 IM Used\nIM: feed\nETag: \"new-version-etag\"\nContent-Length: 154\n\n(Returns only newly added items or differences since base-version-etag)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router handling A-IM delta encoding headers.",
      "code": "app.get('/feed', (req, res) => {\n  res.status(226).set('IM', 'feed').send('<diff></diff>');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API Handler returning custom status 226.",
      "code": "export async function GET() {\n  return new Response(null, { status: 226 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 226.",
      "code": "from django.http import HttpResponse\ndef delta_view(request):\n    return HttpResponse(status=226)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 226 IM Used.",
      "code": "@GetMapping(\"/feed\")\npublic ResponseEntity<String> getDelta() {\n    return ResponseEntity.status(226).body(\"<diff></diff>\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Allowing A-IM headers proxy pass configuration.",
      "code": "proxy_pass_header A-IM;\nproxy_pass_header IM;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache configurations checking request headers.",
      "code": "# Apache modules checking A-IM delta encoding"
    }
  ],
  "commonMistakes": [
    "Returning a full response but claiming it is a delta diff in 226 headers.",
    "Clients failing to verify local ETag versions before querying."
  ],
  "prevention": [
    "Use robust delta-generation libraries (e.g. VCDIFF implementations).",
    "Verify connection ETag tags are generated consistently."
  ],
  "faq": [
    {
      "question": "What does 'IM' stand for in 226 IM Used?",
      "answer": "IM stands for Instance Manipulation. It refers to the specific algorithm or technique used to generate the delta/diff representation (e.g., feed diffs or vcdiff compression)."
    },
    {
      "question": "What header is used to request Delta encoding?",
      "answer": "The client must send the 'A-IM' (Accept-Instance-Manipulation) request header containing supported manipulation formats."
    },
    {
      "question": "Why is Delta encoding rarely used?",
      "answer": "It adds complexity to the server cache layer and requires maintaining multiple diff baselines. Modern APIs prefer using timestamp query filters."
    },
    {
      "question": "What is returned in the ETag header during a 226 response?",
      "answer": "The ETag header returns the entity tag representing the target resource *after* applying the manipulations, not the base version."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 3229 – Delta Encoding in HTTP",
      "url": "https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1"
    }
  ],
  "relatedErrors": [
    "200-ok",
    "304-not-modified"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Delta encoding requests where the client specifies A-IM (Accept-Instance-Manipulation) headers (e.g. A-IM"
    ],
    "checklist": [
      "Verify the client application correctly"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Delta encoding requests where the client specifies A-IM (Accept-Instance-Manipulation) headers (e.g. A-IM",
      "frequency": "⭐⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 226 IM Used in HTTP — Causes & Solutions",
  "seoDescription": "Encountering 226 IM Used in HTTP? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening again."
};

export default errorData;
