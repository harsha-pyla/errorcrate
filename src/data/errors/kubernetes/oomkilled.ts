import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "oomkilled",
  "name": "OOMKilled",
  "category": "kubernetes",
  "badges": [
    "Kubernetes Pod",
    "Memory Error",
    "High Priority"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when a container is terminated by the operating system kernel because it exceeded its allocated memory limits.",
  "meanDescription": "An 'OOMKilled' (Out Of Memory Killed) event is triggered when a container's memory usage exceeds the limit set in its Pod specification, or when the host node itself runs out of memory and the Linux kernel's OOM killer terminates container processes to prevent host OS crashes. When this occurs, the container is abruptly killed with Exit Code 137.",
  "causes": [
    "Exceeded container memory limit: The container's memory footprint grows beyond the 'resources.limits.memory' defined in the pod manifest.",
    "Node-level memory pressure: The entire worker node runs out of physical memory, causing the OS kernel to select and kill container processes (even those below their limit) based on their OOM score.",
    "Java JVM heap size misconfiguration: The Java Virtual Machine is not configured to respect container boundaries, allocating heap space that exceeds the container's hard memory limit."
  ],
  "solutions": [
    "Increase container memory limits: Adjust the 'resources.limits.memory' in the deployment specification to give the container more headroom.",
    "Set memory requests for scheduler guidance: Always specify realistic 'resources.requests.memory' to help the scheduler place the Pod on a node with enough capacity.",
    "Optimize application memory footprint: Debug memory leaks, optimize caching sizes, and configure container-aware runtime flags (e.g. '-XX:+UseContainerSupport' for Java JVM)."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "    Last State:     Terminated\n      Reason:       OOMKilled\n      Exit Code:    137\n      Started:      Mon, 29 Jun 2026 10:00:00 +0000\n      Finished:     Mon, 29 Jun 2026 10:15:00 +0000",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Describe the terminated Pod details\nkubectl describe pod memory-leak-app",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "    Last State:     Terminated\n      Reason:       OOMKilled\n      Exit Code:    137\n      Started:      Mon, 29 Jun 2026 10:00:00 +0000\n      Finished:     Mon, 29 Jun 2026 10:15:00 +0000",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Memory Specs Fix",
      "language": "yaml",
      "description": "Adjust memory requests and limits constraints inside Pod container specs.",
      "code": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: stable-app\nspec:\n  replicas: 2\n  template:\n    spec:\n      containers:\n      - name: memory-heavy-container\n        image: node:18-alpine\n        resources:\n          # 1. Requests tells scheduler node resource allocation requirements\n          requests:\n            memory: \"256Mi\"\n            cpu: \"100m\"\n          # 2. Limits enforces hard termination threshold\n          limits:\n            memory: \"512Mi\"\n            cpu: \"500m\""
    },
    {
      "name": "Java JVM Container Support",
      "language": "yaml",
      "description": "Configure Java applications to respect container memory limits dynamically using RAM percentages in Kubernetes v1.36.",
      "code": "apiVersion: v1\nkind: Pod\nmetadata:\n  name: java-api-pod\nspec:\n  containers:\n  - name: java-api\n    image: eclipse-temurin:17-jre\n    env:\n    - name: JAVA_TOOL_OPTIONS\n      # Configure JVM to target max 75% of container limit for heap memory\n      value: \"-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0\"\n    resources:\n      limits:\n        memory: \"1Gi\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Log directly into worker node and audit system kernel logs for OOM killer activities.",
      "code": "# 1. Scan kernel logs for OOM terminations\ndmesg -T | grep -i -E 'oom|kill'\n\n# 2. Or check system messages log file\ngrep -i -E 'oom-killer' /var/log/messages"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Review system memory allocation boundaries inside Windows node shells.",
      "code": "# Get Windows Node memory usage aggregates\nGet-Process | Sort-Object WorkingSet -Descending | Select-Object -First 10"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Query specific pods for OOM terminating events.",
      "code": "kubectl get pods --all-namespaces -o jsonpath='{range .items[*]}{.metadata.name}{\"\\t\"}{.status.containerStatuses[*].lastState.terminated.reason}{\"\\n\"}{end}' | grep OOMKilled"
    }
  ],
  "commonMistakes": [
    "Setting memory requests equal to memory limits without adding buffer headroom, triggering immediate evictions during execution startup spikes.",
    "Neglecting to configure heap memory limits inside containerized runtimes (like Node.js `--max-old-space-size` or Java `-Xmx`), allowing them to attempt allocating host memory exceeding limits."
  ],
  "prevention": [
    "Establish horizontal and vertical Pod autoscaling policies to dynamically expand resource capacities.",
    "Adopt Prometheus alerts to track memory utilization levels approaching limits thresholds."
  ],
  "faq": [
    {
      "question": "What does OOMKilled mean?",
      "answer": "It stands for Out Of Memory Killed. It means your container (or the node it runs on) ran out of physical memory, and the operating system terminated the process to protect the system."
    },
    {
      "question": "How do I confirm a Pod was OOMKilled?",
      "answer": "Run 'kubectl describe pod <pod-name>' and look at the container status. If the 'Last State' is 'Terminated' and the 'Reason' is 'OOMKilled' (with Exit Code 137), the container was terminated for exceeding memory limits."
    },
    {
      "question": "What is the difference between exit code 137 and other exit codes?",
      "answer": "Exit code 137 means a process was killed by a SIGKILL signal (128 + 9 = 137). In Kubernetes, this is almost always caused by either OOMKilled or the Kubelet killing the container for failing liveness checks."
    },
    {
      "question": "How do I prevent my Java app from being OOMKilled?",
      "answer": "Ensure your JVM respects container limits by using Java 10+ (which has container support active by default) and configuring memory ratio flags (e.g. '-XX:MaxRAMPercentage=75.0') instead of hardcoded '-Xmx' values."
    }
  ],
  "helpfulResources": [
    {
      "name": "Kubernetes Resource Management for Pods and Containers guide",
      "url": "https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/"
    }
  ],
  "relatedErrors": [
    "crashloopbackoff"
  ],
  "quickFix": {
    "causes": [
      "Container memory usage footprint exceeds specified memory limits limits",
      "Host node runs out of physical memory, triggering kernel OS kills",
      "App runtimes (JVM/Node) allocate memory outside container boundary"
    ],
    "checklist": [
      "Confirm Exit Code 137 inside describe pod reports",
      "Increase resources.limits.memory specs",
      "Set container-aware JVM flags (-XX:MaxRAMPercentage)",
      "Audit application code logs for memory leakage"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Container memory usage exceeds spec resource limit",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Worker node memory pressure (host OS OOM killer)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "JVM or runtime heap size exceeds container boundary",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "OOMKilled Explained: Causes, Fixes & Prevention",
  "seoDescription": "OOMKilled in Kubernetes — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
