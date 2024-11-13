"use client"

import { createContext, useContext, useEffect, useState } from "react";

type WindowContextType = {
  isMaximized: boolean
  setIsMaximized: React.Dispatch<React.SetStateAction<boolean>>
}

export const WindowContext = createContext<WindowContextType | undefined>(undefined);

export function WindowContextProvider({ children }: { children: React.ReactNode }) {
  const [isMaximized, setIsMaximized] = useState<boolean>(false);

  useEffect(() => {
    const savedState = localStorage.getItem("isMaximized");
    if (savedState) {
      setIsMaximized(JSON.parse(savedState));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isMaximized", JSON.stringify(isMaximized));
  }, [isMaximized]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.shiftKey && event.key === "F11") {
        event.preventDefault();
        setIsMaximized(prev => !prev);
      }
    }
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [setIsMaximized]);

  return (
    <WindowContext.Provider value={{ isMaximized, setIsMaximized }}>
      {children}
    </WindowContext.Provider>
  );
};

export function useWindowContext() {
  const context = useContext(WindowContext);
  if (context === undefined)
    throw new Error("useWindowContext must be used within an WindowContextProvider");
  return context;
};
