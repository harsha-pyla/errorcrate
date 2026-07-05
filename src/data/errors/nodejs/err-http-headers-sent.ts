import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-http-headers-sent",
  "name": "ERR_HTTP_HEADERS_SENT",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "HTTP Server Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "Cannot set headers after they are sent to the client.",
  "meanDescription": "The ERR_HTTP_HEADERS_SENT error is thrown when your server code attempts to send headers or set status codes on a response object after it has already initiated transmission or fully completed the request.",
  "causes": [
    "Multiple res.send(): Issuing multiple res.send() or res.json() actions within a single route execution stream.",
    "Failing to Return: Leaving out the return keyword on validation checks, allowing execution flow to hit downstream response statements.",
    "Response Timing: Calling redirect or status changes inside asynchronous callbacks after the response was already dispatched."
  ],
  "solutions": [
    "Use return Statements: Always return response functions immediately to end route flow.",
    "Audit Middleware Chains: Verify that your middleware does not call res.send() and next() simultaneously.",
    "Validate Execution Logic: Ensure only one conditional branch triggers a response."
  ],
  "example": {
    "title": "ERR_HTTP_HEADERS_SENT Double Response",
    "code": "app.get('/api', (req, res) => {\n  if (!req.query.user) {\n    res.status(400).send('No user');\n    // Missing return here allows code to continue below!\n  }\n  res.send('Welcome User'); // Throws ERR_HTTP_HEADERS_SENT\n});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Querying Route",
    "code": "GET /api HTTP/1.1\nHost: localhost:3000",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client\n    at new NodeError (node:internal/errors:371:5)\n    at ServerResponse.setHeader (node:_http_outgoing:576:11)\n    at ServerResponse.send (c:\\project\\node_modules\\express\\lib\\response.js:174:12)",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Safe Returns",
      "language": "javascript",
      "description": "Utilizing defensive coding returns to prevent double response flushes.",
      "code": "app.get('/user/:id', (req, res) => {\n  if (req.params.id === 'admin') {\n    return res.status(403).json({ error: 'Unauthorized access.' });\n  }\n  return res.json({ id: req.params.id, name: 'Guest' });\n});"
    }
  ],
  "serverExamples": [
    {
      "name": "Proxy Gateway Responses",
      "language": "nginx",
      "description": "Nginx proxy servers are not affected by this application-level header exception.",
      "code": "# Handled entirely by Node app routers"
    }
  ],
  "commonMistakes": [
    "Forgetting return keywords on early abort validations.",
    "Attempting redirects inside async callback timeouts after the main route handler has finished."
  ],
  "prevention": [
    "Use lint rules to check path branches.",
    "Consistently return all response method calls (e.g. `return res.json(...)`)."
  ],
  "faq": [
    {
      "question": "What triggers ERR_HTTP_HEADERS_SENT?",
      "answer": "It is triggered when code tries to modify HTTP headers or status code values after Node has already started transmitting the body payload packets to the browser."
    },
    {
      "question": "Does res.send() stop code execution?",
      "answer": "No! `res.send()` is a normal function call. It prepares and flushes headers and body, but the rest of your JavaScript function continues executing. You must use `return` to stop execution."
    },
    {
      "question": "How do I fix ERR_HTTP_HEADERS_SENT inside async loops?",
      "answer": "Ensure you do not call `res.send()` inside a `.forEach()` or `.map()` loop. Use database aggregations or compile results into an array first, then send one response."
    },
    {
      "question": "Can middleware trigger this error?",
      "answer": "Yes. If a middleware sends a response (e.g. auth check failing) but calls `next()` anyway, the downstream route handler will try to send a second response, triggering the error."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js HTTP ServerResponse Docs",
      "url": "https://nodejs.org/api/http.html#class-httpserverresponse"
    }
  ],
  "relatedErrors": [
    "err-invalid-arg-type"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Multiple res.send()",
      "Failing to Return",
      "Response Timing"
    ],
    "checklist": [
      "Use return Statements",
      "Audit Middleware Chains",
      "Validate Execution Logic"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Multiple res.send()",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Failing to Return",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Response Timing",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "ERR_HTTP_HEADERS_SENT Explained: Causes, Fixes & Prevention",
  "seoDescription": "Complete guide to fixing ERR_HTTP_HEADERS_SENT in Node.js. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
