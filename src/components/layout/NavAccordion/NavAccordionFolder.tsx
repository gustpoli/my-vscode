"use client"

import { useState, createContext, useContext } from "react";
import { useNavAccordionButtonContext } from './NavAccordionButton';
import { FolderIcon, FolderOpenIcon } from "@/components/Icons"

interface NavAccordionFolderProps {
    title?: string
    defaultOpen?: boolean
    disabled?: boolean
    nested?: number
    children ?: React.ReactNode
}

const NavAccordionFolderContext = createContext<boolean | null>(null);

export default function NavAccordionFolder({title = "", defaultOpen = false, disabled = false, nested = 1, children} : NavAccordionFolderProps){

    const parentOpen = useNavAccordionButtonContext();
    const [open, setOpen] = useState(defaultOpen)

    const style = {
        paddingInlineStart: `${12*(nested)}px`
    }

    const before = "before:absolute before:top-[26px] before:group-hover:block before:hidden before:ms-[6px] before:h-[calc(100%-32px)] before:w-[1px] before:bg-[#40424a]"

    return (
        <NavAccordionFolderContext.Provider value={parentOpen && open}>
            <div className="group relative">
                <button 
                    className={` flex items-center gap-1 border border-transparent w-full p-1 hover:bg-[#313341] active:bg-[rgb(98,114,164,0.25)] active:border-[#6272a4] ${disabled ? "pointer-events-none" : ""} ${open ? before : ""}`} 
                    style={style} 
                    onClick={() => setOpen(!open)} disabled={disabled}
                    tabIndex={parentOpen ? 0 : -1}
                >
                    {open 
                    ? <FolderOpenIcon color="#45403d" size={18}/>
                    : <FolderIcon color="#45403d" size={18}/>
                    }
                    <span className=" text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsisx">{title}</span>
                </button>
                <div className={`${open ? "" : " h-0"} overflow-hidden`}>
                    {children}
                </div>
            </div>
        </NavAccordionFolderContext.Provider>
    )

}

export const useNavAccordionFolderContext = () => useContext(NavAccordionFolderContext);