/* eslint-disable @next/next/no-img-element */
"use client"

import { GithubIcon, InstagramIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function SocialPopUp({children} : {children?: React.ReactNode}){

    const [isOpen, setIsOpen] = useState(false)
    const navPopUpTriggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        function handleClick (event: MouseEvent) {
            if(isOpen) setIsOpen(false)
        }

        document.addEventListener('click', handleClick);

        return () => {
            document.removeEventListener('click', handleClick);
        }

    }, [isOpen, setIsOpen])

    return (
        <div ref={navPopUpTriggerRef} className=" relative">
            <div onClick={() => setIsOpen(!isOpen)}>
            {children}
            </div>
            <div className={`${isOpen ? "flex " : "hidden "} absolute bottom-0 left-full z-40 flex-col gap-1 py-1 rounded border border-[var(--theme-popup-border)] min-w-max bg-[var(--theme-popup-bg)] shadow-lg text-xs`}>
                <div className=" flex items-center gap-2 px-3">
                    <img src="/images/mei.webp" alt="" className=" rounded-full w-6" />
                    <span>gustpoli</span>
                </div>
                <hr className="border-[var(--theme-foreground)] opacity-25" />
                <div className="flex flex-col mx-1">
                    <a href="https://www.instagram.com/gustpoli/"   
                        target="_blank"
                        className=" flex items-center gap-2 rounded p-1 px-3 hover:bg-[var(--theme-popup-option-hover)]">
                        <InstagramIcon  size={16}/>
                        instagram
                    </a>
                    <a href="https://github.com/gustpoli"
                        target="_blank"
                        rel="noreferrer" 
                        className=" flex items-center gap-2 rounded p-1 px-3 hover:bg-[var(--theme-popup-option-hover)]">                        
                        <GithubIcon  size={16}/>
                        github
                    </a>    
                    <a href="mailto:gustavopolicarporsch@gmail.com"
                        target="_blank"
                        rel="noreferrer" 
                        className=" flex items-center gap-2 rounded p-1 px-3 hover:bg-[var(--theme-popup-option-hover)]">
                        <MailIcon size={16}/>
                        email
                    </a>
                    <a href="https://www.linkedin.com/in/gustavo-policarpo-ricardo-schuaste-6a365b239"
                        target="_blank"
                        rel="noreferrer" 
                        className=" flex items-center gap-2 rounded p-1 px-3 hover:bg-[var(--theme-popup-option-hover)]">
                        <LinkedinIcon size={16}/>
                        linkedin
                    </a>
                </div>
            </div>
        </div>
    )

}