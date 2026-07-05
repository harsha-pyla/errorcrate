import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "exit-code-127",
  "name": "Exit Code 127",
  "category": "docker",
  "badges": [
    "Docker Runtime Error",
    "Exit Code",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The command specified inside the container could not be found, or its interpreter (shell) is missing in the base image.",
  "meanDescription": "Exit code 127 is a standard POSIX error indicating 'Command not found'. In Docker, this occurs when you try to execute a command, script, or binary inside a container, but the shell or OS cannot find it. This is commonly caused by: 1) typing the command name or path incorrectly, 2) referencing an interpreter (like #!/bin/bash) that is not installed in lightweight base images like Alpine, or 3) missing library dependencies (like dynamic linkers) required by compiled binaries.",
  "causes": [
    "Command or binary name typo: Typo in the name of the executable (e.g. running 'pyhton' instead of 'python').",
    "Missing interpreter shell: Calling '/bin/bash' inside Alpine base images which only bundle '/bin/sh' by default.",
    "Missing dynamic linker dependencies: Trying to run a compiled binary that depends on shared libraries (e.g. glibc) missing from the image."
  ],
  "solutions": [
    "Verify command path and spelling: Double check spellings and use absolute paths (e.g. '/usr/local/bin/my-script').",
    "Use correct base interpreter: Replace '#!/bin/bash' with '#!/bin/sh' inside Alpine-targeted scripts, or install bash using 'apk add'.",
    "Install missing dependencies: Install glibc compatibility packages (like 'libc6-compat') inside lightweight images."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "standard_init_linux.go:228: exec user process caused: no such file or directory\n# Command exits with status 127",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "# Attempting to run a typo command name\ndocker run --rm alpine pyhton --version",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: Error response from daemon: OCI runtime create failed: container_linux.go:349: starting container process caused: exec: \"pyhton\": executable file not found in $PATH: unknown.\n$ echo $?\n127",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Alpine Bash Installation",
      "language": "docker",
      "description": "If your application startup script depends on bash, you must explicitly install it in Alpine-based Dockerfiles.",
      "code": "FROM alpine:3.18\n# Fix: install bash to resolve missing /bin/bash errors\nRUN apk add --no-cache bash\nCOPY run.sh .\nENTRYPOINT [\"/bin/bash\", \"run.sh\"]"
    },
    {
      "name": "Line Ending Shebang Mismatch",
      "language": "text",
      "description": "Windows carriage return lines (\\r) corrupt the shebang statement. The engine looks for '/bin/sh\\r' and throws code 127.",
      "code": "# Trigger error logs: \n# /usr/local/bin/entrypoint.sh: line 1: #!/bin/sh\r: not found\n\n# Fix: run dos2unix before copying into the container filesystem"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify file presence inside the container using interactive shell bypass.",
      "code": "docker run -it --entrypoint /bin/sh my-broken-image\n# Inside the container, check PATH variables\necho $PATH"
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Ensure files committed from Windows checkouts are normalized to LF line endings.",
      "code": "# Convert files in workspace before building\ndos2unix entrypoint.sh"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS platform binary checking.",
      "code": "# Verify binary architectures inside shell\nfile /usr/local/bin/my-compiled-binary"
    }
  ],
  "commonMistakes": [
    "Assuming bash is installed in all Linux base images. Lightweight images (like alpine or busybox) use ash/sh to reduce footprint size.",
    "Neglecting missing dynamic linkers when copying compiled Go or C++ binaries into scratch or alpine images."
  ],
  "prevention": [
    "Always test scripts locally inside container environments using interactive shell mounting before deploying.",
    "Include library compatibility tools (`libc6-compat`) when running precompiled packages inside Alpine."
  ],
  "faq": [
    {
      "question": "What is exit code 127?",
      "answer": "Exit code 127 indicates that a command or binary specified inside the container was not found, meaning it cannot be located in the image's PATH."
    },
    {
      "question": "Why does /bin/bash fail in Alpine?",
      "answer": "Alpine Linux is designed to be extremely small and does not include bash by default. It uses BusyBox ash (accessed via /bin/sh). To fix this, change your script's shebang to '#!/bin/sh' or install bash using 'RUN apk add --no-cache bash' in your Dockerfile."
    },
    {
      "question": "What is the meaning of 'not found' on an existing file?",
      "answer": "If you see 'run.sh: not found' but the file clearly exists, it is usually because the script has Windows-style CRLF line endings. The system looks for the interpreter '/bin/sh\\r' which does not exist, triggering exit code 127. Run 'dos2unix' on the file."
    },
    {
      "question": "How do I install glibc compatibility in Alpine?",
      "answer": "Add 'RUN apk add --no-cache libc6-compat' to your Dockerfile to supply the missing shared library references."
    }
  ],
  "helpfulResources": [
    {
      "name": "Alpine Linux Package Search",
      "url": "https://pkgs.alpinelinux.org/packages"
    }
  ],
  "relatedErrors": [
    "exit-code-125",
    "exit-code-126"
  ],
  "quickFix": {
    "causes": [
      "Typo in command name or path",
      "Missing shell interpreter (/bin/bash) in Alpine",
      "Hidden Windows CRLF characters in shebang line"
    ],
    "checklist": [
      "Verify command spelling and absolute paths",
      "Install bash or change shebang to /bin/sh",
      "Convert line endings using dos2unix",
      "Verify dynamic linkers in lightweight images"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Command name or path spelling typo",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Missing shell interpreter (/bin/bash)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing binary shared library links",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug Exit Code 127 in Docker — Step-by-Step Fix",
  "seoDescription": "Fix Exit Code 127 fast. This Docker debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code examples."
};

export default errorData;
