import { cn } from "@/lib/utils"

type HeaderButtonType = React.ButtonHTMLAttributes<HTMLButtonElement>

export default function FooterButton({ className, children, ...rest }: HeaderButtonType){

  return (
    <button
      className={cn(
        " inline-flex justify-center items-center gap-1 py-0.5 px-1.5 h-full text-sm hover:bg-accent hover:text-accent-foreground disabled:opacity-50 disabled:pointer-events-none",
        className
      )} 
      {...rest}
    >
      {children}
    </button>
  )

}