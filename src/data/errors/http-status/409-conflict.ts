import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "409-conflict",
  "name": "409 Conflict",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Client (4xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "Request could not be completed due to a conflict with the current state of the resource.",
  "meanDescription": "The HTTP 409 Conflict client error status code indicates a request conflict with the current state of the target resource. Conflicts are most likely to occur in response to a PUT or POST request (e.g. duplicate key inserts in databases).",
  "causes": [
    "Attempting to register an email address that already exists in the database.",
    "Uploading a file version that conflicts with edits made by another user (edit conflicts).",
    "Circular dependency creations in system structures."
  ],
  "solutions": [
    "Check resource status before executing writing commands.",
    "Return a detailed response body explaining the conflict resolution parameters.",
    "Ensure clients merge state changes before re-submitting."
  ],
  "example": {
    "title": "Duplicate Username POST",
    "code": "POST /register HTTP/1.1\nContent-Type: application/json\n\n{\"username\": \"alice\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Duplicate Username POST",
    "code": "POST /register HTTP/1.1\nContent-Type: application/json\n\n{\"username\": \"alice\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Conflict Response",
    "code": "HTTP/1.1 409 Conflict\nContent-Type: application/json\n\n{\"error\": \"Username 'alice' is already taken\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Checking database records and returning 409 for duplicates.",
      "code": "app.post('/register', async (req, res) => {\n  const exists = await User.findOne({ username: req.body.username });\n  if (exists) {\n    return res.status(409).json({ error: 'Username taken' });\n  }\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Returning 409 Conflict inside Route Handlers.",
      "code": "import { NextResponse } from 'next/server';\nexport function POST() {\n  return NextResponse.json({ error: 'State Conflict' }, { status: 409 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django view returning status 409 on IntegrityError.",
      "code": "from django.db import IntegrityError\nfrom django.http import JsonResponse\n\ndef register(request):\n    try:\n        # save user...\n        pass\n    except IntegrityError:\n        return JsonResponse({'error': 'Conflict'}, status=409)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring controller returning status 409.",
      "code": "@PostMapping(\"/users\")\npublic ResponseEntity<String> save(@RequestBody User user) {\n    if (service.exists(user.getUsername())) {\n        return ResponseEntity.status(HttpStatus.CONFLICT).body(\"Conflict\");\n    }\n    return ResponseEntity.ok(\"Saved\");\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Nginx passes status 409 downstream.",
      "code": "# 409 handled by application"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache passes status 409 downstream.",
      "code": "# 409 handled by application"
    }
  ],
  "commonMistakes": [
    "Using 400 Bad Request instead of 409 Conflict for duplicate database records.",
    "Omitting error explanation messages, leaving clients confused about what state triggered the conflict."
  ],
  "prevention": [
    "Setup transaction isolation rules inside databases.",
    "Validate user input states before running writing mutations."
  ],
  "faq": [
    {
      "question": "When should I return a 409 Conflict?",
      "answer": "Return 409 when the request is syntactically correct (not a 400), but cannot be completed because it violates business logic constraints (e.g. duplicate username, or mid-air edit collisions)."
    },
    {
      "question": "Is 409 Conflict cacheable?",
      "answer": "No. By default, 409 responses are not cacheable, as they represent dynamic transaction blocks."
    },
    {
      "question": "How do clients resolve 409 conflicts?",
      "answer": "The client should fetch the latest resource state, merge changes, and ask the user to re-submit or choose alternative parameters."
    },
    {
      "question": "How does 409 differ from 412 Precondition Failed?",
      "answer": "Use 412 when HTTP conditional check headers (like If-Match) fail. Use 409 for application business logic conflicts (like database constraints)."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409"
    },
    {
      "name": "RFC 7231 – Section 6.5.8",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8"
    }
  ],
  "relatedErrors": [
    "412-precondition-failed",
    "422-unprocessable-content"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Attempting to register an email",
      "Uploading a file version that",
      "Circular dependency creations in system"
    ],
    "checklist": [
      "Check resource status before executing",
      "Return a detailed response body",
      "Ensure clients merge state changes"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Attempting to register an email",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Uploading a file version that",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Circular dependency creations in system",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug 409 Conflict in HTTP — Step-by-Step Fix",
  "seoDescription": "409 Conflict in HTTP — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
