
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XIcon } from "lucide-react";
import FileIcon from "@/components/Icons/FileIcon";
import { useNavAccordionButtonContext } from "./NavAccordionButton";

export default function OpenEditorsAccordionContent(){

    const path = usePathname()
    const parentOpen = useNavAccordionButtonContext()

    return (
    <>
        {path === "/extensions" &&
        <div className="ps-5 flex items-center gap-1 border border-transparent p-1 w-full bg-[#313341] active:border-[#6272a4]">
            <Link href="/" className="rounded hover:bg-[#3e404a]" tabIndex={parentOpen ? 0 : -1}>
                <XIcon size={18}/>   
            </Link>
            <div className=" flex items-center gap-1">
                <FileIcon text={"extensions.json"}/>
                <span className=" text-xs font-medium">extensions.js</span>
            </div>
        </div>                    }
        {path === "/settings" &&
        <div className="ps-5 flex items-center gap-1 border border-transparent p-1 w-full bg-[#313341] active:border-[#6272a4]">
            <Link href="/" className="rounded hover:bg-[#3e404a]" tabIndex={parentOpen ? 0 : -1}>
                <XIcon size={18}/>   
            </Link>
            <div className=" flex items-center gap-1">
                <FileIcon text={"settings.json"}/>
                <span className=" text-xs font-medium">settings.js</span>
            </div>
        </div>                            }
        {path === "/setup" &&
        <div className="ps-5 flex items-center gap-1 border border-transparent p-1 w-full bg-[#313341] active:border-[#6272a4]">
            <Link href="/" className="rounded hover:bg-[#3e404a]" tabIndex={parentOpen ? 0 : -1}>
                <XIcon size={18}/>   
            </Link>
            <div className=" flex items-center gap-1">
                <FileIcon text={"setup.md"}/>
                <span className=" text-xs font-medium">setup.md</span>
            </div>
        </div>                        
        }
        {path === "/mei" &&
        <div className="ps-5 flex items-center gap-1 border border-transparent p-1 w-full bg-[#313341] active:border-[#6272a4]">
            <Link href="/" className="rounded hover:bg-[#3e404a]" tabIndex={parentOpen ? 0 : -1}>
                <XIcon size={18}/>   
            </Link>
            <div className=" flex items-center gap-1">
                <FileIcon text={"mei.md"}/>
                <span className=" text-xs font-medium">mei.jpg</span>
            </div>
        </div>                        
        }
    </>
    )

}