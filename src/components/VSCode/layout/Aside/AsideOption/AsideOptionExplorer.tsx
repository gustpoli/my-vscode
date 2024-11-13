import { FileStructure } from "@/lib/types";
import AsideCollapsable from "../AsideCollapsable";
import AsideFile from "../AsideCollapsable/AsideFile";
import AsideFolder from "../AsideCollapsable/AsideFolder";
import AsideOptionBody from "./AsideOptionLayout/AsideOptionBody";
import AsideOptionHeader from "./AsideOptionLayout/AsideOptionHeader";

import files from "@/data/files.json"

function renderFileStructure(node: FileStructure, path = ""): (JSX.Element|JSX.Element[])[] {
  return Object.entries(node).map(([key, value]) => {
    const currentPath = Array.isArray(value) ? `${path}/` : `${path}/${key}`

    if(Array.isArray(value))
      return value.map((file) => (
        <AsideFile 
          key={file}
          href={currentPath + file.substring(0, file.lastIndexOf(".")).toLowerCase()}
          name={file}
        />
      ))
    else {
      return (
        <AsideFolder
          key={key}
          name={key}
        >
          {renderFileStructure(value as FileStructure, currentPath)}  
        </AsideFolder>
      )
    }

  })
}

export default function AsideOptionExplorer(){

  return(
    <AsideOptionBody>
      <AsideOptionHeader title="Explorer">

      </AsideOptionHeader>
      <AsideCollapsable
        name="my-vscode"
        defaultOpen={true}
      >
        {files && renderFileStructure(files as FileStructure)}
      </AsideCollapsable>
      <AsideCollapsable
        name="outline"
        disabled
      >
      </AsideCollapsable>
      <AsideCollapsable
        name="timeline"
        disabled
        lastInstance
      >
      </AsideCollapsable>
    </AsideOptionBody>
  )

}