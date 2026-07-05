import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "non-fast-forward",
  "name": "non-fast-forward",
  "category": "git",
  "badges": [
    "Git Operations",
    "Push Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you try to push commits that do not build directly on top of the remote branch's head commit.",
  "meanDescription": "A non-fast-forward error happens when the history of your local branch has diverged from the remote branch. In a fast-forward push, Git can simply move the remote pointer forward in time because your commits are a direct extension of the remote's history. If the remote has new commits that are missing from your local history, Git rejects the push with a 'non-fast-forward' warning to protect the remote history from being rewritten.",
  "causes": [
    "Diverged commits on remote: Another user pushed changes to the same branch since your last fetch/pull operation.",
    "Amending local history: Running 'git commit --amend' or rebasing commits that have already been pushed to the remote repository.",
    "Force merges on remote: Pull requests merged on the remote repository (e.g. Squash and Merge) creating a different commit history."
  ],
  "solutions": [
    "Pull remote updates: Run 'git pull origin <branch_name>' to merge the remote updates into your local branch.",
    "Rebase local commits: Run 'git pull --rebase origin <branch_name>' to slide your local commits on top of the remote HEAD.",
    "Force-push safely: If you intentionally altered the branch history and want to overwrite the remote branch, run 'git push --force-with-lease'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": " ! [rejected]        main -> main (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/username/repository.git'",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "git push origin feature-xyz",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "To https://github.com/username/repository.git\n ! [rejected]        feature-xyz -> feature-xyz (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/username/repository.git'\nhint: Updates were rejected because the tip of your current branch is behind\nhint: its remote counterpart. Integrate the remote changes (e.g.\nhint: 'git pull ...') before pushing again.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Visualizing Branch Divergence",
      "language": "bash",
      "description": "Output branch commit graph splits to see where your local history diverged from the remote host.",
      "code": "$ git log --oneline --graph --all\n\n* a1b2c3d (HEAD -> feature-xyz) Local changes\n| * e5f6g7h (origin/feature-xyz) Remote updates pushed by teammate\n|/\n* 9z8y7x6 Base common commit"
    },
    {
      "name": "Linear History Rebase",
      "language": "bash",
      "description": "Resolve non-fast-forward rejects by rebasing your work directly on top of the remote changes.",
      "code": "# 1. Fetch remote tracking updates\n$ git fetch origin\n\n# 2. Rebase local commits onto origin HEAD\n$ git rebase origin/feature-xyz\n\n# 3. Push clean fast-forwardable history\n$ git push origin feature-xyz"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Visualizing local vs remote tracking heads on Linux terminals.",
      "code": "git show-branch"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Clean and test push configurations inside PowerShell.",
      "code": "# Fetch updates and check behind status\ngit fetch;\ngit status"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Safely force push changes to origin while checking if remote has newer commits.",
      "code": "git push --force-with-lease origin feature-xyz"
    }
  ],
  "commonMistakes": [
    "Running `git push -f` immediately after receiving the rejection message, which risks deleting changes pushed by team members.",
    "Attempting to pull changes using merge commits when the team policy mandates clean linear rebase histories."
  ],
  "prevention": [
    "Run `git fetch` before coding to make sure you are working off the latest version of the code.",
    "Do not amend or rewrite commit messages for commits that have already been pushed to a public remote branch."
  ],
  "faq": [
    {
      "question": "What is a non-fast-forward push?",
      "answer": "It is a push that would overwrite remote commits because your local branch does not have the latest remote commits inside its history."
    },
    {
      "question": "How does Git perform a fast-forward merge?",
      "answer": "When the target branch has no new commits, Git just moves the branch pointer forward to the commit on the source branch without creating a merge commit."
    },
    {
      "question": "Is it bad to force-push?",
      "answer": "Yes, if other developers are working on the same branch, force-pushing will overwrite their remote work and break their local tracking history. Avoid force-pushing to shared branches like 'main' or 'develop'."
    },
    {
      "question": "How do I prevent non-fast-forward errors?",
      "answer": "Pull remote updates frequently using 'git pull' or 'git fetch' before making changes to shared code paths."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Branching Fast Forward Merges",
      "url": "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merging"
    }
  ],
  "relatedErrors": [
    "failed-to-push-some-refs"
  ],
  "quickFix": {
    "causes": [
      "Tip of your current local branch is behind the remote tracking head",
      "You amended or rebased commits that were already pushed",
      "Remote branch was modified directly in web interface"
    ],
    "checklist": [
      "Run git fetch origin to update index",
      "Run git pull --rebase origin <branch>",
      "Resolve any commit conflicts",
      "Run git push origin <branch>"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "New commits pushed by others concurrently",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Amending commits already pushed to origin",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Remote squash merge creating history divergence",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix non-fast-forward in Git — Causes & Solutions",
  "seoDescription": "Learn how to fix non-fast-forward in Git. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly in."
};

export default errorData;
