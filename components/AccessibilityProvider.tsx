"use client";

import { createContext, useContext, useEffect, useState } from "react";

type AccessibilityContextValue = {
  highContrast: boolean;
  grayscale: boolean;
  toggleHighContrast: () => void;
  toggleGrayscale: () => void;
};

const AccessibilityContext = createContext<AccessibilityContextValue | null>(null);
const STORAGE_KEY_CONTRAST = "judice:high-contrast";
const STORAGE_KEY_GRAYSCALE = "judice:grayscale";

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);
  const [grayscale, setGrayscale] = useState(false);

  useEffect(() => {
    try {
      setHighContrast(localStorage.getItem(STORAGE_KEY_CONTRAST) === "1");
      setGrayscale(localStorage.getItem(STORAGE_KEY_GRAYSCALE) === "1");
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    try {
      localStorage.setItem(STORAGE_KEY_CONTRAST, highContrast ? "1" : "0");
    } catch {}
  }, [highContrast]);

  useEffect(() => {
    document.documentElement.classList.toggle("grayscale-mode", grayscale);
    try {
      localStorage.setItem(STORAGE_KEY_GRAYSCALE, grayscale ? "1" : "0");
    } catch {}
  }, [grayscale]);

  return (
    <AccessibilityContext.Provider
      value={{
        highContrast,
        grayscale,
        toggleHighContrast: () => setHighContrast((v) => !v),
        toggleGrayscale: () => setGrayscale((v) => !v),
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}

export function useAccessibility() {
  const ctx = useContext(AccessibilityContext);
  if (!ctx) {
    throw new Error("useAccessibility deve ser usado dentro de AccessibilityProvider");
  }
  return ctx;
}
