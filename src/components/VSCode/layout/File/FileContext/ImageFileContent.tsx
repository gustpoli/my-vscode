"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

/* eslint-disable @next/next/no-img-element */
type ImageFileContent = {
  src?: string,
  alt?: string
}

const zoom = {
  max: 500,
  min: 10,
  variation: 10
}

export default function ImageFileContent({ src, alt }: ImageFileContent) {
  const [currentZoom, setCurrentZoom] = useState<number>(85)
  const [zoomIn, setZoomIn] = useState<boolean>(true)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Control" && isHovered) {
        setZoomIn(false)
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "Control" && isHovered) {
        setZoomIn(true)
      }
    }

    function handleWheel(event: WheelEvent) {
      if (event.ctrlKey && isHovered) {
        event.preventDefault()
        setCurrentZoom((prevZoom) => {
          const newZoom = prevZoom + (event.deltaY < 0 ? zoom.variation : -zoom.variation)
          return Math.max(zoom.min, Math.min(newZoom, zoom.max))
        })
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)
    window.addEventListener("wheel", handleWheel, { passive: false })

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
      window.removeEventListener("wheel", handleWheel)
    }
  }, [isHovered])

  function handleClick(){
    if(isHovered)         
      setCurrentZoom((prevZoom) => {
        const newZoom = prevZoom + (zoomIn ? zoom.variation : -zoom.variation)
        return Math.max(zoom.min, Math.min(newZoom, zoom.max))
      })
  }

  return (
    <div
      className={cn(
        "flex justify-center items-center w-full h-full overflow-auto",
        zoomIn ? "cursor-zoom-in" : "cursor-zoom-out"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      <img 
        src={src} 
        alt={alt}
        className=" object-cover" 
        style={{ height: `${currentZoom}%` }} 
      />
    </div>
  )
}
