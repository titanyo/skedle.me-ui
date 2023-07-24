import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const ErrorText = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,
  color: '$red600',

  variants: {
    size: {
      xxs: { fontSize: '$xxs' },
      xs: { fontSize: '$xs' },
      sm: { fontSize: '$sm' },
      md: { fontSize: '$md' },
      lg: { fontSize: '$lg' },
      xl: { fontSize: '$xl' },
    },
  },

  defaultVariants: {
    size: 'sm',
  },
})

export interface ErrorTextProps extends ComponentProps<typeof ErrorText> {
  as?: ElementType
}

ErrorText.displayName = 'ErrorText'
