import * as Popover from '@radix-ui/react-popover'
import { styled } from '../../styles'

export const PopoverTrigger = styled(Popover.Trigger, {
  all: 'unset',
})

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
