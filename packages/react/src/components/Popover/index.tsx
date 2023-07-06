import { ComponentProps, forwardRef, ElementRef, ReactNode } from 'react'
import { CustomBox, PopoverTrigger } from './styles'

import * as Popover from '@radix-ui/react-popover'

export const PopoverContainer = Popover.Root

export { PopoverTrigger }

export interface PopoverContainerProps
  extends ComponentProps<typeof Popover.Root> {}

export interface PopoverTriggerProps
  extends ComponentProps<typeof Popover.Trigger> {}

export interface PopoverContentProps
  extends ComponentProps<typeof Popover.Content> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
}

export const PopoverContent = forwardRef<
  ElementRef<typeof Popover.Content>,
  PopoverContentProps
>(({ size, children, ...props }: PopoverContentProps, ref) => {
  return (
    <Popover.Portal>
      <Popover.Content sideOffset={5} {...props} ref={ref}>
        <CustomBox size={size}>{children}</CustomBox>
      </Popover.Content>
    </Popover.Portal>
  )
})

PopoverContent.displayName = 'PopoverContent'
