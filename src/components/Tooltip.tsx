
interface toolTipProps{
    text?: string
    position?: "top" | "right" | "bottom" | "left" | "bottom-left"
    children: React.ReactNode
    positionerClasses?: string
    className?: string
}

export default function ToolTip({text, position = "right", children, positionerClasses = "", className = ""} : toolTipProps){

    const positionClasses: {[key: string]: string} = {
        "top": " bottom-[100%] left-1/2 translate-x-[-50%] mb-1",
        "right": " top-1/2 left-full translate-y-[-50%] ms-1",
        "bottom": " top-[100%] left-1/2 translate-x-[-50%] mt-1",
        "left": " top-1/2 right-full translate-y-[-50%] me-1",
        "bottom-left": " top-[100%] left-0 mt-1",
    }

    return (
        <div className={` group relative ${positionerClasses}`}>
            {children}
            <span className={`tooltip [@media(hover: none)]:bg-red-50 z-30 absolute hidden group-hover:flex items-center gap-1 rounded border border-[--theme-tooltip-border] p-1 px-2 bg-[var(--theme-tooltip-bg)] text-xs text-nowrap text-[--theme-foreground] ${positionClasses[position]} ${className}`}>
                {text}
            </span>
        </div>
    )

}