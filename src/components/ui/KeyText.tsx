import { cn } from "@/lib/utils"

export default function KeyText({ text = "", className }: { text?: string, className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded border border-accent bg-accent/75", className)}>
      <span className=" rounded border py-px px-1 text-xs border-transparent border-b-background">
        {text}
      </span>
    </span>
  );
}
