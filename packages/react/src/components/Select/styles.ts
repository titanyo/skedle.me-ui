import * as Select from '@radix-ui/react-select'
// import * as ScrollArea from '@radix-ui/react-scroll-area'
import { styled } from '../../styles'

export const SelectContainer = styled(Select.Root, {})

export const SelectTrigger = styled(Select.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  fontFamily: '$default',
  fontWeight: '$regular',
  whiteSpace: 'nowrap',
  color: '$gray400',

  '&:disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },

  '&:focus': {
    outline: 0,
    border: '2px solid $yellow500',
  },

  variants: {
    variant: {
      default: {
        gap: '$2',
        padding: '0 $4',
        height: '$12',
        backgroundColor: '$gray900',
        border: '2px solid $gray900',
        fontSize: '$sm',
      },
      embedded: {
        gap: '$1',
        padding: '0',
        height: 'auto',
        backgroundColor: 'transparent',
        border: '2px solid transparent',
        fontSize: '$xs',
      },
    },

    error: {
      true: {
        border: '2px solid $red700',
      },
      false: {},
    },
  },

  defaultVariants: {
    variant: 'default',
    error: false,
  },
})

export const SelectValue = styled(Select.Value, {
  color: '$white',
})

export const SelectIcon = styled(Select.Icon, {})

export const SelectPortal = styled(Select.Portal, {})

export const SelectContent = styled(Select.Content, {
  maxHeight: 'var(--radix-select-content-available-height)',
  overflow: 'hidden',
  borderRadius: '$sm',
  border: '2px solid $gray800',
  backgroundColor: '$gray900',
  zIndex: 10,

  variants: {
    variant: {
      default: {
        width: 'var(--radix-select-trigger-width)',
      },
      embedded: {
        width: 'auto',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const SelectScrollUpButton = styled(Select.ScrollUpButton, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  variants: {
    variant: {
      default: {
        padding: '0 $4',
      },
      embedded: {
        padding: '0 $1',
      },
    },
  },

  defaultVariants: {
    variant: 'default',
  },
})

export const SelectViewport = styled(Select.Viewport, {})

/* TODO: Se for colocar scroll futuramente, usar:
export const ScrollAreaContainer = styled(ScrollArea.Root, {
  width: '100%',
  height: '100%',
})

export const ScrollAreaViewport = styled(ScrollArea.Viewport, {
  width: '100%',
  height: '100%',
})

export const ScrollAreaScrollbar = styled(ScrollArea.Scrollbar, {
  width: '4px',
  padding: '5px 2px',
})

export const ScrollAreaThumb = styled(ScrollArea.Thumb, {
  background: 'rgba(0, 0, 0, 0.3)',
  borderRadius: '3px',
})
 */
