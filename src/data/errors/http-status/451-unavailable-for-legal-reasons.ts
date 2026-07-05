import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "451-unavailable-for-legal-reasons",
  "name": "451 Unavailable For Legal Reasons",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The user agent requested a resource that cannot legally be provided.",
  "meanDescription": "The HTTP 451 Unavailable For Legal Reasons client error status code indicates that the user agent requested a resource that cannot legally be provided, such as a web page censored by a government or blocked due to copyright violations.",
  "causes": [
    "Government censorship directives targeting specific pages.",
    "DMCA copyright takedown notices blocking access to media assets.",
    "Court orders demanding resource restriction."
  ],
  "solutions": [
    "Provide details of the legal authority/court order demanding the block in the response body.",
    "Ensure resources are unblocked in regions where legal restrictions do not apply."
  ],
  "example": {
    "title": "Censored Content Response",
    "code": "HTTP/1.1 451 Unavailable For Legal Reasons\nLink: <https://court-orders.org/case-99>; rel=\"blocked-by\"\nContent-Type: text/html\n\n<h1>Unavailable For Legal Reasons</h1>\n<p>Blocked by court order case-99.</p>",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Requesting Blocked News",
    "code": "GET /articles/censored-news HTTP/1.1\nHost: news.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Censored Content Response",
    "code": "HTTP/1.1 451 Unavailable For Legal Reasons\nLink: <https://court-orders.org/case-99>; rel=\"blocked-by\"\nContent-Type: text/html\n\n<h1>Unavailable For Legal Reasons</h1>\n<p>Blocked by court order case-99.</p>",
    "language": "html"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Express router returning 451 with legal authority link headers.",
      "code": "app.get('/blocked-video', (req, res) => {\n  res.status(451)\n     .set('Link', '<http://court.gov/order.pdf>; rel=\"blocked-by\"')\n     .send('Blocked due to copyright claim.');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js API Handler returning status 451.",
      "code": "export function GET() {\n  return new Response('Legal restriction active', { status: 451 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 451.",
      "code": "from django.http import HttpResponse\ndef blocked_view(request):\n    return HttpResponse('Legal Block', status=451)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 451.",
      "code": "@GetMapping(\"/restricted\")\npublic ResponseEntity<String> block() {\n    return ResponseEntity.status(451).body(\"Unavailable for legal reasons\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Geographical IP restriction blocks mapping to 451.",
      "code": "# Nginx geoIP blocks returning 451 for restricted zones"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache configurations returning 451.",
      "code": "# Apache returning status 451"
    }
  ],
  "commonMistakes": [
    "Using 403 Forbidden instead of 451 (451 is highly specific and legal transparency standards expect 451 over generic 403 blocks)."
  ],
  "prevention": [
    "Ensure copyright auditing processes flag blocked files with 451 rather than deleting them, preserving user logs."
  ],
  "faq": [
    {
      "question": "What is the significance of the number 451?",
      "answer": "The number 451 is a direct reference to Ray Bradbury's famous dystopian novel 'Fahrenheit 451', which describes a society where books are censored and burned."
    },
    {
      "question": "What header should accompany a 451 response?",
      "answer": "It is highly recommended to include a 'Link' header with a relation parameter `rel=\"blocked-by\"` pointing to the organization, law, or court order mandating the block."
    },
    {
      "question": "Does Google index pages that return 451?",
      "answer": "No. Search engine crawlers will remove URLs returning 451 from search results, indexing the legal block status instead."
    },
    {
      "question": "Is 451 cacheable?",
      "answer": "Yes. 451 responses are cacheable by default unless specified by cache headers."
    }
  ],
  "helpfulResources": [
    {
      "name": "RFC 7725 – 451 Unavailable For Legal Reasons",
      "url": "https://datatracker.ietf.org/doc/html/rfc7725"
    }
  ],
  "relatedErrors": [
    "403-forbidden"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Government censorship directives targeting specific",
      "DMCA copyright takedown notices blocking",
      "Court orders demanding resource restriction."
    ],
    "checklist": [
      "Provide details of the legal",
      "Ensure resources are unblocked in"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Government censorship directives targeting specific",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "DMCA copyright takedown notices blocking",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Court orders demanding resource restriction.",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "451 Unavailable For Legal Reasons: Complete HTTP.",
  "seoDescription": "Resolve 451 Unavailable For Legal Reasons in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
