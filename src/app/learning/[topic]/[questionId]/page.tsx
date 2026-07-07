import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { learningQuestions } from "@/data/learning";
import QuestionClient from "./QuestionClient";

interface PageProps {
  params: Promise<{
    topic: string;
    questionId: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic, questionId } = await params;
  const question = learningQuestions.find(
    (q) => q.topic === topic && q.id === questionId
  );

  if (!question) {
    return {
      title: "Question Not Found | ErrorCrate",
    };
  }

  const capitalizedTopic = question.topic.charAt(0).toUpperCase() + question.topic.slice(1);
  return {
    title: `${question.title} (${capitalizedTopic}) — Code Explained | ErrorCrate`,
    description: `Learn how to solve and understand the mechanics of ${question.title} in ${capitalizedTopic}. Visual thinking, simple explanation, execution step mapping, and code visualizer.`,
    alternates: {
      canonical: `https://errorcrate.com/learning/${topic}/${questionId}`,
    },
    openGraph: {
      title: `${question.title} (${capitalizedTopic}) — Code Explained | ErrorCrate`,
      description: `Learn how to solve and understand the mechanics of ${question.title} in ${capitalizedTopic}. Visual thinking, simple explanation, execution step mapping, and code visualizer.`,
      url: `https://errorcrate.com/learning/${topic}/${questionId}`,
      type: "website",
    },
  };
}

export default async function QuestionPage({ params }: PageProps) {
  const { topic, questionId } = await params;
  const question = learningQuestions.find(
    (q) => q.topic === topic && q.id === questionId
  );

  if (!question) {
    notFound();
  }

  return <QuestionClient question={question} />;
}
