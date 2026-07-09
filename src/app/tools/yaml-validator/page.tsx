"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";

export default function YamlValidatorPage() {
  const [rawInput, setRawInput] = useState("");
  const [formattedOutput, setFormattedOutput] = useState("");
  const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");
  const [error, setError] = useState<string | null>(null);
  const [outputFormat, setOutputFormat] = useState<"yaml" | "json">("yaml");
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sampleYaml = `# Database Setup Configuration
database:
  driver: postgresql
  host: 127.0.0.1
  port: 5432
  databaseName: errorcrate_db
  pooling: true
  maxConnections: 20

# System Settings
app:
  name: ErrorCrate Engine
  version: 1.1.0
  debugMode: false
  allowedHosts:
    - localhost
    - errorcrate.com
  securityKeys: null`;

  const faqItems = [
    {
      question: "Why are tab characters forbidden in YAML?",
      answer: "The YAML specification explicitly forbids tab characters to ensure formatting consistency across different code editors and operating systems. You must indent using spaces only."
    },
    {
      question: "What are the common validation errors detected?",
      answer: "Our tool analyzes YAML line patterns to flag tab characters, verify proper indentation nesting hierarchies, and verify that colons are followed by space qualifiers (key: value)."
    },
    {
      question: "Can I convert configurations to JSON format?",
      answer: "Yes! Paste your YAML block and click 'Convert to JSON' to execute a client-side conversion parser."
    },
    {
      question: "Is my YAML code evaluated securely?",
      answer: "Yes, entirely. The verification parser runs completely client-side in native JavaScript. Your configuration settings are never transmitted over the internet."
    }
  ];

  const handleLoadSample = () => {
    setRawInput(sampleYaml);
    setStatus("idle");
    setError(null);
    setFormattedOutput("");
  };

  const handleClear = () => {
    setRawInput("");
    setFormattedOutput("");
    setStatus("idle");
    setError(null);
  };

  const validateYaml = (yaml: string): { valid: boolean; error: string | null } => {
    const lines = yaml.split("\n");
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const lineNum = i + 1;

      if (/^\t+/.test(line) || /^\s*\t+/.test(line)) {
        return {
          valid: false,
          error: `Tab characters are forbidden in YAML indentation (Line ${lineNum}). Use space characters instead.`
        };
      }

      const colonMatch = line.match(/^(\s*[^:]+):[^\s/](.*)/);
      if (colonMatch) {
        const beforeColon = colonMatch[1];
        if (!beforeColon.includes("http") && !beforeColon.includes("https")) {
          return {
            valid: false,
            error: `Missing space after colon separator (Line ${lineNum}). Colons must be followed by a space (e.g., \"key: value\").`
          };
        }
      }
    }
    return { valid: true, error: null };
  };

  const handleValidate = () => {
    if (!rawInput.trim()) {
      setStatus("idle");
      setError(null);
      setFormattedOutput("");
      return;
    }

    const check = validateYaml(rawInput);
    if (check.valid) {
      setStatus("valid");
      setError(null);
      setOutputFormat("yaml");
      setFormattedOutput(rawInput.trim());
    } else {
      setStatus("invalid");
      setError(check.error);
      setFormattedOutput("");
    }
  };

  const yamlToJson = (yamlStr: string): string => {
    const lines = yamlStr.split("\n").filter((l) => l.trim() && !l.trim().startsWith("#"));
    const result: any = {};
    const stack: { indent: number; ref: any }[] = [{ indent: -1, ref: result }];

    lines.forEach((line) => {
      const indent = line.search(/\S/);
      const trimmed = line.trim();

      if (trimmed.startsWith("-")) {
        const itemVal = trimmed.substring(1).trim().replace(/^['"]|['"]$/g, "");
        const parent = stack[stack.length - 1].ref;
        if (Array.isArray(parent)) {
          parent.push(itemVal);
        }
        return;
      }

      const colonIdx = trimmed.indexOf(":");
      if (colonIdx === -1) return;

      const key = trimmed.substring(0, colonIdx).trim().replace(/^['"]|['"]$/g, "");
      const valStr = trimmed.substring(colonIdx + 1).trim();

      let val: any = valStr;
      if (valStr === "true") val = true;
      else if (valStr === "false") val = false;
      else if (valStr === "null") val = null;
      else if (!isNaN(Number(valStr)) && valStr !== "") val = Number(valStr);
      else val = valStr.replace(/^['"]|['"]$/g, "");

      while (stack.length > 1 && stack[stack.length - 1].indent >= indent) {
        stack.pop();
      }

      const currentParent = stack[stack.length - 1].ref;

      if (valStr === "") {
        currentParent[key] = {};
        stack.push({ indent, ref: currentParent[key] });
      } else if (valStr.startsWith("-")) {
        currentParent[key] = [];
        stack.push({ indent, ref: currentParent[key] });
      } else {
        currentParent[key] = val;
      }
    });

    return JSON.stringify(result, null, 2);
  };

  const handleConvertToJSON = () => {
    if (!rawInput.trim()) return;

    const check = validateYaml(rawInput);
    if (!check.valid) {
      setStatus("invalid");
      setError(check.error);
      setFormattedOutput("");
      return;
    }

    try {
      const json = yamlToJson(rawInput);
      setStatus("valid");
      setError(null);
      setOutputFormat("json");
      setFormattedOutput(json);
    } catch (err: any) {
      setStatus("invalid");
      setError(err.message || "Failed to convert YAML structure into standard JSON.");
      setFormattedOutput("");
    }
  };

  const handleCopy = () => {
    if (!formattedOutput) return;
    navigator.clipboard.writeText(formattedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const highlightYaml = (yamlStr: string) => {
    if (!yamlStr) return null;
    const escaped = yamlStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const keyRegex = /^(\s*)([^#:\s]+)(\s*:)/gm;
    const commentRegex = /(#.*)/g;

    let highlighted = escaped;
    highlighted = highlighted.replace(keyRegex, `$1<span class="${styles.yamlKey}">$2</span>$3`);
    highlighted = highlighted.replace(commentRegex, `<span class="${styles.yamlComment}">$1</span>`);

    return (
      <pre
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className={styles.outputPre}
      />
    );
  };

  const highlightJson = (jsonStr: string) => {
    const escaped = jsonStr
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    const highlighted = escaped.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g,
      (match) => {
        let cls = "color: #fbcfe8;";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "color: #38bdf8; font-weight: 700;";
          } else {
            cls = "color: #a7f3d0;";
          }
        } else if (/true|false/.test(match)) {
          cls = "color: #fcd34d; font-weight: 600;";
        } else if (/null/.test(match)) {
          cls = "color: #94a3b8; font-style: italic;";
        }

        if (/:$/.test(match)) {
          const cleanKey = match.slice(0, -1);
          return `<span style="${cls}">${cleanKey}</span>:`;
        }
        return `<span style="${cls}">${match}</span>`;
      }
    );

    return (
      <pre
        dangerouslySetInnerHTML={{ __html: highlighted }}
        className={styles.outputPre}
      />
    );
  };

  const relatedTools = [
    { name: "JSON Formatter", href: "/tools/json-formatter" },
    { name: "JWT Decoder", href: "/tools/jwt-decoder" },
    { name: "Regex Tester", href: "/tools/regex-tester" },
    { name: "UUID Generator", href: "/tools/uuid-generator" },
    { name: "SQL Formatter", href: "/tools/sql-formatter" },
    { name: "YAML Validator", href: "/tools/yaml-validator", active: true },
    { name: "Cron Builder", href: "/tools/cron-builder" },
    { name: "Timestamp Converter", href: "/tools/timestamp-converter" }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.breadcrumbs}>
        <Link href="/tools" style={{ color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-orange)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}>Developer Utilities</Link>
        <span style={{ color: "var(--text-muted)", margin: "0 8px" }}>&gt;</span>
        <span className={styles.breadcrumbActive}>Validator</span>
      </div>
      
      <div className={styles.titleBlock}>
        <h1 className={styles.title}>YAML Syntax Validator &amp; JSON Converter</h1>
        <p className={styles.subtitle}>
          Validate YAML configuration syntax patterns, detect tab spacing errors, and translate clean structured YAML to JSON.
        </p>
      </div>

      {/* Actions Row */}
      <div className={styles.actionsRow}>
        <div className={styles.mainActions}>
          <button onClick={handleValidate} className={styles.primaryBtn}>
            Validate YAML
          </button>
          <button onClick={handleConvertToJSON} className={styles.secondaryBtn}>
            Convert to JSON
          </button>
        </div>
      </div>

      {/* Status Banners */}
      {status === "valid" && (
        <div className={styles.validBox}>
          <span>✓</span>
          <div>
            <strong>Validation Succeeded:</strong> The syntax satisfies all core YAML structure guidelines.
          </div>
        </div>
      )}
      {status === "invalid" && error && (
        <div className={styles.invalidBox}>
          <span>❌</span>
          <div>
            <strong>Syntax Validation Error:</strong> {error}
          </div>
        </div>
      )}

      {/* Workspace */}
      <div className={styles.workspace}>
        {/* Input Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>Input YAML Payload</span>
            <div className={styles.paneActionRow}>
              <button onClick={handleLoadSample} className={styles.paneBtn}>
                Load Sample
              </button>
              <button onClick={handleClear} className={styles.paneBtn}>
                Clear
              </button>
            </div>
          </div>
          <textarea
            className={styles.textarea}
            placeholder="Paste your raw YAML payload here... e.g. key: value"
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
          />
        </div>

        {/* Output Pane */}
        <div className={styles.editorPane}>
          <div className={styles.paneHeader}>
            <span className={styles.paneTitle}>
              {outputFormat === "json" ? "Converted JSON Result" : "Validated YAML Result"}
            </span>
            <div className={styles.paneActionRow}>
              <button onClick={handleCopy} className={styles.paneBtn} disabled={!formattedOutput}>
                {copied ? "✓ Copied!" : "Copy Result"}
              </button>
            </div>
          </div>
          {formattedOutput ? (
            outputFormat === "json" ? (
              highlightJson(formattedOutput)
            ) : (
              highlightYaml(formattedOutput)
            )
          ) : (
            <div className={styles.outputPlaceholder}>
              Validation results or converted JSON output will display here...
            </div>
          )}
        </div>
      </div>

      {/* Accordion FAQ Section */}
      <section className={styles.faqSection}>
        <h2 className={styles.faqHeading}>Frequently Asked Questions</h2>
        <div className={styles.faqContainer}>
          {faqItems.map((item, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className={styles.faqQuestion}
              >
                <span>{item.question}</span>
                <span className={`${styles.faqIcon} ${openFaq === idx ? styles.faqIconExpanded : ""}`}>
                  +
                </span>
              </button>
              {openFaq === idx && (
                <div className={styles.faqAnswer}>
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* AdSense SEO & Sidebar Columns */}
      <section className={styles.seoSection}>
        {/* Rich Explanatory Content */}
        <div className={styles.seoContent}>
          <h2 className={styles.seoHeading}>What is YAML and Why is it Strict?</h2>
          <p className={styles.seoParagraph}>
            YAML (a recursive acronym for &quot;YAML Ain&apos;t Markup Language&quot;) is a human-readable data serialization standard. It is widely used for configuration files in modern workflows (like Docker Compose configs, Kubernetes manifests, and GitHub Actions pipelines) because of its minimal notation and comments support.
          </p>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>Strict YAML Indentation Constraints</h3>
          <p className={styles.seoParagraph}>
            Because YAML relies entirely on whitespace indentation to define structure instead of braces (<code>&#123;&#125;</code>) or brackets (<code>[]</code>), its parsing rules are extremely strict:
          </p>
          <ul className={styles.seoList}>
            <li className={styles.seoListItem}>
              <strong>No Tabs:</strong> Tab characters (<code>\t</code>) are explicitly prohibited in YAML indentation. You must always use space characters (typically 2 or 4 spaces).
            </li>
            <li className={styles.seoListItem}>
              <strong>Colon Spacing:</strong> All key-value separators must have a space after the colon (<code>key: value</code>). Writing <code>key:value</code> is a common syntax error.
            </li>
            <li className={styles.seoListItem}>
              <strong>Strict Parent Alignment:</strong> Child properties must be indented further than their parent properties to define hierarchy correctly.
            </li>
          </ul>

          <h3 className={styles.seoHeading} style={{ fontSize: "1.2rem" }}>YAML to JSON Conversion</h3>
          <p className={styles.seoParagraph}>
            Because both YAML and JSON represent structured keys and values, they are highly compatible. Converting YAML configs to JSON is a standard workflow when feeding payload data to web applications, APIs, or database scripts that only support standard JSON schemas.
          </p>
        </div>

        {/* Sidebar Navigation */}
        <div className={styles.sidebarCol}>
          <div className={styles.sidebarCard}>
            <h3 className={styles.sidebarTitle}>Developer Utilities</h3>
            <div className={styles.toolsList}>
              {relatedTools.map((tool) => (
                <Link
                  key={tool.name}
                  href={tool.href}
                  className={`${styles.toolLink} ${tool.active ? styles.activeToolLink : ""}`}
                >
                  <span>{tool.name}</span>
                  <span className={styles.toolLinkArrow}>&rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
