export default function HtmlFormatedJson({text} : {text: string}) {

    const string = text.trim().split('\n');
    let counter = 0;

    const colors: {[key: number]: string} = {    
        0: "#f8f8f2",
        1: "#ff71c2",
        2: "#8be9ff",
        3: "#50fa7b",
        4: "#9086f9",
        5: "#ffb86c"
    }

    function countTabs(line: string): number{
        const index = line.split('').findIndex(c => c !== ' ')
        return Math.round(index / 4)
    }

    return string.map(  (line, index) => {

        const parts = line.split(":");
        counter++;


        const colorNumber: number = Math.round((countTabs(parts[0])))
        const color = colors[colorNumber]

        return (
            <span className={`relative inline-flex `} key={counter}>
                <span className="flex justify-end min-w-8 mr-2 text-[#6272a4] select-none">{counter}</span>
                <span>
                    <span style={{color: `${parts.length === 2 ? "#8be9ff" : color}`}}>{parts[0]}</span>
                    
                    {parts.length === 2 
                    && <span style={{color: "#ff6d9c"}}>:</span>
                    }
                    
                    {parts.length === 2 
                    && <span style={{color: `${parts.length === 2 && parts[1].trim() !== '{' ? "#f1fa8c" : color}`}}>{parts[1]}</span>
                    }
                </span>
            </span> 
        )
    })
}