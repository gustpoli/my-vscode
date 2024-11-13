import { cn } from "@/lib/utils"
import { Icon } from "@iconify/react"
import { useState } from "react"

type AsideCollapsableType = {
  name?: string
  defaultOpen?: boolean
  disabled?: boolean
  children?: React.ReactNode
  lastInstance?: boolean
}

export default function AsideCollapsable({ name, defaultOpen = false, disabled = false, children, lastInstance = false }: AsideCollapsableType){

  const [isOpen, setIsOptionOpen] = useState(defaultOpen)

  return(
    <div 
      className={cn(
        "flex-1 flex flex-col border-muted/25 overflow-hidden transition-[max-height]",
        isOpen && !disabled ? "max-h-screen" : "max-h-6",
        disabled && " opacity-50 pointer-events-none",
        !lastInstance && "border-b"
      )}
    >
      <button 
        className=" flex items-center gap-1 py-1 px-1 w-full h-6 bg-background"
        onClick={() => setIsOptionOpen(prev => !prev)}
        disabled={disabled}
      >
        <span className=" min-w-[18px] text-lg">
          <Icon icon="codicon:chevron-right" className={cn(isOpen && "rotate-90")} />
        </span>
        <span className=" text-sm font-bold uppercase">{name}</span>
      </button>
      <div 
        className={cn(
          "flex-1 flex flex-col overflow-auto"
        )}
      >
        {children}
      </div>
    </div>
  )

}