import { resolve } from "path";
import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": resolve(__dirname, "../src"),
    };

    // ✅ Add this to define `process.env` for browser
    config.define = {
      ...(config.define || {}),
      "process.env": {},
      "process.browser": true,
    };

    return config;
  },
};

export default config;
