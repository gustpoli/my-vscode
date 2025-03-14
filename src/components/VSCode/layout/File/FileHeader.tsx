"use client"

import { FileExtensionIcon } from "@/components/FileExtensionIcon"
import { getFileByPath } from "@/lib/files"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import settings from "@/data/settings.json"

export default function FileHeader(){

  const path = usePathname()
  const file = getFileByPath(path)

  const pathParts = path.split("/").splice(1, path.length-1)

  if(!file) return ""

  return (
    <div className=" flex flex-col">
      <div className=" flex justify-between items-center px-2 gap-1">
        <div className=" inline-flex items-center gap-1.5 py-2 px-1 min-w-fit w-40">
          <FileExtensionIcon fileName={file.name} className=" text-lg " />
          {file.name}
          <Link
            href="/"
            className=" inline-flex justify-center items-center ms-auto rounded-md p-0.5 aspect-square text-lg hover:bg-accent hover:text-accent-foreground"
          >
            <Icon icon="codicon:close" />
          </Link>
        </div>
        <div className=" flex items-center gap-1">
          <button
            className=" inline-flex justify-center items-center ms-auto rounded-md p-0.5 aspect-square text-lg hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <Icon icon="codicon:git-compare" />
          </button>
          <button
            className=" inline-flex justify-center items-center ms-auto rounded-md p-0.5 aspect-square text-lg hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <Icon icon="codicon:split-horizontal" />
          </button>
          <button
            className=" inline-flex justify-center items-center ms-auto rounded-md p-0.5 aspect-square text-lg hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <Icon icon="codicon:ellipsis" />
          </button>
        </div>
      </div>
			{settings["breadcrumbs.enabled"] && (
				<div className=" flex items-center ps-4 py-1 text-muted-foreground bg-background">
					{pathParts.map((pathPart, index) => 
						index !== pathParts.length-1
							? (
								<span key={`${index}-${pathPart}`} className=" inline-flex items-center">
									<span>
										{pathPart}
									</span>
								<Icon icon="codicon:chevron-right" className=" mx-0.5" />
							</span>
						)
						: (
							<span key={`${index}-${pathPart}`} className=" inline-flex items-center gap-1.5">
								<FileExtensionIcon fileName={file.name} className=" text-lg " />
								{file.name}
							</span>
						)
					)}
				</div>
			)}
    </div>  
  )

}