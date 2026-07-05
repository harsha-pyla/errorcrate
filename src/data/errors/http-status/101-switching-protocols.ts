import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "101-switching-protocols",
  "name": "101 Switching Protocols",
  "category": "http-status",
  "badges": [
    "HTTP Status Codes",
    "Informational (1xx)",
    "rarer"
  ],
  "updatedAt": "today",
  "shortDescription": "The server understands and is willing to comply with the client's request to switch protocols.",
  "meanDescription": "The HTTP 101 Switching Protocols status code indicates that the server understands the client's Upgrade request headers and agrees to switch to the protocol requested, such as upgrading HTTP/1.1 to WebSockets.",
  "causes": [
    "Client requests WebSockets handshakes using Connection: Upgrade and Upgrade: websocket headers.",
    "HTTP/1.1 cleartext connection upgraded to HTTP/2."
  ],
  "solutions": [
    "Verify WebSocket proxy settings are correctly forwarding Connection and Upgrade headers.",
    "Check browser capabilities to ensure WebSockets protocol support."
  ],
  "example": {
    "title": "Upgrade Request",
    "code": "GET /chat HTTP/1.1\nHost: example.com\nUpgrade: websocket\nConnection: Upgrade",
    "language": "http"
  },
  "exampleRequest": {
    "title": "Upgrade Request",
    "code": "GET /chat HTTP/1.1\nHost: example.com\nUpgrade: websocket\nConnection: Upgrade",
    "language": "http"
  },
  "exampleResponse": {
    "title": "Switching Response",
    "code": "HTTP/1.1 101 Switching Protocols\nUpgrade: websocket\nConnection: Upgrade\n\n(Socket connection is established. Protocol changes to websocket)",
    "language": "http"
  },
  "frameworkExamples": [
    {
      "name": "Express",
      "language": "javascript",
      "description": "Upgrading connection to WebSocket using 'ws' package inside Express.",
      "code": "const WebSocket = require('ws');\nconst wss = new WebSocket.Server({ noServer: true });"
    },
    {
      "name": "Next.js",
      "language": "typescript",
      "description": "Setting up real-time upgrades inside custom server Next.js configurations.",
      "code": "import { Server } from 'ws';\nconst wss = new Server({ noServer: true });"
    },
    {
      "name": "Django",
      "language": "python",
      "description": "Handling channel protocol upgrades using Django Channels router.",
      "code": "from channels.routing import ProtocolTypeRouter\napplication = ProtocolTypeRouter({'websocket': None})"
    },
    {
      "name": "Spring Boot",
      "language": "java",
      "description": "Configuring WebSocket endpoint registry in Java Spring Boot applications.",
      "code": "@Configuration\n@EnableWebSocket\npublic class WebSocketConfig implements WebSocketConfigurer {\n    public void registerWebSocketHandlers(WebSocketHandlerRegistry r) {}\n}"
    }
  ],
  "serverExamples": [
    {
      "name": "Nginx",
      "language": "nginx",
      "description": "Configuring proxy pass-through to support Upgrade handshakes.",
      "code": "proxy_set_header Upgrade $http_upgrade;\nproxy_set_header Connection \"Upgrade\";"
    },
    {
      "name": "Apache",
      "language": "apache",
      "description": "Enabling wstunnel modules to forward WebSockets.",
      "code": "ProxyPass \"/chat\" \"ws://localhost:8080/chat\""
    }
  ],
  "commonMistakes": [
    "Configuring reverse proxies without Upgrade headers, resulting in failed handshakes.",
    "Mismatch in subprotocol arguments between client and server."
  ],
  "prevention": [
    "Always set proxy headers dynamically for HTTP upgrades.",
    "Verify SSL terminations correctly support wss:// protocol schemas."
  ],
  "faq": [
    {
      "question": "Can I upgrade HTTP/2 using 101?",
      "answer": "No. In HTTP/2, client upgrades are negotiated during ALPN handshakes over TLS, making the 101 status code obsolete for HTTP/2."
    },
    {
      "question": "What is the primary trigger of a 101 response?",
      "answer": "It is triggered by WebSocket client connections carrying 'Upgrade: websocket' and 'Connection: Upgrade' headers."
    },
    {
      "question": "Why does my proxy return 502 Bad Gateway instead of 101?",
      "answer": "The reverse proxy (like Nginx) is likely not configured to forward the 'Upgrade' and 'Connection' headers back to the application server."
    },
    {
      "question": "Can standard AJAX fetch handle a 101 response?",
      "answer": "No, standard AJAX fetch requests will fail or hang. The connection must be negotiated using WebSocket or SSE APIs directly."
    }
  ],
  "helpfulResources": [
    {
      "name": "MDN Web Docs",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101"
    },
    {
      "name": "RFC 7231 – Section 6.2.2",
      "url": "https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2"
    }
  ],
  "relatedErrors": [
    "100-continue",
    "102-processing"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Client requests WebSockets handshakes using Connection",
      "HTTP/1.1 cleartext connection upgraded to"
    ],
    "checklist": [
      "Verify WebSocket proxy settings are",
      "Check browser capabilities to ensure"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Client requests WebSockets handshakes using Connection",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "HTTP/1.1 cleartext connection upgraded to",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "101 Switching Protocols: Complete HTTP Troubleshooting Guide",
  "seoDescription": "Learn how to fix 101 Switching Protocols in HTTP. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
