import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const IconButton = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

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
          background: '$yellow300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$yellow400',
        border: '2px solid $yellow500',

        '&:not(:disabled):hover': {
          background: '$yellow500',
          color: '$gray600',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },

      warning: {
        color: '$yellow400',

        '&:not(:disabled):hover': {
          color: '$yellow500',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },

      danger: {
        color: '$red600',

        '&:not(:disabled):hover': {
          color: '$red700',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },

      success: {
        color: '$green400',

        '&:not(:disabled):hover': {
          color: '$green700',
        },

        '&:disabled': {
          color: '$gray200',
        },
      },
    },

    size: {
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
