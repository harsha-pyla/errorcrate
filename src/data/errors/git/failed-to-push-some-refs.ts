import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "failed-to-push-some-refs",
  "name": "failed to push some refs",
  "category": "git",
  "badges": [
    "Git Operations",
    "Push Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to push local commits to a remote repository that contains commits you do not have locally.",
  "meanDescription": "This error is triggered when Git rejects a push operation because your local branch is behind its remote counterpart. This typically happens when another team member has pushed updates to the remote repository after your last pull. To prevent you from overwriting their changes, Git blocks your push until you fetch and integrate the new remote commits into your local branch.",
  "causes": [
    "Remote branch contains newer commits: Another developer has pushed commits to the remote branch that you do not have locally.",
    "Non-fast-forward push attempt: The remote branch history has diverged from your local history, making a fast-forward merge impossible.",
    "Branch protection rules: The remote hosting service blocks direct pushes to the branch (e.g. protected 'main' branch requiring Pull Request approvals)."
  ],
  "solutions": [
    "Pull remote changes first: Run 'git pull origin <branch_name>' to fetch and merge the latest remote commits.",
    "Rebase onto remote changes: Run 'git pull --rebase origin <branch_name>' to replay your local commits on top of the remote changes.",
    "Force push (use with caution): Run 'git push --force-with-lease' if you explicitly intend to overwrite remote history and are sure no one else's work will be lost."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "error: failed to push some refs to 'https://github.com/username/repository.git'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally. This is usually caused by another repository pushing...",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to push commits while remote branch is ahead\ngit push origin main",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "To https://github.com/username/repository.git\n ! [rejected]        main -> main (non-fast-forward)\nerror: failed to push some refs to 'https://github.com/username/repository.git'\nhint: Updates were rejected because the remote contains work that you do\nhint: not have locally. This is usually caused by another repository pushing\nhint: to the same ref. You may want to first integrate the remote changes\nhint: (e.g., 'git pull ...') before pushing again.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Integrating Remote Commits",
      "language": "bash",
      "description": "Fetch and merge the latest remote history into your local tracking branch, then push again.",
      "code": "# 1. Pull changes to reconcile branch history\n$ git pull origin main\n\n# 2. Stage and commit any merge conflicts if they occur, then push\n$ git push origin main"
    },
    {
      "name": "Pulling with Rebase",
      "language": "bash",
      "description": "Rebase your local commits on top of remote changes to maintain a clean linear branch history.",
      "code": "# Pull and replay local commits on top of remote HEAD\n$ git pull --rebase origin main\n\n# Push clean history\n$ git push origin main"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify tracking branch names matching the remote repository.",
      "code": "# Check local branch and tracking status\ngit branch -vv"
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Configure Git pull default behavior settings globally to prevent divergent branch hints.",
      "code": "# Set default pull strategy to merge\ngit config --global pull.rebase false\n\n# Or set to rebase\ngit config --global pull.rebase true"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Safely force pushing when remote history needs to be overwritten.",
      "code": "# Force-push checking that no remote updates are lost\ngit push --force-with-lease origin main"
    }
  ],
  "commonMistakes": [
    "Using raw `git push --force` without verifying if teammates have pushed new commits, which permanently destroys their work on the remote server.",
    "Forgetting to check which branch you are currently on before running pull/push operations."
  ],
  "prevention": [
    "Run `git fetch` regularly to inspect remote updates before writing code on the same lines.",
    "Utilize short-lived, feature-specific branches instead of committing directly to the shared `main` or `developer` branches."
  ],
  "faq": [
    {
      "question": "What does 'failed to push some refs' mean?",
      "answer": "It means the remote branch has commits that you do not have locally, so Git blocks the push to prevent overwriting other developers' changes."
    },
    {
      "question": "How do I fix it?",
      "answer": "Run 'git pull origin <branch-name>' to pull the remote commits, resolve any conflicts if they occur, and then run 'git push' again."
    },
    {
      "question": "What is the difference between '--force' and '--force-with-lease'?",
      "answer": "'--force' will overwrite the remote branch regardless of its state. '--force-with-lease' checks if someone else has pushed new commits since your last fetch; if so, it aborts, protecting their work from being overwritten."
    },
    {
      "question": "Why does 'git pull' fail with 'reconcile divergent branches'?",
      "answer": "Modern Git requires you to specify a merge or rebase strategy when histories diverge. Run 'git config pull.rebase false' (to merge) or 'git config pull.rebase true' (to rebase) globally."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Push documentation",
      "url": "https://git-scm.com/docs/git-push"
    }
  ],
  "relatedErrors": [
    "non-fast-forward",
    "merge-conflict"
  ],
  "quickFix": {
    "causes": [
      "Remote repository branch contains commits you lack locally",
      "Your branch history diverged from the remote tracking head",
      "Direct pushing is blocked by remote branch protection rules"
    ],
    "checklist": [
      "Run git pull origin <branch-name>",
      "Resolve merge conflicts if they occur",
      "Run git push --force-with-lease to override safely",
      "Verify branch configuration using git branch -vv"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Newer commits exist on remote branch",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Remote branch is protected (rules constraint)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Diverged local history via git commit --amend",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "failed to push some refs Error: Root Causes & Verified Fixes",
  "seoDescription": "Encountering failed to push some refs in Git? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
