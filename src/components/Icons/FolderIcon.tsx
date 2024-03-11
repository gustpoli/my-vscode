import type { LucideProps } from 'lucide-react'

export default function FolderIcon({size = 24, color = "#000", strokeWidth = 2, className, ...rest}: LucideProps){

    return (
        <svg  className={className} fill={color} strokeWidth={strokeWidth} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>folder</title>
            <path d="M10,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z" />
        </svg>
    )

}