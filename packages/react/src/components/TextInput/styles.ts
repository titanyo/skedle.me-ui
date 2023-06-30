import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $gray900',
  display: 'flex',
  alignItems: 'center',

  padding: '0 $4',
  height: '$12',

  '&:has(input:focus)': {
    border: '3px solid $yellow500',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  variants: {
    error: {
      true: {
        border: '3px solid $red700',
      },
      false: {},
    },
  },

  defaultVariants: {
    error: false,
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: '$regular',
})

export const LeftContainer = styled('div', {
  marginRight: '$2',
})

export const RightContainer = styled('div', {
  marginLeft: '$2',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$white',
  fontWeight: '$regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray400',
  },
})
