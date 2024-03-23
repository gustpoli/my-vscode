import { CheckIcon, MoreHorizontalIcon } from "lucide-react";
import { Children, RefObject, useEffect, useRef, useState } from "react";

interface ExplorerPopUpProps{
    children: React.ReactNode
    activeAccordions: {
        openEditors: boolean;
        folders: boolean;
        timeline: boolean;
    }
    setAciveAccordions: React.Dispatch<React.SetStateAction<{
        openEditors: boolean;
        folders: boolean;
        timeline: boolean;
    }>>
}

export default function ExplorerPopUp({children, activeAccordions, setAciveAccordions}: ExplorerPopUpProps){

    const [isOpen, setIsOpen] = useState(false)
    const popUpRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick (event: MouseEvent) {
            if (isOpen && popUpRef.current && !popUpRef.current.contains(event.target as Node)) setIsOpen(false)     
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }, [isOpen, popUpRef])

    return (
        <div className=" relative">
            <div onClick={() => setIsOpen(!isOpen)}>
                {children}
            </div>
            <div ref={popUpRef} className={`${isOpen ? "flex " : "hidden "} absolute z-40 flex-col rounded p-1 min-w-max border border-[var(--theme-popup-border)] bg-[var(--theme-popup-bg)] shadow text-xs`} onClick={(e) => e.preventDefault()}>
                <button className="flex gap-1  rounded p-1 pe-2 text-left bg-transparent hover:bg-[var(--theme-popup-option-hover)]" onClick={() => setAciveAccordions({...activeAccordions, openEditors: !activeAccordions.openEditors})}>
                    <CheckIcon size={16} className={`${activeAccordions.openEditors ? "text-[var(--theme-foreground)]" : " text-transparent"}`}/>
                    Open Editors
                </button>
                <button className="flex gap-1  rounded p-1 pe-2 text-left bg-transparent" disabled>
                    <CheckIcon size={16} className={`${activeAccordions.folders ? "text-[var(--theme-foreground)]" : " text-transparent"}`}/>
                    Folders
                </button>
                <button className="flex gap-1  rounded p-1 pe-2 text-left bg-transparent hover:bg-[var(--theme-popup-option-hover)]" onClick={() => setAciveAccordions({...activeAccordions, timeline: !activeAccordions.timeline})}>
                    <CheckIcon size={16} className={`${activeAccordions.timeline ? "text-[var(--theme-foreground)]" : " text-transparent"}`}/>
                    Timeline
                </button>
            </div>
        </div>
    )

}