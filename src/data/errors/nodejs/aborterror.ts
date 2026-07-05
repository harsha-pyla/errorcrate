import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "aborterror",
  "name": "AbortError",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Runtime Error",
    "Medium"
  ],
  "updatedAt": "May 12, 2024",
  "shortDescription": "AbortError is thrown when an asynchronous operation is intentionally cancelled before it completes.",
  "meanDescription": "AbortError is thrown when an asynchronous operation is intentionally cancelled before it completes. Unlike most runtime errors, an AbortError usually doesn't indicate that something is broken. It simply means that an operation was stopped because the application, user, or another part of the system requested cancellation. You'll most commonly encounter AbortError when working with fetch(), AbortController, streams, timers, file operations, and network requests. If you've added request timeouts or cancellation logic to your application, seeing an AbortError is often expected behavior.\n\nImagine your application starts downloading a large file. Halfway through the download, the user closes the page. Continuing the download would waste bandwidth and system resources, so your application cancels the request. Instead of completing successfully, the operation throws an AbortError.\n\nIn other words: The operation didn't fail because of invalid code or a server problem—it stopped because cancellation was requested.",
  "causes": [
    "Request Timeout: Developers often create an AbortController to stop requests that take too long.",
    "User Cancellation: A user clicks 'Cancel Upload' or navigates away from the page, prompting the application to abort the request intentionally.",
    "Multiple Search Requests: Instead of waiting for every keypress request to finish, the application cancels older queries to only allow the latest to complete, improving responsiveness.",
    "Stream Cancellation: Readable streams are aborted if the stream closes before reading is complete, throwing an AbortError."
  ],
  "solutions": [
    "If cancellation is expected: Don't treat it as an application error. Instead, handle it gracefully by checking if error.name === 'AbortError' and returning quietly.",
    "If requests are timing out: Increase the timeout limit only if the operation genuinely requires more time. Avoid setting extremely long timeouts without clear reasons.",
    "If the AbortController fires too early: Review where abort() is being called. A common mistake is accidentally reusing the same controller across multiple requests.",
    "If users frequently cancel operations: This isn't necessarily a bug. Handle the cancellation gracefully and update the UI accordingly to reflect the user's action."
  ],
  "example": {
    "title": "AbortError Structure",
    "code": "AbortError: The operation was aborted.\n// or\nDOMException [AbortError]: This operation was aborted",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Example Wording Variant A",
    "code": "AbortError: The operation was aborted.",
    "language": "text"
  },
  "exampleResponse": {
    "title": "Example Wording Variant B",
    "code": "DOMException [AbortError]: This operation was aborted",
    "language": "text"
  },
  "frameworkExamples": [
    {
      "name": "Complete Example",
      "language": "javascript",
      "description": "If the request takes longer than three seconds, the controller aborts it, the promise rejects with AbortError, and the code handles it without crashing the application.",
      "code": "const controller = new AbortController();\n\nsetTimeout(() => controller.abort(), 3000);\n\nasync function loadUser() {\n    try {\n        const response = await fetch(\n            \"https://jsonplaceholder.typicode.com/users/1\",\n            {\n                signal: controller.signal\n            }\n        );\n\n        const data = await response.json();\n        console.log(data);\n\n    } catch (error) {\n        if (error.name === \"AbortError\") {\n            console.log(\"Request cancelled.\");\n            return;\n        }\n        console.error(error);\n    }\n}\n\nloadUser();"
    },
    {
      "name": "Express Context",
      "language": "javascript",
      "description": "Checking for client cancellations in Express to stop heavy database operations early.",
      "code": "app.get('/heavy-job', (req, res) => {\n  const controller = new AbortController();\n  req.on('close', () => {\n    // Client aborted, cancel computation\n    controller.abort();\n  });\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx Proxy Configuration",
      "language": "nginx",
      "description": "Enabling client abort detection on Nginx proxy layers.",
      "code": "proxy_ignore_client_abort off;"
    }
  ],
  "commonMistakes": [
    "Treating AbortError like every other error: Many applications log it as a critical exception, which creates unnecessary noise in logs.",
    "Ignoring AbortError completely: While expected cancellations can be ignored, unexpected ones may indicate that your cancellation logic is firing too early.",
    "Reusing AbortController instances: An AbortController cannot be 'reset'. Once abort() has been called, its signal remains aborted. Create a new controller for each new operation."
  ],
  "prevention": [
    "Create a new AbortController instance for each independent request.",
    "Catch and evaluate AbortError separately from other exceptions.",
    "Avoid reporting expected cancellations to error monitoring services (e.g. Sentry).",
    "Use cancellation to improve user experience, not to hide server performance problems.",
    "Display appropriate UI feedback when an operation is cancelled."
  ],
  "faq": [
    {
      "question": "Is AbortError a bug?",
      "answer": "Not necessarily. Most of the time it simply indicates that an operation was intentionally cancelled."
    },
    {
      "question": "Can I ignore AbortError?",
      "answer": "Yes, if the cancellation was expected and your application handles it correctly. Unexpected AbortError instances should still be investigated."
    },
    {
      "question": "Is AbortError specific to Node.js?",
      "answer": "No. It also appears in browser APIs that support AbortController, including the Fetch API and streams."
    },
    {
      "question": "What is the difference between AbortError and TimeoutError?",
      "answer": "TimeoutError is thrown when a network socket exceeds inactivity bounds. AbortError is a cancellation signal triggered programmatically by AbortController, even if triggered by a timeout timer."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs - AbortController",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/AbortController"
    }
  ],
  "relatedErrors": [
    "err-aborted",
    "etimedout",
    "econnreset",
    "econnrefused",
    "err-stream-premature-close"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Request Timeout",
      "User Cancellation",
      "Multiple Search Requests"
    ],
    "checklist": [
      "If cancellation is expected",
      "If requests are timing out",
      "If the AbortController fires too early",
      "If users frequently cancel operations"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Request Timeout",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "User Cancellation",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Multiple Search Requests",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Troubleshoot AbortError — Node.js Error Guide",
  "seoDescription": "Complete guide to fixing AbortError in Node.js. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention techniques."
};

export default errorData;
