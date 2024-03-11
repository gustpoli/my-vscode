"use client"

import { useState, useEffect, useRef } from "react";

import { SearchIcon } from "lucide-react";
import NavCommandPageOption from "./NavCommandPageOption";
import ToolTip from "@/components/Tooltip";


const pages = [
    {
        href: "/extensions",
        name: "extensions.json",
        folder: "vscode" ,
        getPath: function() {
            return `${this.folder}/${this.name}`
        }
    },
    {
        href: "/settings",
        name: "settings.json",
        folder: "vscode",
        getPath: function() {
            return `${this.folder}/${this.name}`
        }
    },
    {
        href: "/setup",
        name: "setup.md",
        folder: "others",
        getPath: function() {
            return `${this.folder}/${this.name}`
        }
    },
    {
        href: "/mei",
        name: "mei.png",
        folder: "others",
        getPath: function() {
            return `${this.folder}/${this.name}`
        }
    }
]

export default function NavCommandButton(){

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")

    const keyDownEvent = (event: React.KeyboardEvent<HTMLButtonElement>) => {
        if(event.code === 'arrowUp') console.log(event.code)
    };

    useEffect(() => {

        if (open && inputRef.current) {
            inputRef.current.focus();
          }

        function handleClick (event: MouseEvent) {
            if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) setOpen(false)
            else {
                setOpen(true)
            }        
        }

        function handleCommandKeyboarOpenEvent (event: KeyboardEvent) {

            if(open && (event.key === 'Escape' || event.key === 'Esc')){
                setOpen(false)
                return
            }

            if(event.key === 'p' && (event.ctrlKey || event.metaKey)) {
                event.preventDefault()
                setOpen(!open)
            }

            if(open){

                if(event.key === 'ArrowUp'){

                    event.preventDefault();
                    let focusedElement = document.activeElement as HTMLElement;

                    if(focusedElement.tagName !== "INPUT")
                        focusedElement = focusedElement.previousElementSibling as HTMLElement;
        
                    if (focusedElement && focusedElement.focus) 
                        focusedElement.focus()
                    else inputRef.current?.focus()
                        
                } else if (event.key === 'ArrowDown') {

                    event.preventDefault();
                    let focusedElement = document.activeElement as HTMLElement;

                    if(focusedElement.tagName === "INPUT")
                        focusedElement = focusedElement.nextElementSibling?.firstChild as HTMLElement
                    else 
                        focusedElement = focusedElement.nextElementSibling as HTMLElement
                    if (focusedElement && focusedElement.focus)
                        focusedElement.focus()


                }
            }
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleCommandKeyboarOpenEvent);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleCommandKeyboarOpenEvent);
        }

    }, [open])

    return (
        <div className="relative">
            <ToolTip text="Search files on my-vscode-configs - Visual Studio Code" position="bottom">
                <button ref={buttonRef} className=" flex justify-center items-center gap-2 border border-[#4a4b54] rounded py-[2px] w-64 bg-[#33343d] " onKeyDown={(e) => keyDownEvent(e)}>
                    <SearchIcon size={18} color={"#9fa0a1"} />
                    <span className=" text-sm text-nowrap text-white select-none">my-vscode-configs</span>
                </button>
            </ToolTip>
            <div className={`${open ? "flex " : "hidden "} z-10 absolute top-[-1px] left-1/2 translate-x-[-50%] flex flex-col rounded p-2 max-w-[150%]: w-96 bg-[#21232d] shadow-md cursor-auto`}>
                <input ref={inputRef} className="rounded border border-[#42a5f5] py-1 px-2 bg-transparent text-sm " type="text" placeholder="Search file by name" value={search} onChange={(e) => setSearch(e.currentTarget.value)}/>

                <div className="flex flex-col mt-2" onClick={() => {setOpen(false)}}>
                    {pages.map((page) => {
                        if(page.getPath().includes(search))
                            return <NavCommandPageOption key={page.href} href={page.href} name={page.name} path={page.getPath()} />
                    })}
                </div>
            </div>
        </div>
    )

}