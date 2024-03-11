import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import VSCodeIcon from "@/components/Icons/VSCodeIcon";
import NavMenu from "@/components/layout/NavMenu";
import { NavCommandButton } from "@/components/layout/NavCommand";
import BottomOptions from "@/components/layout/BottomOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My VSCode - Gustavo Policarpo R Schuaste",
  description: "A Visual Studio Code replica showcasing my settings, extensions, and setup details.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${inter.className} flex justify-center items-center max-w-svw max-h-svh w-svw h-svh`}>
        <section className="flex flex-col rounded-lg aspect-video max-w-[95svw] max-h-[95svh] lg:max-w-[85svw] w-full min-h-80 shadow bg-[#282a36] text-[#ebf8f2] overflow-hidden">
            <div className="z-10 flex justify-between items-center gap-3 py-2 px-3 w-full h-10 bg-[#252631] select-none">
              <div className=" w-10">
                <VSCodeIcon size={20} />
              </div>
                <NavCommandButton />
              <div className="flex gap-1 w-10 h-min">
                <button className="rounded-full w-[10px] h-[10px] bg-green-600" disabled/>
                <button className="rounded-full w-[10px] h-[10px] bg-yellow-600" disabled/>
                <button className="rounded-full w-[10px] h-[10px] bg-red-600" disabled/>
              </div>
            </div>
            <div className=" flex flex-1" style={{height: "calc(100% - 64px)"}}>
              <NavMenu />
              {children}
            </div>
            <div className="z-10 flex justify-between items-center pe-2 text-xs bg-[#23242f] select-none">
              <BottomOptions />
            </div>
        </section>
      </body>
    </html>
  );
}
