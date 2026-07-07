"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LearningQuestion } from "@/types/learning";
import styles from "./question.module.css";

interface QuestionClientProps {
  question: LearningQuestion;
}

export default function QuestionClient({ question }: QuestionClientProps) {
  // Step 6: Visualizer states
  const [currentStepIdx, setCurrentStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Step 7: Explain Like I'm 10 active level
  const [eliLevel, setEliLevel] = useState<"professional" | "simple" | "verySimple">("simple");

  const steps = question.visualizerSteps;
  const currentStep = steps[currentStepIdx] || steps[0];

  // Auto-play interval for visualizer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStepIdx((prev) => {
          if (prev >= steps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [isPlaying, steps.length]);

  const handleNextStep = () => {
    if (currentStepIdx < steps.length - 1) {
      setCurrentStepIdx(currentStepIdx + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStepIdx > 0) {
      setCurrentStepIdx(currentStepIdx - 1);
    }
  };

  const handleResetVisualizer = () => {
    setCurrentStepIdx(0);
    setIsPlaying(false);
  };

  return (
    <div className={styles.pageContainer}>
      {/* Top Bar with Back Link */}
       <div className={styles.topBar}>
        <span className={styles.breadcrumb}>
          <Link href="/learning" className={styles.breadcrumbLink}>
            LEARNING
          </Link>
          <span className={styles.breadcrumbSeparator}> / </span>
          <Link href={`/learning?tab=${question.topic}`} className={styles.breadcrumbLink}>
            {question.topic.toUpperCase()}
          </Link>
          <span className={styles.breadcrumbSeparator}> / </span>
          <span className={styles.breadcrumbActive}>
            {question.id.toUpperCase().replace("-", " ")}
          </span>
        </span>
      </div>

      {/* Header Area */}
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <h1 className={styles.pageTitle}>{question.title}</h1>
          <span
            className={`${styles.difficultyBadge} ${
              question.difficulty === "Easy"
                ? styles.easy
                : question.difficulty === "Medium"
                ? styles.medium
                : styles.advanced
            }`}
          >
            {question.difficulty}
          </span>
        </div>
      </header>

      <div className={styles.contentGrid}>
        {/* Main Columns containing the Steps Walkthrough */}
        <div className={styles.stepsColumn}>
          {/* Intro Story */}
          <section className={`${styles.stepCard} ${styles.storyCard}`}>
            <h3 className={styles.storyTitle}>💡 The Core Concept</h3>
            <p className={styles.storyText}>&ldquo;{question.story}&rdquo;</p>
          </section>

          {/* STEP 1: The Problem */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 1</span>
              <h2 className={styles.stepTitle}>The Problem</h2>
            </div>
            <p className={styles.stepDesc}>{question.problem.description}</p>
            <div className={styles.ioGrid}>
              <div className={styles.ioBox}>
                <span className={styles.ioLabel}>Input</span>
                <code className={styles.ioCode}>{question.problem.input}</code>
              </div>
              <div className={styles.ioBox}>
                <span className={styles.ioLabel}>Output</span>
                <code className={styles.ioCode}>{question.problem.output}</code>
              </div>
            </div>
          </section>

          {/* STEP 2: Visual Thinking */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 2</span>
              <h2 className={styles.stepTitle}>Visual Thinking</h2>
            </div>
            <div className={styles.thinkingChain}>
              {question.visualThinking.map((item, idx) => (
                <div key={idx} className={styles.chainNode}>
                  {idx > 0 && <span className={styles.chainArrow}>↓</span>}
                  <div className={styles.nodeBox}>{item}</div>
                </div>
              ))}
            </div>
          </section>

          {/* STEP 3: Simple Explanation */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 3</span>
              <h2 className={styles.stepTitle}>Simple Explanation</h2>
            </div>
            <p className={styles.explanationText}>
              {question.simpleExplanation}
            </p>
          </section>

          {/* STEP 4: Visual Execution Grid */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 4</span>
              <h2 className={styles.stepTitle}>Visual Execution</h2>
            </div>
            <div className={styles.tableWrapper}>
              <table className={styles.executionTable}>
                <thead>
                  <tr>
                    {question.visualExecution.headers.map((h, i) => (
                      <th key={i}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {question.visualExecution.inputs.map((inVal, i) => (
                      <td key={i} className={i === 0 ? styles.firstCell : ""}>
                        {inVal}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {question.visualExecution.outputs.map((outVal, i) => (
                      <td
                        key={i}
                        className={
                          i === 0
                            ? styles.firstCell
                            : styles.highlightCell
                        }
                      >
                        {outVal}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* STEP 5: Code */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 5</span>
              <h2 className={styles.stepTitle}>Code Implementation</h2>
            </div>
            <div className={styles.codeContainer}>
              <div className={styles.codeHeader}>
                <span className={styles.codeLang}>
                  {question.code.language}
                </span>
              </div>
              <pre className={styles.codeBody}>
                <code className={styles.codePre}>{question.code.snippet}</code>
              </pre>
            </div>
          </section>

          {/* STEP 6: Complexity & Visualizer */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 6</span>
              <h2 className={styles.stepTitle}>Complexity & Interactive Visualizer</h2>
            </div>

            {/* Complexity visual block */}
            <div className={styles.complexityBlock}>
              <h4 className={styles.complexityHeader}>Big O Complexity</h4>
              <div className={styles.complexityGrid}>
                <div className={styles.complexityItem}>
                  <span className={styles.complexityLabel}>Time Complexity</span>
                  <span className={styles.complexityValue}>
                    {question.complexity.timeComplexity}
                  </span>
                </div>
                <div className={styles.complexityItem}>
                  <span className={styles.complexityLabel}>Visualizing operations</span>
                  <span className={styles.complexityDesc}>
                    {question.complexity.visualText}
                  </span>
                </div>
              </div>
            </div>

            {/* INTERACTIVE PLAYGROUND VISUALIZER */}
            <div className={styles.visualizerContainer}>
              <div className={styles.visualizerHeader}>
                <span className={styles.visualizerTitle}>Interactive Memory & Variable Tracker</span>
                <div className={styles.controlButtons}>
                  <button onClick={handlePrevStep} disabled={currentStepIdx === 0}>
                    ◀ Prev
                  </button>
                  <button onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? "⏸ Pause" : "▶ Play"}
                  </button>
                  <button onClick={handleNextStep} disabled={currentStepIdx === steps.length - 1}>
                    Next ▶
                  </button>
                  <button onClick={handleResetVisualizer}>
                    ↺ Reset
                  </button>
                </div>
              </div>

              {/* Progress Tracker Line */}
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{
                    width: `${((currentStepIdx + 1) / steps.length) * 100}%`
                  }}
                />
              </div>

              <div className={styles.visualizerGrid}>
                {/* Code execution block */}
                <div className={styles.codeExecutionPane}>
                  <div className={styles.paneHeader}>Code Execution</div>
                  <div className={styles.codeLines}>
                    {question.code.snippet.split("\n").map((line, idx) => {
                      const isExecuting = currentStep.codeLine && line.trim().startsWith(currentStep.codeLine.trim());
                      return (
                        <div
                          key={idx}
                          className={`${styles.executionLine} ${
                            isExecuting ? styles.activeLine : ""
                          }`}
                        >
                          <span className={styles.lineNumber}>{idx + 1}</span>
                          <span className={styles.lineContent}>{line}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* State Inspector Pane */}
                <div className={styles.inspectorPane}>
                  {/* Variables Tracker */}
                  <div className={styles.inspectorBlock}>
                    <div className={styles.paneHeader}>Variables (Memory)</div>
                    <div className={styles.variableGrid}>
                      {Object.entries(currentStep.variables).map(([name, val]) => (
                        <div key={name} className={styles.variableRow}>
                          <span className={styles.varName}>{name}</span>
                          <span className={styles.varValue}>{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call Stack Visualizer */}
                  <div className={styles.inspectorBlock}>
                    <div className={styles.paneHeader}>Call Stack</div>
                    <div className={styles.stackFrameList}>
                      {currentStep.callStack.map((frame, idx) => (
                        <div key={idx} className={styles.stackFrame}>
                          {frame}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Step Description Box */}
              <div className={styles.stepExplanationBox}>
                <span style={{ fontWeight: 700, color: "var(--accent-orange)" }}>
                  Step {currentStepIdx + 1} of {steps.length}:
                </span>{" "}
                {currentStep.description}
              </div>
            </div>
          </section>

          {/* STEP 7: Explain Like I'm 10 & Common Mistakes */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 7</span>
              <h2 className={styles.stepTitle}>ELI10 & Common Pitfalls</h2>
            </div>

            {/* Explain Like I'm 10 Tabs */}
            <div className={styles.eliTabs}>
              <button
                className={`${styles.eliTabBtn} ${
                  eliLevel === "professional" ? styles.eliActiveTab : ""
                }`}
                onClick={() => setEliLevel("professional")}
              >
                Professional
              </button>
              <button
                className={`${styles.eliTabBtn} ${
                  eliLevel === "simple" ? styles.eliActiveTab : ""
                }`}
                onClick={() => setEliLevel("simple")}
              >
                Simple
              </button>
              <button
                className={`${styles.eliTabBtn} ${
                  eliLevel === "verySimple" ? styles.eliActiveTab : ""
                }`}
                onClick={() => setEliLevel("verySimple")}
              >
                Very Simple
              </button>
            </div>

            <div className={styles.eliContent}>
              <p className={styles.eliText}>
                {question.explainLike10[eliLevel]}
              </p>
            </div>

            {/* Common Mistakes */}
            <div className={styles.mistakesSection}>
              <h4 className={styles.mistakesHeader}>Common Mistakes Beginners Make</h4>
              {question.commonMistakes.map((mistake, idx) => (
                <div key={idx} className={styles.mistakeCard}>
                  <div className={styles.mistakeGrid}>
                    <div className={styles.wrongBox}>
                      <span className={styles.badgeWrong}>Most Beginners Write</span>
                      <pre className={styles.mistakeCode}>{mistake.wrongCode}</pre>
                    </div>
                    <div className={styles.correctBox}>
                      <span className={styles.badgeCorrect}>Resilient Solution</span>
                      <pre className={styles.mistakeCode}>{mistake.correctCode}</pre>
                    </div>
                  </div>
                  <div className={styles.mistakeDetails}>
                    <strong>Why it fails:</strong> {mistake.whyItFails}
                    <br />
                    <strong style={{ color: "var(--accent-orange)" }}>Remedy:</strong>{" "}
                    {mistake.remedy}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 8: Real-World Apps, Interview Tips, and Variations */}
          <section className={styles.stepCard}>
            <div className={styles.stepHeader}>
              <span className={styles.stepBadge}>Step 8</span>
              <h2 className={styles.stepTitle}>Applications, Interview Tips & Variations</h2>
            </div>

            <div className={styles.extraGrid}>
              <div className={styles.extraBlock}>
                <h4 className={styles.extraHeader}>🌍 Real-World Applications</h4>
                <ul className={styles.extraList}>
                  {question.realWorldApps.map((app, idx) => (
                    <li key={idx} className={styles.extraListItem}>{app}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.extraBlock}>
                <h4 className={styles.extraHeader}>🏆 Interview Tips</h4>
                <ul className={styles.extraList}>
                  {question.interviewTips.map((tip, idx) => (
                    <li key={idx} className={styles.extraListItem}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.extraBlock}>
                <h4 className={styles.extraHeader}>🧩 Practice Variations</h4>
                <ul className={styles.extraList}>
                  {question.practiceVariations.map((val, idx) => (
                    <li key={idx} className={styles.extraListItem}>{val}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
