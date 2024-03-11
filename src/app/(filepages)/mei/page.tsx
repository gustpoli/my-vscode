/* eslint-disable @next/next/no-img-element */
import FilePage from "@/components/FilePage"

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "My Avatar - Gustavo Policarpo R Schuaste",
    description: "The picture of my cat called Mei that I sometimes use as avatar picture showcased in a Visual Studio Code replica.",
  }
  

export default function Page(){

    return(
        <FilePage title="mei.jpg" path={["others"]} className="flex justify-center items-center py-2 px-3">
            <img src="/images/mei.jpg" alt="" className=" h-4/5"/>
        </FilePage>
    )

}

