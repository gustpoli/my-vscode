import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"

type FormattedMdProps = {
  mdString: string
}

export default function FormattedMd({ mdString }: FormattedMdProps){

  return (
    <SyntaxHighlighter
      className=" pl-5 pr-0 h-full overflow-y-auto"
      language="md"
      useInlineStyles={false}
      showLineNumbers={true}
    >
      {mdString}
    </SyntaxHighlighter>
  )
}

