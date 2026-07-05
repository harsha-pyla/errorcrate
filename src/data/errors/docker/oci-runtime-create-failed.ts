import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "oci-runtime-create-failed",
  "name": "OCI runtime create failed",
  "category": "docker",
  "badges": [
    "Docker Daemon Error",
    "OCI Runtime Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The low-level container runtime (runc) failed to construct or start the container process due to invalid entrypoints, mount failures, or system level conflicts.",
  "meanDescription": "This error is thrown by Docker when runc (the open-source OCI container spawning runtime) fails to create, map, or start the container process on the system level. Since Docker depends on runc to establish system namespaces, cgroups, and mounting points, any lower-level failure (such as missing execution files in the entrypoint path, mounting non-existent directories, or permission issues on execution targets) triggers this error.",
  "causes": [
    "Non-existent executable or entrypoint: The script/binary defined inside ENTRYPOINT or CMD does not exist in the image filesystem.",
    "Invalid volume mount paths: Trying to bind directories that do not exist or violate OS sandboxing rules.",
    "Mismatched CPU architecture: Trying to run arm64 binaries on non-transpiled x86_64 host machines."
  ],
  "solutions": [
    "Verify Entrypoint path: Double check CMD or ENTRYPOINT file paths inside the Dockerfile (e.g. check for typos like '/bin/sh' vs '/usr/bin/sh').",
    "Convert Windows CRLF line endings: If you get a 'no such file' error on a script entrypoint, run 'dos2unix script.sh' to remove Windows line endings.",
    "Bypass entrypoint to debug: Run 'docker run --entrypoint /bin/sh -it <image>' to override the entrypoint and debug paths manually."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "docker: Error response from daemon: OCI runtime create failed: container_linux.go:349: starting container process caused...",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker run --rm alpine /nonexistent-script.sh",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "docker: Error response from daemon: OCI runtime create failed: container_linux.go:380: starting container process caused: exec: \"/nonexistent-script.sh\": permission denied: unknown.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Bypassing Entrypoints",
      "language": "bash",
      "description": "Override the default entrypoint to run an interactive shell and inspect internal paths.",
      "code": "$ docker run --entrypoint /bin/sh -it my-broken-image\n\n/ # ls -l /app\n# Check if your starting scripts are placed in the correct directories"
    },
    {
      "name": "Line Endings Converter",
      "language": "bash",
      "description": "Ensure bash scripts built on Windows hosts have Unix line endings (LF) rather than Windows (CRLF).",
      "code": "# Convert script to Unix line ending format\ndos2unix entrypoint.sh\n# Rebuild the docker image\ndocker build -t my-app ."
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Troubleshoot runc system calls and logs on Linux servers.",
      "code": "# Inspect host system dmesg for runc errors\ndmesg | grep -i runc\n# Verify runc package installations\nrunc --version"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "WSL2 file system mounts can fail with OCI errors if virtualization handles paths incorrectly.",
      "code": "# Restart WSL to reload system cgroup states\nwsl --shutdown\n# Check active WSL version\nwsl --status"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Configuring CPU architecture translations on Apple Silicon chips.",
      "code": "# Enable Rosetta 2 x86 translation inside Docker Desktop resources settings\n# Run with explicit target flag\ndocker run --platform linux/amd64 my-intel-image"
    }
  ],
  "commonMistakes": [
    "Writing ENTRYPOINT scripts on Windows and committing them to git with CRLF line endings, causing runc to fail with 'file not found' inside Linux containers.",
    "Leaving out the execution permissions flag (`chmod +x entrypoint.sh`) before building images."
  ],
  "prevention": [
    "Set up `.gitattributes` to enforce `* text eol=lf` on bash scripts.",
    "Always check file permissions inside the Dockerfile using `RUN chmod +x /path/to/script.sh`."
  ],
  "faq": [
    {
      "question": "What does OCI runtime create failed mean?",
      "answer": "It means runc (the container runtime engine) failed to set up namespaces, cgroups, or mount points, or could not execute the entrypoint script."
    },
    {
      "question": "How do I fix 'no such file or directory' errors inside OCI create failed?",
      "answer": "This usually happens when the script defined in ENTRYPOINT has DOS line endings (\\r\\n) instead of Unix line endings (\\n), making Linux fail to load it. Run 'dos2unix' on the script before building."
    },
    {
      "question": "Why does it happen on directory mounts?",
      "answer": "If the path mapped inside the container conflicts with read-only system files or root nodes, runc aborts mapping."
    },
    {
      "question": "How do I bypass entrypoints?",
      "answer": "Override it via command line: 'docker run --entrypoint /bin/bash -it <image>'."
    }
  ],
  "helpfulResources": [
    {
      "name": "runc GitHub Repository",
      "url": "https://github.com/opencontainers/runc"
    },
    {
      "name": "Docker ENTRYPOINT vs CMD Guide",
      "url": "https://docs.docker.com/reference/dockerfile/#entrypoint"
    }
  ],
  "relatedErrors": [
    "permission-denied"
  ],
  "quickFix": {
    "causes": [
      "Entrypoint script has Windows CRLF line endings",
      "Missing execution permission on script file",
      "CPU architecture mismatch on host machine"
    ],
    "checklist": [
      "Convert line endings using dos2unix",
      "Add chmod +x run commands in Dockerfile",
      "Bypass entrypoint using --entrypoint",
      "Check platform flags --platform"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing executable or entrypoint script",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Invalid volume mount directories",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incompatible architecture binaries",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "OCI runtime create failed Error: Root Causes & Verified.",
  "seoDescription": "Resolve OCI runtime create failed in Docker with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
