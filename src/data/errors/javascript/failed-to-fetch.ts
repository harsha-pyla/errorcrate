import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failed-to-fetch",
  "name": "Failed to fetch",
  "category": "javascript",
  "badges": [
    "JavaScript Error",
    "TypeError",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The browser failed to execute a fetch network request.",
  "meanDescription": "This TypeError is thrown by the browser's Fetch API when a network request fails to start or complete due to network outages, domain resolution failures, SSL configuration mismatches, or CORS blocks.",
  "causes": [
    "The client has lost internet connectivity.",
    "The target server is offline or returned an invalid SSL/TLS certificate.",
    "CORS policy blocks access to the external domain.",
    "The destination URL has spelling typos."
  ],
  "solutions": [
    "Check client connection state before starting queries.",
    "Verify server online status and check domain certificates.",
    "Configure appropriate CORS headers on the destination server.",
    "Always wrap fetch calls in try-catch blocks."
  ],
  "example": {
    "title": "TypeError Failed to Fetch",
    "code": "fetch('https://offline-local-server.xyz/data')\n  .catch(err => {\n    // Catches: TypeError: Failed to fetch\n    console.error(err.message);\n  });",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Snippet",
    "code": "fetch('https://offline-local-server.xyz/data');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "TypeError: Failed to fetch\n    at <anonymous>:1:1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Catching Fetch Failures",
      "language": "javascript",
      "description": "Standard catch block monitoring network outages.",
      "code": "async function loadData() {\n  try {\n    const res = await fetch('https://api.com/users');\n    const users = await res.json();\n  } catch (err) {\n    console.log('Network lookup failed.');\n  }\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Node.js fetch equivalent",
      "language": "javascript",
      "description": "Node.js standard fetch behavior.",
      "code": "# Handled at client engine"
    }
  ],
  "commonMistakes": [
    "Assuming fetch rejects promises on HTTP 404 or 500 status codes (fetch only rejects on physical network failures; status codes must be checked via response.ok)."
  ],
  "prevention": [
    "Check `navigator.onLine` before executing heavy fetches.",
    "Implement client-side fallback offline modes."
  ],
  "faq": [
    {
      "question": "Why does fetch throw 'Failed to fetch' instead of an HTTP error code?",
      "answer": "The Fetch API promise resolves successfully even if the server returns error statuses (like 404 or 500). It only rejects (throwing 'Failed to fetch') if the request cannot be completed due to DNS, network, CORS, or SSL failures."
    },
    {
      "question": "How do I check for internet connection?",
      "answer": "You can check the browser's connectivity flag `navigator.onLine` or monitor events using `window.addEventListener('offline', ...)`."
    },
    {
      "question": "Can CORS cause 'Failed to fetch'?",
      "answer": "Yes. If the destination server does not return the correct CORS headers, the browser blocks the response at the network layer, which is reported to the script as a generic 'Failed to fetch'TypeError."
    },
    {
      "question": "How do I debug SSL issues in fetch?",
      "answer": "Inspect the browser's console or developer Network tab. It will specify if the request failed due to untrusted certificates or expired handshakes."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Fetch API Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"
    }
  ],
  "relatedErrors": [
    "blocked-by-cors-policy"
  ],
  "quickFix": {
    "causes": [
      "Server is offline",
      "CORS header is missing",
      "No internet connectivity"
    ],
    "checklist": [
      "Verify destination server is active",
      "Check browser console for CORS blocks",
      "Check network connection tab",
      "Wrap fetch in catch blocks"
    ],
    "estimatedTime": "3–12 minutes"
  },
  "commonOccurrence": [
    {
      "scenario": "Target server offline",
      "frequency": "40%"
    },
    {
      "scenario": "CORS configuration blocks",
      "frequency": "35%"
    },
    {
      "scenario": "Internet connection drop",
      "frequency": "15%"
    },
    {
      "scenario": "SSL/TLS cert mismatch",
      "frequency": "10%"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot Failed to fetch — JavaScript Error Guide",
  "seoDescription": "Fix Failed to fetch fast. This JavaScript debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
