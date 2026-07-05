import { ErrorInfo } from "@/types";

const errorData: ErrorInfo = {
  "id": "read-only-file-system",
  "name": "Read-only file system",
  "category": "linux",
  "badges": [
    "Linux System",
    "File System Error",
    "Common"
  ],
  "updatedAt": "June 29, 2026",
  "shortDescription": "This error occurs when you attempt to write, modify, or delete files on a partition mounted with read-only permissions.",
  "meanDescription": "The 'Read-only file system' error is a standard POSIX system error associated with the error code EROFS. It indicates that the operating system blocked a write operation because the target block storage partition is mounted with read-only flags (ro). The kernel automatically remounts filesystems as read-only if it detects hardware errors, filesystem corruption, or bad blocks during active runtime checks, to prevent permanent data loss.",
  "causes": [
    "Kernel auto-remount on disk errors: The kernel detected filesystem corruption or bad blocks, automatically changing the mount state to read-only.",
    "Explicit mount option settings: The device was mounted using the 'ro' flag inside system tables (e.g. /etc/fstab).",
    "Docker volume container safety: Attaching host directories to container volumes using the read-only flag suffix (:ro)."
  ],
  "solutions": [
    "Remount filesystem as read-write: Run 'sudo mount -o remount,rw <mount_point>' to force write mode.",
    "Perform file system integrity checks: Repair disk corruption using the 'fsck' tool after unmounting the partition.",
    "Verify Docker volume suffixes: Check docker run parameters or compose files to ensure volumes do not carry the ':ro' suffix."
  ],
  "example": {
    "title": "Syntax representation",
    "code": "touch: cannot touch 'test.txt': Read-only file system",
    "language": "text"
  },
  "exampleRequest": {
    "title": "Before (Triggering CLI command)",
    "code": "# Trying to write when filesystem has entered read-only safety mode\ntouch /data/test.txt",
    "language": "bash"
  },
  "exampleResponse": {
    "title": "Terminal Output Example",
    "code": "touch: cannot touch '/data/test.txt': Read-only file system\n$ echo $?\n1",
    "language": "bash"
  },
  "frameworkExamples": [
    {
      "name": "Remounting Read-Write",
      "language": "bash",
      "description": "Force the kernel to update a partition's mount mode to read-write.",
      "code": "# 1. Inspect active mount options\n$ mount | grep \"/data\"\n/dev/sdb1 on /data type ext4 (ro,relatime)\n\n# 2. Remount with write access flags\n$ sudo mount -o remount,rw /data\n\n# 3. Confirm modifications\n$ mount | grep \"/data\"\n/dev/sdb1 on /data type ext4 (rw,relatime)"
    },
    {
      "name": "Repairing Corrupted Disk",
      "language": "bash",
      "description": "Repair file system metadata using filesystem checks (fsck). Always unmount before scanning.",
      "code": "# 1. Unmount the target partition safely\n$ sudo umount /dev/sdb1\n\n# 2. Run fsck to scan and fix blocks automatically\n$ sudo fsck -y /dev/sdb1\n\n# 3. Mount partition back\n$ sudo mount /dev/sdb1 /data"
    }
  ],
  "serverExamples": [
    {
      "name": "Linux",
      "language": "bash",
      "description": "List all read-only mounted filesystems on the server.",
      "code": "mount | grep -E ' (ro,'"
    },
    {
      "name": "Windows (WSL)",
      "language": "bash",
      "description": "WSL virtual machine disk states can fail during windows host wake transitions. Restarting WSL resets locks.",
      "code": "# Run inside Windows PowerShell to clean mount locks\nwsl --shutdown"
    },
    {
      "name": "macOS",
      "language": "bash",
      "description": "macOS locks down the system volume read-only by default for security.",
      "code": "# Check disk utility mounts profiles\ndiskutil info /"
    }
  ],
  "commonMistakes": [
    "Running `fsck` on an active, mounted partition. Doing so risks causing catastrophic file systems corruption.",
    "Ignoring disk error warnings in syslog logs, which typically precede kernel safety remounts."
  ],
  "prevention": [
    "Configure monitoring tools to scan `/var/log/syslog` or `dmesg` logs for disk device write faults.",
    "Ensure virtual machine disks reside on stable host SSD partitions."
  ],
  "faq": [
    {
      "question": "What is EROFS?",
      "answer": "EROFS is the POSIX system error code representing 'Read-only file system'."
    },
    {
      "question": "Why did my server disk suddenly become read-only?",
      "answer": "If the Linux kernel detects disk errors (like bad sectors or metadata corruption), it immediately remounts the filesystem as read-only to protect your data from further damage."
    },
    {
      "question": "How do I fix a corrupted filesystem?",
      "answer": "First unmount the partition ('sudo umount /dev/sdX1') and then run 'sudo fsck -y /dev/sdX1' to repair bad blocks. Never run fsck on a mounted filesystem."
    },
    {
      "question": "How do I remount a partition as read-write?",
      "answer": "Run 'sudo mount -o remount,rw /' (replacing / with your target partition mount path)."
    }
  ],
  "helpfulResources": [
    {
      "name": "mount(8) - Linux manual page",
      "url": "https://man7.org/linux/man-pages/man8/mount.8.html"
    },
    {
      "name": "fsck(8) - Linux manual page",
      "url": "https://man7.org/linux/man-pages/man8/fsck.8.html"
    }
  ],
  "relatedErrors": [
    "no-space-left-on-device"
  ],
  "quickFix": {
    "causes": [
      "Kernel remounted partition due to bad blocks/errors",
      "Partition is explicitly mounted read-only inside /etc/fstab",
      "Docker volumes mounted with ro parameters (:ro)"
    ],
    "checklist": [
      "Check mount status using mount command",
      "Remount partition: mount -o remount,rw <dir>",
      "Unmount and run fsck to repair bad sectors",
      "Check Docker volume mount flags"
    ],
    "estimatedTime": "4 minutes"
  },
  "causesTable": [
    {
      "cause": "Kernel safety remount due to disk corruption",
      "frequency": "⭐⭐⭐⭐⭐"
    },
    {
      "cause": "Docker volume mapped with read-only flag (:ro)",
      "frequency": "⭐⭐⭐⭐"
    },
    {
      "cause": "System mount tables configuration (/etc/fstab) error",
      "frequency": "⭐⭐"
    }
  ],
  "comments": [],
  "seoTitle": "Fix Read-only file system in Linux — Causes & Solutions",
  "seoDescription": "Learn how to fix Read-only file system in Linux. Understand the root causes, see real code examples, and apply verified solutions to resolve this error quickly."
};

export default errorData;
