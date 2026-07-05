import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "head-detached",
  "name": "HEAD detached",
  "category": "git",
  "badges": [
    "Git Operations",
    "CLI Warning",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This state occurs when you check out a specific commit, tag, or remote branch directly rather than a local branch pointer.",
  "meanDescription": "A 'detached HEAD' state is not an error but a descriptive warning indicating that your active HEAD pointer is pointing directly to a specific commit hash in the history, rather than to a local branch reference. Any commits you make in this state will not belong to any branch, and will become orphaned (lost) as soon as you switch to another branch, unless you explicitly create a branch to save them.",
  "causes": [
    "Checking out a specific commit hash: Running 'git checkout <commit_hash>' to inspect older states of code.",
    "Checking out a tag: Running 'git checkout <tag_name>' to access a specific build release version.",
    "Checking out a remote-only branch: Checking out 'origin/main' directly instead of creating a local tracking counterpart."
  ],
  "solutions": [
    "Return to a local branch: Run 'git checkout <branch_name>' to return to your normal working branch (e.g. main/master).",
    "Save work in a new branch: If you made commits while detached, run 'git switch -c <new_branch_name>' to save them in a new branch.",
    "Switch back to previous state: Run 'git switch -' to quickly return to your last active branch."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Note: switching to 'a1b2c3d'.\n\nYou are in 'detached HEAD' state. You can look around, make experimental\nchanges and commit them, and you can discard any commits you make in this\nstate without impacting any branches by switching back to a branch.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Checking out an older commit directly\ngit checkout a1b2c3d",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Note: switching to 'a1b2c3d'.\n\nYou are in 'detached HEAD' state. You can look around, make experimental\nchanges...\n\nHEAD is now at a1b2c3d My previous commit message",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Saving Detached Commit Changes",
      "language": "bash",
      "description": "If you made commits while detached, save them into a new branch before switching back to main.",
      "code": "# 1. Make experimental changes and commit\n$ git commit -am \"Experimental edit\"\n[detached HEAD 5e6f7g8] Experimental edit\n\n# 2. Save work into a new branch\n$ git checkout -b feature-experimental\nSwitched to a new branch 'feature-experimental'"
    },
    {
      "name": "Returning to Main",
      "language": "bash",
      "description": "Abandon experimental changes and switch back to your normal working branch.",
      "code": "# Switch back to main branch\n$ git checkout main\nPrevious HEAD position was 5e6f7g8 Experimental edit\nSwitched to branch 'main'"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "List branch references to check detached state indicators on Linux.",
      "code": "$ git branch\n* (HEAD detached at a1b2c3d)\n  main\n  feature-xyz"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Check current HEAD target hash reference inside Windows PowerShell.",
      "code": "# Output active HEAD commit hash\ngit rev-parse HEAD"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check details of the active HEAD position.",
      "code": "git status"
    }
  ],
  "commonMistakes": [
    "Switching to another branch (`git checkout main`) after making commits in a detached HEAD state without creating a branch first, which makes those commits orphaned and difficult to recover.",
    "Attempting to push changes directly to remote server while in detached HEAD state, which fails because there is no local branch to track."
  ],
  "prevention": [
    "Always use `git checkout -b <branch_name>` when starting new work instead of checking out random commit states.",
    "Verify branch state by ensuring your terminal prompt displays the active branch name."
  ],
  "faq": [
    {
      "question": "What is HEAD in Git?",
      "answer": "HEAD is a pointer that reference-links your active local branch and latest commit. It is usually pointing to a branch (which points to a commit). In a detached state, HEAD points directly to a commit."
    },
    {
      "question": "Will I lose changes made in detached HEAD state?",
      "answer": "Yes, if you switch to another branch without saving your work first. To save your changes, create a branch from your current commit by running 'git checkout -b <new-branch-name>'."
    },
    {
      "question": "How do I switch back to my main branch?",
      "answer": "Run 'git checkout main' or 'git switch main' to return to your local main branch."
    },
    {
      "question": "Why does checking out a tag trigger detached HEAD?",
      "answer": "Because tags are read-only markers pointing to a specific commit. Unlike branches, tags do not move forward automatically when you make new commits, so checking one out detaches HEAD."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Checkout reference manual",
      "url": "https://git-scm.com/docs/git-checkout"
    }
  ],
  "relatedErrors": [
    "fatal-not-a-git-repository"
  ],
  "quickFix": {
    "causes": [
      "Checking out an older commit hash directly",
      "Checking out a read-only tag reference",
      "Checking out a remote branch directly without tracking local branch"
    ],
    "checklist": [
      "Run git branch to verify detached state",
      "Save changes: git checkout -b <new-branch-name>",
      "Switch back to main: git checkout main",
      "Locate lost commits using git reflog if switched"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Checking out a specific commit hash",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Checking out a remote tracking branch directly",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Checking out a release tag name",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "HEAD detached: Complete Git Troubleshooting Guide",
  "seoDescription": "Troubleshoot HEAD detached in Git with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your projects."
};

export default errorData;
