export interface ComplexityVisualizer {
  label: string;
  operations: string;
  visualText: string;
  timeComplexity: string;
  spaceComplexity: string; // added space complexity explicitly
}

export interface ExplanationLevels {
  professional: string;
  simple: string;
  verySimple: string;
}

export interface CommonMistake {
  wrongCode: string;
  whyItFails: string;
  correctCode: string;
  remedy: string;
}

export interface VisualizerStep {
  codeLine: string;
  description: string;
  variables: { [key: string]: string | number };
  callStack: string[];
}

export interface LearningQuestion {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Advanced";
  topic: string; // "python" | "java" | "c" | "c++"
  problem: {
    description: string;
    input: string;
    output: string;
  };
  story: string;
  simpleExplanation: string;
  visualThinking: string[]; // step transitions
  visualExecution: {
    headers: string[];
    inputs: string[];
    outputs: string[];
  };
  code: {
    language: string;
    snippet: string;
  };
  complexity: ComplexityVisualizer;
  explainLike10: ExplanationLevels;
  commonMistakes: CommonMistake[];
  visualizerSteps: VisualizerStep[];
  realWorldApps: string[]; // 🌍 Real-World Applications
  interviewTips: string[]; // 🏆 Interview Tips
  practiceVariations: string[]; // 🧩 Practice Variations
}
