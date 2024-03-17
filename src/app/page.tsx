import VSCodeFlatIcon from "@/components/Icons/VSCodeFlatIcon";
import Key from "@/components/KeyText";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col justify-evenly items-center gap-5 p-6 overflow-hidden select-none">
      <VSCodeFlatIcon className=" max-w-[85%] w-60 h-auto" color="#1c1d26"/>
      <div className="hidden sm:flex flex-col gap-3 w-full text-xs font-medium text-[#8c8d90] text-nowrap">
        <div className=" flex items-center gap-2">
          <span className="flex-1 flex justify-end items-center">Go to file</span>
          <span className="flex-1 flex items-center gap-1"><Key>Ctrl</Key> + <Key>p</Key></span>
        </div>
        <div className=" flex items-center gap-2">
          <span className="flex-1 flex justify-end items-center">Toggle explorer</span>
          <span className="flex-1 flex items-center gap-1 "><Key>Ctrl</Key> + <Key>b</Key></span>
        </div>      
      </div>
    </main>
  );
}
