import type { LucideProps } from 'lucide-react'

export default function FileOutlineIcon({size = 24, color = "#000", strokeWidth = 2, className, ...rest}: LucideProps){

    return (
        <svg  className={className} fill={color} strokeWidth={strokeWidth} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>file-outline</title><
                path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
        </svg>
    )

}