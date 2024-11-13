import KeyText from '@/components/ui/KeyText';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className=" flex-1 flex flex-col justify-center items-center">
      <Icon icon="codicon:vscode" className=" size-96 text-black/25" />
      <div className=" flex flex-col gap-4 w-full text-muted font-medium text-nowrap">
        <div className=" flex gap-3">
          <span className=" flex-1 text-right">Show All Commands</span>
          <span className=" flex-1 inline-flex items-center gap-1 text-left text-foreground/65">
            <KeyText text="Ctrl" />
            +
            <KeyText text="Shift" />
            +
            <KeyText text="P" />
          </span>
        </div>
        <div className=" flex gap-3">
          <span className=" flex-1 text-right">Go to File</span>
          <span className=" flex-1 inline-flex items-center gap-1 text-left text-foreground/65">
            <KeyText text="Ctrl" />
            +
            <KeyText text="P" />
          </span>
        </div>
        <div className=" flex gap-3">
          <span className=" flex-1 text-right">Toggle Full Screen</span>
          <span className=" flex-1 inline-flex items-center gap-1 text-left text-foreground/65">
            <KeyText text="Shift" />
            +
            <KeyText text="F11" />
          </span>
        </div>
      </div>
    </div>
  )
}
