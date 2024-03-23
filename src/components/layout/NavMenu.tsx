"use client"

import { useEffect, useState } from "react"
import NavOption from "./NavOption"

import { MoreHorizontalIcon, BlocksIcon, BugPlayIcon, FilesIcon, GitMergeIcon, SearchIcon, SettingsIcon, UserCircle2Icon } from "lucide-react";
import SocialPopUp from "./SocialPopUp";
import ExplorerMenu from "./ExplorerMenu";
import ToolTip from "../Tooltip";


export default function NavMenu(){  
    const [active, setActive] = useState(true) 

    useEffect(() => {

        function handleNavToggleKeyboarEvent (event: KeyboardEvent) {
            if(event.key === 'b' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault()
                setActive(!active)
            }

        };

        document.addEventListener('keydown', handleNavToggleKeyboarEvent);

        return () => {
            document.removeEventListener('keydown', handleNavToggleKeyboarEvent);
        }

    }, [active])

    return (
        <>
        <nav className="flex flex-col justify-between min-w-12 bg-[var(--theme-nav)] select-none">
            <div className="flex flex-col">
                <ToolTip text="Explorer (Ctrl + b)" position="right">
                    <NavOption active={active} onClick={() => setActive(!active)} aria-label="Open/close the files explorer menu">
                        <FilesIcon size={24} strokeWidth={1.5}/>
                    </NavOption>
                </ToolTip>
                <NavOption disabled className=" hidden sm:flex" aria-label="Open/close the extensions menu">
                    <BlocksIcon size={24} />
                </NavOption>
                <NavOption disabled className=" hidden md:flex" aria-label="Open/close the seach menu">
                    <SearchIcon size={24} className=" scale-x-[-1]" />
                </NavOption>
                <NavOption disabled className=" hidden lg:flex " aria-label="Open/close the git source control menu">
                    <GitMergeIcon size={24} className="rotate-180 scale-x-[-1]" />
                </NavOption>
                <NavOption disabled className=" hidden lg:flex" aria-label="Open/close the run and debug menu">
                    <BugPlayIcon size={24} />
                </NavOption>
                <NavOption disabled className=" flex lg:hidden" aria-label="Open/close the extensions menu">
                    <MoreHorizontalIcon size={24} />
                </NavOption>
            </div>
            <div className="flex flex-col">
                <SocialPopUp>
                    <ToolTip text="Social Links" position="right">
                        <NavOption>
                            <UserCircle2Icon size={24} />
                        </NavOption>
                    </ToolTip>
                </SocialPopUp>
                <NavOption disabled aria-label="Open/close the manage popup menu">
                    <SettingsIcon size={24} />
                </NavOption>
            </div>
        </nav>
        {active && <ExplorerMenu /> }
        </>
    )

}