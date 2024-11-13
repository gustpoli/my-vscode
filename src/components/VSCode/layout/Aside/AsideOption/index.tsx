"use client"

import { useAsideContext } from "../AsideContext";
import AsideOptionExplorer from "./AsideOptionExplorer";

export default function AsideOption(){

  const { optionSelected, isOptionOpen } = useAsideContext()

  if(!isOptionOpen) return ""

  switch(optionSelected){
    case "explorer":
      return <AsideOptionExplorer />
    default: 
      return ""
  }

}