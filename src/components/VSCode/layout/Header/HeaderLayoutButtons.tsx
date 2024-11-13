"use client"

import { Icon } from '@iconify/react';
import HeaderButton from "./HeaderButton";
import { useAsideContext } from '../Aside/AsideContext';

export default function HeaderLayoutButtons(){

  const { isOptionOpen, setIsOptionOpen } = useAsideContext()

  return (
    <>
      <HeaderButton className=" aspect-square px-1" disabled>
        {false 
          ? <Icon icon="codicon:layout-sidebar-left" className=" text-lg" />
          : <Icon icon="codicon:layout-sidebar-left-off" className=" text-lg" />
        }
      </HeaderButton>
      <HeaderButton className=" aspect-square px-1" disabled>
        {false 
          ? <Icon icon="codicon:layout-panel" className=" text-lg" />
          : <Icon icon="codicon:layout-panel-off" className=" text-lg" />
        }        
      </HeaderButton>
      <HeaderButton 
        className=" aspect-square px-1"
        onClick={() => setIsOptionOpen(prev => !prev)} 
      >
        {isOptionOpen 
          ? <Icon icon="codicon:layout-sidebar-right" className=" text-lg" />
          : <Icon icon="codicon:layout-sidebar-right-off" className=" text-lg" />
        }
      </HeaderButton>
      <HeaderButton className=" aspect-square px-1" disabled>
        <Icon icon="codicon:layout" className=" text-lg" />
      </HeaderButton>
    </>
  )

}