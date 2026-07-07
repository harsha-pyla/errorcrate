"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "./page.module.css";

interface VisualizerStep {
  lineIndex: number;
  description: string;
  variables: Record<string, string | number>;
  callStack: string[];
  isError?: boolean;
  errorMessage?: string;
}

export default function Visualizer() {
  const [language, setLanguage] = useState<"python" | "java" | "c" | "cpp" | "javascript">("javascript");
  const [code, setCode] = useState<string>(
    `function add(a, b, c) {\n  return a + b + c;\n}\n\nadd(1, 2, 4)`
  );
  const [isVisualizing, setIsVisualizing] = useState<boolean>(false);
  
  // Simulation execution states
  const [steps, setSteps] = useState<VisualizerStep[]>([]);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [speed, setSpeed] = useState<number>(1000); // ms per step
  const [parsingError, setParsingError] = useState<string | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically load sample code when language changes
  useEffect(() => {
    if (isVisualizing) return; // don't override while running
    if (language === "python") {
      setCode(`def add(a, b, c):\n    return a + b + c\n\nadd(1, 2, 4)`);
    } else if (language === "java") {
      setCode(`public static int add(int a, int b, int c) {\n    return a + b + c;\n}\n\nadd(1, 2, 4)`);
    } else if (language === "c" || language === "cpp") {
      setCode(`int add(int a, int b, int c) {\n    return a + b + c;\n}\n\nadd(1, 2, 4)`);
    } else {
      setCode(`function add(a, b, c) {\n  return a + b + c;\n}\n\nadd(1, 2, 4)`);
    }
  }, [language]);

  // Autoplay loop
  useEffect(() => {
    if (isPlaying && steps.length > 0) {
      timerRef.current = setInterval(() => {
        setCurrentStepIndex((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            if (timerRef.current) clearInterval(timerRef.current);
            return prev;
          }
          return prev + 1;
        });
      }, speed);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, steps, speed]);

  // Simple static parser/interpreter for rendering simulations
  const handleAnalyze = () => {
    setParsingError(null);
    const lines = code.split("\n");
    const generatedSteps: VisualizerStep[] = [];
    
    try {
      // 1. Basic Syntax Validation (brackets check)
      let openBrackets = 0;
      let closeBrackets = 0;
      lines.forEach((line, idx) => {
        openBrackets += (line.match(/\{/g) || []).length;
        closeBrackets += (line.match(/\}/g) || []).length;
      });

      if (openBrackets !== closeBrackets && language !== "python") {
        throw new Error(`Syntax Error: Unbalanced curly brackets. Found ${openBrackets} opening and ${closeBrackets} closing.`);
      }

      // 2. Identify Function Definition & Parameters
      let funcName = "func";
      let params: string[] = [];
      let functionLineIdx = -1;
      let returnLineIdx = -1;
      const bodyAssignments: { lineIdx: number; variable: string; expression: string }[] = [];

      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        
        // Find function signature
        if (
          trimmed.includes("function ") ||
          trimmed.startsWith("def ") ||
          (trimmed.includes("int ") && trimmed.includes("(") && trimmed.endsWith("{")) ||
          (trimmed.includes("void ") && trimmed.includes("(") && trimmed.endsWith("{"))
        ) {
          functionLineIdx = idx;
          const paramMatch = trimmed.match(/\(([^)]+)\)/);
          if (paramMatch && paramMatch[1]) {
            params = paramMatch[1].split(",").map(p => {
              // Strip types for Java/C/C++
              const clean = p.trim().split(/\s+/).pop() || "";
              return clean;
            });
          }
          
          // Extract function name
          const nameMatch = trimmed.match(/(?:function\s+|def\s+|int\s+|void\s+)([a-zA-Z0-9_]+)/);
          if (nameMatch) {
            funcName = nameMatch[1];
          }
        }
      });

      if (functionLineIdx === -1) {
        throw new Error("Could not find a valid function declaration in the code. E.g. 'function add(a, b)'");
      }

      // 3. Parse arguments from the invocation line (e.g. add(1, 2, 4))
      let parsedArgs: (string | number)[] = [];
      const callLine = lines.find(l => l.includes(`${funcName}(`));
      if (callLine) {
        const match = callLine.match(new RegExp(`${funcName}\\s*\\(([^)]*)\\)`));
        if (match && match[1]) {
          parsedArgs = match[1].split(",").map(val => {
            const trimmed = val.trim();
            if (!isNaN(Number(trimmed)) && trimmed !== "") {
              return Number(trimmed);
            }
            return trimmed.replace(/['"]/g, "");
          });
        }
      }
      
      lines.forEach((line, idx) => {
        const trimmed = line.trim();
        
        // Find return statement
        if (trimmed.startsWith("return ") || trimmed.startsWith("return;")) {
          returnLineIdx = idx;
        }

        // Find variables assignments in body (e.g. x = a + b)
        if (trimmed.includes("=") && !trimmed.startsWith("for") && idx > functionLineIdx && (returnLineIdx === -1 || idx < returnLineIdx)) {
          // Match left-hand variable and right-hand expression
          const parts = trimmed.split("=");
          const varPart = parts[0].trim().split(/\s+/).pop() || ""; // clean variable name
          const exprPart = parts[1].replace(/;/g, "").trim();
          bodyAssignments.push({
            lineIdx: idx,
            variable: varPart,
            expression: exprPart
          });
        }
      });

      if (functionLineIdx === -1) {
        throw new Error("Could not find a valid function declaration in the code. E.g. 'function add(a, b)'");
      }

      // Initialize variables mapping
      const currentVars: Record<string, string | number> = {};
      params.forEach((param, idx) => {
        currentVars[param] = parsedArgs[idx] !== undefined ? parsedArgs[idx] : "undefined";
      });

      // Step 1: Function Call declaration
      generatedSteps.push({
        lineIndex: lines.findIndex(l => l.includes(`${funcName}(`)) !== -1 
          ? lines.findIndex(l => l.includes(`${funcName}(`)) 
          : lines.length - 1,
        description: `Calling function '${funcName}' with arguments: (${parsedArgs.join(", ")})`,
        variables: { ...currentVars },
        callStack: ["global"]
      });

      // Step 2: Function signature entry
      generatedSteps.push({
        lineIndex: functionLineIdx,
        description: `Entering function '${funcName}' and binding parameters.`,
        variables: { ...currentVars },
        callStack: [`${funcName}()`]
      });

      // Step 3: Execute assignments in body sequentially
      bodyAssignments.forEach(assign => {
        // Simple expression evaluator
        let resolvedVal: string | number = "undefined";
        try {
          // Replace variable keys with their values
          let exprEvaluator = assign.expression;
          Object.keys(currentVars).forEach(vKey => {
            const r = new RegExp(`\\b${vKey}\\b`, 'g');
            exprEvaluator = exprEvaluator.replace(r, String(currentVars[vKey]));
          });
          
          // Safe evaluation using Function constructor
          resolvedVal = new Function(`return ${exprEvaluator}`)();
          if (typeof resolvedVal === "number" && !isFinite(resolvedVal)) {
            throw new Error("Division by zero");
          }
        } catch {
          resolvedVal = `[Expression: ${assign.expression}]`;
        }

        currentVars[assign.variable] = resolvedVal;

        generatedSteps.push({
          lineIndex: assign.lineIdx,
          description: `Assigning evaluated expression value to variable '${assign.variable}'`,
          variables: { ...currentVars },
          callStack: [`${funcName}()`]
        });
      });

      // Step 4: Return value evaluation
      if (returnLineIdx !== -1) {
        const returnTrimmed = lines[returnLineIdx].trim();
        const returnExpr = returnTrimmed.replace(/return\s+/, "").replace(/;/g, "").trim();
        
        let returnVal: string | number = "void";
        if (returnExpr !== "") {
          try {
            let exprEvaluator = returnExpr;
            Object.keys(currentVars).forEach(vKey => {
              const r = new RegExp(`\\b${vKey}\\b`, 'g');
              exprEvaluator = exprEvaluator.replace(r, String(currentVars[vKey]));
            });
            returnVal = new Function(`return ${exprEvaluator}`)();
          } catch {
            returnVal = `[Expression: ${returnExpr}]`;
          }
        }

        generatedSteps.push({
          lineIndex: returnLineIdx,
          description: `Returning evaluated value: ${returnVal}`,
          variables: { ...currentVars, "[Return Value]": returnVal },
          callStack: [`${funcName}()`]
        });
      }

      setSteps(generatedSteps);
      setCurrentStepIndex(0);
      setIsVisualizing(true);

    } catch (err: any) {
      setParsingError(err.message || "An unexpected compilation error occurred.");
      // Create a single error step to highlight error line red
      const errorStep: VisualizerStep = {
        lineIndex: 0,
        description: err.message || "Compilation error",
        variables: {},
        callStack: [],
        isError: true,
        errorMessage: err.message || "Syntax Error"
      };
      setSteps([errorStep]);
      setCurrentStepIndex(0);
      setIsVisualizing(true);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStepIndex(0);
  };

  const handleBack = () => {
    setCurrentStepIndex((prev) => Math.max(0, prev - 1));
  };

  const handleForward = () => {
    setCurrentStepIndex((prev) => Math.min(steps.length - 1, prev + 1));
  };

  const handleExit = () => {
    setIsVisualizing(false);
    setIsPlaying(false);
    setSteps([]);
    setParsingError(null);
  };

  const renderCodeLine = (line: string, index: number) => {
    const isCurrent = steps[currentStepIndex]?.lineIndex === index;
    const isErrStep = steps[currentStepIndex]?.isError;
    
    // Highlight colors
    let lineClass = styles.codeLineRow;
    if (isCurrent) {
      lineClass += isErrStep ? ` ${styles.codeLineError}` : ` ${styles.codeLineActive}`;
    }

    // Basic regex styling for syntax highlights
    const highlightWords = (txt: string) => {
      const parts = txt.split(/(\bfunction\b|\bdef\b|\breturn\b|\bpublic\b|\bstatic\b|\bclass\b|\bint\b|\bdouble\b|\bvoid\b|[0-9]+|\badd\b)/g);
      return parts.map((part, pIdx) => {
        if (["function", "def", "return", "public", "static", "class", "int", "double", "void"].includes(part)) {
          return <span key={pIdx} style={{ color: "#d946ef", fontWeight: "bold" }}>{part}</span>;
        }
        if (part === "add") {
          return <span key={pIdx} style={{ color: "#3b82f6", fontWeight: "bold" }}>{part}</span>;
        }
        if (!isNaN(Number(part)) && part.trim() !== "") {
          return <span key={pIdx} style={{ color: "#f97316" }}>{part}</span>;
        }
        return <span key={pIdx}>{part}</span>;
      });
    };

    return (
      <div key={index} className={lineClass}>
        <span className={styles.lineNumber}>{index + 1}</span>
        <pre className={styles.codeText}>{highlightWords(line)}</pre>
      </div>
    );
  };

  return (
    <div className={styles.visualizerContainer}>
      {!isVisualizing ? (
        <div className={styles.inputSection}>
          <h2 className={styles.vizTitle}>Visualize Your Custom Code</h2>
          <p className={styles.vizSubtitle}>
            Paste simple functions and trace variable scopes, parameter bindings, and statements executing in real-time.
          </p>

          {/* Language Selector */}
          <div className={styles.langSelectorRow}>
            {(["javascript", "python", "java", "c", "cpp"] as const).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`${styles.langBtn} ${language === lang ? styles.activeLang : ""}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Paste Area */}
          <div className={styles.editorContainer}>
            <label className={styles.editorLabel}>Paste Code Snippet:</label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className={styles.codeTextarea}
              placeholder={`Write or paste your code here...`}
              rows={8}
            />
          </div>

          {/* Actions */}
          <div className={styles.inputsRow} style={{ justifyContent: "flex-end" }}>
            <button onClick={handleAnalyze} className={styles.analyzeBtn}>
              Visualize Code
            </button>
          </div>
          
          {parsingError && (
            <div className={styles.errorBanner}>
              ⚠️ {parsingError}
            </div>
          )}
        </div>
      ) : (
        <div className={styles.visualizerWindow}>
          {/* Header Controls */}
          <div className={styles.vizHeader}>
            <span className={styles.vizHeaderTitle}>
              🎥 Live Visualizer — {language.toUpperCase()}
            </span>
            <button onClick={handleExit} className={styles.exitBtn}>
              Close Visualizer
            </button>
          </div>

          <div className={styles.vizBodyGrid}>
            {/* Left: Code Box */}
            <div className={styles.vizCodeCol}>
              <div className={styles.vizCodeScroll}>
                {code.split("\n").map((line, idx) => renderCodeLine(line, idx))}
              </div>
              
              {/* Playback Controls (Matches User Screenshot Style) */}
              <div className={styles.playbackControlsBar}>
                <button onClick={handleBack} disabled={currentStepIndex === 0} className={styles.pbBtn} title="Step Back">
                  ⏮
                </button>
                <button onClick={() => setIsPlaying(!isPlaying)} className={styles.pbBtn} title={isPlaying ? "Pause" : "Play"}>
                  {isPlaying ? "⏸" : "▶"}
                </button>
                <button onClick={handleForward} disabled={currentStepIndex === steps.length - 1 || steps.length === 0} className={styles.pbBtn} title="Step Forward">
                  ⏭
                </button>
                <button onClick={handleReset} className={styles.pbBtn} title="Reset">
                  ↺
                </button>

                {/* Speed Slider */}
                <div className={styles.speedSliderBox}>
                  <label className={styles.speedLabel}>Speed:</label>
                  <input
                    type="range"
                    min="300"
                    max="2000"
                    step="100"
                    value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))}
                    className={styles.speedSlider}
                  />
                  <span className={styles.speedVal}>{((2000 - speed + 300) / 1000).toFixed(1)}x</span>
                </div>
              </div>
            </div>

            {/* Right: Inspector and Traces (Matches Screenshot black cards + white variables) */}
            <div className={styles.vizInspectorCol}>
              {steps[currentStepIndex]?.isError ? (
                <div className={styles.errorOverlayCard}>
                  <span className={styles.errorIcon}>❌</span>
                  <h4 className={styles.errorCardTitle}>Runtime Exception</h4>
                  <p className={styles.errorCardDesc}>{steps[currentStepIndex].errorMessage}</p>
                </div>
              ) : (
                <>
                  {/* Variables Card (Black card with white badges) */}
                  <div className={styles.inspectorCard}>
                    <div className={styles.cardHeaderPin}></div>
                    <h3 className={styles.cardTitle}>Variables</h3>
                    
                    <div className={styles.variablesGrid}>
                      {Object.keys(steps[currentStepIndex]?.variables || {}).length > 0 ? (
                        Object.entries(steps[currentStepIndex].variables).map(([name, val]) => (
                          <div key={name} className={styles.varBadge}>
                            <span className={styles.varName}>{name}</span>
                            <span className={styles.varValue}>{val}</span>
                          </div>
                        ))
                      ) : (
                        <span className={styles.emptyVars}>No variables active</span>
                      )}
                    </div>
                  </div>

                  {/* Step Description Card */}
                  <div className={styles.stepDescCard}>
                    <h4 className={styles.stepTitle}>Step {currentStepIndex + 1} of {steps.length}</h4>
                    <p className={styles.stepText}>{steps[currentStepIndex]?.description}</p>
                  </div>

                  {/* Call Stack Trace */}
                  <div className={styles.stackCard}>
                    <h4 className={styles.stackTitle}>Call Stack</h4>
                    <div className={styles.stackList}>
                      {steps[currentStepIndex]?.callStack.map((frame, fIdx) => (
                        <div key={fIdx} className={styles.stackFrame}>
                          {frame}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
