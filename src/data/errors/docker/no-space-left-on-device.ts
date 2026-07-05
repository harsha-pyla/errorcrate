import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "no-space-left-on-device",
  "name": "No space left on device",
  "category": "docker",
  "badges": [
    "Docker Daemon Error",
    "Disk Space Error",
    "Common"
  ],
  "updatedAt": "June 28, 2026",
  "shortDescription": "The host or Docker virtual disk has run out of storage space, blocking builds, pulls, and container execution.",
  "meanDescription": "This error occurs when the file system containing Docker's storage directory (usually /var/lib/docker or the virtual disk file allocated for Docker Desktop) runs out of available storage capacity. Over time, unused builder cache, dangling images, stopped containers, and volume logs accumulate, consuming hundreds of gigabytes until the engine can no longer write files.",
  "causes": [
    "Accumulated Builder Cache: BuildKit builder cache accumulates from previous builds and is never pruned.",
    "Dangling Images and Volumes: Abandoned container images ('<none>:<none>') and orphan volumes left behind by retired services.",
    "Hypervisor VM disk size limit: Docker Desktop virtual disk (.raw or .vhdx) has reached its pre-allocated maximum disk size."
  ],
  "solutions": [
    "Prune unused system data: Run 'docker system prune -a --volumes -f' to purge all unused containers, networks, images, and volumes.",
    "Clear builder cache: Run 'docker builder prune -a -f' to release cached build layers.",
    "Reclaim virtual disk space: Shrink or increase the size limits of the Docker virtual disk image."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "failed to register layer: write /usr/share/...: no space left on device",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Triggering CLI command",
    "code": "docker pull heavy-ai-model-image:latest",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Extracting [=============================================>     ]\nfailed to register layer: write /var/lib/docker/tmp/GetImageBlob: no space left on device",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Analyzing Space Consumption",
      "language": "bash",
      "description": "Inspect how much storage is occupied by different Docker entities.",
      "code": "$ docker system df\n\nTYPE            TOTAL     ACTIVE    SIZE      RECLAIMABLE\nImages          24        5         12.4GB    8.2GB (66%)\nContainers      10        2         1.2GB     1.1GB (91%)\nLocal Volumes   5         2         45.1GB    40.2GB (89%)\nBuild Cache     120       0         32.4GB    32.4GB"
    },
    {
      "name": "Deep System Clean",
      "language": "bash",
      "description": "Forcefully purge all dangling elements and builders cache in one command.",
      "code": "# WARNING: This deletes stopped containers, unused networks, dangling images, and build caches\ndocker system prune -a --volumes -f\n# Specifically purge BuildKit cache\ndocker builder prune -a -f"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check host partition disk sizes and mount limits.",
      "code": "# Check partition free space\ndf -h /var/lib/docker\n# Find large container log files\nsudo du -sh /var/lib/docker/containers/*"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "WSL2 virtual disk files (.vhdx) do not shrink automatically when files are deleted inside Linux. Reclaim space using Diskpart.",
      "code": "# 1. Shut down WSL\nwsl --shutdown\n# 2. Run Diskpart script inside PowerShell as Admin to compact disk\nselect vdisk file=\"C:\\Users\\user\\AppData\\Local\\Docker\\wsl\\data\\ext4.vhdx\"\ncompact vdisk"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Reclaiming disk size limits inside macOS systems.",
      "code": "# Open Docker Desktop GUI and navigate to:\n# Troubleshoot (Bug icon) -> Clean / Purge data"
    }
  ],
  "commonMistakes": [
    "Running `docker system prune` without the `--volumes` flag, which leaves large database volumes completely untouched.",
    "Neglecting to limit log sizes in docker-compose files, allowing log files to grow unchecked until the disk is full."
  ],
  "prevention": [
    "Configure log rotation policies in your Docker daemon configs (`log-driver: json-file` with `max-size: 10m`).",
    "Regularly set up cron jobs to run system prunes in development servers."
  ],
  "faq": [
    {
      "question": "Why does Docker say no space left on device?",
      "answer": "The host partition or Docker virtual machine storage disk has hit 100% capacity, blocking any write operations."
    },
    {
      "question": "How do I find out what is taking up space?",
      "answer": "Run 'docker system df' to inspect disk consumption divided by images, containers, local volumes, and build cache."
    },
    {
      "question": "How do I reclaim space in WSL2?",
      "answer": "WSL2 virtual disks (.vhdx) do not automatically shrink. You must shut down WSL (`wsl --shutdown`) and shrink the disk using the Windows Diskpart tool or Optimize-VHD."
    },
    {
      "question": "What is the difference between system prune and volume prune?",
      "answer": "'docker system prune' does not delete volumes by default to protect user database files. To delete volumes as well, you must explicitly run 'docker system prune --volumes' or run 'docker volume prune'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Docker Prune Command guide",
      "url": "https://docs.docker.com/engine/reference/commandline/system_prune/"
    },
    {
      "name": "WSL2 Disk Shrinkage guide",
      "url": "https://learn.microsoft.com/en-us/windows/wsl/disk-space"
    }
  ],
  "relatedErrors": [],
  "quickFix": {
    "causes": [
      "Accumulated BuildKit builder cache",
      "Orphaned volumes and containers log data",
      "Virtual machine hard disk limit reached"
    ],
    "checklist": [
      "Run docker system prune -a --volumes -f",
      "Run docker builder prune -a -f",
      "Check space using docker system df",
      "Compact WSL2 ext4.vhdx disk"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Accumulated BuildKit builder cache",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Orphaned volume logs & images",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Hypervisor VM hard disk limit",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot No space left on device — Docker Error Guide",
  "seoDescription": "Getting No space left on device in Docker? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples."
};

export default errorData;
