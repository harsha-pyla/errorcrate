import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "eaddrinuse",
  "name": "EADDRINUSE",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Network Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The network port or address is already in use by another process.",
  "meanDescription": "EADDRINUSE stands for 'Error: Address Already in Use'. It is thrown when Node.js attempts to bind a server or listener socket to a network port or IP address that is already active and occupied by another process on your operating system.",
  "causes": [
    "Background App Hanging: An older instance of your server failed to close properly and is still holding the port in the background.",
    "Duplicate Dev Tool Servers: Another dev server (e.g. React/Vite/Docker) is already listening on the requested port.",
    "TIME_WAIT Port Locking: The operating system has temporarily locked the port during socket recycling (TIME_WAIT)."
  ],
  "solutions": [
    "Terminate Port Process: Identify and kill the process holding the port using command-line tools.",
    "Assign Dynamic Ports: Utilize environment variable ports (like process.env.PORT) to prevent static collisions.",
    "Handle Port Fallbacks: Detect EADDRINUSE on startup and bind the server to a different port."
  ],
  "example": {
    "title": "EADDRINUSE Port Collisions",
    "code": "const express = require('express');\nconst app = express();\n\n// Running this file twice triggers EADDRINUSE on the second instance\napp.listen(3000).on('error', (err) => {\n  if (err.code === 'EADDRINUSE') {\n    console.error('Port 3000 is already in use. Please close the active process.');\n  }\n});",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Duplicate Port Binding",
    "code": "const http = require('http');\nconst server = http.createServer();\nserver.listen(3000);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "Error: listen EADDRINUSE: address already in use :::3000\n    at Server.setupListenHandle [as _listen2] (node:net:1330:16)\n    at listenInCluster (node:net:1378:12) {\n  code: 'EADDRINUSE',\n  errno: -4091,\n  syscall: 'listen',\n  address: '::',\n  port: 3000\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Express Port Increment Fallback",
      "language": "javascript",
      "description": "Checking for EADDRINUSE errors in Express and automatically falling back to an alternative port.",
      "code": "const startServer = (port) => {\n  const server = app.listen(port, () => {\n    console.log(`Server successfully started on port ${port}`);\n  });\n\n  server.on('error', (err) => {\n    if (err.code === 'EADDRINUSE') {\n      console.log(`Port ${port} is occupied. Trying port ${port + 1}...`);\n      startServer(port + 1);\n    }\n  });\n};"
    }
  ],
  "serverExamples": [
    {
      "name": "Apache Listen Directives",
      "language": "apache",
      "description": "Configuring Apache to listen on alternative ports.",
      "code": "Listen 8080"
    }
  ],
  "commonMistakes": [
    "Failing to close VS Code terminals or PM2 background instances before starting node processes again.",
    "Binding Docker container ports to host ports that are already occupied by host database services."
  ],
  "prevention": [
    "Use variable PORT bindings derived from process.env.PORT configurations.",
    "Check active ports using automated build check scripts."
  ],
  "faq": [
    {
      "question": "How do I find out which process is using a port on Windows?",
      "answer": "Open PowerShell and run `netstat -ano | findstr :3000` to find the process ID (PID), then kill it using `taskkill /PID <PID> /F`."
    },
    {
      "question": "How do I find and kill a port process on Linux/macOS?",
      "answer": "Run `lsof -i :3000` to find the process ID (PID), then terminate it using `kill -9 <PID>`."
    },
    {
      "question": "What is the TIME_WAIT socket state?",
      "answer": "When a server terminates, the operating system keeps the port reserved for a brief duration (typically 30-120 seconds) to ensure delayed packets are received. This can trigger temporary EADDRINUSE errors."
    },
    {
      "question": "Can I bind multiple applications to the same port?",
      "answer": "No. Only one application process can listen for incoming connections on a specific port at any given time."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js net Server Docs",
      "url": "https://nodejs.org/api/net.html#class-netserver"
    }
  ],
  "relatedErrors": [
    "eacces"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Background App Hanging",
      "Duplicate Dev Tool Servers",
      "TIME_WAIT Port Locking"
    ],
    "checklist": [
      "Terminate Port Process",
      "Assign Dynamic Ports",
      "Handle Port Fallbacks"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Background App Hanging",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Duplicate Dev Tool Servers",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "TIME_WAIT Port Locking",
      "frequency": "⭐⭐⭐"
    }
  ],
  "seoTitle": "Fix EADDRINUSE Fast — Node.js Solutions Guide",
  "seoDescription": "EADDRINUSE in Node.js — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
