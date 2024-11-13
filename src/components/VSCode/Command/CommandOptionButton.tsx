import { cn } from "@/lib/utils"
import { useEffect } from "react"

type CommandOptionButton = {
  name: React.ReactNode, 
  detail?: string
  command?: React.ReactNode
  action: () => void
  active?: boolean  
}

export default function CommandOptionButton({ name, detail, command, action, active } : CommandOptionButton){

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (active && event.key === "Enter") {
        event.preventDefault();
        action()
      }
    }
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  })

  return (
    <button
      className={cn(
        "group inline-flex justify-between items-center rounded-md py-0.5 px-3 text-sm hover:bg-accent",
        active && " bg-accent"
      )}
      data-active={active}
      onClick={action}
    >
      <div className=" inline-flex items-center gap-1 ">
        <span className=" inline-flex items-center gap-1.5">{name}</span>
        {detail && <span className=" text-xs opacity-50">{detail}</span>}
      </div>
      {command && <span>{command}</span>}
    </button>
  )

}