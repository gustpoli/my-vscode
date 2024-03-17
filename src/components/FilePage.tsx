
import Link from "next/link"
import FileIcon from "./Icons/FileIcon"
import { ChevronRightIcon, Columns2Icon, GitCompareArrowsIcon, MoreHorizontalIcon, XIcon } from "lucide-react"
import Button from "./Button"
import ToolTip from "./Tooltip"

interface FilePageProps{

    title: string,
    path?: Array<string>,
    children?: React.ReactNode
    className?: string
}

export default function FilePage({title, path, children, className = ""} : FilePageProps){

    return (

        <div className="flex-auto flex flex-col">
            <div className="flex justify-between items-center pe-3 w-full min-h-9 bg-[#191a21] select-none">
                <span className="flex items-center gap-2 border-t border-[#94527e] px-2 h-full text-sm bg-[#282a36] text-[#f8f8f2]">
                    <FileIcon text={title} />
                    <span>{title}</span>
                        <Link href="/" className="rounded p-[2px] hover:bg-[#33343b]" aria-label="Link to the the home page">
                            <ToolTip text="Close">
                                <XIcon size={16} className=" text-[#c5c5c5]" />
                            </ToolTip>
                        </Link> 
                </span>
                <div className="flex gap-1 text-[#c5c5c5]">
                    <Button variant="ghost" disabled>
                        <GitCompareArrowsIcon size={16}/>
                    </Button>
                    <Button variant="ghost" disabled>
                        <Columns2Icon size={16}/>
                    </Button>
                    <Button variant="ghost" disabled>
                        <MoreHorizontalIcon size={16}/>
                    </Button>
                </div>
            </div>
            <div className="flex items-center min-h-7 px-3 w-full select-none">
                <span className="flex items-center gap-1 text-sm text-[#6a6b86]">
                    {path && 
                        path.map((item) => 
                            <span key={item} className="flex items-center gap-1 hover:text-[#f8f8e6]">
                                {item}
                                <ChevronRightIcon size={16}/>    
                            </span>
                        )
                    }
                    <span className="flex items-center gap-1 hover:text-[#f8f8e6]">
                        <FileIcon size={16} text={title}/>
                        {title}
                    </span>
                </span>
            </div>
            <main className={` max-w-full max-h-full flex-1 overflow-auto ${className}`}>
                {children}
            </main>
        </div>

    )

}

