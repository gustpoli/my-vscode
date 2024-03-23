"use client"

import Link, { LinkProps } from "next/link";
import FileIcon from "../../Icons/FileIcon";

interface NavCommandPageProps extends LinkProps{
    name: string
    path: string
}

export default function NavCommandPageOption({href, name, path} : NavCommandPageProps){

    return (
        <Link href={href} className=" flex items-center gap-1 rounded py-[2px] px-2 hover:bg-[var(--theme-hover)] focus:bg-[--theme-hover] focus:outline-none">
            <FileIcon text={name} />
            <span className="flex items-center gap-2 text-sm">
                <span>{name}</span>
                <span className=" text-xs text-[var(--theme-muted)]">
                    {path}
                </span>
            </span>
        </Link>
    )

}

