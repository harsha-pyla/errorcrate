import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "src-refspec-does-not-match-any",
  "name": "src refspec does not match any",
  "category": "git",
  "badges": [
    "Git Operations",
    "Push Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to push a branch that does not exist in your local repository or has no commits yet.",
  "meanDescription": "This error is thrown by the Git client when the source branch (refspec) you specify in a push command (e.g. 'git push origin main') cannot be found on your local system. In Git, a branch pointer is not created until you make at least one commit. Common causes include trying to push to 'main' when your active branch is named 'master', typos in branch names, or trying to push a newly initialized repository before committing any files.",
  "causes": [
    "No commits in repository: The repository is empty (newly initialized) and has no commits, so the default branch has not been created yet.",
    "Branch name mismatch: Trying to push 'main' but the local branch is named 'master' (or vice versa).",
    "Branch name spelling typo: A typo in the branch name parameter during the push command."
  ],
  "solutions": [
    "Create a commit first: Stage files using 'git add' and run 'git commit' to initialize the active branch.",
    "Rename branch to main: Rename the active branch to match the destination branch using 'git branch -M main'.",
    "Check active branch name: Run 'git branch' or 'git status' to verify the exact spelling of your current local branch."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "error: src refspec main does not match any\nerror: failed to push some refs to 'https://github.com/username/repository.git'",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to push to remote main immediately after init\ngit init\ngit remote add origin https://github.com/user/repo.git\ngit push -u origin main",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "error: src refspec main does not match any\nerror: failed to push some refs to 'https://github.com/user/repo.git'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Creating First Commit",
      "language": "bash",
      "description": "Ensure your repository has at least one commit before attempting to push branches to a remote server.",
      "code": "# 1. Create a dummy file\n$ echo \"# My Project\" > README.md\n\n# 2. Stage and commit files\n$ git add README.md\n$ git commit -m \"first commit\"\n\n# 3. Push now succeeds\n$ git push -u origin master"
    },
    {
      "name": "Renaming Master to Main",
      "language": "bash",
      "description": "Convert old default master branches to main to align with modern Git host conventions.",
      "code": "# Rename current branch to 'main' forcefully\n$ git branch -M main\n\n# Push to origin main\n$ git push -u origin main"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Check currently checked out active branch names on Linux.",
      "code": "git branch --show-current"
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "List all local branches to inspect exact casing and spelling.",
      "code": "# List local branch records\ngit branch"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Set global Git settings to automatically initialize new repos with 'main' as default.",
      "code": "git config --global init.defaultBranch main"
    }
  ],
  "commonMistakes": [
    "Trying to push to `origin main` when local branch is named `master`, which yields a refspec mismatch because Git cannot map the non-existent local `main` pointer.",
    "Forgetting to stage files using `git add` before attempting a commit, leaving the workspace empty."
  ],
  "prevention": [
    "Run `git status` frequently to confirm branch states and staging queues.",
    "Configure your global Git profile to use modern standard default branch configurations."
  ],
  "faq": [
    {
      "question": "What is a refspec?",
      "answer": "A refspec is a format Git uses to map local branches (source) to remote branches (destination). It is written as 'local_branch:remote_branch'."
    },
    {
      "question": "Why does 'main' not exist in a new repository?",
      "answer": "Git does not create the default branch pointer until the first commit is created. An empty repository has no branches."
    },
    {
      "question": "How do I rename 'master' to 'main'?",
      "answer": "Run 'git branch -M main' to force-rename your active branch to 'main'."
    },
    {
      "question": "How do I check what branches exist locally?",
      "answer": "Run 'git branch' to list all local branches. The one marked with an asterisk (*) is your active branch."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Refspec reference",
      "url": "https://git-scm.com/book/en/v2/Git-Internals-The-Refspec"
    }
  ],
  "relatedErrors": [
    "failed-to-push-some-refs"
  ],
  "quickFix": {
    "causes": [
      "No commits have been made in the repository yet",
      "Local branch name differs from remote name (master vs main)",
      "Typo in the source branch name parameter string"
    ],
    "checklist": [
      "Verify you have made at least one commit",
      "Check active branch name using git branch",
      "Rename active branch: git branch -M main",
      "Push using git push -u origin main"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "No commits yet in newly initialized repository",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Local branch name mismatch (master vs main)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Typo in local branch name string",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Troubleshoot src refspec does not match any — Git Error.",
  "seoDescription": "Complete guide to fixing src refspec does not match any in Git. Includes root cause analysis, step-by-step solutions, framework-specific examples, and."
};

export default errorData;
