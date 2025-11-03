import process from "process";
(window as any).process = process;

import type { Preview } from '@storybook/react';
import '@/styles/globals.css';
import { ThemeProvider } from "../src/components/theme-provider";

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for stories',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light Mode' },
        { value: 'dark', title: 'Dark Mode' },
      ],
      dynamicTitle: true,
    },
  },
  viewport: {},
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#0b0b0b' },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile (375)',
          styles: { width: '375px', height: '812px' },
          type: 'mobile',
        },
        tablet: {
          name: 'Tablet (768)',
          styles: { width: '768px', height: '1024px' },
          type: 'tablet',
        },
        smallDesktop: {
          name: 'Desktop (1024)',
          styles: { width: '1024px', height: '800px' },
          type: 'desktop',
        },
        largeDesktop: {
          name: 'Desktop (1280)',
          styles: { width: '1280px', height: '800px' },
          type: 'desktop',
        },
      },
    },
  },

  decorators: [
    (Story, context) => {
      const currentTheme = context.globals.theme || 'light';

      return (
        <html lang="en" suppressHydrationWarning>
          <body
            style={{
              backgroundColor: currentTheme === 'light' ? '#ffffff' : '#121212',
            }}
          >
            <ThemeProvider
              attribute="class"
              forcedTheme={currentTheme}
              disableTransitionOnChange
            >
              <Story {...context} />
            </ThemeProvider>
          </body>
        </html>
      );
    },
  ],
};

export default preview;
