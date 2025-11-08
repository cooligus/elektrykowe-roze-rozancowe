import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const linkButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-divine hover:bg-primary/90 hover:shadow-lg hover:scale-105",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        
        // Sacred variants for our rosary site
        sacred: "bg-gradient-heaven text-primary-foreground shadow-divine hover:shadow-lg hover:scale-105 font-semibold",
        divine: "bg-gradient-divine text-primary shadow-peaceful hover:bg-secondary hover:text-secondary-foreground hover:scale-105 border border-secondary/20",
        peaceful: "bg-card text-card-foreground border border-border shadow-peaceful hover:shadow-divine hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-8",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkButtonVariants> {
  asChild?: boolean
}

const LinkButton = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "a"
    return (
      <Comp
        className={cn(linkButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
LinkButton.displayName = "LinkButton"

export { LinkButton, linkButtonVariants as linkVariants }
