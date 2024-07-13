import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const messageVariant = cva(
  "px-3 py-2 rounded-md max-w-3/4 flex",
  {
    variants: {
      variant: {
        user: "bg-accent-foreground text-accent justify-self-end rounded-br-none",
        ai: "bg-accent text-accent-foreground justify-self-start rounded-bl-none",
      },
    }
  }
)

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof messageVariant> {
  asChild?: boolean
}

const Message = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p"
    return (
      <Comp
        className={cn(messageVariant({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Message.displayName = "Message"

export { Message, messageVariant }
