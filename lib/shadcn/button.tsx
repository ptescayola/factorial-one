import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import * as React from "react"

export const variants = [
  "default",
  "secondary",
  "outline",
  "destructive",
  "positive",
  "ghost",
] as const

export const sizes = ["default", "sm", "icon", "icon-sm"] as const

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full border-solid text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "border-2 border-primary-intermediate bg-background text-primary-foreground hover:bg-primary",
        secondary:
          "border-2 border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        outline:
          "border-2 border-solid border-secondary-intermediate bg-background text-secondary-foreground hover:bg-secondary",
        destructive:
          "border-2 border-destructive-intermediate bg-destructive text-destructive-foreground hover:bg-destructive/70",
        positive:
          "border-2 border-positive-intermediate bg-positive text-positive-foreground hover:bg-positive/70",
        ghost: "text-intermediate hover:bg-accent hover:text-accent-foreground",
      } satisfies Record<(typeof variants)[number], string>,
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-8 px-3",
        icon: "h-10 w-10",
        "icon-sm": "h-8 w-8",
      } satisfies Record<(typeof sizes)[number], string>,
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }