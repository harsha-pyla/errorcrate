import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-ossl-evp-unsupported",
  "name": "ERR_OSSL_EVP_UNSUPPORTED",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Security Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "OpenSSL EVPs unsupported algorithms during cryptographic handshakes.",
  "meanDescription": "The ERR_OSSL_EVP_UNSUPPORTED error occurs on Node.js versions 17+ (which incorporate the newer OpenSSL 3.0 library). It triggers when applications or build tools (like older versions of Webpack/Angular) attempt to use deprecated, weak cryptographic algorithms (such as MD4 or MD5) which are disabled by default under OpenSSL 3.0 configurations.",
  "causes": [
    "Legacy Webpack MD4: Older bundlers using weak hashing routines to compile file fingerprints.",
    "Deprecated Hashing: Node scripts requesting deprecated cryptos (e.g. crypto.createHash('md4'))."
  ],
  "solutions": [
    "Upgrade Build Dependencies: Upgrade Webpack to version 5+ to resolve legacy MD4 dependency issues.",
    "Legacy SSL Flag: Run Node using the --openssl-legacy-provider environment flag.",
    "Pin Node Version: Stay on Node v16 if legacy compatibility is strictly mandatory."
  ],
  "example": {
    "title": "ERR_OSSL_EVP_UNSUPPORTED legacy flag",
    "code": "NODE_OPTIONS=--openssl-legacy-provider npm run dev",
    "language": "bash"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "node -e \"crypto.createHash('md4')\"",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: error:0308010C:digital envelope routines::unsupported\n    at new Hash (node:internal/crypto/hash:71:19) {\n  opensslErrorStack: [ 'error:03000086:digital envelope routines::initialization error' ],\n  library: 'digital envelope routines',\n  reason: 'unsupported',\n  code: 'ERR_OSSL_EVP_UNSUPPORTED'\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "package.json legacy scripts config",
      "language": "json",
      "description": "Setting up the legacy OpenSSL provider option inside project package scripts.",
      "code": "{\n  \"scripts\": {\n    \"build\": \"NODE_OPTIONS=--openssl-legacy-provider next build\"\n  }\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "PM2 Process Config",
      "language": "javascript",
      "description": "Adding the legacy OpenSSL option to ecosystem.config.js for PM2 deployments.",
      "code": "module.exports = {\n  apps: [{\n    name: 'server',\n    script: './index.js',\n    env: {\n      NODE_OPTIONS: '--openssl-legacy-provider'\n    }\n  }]\n};"
    }
  ],
  "commonMistakes": [
    "Using the --openssl-legacy-provider flag in production instead of upgrading dependencies to support secure OpenSSL 3.0 hashing."
  ],
  "prevention": [
    "Regularly audit and update node packages to stay compatible with TLS 1.3 and OpenSSL 3.0 rules."
  ],
  "faq": [
    {
      "question": "Why did my Webpack build start failing with ERR_OSSL_EVP_UNSUPPORTED?",
      "answer": "Webpack 4 uses MD4 hashes to generate asset fingerprints. Node.js 17+ upgraded to OpenSSL 3.0, which disables the weak, insecure MD4 algorithm by default."
    },
    {
      "question": "Is the --openssl-legacy-provider flag safe for production?",
      "answer": "It is a temporary workaround. For long-term security, it is highly recommended to upgrade your dependencies to versions that do not rely on deprecated hash functions."
    },
    {
      "question": "Which Node.js versions throw this error?",
      "answer": "Node.js version 17 and above, as they incorporate the newer OpenSSL 3.0 security layer."
    },
    {
      "question": "How do I set the legacy flag in Windows?",
      "answer": "In command prompt: `set NODE_OPTIONS=--openssl-legacy-provider`. In PowerShell: `$env:NODE_OPTIONS=\"--openssl-legacy-provider\"`."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js Crypto Docs",
      "url": "https://nodejs.org/api/crypto.html"
    }
  ],
  "relatedErrors": [
    "err-tls-cert-altname-invalid"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Legacy Webpack MD4",
      "Deprecated Hashing"
    ],
    "checklist": [
      "Upgrade Build Dependencies",
      "Legacy SSL Flag",
      "Pin Node Version"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Legacy Webpack MD4",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Deprecated Hashing",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "ERR_OSSL_EVP_UNSUPPORTED Error: Root Causes & Verified Fixes",
  "seoDescription": "Learn how to fix ERR_OSSL_EVP_UNSUPPORTED in Node.js. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
