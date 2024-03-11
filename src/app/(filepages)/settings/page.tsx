import fs from 'fs';
import path from 'path';

import FilePage from "@/components/FilePage"
import { HtmlFormatedJson } from '@/components/formattings';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "My Settings - Gustavo Policarpo R Schuaste",
  description: "Settings that I use in my code editor showcased in a Visual Studio Code replica.",
}


export default function Page(){

    const filePath = path.join(process.cwd(), 'src', 'data', 'settings.json');
    const settings = fs.readFileSync(filePath, 'utf-8');

    let counter = 0;

    return(
        <FilePage title="settings.json" path={["vscode"]}>
            <pre className="pb-[100%] whitespace-pre-wrap">
                <code className=" flex flex-col px-2">
                    <HtmlFormatedJson text={settings}/>
                </code>
            </pre>
        </FilePage>
    )

}