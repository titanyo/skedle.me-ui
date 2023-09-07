import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Tag = styled('p', {
  all: 'unset',
  borderRadius: '$full',
  fontWeight: '$bold',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  cursor: 'default',

  variants: {
    disabled: {
      true: {
        color: '$gray100',
        border: '2px solid $gray600',
      },
      false: {
        color: '$gray100',
        background: '$gray600',
      },
    },

    size: {
      sm: {
        fontSize: '$xxs',
        padding: '$2 $3',
      },

      md: {
        fontSize: '$sm',
        padding: '$2 $3',
      },

      lg: {
        fontSize: '$md',
        padding: '$2 $4',
      },
    },
  },

  defaultVariants: {
    disabled: false,
    size: 'md',
  },
})

export interface TagProps extends ComponentProps<typeof Tag> {
  as?: ElementType
}

Tag.displayName = 'Tag'
