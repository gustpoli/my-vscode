import { cn } from "@/lib/utils"
import FileHeader from "./FileHeader"
import FileContent from "./FileContext"

type FileType = React.HTMLAttributes<HTMLDivElement>

export default function File({ className, children, ...rest }: FileType){

  return (
    <section
      className={cn(
        "flex flex-col min-w-0",
        className
      )}
      {...rest}
    >
      <FileHeader />
      {children}
    </section>
  )

}

export { FileHeader, FileContent }