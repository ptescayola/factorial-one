import type { Meta, StoryObj } from "@storybook/react"
import { ComponentProps } from "react"
import { Shortcut } from "."

const meta = {
  component: Shortcut,
  parameters: {
    layout: "centered",
    design: {
      type: "figma",
      url: "https://www.figma.com/design/pZzg1KTe9lpKTSGPUZa8OJ/Web-Components?node-id=172-2793",
    },
  },
  tags: ["autodocs"],
  args: {
    keys: ["cmd", "k"],
  } satisfies ComponentProps<typeof Shortcut>,
} satisfies Meta<typeof Shortcut>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleKeys: Story = {
  args: {
    keys: ["↑", "↑", "↓", "↓", "←", "→", "←", "→", "B", "A"],
  },
  decorators: [
    (Story) => (
      <div className="w-32">
        <Story />
      </div>
    ),
  ],
}