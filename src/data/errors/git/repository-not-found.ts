import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "repository-not-found",
  "name": "Repository not found",
  "category": "git",
  "badges": [
    "Git Operations",
    "Remote Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "Git could not find the remote repository, which usually indicates a spelling typo, a private repository access restriction, or a deleted repository.",
  "meanDescription": "This error occurs when Git tries to download or query a remote repository, but the hosting server returns a 404 Not Found response. Because hosting providers (like GitHub) hide the existence of private repositories from unauthorized users to prevent reconnaissance, a mismatch in permissions or credentials will also trigger this generic 'repository not found' message instead of 'access denied'.",
  "causes": [
    "Spelling typo in repository name or URL: A simple spelling or capitalization typo in the remote URL.",
    "Private repository visibility shielding: The repository exists and is private, but your credentials do not have access rights.",
    "Repository has been deleted or moved: The repository was deleted by the owner or renamed (which breaks old URL links)."
  ],
  "solutions": [
    "Verify URL spelling: Inspect and correct the spelling of the namespace and repository name.",
    "Authenticate with read permissions: Ensure your active SSH key or PAT has access to the private repository.",
    "Update remote URL: Update the remote tracking address using 'git remote set-url origin <new_url>'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "fatal: repository 'https://github.com/username/non-existent-repo.git' not found",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "git clone https://github.com/wrong-user/private-repo.git",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Cloning into 'private-repo'...\nfatal: repository 'https://github.com/wrong-user/private-repo.git' not found",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Verifying Remote Mapping",
      "language": "bash",
      "description": "Inspect which remote URLs are currently tracked by your local repository repository configurations.",
      "code": "$ git remote -v\n\norigin  https://github.com/wrong-user/private-repo.git (fetch)\norigin  https://github.com/wrong-user/private-repo.git (push)"
    },
    {
      "name": "Updating Origin URL",
      "language": "bash",
      "description": "Correcting the target remote URL mapping to point to the valid path.",
      "code": "# Update remote endpoint address\n$ git remote set-url origin https://github.com/correct-user/private-repo.git\n\n# Verify tracking configuration\n$ git remote -v"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Verify SSH connectivity to GitHub to check if your key is successfully authenticated.",
      "code": "ssh -T git@github.com\n# Expected: Hi username! You've successfully authenticated..."
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Ensure the Windows Credential manager stores the correct token for private repositories.",
      "code": "# Clear stored credentials and trigger a fresh login prompt\ncmdkey /delete:LegacyGeneric:target=git:https://github.com"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check if Keychain stores invalid credentials for the target Git host.",
      "code": "# Search for github internet passwords in Keychain\nsecurity find-internet-password -s github.com"
    }
  ],
  "commonMistakes": [
    "Assuming the repository is missing when in reality it is a private repository and your active session lacks access authorization.",
    "Capitalization errors inside the Git host path (URLs are case-sensitive on many corporate hosting systems)."
  ],
  "prevention": [
    "Verify organization access settings inside your GitHub dashboard before requesting checkouts.",
    "Use standard SSH clone strings (which avoid local HTTP credentials cache conflicts)."
  ],
  "faq": [
    {
      "question": "Why does GitHub say 'repository not found' instead of 'permission denied'?",
      "answer": "To prevent hackers from discovering the names of private repositories, GitHub returns a generic 404 (Not Found) status for unauthorized requests."
    },
    {
      "question": "How do I check if my remote URL is correct?",
      "answer": "Run 'git remote -v' to view the URLs mapped to 'origin'."
    },
    {
      "question": "What do I do if the repository was renamed?",
      "answer": "Most Git providers set up automatic redirects, but you should update your remote URL manually using 'git remote set-url origin <new-url>'."
    },
    {
      "question": "Does this error happen on SSH clones?",
      "answer": "Yes, if the public key isn't registered, SSH will return 'Repository not found' or 'Permission denied (publickey)' depending on provider rules."
    }
  ],
  "helpfulResources": [
    {
      "name": "GitHub Remote Repositories help",
      "url": "https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories"
    }
  ],
  "relatedErrors": [
    "permission-denied-publickey",
    "authentication-failed"
  ],
  "quickFix": {
    "causes": [
      "Repository name spelling typo in remote URL path",
      "Lack of permissions to view private repository directories",
      "Repository renamed or deleted on remote master host"
    ],
    "checklist": [
      "Double check namespace and repo spelling",
      "Verify docker/git authorization credentials state",
      "Check organization member settings for private access",
      "Run git remote set-url origin <url> to fix"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Missing access rights to private repository",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in namespace or repo name",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Repository renamed or deleted on remote",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Repository not found in Git (With Examples)",
  "seoDescription": "Encountering Repository not found in Git? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from happening."
};

export default errorData;
