import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../blog.module.css";

export const metadata: Metadata = {
  title: "25 Docker Errors and How to Fix Them — Container Diagnostics",
  description:
    "Troubleshoot Docker containerization errors. Read our complete reference catalog explaining 25 Docker daemon, image build, runtime, and networking errors.",
  keywords: [
    "docker errors and how to fix them",
    "cannot connect to docker daemon",
    "docker container exit code 137",
    "docker buildkit failed to solve",
    "devops container diagnostics",
    "docker socket permission denied",
    "docker port already allocated",
  ],
  alternates: {
    canonical: "https://www.errorcrate.com/blog/docker-errors-and-fixes",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "25 Docker Errors and How to Fix Them — Container Diagnostics",
    description: "Troubleshoot Docker containerization errors. Read our complete reference catalog explaining 25 Docker daemon, image build, and runtime exceptions.",
    url: "https://www.errorcrate.com/blog/docker-errors-and-fixes",
    type: "article",
    siteName: "ErrorCrate",
  },
  twitter: {
    card: "summary_large_image",
    title: "25 Docker Errors and How to Fix Them",
    description: "Learn to diagnose and repair 25 Docker daemon socket errors, build failures, and volume mounting issues.",
  },
};

export default function DockerErrorsBlog() {
  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <nav className={styles.breadcrumbs}>
        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <Link href="/blog" className={styles.breadcrumbLink}>Blog</Link>
        <span className={styles.breadcrumbSeparator}>›</span>
        <span className={styles.breadcrumbActive}>Docker Errors</span>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <span className={styles.badge}>DevOps Containers</span>
        <h1 className={styles.title}>25 Docker Errors and How to Fix Them: The Complete Container Debugging Catalog</h1>
        <div className={styles.metaRow}>
          <span className={styles.author}>By ErrorCrate Editorial</span>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span>Updated July 2026</span>
          <span className={styles.breadcrumbSeparator}>•</span>
          <span>16 min read</span>
        </div>
      </header>

      {/* Illustration */}
      <div className={styles.illustrationContainer}>
        <Image
          src="/images/blog/docker-errors-and-fixes.png"
          alt="Docker Errors Illustration"
          width={800}
          height={400}
          priority
          className={styles.illustration}
        />
      </div>

      {/* Content */}
      <article className={styles.content}>
        <p>
          Docker has revolutionized software engineering by standardizing the way applications are packaged, shipped, and run across environments. By encapsulating code inside lightweight containers, Docker solves the "it works on my machine" problem.
        </p>
        <p>
          However, containerization brings its own set of hurdles. Sockets, file system permissions, container resource constraints, and image registry configurations are frequent targets for compile-time and runtime exceptions. In this troubleshooting handbook, we break down 25 critical Docker errors and provide verified fixes to get your pipelines back on track.
        </p>

        <h2>Category 1: Docker Daemon & CLI Connections (1–6)</h2>
        <p>
          Errors that occur before container startup, typically due to background service failure or local socket permission constraints.
        </p>
        <ol>
          <li>
            <strong>Cannot Connect to the Docker Daemon:</strong> The CLI cannot locate or access the local Docker Unix socket. Usually means the docker service has crashed or is offline.
            <div className={styles.internalCallout}>
              <Link href="/docker/cannot-connect-to-the-docker-daemon" className={styles.internalCalloutLink}>Fixing Daemon Socket Connection →</Link>
            </div>
          </li>
          <li>
            <strong>Docker Daemon is Not Running:</strong> The background service (dockerd) has exited or failed to start due to local configuration errors.
            <div className={styles.internalCallout}>
              <Link href="/docker/docker-daemon-is-not-running" className={styles.internalCalloutLink}>Fixing Daemon Not Running →</Link>
            </div>
          </li>
          <li>
            <strong>Docker Socket Permission Denied:</strong> Accessing <code>/var/run/docker.sock</code> is blocked because the active host user is not in the <code>docker</code> security group.
            <div className={styles.internalCallout}>
              <Link href="/docker/docker-socket-permission-denied" className={styles.internalCalloutLink}>Fixing Socket Permissions →</Link>
            </div>
          </li>
          <li>
            <strong>failed to solve: rpc error: code = Unknown:</strong> A generic BuildKit engine error indicating that an instruction in the Dockerfile build process failed.
            <div className={styles.internalCallout}>
              <Link href="/docker/failed-to-solve" className={styles.internalCalloutLink}>Fixing BuildKit failed to solve →</Link>
            </div>
          </li>
          <li>
            <strong>Dockerfile Parse Error:</strong> The Dockerfile contains invalid command keywords or syntactical errors.
            <div className={styles.internalCallout}>
              <Link href="/docker/dockerfile-parse-error" className={styles.internalCalloutLink}>Fixing Dockerfile Parse Errors →</Link>
            </div>
          </li>
          <li>
            <strong>OCI Runtime Create Failed:</strong> Setup helper operations (like configuring cgroups or namespace mounts) failed during container initialization.
            <div className={styles.internalCallout}>
              <Link href="/docker/oci-runtime-create-failed" className={styles.internalCalloutLink}>Fixing OCI Runtime Failure →</Link>
            </div>
          </li>
        </ol>

        <h2>Category 2: Image Pull & Registry Configurations (7–12)</h2>
        <p>
          Exceptions raised when interacting with registry servers (like Docker Hub, ECR, or GCR) or checking local cached build layers.
        </p>
        <ol start={7}>
          <li>
            <strong>Image Not Found:</strong> The requested image identifier slug or name does not exist on the target registry index.
            <div className={styles.internalCallout}>
              <Link href="/docker/image-not-found" className={styles.internalCalloutLink}>Fixing Image Not Found →</Link>
            </div>
          </li>
          <li>
            <strong>Pull Access Denied:</strong> Access to the image repository is blocked because the registry is private and credentials are missing or incorrect.
            <div className={styles.internalCallout}>
              <Link href="/docker/pull-access-denied" className={styles.internalCalloutLink}>Fixing Pull Access Denied →</Link>
            </div>
          </li>
          <li>
            <strong>Manifest Unknown:</strong> The image registry contains the image repository, but the specific version tag requested does not exist.
            <div className={styles.internalCallout}>
              <Link href="/docker/manifest-unknown" className={styles.internalCalloutLink}>Fixing Manifest Unknown →</Link>
            </div>
          </li>
          <li>
            <strong>Docker Registry Credentials Invalid:</strong> The credentials file stored in config.json is malformed or login tokens have expired.
          </li>
          <li>
            <strong>No Space Left on Device:</strong> The docker partition storage disk is full, preventing new image download pulls.
            <div className={styles.internalCallout}>
              <Link href="/docker/no-space-left-on-device" className={styles.internalCalloutLink}>Fixing Docker Disk Space →</Link>
            </div>
          </li>
          <li>
            <strong>Layer Already Exists:</strong> A caching issue that triggers during docker push operations, indicating build metadata conflicts.
          </li>
        </ol>

        <h2>Category 3: Container Execution & Runtime Crashes (13–18)</h2>
        <p>
          Errors encountered during active container runtime or immediately following process invocation.
        </p>
        <ol start={13}>
          <li>
            <strong>Exit Code 137 / OOMKilled:</strong> The host kernel Out-of-Memory system terminated the container because its memory consumption exceeded limits.
            <div className={styles.internalCallout}>
              <Link href="/docker/container-exited-with-code-137" className={styles.internalCalloutLink}>Fixing Exit Code 137 →</Link>
            </div>
          </li>
          <li>
            <strong>Exit Code 125:</strong> The docker run command itself failed to execute, commonly due to invalid command line flags or driver settings.
            <div className={styles.internalCallout}>
              <Link href="/docker/exit-code-125" className={styles.internalCalloutLink}>Fixing Exit Code 125 →</Link>
            </div>
          </li>
          <li>
            <strong>Exit Code 126:</strong> The container entrypoint command cannot be executed, typically due to missing run permissions.
            <div className={styles.internalCallout}>
              <Link href="/docker/exit-code-126" className={styles.internalCalloutLink}>Fixing Exit Code 126 →</Link>
            </div>
          </li>
          <li>
            <strong>Exit Code 127:</strong> The command specified inside the container CMD or entrypoint cannot be located or is missing from PATH.
            <div className={styles.internalCallout}>
              <Link href="/docker/exit-code-127" className={styles.internalCalloutLink}>Fixing Exit Code 127 →</Link>
            </div>
          </li>
          <li>
            <strong>Entrypoint Script File Not Found:</strong> The script referenced by ENTRYPOINT does not exist inside the image, or uses Windows CRLF line endings instead of Unix LF.
          </li>
          <li>
            <strong>Read-only File System Exception:</strong> The application inside the container attempts to write files to a directory path mounted as read-only.
          </li>
        </ol>

        <h2>Category 4: Network & Volume Configurations (19–25)</h2>
        <p>
          Errors involving network bridge links, host port bindings, and storage directory volume mounts.
        </p>
        <ol start={19}>
          <li>
            <strong>Port is Already Allocated:</strong> The port requested by the container is already bound by another container or process on the host.
            <div className={styles.internalCallout}>
              <Link href="/docker/port-is-already-allocated" className={styles.internalCalloutLink}>Fixing Port Allocation →</Link>
            </div>
          </li>
          <li>
            <strong>Network Not Found:</strong> The user-defined network name specified via the <code>--network</code> option does not exist.
            <div className={styles.internalCallout}>
              <Link href="/docker/network-not-found" className={styles.internalCalloutLink}>Fixing Network Not Found →</Link>
            </div>
          </li>
          <li>
            <strong>Volume Not Found:</strong> The volume identifier specified in the volume mount command does not exist.
            <div className={styles.internalCallout}>
              <Link href="/docker/volume-not-found" className={styles.internalCalloutLink}>Fixing Volume Not Found →</Link>
            </div>
          </li>
          <li>
            <strong>Host Path Does Not Exist:</strong> The host directory path specified in a bind mount does not exist, causing Docker to fail to initialize the container.
          </li>
          <li>
            <strong>Docker DNS Resolution Failure:</strong> Containers fail to resolve external domain names, typically due to host system systemd-resolved socket configurations.
          </li>
          <li>
            <strong>Docker IP Pool Depleted:</strong> The local bridge network has exhausted its IP subnet allocations due to too many active containers.
          </li>
          <li>
            <strong>MTU Size Mismatch:</strong> Network packets are dropped because the MTU size of the docker network interface differs from the physical network interface.
          </li>
        </ol>

        <h2>Summary Diagnostics Checklist</h2>
        <p>
          To diagnose Docker issues quickly, follow this checks list:
        </p>
        <ol>
          <li>Always check container termination details using <code>docker inspect [container_id]</code>.</li>
          <li>Monitor container CPU and memory stats in real time using <code>docker stats</code>.</li>
          <li>Prune dead images, containers, and cache volumes regularly using <code>docker system prune -a --volumes</code>.</li>
        </ol>
      </article>
    </div>
  );
}
