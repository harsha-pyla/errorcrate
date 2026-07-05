import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "another-git-process-seems-to-be-running",
  "name": "Another Git process seems to be running",
  "category": "git",
  "badges": [
    "Git Operations",
    "Lock Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when Git blocks an operation because a lock file (.git/index.lock) created by a previous Git process already exists.",
  "meanDescription": "When Git performs operations that modify the index (like git add, git commit, or git checkout), it creates a lock file named 'index.lock' in the hidden '.git' directory to prevent race conditions or data corruption from simultaneous write operations. If a previous Git process crashed, was forcefully terminated, or is still running in the background (like an IDE auto-fetch), the lock file remains, blocking any new Git commands.",
  "causes": [
    "Abrupt crash of Git process: Git was closed or terminated mid-command (e.g. closing terminal or host system shutdown).",
    "Background IDE auto-fetch operations: Active coding editors running git tasks in the background locking the index file.",
    "Concurrent Git CLI commands: Attempting to run multiple Git write commands simultaneously in separate terminal tabs."
  ],
  "solutions": [
    "Delete the index.lock file: Manually delete the stale '.git/index.lock' file to release the repository write block.",
    "Check background processes: Locate active Git processes and allow them to finish or terminate them.",
    "Restart active IDE: Close your text editor (VS Code, WebStorm) to release background file handles."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "fatal: Unable to create '/project/.git/index.lock': File exists.\n\nAnother git process seems to be running in this repository, e.g.\nan editor opened by 'git commit'. Please make sure all processes\nare terminated and try again.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Running a git command while index is locked\ngit add index.js",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "fatal: Unable to create '/project/.git/index.lock': File exists.\nAnother git process seems to be running in this repository...",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Deleting the Lock File",
      "language": "bash",
      "description": "Unlock your repository by manually removing the index.lock file located inside the hidden .git metadata folder.",
      "code": "# 1. Delete lock file\n$ rm -f .git/index.lock\n\n# 2. Run your command again\n$ git status"
    },
    {
      "name": "Terminating Zombie Git Processes",
      "language": "bash",
      "description": "Force-close all running Git tasks to release locked database locks safely.",
      "code": "# Unix (Linux/macOS)\n$ killall git\n\n# Windows (PowerShell)\n$ Stop-Process -Name git -Force"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Remove the stale lock file on Linux machines.",
      "code": "rm -f .git/index.lock"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Remove lock items in Windows environments using PowerShell.",
      "code": "Remove-Item -Force .git/index.lock"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Clean and check lock file presence in macOS directories.",
      "code": "rm -f .git/index.lock"
    }
  ],
  "commonMistakes": [
    "Deleting the lock file while another major Git transaction (like rebase or heavy checkout) is actively writing to the database, which will corrupt the repository structure.",
    "Assuming the whole repository needs to be re-cloned instead of simply deleting the lock file."
  ],
  "prevention": [
    "Avoid closing the terminal window or killing active scripts while a Git pull or commit command is executing.",
    "Configure background file watchers or IDE automatic sync utilities to run fetch operations less frequently."
  ],
  "faq": [
    {
      "question": "What is index.lock in Git?",
      "answer": "index.lock is a temporary file Git creates to lock the repository database during write operations, ensuring data integrity."
    },
    {
      "question": "Is it safe to delete index.lock?",
      "answer": "Yes, but only if you are sure no other Git process is currently running. If you delete it while a write command is active, it can cause index database corruption."
    },
    {
      "question": "Why does VS Code cause this error?",
      "answer": "VS Code periodically runs background git commands (like auto-fetch) to sync status indicators. If one of these background tasks runs while you execute a command, a temporary collision will trigger the lock error."
    },
    {
      "question": "How do I kill active Git processes?",
      "answer": "On Unix systems, run 'killall git'. On Windows, run 'taskkill /F /IM git.exe' in Command Prompt or 'Stop-Process -Name git -Force' in PowerShell."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Index Lock file reference",
      "url": "https://git-scm.com/docs/git-add#_discussion"
    }
  ],
  "relatedErrors": [
    "fatal-not-a-git-repository"
  ],
  "quickFix": {
    "causes": [
      "Stale index.lock file left behind by a crashed Git process",
      "Background editor sync tasks actively querying the index",
      "Concurrent command execution in separate terminal tabs"
    ],
    "checklist": [
      "Check if any Git command is actively running",
      "Run rm -f .git/index.lock to delete stale locks",
      "Close IDE/editors if index remains locked by handles",
      "Verify status is restored"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Crashed or aborted Git process leaving stale lock file",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "IDE background repository auto-fetch index locks",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Running concurrent write commands in multiple shells",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Another Git process seems to be running — Git.",
  "seoDescription": "Learn how to fix Another Git process seems to be running in Git. Understand the root causes, see real code examples, and apply verified solutions to resolve."
};

export default errorData;
