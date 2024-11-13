"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { useCommandContext } from "./CommandContextProvider"
import { useWindowContext } from "../Window/WindowContext"
import { useAsideContext } from "../layout/Aside/AsideContext"
import CommandOptionButton from "./CommandOptionButton"
import { useRouter } from "next/navigation"
import KeyText from "@/components/ui/KeyText"
import { FileExtensionIcon } from "@/components/FileExtensionIcon"
import { getAllFiles } from "@/lib/files"

export type FileType = {
  name: string,
  path: string
}

export type CommandType = {
  name: string,
  type: string,
  keys: string[],
  action: () => void
}

export default function Command(){

  const router = useRouter()

  const {isCommandOpen, setIsCommandOpen, commandSearch, setCommandSearch, commandShowType, setCommandShowType} = useCommandContext()
  const {setIsMaximized} = useWindowContext()
  const {setIsOptionOpen, setOptionSelected} = useAsideContext()
  
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const command = useRef<HTMLDivElement>(null)
  const commandInput = useRef<HTMLInputElement>(null)

  const files = useMemo((): FileType[] => getAllFiles(), [])

  const commands = useMemo((): CommandType[] => [
    { 
      name: "Toogle Full Screen",
      type: "View",
      keys: ["Shift", "F11"],
      action: () => setIsMaximized(true)
    },
    { 
      name: "Toogle Primary Side Bar Visibility",
      type: "View",
      keys: ["Ctrl", "B"],
      action: () => setIsOptionOpen(prev => !prev)
    },
    { 
      name: "Show Explorer",
      type: "View",
      keys: ["Ctrl", "Shift", "E"],
      action: () => {
        setOptionSelected("explorer")
        setIsOptionOpen(true)
      }
    }
  ], [setIsMaximized, setIsOptionOpen, setOptionSelected])

  const getFilteredFiles = useCallback((): FileType[] => {
    return files.filter(
      (file) => file.name.toLocaleLowerCase().includes(commandSearch.toLocaleLowerCase().trim())
    )
  }, [files, commandSearch])

  const getFilteredCommands = useCallback((): CommandType[] => {
    return commands.filter(
      (command) => command.name.toLocaleLowerCase().includes(commandSearch.replace('>', '').toLocaleLowerCase().trim())
    )
  }, [commands, commandSearch])

  const getOptionsAmount = useCallback((): number => {
    if (commandSearch.length > 0 && commandSearch[0] === ">") return getFilteredCommands().length
    else if (commandShowType === "general") return getFilteredFiles().length + 2
    else if (commandShowType === "files") return getFilteredFiles().length
    return 0
  }, [commandSearch, commandShowType, getFilteredCommands, getFilteredFiles])

  useEffect(() => {
    if(isCommandOpen && commandInput.current) {
      commandInput.current.focus()
      setActiveIndex(0)
    }
  }, [isCommandOpen, setActiveIndex])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.ctrlKey && event.shiftKey && event.key === "P") {
        event.preventDefault()
        setCommandSearch(">")
        setIsCommandOpen(prev => !prev)
      } else if (event.ctrlKey && event.key === "p") {
        event.preventDefault()
        setCommandShowType("files")
        setIsCommandOpen(prev => !prev)
      }
      if (event.key === "Escape") {
        event.preventDefault()
        setIsCommandOpen(false)
      }

      if (isCommandOpen) {
        if (event.key === "ArrowDown") {
          event.preventDefault()
          setActiveIndex(prev => Math.min(prev + 1, getOptionsAmount() - 1))
        } else if (event.key === "ArrowUp") {
          event.preventDefault()
          setActiveIndex(prev => Math.max(prev - 1, 0))
        }
      }
    }
    
  
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [setIsCommandOpen, setCommandShowType, setCommandSearch, isCommandOpen, activeIndex, getOptionsAmount])

  useEffect(() => {
    if(!isCommandOpen) setCommandSearch("")
  }, [isCommandOpen, setCommandSearch])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (command.current && !command.current.contains(event.target as Node)) {
        setIsCommandOpen(false)
      }
    }

    if (isCommandOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isCommandOpen, setIsCommandOpen])

  useEffect(() => {
    setActiveIndex(0)
  }, [commandSearch, commandShowType])

  return isCommandOpen && (
    <div ref={command} className=" z-10 absolute top-0 left-1/2 -translate-x-1/2 p-2">
      <div className=" rounded-md w-[650px] h-[400px] bg-background shadow-md shadow-black">
        <div className=" p-2">
          <input 
            ref={commandInput}
            type="text"
            className=" rounded-md border py-0.5 px-1 w-full bg-muted/25 !shadow-none placeholder:text-foreground/65"
            placeholder="Search files by name"
            value={commandSearch}
            onInput={(e) => setCommandSearch(e.currentTarget.value)}
          />
        </div>
        <div className=" flex flex-col px-1 overflow-y-auto">
          {commandSearch.length > 0 && commandSearch[0] === ">"
            ?  getFilteredCommands().map((command, index) => (
                <CommandOptionButton
                  key={command.name} 
                  name={command.name}
                  action={() => {
                    command.action()
                    setIsCommandOpen(false)
                  }}
                  command={command.keys.map((key, index) => ( 
                    <span key={index}>
                      {index !==0 && <span className=" mx-0.5">+</span>}
                      <KeyText  
                        text={key} 
                        className="group-data-[active]:bg-muted/25 group-data-[active]:border-muted/25 group-hover:bg-muted/25 group-hover:border-muted/25" 
                      />
                    </span>
                  ))}
                  active={index === activeIndex}
                />
              ))
            : (commandShowType === "files")
              ? getFilteredFiles().map((file, index) => (
                <CommandOptionButton
                  key={file.path} 
                  name={
                    <>
                      <FileExtensionIcon fileName={file.name} className=" text-lg" />
                      {file.name}
                    </>
                  }                  
                  detail={file.path}
                  action={() => {
                    router.push(file.path)
                    setIsCommandOpen(false)
                  }}
                  active={index === activeIndex}
                />
              ))
              : <>
              <CommandOptionButton
                name="Go to file"
                command={["Ctrl", "P"].map((key, index) => ( 
                  <span key={index}>
                    {index !==0 && <span className=" mx-0.5">+</span>}
                    <KeyText  
                      text={key} 
                      className="group-data-[active]:bg-muted/25 group-data-[active]:border-muted/25 group-hover:bg-muted/25 group-hover:border-muted/25" 
                    />
                  </span>
                ))}
                action={() => setCommandShowType("files")}
                active={0 === activeIndex}
              />
              <CommandOptionButton
                name="Show and run commands"
                detail=">"
                command={["Ctrl", "Shift", "P"].map((key, index) => ( 
                  <span key={index}>
                    {index !==0 && <span className=" mx-0.5">+</span>}
                    <KeyText  
                      text={key} 
                      className="group-data-[active]:bg-muted/25 group-data-[active]:border-muted/25 group-hover:bg-muted/25 group-hover:border-muted/25" 
                    />
                  </span>
                ))}
                action={() => setCommandSearch(">")}
                active={1 === activeIndex}
              />
              <hr className=" my-1" />
              {files.map((file, index) => (
                <CommandOptionButton
                  key={file.path} 
                  name={
                    <>
                      <FileExtensionIcon fileName={file.name} className=" text-lg" />
                      {file.name}
                    </>
                  }
                  detail={file.path}
                  action={() => {
                    router.push(file.path)
                    setIsCommandOpen(false)
                  }}
                  active={index+2  === activeIndex}
                />
              ))}
            </>
          }
        </div>
      </div>
    </div>
  )

}
