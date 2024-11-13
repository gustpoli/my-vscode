import { cn } from "@/lib/utils"

type HeaderButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function HeaderButton({ className, children, ...rest }: HeaderButtonType){

  return (
    <button
      className={cn(
        " inline-flex justify-center items-center rounded-md py-0.5 px-2.5 text-md hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none",
        className
      )} 
      {...rest}
    >
      {children}
    </button>
  )

}