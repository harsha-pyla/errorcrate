import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "300-multiple-choices",
  "name": "300 Multiple Choices",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The request has more than one possible response, and the user agent should select one.",
  "meanDescription": "The HTTP 300 Multiple Choices redirection status code indicates that the request has more than one possible response. The user agent or user should choose one of them. Since there is no standardized way of choosing one of the responses, this status code is very rarely used.",
  "causes": [
    "Requesting a resource that has multiple format variations (e.g. video files in different formats/resolutions).",
    "Content negotiation workflows returning optional links lists."
  ],
  "solutions": [
    "Provide a list of link choices in the response body payload (e.g. HTML or JSON links representation).",
    "Allow clients to select format criteria using HTTP Accept headers instead."
  ],
  "example": {
    "title": "Multiple Choices Representation",
    "code": "HTTP/1.1 300 Multiple Choices\nContent-Type: application/json\n\n{\n  \"choices\": [\n    { \"format\": \"mp4\", \"url\": \"/video.mp4\" },\n    { \"format\": \"webm\", \"url\": \"/video.webm\" }\n  ]\n}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Querying Format Choices",
    "code": "GET /video HTTP/1.1\nHost: example.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Multiple Choices Representation",
    "code": "HTTP/1.1 300 Multiple Choices\nContent-Type: application/json\n\n{\n  \"choices\": [\n    { \"format\": \"mp4\", \"url\": \"/video.mp4\" },\n    { \"format\": \"webm\", \"url\": \"/video.webm\" }\n  ]\n}",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Returning 300 status code with choice payload links in Express.",
      "code": "app.get('/video', (req, res) => {\n  res.status(300).json({\n    choices: ['/video.mp4', '/video.webm']\n  });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning choices inside Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return NextResponse.json({ choices: [] }, { status: 300 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 300.",
      "code": "from django.http import JsonResponse\ndef choices_view(request):\n    return JsonResponse({'choices': []}, status=300)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 300.",
      "code": "@GetMapping(\"/choices\")\npublic ResponseEntity<Map> getChoices() {\n    return ResponseEntity.status(300).body(Map.of(\"choices\", List.of()));\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx custom maps returning status 300.",
      "code": "# Nginx returns 300 for non-negotiated paths"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache content negotiation configurations.",
      "code": "Options +MultiViews"
    }
  ],
  "commonMistakes": [
    "Returning HTTP 300 without providing choice URLs in the body, leaving the client stuck.",
    "Using 300 instead of standard 302/307 redirects when a default choice exists."
  ],
  "prevention": [
    "Prefer content negotiation headers (e.g. Accept, Accept-Language) over 300 redirection loops.",
    "Format choice bodies clearly in JSON or XML for automated parser processing."
  ],
  "faq": [
    {
      "question": "Why is 300 Multiple Choices rarely used?",
      "answer": "Because there is no standard format for the response body, browsers cannot pick a choice automatically, forcing users to click link options manually."
    },
    {
      "question": "Can 300 responses be cached?",
      "answer": "Yes. 300 Multiple Choices responses are cacheable by default unless specified by cache-control headers."
    },
    {
      "question": "What is the correct fallback if a browser cannot choose?",
      "answer": "The server should designate a default resource choice in the 'Location' header of the 300 response."
    },
    {
      "question": "Does 300 affect SEO?",
      "answer": "Yes. Search engine bots cannot choose between choices, which splits link ranking equity. Use 301 Moved Permanently instead."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300"
    },
    {
      "name": "RFC 7231 – Section 6.4.1",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1"
    }
  ],
  "relatedErrors": [
    "301-moved-permanently",
    "302-found"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Requesting a resource that has",
      "Content negotiation workflows returning optional"
    ],
    "checklist": [
      "Provide a list of link",
      "Allow clients to select format"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Requesting a resource that has",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Content negotiation workflows returning optional",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "300 Multiple Choices: Quick Fix Guide for HTTP Developers",
  "seoDescription": "Complete guide to fixing 300 Multiple Choices in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
