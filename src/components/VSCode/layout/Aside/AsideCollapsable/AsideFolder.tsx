import { useState } from "react"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"

import { createContext, useContext } from "react";

export const LevelContext = createContext(1);

type AsideFolder = {
  name: string
  children?: React.ReactNode
}

export default function AsideFolder({ name, children }: AsideFolder){

  const level = useContext(LevelContext);
  const [isOpen, setIsOptionOpen] = useState(false)

  return (
    <div className=" flex flex-col">
      <button 
        className=" inline-flex items-center gap-1.5 w-full px-2.5 hover:bg-accent "
        style={{paddingLeft: `${level*10}px`}}
        onClick={() => setIsOptionOpen(prev => !prev)}
      >
        <span className=" min-w-[18px] text-lg">
          <Icon icon="material-symbols:folder" color="hsl(22, 6%, 25%)" />
        </span>
        <span className="">{name}</span>
      </button>
      <div 
        className={cn(
          "relative flex flex-col overflow-hidden",
          !isOpen && "max-h-0"
        )}
      >
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
      </div>
    </div>
  )
  
}