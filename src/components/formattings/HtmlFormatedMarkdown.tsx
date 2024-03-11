const mkstyles: {[key: string]: string} = {
    "heading": "font-bold text-[#bd93f9]",
    "bold": "font-bold text-[#ffb86c]",
    "unorderedList": "text-[#f8f8f2]",
    "default": "text-[#f8f8f2]"
}

export default function HtmlFormatedMarkdowm({text}: {text: string}){

    const string = text.trim().split('\n');
    let lineNumber = 0;
    let classes: string;

    return string.map((line:string) => {
        lineNumber++

        const trimmedLine  = line.trim()

        classes = mkstyles.default
        if(trimmedLine.startsWith('#')) classes = mkstyles.heading
        else if(trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) classes = mkstyles.bold
        else if(trimmedLine.startsWith('-')) classes = mkstyles.unorderedList

        return (
            <span className="relative inline-flex" key={lineNumber}>
                <span className="flex justify-end min-w-8 mr-2 text-[#6272a4] select-none">{lineNumber  }</span>
                <span>
                    <span className={`${classes}`}>{line}</span>
                </span> 
            </span>
        )
    })


}