"use client"

import { useState, createContext, useContext } from "react";

import { ChevronDownIcon, ChevronRightIcon } from "lucide-react";

interface NavAccordionProps {
    title?: string
    defaultOpen?: boolean
    disabled?: boolean
    children ?: React.ReactNode
    className ?: string,
    openFull ?: boolean
}

const NavAccordionButtonContext = createContext<boolean | null>(null);

export default function NavAccordionButton({title = "", defaultOpen = false, disabled = false, children, className = "", openFull = false}: NavAccordionProps){

    const [open, setOpen] = useState(defaultOpen)

    return (
        <NavAccordionButtonContext.Provider value={open}>
            <button className={`flex flex-nowrap items-center gap-1 border border-transparent p-1 min-h-7 text-nowrap bg-[#282a36] active:border-[#6272a4] ${disabled ? "pointer-events-none" : ""} overflow-hidden ${className}`} onClick={() => setOpen(!open)} disabled={disabled}>
                {open 
                ? <ChevronDownIcon  size={18} className="min-w-[18px] text-[#c5c5c5]" />
    
                : <ChevronRightIcon size={18} className="min-w-[18px] text-[#c5c5c5]" />
                }
                <span className=" text-xs font-bold whitespace-nowrap overflow-hidden text-ellipsis">{title}</span>
            </button>
            <div className={`${open ? `${openFull ? " flex-1 overflow-x-auto" : ''}` : " h-0 overflow-hidden"}  transition-[height]`}>
                {children}
            </div>
        </NavAccordionButtonContext.Provider>
    )

}

export const useNavAccordionButtonContext = () => useContext(NavAccordionButtonContext);