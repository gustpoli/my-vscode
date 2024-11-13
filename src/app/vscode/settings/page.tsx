import { FileContent } from "@/components/VSCode/layout/File";
import settings from "@/data/settings.json"

export default function Extensions(){

  return (
    <FileContent type="json" json={JSON.stringify(settings)} />
  )

}