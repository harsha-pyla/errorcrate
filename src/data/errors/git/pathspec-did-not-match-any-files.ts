import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "pathspec-did-not-match-any-files",
  "name": "pathspec did not match any files",
  "category": "git",
  "badges": [
    "Git Operations",
    "CLI Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you specify a file path or pattern in a Git command that does not exist in the working directory or is not tracked by Git.",
  "meanDescription": "This error is returned by the Git CLI when a path parameter (called a 'pathspec') provided to a command (like git checkout, git add, git restore, or git reset) cannot be resolved. Git throws this warning because the filename is misspelled, the path is relative to the wrong directory, or the file exists in the directory but has not been tracked or added to Git's index yet (especially during checkout/restore commands).",
  "causes": [
    "Spelling typo in file name or path: Typo in the file name or folder structure specified in the command.",
    "File not tracked by Git: Attempting to run checkout or restore on a new file that has never been staged or committed.",
    "Relative path mismatch: Your terminal is in a subdirectory, and you specified a path relative to the project root without adjusting the prefix."
  ],
  "solutions": [
    "Check file spelling: Verify the spelling and existence of the file in the working directory.",
    "Check untracked file status: Run 'git status' to check if the file is listed under untracked files.",
    "Use absolute or correct relative path: Adjust the path parameter relative to your active terminal directory."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "error: pathspec 'config.json' did not match any file(s) known to git",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to discard changes of an untracked file\ngit checkout config.json",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "error: pathspec 'config.json' did not match any file(s) known to git",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Adding Untracked Files First",
      "language": "bash",
      "description": "If you get a pathspec error when checking out or restoring a file, make sure it has been tracked by adding it to index first.",
      "code": "# 1. Track the file\n$ git add config.json\n\n# 2. Reset or check out now succeeds\n$ git reset HEAD config.json"
    },
    {
      "name": "Handling Windows Paths",
      "language": "bash",
      "description": "Convert Windows backslashes to Unix forward slashes when writing pathspecs in git commands.",
      "code": "# Wrong: pathspec 'src\\app\\index.js' did not match\n$ git add src\\app\\index.js\n\n# Correct\n$ git add src/app/index.js"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Find files inside terminal using standard search commands.",
      "code": "find . -name \"config.json\"\n# Or list matching files\nls -l src/"
    },
    {
      "name": "Windows",
      "language": "powershell",
      "description": "Verify file existence inside Windows environments.",
      "code": "# Test path existence\nTest-Path .\\config.json"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Utilize shell autocomplete checks to prevent typos.",
      "code": "# Press Tab key to autocomplete filenames\ngit add src/app/[Tab]"
    }
  ],
  "commonMistakes": [
    "Attempting to discard changes of a brand new file using `git checkout <file>`. Because the file was never tracked, Git cannot restore it. You must delete the file manually.",
    "Forgetting that Git paths are case-sensitive, even on Windows systems where the host operating system path resolution is case-insensitive."
  ],
  "prevention": [
    "Always use the `Tab` key to autocomplete file paths inside your terminal to prevent typos.",
    "Run `git status` beforehand to verify which files are staged, modified, or untracked."
  ],
  "faq": [
    {
      "question": "What is a pathspec in Git?",
      "answer": "A pathspec is a path pattern syntax Git uses to limit commands to a specific subset of files (e.g. 'src/*.js' or 'index.html')."
    },
    {
      "question": "Why does 'git checkout' throw pathspec did not match?",
      "answer": "If you run 'git checkout filename' to discard changes, but the file is new and untracked, Git has no record of it in its database and rejects the command. You should delete the untracked file manually instead."
    },
    {
      "question": "How do I fix path issues on Windows?",
      "answer": "Git commands internally use forward slashes (/) for paths. If you copy Windows backslashes (\\), it can result in a pathspec mismatch in some shells."
    },
    {
      "question": "How do I add all files without naming them?",
      "answer": "Run 'git add .' to stage all modified and untracked files in the current folder recursively."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Glossary Refspec and Pathspec",
      "url": "https://git-scm.com/docs/gitglossary#def_pathspec"
    }
  ],
  "relatedErrors": [
    "fatal-not-a-git-repository"
  ],
  "quickFix": {
    "causes": [
      "Spelling typo inside target filename or path string",
      "Target file is new and has never been tracked by Git",
      "Active directory terminal does not match relative path prefix"
    ],
    "checklist": [
      "Verify file spelling in directory listing",
      "Change backslashes to forward slashes",
      "Check git status for tracking state",
      "Delete untracked files manually if restoring"
    ],
    "estimatedTime": "1 minute"
  },
  "causesTable": [
    {
      "cause": "Spelling typo in filename or path specification",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Target file is untracked or not in index",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Incorrect relative path mapping from active terminal",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "pathspec did not match any files: Quick Fix Guide for Git.",
  "seoDescription": "Getting pathspec did not match any files in Git? This guide covers why it happens, common causes, quick fix checklists, and step-by-step solutions with code."
};

export default errorData;
