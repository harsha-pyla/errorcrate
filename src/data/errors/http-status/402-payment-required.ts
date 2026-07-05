import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "402-payment-required",
  "name": "402 Payment Required",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "Reserved for future use. Used by some APIs (like Stripe) indicating charge failures.",
  "meanDescription": "The HTTP 402 Payment Required client error status code is reserved for future use. The original intention was that this code might be used as part of some form of digital cash or micro-payment scheme, but it is currently used by platforms like Stripe, Shopify, or Google Developers to indicate subscription/charge limits.",
  "causes": [
    "Stripe or payment gateway API request processing charge declines.",
    "SaaS subscription plan credit limits exceeded."
  ],
  "solutions": [
    "Add billing credentials or update saved card files on the client dashboard.",
    "Retry charging transaction requests using updated details."
  ],
  "example": {
    "title": "API Limit Decline",
    "code": "HTTP/1.1 402 Payment Required\nContent-Type: application/json\n\n{\"error\": \"Card declined. Subscription suspended.\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "POST Charge Request",
    "code": "POST /api/charges HTTP/1.1\nHost: api.stripe.com",
    "language": "http"
  },
  "exampleResponse": {
    "title": "API Limit Decline",
    "code": "HTTP/1.1 402 Payment Required\nContent-Type: application/json\n\n{\"error\": \"Card declined. Subscription suspended.\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Checking API key transaction limits and returning 402.",
      "code": "app.get('/api/premium', (req, res) => {\n  if (req.user.hasActivePlan === false) {\n    res.status(402).json({ error: 'Subscription Required' });\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "API Route returning status 402.",
      "code": "import { NextResponse } from 'next/server';\nexport function GET() {\n  return NextResponse.json({ error: 'Payment Needed' }, { status: 402 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 402.",
      "code": "from django.http import JsonResponse\ndef billing_check(request):\n    return JsonResponse({'error': 'Payment required'}, status=402)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 402.",
      "code": "@GetMapping(\"/premium\")\npublic ResponseEntity<String> getPremium() {\n    return ResponseEntity.status(402).body(\"Payment required\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "IP connection throttling mapped to 402 warnings.",
      "code": "# Custom redirection for billing redirects"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache directory rules forwarding to billing views.",
      "code": "# Apache rules returning status 402"
    }
  ],
  "commonMistakes": [
    "Using 402 for unauthenticated requests (use 401 instead).",
    "Using 402 in standard public applications before billing modules are integrated."
  ],
  "prevention": [
    "Validate user subscription statuses before allowing them to run resource-heavy API operations."
  ],
  "faq": [
    {
      "question": "Is 402 Payment Required part of the official HTTP spec?",
      "answer": "Yes. It was defined in the original HTTP/1.1 specifications, but its implementation details were left reserved for future use."
    },
    {
      "question": "Which major platforms use 402 status codes?",
      "answer": "Stripe uses it for card charging failures. Google Developers API uses it when developers exceed daily budget/query limits."
    },
    {
      "question": "Does 402 trigger native browser popups?",
      "answer": "No. Browsers handle 402 exactly like other error codes, passing the response details directly to application scripts."
    },
    {
      "question": "Should I use 402 in my private API?",
      "answer": "Yes. If your application offers premium tiers, returning a 402 status code is a highly semantic way to signal payment or tier upgrades."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402"
    },
    {
      "name": "RFC 7231 – Section 6.5.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2"
    }
  ],
  "relatedErrors": [
    "401-unauthorized",
    "403-forbidden"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Stripe or payment gateway API",
      "SaaS subscription plan credit limits"
    ],
    "checklist": [
      "Add billing credentials or update",
      "Retry charging transaction requests using"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Stripe or payment gateway API",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "SaaS subscription plan credit limits",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve 402 Payment Required — HTTP Debugging Guide",
  "seoDescription": "Learn how to fix 402 Payment Required in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly."
};

export default errorData;
