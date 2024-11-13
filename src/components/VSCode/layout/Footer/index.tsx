import { Icon } from '@iconify/react';
import FooterButton from "./FooterButton";

export default function Footer(){

  return (
    <footer className=" flex justify-between items-center min-h-8 w-full">
      <div className=" flex h-full">
        <FooterButton className=" px-2" disabled>
          <Icon icon="codicon:remote" className=" text-lg" />
        </FooterButton>
        <FooterButton disabled>
          <span className=" inline-flex items-center gap-0.5">
            <Icon icon="lucide:x-circle" className="text-lg" />
            0
          </span>
          <span className=" inline-flex items-center gap-0.5">
            <Icon icon="codicon:warning" className="text-lg" />
            0
          </span>
        </FooterButton>
        <FooterButton className=" gap-0.5" disabled>
          <Icon icon="codicon:radio-tower" className=" text-lg" />
          0
        </FooterButton>
      </div>
      <div className=" flex h-full">  
        <FooterButton className=" px-2" disabled>
          <Icon icon="codicon:bell" className=" text-lg" />
        </FooterButton>
      </div>
     </footer>
  )

}