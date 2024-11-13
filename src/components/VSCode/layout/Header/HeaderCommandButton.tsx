"use client"

import { Icon } from '@iconify/react';
import HeaderButton from '@/components/VSCode/layout/Header/HeaderButton';
import { useCommandContext } from '../../Command/CommandContextProvider';
import { cn } from '@/lib/utils';

export default function HeaderCommandButton(){

  const { isCommandOpen, setIsCommandOpen, setCommandShowType } = useCommandContext()

  function handleClick(){
    setCommandShowType("general")
    setIsCommandOpen(true)
  }

  return (
    <HeaderButton 
      className={cn(
        "flex-1 inline-flex justify-center items-center gap-1.5 rounded-lg border h-full text-sm bg-muted/15 hover:bg-muted/20",
        isCommandOpen && "hidden"
      )}
      onClick={handleClick}
    >
      <Icon icon="codicon:search" className=" text-lg" />
      my-vscode
    </HeaderButton>
  )

}