"use client"

import Link, {LinkProps} from 'next/link'; 
import FileIcon from '../../Icons/FileIcon';
import { useNavAccordionFolderContext } from './NavAccordionFolder';

interface NavAccordionFileProps extends LinkProps {
    title?: string
    disabled?: boolean
    nested?: number
}

export default function NavAccordionFile({href = "", title = "", nested = 1, disabled = false} : NavAccordionFileProps){

        const parentOpen = useNavAccordionFolderContext();
        const style = {paddingInlineStart: `${12*nested}px`}

        if(!parentOpen || !open) disabled = true

        return (
        <Link href={href}  tabIndex={-1}>
            <button className={` group flex items-center gap-1 border border-transparent w-full p-1 hover:bg-[#313341] active:bg-[rgb(98,114,164,0.25)] active:border-[#6272a4] ${disabled ? "pointer-events-none" : ""}`} style={style} disabled={disabled} tabIndex={!disabled ? 0 : -1}>
                <FileIcon size={16} text={title}/>
                <span className=" text-xs font-medium whitespace-nowrap overflow-hidden text-ellipsis">{title}</span>
            </button>
        </Link>
    )

}
