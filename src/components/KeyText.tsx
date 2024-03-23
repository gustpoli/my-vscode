export default function Key({children} : {children?: React.ReactNode}){

    return (
        <span className="rounded border-b-2 p-1 px-[6px] font-normal border-[--theme-background-dark] bg-[var(--theme-popup-bg)] text-[var(--theme-muted)]">
            {children}
        </span>
    )

}