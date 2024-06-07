import { ScrollArea } from "."

import { Placeholder } from "@/lib/storybook-utils"
import { Stack } from "@/primitives/Layout/Stack"
import type { Meta, StoryObj } from "@storybook/react"

const meta = {
  component: ScrollArea,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof ScrollArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: (props) => (
    <Stack overflow="hidden" className="h-96">
      <ScrollArea {...props}>
        <Stack gap="4">
          {Array.from({ length: 20 }).map((_, i) => (
            <Placeholder key={i}>
              Element {i + 1} in a scrollable placeholder
            </Placeholder>
          ))}
        </Stack>
      </ScrollArea>
    </Stack>
  ),
}
