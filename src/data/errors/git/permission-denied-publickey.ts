import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "permission-denied-publickey",
  "name": "Permission denied (publickey)",
  "category": "git",
  "badges": [
    "Git Authentication",
    "SSH Error",
    "Medium"
  ],
  "updatedAt": "June 2026",
  "shortDescription": "The \"Permission denied (publickey)\" error occurs when Git cannot authenticate your SSH key while connecting to a remote repository.",
  "meanDescription": "Git attempted to connect to the remote repository using SSH authentication. The SSH server rejected your identity because it could not verify your public key. Git stops the connection before any repository data is transferred. This usually happens because your SSH key is missing, not added to your Git account, or your SSH agent is not running.",
  "causes": [
    "No SSH key exists: An SSH keypair has not been generated on your local machine.",
    "SSH key not added to Git account: The public key is missing from your profile on GitHub, GitLab, or Bitbucket.",
    "Wrong remote URL: The repository clone URL is using SSH format, but you wanted to use HTTPS, or it points to the wrong account/repo.",
    "SSH agent is not running: The background service responsible for holding your private key is offline.",
    "Incorrect file permissions: The private key file (~/.ssh/id_ed25519) has loose permissions, causing OpenSSH to reject it.",
    "Wrong SSH configuration: The SSH config file (~/.ssh/config) references the wrong host alias or key path.",
    "Repository access denied: You do not have read or write permissions to the repository namespace.",
    "Wrong Git account: Your active SSH key belongs to a different account than the one hosting the private repository."
  ],
  "solutions": [
    "Generate a new SSH key: Generate a new key using the ed25519 algorithm by running 'ssh-keygen -t ed25519 -C \"you@example.com\"'.",
    "Start the SSH Agent: Initialize the background agent by running 'eval \"$(ssh-agent -s)\"'.",
    "Add the SSH Key: Load your private key into the agent session with 'ssh-add ~/.ssh/id_ed25519'.",
    "Copy and upload the public key: Copy the public key with 'cat ~/.ssh/id_ed25519.pub' and add it to your profile on GitHub/GitLab.",
    "Test the connection: Run 'ssh -T git@github.com' to verify that key authentication is functional.",
    "Verify Remote URL: Check your remote URL using 'git remote -v' and modify it if needed."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "git@github.com: Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "git push origin main",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "git@github.com: Permission denied (publickey).\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Before",
      "language": "bash",
      "description": "Running push commands when keys are not loaded or registered results in authentication denial.",
      "code": "$ git push origin main\n\nPermission denied (publickey)\nfatal: Could not read from remote repository.\n\nPlease make sure you have the correct access rights\nand the repository exists."
    },
    {
      "name": "After",
      "language": "bash",
      "description": "After loading the private key into the active SSH agent, Git successfully authenticates and pushes code.",
      "code": "$ ssh-add ~/.ssh/id_ed25519\nIdentity added: ~/.ssh/id_ed25519\n\n$ git push origin main\nEnumerating objects: 5, done.\nCounting objects: 100% (5/5), done.\nWriting objects: 100% (3/3), 326 bytes | 326.00 KiB/s, done.\nTotal 3 (delta 1), reused 0 (delta 0), pack-reused 0\nTo github.com:username/project.git\n   a1b2c3d..e5f6g7h  main -> main"
    }
  ],
  "serverExamples": [
    {
      "name": "macOS",
      "language": "text",
      "description": "Configure macOS to store key passphrases inside the system Keychain across restarts.",
      "code": "# Edit ~/.ssh/config file\nHost github.com\n  AddKeysToAgent yes\n  UseKeychain yes\n  IdentityFile ~/.ssh/id_ed25519"
    },
    {
      "name": "Linux",
      "language": "bash",
      "description": "Ensure private keys have secure access permissions (strictly read/write for owner only).",
      "code": "# 1. Set directory permission\nchmod 700 ~/.ssh\n\n# 2. Set private key permission\nchmod 600 ~/.ssh/id_ed25519\n\n# 3. Set public key permission\nchmod 644 ~/.ssh/id_ed25519.pub"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Start and configure the native SSH Agent service in Windows environments.",
      "code": "# 1. Run PowerShell as Administrator\n# 2. Start the ssh-agent service\nStart-Service ssh-agent\n\n# 3. Set startup type to Automatic\nSet-Service -Name ssh-agent -StartupType Automatic"
    }
  ],
  "commonMistakes": [
    "Uploading the private key (~/.ssh/id_ed25519) instead of the public key (~/.ssh/id_ed25519.pub) to Git hosting providers.",
    "Using SSH format remote URLs in public environments where only HTTPS outbound traffic is allowed through firewalls."
  ],
  "prevention": [
    "Always generate separate SSH keypairs for personal and professional Git hosting profiles.",
    "Use SSH configuration hosts mapping rules to manage multiple accounts without credentials clash."
  ],
  "faq": [
    {
      "question": "Can I use HTTPS instead?",
      "answer": "Yes. Instead of SSH (git@github.com:user/project.git), you can update the remote URL to use HTTPS: 'git remote set-url origin https://github.com/user/project.git'."
    },
    {
      "question": "How do I check my SSH key?",
      "answer": "Run 'ls -la ~/.ssh' to list all files inside your SSH directory and see if keys like id_ed25519 or id_rsa exist."
    },
    {
      "question": "How do I see loaded SSH keys?",
      "answer": "Run 'ssh-add -l' to view all keys currently loaded in your active SSH agent session."
    },
    {
      "question": "Can one SSH key work for multiple repositories?",
      "answer": "Yes. As long as the repositories belong to the same Git account, the same public key can authorize access for all of them."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git SSH Documentation",
      "url": "https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key"
    },
    {
      "name": "GitHub SSH Authentication Guide",
      "url": "https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
    },
    {
      "name": "GitLab SSH Keys Documentation",
      "url": "https://docs.gitlab.com/ee/user/ssh.html"
    },
    {
      "name": "OpenSSH Manual",
      "url": "https://www.openssh.com/manual.html"
    }
  ],
  "relatedErrors": [
    "authentication-failed",
    "repository-not-found"
  ],
  "quickFix": {
    "causes": [
      "SSH Key has not been added to your GitHub settings profile",
      "SSH agent is not running on your host machine",
      "Your private key file (~/.ssh/id_ed25519) lacks executable/read permissions"
    ],
    "checklist": [
      "Verify SSH key exists: ls -la ~/.ssh",
      "Start SSH Agent: eval \"$(ssh-agent -s)\"",
      "Add private key to agent: ssh-add ~/.ssh/id_ed25519",
      "Copy public key (cat ~/.ssh/id_ed25519.pub) and upload to GitHub",
      "Test authentication: ssh -T git@github.com"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "SSH Key not added to Git account",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "SSH agent not running or key not added",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Missing local SSH key pair",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Resolve Permission denied (publickey) — Git Debugging Guide",
  "seoDescription": "Resolve Permission denied (publickey) in Git with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
