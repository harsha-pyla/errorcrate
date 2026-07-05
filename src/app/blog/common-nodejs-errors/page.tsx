import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../blog.module.css";

export const metadata: Metadata = {
  title: "50 Common Node.js Errors Every Developer Should Know",
  description:
    "Master Node.js debugging with this deep-dive guide. Read the ultimate catalog explaining 50 common Node system, network, module, JS, and async errors.",
  keywords: [
    "common nodejs errors list",
    "fix node econnreset",
    "node check address in use eaddrinuse",
    "uncaughtException diagnostics",
    "javascript backend debugging",
    "node runtime crash",
    "enoent file not found node",
    "module not found require esm",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/blog/common-nodejs-errors",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "50 Common Node.js Errors Every Developer Should Know",
    description: "Master Node.js debugging with this deep-dive guide to 50 runtime, networking, and module errors.",
    url: "https://www.errorcrate.com/blog/common-nodejs-errors",
    type: "article",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary_large_image",
    title: "50 Common Node.js Errors Every Developer Should Know",
    description: "Learn to trace, diagnose, and fix 50 common Node runtime errors and network glitches.",
  },
};

export default function CommonNodejsErrorsBlog() {
  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbActive}>Node.js Errors</span>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>Node.js Runtime</span>
        <h1 className={styles.title}>50 Common Node.js Errors Every Developer Should Know: The Complete Reference Catalog</h1>
        <div className={styles.metaRow}>
          <span className={styles.author}>By ErrorCrate Editorial</span>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span>Updated July 2026</span>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span>20 min read</span>
        </div>
      </header>

      {/* Illustration */}
      <div className={styles.illustrationContainer}>
        <Image
          src="/images/blog/common-nodejs-errors.png"
          alt="Node.js Errors Illustration"
          width={800}
          height={400}
          priority
          className={styles.illustration}
        />
      </div>

      {/* Content */}
      <article className={styles.content}>
        <p>
          Node.js is widely loved for its asynchronous, event-driven architecture, enabling developers to build highly scalable network applications. However, this same asynchronous paradigm, combined with Node's single-threaded nature, makes error handling and debugging unique challenges.
        </p>
        <p>
          When a Node.js process encounters an unhandled exception, it doesn't just fail silently—it exits, taking the entire server down with it. In this guide, we explore the most critical Node.js system and network errors, analyzing how to read stack traces, isolate root causes, and write defensive code to keep your processes alive.
        </p>

        <h2>Category 1: System & File System Errors (1–10)</h2>
        <p>
          These errors occur when the Node.js process interacts with the host operating system, local disk storage, or file system permissions.
        </p>
        <ol>
          <li>
            <strong>ENOENT (No Such File or Directory):</strong> Triggered when a file or folder operation is requested on a path that does not exist.
            <div className={styles.internalCallout}>
              <Link href="/nodejs/enoent" className={styles.internalCalloutLink}>Fixing ENOENT Guides →</Link>
            </div>
          </li>
          <li>
            <strong>EACCES (Permission Denied):</strong> Raised when attempting to access a file, directory, or socket without appropriate system permissions (e.g., trying to bind a server to port 80 without root access).
          </li>
          <li>
            <strong>EPERM (Operation Not Permitted):</strong> Occurs when an operation is blocked by the OS due to permissions or lock ownership (common when editing system files).
          </li>
          <li>
            <strong>EISDIR (Is a Directory):</strong> Raised when a file-only operation (like read or write) is attempted on a path that is actually a directory.
          </li>
          <li>
            <strong>ENOTDIR (Not a Directory):</strong> Occurs when a directory operation is attempted on a path that is actually a file.
          </li>
          <li>
            <strong>EEXIST (File Exists):</strong> Triggered when attempting to create a file or directory at a path where a resource already exists.
          </li>
          <li>
            <strong>EMFILE (Too Many Open Files):</strong> The operating system has run out of file descriptors for the Node process. Usually occurs when files or sockets are opened in loops without being closed.
          </li>
          <li>
            <strong>ENOSPC (No Space Left on Device):</strong> The disk is full, preventing any write operations.
          </li>
          <li>
            <strong>EROFS (Read-only File System):</strong> Occurs when attempting a write, delete, or modify operation on a read-only disk partition.
          </li>
          <li>
            <strong>ENOTEMPTY (Directory Not Empty):</strong> Triggered when trying to delete a folder using a non-recursive delete operation while files are still inside.
          </li>
        </ol>

        <h2>Category 2: Network & Socket Errors (11–20)</h2>
        <p>
          Network errors happen when Node services attempt to communicate with external APIs, databases, or local listening sockets.
        </p>
        <ol start={11}>
          <li>
            <strong>EADDRINUSE (Address Already in Use):</strong> Raised when attempting to bind an HTTP server to a local port that is already in use by another running process.
            <div className={styles.internalCallout}>
              <Link href="/nodejs/eaddrinuse" className={styles.internalCalloutLink}>Fixing EADDRINUSE Guides →</Link>
            </div>
          </li>
          <li>
            <strong>ECONNRESET (Connection Reset by Peer):</strong> The active socket connection was abruptly terminated by the remote gateway or host.
            <div className={styles.internalCallout}>
              <Link href="/nodejs/econnreset" className={styles.internalCalloutLink}>Fixing ECONNRESET Guides →</Link>
            </div>
          </li>
          <li>
            <strong>ECONNREFUSED (Connection Refused):</strong> The target server port rejected the connection, typically because the target database or server is offline.
          </li>
          <li>
            <strong>ETIMEDOUT (Connection Timeout):</strong> The outbound network request took too long to connect or respond, exceeding the socket timeout parameter.
          </li>
          <li>
            <strong>ENOTFOUND (DNS Lookup Failed):</strong> The host system cannot resolve the target domain name to an IP address (common when offline or when using incorrect API base URLs).
          </li>
          <li>
            <strong>EHOSTUNREACH (Host Unreachable):</strong> The host operating system cannot find a route to the target server IP address.
          </li>
          <li>
            <strong>EPIPE (Broken Pipe):</strong> Triggered when trying to write data to a socket or pipe that has already been closed by the receiver.
          </li>
          <li>
            <strong>EALREADY (Connection Already in Progress):</strong> A connection attempt is already active on the same socket.
          </li>
          <li>
            <strong>EISCONN (Socket is Connected):</strong> The socket is already connected, making another connection attempt invalid.
          </li>
          <li>
            <strong>ENOTCONN (Socket is Not Connected):</strong> Attempting to read or write data to a socket before a connection is established.
          </li>
        </ol>

        <h2>Category 3: Module & Dependency Resolution Errors (21–30)</h2>
        <p>
          These errors crop up during module loading, bundle compilation, package installation, or dependency linking.
        </p>
        <ol start={21}>
          <li>
            <strong>MODULE_NOT_FOUND:</strong> CommonJS <code>require()</code> fails to resolve the path or package name specified.
            <div className={styles.internalCallout}>
              <Link href="/nodejs/module_not_found" className={styles.internalCalloutLink}>Fixing MODULE_NOT_FOUND Guides →</Link>
            </div>
          </li>
          <li>
            <strong>ERR_MODULE_NOT_FOUND:</strong> ES Module <code>import</code> fails to resolve a file, usually because the relative path lacks the file extension (e.g. <code>.js</code>).
          </li>
          <li>
            <strong>ERR_REQUIRE_ESM:</strong> Triggered when using CommonJS <code>require()</code> to load a package compiled as an ES Module.
            <div className={styles.internalCallout}>
              <Link href="/nodejs/err-require-esm" className={styles.internalCalloutLink}>Fixing ERR_REQUIRE_ESM Guides →</Link>
            </div>
          </li>
          <li>
            <strong>ERR_UNKNOWN_FILE_EXTENSION:</strong> Node.js encountered a file extension it cannot compile or parse as JavaScript.
          </li>
          <li>
            <strong>ERR_INVALID_PACKAGE_TARGET:</strong> The package.json <code>exports</code> mapping configuration resolves to an invalid target directory.
          </li>
          <li>
            <strong>ERR_INVALID_MODULE_SPECIFIER:</strong> The import path string contains invalid syntax or characters.
          </li>
          <li>
            <strong>ERR_PACKAGE_IMPORT_NOT_DEFINED:</strong> Attempted to import a private subpath helper that is not declared in the package.json imports map.
          </li>
          <li>
            <strong>ERR_PACKAGE_PATH_NOT_EXPORTED:</strong> A subpath within a dependency is private and cannot be loaded because it is not exposed in the library's exports configuration.
          </li>
          <li>
            <strong>ERR_AMBIGUOUS_EXPORT:</strong> A module has conflicting ES Module named exports, making resolution ambiguous.
          </li>
          <li>
            <strong>ERR_MISSING_MODULE:</strong> A native C++ binary module package (like bcrypt) is missing compilation files for the host architecture.
          </li>
        </ol>

        <h2>Category 4: V8 Engine & JavaScript runtime exceptions (31–40)</h2>
        <p>
          Exceptions thrown directly by the V8 JavaScript engine during execution due to syntax violations or runtime constraints.
        </p>
        <ol start={31}>
          <li>
            <strong>TypeError:</strong> An operation is performed on an incompatible data type (e.g. calling a property that is <code>undefined</code>).
          </li>
          <li>
            <strong>ReferenceError:</strong> Raised when attempting to reference a variable or function that has not been declared.
          </li>
          <li>
            <strong>RangeError:</strong> An argument or variable value falls outside its permitted numeric range (e.g. configuring invalid array lengths or triggers).
          </li>
          <li>
            <strong>SyntaxError:</strong> The JS code fails the initial compile-time parsing phase (e.g. missing brackets or commas).
          </li>
          <li>
            <strong>URIError:</strong> Encoutered when passing invalid URI characters to global functions like <code>decodeURI()</code>.
          </li>
          <li>
            <strong>ERR_ASSERTION:</strong> Raised by the Node assert module when a test check evaluates to false.
          </li>
          <li>
            <strong>ERR_INVALID_ARG_TYPE:</strong> An API parameter is passed with an incorrect JavaScript type.
          </li>
          <li>
            <strong>ERR_OUT_OF_RANGE:</strong> A numeric value exceeds the range limits of a configuration parameter.
          </li>
          <li>
            <strong>ERR_BUFFER_OUT_OF_BOUNDS:</strong> Attempted to read or write binary values outside the boundaries of a allocated Buffer.
          </li>
          <li>
            <strong>JavaScript Heap Out of Memory:</strong> The V8 engine has reached its maximum memory allocation heap size limit, causing the process to crash.
          </li>
        </ol>

        <h2>Category 5: Asynchronous Flow & Stream Errors (41–50)</h2>
        <p>
          Errors related to async callbacks, promise rejections, streaming pipelines, and HTTP transaction lifecycle events.
        </p>
        <ol start={41}>
          <li>
            <strong>UnhandledPromiseRejection:</strong> A promise is rejected but has no catch handler, leading to runtime exit.
            <div className={styles.internalCallout}>
              <Link href="/nodejs/unhandledpromiserejectionwarning" className={styles.internalCalloutLink}>Fixing UnhandledPromiseRejection Guides →</Link>
            </div>
          </li>
          <li>
            <strong>ERR_UNHANDLED_ERROR:</strong> An EventEmitter instance emits an <code>'error'</code> event but has no listener registers configured.
          </li>
          <li>
            <strong>ERR_STREAM_PREMATURE_CLOSE:</strong> A stream pipe operation terminated abruptly before all binary packets were fully flushed.
          </li>
          <li>
            <strong>ERR_STREAM_WRITE_AFTER_END:</strong> Attempted to write buffer chunks to a stream that has already ended or closed.
          </li>
          <li>
            <strong>ERR_STREAM_DESTROYED:</strong> Attempted to interact with a stream after it was destroyed by an error event.
          </li>
          <li>
            <strong>ERR_HTTP_HEADERS_SENT:</strong> Triggered when a controller attempts to set HTTP response headers or status codes after sending body payloads to the client.
          </li>
          <li>
            <strong>ERR_HTTP_INVALID_STATUS_CODE:</strong> Setting a response status code integer outside the valid range of 100 to 999.
          </li>
          <li>
            <strong>ERR_HTTP2_INVALID_STREAM:</strong> Encountered a protocol violation in an active HTTP/2 socket connection stream.
          </li>
          <li>
            <strong>ERR_CHILD_PROCESS_IPC_DISCONNECTED:</strong> The IPC communication channel between parent and child cluster processes was closed.
          </li>
          <li>
            <strong>ERR_WORKER_OUT_OF_MEMORY:</strong> A multi-threaded worker thread exceeded its local heap memory limits, forcing termination.
          </li>
        </ol>

        <h2>Summary Checklist for Resilient Node.js Coding</h2>
        <p>
          To protect your applications from crashes across all 50 error vectors, practice these core coding paradigms:
        </p>
        <ul>
          <li>Always wrap asynchronous function calls in robust try/catch blocks.</li>
          <li>Listen to process-wide signals (<code>uncaughtException</code> and <code>unhandledRejection</code>) to log crash contexts.</li>
          <li>Use stream helpers like <code>pipeline()</code> instead of raw <code>.pipe()</code> to catch stream closures safely.</li>
          <li>Monitor memory heaps using APM tools to catch memory leaks before the process hits OOM limits.</li>
        </ul>
      </article>
    </div>
  );
}
