import Window from "@/components/VSCode/Window";
import { WindowContextProvider } from "@/components/VSCode/Window/WindowContext";
import Header from "@/components/VSCode/layout/Header";
import Footer from "@/components/VSCode/layout/Footer";
import Aside from "./layout/Aside";
import { AsideContextProvider } from "./layout/Aside/AsideContext";
import { CommandContextProvider } from "./Command/CommandContextProvider";
import Command from "./Command";
import File from "./layout/File";

import settings from "@/data/settings.json"

export default function VSCode({children}: { children: React.ReactNode }){

  return (
    <WindowContextProvider>
      <AsideContextProvider>
        <CommandContextProvider>
          <Window>
            <Command />
            <Header />
            <div className=" flex-1 flex overflow-hidden">
              <File className=" flex-1 flex flex-col">
                {children}
              </File>
              <Aside />
            </div>
            {settings["workbench.statusBar.visible"] && <Footer />}
          </Window>
        </CommandContextProvider>
      </AsideContextProvider>
    </WindowContextProvider>
  )

} 