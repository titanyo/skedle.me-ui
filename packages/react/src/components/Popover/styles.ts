import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../styles'

export const PopoverContainer = styled(Popover.Root, {})

export const PopoverTrigger = styled(Popover.Trigger, {
  all: 'unset',
  display: 'flex',
  flex: '1',
  width: '100%',
  height: '100%',
})

export const PopoverPortal = styled(Popover.Portal, {})

export const PopoverContent = styled(Popover.Content, {})

export const CustomBox = styled('div', {
  borderRadius: '$md',
  backgroundColor: '$gray600',
  border: '1px solid $gray500',

  variants: {
    size: {
      sm: {
        padding: '$1 $2',
      },

      md: {
        padding: '$2 $4',
      },

      lg: {
        padding: '$3 $6',
      },

      xl: {
        padding: '$4 $8',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
