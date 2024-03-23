import { MoreHorizontalIcon, XIcon } from "lucide-react";
import ExplorerPopUp from "./ExplorerPopUp";
import FileIcon from "../Icons/FileIcon";
import { NavAccordionButton, NavAccordionFolder, NavAccordionFile } from "@/components/layout/NavAccordion"
import { useState } from "react";
import Button from "../Button";
import ToolTip from "../Tooltip";
import OpenEditorsAccordionContent from "./NavAccordion/OpenEditorsAccordionContent";

export default function ExplorerMenu(){


    const [activeAccordions, setAciveAccordions] = useState({
        openEditors: false,
        folders: true,
        timeline: true
    })

    return(
        <nav className=" flex flex-col flex-auto max-w-56 min-w-32 bg-[var(--theme-nav-menu)] select-none">
            <div className=" flex justify-between items-center px-3 min-h-9">
                <span className=" text-xs">EXPLORER</span>
                <ExplorerPopUp 
                    activeAccordions={activeAccordions}
                    setAciveAccordions={setAciveAccordions}
                >
                    <ToolTip text="Views and More Actions..." position="bottom">
                        <Button className="p-[2px]" >
                            <MoreHorizontalIcon size={18}/>
                        </Button>
                    </ToolTip>
                </ExplorerPopUp>
            </div>
            {activeAccordions.openEditors && 
            <NavAccordionButton title="OPEN EDITORS">
                <OpenEditorsAccordionContent />
            </NavAccordionButton>
            }
            {activeAccordions.folders && 
            <NavAccordionButton title="MY-VSCODE-CONFIGS" defaultOpen openFull>
                <NavAccordionFolder title="vscode"> 
                    <NavAccordionFile href="/extensions" title="extensions.json" nested={2}/>
                    <NavAccordionFile href="/settings" title="settings.json" nested={2}/>
                </NavAccordionFolder>
                <NavAccordionFolder title="others">
                    <NavAccordionFile href="/setup" title="setup.md" nested={2}/>
                    <NavAccordionFile href="/mei" title="mei.jpg" nested={2}/>
                </NavAccordionFolder>
            </NavAccordionButton>
            }
            {activeAccordions.timeline && 
            <NavAccordionButton title="TIMELINE">
                <div className="flex  justify-between items-center gap- border border-transparent p-1 ps-3 w-full hover:bg-[var(--theme-nav-menu-hover)] active:border-[var(--theme-accent)]">
                    <div className=" flex items-center gap-2">
                        <div className=" rounded-full border-2 w-[9px] h-[9px] " />
                        <div className=" flex items-center gap-1">
                            <FileIcon text={"extensions.json"}/>
                            <span className=" text-xs font-medium">extensions.js</span>
                        </div>
                    </div>
                    <span className="text-xs text-[var(--theme-muted)]">23/02/24</span>
                </div>     
                <div className="flex  justify-between items-center gap-2 border border-transparent p-1 ps-3 w-full hover:bg-[var(--theme-nav-menu-hover)] active:border-[var(--theme-accent)]">
                    <div className=" flex items-center gap-2">
                        <div className=" rounded-full border-2 w-[9px] h-[9px] " />
                        <div className=" flex items-center gap-1">
                            <FileIcon text={"settings.json"}/>
                            <span className=" text-xs font-medium">settings.js</span>
                        </div>
                    </div>
                    <span className="text-xs text-[var(--theme-muted)]">23/02/24</span>
                </div>    
                <div className="flex  justify-between items-center gap-2 border border-transparent p-1 ps-3 w-full hover:bg-[var(--theme-nav-menu-hover)] active:border-[var(--theme-accent)]">
                    <div className=" flex items-center gap-2">
                        <div className=" rounded-full border-2 w-[9px] h-[9px] " />
                        <div className=" flex items-center gap-1">
                            <FileIcon text={"setup.md"}/>
                            <span className=" text-xs font-medium">setup.md</span>
                        </div>
                    </div>
                    <span className="text-xs text-[var(--theme-muted)]">23/02/24</span>
                </div>    
            </NavAccordionButton>
            }
        </nav>
    )

    
}