import fs from 'fs';
import path from 'path';

import FilePage from "@/components/FilePage"
import { HtmlFormatedJson } from '@/components/formattings';

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "My Extensions - Gustavo Policarpo R Schuaste",
    description: "The extensions that I use showcased in a Visual Studio Code replica.",
  }
  

export default function Page(){

    const filePath = path.join(process.cwd(), 'src', 'data', 'extensions.json');
    const extensions = fs.readFileSync(filePath, 'utf-8');
    
    return(
        <FilePage title="extensions.json" path={["vscode"]}>
            <pre className="pb-[100%] whitespace-pre-wrap">
                <code className=" flex flex-col px-2">
                    <HtmlFormatedJson text={extensions}/>
                </code>
            </pre>
        </FilePage>
    )

}

