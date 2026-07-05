import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "could-not-get-lock",
  "name": "Could not get lock",
  "category": "linux",
  "badges": [
    "Linux System",
    "APT Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when another process is running package management tasks and holds the system database locks (/var/lib/dpkg/lock).",
  "meanDescription": "The 'Could not get lock' error is thrown by the APT package manager when another application is actively reading or writing to the Debian package database (/var/lib/dpkg/). To protect the database from corruption, APT creates file locks (like lock-frontend or lock). If an automated background service (like unattended-upgrades) is active, or a previous installation command was interrupted or frozen, new APT commands are blocked until the lock is released.",
  "causes": [
    "Unattended upgrades running in background: The system is automatically updating security packages in the background.",
    "Interrupted package installation command: A previous package installation task crashed or was forcefully closed before releasing locks.",
    "Simultaneous manual package updates: Running APT commands concurrently in separate terminal panels."
  ],
  "solutions": [
    "Wait for background tasks to finish: Allow active background installers (unattended-upgrades) to release locks naturally.",
    "Locate and terminate active lock processes: Find the holding process PID using 'lsof' and terminate it safely.",
    "Remove stale lock files: If a crash occurred, manually delete the stale lock file to unlock database access."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), is another process using it?",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to run apt install while background updates are running\nsudo apt install curl",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "E: Could not get lock /var/lib/dpkg/lock-frontend - open (11: Resource temporarily unavailable)\nE: Unable to acquire the dpkg frontend lock (/var/lib/dpkg/lock-frontend), is another process using it?",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Finding the Lock Owner",
      "language": "bash",
      "description": "Locate which process ID (PID) is currently locking the package database files.",
      "code": "# 1. Inspect lock ownership\n$ sudo lsof /var/lib/dpkg/lock-frontend\nCOMMAND   PID USER   FD   TYPE DEVICE SIZE/OFF   NODE NAME\napt-get 12345 root    4u  WREG    8,1        0 395123 /var/lib/dpkg/lock-frontend\n\n# 2. Safely wait or terminate the PID if frozen\n$ sudo kill -15 12345"
    },
    {
      "name": "Force Clearing Stale Locks",
      "language": "bash",
      "description": "Remove lock files after a system crash to restore database access. WARNING: Ensure no install commands are active first.",
      "code": "# 1. Stop active packages services\n$ sudo systemctl stop unattended-upgrades\n\n# 2. Delete lock files\n$ sudo rm /var/lib/dpkg/lock\n$ sudo rm /var/lib/dpkg/lock-frontend\n$ sudo rm /var/cache/apt/archives/lock\n\n# 3. Reconfigure broken packages\n$ sudo dpkg --configure -a"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Disable automatic security background upgrades to prevent unexpected lock errors.",
      "code": "# Edit configuration file:\n# sudo nano /etc/apt/apt.conf.d/20auto-upgrades\n# Update settings to disable:\n# APT::Periodic::Update-Package-Lists \"0\";\n# APT::Periodic::Unattended-Upgrade \"0\";"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "WSL systems can trigger locks if the VM terminal is terminated during active installations.",
      "code": "# Verify if active locks are lingering\nls -la /var/lib/dpkg/lock*"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Clean and resolve brew lock conflicts.",
      "code": "brew cleanup"
    }
  ],
  "commonMistakes": [
    "Force-killing background packages managers during critical writes, causing database corruption that blocks future installs.",
    "Deleting locks files blindly when an installation command is actively downloading files in another terminal session."
  ],
  "prevention": [
    "Verify system update schedules using log reviews in `/var/log/unattended-upgrades/` folders.",
    "Adopt package management checks inside automated deployment scripts to ensure lock availability before running installs."
  ],
  "faq": [
    {
      "question": "What is the lock-frontend in APT?",
      "answer": "It is a lock file used to prevent multiple package management applications from modifying the system package list at the same time."
    },
    {
      "question": "Is it safe to delete the lock files?",
      "answer": "Only if you are 100% sure no install command is running. Deleting lock files while a package installation is active will corrupt your package database, requiring recovery steps."
    },
    {
      "question": "How do I find out which process is holding the lock?",
      "answer": "Run 'sudo lsof /var/lib/dpkg/lock-frontend' or 'sudo fuser /var/lib/dpkg/lock-frontend' to list the active process ID (PID) holding the lock."
    },
    {
      "question": "How do I disable automatic unattended upgrades?",
      "answer": "Edit '/etc/apt/apt.conf.d/20auto-upgrades' and set 'APT::Periodic::Unattended-Upgrade' to '0'."
    }
  ],
  "helpfulResources": [
    {
      "name": "Debian Package Management troubleshooting guide",
      "url": "https://wiki.debian.org/PackageManagement"
    }
  ],
  "relatedErrors": [
    "unable-to-locate-package"
  ],
  "quickFix": {
    "causes": [
      "Background security upgrades are running automatically",
      "Previous package installation task crashed, leaving stale locks",
      "Running concurrent APT/dpkg sessions in separate shell panels"
    ],
    "checklist": [
      "Find lock owner: sudo lsof /var/lib/dpkg/lock-frontend",
      "Terminate frozen install process safely",
      "Remove lock files if process crashed",
      "Run dpkg --configure -a to repair databases"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Unattended upgrades background process running",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Interrupted or frozen package management process",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Concurrent manual apt/dpkg command sessions",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Could not get lock — Linux Debugging Guide",
  "seoDescription": "Learn how to fix Could not get lock in Linux. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
