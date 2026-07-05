import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "permission-denied-publickey",
  "name": "Permission denied (publickey)",
  "category": "linux",
  "badges": [
    "Linux Security",
    "SSH Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to connect to a remote server via SSH, but the server rejects your authentication credentials.",
  "meanDescription": "The SSH 'Permission denied (publickey)' error occurs during the authentication phase of an SSH handshake. It indicates that the remote server rejected your connection because it could not find a matching public key inside the target user's '~/.ssh/authorized_keys' file, the private key file on your client machine has insecure permissions, or the remote SSH daemon configuration blocks key authentication.",
  "causes": [
    "Missing public key on server: Your public key (~/.ssh/id_rsa.pub) has not been added to the remote server's '~/.ssh/authorized_keys' file.",
    "Insecure client-side file permissions: Your private key file (e.g. id_rsa) has permissions that are too open (e.g. chmod 777), causing the SSH client to refuse to use it.",
    "Insecure remote-side folder permissions: The remote '~/.ssh' directory or '~/.ssh/authorized_keys' file has permissions that are too open, causing the SSH daemon to ignore them."
  ],
  "solutions": [
    "Authorize public key: Copy your client public key to the remote server's authorized keys list using 'ssh-copy-id user@host'.",
    "Set secure client permissions: Change your local private key file permissions to read-only for your user account ('chmod 600 ~/.ssh/id_rsa').",
    "Set secure remote permissions: Set remote SSH folders permissions to secure standard values ('chmod 700 ~/.ssh' and 'chmod 600 ~/.ssh/authorized_keys')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Permission denied (publickey).",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to connect to remote server using SSH\nssh user@192.168.1.50",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "user@192.168.1.50: Permission denied (publickey).\n$ echo $?\n255",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Correcting Private Key Permissions",
      "language": "bash",
      "description": "Establish narrow permissions on client private keys to allow the SSH utility to load them.",
      "code": "# 1. Inspect local permissions (too open is rejected)\n$ ls -l ~/.ssh/id_rsa\n-rwxrwxrwx 1 user group 1675 Jun 29 08:00 /home/user/.ssh/id_rsa\n\n# 2. Lock down permissions to owner read/write only\n$ chmod 600 ~/.ssh/id_rsa\n\n# 3. Add to local ssh-agent session\n$ ssh-add ~/.ssh/id_rsa"
    },
    {
      "name": "Seeding Remote Authorized Keys",
      "language": "bash",
      "description": "Copy your local public key to the remote server's authorized directory using ssh-copy-id.",
      "code": "# 1. Transfer public key file contents automatically\n$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@192.168.1.50\n\n# 2. If ssh-copy-id is not available, append key manually:\n# cat ~/.ssh/id_rsa.pub | ssh user@192.168.1.50 \"mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Run SSH connections with verbose logging flags to trace handshake details.",
      "code": "ssh -v user@192.168.1.50"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Fix Windows OpenSSH key permissions in PowerShell.",
      "code": "# Remove inheritance and grant explicit access only to current user\nicacls .\\id_rsa /inheritance:r\nicacls .\\id_rsa /grant:r \"$($env:USERNAME):(R,W)\""
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Add key to Apple Keychain to persist across shell restarts.",
      "code": "ssh-add --apple-use-keychain ~/.ssh/id_rsa"
    }
  ],
  "commonMistakes": [
    "Leaving the parent remote home directory writeable by others (e.g. `/home/user` set to 777). The remote SSH daemon will silently refuse to read the authorized_keys file under insecure home folders.",
    "Forgetting to load keys into the local active ssh-agent session when using passphrase-protected credentials."
  ],
  "prevention": [
    "Audit sshd_config options (`AuthorizedKeysFile` paths) regularly on destination hosts.",
    "Utilize modern SSH key formats (like Ed25519) that offer better performance and security than legacy RSA keys."
  ],
  "faq": [
    {
      "question": "What does 'Permission denied (publickey)' mean?",
      "answer": "It means the remote SSH server has public key authentication enabled, but none of the private keys offered by your client match the authorized keys listed on the server."
    },
    {
      "question": "How do I fix insecure private key permissions?",
      "answer": "Run 'chmod 600 ~/.ssh/id_rsa' to restrict the file to read/write for the owner only. SSH blocks keys that can be read by other users."
    },
    {
      "question": "How do I copy my public key to the remote server?",
      "answer": "Use the automated tool: 'ssh-copy-id user@remote-host'. If that fails, manually copy the content of 'id_rsa.pub' and append it to the remote server's '~/.ssh/authorized_keys' file."
    },
    {
      "question": "Why is the remote server ignoring my authorized_keys?",
      "answer": "Ensure the remote user's directory permissions are secure. The home directory must not be writeable by others (max 755), '~/.ssh' must be 700, and '~/.ssh/authorized_keys' must be 600. The SSH daemon rejects keys if these folders are writeable by others."
    }
  ],
  "helpfulResources": [
    {
      "name": "OpenSSH official manual page",
      "url": "https://www.openssh.com/manual.html"
    }
  ],
  "relatedErrors": [
    "permission-denied"
  ],
  "quickFix": {
    "causes": [
      "Client public key not listed in remote authorized_keys file",
      "Local private key permissions are too permissive (must be 600)",
      "Remote .ssh folder permissions are too permissive (must be 700)"
    ],
    "checklist": [
      "Set local key permission: chmod 600 ~/.ssh/id_rsa",
      "Verify remote directory has chmod 700 ~/.ssh permissions",
      "Append local public key to remote authorized_keys file",
      "Trace connections with verbose flags: ssh -v"
    ],
    "estimatedTime": "3 minutes"
  },
  "causesTable": [
    {
      "cause": "Public key not added to remote authorized_keys",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Insecure local private key permissions (chmod 600 missing)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Insecure remote .ssh/ folder permissions (chmod 700 missing)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Permission denied (publickey): Complete Linux.",
  "seoDescription": "Troubleshoot Permission denied (publickey) in Linux with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this."
};

export default errorData;
