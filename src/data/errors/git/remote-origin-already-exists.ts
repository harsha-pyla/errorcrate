import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "remote-origin-already-exists",
  "name": "remote origin already exists",
  "category": "git",
  "badges": [
    "Git Operations",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to add a remote tracking connection named 'origin' when that name is already assigned to a remote URL.",
  "meanDescription": "Git uses remote names (like 'origin') as aliases for remote repository URLs. When you run 'git remote add origin <url>', Git attempts to register a new remote connection mapping. If the name 'origin' has already been assigned in your local repository configuration (e.g. from cloning, or previous setup commands), the client rejects the addition to prevent silent configuration overrides.",
  "causes": [
    "Adding remote to a cloned repository: Cloned repositories automatically register the clone source URL as 'origin'.",
    "Repeated remote setup command: Accidental re-running of 'git remote add origin' after it was already configured.",
    "Copying boilerplate templates: Blindly copying setup commands from hosting provider setup instructions."
  ],
  "solutions": [
    "Update the existing remote URL: Change the mapping of origin directly using 'git remote set-url origin <new_url>'.",
    "Remove the old remote first: Delete the existing remote alias using 'git remote remove origin' (or 'git remote rm origin'), then add the new one.",
    "Use a custom remote alias name: Assign a different connection name (e.g. 'git remote add upstream <url>') instead of 'origin'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "fatal: remote origin already exists.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to add origin again to an already configured repository\ngit remote add origin https://github.com/user/new-repo.git",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "fatal: remote origin already exists.\n$ echo $?\n128",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Checking Existing Remotes",
      "language": "bash",
      "description": "Inspect registered remote endpoints to check which URL is currently holding the origin name.",
      "code": "$ git remote -v\n\norigin  https://github.com/user/old-repo.git (fetch)\norigin  https://github.com/user/old-repo.git (push)"
    },
    {
      "name": "Updating URL Directly",
      "language": "bash",
      "description": "Replace the mapped remote URL for origin without deleting and recreating it.",
      "code": "# Overwrite the URL associated with origin\n$ git remote set-url origin https://github.com/user/new-repo.git\n\n# Confirm modifications\n$ git remote -v"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Auditing the local configuration file directly inside Linux environments.",
      "code": "# Cat the contents of local git configuration\ncat .git/config | grep -A 2 \"remote\""
    },
    {
      "name": "Windows",
      "language": "bash",
      "description": "Clean and re-configure remotes using removal steps.",
      "code": "# Remove the existing remote alias\ngit remote remove origin\n# Add the new remote target safely\ngit remote add origin https://github.com/user/new-repo.git"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Check and rename remote aliases to keep history tracked under a secondary head.",
      "code": "# Rename origin to old-origin\ngit remote rename origin old-origin"
    }
  ],
  "commonMistakes": [
    "Running `git remote add origin` inside a workspace that was already cloned, which yields this error because clones pre-seed the `origin` mapping.",
    "Editing `.git/config` manually and corrupting syntax formatting blocks, rendering the repository configuration invalid."
  ],
  "prevention": [
    "Run `git remote -v` to check tracking connections before executing remote additions.",
    "Use distinct descriptive remote names (e.g. `upstream`, `staging`, `production`) in multi-tier server setups."
  ],
  "faq": [
    {
      "question": "What is 'origin' in Git?",
      "answer": "'origin' is simply the default alias Git assigns to the main remote repository you cloned from or set up first."
    },
    {
      "question": "How do I see what URL is currently mapped to origin?",
      "answer": "Run 'git remote -v' to view all registered remote names and their target URLs."
    },
    {
      "question": "How do I rename origin to something else?",
      "answer": "Run 'git remote rename origin old-origin' to change its alias name."
    },
    {
      "question": "Where are these remote settings saved?",
      "answer": "They are stored in plain text inside the hidden '.git/config' file in your project's root folder under the '[remote \"origin\"]' section."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Remote Command docs",
      "url": "https://git-scm.com/docs/git-remote"
    }
  ],
  "relatedErrors": [
    "repository-not-found"
  ],
  "quickFix": {
    "causes": [
      "The 'origin' alias name is already registered in local repository configs",
      "Running remote setup instructions inside an already cloned repository workspace",
      "Repeated remote add commands executed in error"
    ],
    "checklist": [
      "Run git remote -v to check mapping",
      "Update URL: git remote set-url origin <url>",
      "Or remove remote: git remote remove origin",
      "Re-run git remote add origin <url>"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Re-running remote setup instructions",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Executing remote add inside cloned repository",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Copying remote setups scripts directly",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "remote origin already exists Explained: Causes, Fixes &.",
  "seoDescription": "Fix remote origin already exists fast. This Git debugging guide explains the root cause, shows common mistakes, and provides tested solutions with real-world."
};

export default errorData;
