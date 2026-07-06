"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { ErrorInfo, Category, Comment, ErrorRequest } from "@/types";
import { errorsData } from "@/data/errors";
import { categories as initialCategories } from "@/data/categories";

interface AppContextType {
  theme: "light";
  errors: ErrorInfo[];
  categories: Category[];
  addError: (newError: Omit<ErrorInfo, "id" | "updatedAt" | "comments" | "relatedErrors" | "votes" | "views">) => string;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategoryId: string | null;
  setSelectedCategoryId: (id: string | null) => void;
  voteError: (errorId: string, direction: "up" | "down") => void;
  voteComment: (errorId: string, commentId: string, direction: "up" | "down") => void;
  addSolution: (errorId: string, content: string) => void;
  
  // Requested errors states
  requests: ErrorRequest[];
  addRequest: (request: Omit<ErrorRequest, "id" | "requestedAt">) => string;

  // Mobile navigation drawer toggle
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [errors, setErrors] = useState<ErrorInfo[]>(errorsData);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  
  // Local state for requests
  const [requests, setRequests] = useState<ErrorRequest[]>([]);

  // Mobile menu open state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Force light mode
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const addError = (
    newErrorData: Omit<ErrorInfo, "id" | "updatedAt" | "comments" | "relatedErrors" | "votes" | "views">
  ) => {
    const formattedId = newErrorData.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    
    // Check if error already exists, append random suffix if so to prevent collisions
    const exists = errors.some((e) => e.id === formattedId);
    const finalId = exists ? `${formattedId}-${Math.floor(Math.random() * 1000)}` : formattedId;

    const newError: ErrorInfo = {
      ...newErrorData,
      id: finalId,
      updatedAt: "just now",
      relatedErrors: [],
      comments: [],
      votes: 0,
      views: 0,
    };

    setErrors((prev) => [newError, ...prev]);

    // Update category count
    setCategories((prevCats) =>
      prevCats.map((cat) =>
        cat.id === newError.category
          ? { ...cat, count: cat.count + 1 }
          : cat
      )
    );

    return finalId;
  };

  // Add a user request for an error
  const addRequest = (
    reqData: Omit<ErrorRequest, "id" | "requestedAt">
  ) => {
    const id = `req-${Date.now()}`;
    const newRequest: ErrorRequest = {
      ...reqData,
      id,
      requestedAt: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    };
    setRequests((prev) => [newRequest, ...prev]);
    return id;
  };

  // Upvote/Downvote Error post
  const voteError = (errorId: string, direction: "up" | "down") => {
    setErrors((prevErrors) =>
      prevErrors.map((err) => {
        if (err.id === errorId) {
          const currentVotes = err.votes ?? 0;
          return {
            ...err,
            votes: direction === "up" ? currentVotes + 1 : currentVotes - 1,
          };
        }
        return err;
      })
    );
  };

  // Upvote/Downvote Solution (Comment) post
  const voteComment = (errorId: string, commentId: string, direction: "up" | "down") => {
    setErrors((prevErrors) =>
      prevErrors.map((err) => {
        if (err.id === errorId) {
          return {
            ...err,
            comments: err.comments.map((c) => {
              if (c.id === commentId) {
                return {
                  ...c,
                  upvotes: direction === "up" ? c.upvotes + 1 : c.upvotes - 1,
                };
              }
              return c;
            }),
          };
        }
        return err;
      })
    );
  };

  // Add solution answer to error
  const addSolution = (errorId: string, content: string) => {
    const newSolution: Comment = {
      id: `sol-${Date.now()}`,
      username: "current_user",
      avatar: "👨‍💻",
      date: "just now",
      content: content.trim(),
      upvotes: 0,
      isAccepted: false,
    };

    setErrors((prevErrors) =>
      prevErrors.map((err) => {
        if (err.id === errorId) {
          return {
            ...err,
            comments: [...err.comments, newSolution],
          };
        }
        return err;
      })
    );
  };

  return (
    <AppContext.Provider
      value={{
        theme: "light",
        errors,
        categories,
        addError,
        searchQuery,
        setSearchQuery,
        selectedCategoryId,
        setSelectedCategoryId,
        voteError,
        voteComment,
        addSolution,
        requests,
        addRequest,
        mobileMenuOpen,
        setMobileMenuOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
