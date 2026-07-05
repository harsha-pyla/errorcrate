import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "merge-conflict",
  "name": "Merge conflict",
  "category": "git",
  "badges": [
    "Git Operations",
    "Merge Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you merge two branches that have conflicting changes on the same lines of the same file, forcing manual resolution.",
  "meanDescription": "A merge conflict happens when Git cannot automatically reconcile differences between two commits. During a merge, rebase, or pull operation, if the same lines of a file have been changed differently in both branches, Git pauses the operation, inserts special conflict markers (<<<<<<<, =======, >>>>>>>) into the affected files, and requires you to manually resolve the differences before concluding the merge commit.",
  "causes": [
    "Concurrent changes on the same line: Two developers changed the exact same line of a file in different ways.",
    "File deleted in one branch but modified in another: One branch deleted a file while another branch made edits to it.",
    "Divergent line endings: Cross-platform differences (LF vs CRLF) modifying entire file formats, making Git perceive them as completely conflicting."
  ],
  "solutions": [
    "Identify and edit conflict markers: Open conflicting files, locate the conflict markers, and choose which changes to keep.",
    "Mark resolved and commit: Add resolved files using 'git add' and run 'git commit' to complete the merge.",
    "Abort the merge: If needed, stop the operation and revert back to your original branch state using 'git merge --abort'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "Auto-merging index.js\nCONFLICT (content): Merge conflict in index.js\nAutomatic merge failed; fix conflicts and then commit the result.",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Merge feature branch into main\ngit merge feature-branch",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Auto-merging index.js\nCONFLICT (content): Merge conflict in index.js\nAutomatic merge failed; fix conflicts and then commit the result.\n$ git status\nOn branch main\nYou have unmerged paths.",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Inside Conflict File",
      "language": "javascript",
      "description": "Conflict markers inserted by Git to show conflicting blocks in index.js.",
      "code": "<<<<<<< HEAD\nconst port = 3000; // Your change on main branch\n=======\nconst port = 8080; // Incoming change from feature branch\n>>>>>>> feature-branch"
    },
    {
      "name": "Resolving the Conflict",
      "language": "bash",
      "description": "Clean the file by removing markers and keeping the desired line, then stage and commit.",
      "code": "# 1. Edit index.js to resolve (keep port 8080):\n# const port = 8080;\n\n# 2. Stage the resolved file\n$ git add index.js\n\n# 3. Commit to conclude the merge\n$ git commit -m \"Merge feature-branch and resolve port conflict\""
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "Use command-line merge tools like Meld or Vimdiff to resolve conflicts graphically.",
      "code": "# Set default merge tool\ngit config --global merge.tool vimdiff\n# Open conflict resolution interface\ngit mergetool"
    },
    {
      "name": "Windows",
      "language": "text",
      "description": "Visual Studio Code provides inline lenses to instantly accept current, incoming, or both changes.",
      "code": "# Open conflicting project directory in VS Code\ncode .\n# Click 'Accept Incoming Change' displayed above the conflict markers"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "Abort merge operations to reset your branch back to normal clean status.",
      "code": "# Revert and wipe out current merge progress\ngit merge --abort"
    }
  ],
  "commonMistakes": [
    "Accidentally committing files with the raw Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) still written inside the code, leading to syntax compilation crashes.",
    "Forgetting to run `git commit` after adding (`git add`) the resolved conflict files."
  ],
  "prevention": [
    "Pull the destination branch (`main`) into your working branch frequently to resolve small conflicts early.",
    "Avoid making large formatting edits (like re-indenting entire files) in shared codebase files."
  ],
  "faq": [
    {
      "question": "What are conflict markers?",
      "answer": "Git inserts <<<<<<< to mark the beginning of your changes (HEAD), ======= as the separator, and >>>>>>> to mark the end of incoming changes from the merged branch."
    },
    {
      "question": "How do I undo a merge conflict state?",
      "answer": "You can safely abort the merge process and restore your previous branch state by running 'git merge --abort'."
    },
    {
      "question": "How do I resolve conflicts using a specific tool?",
      "answer": "Configure a merge tool using 'git config --global merge.tool <tool-name>' and run 'git mergetool'."
    },
    {
      "question": "Why did a pull command trigger conflicts?",
      "answer": "'git pull' runs 'git fetch' followed by 'git merge' under the hood. If your local changes clash with remote commits, the merge phase will trigger conflicts."
    }
  ],
  "helpfulResources": [
    {
      "name": "Git Merge Conflicts documentation",
      "url": "https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging#_basic_merge_conflicts"
    }
  ],
  "relatedErrors": [
    "automatic-merge-failed"
  ],
  "quickFix": {
    "causes": [
      "Simultaneous edits on the same lines of code on two different branches",
      "File deleted on one branch and edited on another branch",
      "Line endings formatting mismatch modifying code blocks"
    ],
    "checklist": [
      "Open conflict files in VS Code / IDE",
      "Remove all <<<, ===, >>> markers",
      "Run git add <file> to mark resolved",
      "Run git commit to complete the merge"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Simultaneous changes on the same lines of code",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "File deleted on one branch and edited on another",
      "frequency": "⭐⭐⭐"
    },
    {
      "cause": "Line endings formatting conflicts (LF vs CRLF)",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Debug Merge conflict in Git — Step-by-Step Fix",
  "seoDescription": "Merge conflict in Git — learn the exact causes and how to resolve them. Includes quick fix checklist, real code samples, and tips to avoid this error."
};

export default errorData;
