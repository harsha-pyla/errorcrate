export interface Comment {
  id: string;
  username: string;
  avatar: string; // Emoji or image URL
  date: string;
  content: string;
  upvotes: number;
  isAccepted?: boolean; // Represents Stack Overflow accepted answer
}

export interface ErrorExample {
  title: string;
  code: string;
  language: string;
}

export interface HelpfulResource {
  name: string;
  url: string;
}

export interface ErrorInfo {
  id: string;
  name: string;
  category: string; // Category ID
  badges: string[];
  updatedAt: string;
  shortDescription: string;
  meanDescription: string;
  seoTitle?: string; // SEO-optimized page title (50-60 chars)
  seoDescription?: string; // SEO-optimized meta description (140-160 chars)
  causes: string[];
  solutions: string[]; // List of solution steps/guidelines
  example: ErrorExample;
  exampleRequest?: ErrorExample; // Left side block (e.g. GET request / script code)
  exampleResponse?: ErrorExample; // Right side block (e.g. HTTP response / traceback logs)
  definedIn?: string; // Specification reference (e.g. RFC 7231 / ECMA-262)
  faq?: { question: string; answer: string }[]; // Frequently Asked Questions
  frameworkExamples?: { name: string; language: string; code: string; description: string }[];
  serverExamples?: { name: string; language: string; code: string; description: string }[];
  commonMistakes?: string[];
  prevention?: string[];
  relatedErrors: string[]; // Related Error IDs
  helpfulResources: HelpfulResource[];
  comments: Comment[];
  votes?: number; // Stack Overflow style votes for the main error
  views?: number; // Stack Overflow style views
  introduced?: string; // e.g. Node.js v15.0.0
  quickFix?: {
    causes: string[];
    checklist: string[];
    estimatedTime: string;
  };
  commonOccurrence?: {
    scenario: string;
    frequency: string;
  }[];
  causesTable?: {
    cause: string;
    frequency: string;
  }[];
}

export interface Category {
  id: string;
  name: string;
  count: number;
  icon: string; // Emoji or Icon name
}

export interface ErrorRequest {
  id: string;
  title: string;
  category: string;
  traceback: string;
  context: string;
  email?: string;
  requestedAt: string;
}
