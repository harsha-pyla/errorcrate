import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "err-buffer-out-of-bounds",
  "name": "ERR_BUFFER_OUT_OF_BOUNDS",
  "category": "nodejs",
  "badges": [
    "Node.js Error",
    "Core modules",
    "Rarer"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "Attempted to access bytes outside the bounds of a Buffer.",
  "meanDescription": "The ERR_BUFFER_OUT_OF_BOUNDS error is thrown by Node.js Buffer APIs when an operation attempts to read or write bytes at an offset index that is outside the allocated memory size of the target Buffer.",
  "causes": [
    "Offset Overflow: Accessing index values larger than the Buffer's length.",
    "Overwriting Buffer Bounds: Writing bytes that exceed static buffer slices allocations."
  ],
  "solutions": [
    "Check Buffer Lengths: Always verify index offset bounds before reading/writing.",
    "Use Dynamic Concat: Join multiple buffers instead of overloading static sizes."
  ],
  "example": {
    "title": "ERR_BUFFER_OUT_OF_BOUNDS Buffer Overflow",
    "code": "const buf = Buffer.alloc(8);\n\n// Throws ERR_BUFFER_OUT_OF_BOUNDS because index 10 exceeds buffer size\nbuf.readInt32BE(10);",
    "language": "javascript"
  },
  "exampleRequest": {
    "title": "Invalid Buffer Read",
    "code": "const buf = Buffer.alloc(10);\n// Throws ERR_BUFFER_OUT_OF_BOUNDS because index 11 is out of boundaries\nbuf.readInt32BE(11);",
    "language": "javascript"
  },
  "exampleResponse": {
    "title": "Terminal Stacktrace",
    "code": "RangeError [ERR_BUFFER_OUT_OF_BOUNDS]: Attempt to access memory outside buffer bounds\n    at new NodeError (node:internal/errors:371:5)\n    at boundsError (node:internal/buffer:86:9) {\n  code: 'ERR_BUFFER_OUT_OF_BOUNDS'\n}",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Binary Stream Safe Parse",
      "language": "javascript",
      "description": "Checking buffer size bounds before running offsets parse routines.",
      "code": "const parseBinary = (buf) => {\n  if (buf.length < 4) {\n    throw new Error('Payload too small');\n  }\n  return buf.readInt32BE(0);\n};"
    }
  ],
  "serverExamples": [
    {
      "name": "Buffer handling limits",
      "language": "javascript",
      "description": "Checking buffers.",
      "code": "# Handled at application layer"
    }
  ],
  "commonMistakes": [
    "Assuming Buffer allocations resize automatically (Buffer allocations are static in size; use Buffer.concat() to grow them)."
  ],
  "prevention": [
    "Validate reading index positions against the Buffer.length property dynamically."
  ],
  "faq": [
    {
      "question": "What is the difference between Buffer.alloc() and Buffer.allocUnsafe()?",
      "answer": "Buffer.alloc() initializes memory to zero. Buffer.allocUnsafe() does not, making it faster but potentially leaking sensitive remnants of old files or sessions if read out of bounds."
    },
    {
      "question": "How do I grow a Buffer dynamically?",
      "answer": "Buffers have a fixed size. To expand them, create a new larger Buffer and use `Buffer.concat([oldBuf, newChunks])`."
    },
    {
      "question": "Is this error a RangeError?",
      "answer": "Yes. It inherits from the built-in JavaScript `RangeError` class."
    },
    {
      "question": "What is the safest way to read multi-byte values?",
      "answer": "Ensure `index + byteSize <= buffer.length` before executing read calls (e.g. check offset + 4 when calling `readInt32BE(offset)`)."
    }
  ],
  "helpfulResources": [
    {
      "name": "Node.js Buffer API Docs",
      "url": "https://nodejs.org/api/buffer.html"
    }
  ],
  "relatedErrors": [
    "err-out-of-range"
  ],
  "comments": [],
  "quickFix": {
    "causes": [
      "Offset Overflow",
      "Overwriting Buffer Bounds"
    ],
    "checklist": [
      "Check Buffer Lengths",
      "Use Dynamic Concat"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Offset Overflow",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Overwriting Buffer Bounds",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "seoTitle": "Resolve ERR_BUFFER_OUT_OF_BOUNDS — Node.js Debugging Guide",
  "seoDescription": "Encountering ERR_BUFFER_OUT_OF_BOUNDS in Node.js? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
