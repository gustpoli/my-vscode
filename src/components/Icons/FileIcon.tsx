import { CodeJsonIcon, FileImageIcon, FileOutlineIcon, LanguageMarkdownIcon, TuneIcon } from '@/components/Icons';

interface FileIconProps {text: string, size?: number, className?: string}

export default function FileIcon({text, size = 16, className} : FileIconProps){

    const iconStyle = {
        minWidth: `${size}px`,
        width: `${size}px`
    }

    const extension = text.split('.')[text.split('.').length-1] ?? null

    if(extension === "json") return <CodeJsonIcon size={size} color="#fbc02d" className={` ${className}`} style={iconStyle}/>
    if(extension === "env") return <TuneIcon size={size} color="#fbc02d" className={` ${className}`} style={iconStyle}/>
    if(extension === "md") return <LanguageMarkdownIcon size={size} color="#42a5f5" className={` ${className}`} style={iconStyle}/>
    if(["png", "jpg", "jpeg", "webp"].includes(extension)) return <FileImageIcon size={size} color="#26a69a" className={` ${className}`} style={iconStyle}/>

    return <FileOutlineIcon size={size} color="#42a5f5" className={` ${className}`} style={iconStyle}/>

}

