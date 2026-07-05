import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "dockerfile-parse-error",
  "name": "Dockerfile parse error",
  "category": "docker",
  "badges": [
    "Docker Build Error",
    "Syntax Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The Docker builder engine failed to parse the Dockerfile due to syntax typos, incorrect instruction keywords, or malformed formatting.",
  "meanDescription": "This error occurs during the image build stage (e.g. running 'docker build') when the Dockerfile parser encounters syntax it cannot resolve. Common root causes include typing invalid instruction verbs (like using 'RUNN' instead of 'RUN'), placing comments incorrectly, or neglecting backslash line continuations inside multiline strings.",
  "causes": [
    "Unknown instruction spelling typo: Typing invalid keywords (e.g. 'ADDD' or 'EXPOSEED' instead of 'ADD' or 'EXPOSE').",
    "Missing backslash continuation: Writing multi-line shell commands inside RUN instructions without connecting lines using '\\'.",
    "Invalid instruction placement: Declaring build arguments or copying commands before the required 'FROM' instruction (except for 'ARG')."
  ],
  "solutions": [
    "Correct instruction spelling: Verify keywords match official Dockerfile specifications.",
    "Add line continuation symbols: Connect multi-line shell commands using backslashes ('\\') at the end of each line.",
    "Verify instruction ordering: Always place base image declarations ('FROM') at the top of the file."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "dockerfile parse error line 5: unknown instruction: ADDD",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Wrong: Typo in instruction",
    "code": "FROM alpine:3.18\n# Typo keyword here\nADDD myfile.txt /app/\nRUN echo \"build complete\"",
    "language": "docker"
  },
  "exampleResponse": {
    "title": "Correct: Valid Dockerfile Syntax",
    "code": "FROM alpine:3.18\n# Correct ADD keyword\nADD myfile.txt /app/\nRUN echo \"build complete\"",
    "language": "docker"
  },
  "frameworkExamples": [
    {
      "name": "Multiline RUN Command Fix",
      "language": "docker",
      "description": "Ensure backslash characters connect multiline shell blocks safely without trailing whitespaces.",
      "code": "# Wrong: missing backslash on line 2\nRUN apt-get update && apt-get install -y \\\n    curl\n    git # Throws unknown instruction 'git'\n\n# Correct\nRUN apt-get update && apt-get install -y \\\n    curl \\\n    git"
    },
    {
      "name": "Using ARG before FROM",
      "language": "docker",
      "description": "ARG is the only instruction permitted to precede FROM.",
      "code": "ARG VERSION=3.18\nFROM alpine:${VERSION}\nRUN echo \"Using version ${VERSION}\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verifying Dockerfile compilation path parameters on Linux hosts.",
      "code": "docker build -f Dockerfile -t my-app:v1.0 ."
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "WSL2 builds can fail if Dockerfile encoding includes Byte Order Mark (BOM) prefixes.",
      "code": "# Verify file is encoded in UTF-8 without BOM\nGet-Content .\\Dockerfile -Encoding utf8"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS build setups using custom Dockerfile names.",
      "code": "docker build -f Dev.dockerfile -t dev-env ."
    }
  ],
  "commonMistakes": [
    "Leaving trailing spaces after a backslash (`\\ `) line continuation. The parser will treat the whitespace as the escape target, breaking the continuation on the next line.",
    "Placing code comment symbols (`#`) inside multiline RUN commands without breaking them into single command lines."
  ],
  "prevention": [
    "Install Docker extensions inside your IDE (such as VS Code's Docker extension) to enable live syntax linting.",
    "Utilize automated linters (like Hadolint) to check Dockerfile syntax rules in code pipelines."
  ],
  "faq": [
    {
      "question": "What is a Dockerfile parse error?",
      "answer": "It is a syntax error thrown by the builder engine when a Dockerfile line violates grammatical conventions or contains invalid keywords."
    },
    {
      "question": "Can I declare ARG before FROM?",
      "answer": "Yes. 'ARG' is the only instruction allowed to precede the 'FROM' instruction, typically used to declare base image version variables."
    },
    {
      "question": "How do I split a RUN instruction into multiple lines?",
      "answer": "End each line except the last with a backslash ('\\'), ensuring there are no trailing whitespace characters after the backslash."
    },
    {
      "question": "Why do I get 'unknown instruction' on comments?",
      "answer": "Because you placed a comment prefix (#) inside a multi-line RUN command without escaping it, causing the parser to treat the next line as a fresh instruction."
    }
  ],
  "helpfulResources": [
    {
      "name": "Dockerfile reference guide",
      "url": "https://docs.docker.com/reference/dockerfile/"
    },
    {
      "name": "Hadolint Dockerfile Linter",
      "url": "https://github.com/hadolint/hadolint"
    }
  ],
  "relatedErrors": [
    "failed-to-solve"
  ],
  "quickFix": {
    "causes": [
      "Typo in Dockerfile instruction keyword",
      "Missing backslash inside multiline RUN",
      "Stray characters or space after backslash"
    ],
    "checklist": [
      "Verify keyword spelling (FROM, RUN, COPY)",
      "Check for spaces after backslashes",
      "Run Dockerfile through Hadolint",
      "Ensure FROM is at the top of file"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Instruction spelling typos",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing backslash on multiline RUN",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incorrect instruction order",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Dockerfile parse error Error: Root Causes & Verified Fixes",
  "seoDescription": "Learn how to fix Dockerfile parse error in Docker. Understand the root causes, see real code examples, and apply verified solutions to resolve this error."
};

export default errorData;
