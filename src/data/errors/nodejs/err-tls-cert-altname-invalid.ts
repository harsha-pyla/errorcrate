import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-tls-cert-altname-invalid",
  "name": "ERR_TLS_CERT_ALTNAME_INVALID",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Security Error",
    "Rarer"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The server's certificate SAN names do not match the requested hostname.",
  "meanDescription": "The ERR_TLS_CERT_ALTNAME_INVALID error is thrown by Node.js HTTPS client modules when the host requested in your query does not match any of the DNS domain names or IP addresses defined inside the Subject Alternative Name (SAN) fields of the remote server's SSL/TLS certificate.",
  "causes": [
    "IP Query Mismatches: Requesting IP addresses directly when the SSL cert is only valid for names.",
    "Subdomain Mismatches: Querying subdomains that are not mapped inside wildcard cert configs.",
    "Mismatched domain targets: Connecting to hostnames that host incorrect cert bindings."
  ],
  "solutions": [
    "Correct Server SANs: Configure certificates to cover all subdomains and IP addresses.",
    "Temporary Dev Bypass: Set rejectUnauthorized: false in request options during local tests.",
    "Configure hosts Mappings: Query the domain name directly by resolving the hostname locally in hosts files."
  ],
  "example": {
    "title": "Bypassing TLS Mismatch",
    "code": "const https = require('https');\n\n// Force client to accept mismatching local IP certificates for testing\nconst agent = new https.Agent({ rejectUnauthorized: false });\nhttps.get('https://192.168.1.99', { agent }, (res) => {});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Triggering Client Query",
    "code": "const https = require('https');\nhttps.get('https://wrong.host.com');",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error [ERR_TLS_CERT_ALTNAME_INVALID]: Hostname/IP does not match certificate's altnames: Host: wrong.host.com. is not in the cert's altnames: DNS:realdomain.com\n  code: 'ERR_TLS_CERT_ALTNAME_INVALID'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Development TLS Bypass",
      "language": "javascript",
      "description": "Globally disabling TLS checking for local staging setups (Caution: Never use in production).",
      "code": "if (process.env.NODE_ENV === 'development') {\n  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx SSL Server Name Matching",
      "language": "nginx",
      "description": "Aligning server domain naming configs inside Nginx SSL blocks.",
      "code": "server {\n    listen 443 ssl;\n    server_name realdomain.com;\n    ssl_certificate /path/to/cert.pem;\n}"
    }
  ],
  "commonMistakes": [
    "Disabling TLS certification validation (rejectUnauthorized: false) in production environments (opens the system to MITM credentials hijacking)."
  ],
  "prevention": [
    "Acquire valid wildcard SSL certificates (via Let's Encrypt) to cover all subdomains."
  ],
  "faq": [
    {
      "question": "What triggers a altname invalid error?",
      "answer": "It happens when the host requested in the URL does not match any of the DNS names or IP addresses listed in the Subject Alternative Name (SAN) section of the server's certificate."
    },
    {
      "question": "What is process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'?",
      "answer": "It is an environment flag that tells Node.js to ignore all TLS certificate validation checks. It is highly insecure and should never be used in production."
    },
    {
      "question": "Does Let's Encrypt prevent this error?",
      "answer": "Yes. Let's Encrypt issues valid certificates that match your public domain name, preventing altname mismatch errors."
    },
    {
      "question": "Can I bind a certificate to an IP address directly?",
      "answer": "Yes. You must generate a certificate that lists the IP address inside the Subject Alternative Name (SAN) fields explicitly."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js TLS/HTTPS Docs",
      "url": "https://nodejs.org/api/tls.html"
    }
  ],
  "relatedErrors": [
    "err-ossl-evp-unsupported"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "IP Query Mismatches",
      "Subdomain Mismatches",
      "Mismatched domain targets"
    ],
    "checklist": [
      "Correct Server SANs",
      "Temporary Dev Bypass",
      "Configure hosts Mappings"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "IP Query Mismatches",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Subdomain Mismatches",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Mismatched domain targets",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Debug ERR_TLS_CERT_ALTNAME_INVALID in Node.js —.",
  "seoDescription": "Fix ERR_TLS_CERT_ALTNAME_INVALID fast. This Node.js debugging guide explains the root cause, shows common mistakes, and provides tested solutions with."
};

export default errorData;
