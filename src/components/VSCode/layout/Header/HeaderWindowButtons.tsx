"use client"

import { Icon } from '@iconify/react';
import HeaderButton from "./HeaderButton";
import { useWindowContext } from '@/components/VSCode/Window/WindowContext';

export default function HeaderWindowButtons(){

  const {isMaximized, setIsMaximized} = useWindowContext()

  return (
    <>
      <HeaderButton 
        className=" rounded-none h-full aspect-square transition-colors"
        disabled
      >
        <Icon icon="codicon:chrome-minimize" />
      </HeaderButton>     
      <HeaderButton 
        className=" rounded-none h-full aspect-square transition-colors"
        onClick={() => setIsMaximized(prev => !prev)}
      >
        {isMaximized
          ? <Icon icon="codicon:chrome-restore" />
          : <Icon icon="codicon:chrome-maximize" />
        }
      </HeaderButton>     
      <HeaderButton 
        className=" rounded-none h-full aspect-square transition-colors hover:bg-destructive hover:text-destructive-foreground"
        onClick={window.close}
      >
        <Icon icon="codicon:chrome-close" />
      </HeaderButton>
    </> 
  )

}