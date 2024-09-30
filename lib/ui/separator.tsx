import { cn } from "@/lib/utils.ts"
import React, { forwardRef } from "react"

type SeparatorProps = {
  bare?: boolean
} & React.HTMLProps<HTMLDivElement>

export const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  function Separator({ bare = false, ...rest }, ref) {
    return (
      <div
        ref={ref}
        role="separator"
        className={cn("h-[1px] w-full", !bare ? "my-4" : undefined)}
        style={{
          backgroundImage:
            "repeating-linear-gradient(to right, hsl(var(--neutral-30)) 0, hsl(var(--neutral-30)) 3px, transparent 3px, transparent 7px)",
        }}
        {...rest}
      />
    )
  }
)
