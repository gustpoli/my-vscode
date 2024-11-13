import FormattedJson from "@/components/Formatted/FormattedJson"
import ImageFileContent from "./ImageFileContent"
import FormattedMd from "@/components/Formatted/FormattedMd"

type FileContentType = {
  type: "json" | "md" | "image",
  json?: string
  md?: string
  src?: string
  alt?: string
}

export default function FileContent({ type, json = "", md = "", src = "", alt = "" }: FileContentType){

  switch(type){
    case "image": 
      return <ImageFileContent src={src} alt={alt} />
    case "json":
      return <FormattedJson jsonString={json} />
    case "md":
      return <FormattedMd mdString={md} />      
  }

}