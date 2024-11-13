import { FileContent } from "@/components/VSCode/layout/File";
import extensions from "@/data/extensions.json"

export default function Extensions(){

  return (
    <FileContent type="json" json={JSON.stringify(extensions)} />
  )

}