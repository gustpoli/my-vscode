import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';

export function FileExtensionIcon({ fileName, className }: { fileName: string, className?: string }): React.ReactNode{

  const extension = fileName.split(".").pop()
  const iconClassName = cn("", className)

  switch(extension){
    case "json":
      return <Icon icon="mdi:code-json" className={iconClassName} color="hsl(43, 96%, 58%)"  />
    case "md":
      return <Icon icon="material-symbols:info" className={iconClassName} color="hsl(207, 90%, 61%)" />
    case "jpg":
    case "jpeg":
    case "png":
    case "webp":
      return <Icon icon="mdi:file-image" className={iconClassName} color="hsl(174, 63%, 40%)" />
    default:
      return ""
  }

}