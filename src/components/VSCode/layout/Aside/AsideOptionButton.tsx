"use client"

import { useCallback, useEffect } from "react"
import { AsideOptionsType, useAsideContext } from "./AsideContext"

type AsideOptionButtonType = {
  name: AsideOptionsType
  keyCommand?: string[]|null
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export default function AsideOptionButton({ name, keyCommand = null, children, ...rest } : AsideOptionButtonType){

  const { isOptionOpen, setIsOptionOpen, optionSelected, setOptionSelected } = useAsideContext()
  const isActive = optionSelected === name && isOptionOpen
  
  const handleAction = useCallback(() => {
    if (optionSelected === name) {
      setIsOptionOpen(prev => !prev)
    } else {
      setOptionSelected(name)
      setIsOptionOpen(true)
    }
  }, [optionSelected, name, setIsOptionOpen, setOptionSelected])
  
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (keyCommand) {
        const isMatch = keyCommand.every(
          key => 
            (key === "Control" && event.ctrlKey) ||
            (key === "Shift" && event.shiftKey) ||
            (event.key === key)
        );
        if (isMatch) {
          event.preventDefault();
          handleAction();
        }
      }
    }
  
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [keyCommand, handleAction])

  return (
    <button 
      className=" relative flex justify-center items-center w-12 aspect-square text-3xl text-muted hover:text-foreground data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none"
      data-active={isActive}
      onClick={handleAction}
      {...rest}
    >
      {children}
      {isActive && <span className=" absolute top-0 right-0 w-px h-full bg-foreground"></span>}
    </button>
  )

}