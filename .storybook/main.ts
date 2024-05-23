import type { StorybookConfig } from "@storybook/react-vite"

const publicBuild = process.env.PUBLIC_BUILD == "true"

const config: StorybookConfig = {
  stories: [
    "../docs/Introduction.mdx",
    "../docs/**/*.mdx",
    {
      directory: "../lib/components",
      titlePrefix: "Components",
    },
    {
      directory: "../lib/primitives",
      titlePrefix: "Primitives",
    },
  ],
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {},
  typescript: {
    reactDocgen: "react-docgen-typescript",
  },
}
export default config
