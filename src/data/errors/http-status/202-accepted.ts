import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "202-accepted",
  "name": "202 Accepted",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Success (2xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The request has been accepted for processing, but the processing has not been completed.",
  "meanDescription": "The HTTP 202 Accepted status code indicates that the request has been received but not yet acted upon. It is non-committal, meaning that there is no way for the HTTP server to later send an asynchronous response indicating the outcome of the request. It is primarily used for batch or background tasks.",
  "causes": [
    "Queuing heavy computations (like video transcoding or report generation).",
    "Asynchronous webhook calls passing messages to message brokers (RabbitMQ/Kafka)."
  ],
  "solutions": [
    "Return a status monitor URL in the response payload so the client can poll for task completeness.",
    "Ensure client understands that the request may eventually fail during background execution."
  ],
  "example": {
    "title": "Heavy Job POST Request",
    "code": "POST /api/transcode-video HTTP/1.1\nHost: converter.com\n\n{\"file\": \"movie.mp4\"}",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Heavy Job POST Request",
    "code": "POST /api/transcode-video HTTP/1.1\nHost: converter.com\n\n{\"file\": \"movie.mp4\"}",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Accepted Queue Response",
    "code": "HTTP/1.1 202 Accepted\nContent-Type: application/json\n\n{\"status\": \"queued\", \"monitorUrl\": \"/api/jobs/775\"}",
    "language": "json"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Triggering Celery-like queues and returning 202 Accepted in Express.",
      "code": "app.post('/api/jobs', (req, res) => {\n  res.status(202).json({ jobId: 'job-123', status: 'queued' });\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "API route queuing server actions asynchronously and returning 202 status.",
      "code": "import { NextResponse } from 'next/server';\nexport async function POST() {\n  return NextResponse.json({ status: 'Processing' }, { status: 202 });\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Queueing Celery tasks and returning status 202 in Django.",
      "code": "from django.http import JsonResponse\ndef my_view(request):\n    return JsonResponse({'task_id': '123'}, status=202)"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Spring MVC controller returning status 202.",
      "code": "@PostMapping(\"/jobs\")\npublic ResponseEntity<Map<String, String>> createJob() {\n    return ResponseEntity.accepted().body(Map.of(\"jobId\", \"123\"));\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Increasing upstream proxy timeouts for asynchronous endpoints.",
      "code": "proxy_read_timeout 600;"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Configuring request proxy headers for delayed responses.",
      "code": "ProxyTimeout 600"
    }
  ],
  "commonMistakes": [
    "Keeping client HTTP connections open synchronously during 10-minute transcoding tasks (resulting in timeouts).",
    "Failing to provide a tracking token or polling endpoint to check status."
  ],
  "prevention": [
    "Implement a robust asynchronous message queue architecture (e.g., Celery, Redis Queue, BullMQ).",
    "Setup short connection timeout defaults to force background job delegation."
  ],
  "faq": [
    {
      "question": "How do client applications track 202 status progress?",
      "answer": "Usually, the response payload provides a 'monitorUrl' or job ID. The client sends recurring GET requests to that URL to check if the job is 'processing', 'completed', or 'failed'."
    },
    {
      "question": "What happens if the background task fails?",
      "answer": "Since the connection was already closed with 202, the server status endpoint will simply display 'failed' during client polling."
    },
    {
      "question": "Is 202 Accepted suitable for sending emails?",
      "answer": "Yes, dispatching emails is a classic background job that should return 202 Accepted immediately to prevent blocking UI interactions."
    },
    {
      "question": "Should a 202 response carry headers like Retry-After?",
      "answer": "Yes, servers can include a Retry-After header indicating how many seconds the client should wait before polling the status monitor URL."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202"
    },
    {
      "name": "RFC 7231 – Section 6.3.3",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3"
    }
  ],
  "relatedErrors": [
    "201-created",
    "204-no-content"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Queuing heavy computations (like video",
      "Asynchronous webhook calls passing messages"
    ],
    "checklist": [
      "Return a status monitor URL",
      "Ensure client understands that the"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Queuing heavy computations (like video",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Asynchronous webhook calls passing messages",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "202 Accepted Explained: Causes, Fixes & Prevention",
  "seoDescription": "Complete guide to fixing 202 Accepted in HTTP. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
