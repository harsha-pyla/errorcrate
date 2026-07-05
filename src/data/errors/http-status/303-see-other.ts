import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "303-see-other",
  "name": "303 See Other",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Redirection (3xx)",
    "common"
  ],
  "updatedAt": "today",
  "shortDescription": "The server redirects the client to get the requested resource at another URI with a GET request.",
  "meanDescription": "The HTTP 303 See Other redirection status code indicates that the redirects do not link to the requested resource itself, but to another page (such as a confirmation page or upload progress bar). This status code is commonly returned after a POST form submission.",
  "causes": [
    "Post-Redirect-Get patterns preventing form double-submissions.",
    "File upload managers sending clients to progress monitor pages."
  ],
  "solutions": [
    "Include the target GET resource URL in the Location header.",
    "Ensure client fetches the new resource using GET."
  ],
  "example": {
    "title": "Post Redirect Get Response",
    "code": "HTTP/1.1 303 See Other\nLocation: /success-page\nContent-Length: 0",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Form POST Submission",
    "code": "POST /submit-form HTTP/1.1\nHost: example.com\nContent-Type: application/x-www-form-urlencoded\n\nname=Bob",
    "language": "http"
  },
  "exampleResponse": {
    "title": "See Other Redirect",
    "code": "HTTP/1.1 303 See Other\nLocation: /receipt\nContent-Length: 0",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Redirecting form submissions using 303 status in Express.",
      "code": "app.post('/register', (req, res) => {\n  // save user...\n  res.redirect(303, '/welcome');\n});"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Next.js redirect inside Server Actions.",
      "code": "import { redirect } from 'next/navigation';\nexport async function submitForm() {\n  // Redirect will perform a 303 equivalent redirect\n  redirect('/success');\n}"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Django redirection after form validation.",
      "code": "from django.shortcuts import redirect\ndef my_post_view(request):\n    # Django redirect defaults to 302 but acts as 303\n    return redirect('/success')"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Returning 303 See Other in Spring REST controller.",
      "code": "@PostMapping(\"/payment\")\npublic ResponseEntity<Void> process() {\n    return ResponseEntity.status(HttpStatus.SEE_OTHER).header(\"Location\", \"/receipt\").build();\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Forcing upstream redirects to return 303 status.",
      "code": "# Nginx forwards 303 status transparently"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Apache rewrite rules set to seeother.",
      "code": "RewriteRule ^/old-path$ /new-path [R=303,L]"
    }
  ],
  "commonMistakes": [
    "Using 302 instead of 303 inside REST APIs (which might cause clients to re-issue POST requests to the redirection endpoint).",
    "Omitting the Location header in the 303 response."
  ],
  "prevention": [
    "Enforce Post-Redirect-Get (PRG) patterns for all state-changing operations.",
    "Check API specs checking redirect response method conversions."
  ],
  "faq": [
    {
      "question": "What is the Post-Redirect-Get (PRG) pattern?",
      "answer": "PRG is a web development design pattern that prevents duplicate form submissions. Instead of returning a success page directly in the POST response, the server redirects the client to a GET success page."
    },
    {
      "question": "Is HTTP 303 cached?",
      "answer": "No. A 303 response is never cached, as it always refers to the temporary result of a stateful request transaction."
    },
    {
      "question": "Does the client browser change the request method to GET during 303?",
      "answer": "Yes. The HTTP specification explicitly states that a client must follow a 303 redirect using a GET request, regardless of the original request method."
    },
    {
      "question": "When should I use 303 instead of 307?",
      "answer": "Use 303 when you *want* the client to switch to GET. Use 307 when the client must reuse the original method (e.g. resending a POST payload)."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303"
    },
    {
      "name": "RFC 7231 – Section 6.4.4",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4"
    }
  ],
  "relatedErrors": [
    "302-found",
    "307-temporary-redirect"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Post-Redirect-Get patterns preventing form double-submissions.",
      "File upload managers sending clients"
    ],
    "checklist": [
      "Include the target GET resource",
      "Ensure client fetches the new"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Post-Redirect-Get patterns preventing form double-submissions.",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "File upload managers sending clients",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "How to Fix 303 See Other in HTTP (With Examples)",
  "seoDescription": "Learn how to fix 303 See Other in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
