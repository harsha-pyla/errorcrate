import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "author-identity-unknown",
  "name": "Author identity unknown",
  "category": "git",
  "badges": [
    "Git Configuration",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to create a Git commit but have not configured your name and email address.",
  "meanDescription": "Git requires an author name and email address associated with every commit to build the repository log history. When you run 'git commit' on a new machine or a fresh user profile without configuring these values, the Git engine throws this message and halts, as it cannot auto-detect valid defaults from the host operating system.",
  "causes": [
    "Missing global user configuration: You have never set your user.name or user.email config values globally.",
    "Fresh environment or Docker build stage: Running commits inside automated CI/CD runners or isolated containers without pre-seeding credentials.",
    "Corrupt global config file: The user's home '.gitconfig' settings file is missing or has incorrect formatting."
  ],
  "solutions": [
    "Configure global identity: Set global user details using 'git config --global user.name \"Name\"' and 'git config --global user.email \"email@example.com\"'.",
    "Configure local project identity: Use local flags (omit --global) to use a different email for a specific repository.",
    "Configure CI/CD environment variables: Seed identity using environment variables (e.g. GIT_AUTHOR_NAME and GIT_AUTHOR_EMAIL) inside build runner scripts."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "*** Please tell me who you are.\n\nRun\n\n  git config --global user.email \"you@example.com\"\n  git config --global user.name \"Your Name\"\n\nto set your account's default identity.\nOmit --global to set the identity only in this repository.\n\nfatal: unable to auto-detect email address (got 'user@localhost')",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to commit in a fresh environment\ngit commit -m \"initial commit\"",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "*** Please tell me who you are.\n\nRun\n\n  git config --global user.email \"you@example.com\"\n  git config --global user.name \"Your Name\"\n\nto set your account's default identity.\nfatal: unable to auto-detect email address",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Global Config Fix",
      "language": "bash",
      "description": "Establish a global user profile on your machine that applies to all repositories.",
      "code": "# 1. Set your name\n$ git config --global user.name \"John Doe\"\n\n# 2. Set your email\n$ git config --global user.email \"johndoe@example.com\"\n\n# 3. Verify settings\n$ git config --list | grep user"
    },
    {
      "name": "Local Repo Override",
      "language": "bash",
      "description": "Use a specific company email address for one repository without changing your global personal settings.",
      "code": "# Run inside the project directory (omit --global)\n$ git config user.email \"john.doe@company.com\"\n\n# Local config overrides global setting for this repository only"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Edit the global config file directly using text editors.",
      "code": "# Open global configuration file\nnano ~/.gitconfig\n# Verify content structure:\n# [user]\n#   name = John Doe\n#   email = johndoe@example.com"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Windows locations for git configurations check.",
      "code": "# Output content of global Windows config\nGet-Content $HOME\\.gitconfig"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Configure CI variables inside macOS deployment scripts.",
      "code": "export GIT_COMMITTER_NAME=\"CI Runner\"\nexport GIT_COMMITTER_EMAIL=\"ci@example.com\"\nexport GIT_AUTHOR_NAME=\"CI Runner\"\nexport GIT_AUTHOR_EMAIL=\"ci@example.com\""
    }
  ],
  "commonMistakes": [
    "Typing your GitHub account password into the `user.name` configuration parameter.",
    "Making spelling errors inside the `user.email` string, which will cause hosting providers (like GitHub) to fail to link commits to your profile contributions graph."
  ],
  "prevention": [
    "Include pre-commit identity validation checks inside developer onboarding scripts.",
    "Configure CI/CD templates to export `GIT_AUTHOR_NAME` variables automatically before invoking deploy actions."
  ],
  "faq": [
    {
      "question": "Why does Git need my email address?",
      "answer": "Git is a distributed version control system. Every commit is permanently stamped with the author's name and email to track who made what changes over time."
    },
    {
      "question": "What is the difference between global and local configuration?",
      "answer": "Global configuration applies to all repositories on your system (saved in ~/.gitconfig). Local configuration applies only to the current repository (saved in .git/config), overriding global values."
    },
    {
      "question": "Can I use a fake or anonymous email?",
      "answer": "Yes. You can use an anonymous email (like GitHub's no-reply email: 'username@users.noreply.github.com') to keep your personal email address private in public repository commits."
    },
    {
      "question": "How do I check what email Git is currently using?",
      "answer": "Run 'git config user.email' inside your project directory to see the active email configuration."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git First-Time Setup guide",
      "url": "https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup"
    }
  ],
  "relatedErrors": [
    "fatal-not-a-git-repository"
  ],
  "quickFix": {
    "causes": [
      "User details name and email have not been configured",
      "Fresh OS user profile or isolated Docker container builds environment",
      "Missing or corrupt global ~/.gitconfig settings file"
    ],
    "checklist": [
      "Set global name: git config --global user.name",
      "Set global email: git config --global user.email",
      "Verify configured settings using config --list",
      "Verify commit functionality"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "First time Git installation configuration missing",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "CI/CD runner execution environments",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Corrupted user home .gitconfig file",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Author identity unknown in Git (With Examples)",
  "seoDescription": "Resolve Author identity unknown in Git with this complete troubleshooting guide. Covers error causes, prevention strategies, code examples, and."
};

export default errorData;
