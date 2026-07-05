import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "unable-to-locate-package",
  "name": "Unable to locate package",
  "category": "linux",
  "badges": [
    "Linux System",
    "APT Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when the APT package manager cannot find the specified package in its registered repository lists.",
  "meanDescription": "The 'Unable to locate package' error is thrown by the Debian/Ubuntu Advanced Package Tool (APT) manager when you attempt to install a package that does not exist in any of your system's active repository indexes. This commonly happens because the local APT package index cache is out of date, the repository hosting the package is not enabled (such as 'universe' or 'multiverse'), or there is a spelling typo in the package name.",
  "causes": [
    "Out-of-date local package cache: Trying to install a package on a fresh OS installation or container without running 'apt-get update' first.",
    "Spelling typo in package name: Spelling or naming convention mismatch for the package name.",
    "Disabled repository channels: The package exists in 'universe', 'multiverse', or third-party PPA repositories that are not registered on the server."
  ],
  "solutions": [
    "Update package lists cache: Run 'sudo apt-get update' to sync the latest package listings from repository servers.",
    "Verify package name spelling: Double check the spelling or search for matching package names using 'apt-cache search <query>'.",
    "Enable universe/multiverse channels: Add missing package channels using 'sudo add-apt-repository universe' or edit '/etc/apt/sources.list'."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "E: Unable to locate package nodejs",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to install a package in a fresh Docker container\napt-get install -y nodejs",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "Reading package lists... Done\nBuilding dependency tree... Done\nReading state information... Done\nE: Unable to locate package nodejs\n$ echo $?\n100",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Correct Container Install Flow",
      "language": "docker",
      "description": "Always run apt-get update in the same instruction layer before installing packages to ensure fresh index caches.",
      "code": "# Correct Dockerfile structure\nFROM ubuntu:22.04\n\n# Combine update and install to prevent caching stale indices\nRUN apt-get update && apt-get install -y \\\n    curl \\\n    git \\\n    && rm -rf /var/lib/apt/lists/*"
    },
    {
      "name": "Searching Package Database",
      "language": "bash",
      "description": "Search the local package database using keywords if the exact name throws locate errors.",
      "code": "# 1. Search database for nodejs keywords\n$ apt-cache search nodejs\n\n# Output displays matching records:\n# nodejs - evented I/O for V8 javascript\n# nodejs-doc - API documentation for nodejs"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux (Ubuntu/Debian)",
      "language": "bash",
      "description": "Enable standard community software repositories.",
      "code": "sudo add-apt-repository universe\nsudo apt update"
    },
    {
      "name": "Linux (CentOS/RHEL equivalent)",
      "language": "bash",
      "description": "CentOS equivalent missing package fix (using EPEL repository additions).",
      "code": "# Enable Enterprise Linux package repository\nsudo yum install -y epel-release\nsudo yum update"
    },
    {
      "name": "macOS (Homebrew equivalent)",
      "language": "bash",
      "description": "Add third-party repository formulas if brew cannot locate them.",
      "code": "brew tap mongodb/brew\nbrew install mongodb-community"
    }
  ],
  "commonMistakes": [
    "Running `apt-get update` and `apt-get install` in separate `RUN` blocks inside a Dockerfile. Docker will cache the update layer, leading to stale indices during future builds.",
    "Typing desktop package names directly on headless servers where GUI packages are not hosted."
  ],
  "prevention": [
    "Ensure network routing is active before calling repository updates.",
    "Verify the target package name exists on the official repository web portals (e.g. packages.ubuntu.com)."
  ],
  "faq": [
    {
      "question": "Why does APT say it cannot locate a package?",
      "answer": "APT relies on a local database of available packages. If you haven't updated this database recently or the package name is misspelled, APT won't know the package exists."
    },
    {
      "question": "How do I update the local APT database?",
      "answer": "Run 'sudo apt update' or 'sudo apt-get update' to fetch the latest package lists from Ubuntu/Debian mirrors."
    },
    {
      "question": "What is the 'universe' repository?",
      "answer": "The 'universe' repository contains community-maintained free and open-source software. Many packages (like certbot or nodejs) reside in universe and cannot be located until you run 'sudo add-apt-repository universe'."
    },
    {
      "question": "How do I search for a package when I don't know the exact name?",
      "answer": "Use the command 'apt-cache search <keyword>' to query the APT index database for matching names or descriptions."
    }
  ],
  "helpfulResources": [
    {
      "name": "Ubuntu Packages Search portal",
      "url": "https://packages.ubuntu.com/"
    }
  ],
  "relatedErrors": [
    "command-not-found"
  ],
  "quickFix": {
    "causes": [
      "Local APT package index cache has not been updated",
      "Spelling typo inside package parameters string",
      "Package resides in disabled repository channels (universe/multiverse)"
    ],
    "checklist": [
      "Run sudo apt-get update to update caches",
      "Search matching names: apt-cache search <package>",
      "Enable universe: sudo add-apt-repository universe",
      "Check sources.list configuration files"
    ],
    "estimatedTime": "2 minutes"
  },
  "causesTable": [
    {
      "cause": "Local APT index cache is stale (needs update)",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Spelling typo in package name parameter",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "Package resides in disabled repository channels (universe)",
      "frequency": "⭐⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "How to Fix Unable to locate package in Linux (With Examples)",
  "seoDescription": "Encountering Unable to locate package in Linux? Discover what triggers this error, how to diagnose it, and the best practices to fix and prevent it from."
};

export default errorData;
