import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "418-im-a-teapot",
  "name": "418 I'm a Teapot",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server refuses to brew coffee because it is, permanently, a teapot.",
  "meanDescription": "The HTTP 418 I'm a Teapot client error status code indicates that the server refuses to brew coffee because it is, permanently, a teapot. This code was defined in 1998 as an April Fools' joke and is not expected to be implemented by real HTTP servers.",
  "causes": [
    "Defined in RFC 2324 (HTCPCP/1.0 - Hyper Text Coffee Pot Control Protocol).",
    "Added as an easter egg or joke inside application routing frameworks."
  ],
  "solutions": [
    "No real solutions needed. Used for easter eggs and application testing diagnostics."
  ],
  "example": {
    "title": "Teapot Easter Egg",
    "code": "HTTP/1.1 418 I'm a Teapot\nContent-Type: text/plain\n\nI am a short and stout teapot. Cannot brew coffee.",
    "language": "http"
  },
  "exampleRequest": {
    "title": "BREW Coffee Request",
    "code": "BREW /coffee HTTP/1.1\nHost: teapot.local",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Teapot Easter EggResponse",
    "code": "HTTP/1.1 418 I'm a Teapot\nContent-Type: text/plain\n\nI am a short and stout teapot. Cannot brew coffee.",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning status 418 as an API easter egg.",
      "code": "app.get('/coffee', (req, res) => {\n  res.status(418).send(\"I'm a teapot!\");\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js Route Handler returning status 418.",
      "code": "export function GET() {\n  return new Response(\"I'm a teapot\", { status: 418 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 418.",
      "code": "from django.http import HttpResponse\ndef teapot_view(request):\n    return HttpResponse(\"I'm a teapot\", status=418)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 418.",
      "code": "@GetMapping(\"/coffee\")\npublic ResponseEntity<String> brew() {\n    return ResponseEntity.status(HttpStatus.I_AM_A_TEAPOT).body(\"Teapot\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx ignores status 418.",
      "code": "# Joke configuration"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache ignores status 418.",
      "code": "# Joke configuration"
    }
  ],
  "commonMistakes": [
    "Using 418 in production code for serious errors (use standard codes like 400 or 500 instead)."
  ],
  "prevention": [
    "Reserve 418 exclusively for testing endpoints or easter eggs."
  ],
  "faq": [
    {
      "question": "Is 418 a real HTTP status code?",
      "answer": "No. It was published in RFC 2324 as an April Fools' Day joke in 1998 to describe a protocol for controlling coffee pots, and is not a standard web server status."
    },
    {
      "question": "Will modern browsers show a teapot?",
      "answer": "No. Browsers treat 418 as an unmapped 4xx client error, displaying generic error pages or passing details to Javascript handlers."
    },
    {
      "question": "Why is 418 kept in frameworks?",
      "answer": "Due to its cult popularity among developers. Many major libraries (like Spring Framework, Node.js, and Python requests) preserve 418 as a fun easter egg."
    },
    {
      "question": "Is 418 cacheable?",
      "answer": "No. The 418 I'm a Teapot status code is never cached."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 2324 – HTCPCP/1.0",
      "url": "https://datatracker.ietf.org/doc/html/rfc2324"
    }
  ],
  "relatedErrors": [
    "400-bad-request"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Defined in RFC 2324 (HTCPCP/1.0",
      "Added as an easter egg"
    ],
    "checklist": [
      "No real solutions needed. Used"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Defined in RFC 2324 (HTCPCP/1.0",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Added as an easter egg",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "418 I'm a Teapot: Complete HTTP Troubleshooting Guide",
  "seoDescription": "Learn how to fix 418 I'm a Teapot in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
