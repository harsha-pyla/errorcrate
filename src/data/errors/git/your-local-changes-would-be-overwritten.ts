import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "your-local-changes-would-be-overwritten",
  "name": "Your local changes would be overwritten",
  "category": "git",
  "badges": [
    "Git Operations",
    "Merge Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to pull, merge, or rebase remote changes while you have unstaged local edits that conflict with the incoming commits.",
  "meanDescription": "Git blocks operations like merge, pull, or checkout if your working directory contains uncommitted edits on files that are also modified in the incoming commits. Git prevents the operation to safeguard your local work from being permanently overwritten. To resolve this, you must either commit your local changes, stash them temporarily, or discard them entirely before proceeding.",
  "causes": [
    "Uncommitted local modifications: Editing files locally without committing or stashing them, then trying to merge or pull updates to those same files.",
    "Diverged tracking branch pull: Pulling remote modifications that overlap with your active workspace changes.",
    "Switching branches with uncommitted edits: Running 'git checkout' to switch branches when files you edited have different states in the target branch."
  ],
  "solutions": [
    "Stash local modifications: Run 'git stash' to save your working directory edits, pull the changes, and restore your work with 'git stash pop'.",
    "Commit local modifications: Stage files using 'git add' and run 'git commit' to record your changes in local history before merging.",
    "Discard local modifications: If you do not want to keep your local edits, run 'git restore <file>' or 'git checkout -- <file>' to reset them."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "error: Your local changes to the following files would be overwritten by merge:\n\tsrc/app.js\nPlease commit your changes or stash them before you merge.\nAborting",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to pull while having local uncommitted edits in src/app.js\ngit pull origin main",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "error: Your local changes to the following files would be overwritten by merge:\n\tsrc/app.js\nPlease commit your changes or stash them before you merge.\nAborting",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Stashing and Pulling",
      "language": "bash",
      "description": "Store modifications in the Git stash stack, pull incoming commits, then pop the stash to apply local work.",
      "code": "# 1. Stash active uncommitted changes\n$ git stash\nSaved working directory and index state WIP on main...\n\n# 2. Pull remote updates\n$ git pull origin main\nUpdating a1b2c3d..e5f6g7h\n\n# 3. Apply and pop stashed changes\n$ git stash pop"
    },
    {
      "name": "Hard Resets",
      "language": "bash",
      "description": "Discard all local uncommitted changes permanently to allow clean pulls.",
      "code": "# WARNING: This discards all uncommitted modifications!\n$ git reset --hard HEAD\nHEAD is now at a1b2c3d My last commit\n\n# Pull now runs without blocks\n$ git pull origin main"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Inspect uncommitted diffs before deciding to stash or discard.",
      "code": "# Show differences on modified tracked files\ngit diff src/app.js"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "Use VS Code source control window to stash files graphically.",
      "code": "# Open Source Control tab (Ctrl+Shift+G)\n# Click the '...' menu -> Stash -> Stash (Include Untracked)\n# Run pull, then select 'Pop Stash'"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Identify uncommitted modifications inside active directories.",
      "code": "git status"
    }
  ],
  "commonMistakes": [
    "Running `git reset --hard` thinking it works like `git stash`. A hard reset is destructive and will permanently delete your uncommitted work.",
    "Forgetting to run `git stash pop` after a successful pull, leaving your local changes locked in the stash memory."
  ],
  "prevention": [
    "Commit your work in small, logical chunks frequently to avoid leaving files in an uncommitted state for long periods.",
    "Run `git status` to check your workspace before initiating pull or checkout commands."
  ],
  "faq": [
    {
      "question": "Why does Git block my pull/merge?",
      "answer": "Git does this to protect your unsaved work. If it proceeded with the merge, your local changes would be overwritten and lost forever."
    },
    {
      "question": "What does 'git stash' do?",
      "answer": "'git stash' temporarily shelves (stores) your local modifications in a stack, returning your working directory to a clean state matching the HEAD commit."
    },
    {
      "question": "How do I restore my stashed changes?",
      "answer": "Run 'git stash pop' to apply the last stashed changes and remove them from the stash stack."
    },
    {
      "question": "How do I discard all my local changes?",
      "answer": "Run 'git reset --hard HEAD' to discard all uncommitted changes in tracked files and restore your working directory to match the last commit."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Stash documentation",
      "url": "https://git-scm.com/docs/git-stash"
    }
  ],
  "relatedErrors": [
    "merge-conflict"
  ],
  "quickFix": {
    "causes": [
      "Uncommitted changes on files modified by incoming remote commits",
      "Attempting branch checkout with uncommitted edits on conflicting files",
      "Active merge/pull triggers file overwrite collision"
    ],
    "checklist": [
      "Run git stash to save changes",
      "Perform git pull or checkout",
      "Run git stash pop to restore changes",
      "Resolve conflicts if pop encounters them"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Uncommitted local edits on conflicted files",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Switching branches with pending modifications",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Pulling remote master branch updates",
      "frequency": "⭐⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Your local changes would be overwritten Error: Root Causes.",
  "seoDescription": "Troubleshoot Your local changes would be overwritten in Git with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent."
};

export default errorData;
