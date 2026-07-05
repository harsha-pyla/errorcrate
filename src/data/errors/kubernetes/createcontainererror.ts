import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "createcontainererror",
  "name": "CreateContainerError",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Runtime Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the container runtime (containerd) fails to construct or initialize the container process itself on the host.",
  "meanDescription": "A 'CreateContainerError' is a pod lifecycle status indicating that the Kubelet has prepared the network sandbox, volumes, and secrets, but the container runtime (containerd) failed to construct the container process. In Kubernetes v1.36, typical causes include trying to run a container command (like a shell script entrypoint) that does not exist in the image, permissions problems with the container process user (non-root directives), or invalid security contexts.",
  "causes": [
    "Non-existent command or script: The entrypoint 'command' or 'args' defined in the pod manifest references a file path that does not exist inside the image (e.g. running '/bin/bash' on an Alpine image containing only '/bin/sh').",
    "Read-only root filesystem permission blocks: The security context defines 'readOnlyRootFilesystem: true' but the container tries to write temporary log files to root directories.",
    "Invalid UID/GID security configurations: Enforcing 'runAsNonRoot: true' when the container image's default user is set to root (UID 0)."
  ],
  "solutions": [
    "Verify container commands paths: Check the image's entrypoint by running it locally, or align manifest commands with shell paths available inside the container.",
    "Mount ephemeral temp directories: If using read-only filesystems, mount 'emptyDir' volumes on write paths (like '/tmp' or '/var/log').",
    "Set non-root user UID: Explicitly specify a non-root UID (e.g. 'runAsUser: 1000') inside the pod's securityContext spec."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "NAME         READY   STATUS                 RESTARTS   AGE\napp-server   0/1     CreateContainerError   0          18s",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Fetch pods status showing container runtime errors\nkubectl get pods",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "NAME         READY   STATUS                 RESTARTS   AGE\napp-server   0/1     CreateContainerError   0          18s",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "SecurityContext Setup",
      "language": "yaml",
      "description": "Configure container user identity parameters (UID) to enforce non-root execution rules without triggering container startup failures in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: secure-app-pod\nspec:\n  securityContext:\n    # 1. Enforce non-root user checks\n    runAsNonRoot: true\n    # 2. Force non-root UID (user ID 1000)\n    runAsUser: 1000\n    fsGroup: 2000\n  containers:\n  - name: app\n    image: node:18-alpine\n    command: [\"node\", \"app.js\"]"
    },
    {
      "name": "ReadOnly Filesystem Mounts",
      "language": "yaml",
      "description": "Utilize emptyDir ephemeral volumes to enable write access on specific folders under readOnlyRootFilesystem rules.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: read-only-pod\nspec:\n  containers:\n  - name: server\n    image: nginx:alpine\n    securityContext:\n      readOnlyRootFilesystem: true\n    volumeMounts:\n    # Mount writeable emptyDir on Nginx temp folder paths\n    - name: cache-vol\n      mountPath: /var/cache/nginx\n    - name: run-vol\n      mountPath: /var/run\n  volumes:\n  - name: cache-vol\n    emptyDir: {}\n  - name: run-vol\n    emptyDir: {}"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Log directly into nodes to trace containerd runtime start logs.",
      "code": "# 1. Inspect Pod details events for runtime logs\nkubectl describe pod app-server\n\n# 2. Check containerd system daemon logs\njournalctl -u containerd -n 50 | grep -i \"create\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check container execution status inside Windows server nodes.",
      "code": "# Check node container lists\ndocker ps -a"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Watch events details for container failures.",
      "code": "kubectl get events --field-selector reason=Failed"
    }
  ],
  "commonMistakes": [
    "Assuming minimal images contain shell utilities like `/bin/bash` or `curl` (running bash on distroless or alpine images triggers immediate CreateContainerError).",
    "Configuring `runAsNonRoot: true` without specifying a `runAsUser` UID, if the image does not define a USER directive in its Dockerfile."
  ],
  "prevention": [
    "Run and verify container images locally using docker run under identical UID rules before committing resources.",
    "Adopt distroless images configurations with explicit entrypoint lists."
  ],
  "faq": [
    {
      "question": "What is the difference between CreateContainerConfigError and CreateContainerError?",
      "answer": "CreateContainerConfigError means Kubelet failed to compile the settings (like missing ConfigMaps or Secrets). CreateContainerError means the settings are fine, but the container runtime (containerd) failed to physically build or start the container process (e.g. wrong command or security settings)."
    },
    {
      "question": "Why does my container fail with 'runAsNonRoot: true'?",
      "answer": "If you enforce 'runAsNonRoot: true' in your securityContext, the Kubelet checks if the container's default user is root (UID 0). If it is, the Kubelet refuses to start it and throws CreateContainerError. You can resolve this by adding 'runAsUser: 1000' to force a non-root UID."
    },
    {
      "question": "How do I fix 'executable file not found in $PATH'?",
      "answer": "This means the command defined in your YAML ('command: [\"/bin/bash\"]') does not exist inside the image. For example, minimal images (like Alpine) do not have bash; they use sh ('command: [\"/bin/sh\"]')."
    },
    {
      "question": "How do I troubleshoot readOnlyRootFilesystem: true failures?",
      "answer": "When the filesystem is read-only, any attempt by the application to write files (even temp logs or pid files) will fail. Mount an 'emptyDir' volume on those write directories to allow safe temp writes."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Pod Security Standards guide",
      "url": "https://kubernetes.io/docs/concepts/security/pod-security-standards/"
    }
  ],
  "relatedErrors": [
    "createcontainerconfigerror"
  ],
  "quickFix": {
    "causes": [
      "Container command or arguments refer to an executable file path missing in the image",
      "runAsNonRoot: true is active but the image runs as root (UID 0) by default",
      "readOnlyRootFilesystem: true blocks writes to root directories without emptyDir mounts"
    ],
    "checklist": [
      "Confirm target binary path exists inside image (sh vs bash)",
      "Set runAsUser: 1000 inside container securityContext",
      "Mount emptyDir volumes on temporary write directories",
      "Describe pod to extract Kubelet error message details"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Typo in CMD/ENTRYPOINT executable binary path",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "runAsNonRoot: true active on a default-root container image",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "readOnlyRootFilesystem: true blocks writes to root folders",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve CreateContainerError — Kubernetes Debugging Guide",
  "seoDescription": "Encountering CreateContainerError in Kubernetes? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
