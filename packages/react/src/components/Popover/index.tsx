import { ComponentProps, ReactNode } from 'react'
import {
  CustomBox,
  PopoverContainer,
  PopoverContent,
  PopoverTrigger,
  PopoverPortal,
} from './styles'

export interface PopoverProps extends ComponentProps<typeof PopoverContent> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  size?: 'sm' | 'md' | 'lg' | 'xl'
  trigger: ReactNode
  children: ReactNode
}

export const Popover = ({
  open,
  onOpenChange,
  size,
  trigger,
  children,
  ...props
}: PopoverProps) => {
  return (
    <PopoverContainer open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverPortal>
        <PopoverContent sideOffset={5} {...props}>
          <CustomBox size={size}>{children}</CustomBox>
        </PopoverContent>
      </PopoverPortal>
    </PopoverContainer>
  )
}

Popover.displayName = 'Popover'
