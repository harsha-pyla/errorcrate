import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "automatic-merge-failed",
  "name": "Automatic merge failed",
  "category": "git",
  "badges": [
    "Git Operations",
    "Merge Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "Git was unable to merge the branches automatically because changes in the target branch conflict with the source branch.",
  "meanDescription": "This error represents the overall state when Git aborts an automated branch integration. When you run 'git merge', Git attempts to perform a fast-forward merge or a three-way merge. If it finds conflicting changes (like edits to the same lines of code) in both branches, it reports 'Automatic merge failed', leaving the repository in a half-merged state. The user must manually resolve conflicts or abort the merge to restore the branch.",
  "causes": [
    "Unreconciled file modifications: Overlapping modifications on the same files in both branches.",
    "Binary file conflicts: Git cannot automatically merge changes in binary files (like images, zip files, or compiled assets).",
    "Submodule state conflicts: Different submodules versions or hashes checked out on both merging branches."
  ],
  "solutions": [
    "Inspect conflicting files: Run 'git status' to identify all files listed under 'Unmerged paths'.",
    "Resolve binary conflicts: Choose which branch's binary version to keep using 'git checkout --ours <file>' or 'git checkout --theirs <file>'.",
    "Complete the merge: After resolving conflict markers, stage files with 'git add' and complete the merge using 'git merge --continue' or 'git commit'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Automatic merge failed; fix conflicts and then commit the result.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to pull remote branch into local branch\ngit pull origin main",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "CONFLICT (content): Merge conflict in src/app.js\nAutomatic merge failed; fix conflicts and then commit the result.\n$ git merge --continue\nfatal: Run commit first to finish merge",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Resolving Binary Conflicts",
      "language": "bash",
      "description": "Git cannot insert text conflict markers inside binary assets. Use checkout flags to select files.",
      "code": "# 1. Keep our current branch logo image:\n$ git checkout --ours assets/logo.png\n\n# 2. Keep their incoming branch logo image:\n$ git checkout --theirs assets/logo.png\n\n# 3. Add to stage to mark resolved\n$ git add assets/logo.png"
    },
    {
      "name": "Listing Conflicted Files",
      "language": "bash",
      "description": "List only the file paths that are causing the merge block.",
      "code": "$ git diff --name-only --diff-filter=U\n\nsrc/app.js\nassets/logo.png"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Running manual merge resolution checks on command line.",
      "code": "# List status of unmerged files\ngit status --short | grep \"^UU\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Cancel the merge state inside Windows environments.",
      "code": "# Abort and discard all active merge conflicts\ngit merge --abort"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Inspect which commits introduced the conflict.",
      "code": "# Show the differences between the two branches for the conflicted file\ngit log --merge -p src/app.js"
    }
  ],
  "commonMistakes": [
    "Running `git commit` without running `git add` on resolved files, which fails because Git thinks conflicts are still unaddressed.",
    "Attempting to manually edit binary files to remove conflict markers (doing so will corrupt the binary structure)."
  ],
  "prevention": [
    "Merge or rebase frequently to minimize divergence between branches.",
    "Configure custom diff/merge settings for binary or specialized files inside your `.gitattributes` file."
  ],
  "faq": [
    {
      "question": "What is the difference between 'automatic merge failed' and a merge conflict?",
      "answer": "A merge conflict is the specific conflict within a file. 'Automatic merge failed' is the final notification returned by Git indicating it has paused the entire merge process because one or more conflicts occurred."
    },
    {
      "question": "How do I choose 'our' version of a file?",
      "answer": "Run 'git checkout --ours path/to/file' to keep the changes from your current branch."
    },
    {
      "question": "How do I choose 'their' version?",
      "answer": "Run 'git checkout --theirs path/to/file' to discard your local changes and accept the incoming branch's changes."
    },
    {
      "question": "How do I cancel the merge?",
      "answer": "Run 'git merge --abort' to cancel the merge and restore your files to the state they were in before you started the merge."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Merging chapters",
      "url": "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging"
    }
  ],
  "relatedErrors": [
    "merge-conflict"
  ],
  "quickFix": {
    "causes": [
      "Conflicting overlapping changes in merge branches files",
      "Binary files cannot be parsed or merged automatically by Git",
      "Submodule commits are out of sync between branches"
    ],
    "checklist": [
      "Run git diff --name-only --diff-filter=U",
      "Resolve conflicts or use git checkout --ours/--theirs",
      "Stage the resolved paths using git add",
      "Commit using git commit or git merge --continue"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Unresolved line modifications",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Conflicting modifications on binary assets",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Diverging git submodule commits reference",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot Automatic merge failed — Git Error Guide",
  "seoDescription": "Fix Automatic merge failed fast. This Git debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world code."
};

export default errorData;
