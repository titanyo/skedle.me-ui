import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
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
        color: '$gray200',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },

      danger: {
        color: '$red600',
        border: '2px solid $red700',

        '&:not(:disabled):hover': {
          background: '$red700',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },
    },

    size: {
      sm: {
        fontSize: '$sm',
        padding: '$2 $4',
      },

      md: {
        fontSize: '$md',
        padding: '$3 $6',
      },

      lg: {
        fontSize: '$md',
        padding: '$4 $8',
      },
    },

    full: {
      true: {
        width: '100%',
      },
      false: {},
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
    full: false,
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
