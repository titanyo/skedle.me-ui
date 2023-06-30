import * as Switch from '@radix-ui/react-switch'
import { styled } from '../../styles'

export const SwitchContainer = styled(Switch.Root, {
  all: 'unset',
  width: '$8',
  height: '$5',
  backgroundColor: '$black',
  borderRadius: '$full',
  cursor: 'pointer',
  boxSizing: 'border-box',
  border: '2px solid $black',

  '&:focus': {
    boxShadow: '0 0 0 2px $gray950',
    border: '2px solid $yellow500',
  },
})

export const SwitchThumb = styled(Switch.Thumb, {
  all: 'unset',
  width: '$3',
  height: '$3',
  borderRadius: '$full',
  backgroundColor: '$yellow500',
  display: 'block',
  boxShadow: '0 2px 2px $gray950',
  transition: 'transform 200ms',
  transform: 'translateX(0.1rem)',

  '&[data-state="checked"]': {
    transform: 'translateX(0.9rem)',
  },
})
