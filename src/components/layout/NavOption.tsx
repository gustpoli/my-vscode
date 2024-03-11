
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
              ? " before:absolute before:left-0 before:w-[2px] before:h-full before:bg-[#9e5b8b] bg-[#3c3d51] text-[#f8f8e5]"
              : " text-[#627298] hover:text-[#f8f8e5]"
            }
            relative flex justify-center items-center w-full aspect-square
            ${className}
          `} 
          {...rest}>
            {children}
        </button>
    )

}