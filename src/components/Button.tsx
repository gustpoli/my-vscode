
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: "ghost"
}

export default function Button({variant = "ghost", className = "", children, ...rest}: ButtonProps){

    const variantsClasses: {[key: string]: string} = {
        "ghost": "rounded border-0 p-1 bg-transparent text-[#c5c5c5] fill-[#c5c5c5] hover:bg-[#35363c] active:bg-[#383a42] active:text-white"
    }

    return (
        <button className={`flex items-center gap-1 ${variantsClasses[variant]} ${className}`} {...rest}>
            {children}
        </button>
    )

}