import { FileExtensionIcon } from "@/components/FileExtensionIcon";
import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { LevelContext } from "./AsideFolder";

type AsideFileType = {
  name: string
} & LinkProps

export default function AsideFile({ name, href, ...rest } : AsideFileType){

  const pathname = usePathname()
  const level = useContext(LevelContext);

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 w-full hover:bg-accent data-[active=true]:bg-accent",
      )}
      style={{paddingLeft: `${level*10}px`}}
      data-active={href === pathname}
      {...rest}
    >
      <span className=" min-w-[18px] text-lg">
        <FileExtensionIcon fileName={name} />
      </span>
      {name}
    </Link>
  )

}