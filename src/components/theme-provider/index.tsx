'use client';

import * as React from 'react';
import { useEffect, useState } from 'react';

export interface ThemeProviderProps {
  /** "class" or "data-theme" — defines how theme is attached to document */
  attribute?: 'class' | 'data-theme';
  /** Force theme manually, e.g. from Storybook context */
  forcedTheme?: 'light' | 'dark';
  /** Disable CSS transition flicker when switching */
  disableTransitionOnChange?: boolean;
  /** Children to render inside provider */
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  attribute = 'class',
  forcedTheme,
  disableTransitionOnChange = false,
  children,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Detect system preference if no forced theme
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    const theme = forcedTheme || systemTheme;

    const root = document.documentElement;

    // Optionally disable CSS transitions temporarily
    const disableTransitions = (add: boolean) => {
      if (!disableTransitionOnChange) return;
      root.style.transition = add ? 'none' : '';
    };

    disableTransitions(true);

    if (attribute === 'class') {
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
    } else if (attribute === 'data-theme') {
      root.setAttribute('data-theme', theme);
    }

    // Allow transitions again after a frame
    requestAnimationFrame(() => disableTransitions(false));
  }, [attribute, forcedTheme, disableTransitionOnChange]);

  // Avoid hydration mismatch before mounting
  if (!mounted) return <>{children}</>;

  return <>{children}</>;
};
