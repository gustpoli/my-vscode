
interface NavButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    active?: boolean
    children: React.ReactNode
}

export default function NavOption({active = false, disabled = false, children, className = "", ...rest} : NavButtonProps){

    return (
        <button 
          disabled={disabled}
          className={`
            ${disabled ? " pointer-events-none" : ""}
            ${active
              ? " before:absolute before:left-0 before:w-[2px] before:h-full before:bg-[var(--theme-accent2)] bg-[var(--theme-nav-selected)] text-[var(--theme-foreground)]"
              : " text-[--theme-nav-option] hover:text-[var(--theme-foreground)]"
            }
            relative flex justify-center items-center w-full aspect-square
            ${className}
          `} 
          {...rest}>
            {children}
        </button>
    )

}