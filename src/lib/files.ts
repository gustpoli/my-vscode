import files from "@/data/files.json"
import { FileStructure } from "@/lib/types"

export type FileInfo = {
  name: string
  path: string
}

export function getAllFiles(){
  return readAllFiles(files as FileStructure)
}

export function getFileByPath(path: string){
  const files = getAllFiles()
  return files.find(file => file.path.toLowerCase() === path.toLowerCase()) ?? null
}

/* ReadData */
export function readAllFiles(node: FileStructure, path = ""): FileInfo[] {
  let filesArray: FileInfo[] = []

  if (node.files && Array.isArray(node.files)) {
    filesArray = node.files.map(file => ({
      name: file,
      path: `${path}/${file.substring(0, file.lastIndexOf(".")).toLowerCase()}`
    }))
  }

  for (const key in node) {
    if (node.hasOwnProperty(key) && typeof node[key] === "object" && !Array.isArray(node[key])) {
      const subfolderFiles = readAllFiles(node[key] as FileStructure, `${path}/${key}`)
      filesArray = [...filesArray, ...subfolderFiles]
    }
  }

  return filesArray
}