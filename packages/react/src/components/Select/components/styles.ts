import * as Select from '@radix-ui/react-select'
import { styled } from '../../../styles'

export const SelectItem = styled(Select.Item, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
  outline: 'none',
  borderBottom: '1px solid $gray800',
  padding: '$4',
  width: 'var(--radix-select-trigger-width) - 1rem',

  '&[data-highlighted]': {
    backgroundColor: '$gray700',
  },
})

export const SelectItemText = styled(Select.ItemText, {})

export const SelectItemIndicator = styled(Select.ItemIndicator, {})

export const CustomText = styled('p', {
  all: 'unset',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$white',
})
