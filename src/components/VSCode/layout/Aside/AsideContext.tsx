"use client"

import { createContext, useContext, useEffect, useState } from 'react';

export type AsideOptionsType = "explorer" | "search" | "source-control" | "run-and-debug" | "extensions" | "live-share"

type AsideContextType = {
  optionSelected: AsideOptionsType
  setOptionSelected: React.Dispatch<React.SetStateAction<AsideOptionsType>>
  isOptionOpen: boolean
  setIsOptionOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const AsideContext = createContext<AsideContextType | undefined>(undefined);

export function AsideContextProvider({ children }: { children: React.ReactNode }) {
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<AsideOptionsType>("explorer");

    useEffect(() => {
    const asideData = localStorage.getItem("asideData");
    if (asideData) {
      const parsedData = JSON.parse(asideData);
      setIsOptionOpen(parsedData.isOptionOpen);
      setOptionSelected(parsedData.optionSelected);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("asideData", JSON.stringify({ isOptionOpen, optionSelected }));
  }, [isOptionOpen, optionSelected]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.key === "b") {
        event.preventDefault();
        setIsOptionOpen(prev => !prev);
      }
    }
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsOptionOpen]);

  return (
    <AsideContext.Provider value={{ optionSelected, setOptionSelected, isOptionOpen, setIsOptionOpen }}>
      {children}
    </AsideContext.Provider>
  );
};

export function useAsideContext() {
  const context = useContext(AsideContext);
  if (context === undefined)
    throw new Error("useAsideContext must be used within an AsideContextProvider");
  return context;
};
