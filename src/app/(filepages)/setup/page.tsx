import fs from 'fs';
import path from 'path';

import FilePage from "@/components/FilePage"
import { HtmlFormatedMarkdown } from '@/components/formattings';

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "My Setup - Gustavo Policarpo R Schuaste",
  description: "Informations about myt setup showcased in a Visual Studio Code replica.",
}

export default function Page(){

    const filePath = path.join(process.cwd(), 'src', 'data', 'setup.md');
    const settings = fs.readFileSync(filePath, 'utf-8');

    return(
        <FilePage title="setup.md" path={["others"]}>
            <pre className="pb-[100%] whitespace-pre-wrap">
                <code className=" flex flex-col px-2">
                    <HtmlFormatedMarkdown text={settings} />
                </code>
            </pre>
        </FilePage>
    )

}