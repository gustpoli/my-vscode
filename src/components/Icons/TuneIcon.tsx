import type { LucideProps } from 'lucide-react'

export default function TuneIcon({size = 24, color = "#000", strokeWidth = 2, className, ...rest}: LucideProps){

    return (
        <svg className={className} fill={color} strokeWidth={strokeWidth} width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>tune</title>
            <path d="M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" />
        </svg>
    )

}