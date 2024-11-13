import { Icon } from '@iconify/react';
import HeaderButton from '@/components/VSCode/layout/Header/HeaderButton';
import HeaderHistoryButtons from './HeaderHistoryButtons';
import HeaderWindowButtons from './HeaderWindowButtons';
import HeaderLayoutButtons from './HeaderLayoutButtons';
import HeaderCommandButton from './HeaderCommandButton';

export default function Header(){

  return (
    <header className=" flex items-center min-h-10 w-full">
      <div className=" flex-1 flex justify-start items-center pe-1 h-full">
        <div className=" flex justify-center items-center px-2.5 h-full aspect-square">
          <Icon icon="devicon:vscode" className=" text-lg" />
        </div>
        <div className=" flex items-center">
          <HeaderButton disabled>File</HeaderButton>
          <HeaderButton disabled>Edit</HeaderButton>
          <HeaderButton disabled>Selection</HeaderButton>
          <HeaderButton disabled>View</HeaderButton>
          <HeaderButton disabled>Go</HeaderButton>
          <HeaderButton disabled>Run</HeaderButton>
          <HeaderButton disabled>Terminal</HeaderButton>
          <HeaderButton disabled>Help</HeaderButton>
        </div>     
      </div>
      <div className=" flex-1 flex justify-center items-center gap-2 py-1.5 px-1 h-full">
        <HeaderHistoryButtons />
        <HeaderCommandButton />
      </div>
      <div className=" flex-1 flex justify-end items-center gap-1 pl-1 h-full">
        <HeaderLayoutButtons />
        <HeaderWindowButtons />    
      </div>
    </header>
  )

}