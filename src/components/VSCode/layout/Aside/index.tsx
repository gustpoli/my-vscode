import { Icon } from '@iconify/react';
import AsideOptionButton from "./AsideOptionButton";
import AsideOption from './AsideOption';

export default function Aside(){

  return (
    <aside className=" flex">
      <AsideOption />
      <div className=" flex flex-col justify-between">
        <div>
          <AsideOptionButton name="explorer" keyCommand={["Control", "Shift", "E"]}>
            <Icon icon="codicon:files" />
          </AsideOptionButton>
          <AsideOptionButton name="search" disabled>
            <Icon icon="codicon:search" />
          </AsideOptionButton>
          <AsideOptionButton name="source-control" disabled>
            <Icon icon="codicon:source-control" />
          </AsideOptionButton>
          <AsideOptionButton name="run-and-debug" disabled>
            <Icon icon="codicon:debug-alt-small" />
          </AsideOptionButton>
          <AsideOptionButton name="extensions" disabled>
            <Icon icon="codicon:extensions" />
          </AsideOptionButton>
          <AsideOptionButton name="live-share" disabled>
            <Icon icon="codicon:live-share" />
          </AsideOptionButton>
        </div>
        <div>
          <button 
            className=" relative flex justify-center items-center w-12 aspect-square text-3xl text-muted hover:text-foreground data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <Icon icon="codicon:account" />
          </button>
          <button 
            className=" relative flex justify-center items-center w-12 aspect-square text-3xl text-muted hover:text-foreground data-[active=true]:text-foreground disabled:opacity-50 disabled:pointer-events-none"
            disabled
          >
            <Icon icon="codicon:settings-gear" />
          </button>
        </div>
      </div>
    </aside>
  )

}
