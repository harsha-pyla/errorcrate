import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "authentication-failed",
  "name": "Authentication failed",
  "category": "git",
  "badges": [
    "Git Authentication",
    "HTTPS Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "Git failed to authenticate your credentials (username, password, or token) when accessing a remote repository over HTTPS.",
  "meanDescription": "This error occurs when you attempt to perform a remote Git operation (like git clone, git pull, or git push) over HTTPS, but the remote hosting provider (GitHub, GitLab, Bitbucket) rejects your credentials. In recent years, major Git providers have deprecated password-based HTTPS authentication in favor of Personal Access Tokens (PATs) or SSH keys. If you use your account password rather than a token, or if your credentials manager has cached expired credentials, the operation will be rejected.",
  "causes": [
    "Deprecated password authentication: Attempting to authenticate using your standard Git account password instead of a Personal Access Token (PAT).",
    "Expired Personal Access Token (PAT): The token used for HTTPS authentication has expired or lacks the necessary repository read/write scopes.",
    "Stale cached credentials: Your OS credential manager (like Windows Credential Manager or macOS Keychain) is holding expired credentials for the Git remote host."
  ],
  "solutions": [
    "Generate a Personal Access Token: Go to your Git hosting settings and generate a new PAT with 'repo' scope, then use it as your password.",
    "Update cached credentials: Clear or update the stored credentials inside your operating system's credential manager.",
    "Use Git Credential Manager: Enable helper utilities to automate authentication prompt updates."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "fatal: Authentication failed for 'https://github.com/username/repository.git/'",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "git push origin main\nUsername for 'https://github.com': myuser\nPassword for 'https://myuser@github.com': *******",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "remote: Support for password authentication was removed on August 13, 2021.\nremote: Please see https://docs.github.com/en/get-started/getting-started-with-git/about-githubs-policy-on-getting-personal-access-tokens for more information.\nfatal: Authentication failed for 'https://github.com/myuser/my-repo.git/'",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Updating URL with PAT Token",
      "language": "bash",
      "description": "Bypass credentials prompts entirely by embedding your Personal Access Token directly inside the remote URL path.",
      "code": "# Syntax:\n# git remote set-url origin https://<your_token>@github.com/username/repo.git\n\n$ git remote set-url origin https://ghp_MySecureTokenValueHere@github.com/myuser/my-repo.git\n$ git push origin main\n# Succeeds immediately without credential queries"
    },
    {
      "name": "Switching to SSH Auth",
      "language": "bash",
      "description": "Convert your repository connection path from HTTPS to SSH to avoid tokens entirely.",
      "code": "# 1. Verify current HTTPS URL\ngit remote -v\n\n# 2. Switch remote url to SSH format\ngit remote set-url origin git@github.com:myuser/my-repo.git\n\n# 3. Verify target SSH push functionality\ngit push origin main"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Clear stale credential helpers or use local memory caching on Linux hosts.",
      "code": "# Cache credentials in memory for 15 minutes\ngit config --global credential.helper cache\n\n# Or store credentials permanently on disk (unencrypted)\ngit config --global credential.helper store"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Resetting saved Git credentials inside Windows systems using Git Credential Manager.",
      "code": "# Erase stored cache credentials\ngit credential-manager reject https://github.com\n\n# Alternative: Open 'Credential Manager' in Control Panel and delete entries starting with git:https://github.com"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Updating or deleting expired passwords inside the macOS Keychain Access vault.",
      "code": "# List git credential items in Keychain\nsecurity find-internet-password -s github.com\n\n# Delete specific item to trigger prompt renew\nsecurity delete-internet-password -s github.com"
    }
  ],
  "commonMistakes": [
    "Typing your normal account password into the CLI prompt when pulling/pushing. You must paste your Personal Access Token (PAT) instead.",
    "Updating your password on the web interface but forgetting to refresh the entry saved inside your local OS credential manager."
  ],
  "prevention": [
    "Always switch to SSH keys (which do not expire as frequently as HTTP tokens) for local developer environments.",
    "Use developer CLI managers like `gh auth login` to keep sessions securely authenticated."
  ],
  "faq": [
    {
      "question": "Why does Git reject my password?",
      "answer": "GitHub and other major hosts disabled password authentication for Git CLI operations over HTTPS. You must generate and use a Personal Access Token (PAT) instead."
    },
    {
      "question": "How do I generate a Personal Access Token on GitHub?",
      "answer": "Go to Settings -> Developer settings -> Personal access tokens -> Tokens (classic) -> Generate new token. Ensure you select the 'repo' scope."
    },
    {
      "question": "How do I configure Git to remember my token?",
      "answer": "Enable a credential helper using 'git config --global credential.helper cache' or use the official Git Credential Manager."
    },
    {
      "question": "Can I switch to SSH instead?",
      "answer": "Yes. You can switch remote URLs to SSH by running: 'git remote set-url origin git@github.com:user/repo.git'."
    }
  ],
  "helpfulResources": [
    {
      "name": "GitHub Token Authentication policy",
      "url": "https://docs.github.com/en/get-started/getting-started-with-git/about-githubs-policy-on-getting-personal-access-tokens"
    },
    {
      "name": "Git Credential Manager Docs",
      "url": "https://github.com/git-ecosystem/git-credential-manager"
    }
  ],
  "relatedErrors": [
    "permission-denied-publickey",
    "repository-not-found"
  ],
  "quickFix": {
    "causes": [
      "Using standard account password instead of personal access token (PAT)",
      "Expired token scopes or invalid session tokens",
      "Stale or incorrect credentials cached in OS Keychain Manager"
    ],
    "checklist": [
      "Generate new PAT token in web settings",
      "Paste token as password when prompted",
      "Clear old cache entries in Keychain/Windows Credential Vault",
      "Try switching url helper to SSH instead"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Password used instead of access token (PAT)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Stale or expired cached credentials",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Insufficient token permission scopes",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Authentication failed Explained: Causes, Fixes & Prevention",
  "seoDescription": "Getting Authentication failed in Git? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code examples to."
};

export default errorData;
