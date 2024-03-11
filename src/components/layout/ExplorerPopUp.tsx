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
            <div ref={popUpRef} className={`${isOpen ? "flex " : "hidden "} absolute z-10 flex-col rounded p-1 min-w-max bg-[#343746] shadow text-xs`} onClick={(e) => e.preventDefault()}>
                <button className="flex gap-1  rounded p-1 pe-2 text-left bg-transparent hover:bg-[#44475a]" onClick={() => setAciveAccordions({...activeAccordions, openEditors: !activeAccordions.openEditors})}>
                    <CheckIcon size={16} className={`${activeAccordions.openEditors ? "text-[#ebf8f2]" : " text-transparent"}`}/>
                    Open Editors
                </button>
                <button className="flex gap-1  rounded p-1 pe-2 text-left bg-transparent text-[#60626d]" disabled>
                    <CheckIcon size={16} className={`${activeAccordions.folders ? "text-[#ebf8f2]" : " text-transparent"}`}/>
                    Folders
                </button>
                <button className="flex gap-1  rounded p-1 pe-2 text-left bg-transparent hover:bg-[#44475a]" onClick={() => setAciveAccordions({...activeAccordions, timeline: !activeAccordions.timeline})}>
                    <CheckIcon size={16} className={`${activeAccordions.timeline ? "text-[#ebf8f2]" : " text-transparent"}`}/>
                    Timeline
                </button>
            </div>
        </div>
    )

}