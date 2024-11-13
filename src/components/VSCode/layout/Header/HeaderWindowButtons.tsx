"use client"

import { Icon } from '@iconify/react';
import HeaderButton from "./HeaderButton";
import { useWindowContext } from '@/components/VSCode/Window/WindowContext';
import { useEffect, useState } from 'react';

export default function HeaderWindowButtons() {
  const { isMaximized, setIsMaximized } = useWindowContext();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleWindowClose = () => {
    if (isClient && typeof window !== "undefined") {
      window.close(); 
    }
  };

  return (
    <>
      <HeaderButton 
        className="rounded-none h-full aspect-square transition-colors"
        disabled
      >
        <Icon icon="codicon:chrome-minimize" />
      </HeaderButton>

      <HeaderButton 
        className="rounded-none h-full aspect-square transition-colors"
        onClick={() => setIsMaximized(prev => !prev)}
      >
        {isMaximized
          ? <Icon icon="codicon:chrome-restore" />
          : <Icon icon="codicon:chrome-maximize" />
        }
      </HeaderButton>

      <HeaderButton 
        className="rounded-none h-full aspect-square transition-colors hover:bg-destructive hover:text-destructive-foreground"
        onClick={handleWindowClose}
      >
        <Icon icon="codicon:chrome-close" />
      </HeaderButton>
    </>
  );
}
