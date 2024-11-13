"use client"

import { cn } from "@/lib/utils";
import { useWindowContext } from "./WindowContext";

export default function Window({children}: { children: React.ReactNode }){

  const { isMaximized } = useWindowContext()

  return (
    <div 
      className={cn(
        "relative flex flex-col flex-nowrap  bg-background text-foreground transition-all overflow-hidden",
        isMaximized ? "w-full h-full" : " w-full h-full lg:rounded-lg lg:border lg:w-11/12 lg:h-[50vw] lg:aspect-video lg:shadow-lg"
      )}
    >
      {children}
    </div>
  )
  
}