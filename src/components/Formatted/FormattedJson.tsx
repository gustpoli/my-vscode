import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

type FormattedJsonProps = {
  jsonString: string
}

function FormattedJson({ jsonString }: FormattedJsonProps){

  const jsonObject = JSON.parse(jsonString)
  const formattedJson = JSON.stringify(jsonObject, null, 2)

  return (
    <SyntaxHighlighter
      className=" pl-5 pr-0 h-full overflow-y-auto"
      language="json"
      useInlineStyles={false}
      showLineNumbers={true}
    >
      {formattedJson}
    </SyntaxHighlighter>
  )
}

export default FormattedJson

