"use client"

import { createContext, useContext, useState } from "react";

type CommandContextType = {
  isCommandOpen: boolean
  setIsCommandOpen: React.Dispatch<React.SetStateAction<boolean>>
  commandSearch: string
  setCommandSearch: React.Dispatch<React.SetStateAction<string>>
  commandShowType: "general" | "files",
  setCommandShowType: React.Dispatch<React.SetStateAction<"general" | "files">>
}

export const CommandContext = createContext<CommandContextType | undefined>(undefined);

export function CommandContextProvider({ children }: { children: React.ReactNode }) {
  
  const [commandShowType, setCommandShowType] = useState<"general" | "files">("general")
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false)
  const [commandSearch, setCommandSearch] = useState<string>("")

  return (
    <CommandContext.Provider 
      value={{ isCommandOpen, setIsCommandOpen, commandSearch, setCommandSearch, commandShowType, setCommandShowType }}
    >
      {children}
    </CommandContext.Provider>
  );
};

export function useCommandContext() {
  const context = useContext(CommandContext);
  if (context === undefined)
    throw new Error("useCommandContext must be used within an CommandContextProvider");
  return context;
};  
