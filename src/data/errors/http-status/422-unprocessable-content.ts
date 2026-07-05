import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "422-unprocessable-content",
  "name": "422 Unprocessable Content",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server understands the content type and syntax, but cannot process instructions.",
  "meanDescription": "The HTTP 422 Unprocessable Content client error status code (formerly Unprocessable Entity) indicates that the server understands the content type of the request entity, and the syntax of the request entity is correct, but was unable to process the contained instructions (e.g. form input validation errors).",
  "causes": [
    "Input fields validation failing (e.g., missing required fields, or fields not matching regex).",
    "Semantic errors in requests, such as attempting to purchase an out-of-stock item."
  ],
  "solutions": [
    "Validate user input fields on the client before submission.",
    "Return a detailed JSON response listing each validation error field and message."
  ],
  "example": {
    "title": "Validation Failure",
    "code": "POST /api/users HTTP/1.1\nContent-Type: application/json\n\n{\"email\": \"invalid-email-address\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Validation Failure",
    "code": "POST /api/users HTTP/1.1\nContent-Type: application/json\n\n{\"email\": \"invalid-email-address\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Unprocessable Response",
    "code": "HTTP/1.1 422 Unprocessable Content\nContent-Type: application/json\n\n{\n  \"errors\": [\n    { \"field\": \"email\", \"message\": \"Must be a valid email address\" }\n  ]\n}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Using express-validator to check fields and return 422 on failures.",
      "code": "const { body, validationResult } = require('express-validator');\napp.post('/user', body('email').isEmail(), (req, res) => {\n  const errors = validationResult(req);\n  if (!errors.isEmpty()) {\n    return res.status(422).json({ errors: errors.array() });\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Zod parsing validations inside Next.js Route Handlers returning 422.",
      "code": "import { NextResponse } from 'next/server';\nimport { z } from 'zod';\nconst schema = z.object({ age: z.number().min(18) });\nexport async function POST(req: Request) {\n  const body = await req.json();\n  const parsed = schema.safeParse(body);\n  if (!parsed.success) {\n    return NextResponse.json({ error: parsed.error }, { status: 422 });\n  }\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Returning 422 in Django views on serializer errors.",
      "code": "from django.http import JsonResponse\ndef my_view(request):\n    # DRF serializer checks return 400 by default; custom handlers return 422\n    return JsonResponse({'error': 'Validation failed'}, status=422)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring validation advice returning 422 on MethodArgumentNotValidException.",
      "code": "@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map> handle(MethodArgumentNotValidException ex) {\n    return ResponseEntity.status(422).body(Map.of(\"error\", \"Validation Failed\"));\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx passes status 422 downstream to application server.",
      "code": "# Handled by app"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache passes status 422 downstream to application server.",
      "code": "# Handled by app"
    }
  ],
  "commonMistakes": [
    "Using 400 Bad Request for validation errors (400 is for syntax corruption; 422 is for semantic/validation errors).",
    "Omitting error field details in the response body."
  ],
  "prevention": [
    "Implement validation schemas (Zod, Joi) across all route endpoints.",
    "Synchronize validation rules between frontend forms and backend models."
  ],
  "faq": [
    {
      "question": "What is the difference between 400 and 422?",
      "answer": "Use 400 Bad Request when the server cannot parse the request (e.g. malformed JSON). Use 422 Unprocessable Content when the syntax is correct but the values fail semantic validation (e.g. invalid email format)."
    },
    {
      "question": "What is the new name of 422?",
      "answer": "In newer HTTP specifications, the name has been changed from '422 Unprocessable Entity' to '422 Unprocessable Content'."
    },
    {
      "question": "Is 422 cacheable?",
      "answer": "No. The 422 status code is not cacheable by default."
    },
    {
      "question": "Should my frontend check for 422 explicitly?",
      "answer": "Yes. Frontend fetch handlers should intercept 422, extract the error details array, and display inline validation messages next to the corresponding form inputs."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422"
    },
    {
      "name": "RFC 4918 – Section 11.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc4918#section-11.2"
    }
  ],
  "relatedErrors": [
    "400-bad-request",
    "409-conflict"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Input fields validation failing (e.g.,",
      "Semantic errors in requests, such"
    ],
    "checklist": [
      "Validate user input fields on",
      "Return a detailed JSON response"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Input fields validation failing (e.g.,",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Semantic errors in requests, such",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix 422 Unprocessable Content in HTTP — Causes & Solutions",
  "seoDescription": "Resolve 422 Unprocessable Content in HTTP with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
