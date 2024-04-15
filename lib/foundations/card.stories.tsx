import type { Meta, StoryObj } from "@storybook/react"

import { Button } from "@/foundations/button"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card"

const meta = {
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  render: () => {
    return (
      <Card>
        <CardContent>This is a basic card</CardContent>
      </Card>
    )
  },
}

export const WithTitle: Story = {
  render: () => {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Card title</CardTitle>
          <CardDescription>Description of the title</CardDescription>
        </CardHeader>
        <CardContent>This is a card with a title</CardContent>
      </Card>
    )
  },
}

export const WithFooter: Story = {
  render: () => {
    return (
      <Card>
        <CardContent>This is a card with a footer</CardContent>
        <CardFooter>
          <Button className="w-full">Clock in</Button>
        </CardFooter>
      </Card>
    )
  },
}
