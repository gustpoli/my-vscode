"use client"

import { AlertTriangleIcon, BellIcon, CheckCheckIcon, ChevronsRightLeftIcon, GitBranchIcon, XCircleIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Button from "../Button";

export default function BottomOptions(){

    const path = usePathname()

    return (
        <>
            <div className=" flex gap-1">
                <span className="h-full p-1 px-2 bg-[#c5a0fa] text-[#191a21] hover:text-white">
                  <ChevronsRightLeftIcon size={16}/>
                </span>
                <Button className=" rounded-none text-[#f8f8f2]" disabled>
                  <GitBranchIcon size={16} />
                  master*
                </Button>
                <Button className=" rounded-none text-[#f8f8f2]" disabled>
                  <XCircleIcon size={16} />
                  0
                  <AlertTriangleIcon size={16} />
                  0
                  </Button>
              </div>
              <div className="flex gap-1">
                {path !== "/" && <>
                    <Button className=" rounded-none text-[#f8f8f2]" disabled>
                        Spaces: {path === "/setup" ? '2' : '4'}
                      </Button>
                    <Button className=" rounded-none text-[#f8f8f2]" disabled>UTF-8</Button>
                    <Button className=" rounded-none text-[#f8f8f2]" disabled>LF</Button>
                    <Button className=" rounded-none text-[#f8f8f2]" disabled>
                      <CheckCheckIcon  size={16}/>
                      Prettier
                    </Button>
                </>}
                <Button className=" rounded-none text-[#f8f8f2]" disabled>
                  <BellIcon  size={16}/>
                </Button>
              </div>
        </>
    )

}