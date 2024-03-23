
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "ghost"
}

export default function Button({variant = "ghost", className = "", children, ...rest}: ButtonProps){

    const variantsClasses: {[key: string]: string} = {
        "ghost": "rounded border-0 p-1 bg-transparent text-[var(--theme-foreground)] fill-[var(--theme-foreground)] hover:bg-[var(--theme-hover)] active:bg-[var(--theme-hover2)] active:text-white"
    }

    return (
        <button className={`flex items-center gap-1 ${variantsClasses[variant]} ${className}`} {...rest}>
            {children}
        </button>
    )

}