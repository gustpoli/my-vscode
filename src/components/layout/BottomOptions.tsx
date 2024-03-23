"use client"

import { AlertTriangleIcon, BellIcon, CheckCheckIcon, ChevronsRightLeftIcon, GitBranchIcon, XCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "../Button";

export default function BottomOptions(){

    const path = usePathname()

    return (
        <>
            <div className=" flex gap-1">
                <button className="h-full p-1 px-2 bg-[var(--theme-bottom-button)] text-[var(--theme-bottom-button-foreground)] hover:text-[var(--theme-foreground)] " disabled aria-label="Open the remote window options">
                  <ChevronsRightLeftIcon size={16}/>
                </button>
                <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Open the github branch selector">
                  <GitBranchIcon size={16} />
                  master*
                </Button>
                <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Open the console problems option">
                  <XCircleIcon size={16} />
                  0
                  <AlertTriangleIcon size={16} />
                  0
                  </Button>
              </div>
              <div className="flex gap-1">
                {path !== "/" && <>
                    <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Open the select identation popup">
                        Spaces: {path === "/setup" ? '2' : '4'}
                      </Button>
                    <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Open the select encoding popup">UTF-8</Button>
                    <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Open to select end of line sequence">LF</Button>
                    <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Opon the prettier output on vscode console">
                      <CheckCheckIcon  size={16} />
                      Prettier
                    </Button>
                </>}
                <Button className=" rounded-none text-[var(--theme-foreground)]" disabled aria-label="Open/close the notifications popup menu"> 
                  <BellIcon size={16}/>
                </Button>
              </div>
        </>
    )

}