import { cn } from "@/lib/utils"
import { Icon } from '@iconify/react'

type AsideOptionHeader = {
  title: string,
} & React.HTMLAttributes<HTMLDivElement>

export default function AsideOptionHeader({ title, className, children, ...rest }: AsideOptionHeader){

  return (
    <div 
      className={cn(
        "flex justify-between items-center py-2 ps-6 pe-3 h-10 w-full",
        className
      )}
      {...rest}
    >
      <span className=" text-sm uppercase">{title}</span>
      <button 
        className=" inline-flex justify-center items-center rounded-md p-1 aspect-square text-md hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none"
        disabled  
      >
        <Icon icon="codicon:ellipsis" className="text-md" />
      </button>
      {children}
    </div>
  )

}