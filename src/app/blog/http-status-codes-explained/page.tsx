import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../blog.module.css";

export const metadata: Metadata = {
  title: "HTTP Status Codes Explained (100–599) — Complete Reference Guide",
  description:
    "Demystify HTTP status codes from 100 to 599. Read our ultimate reference list detailing client errors (4xx), server errors (5xx), redirects (3xx), and fixes.",
  keywords: [
    "http status codes explained",
    "http error codes list",
    "fix 404 not found",
    "diagnose 500 internal server error",
    "web development debugging",
    "http response protocol",
    "301 vs 302 redirect",
    "401 vs 403 forbidden",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/blog/http-status-codes-explained",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "HTTP Status Codes Explained (100–599) — Complete Reference Guide",
    description: "Demystify HTTP status codes from 100 to 599. Read our ultimate reference list detailing client/server errors and redirects.",
    url: "https://www.errorcrate.com/blog/http-status-codes-explained",
    type: "article",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary_large_image",
    title: "HTTP Status Codes Explained (100–599)",
    description: "A complete guide to HTTP status codes, meanings, and fixes for client/server errors.",
  },
};

export default function HttpStatusCodesBlog() {
  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbActive}>HTTP Status Codes</span>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>Protocol Standards</span>
        <h1 className={styles.title}>HTTP Status Codes Explained (100–599): The Ultimate Reference Directory</h1>
        <div className={styles.metaRow}>
          <span className={styles.author}>By ErrorCrate Editorial</span>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span>Updated July 2026</span>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span>15 min read</span>
        </div>
      </header>

      {/* Illustration */}
      <div className={styles.illustrationContainer}>
        <Image
          src="/images/blog/http-status-codes.png"
          alt="HTTP Status Codes Illustration"
          width={800}
          height={400}
          priority
          className={styles.illustration}
        />
      </div>

      {/* Content */}
      <article className={styles.content}>
        <p>
          Every time you navigate to a website, submit a form, or load data from an API, your browser performs an HTTP request to a remote server. In return, the server responds with a three-digit integer known as an <strong>HTTP Status Code</strong>. Defined by the Internet Engineering Task Force (IETF) and RFC standards, these codes serve as a universal communication protocol, telling client systems whether a request succeeded, redirected, or failed due to an error.
        </p>
        <p>
          Understanding these codes is a fundamental skill for web developers, systems administrators, and DevOps engineers. In this comprehensive guide, we will break down the five classes of HTTP status codes and analyze the most common codes you will encounter.
        </p>

        <h2>The Five Classes of HTTP Status Codes</h2>
        <p>
          The first digit of the response code defines the general class of the response. The IETF divides HTTP status codes into five distinct ranges:
        </p>
        <ol>
          <li><strong>1xx (Informational):</strong> Request received, continuing process. These are transit status responses indicating the request is being processed.</li>
          <li><strong>2xx (Success):</strong> The action was successfully received, understood, and accepted by the server.</li>
          <li><strong>3xx (Redirection):</strong> Further action must be taken by the client to complete the request, such as navigating to a new URL.</li>
          <li><strong>4xx (Client Error):</strong> The request contains bad syntax or cannot be fulfilled, meaning the client committed an error.</li>
          <li><strong>5xx (Server Error):</strong> The server failed to fulfill an apparently valid request, meaning the backend encountered a failure.</li>
        </ol>

        <h2>1xx Informational Codes</h2>
        <p>
          Informational status codes indicate that the server has received the request headers and the client should proceed to send the request body (in the case of POST/PUT requests) or wait for a protocol switch.
        </p>
        <ul>
          <li><strong>100 Continue:</strong> The server has received the request headers and the client should proceed to send the request body.</li>
          <li><strong>101 Switching Protocols:</strong> The requester has asked the server to switch protocols (such as upgrading HTTP/1.1 to WebSockets), and the server has agreed to do so.</li>
        </ul>

        <h2>2xx Success Codes</h2>
        <p>
          Success codes indicate that the client's request was successfully received, understood, and executed by the backend.
        </p>
        <ul>
          <li><strong>200 OK:</strong> The standard response for successful HTTP requests. The actual response payload depends on the request method (GET, POST, etc.).</li>
          <li><strong>201 Created:</strong> The request has been fulfilled, resulting in the creation of a new resource (e.g., a new user database record).</li>
          <li><strong>202 Accepted:</strong> The request has been accepted for processing, but the processing has not been completed. This is commonly used in asynchronous backend task queues.</li>
          <li><strong>204 No Content:</strong> The server successfully processed the request, but is not returning any content (often returned after DELETE requests).</li>
        </ul>

        <h2>3xx Redirection Codes</h2>
        <p>
          Redirection codes notify the client that they must perform an additional action, typically by sending a request to a new URL specified in the <code>Location</code> response header.
        </p>
        <ul>
          <li><strong>301 Moved Permanently:</strong> This and all future requests should be directed to the given URI. This is highly important for SEO redirection pipelines.</li>
          <li><strong>302 Found (Temporary Redirect):</strong> The resource resides temporarily under a different URI. The client should continue using the original URI for future requests.</li>
          <li><strong>304 Not Modified:</strong> Indicates that the resource has not been modified since the version specified by the request headers <code>If-Modified-Since</code> or <code>If-None-Match</code>. The client can load the cached copy safely.</li>
          <li><strong>307 Temporary Redirect:</strong> Similar to a 302 redirect, but the client must reuse the original HTTP request method (e.g. POST) when querying the new URL.</li>
          <li><strong>308 Permanent Redirect:</strong> Similar to a 301 redirect, but the client must reuse the original HTTP request method when querying the new URL.</li>
        </ul>

        <h2>4xx Client Error Codes</h2>
        <p>
          Client errors indicate that something went wrong with the client's request. These are usually resolved by correcting URL syntax, authenticating requests, or verifying header formats.
        </p>

        <h3>400 Bad Request</h3>
        <p>
          The server cannot process the request due to something perceived as a client error, such as malformed request syntax, invalid query parameters, or bad header framing.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Need to fix a 400 Bad Request?</div>
          <p>Read our step-by-step resolution guide for resolving request syntax anomalies:</p>
          <Link href="/http-status/400-bad-request" className={styles.internalCalloutLink}>
            Fixing 400 Bad Request Guides →
          </Link>
        </div>

        <h3>401 Unauthorized</h3>
        <p>
          Similar to 403 Forbidden, but specifically for use when authentication is required and has failed or has not yet been provided. The user must provide valid credentials to access the resource.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Auth & Credential Validation Guides</div>
          <Link href="/http-status/401-unauthorized" className={styles.internalCalloutLink}>
            Fix 401 Unauthorized →
          </Link>
        </div>

        <h3>403 Forbidden</h3>
        <p>
          The request was valid, but the server is refusing action. The user might not have the necessary permissions for a resource, or the server is blocking client IPs or User-Agents (e.g. via Cloudflare WAF).
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Blocked by Permissions or Firewall?</div>
          <Link href="/http-status/403-forbidden" className={styles.internalCalloutLink}>
            Fix 403 Forbidden →
          </Link>
        </div>

        <h3>404 Not Found</h3>
        <p>
          The most famous status code on the web. It indicates that the server cannot locate the requested resource. This can happen due to a mistyped URL, a deleted asset, or incorrect routing.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>URL Routing or Resource Missing?</div>
          <Link href="/http-status/404-not-found" className={styles.internalCalloutLink}>
            Fix 404 Not Found →
          </Link>
        </div>

        <h3>405 Method Not Allowed</h3>
        <p>
          A request method is not supported for the requested resource (for example, attempting to perform a <code>POST</code> request on a static asset path that only supports <code>GET</code>).
        </p>

        <h3>408 Request Timeout</h3>
        <p>
          The server timed out waiting for the request. This occurs when the client takes too long to send the body payload or stream upload details.
        </p>

        <h3>429 Too Many Requests</h3>
        <p>
          The user has sent too many requests in a given amount of time. This is triggered by API rate-limiting rules protecting server capacity from brute-force queries or web scrapers.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Rate Limit Exceeded?</div>
          <Link href="/http-status/429-too-many-requests" className={styles.internalCalloutLink}>
            Fix 429 Too Many Requests →
          </Link>
        </div>

        <h2>5xx Server Error Codes</h2>
        <p>
          Server errors indicate that the server encountered an unexpected condition that prevented it from fulfilling the request. These are usually resolved by fixing backend application errors or server software configuration glitches.
        </p>

        <h3>500 Internal Server Error</h3>
        <p>
          A generic error message indicating that the server encountered an unexpected condition. This usually points to uncaught exceptions in server-side application scripts (Node/Python), database connection drops, or configuration issues.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Debugging a 500 Server Crash?</div>
          <p>Trace the backend logs and check out our verified diagnostic walkthroughs:</p>
          <Link href="/http-status/500-internal-server-error" className={styles.internalCalloutLink}>
            Fixing 500 Internal Server Error →
          </Link>
        </div>

        <h3>502 Bad Gateway</h3>
        <p>
          The server, while acting as a gateway or proxy, received an invalid response from the upstream server it accessed in attempting to fulfill the request. This commonly occurs when an Nginx proxy is running but the upstream Node/PM2 service is offline.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Nginx Gateway Failing?</div>
          <Link href="/http-status/502-bad-gateway" className={styles.internalCalloutLink}>
            Fixing 502 Bad Gateway →
          </Link>
        </div>

        <h3>503 Service Unavailable</h3>
        <p>
          The server is currently unable to handle the request. This is typically a temporary state caused by server overload, traffic spikes, backend resource exhaustion, or scheduled maintenance operations.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Server Down With 503?</div>
          <Link href="/http-status/503-service-unavailable" className={styles.internalCalloutLink}>
            Fixing 503 Service Unavailable →
          </Link>
        </div>

        <h3>504 Gateway Timeout</h3>
        <p>
          The server, while acting as a gateway or proxy, did not receive a timely response from the upstream server. This occurs when backend queries take too long to complete, forcing the gateway to close the connection.
        </p>
        <div className={styles.internalCallout}>
          <div className={styles.internalCalloutTitle}>Backend Timeout?</div>
          <Link href="/http-status/504-gateway-timeout" className={styles.internalCalloutLink}>
            Fixing 504 Gateway Timeout →
          </Link>
        </div>

        <h2>Summary Checklist for Debugging HTTP Errors</h2>
        <p>
          When diagnosing HTTP response anomalies in your web application, follow this standard engineering check flow:
        </p>
        <ol>
          <li>Check client request headers, content types, and query parameter formats.</li>
          <li>Look at server access logs to check the response code returned by the gateway (Nginx/Apache/CDN).</li>
          <li>Trace backend application logs (Node.js/Python/Go) if you encounter a 500 code to locate uncaught runtime exceptions.</li>
          <li>Ensure CORS (Cross-Origin Resource Sharing) headers are configured correctly on API requests.</li>
          <li>Verify cloud hosting infrastructure parameters, database connection limits, and memory usage.</li>
        </ol>
      </article>
    </div>
  );
}
