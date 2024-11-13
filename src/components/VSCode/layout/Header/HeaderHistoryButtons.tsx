"use client"

import { Icon } from '@iconify/react';
import HeaderButton from './HeaderButton';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useCommandContext } from '../../Command/CommandContextProvider';

export default function HeaderHistoryButtons(){

  const router = useRouter()
  const { isCommandOpen } = useCommandContext()

  return (
    <div className={cn("flex gap-1", isCommandOpen && "hidden")}>
      <HeaderButton className=" aspect-square px-1" onClick={() => router.back()}>
      <Icon icon="codicon:arrow-left" className=" text-lg " />
      </HeaderButton>
      <HeaderButton className=" aspect-square px-1" onClick={() => router.forward()}>
        <Icon icon="codicon:arrow-right" className=" text-lg " />
      </HeaderButton>
    </div>
  )

}