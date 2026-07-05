import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "command-not-found",
  "name": "command not found",
  "category": "linux",
  "badges": [
    "Linux System",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the shell cannot find the executable binary matching the command name in your system's PATH directories.",
  "meanDescription": "When you type a command in the terminal, the shell (such as bash or zsh) looks through a list of directories specified in the $PATH environment variable to locate the matching executable binary file. If the binary is not installed, the folder is missing from the $PATH list, or the command name has a spelling typo, the shell returns 'command not found'.",
  "causes": [
    "Binary program not installed: The software package hosting the executable is not installed on the system.",
    "Missing path in $PATH variable: The program is installed, but its directory is not listed inside your environment's $PATH variable (common for custom scripts or user installations).",
    "Spelling typo in command name: Typing errors in command invocation."
  ],
  "solutions": [
    "Install the package: Install the program using your system package manager (e.g. 'sudo apt install <package>').",
    "Add directory to PATH: Update your PATH variable in your shell profile configuration file (e.g. ~/.bashrc or ~/.zshrc).",
    "Verify spelling and path: Double check the spelling or run the executable directly using its absolute path (e.g. '/usr/local/bin/mycmd')."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "bash: git: command not found",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to run an uninstalled command\ngit --version",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "bash: git: command not found\n$ echo $?\n127",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Adding directories to PATH",
      "language": "bash",
      "description": "Append custom bin directories to your user's shell configuration variables profile to enable global access.",
      "code": "# 1. Append target export to shell configuration\n$ echo 'export PATH=\"$PATH:/usr/local/bin/custom\"' >> ~/.bashrc\n\n# 2. Reload shell configuration properties\n$ source ~/.bashrc\n\n# 3. Test command execution"
    },
    {
      "name": "Running Local Scripts",
      "language": "bash",
      "description": "Shell paths exclude the active directory by default. Prepend execution path dots to invoke local items.",
      "code": "# Wrong: command not found\n$ myscript.sh\n\n# Correct: tells shell to execute inside active folder\n$ ./myscript.sh"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux (Ubuntu/Debian)",
      "language": "bash",
      "description": "Install target package using standard Debian utility helper apt.",
      "code": "sudo apt update\nsudo apt install git -y"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "Verify environment variables paths mapped inside WSL partitions.",
      "code": "# Print active path directories\necho $PATH"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Install utilities using the Homebrew manager tool.",
      "code": "brew update\nbrew install git"
    }
  ],
  "commonMistakes": [
    "Forgetting to run `source ~/.bashrc` or restart the terminal window after updating your PATH variable, which leaves the old PATH profile active.",
    "Typing a command inside a new shell that does not support it (e.g. using `ll` command in environments that lack an alias mapping for `ls -la`)."
  ],
  "prevention": [
    "Verify binary availability using the `which` or `type` command (e.g. `which git` will print the path if installed).",
    "Document application binary dependencies inside project README files."
  ],
  "faq": [
    {
      "question": "What is the PATH variable?",
      "answer": "The PATH variable is a colon-separated list of directories ($PATH) that the shell searches when you execute a command."
    },
    {
      "question": "How do I print my active PATH?",
      "answer": "Run 'echo $PATH' in your shell to inspect all search directories."
    },
    {
      "question": "Why does it fail on script executions inside my current directory?",
      "answer": "For security reasons, Linux shells do not search the current directory (.) by default. To run a script in the active directory, prepend './' (e.g. './myscript.sh')."
    },
    {
      "question": "How do I permanently add a folder to my PATH?",
      "answer": "Add 'export PATH=\"$PATH:/path/to/folder\"' to your ~/.bashrc or ~/.zshrc file, then run 'source ~/.bashrc' to reload."
    }
  ],
  "helpfulResources": [
    {
      "name": "Linux Command Line Path variables",
      "url": "https://linuxjourney.com/page/path-variable"
    }
  ],
  "relatedErrors": [
    "permission-denied"
  ],
  "quickFix": {
    "causes": [
      "The program package is not installed on the server",
      "Program bin directory is not listed in active $PATH",
      "Spelling typo inside command invocation"
    ],
    "checklist": [
      "Run which <command> to check install state",
      "Install package using apt/yum/brew",
      "Export target path to ~/.bashrc or ~/.zshrc",
      "Prepend './' if launching local directory scripts"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Target binary package not installed on system",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Directory not added to environment $PATH variable",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in command name",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix command not found in Linux — Causes & Solutions",
  "seoDescription": "Troubleshoot command not found in Linux with verified fixes. This guide covers causes, debugging steps, code examples, and how to prevent this error in your."
};

export default errorData;
