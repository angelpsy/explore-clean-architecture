'use client';
import { useContext } from 'react';

import UIButton from '@/app/ui/button';
import { ThemeContext } from '@/contexts/theme';

export function ToggleTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <UIButton theme={theme} onClick={toggleTheme}>
      {theme}
    </UIButton>
  );
}
