import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "fatal-not-a-git-repository",
  "name": "fatal: not a git repository",
  "category": "git",
  "badges": [
    "Git Operations",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you run a Git command outside of an initialized Git workspace or its subdirectories.",
  "meanDescription": "This error indicates that Git was executed in a directory that has not been initialized as a Git repository, and has no '.git' tracking folder in its directory hierarchy. When a Git command runs, the Git client searches the current directory and all parent directories recursively looking for the '.git' folder. If it reaches the root directory without finding one, it throws this exception and halts.",
  "causes": [
    "No repository initialization: Running Git commands in a brand new folder before running 'git init'.",
    "Wrong working directory: Your command terminal is active in a parent folder or sibling directory outside the cloned repository.",
    "Deleted or corrupted .git directory: The hidden '.git' metadata folder was accidentally deleted or corrupted."
  ],
  "solutions": [
    "Initialize a new repository: Run 'git init' to create the required '.git' tracking directory in the current folder.",
    "Navigate to the correct folder: Use 'cd' to move the terminal inside the actual cloned repository workspace.",
    "Clone the repository again: If the '.git' metadata database was corrupted or deleted, run 'git clone' to fetch a fresh workspace."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "fatal: not a git repository (or any of the parent directories): .git",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Running status in a generic non-git directory\ngit status",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "fatal: not a git repository (or any of the parent directories): .git\n$ echo $?\n128",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Initializing and Tracking Project",
      "language": "bash",
      "description": "Initialize the active directory to establish the Git database hierarchy and add files.",
      "code": "# 1. Initialize local Git database\n$ git init\nInitialized empty Git repository in /home/user/project/.git/\n\n# 2. Verify status is active\n$ git status\nOn branch main\nNo commits yet"
    },
    {
      "name": "Locating Git Root Path",
      "language": "bash",
      "description": "Query the top-level repository path folder to verify if you are inside a Git folder tree.",
      "code": "$ git rev-parse --show-toplevel\n\n# Outputs the absolute path to the root of your Git repository"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Look for hidden .git metadata directories in terminal files listing.",
      "code": "# Show hidden directories\nls -la | grep \"\\.git\""
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Hidden files are hidden by default in Windows PowerShell. Check folders using Force filters.",
      "code": "# Force lists hidden repository folders\nGet-ChildItem -Directory -Force | Where-Object { $_.Name -eq \".git\" }"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Search directory trees recursively for the closest git root.",
      "code": "# Locate the nearest parent .git directory\nfind . -name \".git\" -maxdepth 3"
    }
  ],
  "commonMistakes": [
    "Running global system commands inside the root directory or user directory by mistake instead of project subfolders.",
    "Deleting the hidden `.git` folder thinking it is garbage or temporary caching data, which breaks all local repository history."
  ],
  "prevention": [
    "Always check your current working directory using `pwd` on Linux/macOS or `Get-Location` on Windows before running Git commands.",
    "Use terminal prompts that display the active Git branch name automatically to know when you are in a valid repository."
  ],
  "faq": [
    {
      "question": "What does 'not a git repository' mean?",
      "answer": "It means Git cannot track changes in your current directory because there is no '.git' directory present in the folder tree."
    },
    {
      "question": "How do I fix this error?",
      "answer": "You can either navigate ('cd') into a folder that is already a Git repository, or initialize the current folder using the command 'git init'."
    },
    {
      "question": "Why did this error happen suddenly in a working project?",
      "answer": "This can happen if you accidentally deleted the hidden '.git' folder in your project's root directory, or if you opened the terminal inside the wrong parent directory."
    },
    {
      "question": "Can I run Git commands on subdirectories?",
      "answer": "Yes. As long as a parent folder contains the '.git' directory, you can run Git commands from any subdirectory inside the project."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Init reference manual",
      "url": "https://git-scm.com/docs/git-init"
    }
  ],
  "relatedErrors": [
    "repository-not-found"
  ],
  "quickFix": {
    "causes": [
      "Running commands outside a Git tracked directory",
      "Deleted or corrupt hidden .git metadata folder",
      "Active shell is in a parent/sibling folder"
    ],
    "checklist": [
      "Run git init to start tracking the folder",
      "Change directory (cd) to the project folder",
      "Check hidden files using ls -la / Get-ChildItem",
      "Verify top-level path using rev-parse"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Command executed in wrong working directory",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Brand new project directory without git init",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Accidentally deleted or missing .git folder",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix fatal: not a git repository Fast — Git Solutions Guide",
  "seoDescription": "Complete guide to fixing fatal: not a git repository in Git. Includes root cause analysis, step-by-step solutions, framework-specific examples, and prevention."
};

export default errorData;
