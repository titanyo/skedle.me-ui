import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const IconButton = styled('button', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',
  cursor: 'pointer',

  svg: {
    width: '$5',
    height: '$5',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray600',
        background: '$yellow500',

        '&:not(:disabled):hover': {
          background: '$yellow700',
        },

        '&:disabled': {
          backgroundColor: '$gray500',
        },
      },

      secondary: {
        color: '$yellow500',
        border: '2px solid $yellow500',

        '&:not(:disabled):hover': {
          color: '$gray600',
          background: '$yellow500',
        },

        '&:disabled': {
          color: '$gray500',
          borderColor: '$gray500',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray500',
        },
      },

      warning: {
        color: '$yellow400',

        '&:not(:disabled):hover': {
          color: '$yellow500',
        },

        '&:disabled': {
          color: '$gray500',
        },
      },

      danger: {
        color: '$red600',

        '&:not(:disabled):hover': {
          color: '$red700',
        },

        '&:disabled': {
          color: '$gray500',
        },
      },

      success: {
        color: '$green400',

        '&:not(:disabled):hover': {
          color: '$green700',
        },

        '&:disabled': {
          color: '$gray500',
        },
      },
    },

    size: {
      xxs: {
        padding: '0',
      },

      xs: {
        padding: '$1',
      },

      sm: {
        padding: '$2',
      },

      md: {
        padding: '$3',
      },

      lg: {
        padding: '$4',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface IconButtonProps extends ComponentProps<typeof IconButton> {
  as?: ElementType
}

IconButton.displayName = 'IconButton'
